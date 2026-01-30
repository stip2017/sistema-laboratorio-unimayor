import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Reservas from './pages/Reservas'
import Prestamos from './pages/Prestamos'
import Contacto from './pages/Contacto'

function App() {
    const [currentPage, setCurrentPage] = useState('inicio')

    const renderPage = () => {
        switch (currentPage) {
            case 'inicio':
                return <Home />
            case 'reservas':
                return <Reservas />
            case 'prestamos':
                return <Prestamos />
            case 'contacto':
                return <Contacto />
            default:
                return <Home />
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-grow animate-fade-in">
                {renderPage()}
            </main>
            <Footer />
        </div>
    )
}

export default App
