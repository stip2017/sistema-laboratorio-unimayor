export default function Footer() {
    return (
        <footer className="bg-institutional-dark text-white pt-12 pb-6 mt-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Info Institucional */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 border-b border-institutional-secondary pb-2">
                            Institución
                        </h3>
                        <div className="space-y-3 text-sm">
                            <p className="text-institutional-light font-bold">
                                Institución Universitaria Colegio Mayor del Cauca
                            </p>
                            <div className="text-gray-400 grid grid-cols-1 gap-1">
                                <p>Sede Bicentenario: Cra 7 # 2-41</p>
                                <p className="text-white font-medium mt-1">Facultad de Ingeniería</p>
                                <p className="text-institutional-light">Laboratorio de Física y Sistemas Embebidos</p>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 border-b border-institutional-secondary pb-2">
                            Enlaces de Interés
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="https://www.unimayor.edu.co" target="_blank" rel="noopener noreferrer" className="hover:text-institutional-accent transition-colors">
                                    Portal Unimayor
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-institutional-accent transition-colors">
                                    Reglamento de Laboratorios
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-institutional-accent transition-colors">
                                    Calendario Académico
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto Rápido */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4 border-b border-institutional-secondary pb-2">
                            Soporte Técnico
                        </h3>
                        <p className="text-sm text-gray-300 mb-2">
                            ¿Problemas con el sistema?
                        </p>
                        <a href="mailto:sdionizio@unimayor.edu.co" className="text-institutional-accent font-semibold hover:underline">
                            sdionizio@unimayor.edu.co
                        </a>

                        <div className="mt-8">
                            <p className="text-sm font-semibold text-institutional-light mb-4 text-center md:text-left">Síguenos en nuestras redes sociales</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                {/* Facebook */}
                                <a href="https://www.facebook.com/unimayor" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-institutional-secondary transition-all transform hover:-translate-y-1"
                                    title="Facebook">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" /></svg>
                                </a>

                                {/* Instagram */}
                                <a href="https://www.instagram.com/unimayor" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-institutional-secondary transition-all transform hover:-translate-y-1"
                                    title="Instagram">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>

                                {/* TikTok */}
                                <a href="https://www.tiktok.com/@unimayor_oficial" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-institutional-secondary transition-all transform hover:-translate-y-1"
                                    title="TikTok">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A145.55 145.55 0 1 1 184 203.8h6v106.31a47.11 47.11 0 1 0 43 46.51V0h106.31a106.31 106.31 0 0 0 106.31 106.31z" /></svg>
                                </a>

                                {/* YouTube */}
                                <a href="https://www.youtube.com/user/colmayorcauca" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-institutional-secondary transition-all transform hover:-translate-y-1"
                                    title="YouTube">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                </a>

                                {/* X (Twitter) */}
                                <a href="https://x.com/unimayor" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-institutional-secondary transition-all transform hover:-translate-y-1"
                                    title="X (Twitter)">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Powered by Antigravity - Subtle indicator */}
                <div className="border-t border-white border-opacity-10 pt-6 text-center text-xs text-gray-400">
                    <p>© {new Date().getFullYear()} Institución Universitaria Colegio Mayor del Cauca. Todos los derechos reservados.</p>
                    <p className="mt-1 font-medium">Sistema de Gestión de Laboratorios V1.0</p>
                </div>
            </div>
        </footer>
    )
}
