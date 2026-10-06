import { useState } from 'react'

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path className="w-6 h-6" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a3 3 0 003 3h5a3 3 0 003-3v-5m-14 4v-5a3 3 0 013-3h10a3 3 0 013 3v5m14-4a4 4 0 01-4 4H8m6-4h.01M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">FoodApp</span>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path className="w-6 h-6" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-white top-16 left-0 w-64 shadow-2xl transform translate-x-full md:translate-x-0 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-8 pt-16">
          <a href="#food" className="block mb-4 text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors">
            Menú
          </a>
          <a href="#about" className="block mb-4 text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors">
            Nosotros
          </a>
          <a href="#contact" className="block mb-4 text-2xl font-bold text-gray-900 hover:text-red-600 transition-colors">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}