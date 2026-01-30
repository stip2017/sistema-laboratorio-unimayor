import { useState, useEffect } from 'react'

const API_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/api'
    : '/api'

export default function Prestamos() {
    const [prestamos, setPrestamos] = useState([])
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        nombreDocente: '',
        programaAcademico: '',
        equipoPrestado: '',
        fecha: new Date().toISOString().split('T')[0],
        hora: ''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [isOtroEquipo, setIsOtroEquipo] = useState(false)
    const [customEquipo, setCustomEquipo] = useState('')

    const programas = [
        'Ingeniería de Sistemas',
        'Ingeniería Electrónica',
        'Física',
        'Matemáticas',
        'Ingeniería Civil',
        'Arquitectura',
        'Otro'
    ]

    const equipos = [
        'Osciloscopio Digital',
        'Generador de Señales',
        'Fuente de Alimentación',
        'Multímetro Digital',
        'Arduino UNO',
        'Raspberry Pi',
        'Kit de Sensores',
        'Protoboard',
        'Kit de Resistencias',
        'Kit de Capacitores',
        'Motor DC',
        'Servo Motor',
        'Kit de LEDs',
        'Otro'
    ]

    useEffect(() => {
        fetchPrestamos()
    }, [])

    const fetchPrestamos = async () => {
        try {
            const response = await fetch(`${API_URL}/prestamos`)
            const data = await response.json()
            if (Array.isArray(data)) {
                setPrestamos(data)
            } else {
                console.error('Data is not an array:', data)
                setPrestamos([])
            }
            setLoading(false)
        } catch (error) {
            console.error('Error fetching prestamos:', error)
            setPrestamos([])
            setLoading(false)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        if (name === 'equipoPrestado') {
            if (value === 'Otro') {
                setIsOtroEquipo(true)
            } else {
                setIsOtroEquipo(false)
                setCustomEquipo('')
            }
        }

        setError('')
        setSuccess(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        if (!formData.nombreDocente.trim()) {
            setError('El nombre del docente es obligatorio')
            return
        }

        if (!formData.programaAcademico) {
            setError('Selecciona un programa académico')
            return
        }

        if (!formData.equipoPrestado) {
            setError('Selecciona un equipo')
            return
        }

        if (!formData.fecha || !formData.hora) {
            setError('La fecha y hora son obligatorias')
            return
        }

        const dataToSubmit = {
            ...formData,
            equipoPrestado: isOtroEquipo ? customEquipo : formData.equipoPrestado
        }

        if (isOtroEquipo && !customEquipo.trim()) {
            setError('Por favor especifica el nombre del equipo')
            return
        }

        setSubmitting(true)

        try {
            const response = await fetch(`${API_URL}/prestamos`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataToSubmit)
            })

            if (!response.ok) {
                throw new Error('Error al registrar el préstamo')
            }

            const newPrestamo = await response.json()
            setPrestamos([newPrestamo, ...prestamos])
            setSuccess(true)
            setFormData({
                nombreDocente: '',
                programaAcademico: '',
                equipoPrestado: '',
                fecha: new Date().toISOString().split('T')[0],
                hora: ''
            })
            setIsOtroEquipo(false)
            setCustomEquipo('')
            setTimeout(() => setSuccess(false), 5000)
        } catch (error) {
            setError(error.message)
        } finally {
            setSubmitting(false)
        }
    }

    const handleDelete = async (id) => {
        if (!confirm('¿Estás seguro de eliminar este registro de préstamo?')) {
            return
        }

        try {
            await fetch(`${API_URL}/prestamos/${id}`, {
                method: 'DELETE'
            })
            setPrestamos(prestamos.filter(p => p.id !== id))
        } catch (error) {
            console.error('Error deleting prestamo:', error)
            alert('Error al eliminar el préstamo')
        }
    }

    const handleExport = () => {
        const headers = ['Docente', 'Programa', 'Equipo', 'Fecha', 'Hora']
        const rows = prestamos.map(p => [
            p.nombreDocente,
            p.programaAcademico,
            p.equipoPrestado,
            new Date(p.fecha + 'T12:00:00').toLocaleDateString('es-CO'),
            p.hora
        ])

        let csvContent = headers.join(',') + '\n'
        rows.forEach(row => {
            csvContent += row.map(cell => `"${cell}"`).join(',') + '\n'
        })

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', `prestamos_${new Date().toISOString().split('T')[0]}.csv`)
        link.style.visibility = 'hidden'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const formatDate = (dateStr) => {
        const date = new Date(dateStr + 'T12:00:00')
        return date.toLocaleDateString('es-CO', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="mb-2">Préstamos de Equipos</h1>
                <p className="text-gray-600 text-lg">
                    Registra y consulta los préstamos de equipos del laboratorio
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Form */}
                <div className="card">
                    <h2 className="mb-6">Nuevo Préstamo</h2>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="nombreDocente" className="form-label">
                                Nombre del Docente *
                            </label>
                            <input
                                type="text"
                                id="nombreDocente"
                                name="nombreDocente"
                                value={formData.nombreDocente}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Ej: María López Ramírez"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="programaAcademico" className="form-label">
                                Programa Académico *
                            </label>
                            <input
                                type="text"
                                id="programaAcademico"
                                name="programaAcademico"
                                value={formData.programaAcademico}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Ej: Ingeniería de Sistemas"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="equipoPrestado" className="form-label">
                                Equipo Prestado *
                            </label>
                            <select
                                id="equipoPrestado"
                                name="equipoPrestado"
                                value={formData.equipoPrestado}
                                onChange={handleChange}
                                className="form-input"
                                required
                            >
                                <option value="">Selecciona un equipo</option>
                                {equipos.map(equipo => (
                                    <option key={equipo} value={equipo}>{equipo}</option>
                                ))}
                            </select>
                        </div>

                        {isOtroEquipo && (
                            <div className="animate-fade-in">
                                <label htmlFor="customEquipo" className="form-label">
                                    Especificar Equipo *
                                </label>
                                <input
                                    type="text"
                                    id="customEquipo"
                                    value={customEquipo}
                                    onChange={(e) => setCustomEquipo(e.target.value)}
                                    className="form-input"
                                    placeholder="Ej: Multímetro Fluke 87V"
                                    required
                                />
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="fecha" className="form-label">
                                    Fecha *
                                </label>
                                <input
                                    type="date"
                                    id="fecha"
                                    name="fecha"
                                    value={formData.fecha}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="hora" className="form-label">
                                    Hora *
                                </label>
                                <input
                                    type="time"
                                    id="hora"
                                    name="hora"
                                    value={formData.hora}
                                    onChange={handleChange}
                                    className="form-input"
                                    required
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
                                <p className="font-semibold">Error</p>
                                <p>{error}</p>
                            </div>
                        )}

                        {success && (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded">
                                <p className="font-semibold">¡Éxito!</p>
                                <p>Préstamo registrado correctamente</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="btn-primary w-full disabled:opacity-50"
                        >
                            {submitting ? 'Guardando...' : 'Registrar Préstamo'}
                        </button>
                    </form>
                </div>

                {/* History Table */}
                <div className="card">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl">Historial de Préstamos</h2>
                        <button
                            onClick={handleExport}
                            className="btn-outline py-2 px-4 text-sm"
                            disabled={prestamos.length === 0}
                        >
                            Exportar
                        </button>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-institutional-primary"></div>
                            <p className="mt-4 text-gray-600">Cargando préstamos...</p>
                        </div>
                    ) : prestamos.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-lg">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <p className="text-gray-600 text-lg">No hay préstamos registrados</p>
                        </div>
                    ) : (
                        <div className="space-y-3 max-h-[600px] overflow-y-auto">
                            {prestamos.map((prestamo) => (
                                <div key={prestamo.id} className="bg-institutional-light p-4 rounded-lg hover-lift">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="font-semibold text-institutional-dark">
                                                {prestamo.nombreDocente}
                                            </h3>
                                            <p className="text-sm text-gray-600">{prestamo.programaAcademico}</p>
                                        </div>
                                        <button
                                            onClick={() => handleDelete(prestamo.id)}
                                            className="text-red-600 hover:text-red-800 p-1"
                                            title="Eliminar"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm mb-1">
                                        <svg className="w-4 h-4 text-institutional-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                        </svg>
                                        <span className="font-medium text-institutional-primary">{prestamo.equipoPrestado}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <span>{formatDate(prestamo.fecha)}</span>
                                        <span>•</span>
                                        <span>{prestamo.hora}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-4 text-sm text-gray-600 text-right border-t pt-4">
                        Total: <span className="font-semibold text-institutional-primary">{prestamos.length}</span> préstamo(s)
                    </div>
                </div>
            </div>
        </div>
    )
}
