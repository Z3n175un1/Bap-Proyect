import './App.css'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { FoodPage } from '@/views/Food/FoodPage'
import { Dashboard } from '@/views/Dashboard/Dashboard'

function App() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white mb-4 animate-bounce">
              FoodTube
            </h1>
            <p className="text-xl text-white animate-fade-in-up">
              Tu aplicación de comida favorita
            </p>
          </header>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="food-card">
              <div className="h-20 w-full bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                <p className="text-2xl font-bold text-white">🍕 Pizza</p>
              </div>
              <h3 className="text-xl font-medium text-gray-600">Pizza Margherita</h3>
              <p className="text-gray-300 text-sm mb-1">Salsa de tomate, mozzarella fresca y albahaca</p>
              <p className="text-gray-300 text-sm">$12.99</p>
            </div>

            <div className="food-card">
              <div className="h-20 w-full from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-4">
                <p className="text-2xl font-bold text-white">🍣 Sushi</p>
              </div>
              <h3 className="text-xl font-medium text-gray-600">Sushi Roll</h3>
              <p className="text-gray-300 text-sm mb-1">Pescado fresco y vegetales con arroz y alga</p>
              <p className="text-gray-300 text-sm">$15.99</p>
            </div>

            <div className="food-card">
              <div className="h-20 w-full from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                <p className="text-2xl font-bold text-white">🍔 Burger</p>
              </div>
              <h3 className="text-xl font-medium text-gray-600">Burger Classic</h3>
              <p className="text-gray-300 text-sm mb-1">Hamburguesa con carne de res, queso, lechuga y salsa especial</p>
              <p className="text-gray-300 text-sm">$9.99</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App