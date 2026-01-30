import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Configuración de variables de entorno
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DIST_PATH = path.resolve(__dirname, '../dist')

const app = express()
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Servir archivos estáticos del Frontend (Vite build)
if (fs.existsSync(DIST_PATH)) {
    console.log(`📂 Sirviendo archivos estáticos desde: ${DIST_PATH}`)
    app.use(express.static(DIST_PATH))
} else {
    console.warn(`⚠️ Carpeta dist no encontrada en: ${DIST_PATH}`)
}

// ============ MODELOS DE MONGODB ============

// Esquema de Reservas
const reservationSchema = new mongoose.Schema({
    nombreCompleto: { type: String, required: true },
    programaAcademico: { type: String, required: true },
    fecha: { type: String, required: true },
    horaInicio: { type: String, required: true },
    horaFin: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

// Mapear _id a id para compatibilidad con el frontend
reservationSchema.virtual('id').get(function () {
    return this._id.toHexString()
})

const Reservation = mongoose.model('Reservation', reservationSchema)

// Esquema de Préstamos
const prestamoSchema = new mongoose.Schema({
    nombreDocente: { type: String, required: true },
    programaAcademico: { type: String, required: true },
    equipoPrestado: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

prestamoSchema.virtual('id').get(function () {
    return this._id.toHexString()
})

const Prestamo = mongoose.model('Prestamo', prestamoSchema)

// ============ CONEXIÓN A MONGODB ============
const connectDB = async () => {
    console.log('⏳ Intentando conectar a MongoDB Atlas...')
    if (!MONGODB_URI) {
        console.error('❌ ERROR: MONGODB_URI no está definida. Verifica las variables de entorno en Render.')
        return
    }

    try {
        await mongoose.connect(MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Tiempo de espera de 5 segundos
            connectTimeoutMS: 10000,
        })
        console.log('✅ Conectado exitosamente a MongoDB Atlas')
    } catch (err) {
        console.error('❌ ERROR FATAL de conexión a MongoDB:', err.message)
        console.error('Detalles:', err)
    }
}

connectDB()

// Monitorear eventos de conexión
mongoose.connection.on('error', err => {
    console.error('❌ Error persistente en MongoDB:', err)
})

mongoose.connection.on('disconnected', () => {
    console.warn('⚠️ MongoDB desconectado. Intentando reconectar...')
})

// ============ API ENDPOINTS ============

// Status check
app.get('/api/status', (req, res) => {
    console.log('📡 Status check solicitado')
    res.json({
        status: 'online',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        timestamp: new Date()
    })
})

// Reservations
app.get('/api/reservations', async (req, res) => {
    try {
        console.log('📥 Obteniendo reservas...')
        const reservations = await Reservation.find().sort({ fecha: 1, horaInicio: 1 })
        res.json(reservations)
    } catch (err) {
        console.error('❌ Error en GET /api/reservations:', err)
        res.status(500).json({ message: 'Error al obtener reservas', error: err.message })
    }
})

app.post('/api/reservations', async (req, res) => {
    const { nombreCompleto, programaAcademico, fecha, horaInicio, horaFin } = req.body
    console.log(`📤 Creando reserva para: ${nombreCompleto}`)

    if (!nombreCompleto || !programaAcademico || !fecha || !horaInicio || !horaFin) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' })
    }

    if (horaInicio >= horaFin) {
        return res.status(400).json({ message: 'La hora de fin debe ser posterior a la hora de inicio' })
    }

    try {
        // Verificar solapamiento
        const overlap = await Reservation.findOne({
            fecha,
            $or: [
                { horaInicio: { $lt: horaFin, $gte: horaInicio } },
                { horaFin: { $gt: horaInicio, $lte: horaFin } },
                { horaInicio: { $lte: horaInicio }, horaFin: { $gte: horaFin } }
            ]
        })

        if (overlap) {
            console.warn('⚠️ Conflicto de horario detectado')
            return res.status(409).json({ message: 'Conflicto de horario detectado.' })
        }

        const newReservation = new Reservation({
            nombreCompleto,
            programaAcademico,
            fecha,
            horaInicio,
            horaFin
        })

        await newReservation.save()
        console.log('✅ Reserva guardada con éxito')
        res.status(201).json(newReservation)
    } catch (err) {
        console.error('❌ Error en POST /api/reservations:', err)
        res.status(500).json({ message: 'Error al crear reserva', error: err.message })
    }
})

app.delete('/api/reservations/:id', async (req, res) => {
    try {
        console.log(`🗑️ Eliminando reserva: ${req.params.id}`)
        const result = await Reservation.findByIdAndDelete(req.params.id)
        if (result) {
            return res.json({ message: 'Reserva eliminada' })
        }
        res.status(404).json({ message: 'No encontrada' })
    } catch (err) {
        console.error('❌ Error en DELETE /api/reservations:', err)
        res.status(500).json({ message: 'Error al eliminar reserva' })
    }
})

// Préstamos
app.get('/api/prestamos', async (req, res) => {
    try {
        console.log('📥 Obteniendo préstamos...')
        const prestamos = await Prestamo.find().sort({ createdAt: -1 })
        res.json(prestamos)
    } catch (err) {
        console.error('❌ Error en GET /api/prestamos:', err)
        res.status(500).json({ message: 'Error al obtener préstamos', error: err.message })
    }
})

app.post('/api/prestamos', async (req, res) => {
    try {
        console.log('📤 Registrando nuevo préstamo')
        const newPrestamo = new Prestamo(req.body)
        await newPrestamo.save()
        res.status(201).json(newPrestamo)
    } catch (err) {
        console.error('❌ Error en POST /api/prestamos:', err)
        res.status(500).json({ message: 'Error al registrar préstamo' })
    }
})

app.delete('/api/prestamos/:id', async (req, res) => {
    try {
        console.log(`🗑️ Eliminando préstamo: ${req.params.id}`)
        const result = await Prestamo.findByIdAndDelete(req.params.id)
        if (result) {
            return res.json({ message: 'Préstamo eliminado' })
        }
        res.status(404).json({ message: 'No encontrado' })
    } catch (err) {
        console.error('❌ Error en DELETE /api/prestamos:', err)
        res.status(500).json({ message: 'Error al eliminar préstamo' })
    }
})

// Manejo de rutas del Frontend (SPA)
app.get('*', (req, res) => {
    const indexPath = path.join(DIST_PATH, 'index.html')
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath)
    } else {
        res.status(404).send('La aplicación está en mantenimiento. Por favor espera a que termine el build en Render.')
    }
})

app.listen(PORT, () => {
    console.log(`🚀 Servidor unificado corriendo en puerto ${PORT}`)
})


