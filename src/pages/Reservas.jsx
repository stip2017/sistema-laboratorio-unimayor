import { useState, useEffect } from 'react'
import Calendar from '../components/Calendar'
import ReservationForm from '../components/ReservationForm'
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

    const handleDeleteReservation = async (id) => {
        if (!confirm('¿Estás seguro de eliminar esta reserva?')) {
            return
        }

        try {
            await dbService.deleteReservation(id)
            setReservations(reservations.filter(r => r.id !== id))
        } catch (error) {
            console.error('Error deleting reservation:', error)
            alert('Error al eliminar la reserva')
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

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Left Column: Form and Calendar */}
                <div className="space-y-6">
                    <ReservationForm
                        onSubmit={handleAddReservation}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />

                    <Calendar
                        reservations={reservations}
                        selectedDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                    />
                </div>

                {/* Right Column: Reservations Table */}
                <div>
                    <ReservationTable
                        reservations={reservations}
                        onDelete={handleDeleteReservation}
                        loading={loading}
                    />
                </div>
            </div>
        </div>
    )
}
