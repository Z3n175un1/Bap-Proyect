export default function FoodPage() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Menú de la Casa</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FoodItem name="Pizza Margherita" description="Salsa de tomate, mozzarella fresca y albahaca" price={12.99} />
          <FoodItem name="Sushi Roll" description="Pescado fresco y vegetales con arroz y alga" price={15.99} />
          <FoodItem name="Burger Classic" description="Hamburguesa con carne de res, queso, lechuga y salsa especial" price={9.99} />
          <FoodItem name="Pasta Carbonara" description="Pasta crema con huevo, queso, panceta y pimienta" price={14.99} />
          <FoodItem name="Ensalada César" description="Lechuga romana, pollo a la parrilla, crutones y aderezo César" price={8.99} />
          <FoodItem name="Tacos Al Pastor" description="Tortillas con cerdo adobado, piña y cebolla" price={7.99} />
        </div>
      </div>
    </section>
  )
}
