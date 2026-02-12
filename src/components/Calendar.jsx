import { useState } from 'react'

export default function Calendar({ reservations, selectedDate, setSelectedDate }) {
    const [currentMonth, setCurrentMonth] = useState(selectedDate.getMonth())
    const [currentYear, setCurrentYear] = useState(selectedDate.getFullYear())

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ]

    const daysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate()
    }

    const firstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay()
    }

    const hasReservation = (day) => {
        const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        return reservations.some(r => r.fecha === dateStr)
    }

    const isSelectedDay = (day) => {
        return selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentMonth &&
            selectedDate.getFullYear() === currentYear
    }

    const handleDayClick = (day) => {
        const newDate = new Date(currentYear, currentMonth, day)
        setSelectedDate(newDate)
    }

    const previousMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11)
            setCurrentYear(currentYear - 1)
        } else {
            setCurrentMonth(currentMonth - 1)
        }
    }

    const nextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0)
            setCurrentYear(currentYear + 1)
        } else {
            setCurrentMonth(currentMonth + 1)
        }
    }

    const renderCalendarDays = () => {
        const days = []
        const totalDays = daysInMonth(currentMonth, currentYear)
        const firstDay = firstDayOfMonth(currentMonth, currentYear)

        // Empty cells for days before month starts
        for (let i = 0; i < firstDay; i++) {
            days.push(
                <div key={`empty-${i}`} className="aspect-square"></div>
            )
        }

        // Days of the month
        for (let day = 1; day <= totalDays; day++) {
            const hasRes = hasReservation(day)
            const isSelected = isSelectedDay(day)
            const isToday = new Date().toDateString() === new Date(currentYear, currentMonth, day).toDateString()

            days.push(
                <button
                    key={day}
                    onClick={() => handleDayClick(day)}
                    className={`
            aspect-square p-2 rounded-lg text-center transition-all duration-200
            hover:bg-institutional-light hover:scale-105
            ${isSelected ? 'bg-institutional-primary text-white font-bold shadow-lg' : ''}
            ${isToday && !isSelected ? 'border-2 border-institutional-secondary font-semibold' : ''}
            ${hasRes && !isSelected ? 'bg-institutional-light text-institutional-dark' : ''}
            ${!isSelected && !isToday && !hasRes ? 'hover:bg-gray-100' : ''}
          `}
                >
                    <div className="text-sm md:text-base">{day}</div>
                    {hasRes && (
                        <div className="w-1.5 h-1.5 bg-institutional-secondary rounded-full mx-auto mt-1"></div>
                    )}
                </button>
            )
        }

        return days
    }

    return (
        <div className="card-full-height">
            <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                    <button
                        onClick={previousMonth}
                        className="p-2 hover:bg-institutional-light rounded-lg transition-colors"
                    >
                        <svg className="w-6 h-6 text-institutional-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <h3 className="text-xl font-bold text-institutional-primary">
                        {months[currentMonth]} {currentYear}
                    </h3>

                    <button
                        onClick={nextMonth}
                        className="p-2 hover:bg-institutional-light rounded-lg transition-colors"
                    >
                        <svg className="w-6 h-6 text-institutional-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Day names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
                        <div key={day} className="text-center text-xs md:text-sm font-semibold text-gray-600 py-2">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                    {renderCalendarDays()}
                </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-sm pt-4 border-t">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-institutional-secondary rounded"></div>
                    <span className="text-gray-600">Hoy</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-institutional-primary rounded"></div>
                    <span className="text-gray-600">Seleccionado</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-institutional-light rounded flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-institutional-secondary rounded-full"></div>
                    </div>
                    <span className="text-gray-600">Con reservas</span>
                </div>
            </div>
        </div>
    )
}
