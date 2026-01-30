export default function Contacto() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="mb-2">Contacto</h1>
                <p className="text-gray-600 text-lg">
                    Información de contacto del Laboratorio de Física y Sistemas Embebidos
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="card">
                    <h2 className="mb-6">Información de Contacto</h2>

                    <div className="space-y-6">
                        {/* Institution */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg mb-1">Institución</h3>
                                <p className="text-gray-600">
                                    Institución Universitaria Colegio Mayor del Cauca
                                </p>
                                <p className="text-gray-600">
                                    Laboratorio de Física y Sistemas Embebidos
                                </p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg mb-1">Ubicación</h3>
                                <p className="text-gray-600">
                                    Sede Bicentenario Cra 7 # 2-41<br />
                                    Popayán-Cauca
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg mb-1">Teléfono</h3>
                                <p className="text-gray-600">
                                    <a href="tel:+5728209800" className="hover:text-institutional-secondary transition-colors">
                                        +57 (2) 820 9800
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg mb-1">Email</h3>
                                <p className="text-gray-600">
                                    <a href="mailto:sdionizio@unimayor.edu.co" className="hover:text-institutional-secondary transition-colors">
                                        sdionizio@unimayor.edu.co
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Schedule */}
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-institutional-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-lg mb-1">Horario de Atención</h3>
                                <p className="text-gray-600">
                                    Lunes a Viernes: 7:00 AM - 6:00 PM<br />
                                    Sábados: 8:00 AM - 12:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-6">
                    {/* Services Card */}
                    <div className="card">
                        <h2 className="mb-4">Servicios del Laboratorio</h2>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-institutional-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Préstamo de equipos de medición y componentes electrónicos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-institutional-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Espacio para prácticas de física experimental</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-institutional-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Desarrollo de proyectos de sistemas embebidos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-institutional-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Asesoría técnica en proyectos académicos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-institutional-secondary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700">Capacitación en uso de instrumentación</span>
                            </li>
                        </ul>
                    </div>

                    {/* Requirements Card */}
                    <div className="card">
                        <h2 className="mb-4">Requisitos para Reservas</h2>
                        <div className="space-y-3 text-gray-700">
                            <p className="flex items-start gap-2">
                                <span className="text-institutional-primary font-bold">•</span>
                                Ser docente activo de la institución
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-institutional-primary font-bold">•</span>
                                Indicar el propósito académico de la reserva
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-institutional-primary font-bold">•</span>
                                Registrar la reserva con al menos 24 horas de anticipación
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-institutional-primary font-bold">•</span>
                                Respetar los horarios asignados
                            </p>
                            <p className="flex items-start gap-2">
                                <span className="text-institutional-primary font-bold">•</span>
                                Dejar el laboratorio en condiciones óptimas después de su uso
                            </p>
                        </div>
                    </div>

                    {/* Support Card */}
                    <div className="card gradient-institutional text-white">
                        <h2 className="text-white mb-4">Soporte Técnico</h2>
                        <p className="text-institutional-light mb-4">
                            Para asistencia técnica o consultas sobre el sistema de reservas,
                            comunícate con el equipo de soporte.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="mailto:sdionizio@unimayor.edu.co"
                                className="bg-white text-institutional-primary px-6 py-2 rounded-lg font-semibold 
                                hover:bg-institutional-light transition-all text-center flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Enviar Email
                            </a>
                            <a
                                href="tel:+5728209800"
                                className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-lg font-semibold 
                         hover:bg-opacity-30 transition-all text-center border-2 border-white"
                            >
                                Llamar Ahora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
