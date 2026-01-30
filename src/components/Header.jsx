export default function Header({ currentPage, setCurrentPage }) {
    const menuItems = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'reservas', label: 'Reservas' },
        { id: 'prestamos', label: 'Préstamos' },
        { id: 'contacto', label: 'Contacto' }
    ]

    return (
        <header className="gradient-institutional shadow-xl sticky top-0 z-50">
            {/* Branding Section */}
            <div className="container mx-auto px-4 py-4 border-b border-white border-opacity-20">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="/logo 1.jpg"
                            alt="Logo Institución Universitaria Colegio Mayor del Cauca"
                            className="h-16 w-16 md:h-20 md:w-20 object-contain bg-white rounded-lg p-1 shadow-lg"
                        />
                        <div>
                            <h1 className="text-white text-xl md:text-2xl font-bold text-shadow leading-tight">
                                Institución Universitaria Colegio Mayor del Cauca
                            </h1>
                            <p className="text-institutional-light text-sm md:text-base mt-1">
                                Laboratorio de Física y Sistemas Embebidos
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <nav className="container mx-auto px-4">
                <ul className="flex flex-wrap items-center gap-2 py-3">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <button
                                onClick={() => setCurrentPage(item.id)}
                                className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
