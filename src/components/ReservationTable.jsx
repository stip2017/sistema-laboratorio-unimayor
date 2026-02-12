import { useState } from 'react'

export default function ReservationTable({ reservations, onDelete, loading }) {
    const [activeTab, setActiveTab] = useState('upcoming')

    const formatTime = (timeStr) => {
        if (!timeStr) return ''
        const [hours, minutes] = timeStr.split(':')
        let h = parseInt(hours, 10)
        const ampm = h >= 12 ? 'p.m.' : 'a.m.'
        h = h % 12
        h = h ? h : 12 // el '0' debe ser '12'
        return `${h}:${minutes} ${ampm}`
    }

    const handlePrint = () => {
        window.print()
    }

    const handleExport = () => {
        const headers = ['Nombre', 'Programa', 'Fecha', 'Hora Inicio', 'Hora Fin']
        const rows = reservations.map(r => [
            r.nombreCompleto,
            r.programaAcademico,
            new Date(r.fecha + 'T12:00:00').toLocaleDateString('es-CO'),
            formatTime(r.horaInicio),
            formatTime(r.horaFin)
        ])

        let csvContent = headers.join(',') + '\n'
        rows.forEach(row => {
            csvContent += row.map(cell => `"${cell}"`).join(',') + '\n'
        })

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
        const link = document.createElement('a')
        const url = URL.createObjectURL(blob)
        link.setAttribute('href', url)
        link.setAttribute('download', `reservas_${new Date().toISOString().split('T')[0]}.csv`)
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

    // Logic to separate reservations
    const now = new Date()
    const todayStr = now.toISOString().split('T')[0]

    const upcoming = reservations.filter(r => r.fecha >= todayStr)
    const history = reservations.filter(r => r.fecha < todayStr)

    const currentReservations = activeTab === 'upcoming' ? upcoming : history

    const sortedReservations = [...currentReservations].sort((a, b) => {
        const dateA = new Date(a.fecha + 'T' + a.horaInicio)
        const dateB = new Date(b.fecha + 'T' + b.horaInicio)
        return activeTab === 'upcoming' ? dateA - dateB : dateB - dateA
    })

    // --- Lógica de Agrupación para Reservas Semestrales ---
    const getGroupedReservations = (reservs) => {
        const grouped = [];
        const processedIndices = new Set();

        // Ordenar por fecha para encontrar secuencias
        const sorted = [...reservs].sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

        for (let i = 0; i < sorted.length; i++) {
            if (processedIndices.has(i)) continue;

            const current = sorted[i];
            let sequence = [current];
            processedIndices.add(i);

            // Buscar semanas siguientes (mismo docente, programa, horas y +7 días)
            let lastDate = new Date(current.fecha + 'T12:00:00');

            for (let j = i + 1; j < sorted.length; j++) {
                if (processedIndices.has(j)) continue;

                const target = sorted[j];
                if (
                    target.nombreCompleto === current.nombreCompleto &&
                    target.programaAcademico === current.programaAcademico &&
                    target.horaInicio === current.horaInicio &&
                    target.horaFin === current.horaFin
                ) {
                    const targetDate = new Date(target.fecha + 'T12:00:00');
                    const diffDays = Math.round((targetDate - lastDate) / (1000 * 60 * 60 * 24));

                    if (diffDays === 7) {
                        sequence.push(target);
                        processedIndices.add(j);
                        lastDate = targetDate;
                    }
                }
            }

            if (sequence.length > 2) { // Agrupar solo si son 3 o más semanas
                grouped.push({
                    ...current,
                    isRange: true,
                    fechaInicio: current.fecha,
                    fechaFin: sequence[sequence.length - 1].fecha,
                    allIds: sequence.map(s => s.id)
                });
            } else {
                // Si son solo 1 o 2, las dejamos individuales para no confundir
                sequence.forEach((s, idx) => {
                    if (idx > 0) grouped.push(s); // La primera ya se agregó por defecto si no entró en el loop de i
                });
                if (sequence.length === 1) grouped.push(current);
                else if (sequence.length === 2) {
                    // Ya agregamos la 2da arriba, la 1ra se agrega aquí
                    grouped.push(current);
                }
            }
        }
        return grouped;
    };

    const displayReservations = getGroupedReservations(sortedReservations);

    return (
        <div className="card-full-height">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-2xl mb-1">Gestión de Reservas</h2>
                    <p className="text-sm text-gray-500">Consulta y administra el uso del laboratorio</p>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={handleExport}
                        className="btn-outline flex items-center gap-2 py-2 px-4 text-sm"
                        disabled={reservations.length === 0}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        CSV
                    </button>

                    <button
                        onClick={handlePrint}
                        className="btn-secondary flex items-center gap-2 py-2 px-4 text-sm"
                        disabled={reservations.length === 0}
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                        </svg>
                        PDF
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
                <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`py-2 px-6 font-semibold transition-all duration-300 border-b-2 ${activeTab === 'upcoming'
                        ? 'border-institutional-primary text-institutional-primary'
                        : 'border-transparent text-gray-500 hover:text-institutional-primary'
                        }`}
                >
                    Próximas ({upcoming.length})
                </button>
                <button
                    onClick={() => setActiveTab('history')}
                    className={`py-2 px-6 font-semibold transition-all duration-300 border-b-2 ${activeTab === 'history'
                        ? 'border-institutional-primary text-institutional-primary'
                        : 'border-transparent text-gray-500 hover:text-institutional-primary'
                        }`}
                >
                    Historial ({history.length})
                </button>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col">
                {loading ? (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-institutional-primary"></div>
                        <p className="mt-4 text-gray-600">Cargando datos...</p>
                    </div>
                ) : displayReservations.length === 0 ? (
                    <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                        <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-gray-500 text-lg">No hay registros para mostrar</p>
                    </div>
                ) : (
                    <div className="table-container max-h-[450px] overflow-y-auto">
                        <table className="table">
                            <thead className="sticky top-0 z-10">
                                <tr>
                                    <th>Docente</th>
                                    <th>Programa</th>
                                    <th>Fecha</th>
                                    <th>Horario</th>
                                    <th className="text-center">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayReservations.map((reservation, index) => (
                                    <tr key={reservation.id || index}>
                                        <td className="font-medium text-institutional-dark">
                                            {reservation.nombreCompleto}
                                        </td>
                                        <td className="text-gray-600">{reservation.programaAcademico}</td>
                                        <td>
                                            {reservation.isRange ? (
                                                <div className="flex flex-col text-xs font-bold text-amber-700 bg-amber-50 p-1 rounded border border-amber-100">
                                                    <span>{formatDate(reservation.fechaInicio)}</span>
                                                    <span className="text-[10px] text-center text-amber-500 my-0.5">▼ SEMESTRAL ▼</span>
                                                    <span>{formatDate(reservation.fechaFin)}</span>
                                                </div>
                                            ) : (
                                                <span className="font-semibold">{formatDate(reservation.fecha)}</span>
                                            )}
                                        </td>
                                        <td>
                                            <span className="bg-institutional-light text-institutional-dark px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                                                {formatTime(reservation.horaInicio)} - {formatTime(reservation.horaFin)}
                                            </span>
                                        </td>
                                        <td className="text-center">
                                            <button
                                                onClick={() => onDelete(reservation.allIds || reservation.id)}
                                                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-all"
                                                title={reservation.isRange ? "Eliminar grupo semestral" : "Eliminar reserva"}
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    )
}
