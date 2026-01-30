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
const DIST_PATH = path.join(__dirname, '../dist')

const app = express()
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Servir archivos estáticos del Frontend (Vite build)
if (fs.existsSync(DIST_PATH)) {
    app.use(express.static(DIST_PATH))
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
})

// Mapear _id a id para compatibilidad con el frontend
reservationSchema.virtual('id').get(function () {
    return this._id.toHexString()
})
reservationSchema.set('toJSON', { virtuals: true })

const Reservation = mongoose.model('Reservation', reservationSchema)

// Esquema de Préstamos
const prestamoSchema = new mongoose.Schema({
    nombreDocente: { type: String, required: true },
    programaAcademico: { type: String, required: true },
    equipoPrestado: { type: String, required: true },
    fecha: { type: String, required: true },
    hora: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

prestamoSchema.virtual('id').get(function () {
    return this._id.toHexString()
})
prestamoSchema.set('toJSON', { virtuals: true })

const Prestamo = mongoose.model('Prestamo', prestamoSchema)

// ============ CONEXIÓN A MONGODB ============
if (MONGODB_URI) {
    mongoose.connect(MONGODB_URI)
        .then(() => console.log('✅ Conectado a MongoDB Atlas'))
        .catch(err => console.error('❌ Error de conexión a MongoDB:', err))
} else {
    console.warn('⚠️ ADVERTENCIA: MONGODB_URI no está definida en el archivo .env')
}

// ============ API ENDPOINTS ============

// Status check
app.get('/api/status', (req, res) => {
    res.json({
        status: 'online',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        timestamp: new Date()
    })
})

// Reservations
app.get('/api/reservations', async (req, res) => {
    try {
        const reservations = await Reservation.find().sort({ fecha: 1, horaInicio: 1 })
        res.json(reservations)
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener reservas' })
    }
})

app.post('/api/reservations', async (req, res) => {
    const { nombreCompleto, programaAcademico, fecha, horaInicio, horaFin } = req.body

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
        res.status(201).json(newReservation)
    } catch (err) {
        res.status(500).json({ message: 'Error al crear reserva' })
    }
})

app.delete('/api/reservations/:id', async (req, res) => {
    try {
        const result = await Reservation.findByIdAndDelete(req.params.id)
        if (result) {
            return res.json({ message: 'Reserva eliminada' })
        }
        res.status(404).json({ message: 'No encontrada' })
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar reserva' })
    }
})

// Préstamos
app.get('/api/prestamos', async (req, res) => {
    try {
        const prestamos = await Prestamo.find().sort({ createdAt: -1 })
        res.json(prestamos)
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener préstamos' })
    }
})

app.post('/api/prestamos', async (req, res) => {
    try {
        const newPrestamo = new Prestamo(req.body)
        await newPrestamo.save()
        res.status(201).json(newPrestamo)
    } catch (err) {
        res.status(500).json({ message: 'Error al registrar préstamo' })
    }
})

app.delete('/api/prestamos/:id', async (req, res) => {
    try {
        const result = await Prestamo.findByIdAndDelete(req.params.id)
        if (result) {
            return res.json({ message: 'Préstamo eliminado' })
        }
        res.status(404).json({ message: 'No encontrado' })
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar préstamo' })
    }
})

// Manejo de rutas del Frontend (SPA)
app.get('*', (req, res) => {
    if (fs.existsSync(path.join(DIST_PATH, 'index.html'))) {
        res.sendFile(path.join(DIST_PATH, 'index.html'))
    } else {
        res.status(404).send('La aplicación está en mantenimiento (Build folder not found). Por favor ejecuta "npm run build".')
    }
})

app.listen(PORT, () => {
    console.log(`🚀 Servidor unificado corriendo en puerto ${PORT}`)
})

