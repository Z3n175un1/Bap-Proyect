import { useState } from 'react'
import { FoodItem } from '@/views/Food/FoodPage'

export default function Dashboard() {
  const [stats, setStats] = useState(() => ({
    sales: 1245,
    orders: 47,
    rating: 4.8,
    growth: 12
  }))

  const handleAddOrder = () => {
    setStats(prev => ({
      ...prev,
      orders: prev.orders + 1,
      sales: prev.sales + Math.floor(Math.random() * 50 + 20)
    }))
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Panel de Control</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 rounded-lg p-6 animate-fade-in-up">
            <p className="text-gray-500 text-sm mb-2">Total Ventas</p>
            <p className="text-2xl font-bold text-blue-600">${stats.sales}</p>
          </div>
          <div className="bg-green-50 rounded-lg p-6 animate-fade-in-up" style={{ 'animation-delay': '100ms' }}>
            <p className="text-gray-500 text-sm mb-2">Pedidos Hoy</p>
            <p className="text-2xl font-bold text-green-600">{stats.orders}</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 animate-fade-in-up" style={{ 'animation-delay': '200ms' }}>
            <p className="text-gray-500 text-sm mb-2">Calificación</p>
            <p className="text-2xl font-bold text-yellow-600">{stats.rating}★</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 animate-fade-in-up" style={{ 'animation-delay': '300ms' }}>
            <p className="text-gray-500 text-sm mb-2">Crecimiento</p>
            <p className="text-2xl font-bold text-purple-600">{stats.growth}%</p>
          </div>
        </div>

        <button onClick={handleAddOrder} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors animate-fade-in-up">
          Realizar Pedido
        </button>
      </div>
    </section>
  )
}
