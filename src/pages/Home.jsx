export default function Home() {
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="card mb-8 gradient-institutional text-white overflow-hidden">
                <div className="p-8 md:p-12">
                    <h1 className="text-white mb-4">
                        Sistema de Reservas y Préstamos
                    </h1>
                    <p className="text-lg md:text-xl text-institutional-light mb-6 leading-relaxed">
                        Bienvenido al sistema de gestión del Laboratorio de Física y Sistemas Embebidos.
                        Aquí podrás reservar el laboratorio y registrar préstamos de equipos de manera
                        sencilla y organizada.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Feature 1 */}
                <div className="card hover-lift">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg mb-2">Reservar Laboratorio</h3>
                            <p className="text-gray-600">
                                Agenda el uso del laboratorio seleccionando fecha y horario.
                                El sistema valida automáticamente disponibilidad.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="card hover-lift">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg mb-2">Registro de Préstamos</h3>
                            <p className="text-gray-600">
                                Registra préstamos de equipos del laboratorio con información
                                detallada de docente, programa y equipo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="card hover-lift">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg mb-2">Historial Completo</h3>
                            <p className="text-gray-600">
                                Consulta el historial de reservas y préstamos realizados,
                                con opción de exportar e imprimir.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="card hover-lift">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg mb-2">Validación de Horarios</h3>
                            <p className="text-gray-600">
                                Evita conflictos de horarios con validación automática
                                que previene reservas simultáneas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature 5 */}
                <div className="card hover-lift">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg mb-2">Diseño Responsive</h3>
                            <p className="text-gray-600">
                                Accede desde cualquier dispositivo: computadora, tablet o móvil
                                con diseño adaptativo.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feature 6 */}
                <div className="card hover-lift">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg mb-2">Exportación de Datos</h3>
                            <p className="text-gray-600">
                                Exporta la información de reservas y préstamos para
                                impresión o consulta externa.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instructions */}
            <section className="card">
                <h2 className="mb-6">Instrucciones de Uso</h2>
                <div className="space-y-4">
                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-institutional-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            1
                        </div>
                        <div>
                            <h3 className="text-base mb-1">Accede a la sección correspondiente</h3>
                            <p className="text-gray-600">
                                Utiliza el menú superior para navegar entre Reservas, Préstamos o Contacto.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-institutional-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            2
                        </div>
                        <div>
                            <h3 className="text-base mb-1">Completa el formulario</h3>
                            <p className="text-gray-600">
                                Ingresa todos los datos requeridos: nombre, programa académico, fecha y hora.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-institutional-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            3
                        </div>
                        <div>
                            <h3 className="text-base mb-1">Confirma tu reserva o préstamo</h3>
                            <p className="text-gray-600">
                                Revisa la información y confirma. El sistema te notificará si hay conflictos de horario.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-8 h-8 bg-institutional-secondary text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            4
                        </div>
                        <div>
                            <h3 className="text-base mb-1">Consulta el historial</h3>
                            <p className="text-gray-600">
                                Visualiza todas las reservas activas en la tabla y exporta si es necesario.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
