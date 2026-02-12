import { useState, useEffect } from 'react'

export default function SemesterReservationForm({ onSubmit, selectedDate, setSelectedDate }) {
    const [formData, setFormData] = useState({
        nombreCompleto: '',
        programaAcademico: '',
        fecha: selectedDate.toISOString().split('T')[0],
        horaInicio: '',
        horaFin: '',
        fechaFinalizacion: ''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    // Sincronizar fecha cuando cambia en el calendario
    useEffect(() => {
        const dateStr = selectedDate.toISOString().split('T')[0]
        setFormData(prev => ({ ...prev, fecha: dateStr }))
    }, [selectedDate])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        setError('')
        setSuccess(false)

        if (name === 'fecha') {
            setSelectedDate(new Date(value + 'T12:00:00'))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess(false)

        // Basic Validations
        if (!formData.nombreCompleto.trim()) {
            setError('El nombre completo es obligatorio')
            return
        }

        if (!formData.programaAcademico) {
            setError('Selecciona un programa académico')
            return
        }

        if (formData.horaInicio >= formData.horaFin) {
            setError('La hora de fin debe ser posterior a la hora de inicio')
            return
        }

        // Validation for today's date
        const now = new Date()
        const selectedDateTime = new Date(`${formData.fecha}T${formData.horaInicio}`)

        if (selectedDateTime < now) {
            setError('No puedes realizar reservas para una hora que ya ha pasado')
            return
        }

        // Validate end date is after start date
        const startDate = new Date(formData.fecha)
        const endDate = new Date(formData.fechaFinalizacion)

        if (!formData.fechaFinalizacion) {
            setError('La fecha de finalización es obligatoria')
            return
        }

        if (endDate <= startDate) {
            setError('La fecha de finalización debe ser posterior a la fecha de inicio')
            return
        }

        // Calculate the number of weeks
        const diffTime = Math.abs(endDate - startDate)
        const diffWeeks = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 7))

        if (diffWeeks > 26) {
            setError('La reserva semestral no puede exceder 26 semanas (6 meses)')
            return
        }

        setSubmitting(true)
        const result = await onSubmit(formData)
        setSubmitting(false)

        if (result.success) {
            setSuccess(true)
            setFormData({
                nombreCompleto: '',
                programaAcademico: '',
                fecha: selectedDate.toISOString().split('T')[0],
                horaInicio: '',
                horaFin: '',
                fechaFinalizacion: ''
            })
            setTimeout(() => setSuccess(false), 5000)
        } else {
            setError(result.error || 'Error al crear la reserva semestral')
        }
    }

    return (
        <div className="card-full-height">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-institutional-dark">Nueva Reserva Semestral</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="semestral-nombreCompleto" className="form-label">Docente Responsable *</label>
                    <input
                        type="text"
                        id="semestral-nombreCompleto"
                        name="nombreCompleto"
                        value={formData.nombreCompleto}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ej: Ing. Jorge Iván Ríos"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="semestral-programaAcademico" className="form-label">Programa Académico *</label>
                    <input
                        type="text"
                        id="semestral-programaAcademico"
                        name="programaAcademico"
                        value={formData.programaAcademico}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Ej: Ingeniería de Sistemas"
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="semestral-fecha" className="form-label">Fecha de Inicio *</label>
                        <input
                            type="date"
                            id="semestral-fecha"
                            name="fecha"
                            value={formData.fecha}
                            onChange={handleChange}
                            className="form-input"
                            min={new Date().toISOString().split('T')[0]}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="semestral-fechaFinalizacion" className="form-label">Fecha de Finalización *</label>
                        <input
                            type="date"
                            id="semestral-fechaFinalizacion"
                            name="fechaFinalizacion"
                            value={formData.fechaFinalizacion}
                            onChange={handleChange}
                            className="form-input"
                            min={formData.fecha || new Date().toISOString().split('T')[0]}
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label htmlFor="semestral-horaInicio" className="form-label">Inicio *</label>
                        <input
                            type="time"
                            id="semestral-horaInicio"
                            name="horaInicio"
                            value={formData.horaInicio}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="semestral-horaFin" className="form-label">Fin *</label>
                        <input
                            type="time"
                            id="semestral-horaFin"
                            name="horaFin"
                            value={formData.horaFin}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded animate-fade-in text-sm">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span>{error}</span>
                        </div>
                    </div>
                )}

                {success && (
                    <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded animate-fade-in text-sm">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Las reservas semanales se han registrado exitosamente.</span>
                        </div>
                    </div>
                )}

                {/* Note about rules */}
                <div className="bg-amber-50 p-3 rounded-lg text-xs text-amber-900 border border-amber-200 italic">
                    <strong>Aviso:</strong> Esta reserva se repetirá automáticamente cada semana en el mismo día y hora hasta la fecha de finalización. El docente se compromete a cumplir el reglamento del laboratorio y dejar el espacio en óptimas condiciones.
                </div>

                <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-4 text-lg bg-yellow-500 hover:bg-yellow-600"
                >
                    {submitting ? 'Procesando...' : 'Confirmar Reserva Semestral'}
                </button>
            </form>
        </div>
    )
}
