import { useState, useEffect } from 'react'
import Calendar from '../components/Calendar'
import ReservationForm from '../components/ReservationForm'
import SemesterReservationForm from '../components/SemesterReservationForm'
import ReservationTable from '../components/ReservationTable'
import { dbService } from '../services/dbService'

export default function Reservas() {
    const [reservations, setReservations] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchReservations()
    }, [])

    const fetchReservations = async () => {
        try {
            const data = await dbService.getReservations()
            if (Array.isArray(data)) {
                setReservations(data)
            } else {
                setReservations([])
            }
            setLoading(false)
        } catch (error) {
            console.error('Error fetching reservations:', error)
            setReservations([])
            setLoading(false)
        }
    }

    const handleAddReservation = async (reservationData) => {
        try {
            const newReservation = await dbService.addReservation(reservationData)
            setReservations([...reservations, newReservation])
            return { success: true }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    const handleDeleteReservation = async (idOrIds) => {
        if (!confirm('¿Estás seguro de eliminar esta reserva?')) {
            return
        }

        try {
            if (Array.isArray(idOrIds)) {
                // Eliminar múltiples (Semestral)
                await Promise.all(idOrIds.map(id => dbService.deleteReservation(id)));
                setReservations(reservations.filter(r => !idOrIds.includes(r.id)));
            } else {
                // Eliminar una sola
                await dbService.deleteReservation(idOrIds);
                setReservations(reservations.filter(r => r.id !== idOrIds));
            }
        } catch (error) {
            console.error('Error deleting reservation:', error)
            alert('Error al eliminar la reserva/s')
        }
    }

    const handleAddSemesterReservation = async (semesterData) => {
        try {
            const startDate = new Date(semesterData.fecha)
            const endDate = new Date(semesterData.fechaFinalizacion)
            const createdReservations = []
            const errors = []

            // Generate all weekly reservations
            let currentDate = new Date(startDate)

            while (currentDate <= endDate) {
                const reservationData = {
                    nombreCompleto: semesterData.nombreCompleto,
                    programaAcademico: semesterData.programaAcademico,
                    fecha: currentDate.toISOString().split('T')[0],
                    horaInicio: semesterData.horaInicio,
                    horaFin: semesterData.horaFin
                }

                try {
                    const newReservation = await dbService.addReservation(reservationData)
                    createdReservations.push(newReservation)
                } catch (error) {
                    errors.push({
                        fecha: reservationData.fecha,
                        error: error.message
                    })
                }

                // Move to next week (same day)
                currentDate.setDate(currentDate.getDate() + 7)
            }

            // Update the reservations list with all created reservations
            if (createdReservations.length > 0) {
                setReservations([...reservations, ...createdReservations])
            }

            if (errors.length > 0) {
                const errorMessage = `Se crearon ${createdReservations.length} reservas. ${errors.length} reservas fallaron:\n` +
                    errors.map(e => `${e.fecha}: ${e.error}`).join('\n')
                return { success: true, error: errorMessage }
            }

            return { success: true }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="mb-2">Reservas de Laboratorio</h1>
                <p className="text-gray-600 text-lg">
                    Administra las reservas del Laboratorio de Física y Sistemas Embebidos
                </p>
            </div>

            {/* First Row: Nueva Reserva + Gestión de Reservas */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Left: Nueva Reserva */}
                <div className="flex flex-col">
                    <ReservationForm
                        onSubmit={handleAddReservation}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />
                </div>

                {/* Right: Gestión de Reservas */}
                <div className="flex flex-col">
                    <ReservationTable
                        reservations={reservations}
                        onDelete={handleDeleteReservation}
                        loading={loading}
                    />
                </div>
            </div>

            {/* Second Row: Nueva Reserva Semestral + Calendar */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Left: Nueva Reserva Semestral */}
                <div className="flex flex-col">
                    <SemesterReservationForm
                        onSubmit={handleAddSemesterReservation}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />
                </div>

                {/* Right: Calendar */}
                <div className="flex flex-col">
                    <Calendar
                        reservations={reservations}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />
                </div>
            </div>
        </div>
    )
}
