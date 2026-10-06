import { animate } from 'framer-motion'

export default function MainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-white animate-bounce">
            Bienvenido a FoodTube
          </h1>
          <p className="text-xl text-white/80 mt-4">
            Tu aplicación de comida favorita
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FoodItem
            name="Pizza Margherita"
            description="Salsa de tomate, mozzarella fresca y albahaca"
            price={12.99}
          />
          <FoodItem
            name="Sushi Roll"
            description="Pescado fresco y vegetales con arroz y alga"
            price={15.99}
          />
          <FoodItem
            name="Burger Classic"
            description="Hamburguesa con carne de res, queso, lechuga y salsa especial"
            price={9.99}
          />
        </div>

        <section className="mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Promociones Especiales</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-yellow-100 rounded-lg p-6 animate-pulse">
              <h4 className="text-xl font-bold text-yellow-800">¡2x1 en Pizza!</h4>
              <p className="text-gray-700 mt-2">Solo hoy hasta las 10pm</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-6 animate-bounce">
              <h4 className="text-xl font-bold text-purple-800">Sushi Ilimitado</h4>
              <p className="text-gray-700 mt-2">Domingos todo el día</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}