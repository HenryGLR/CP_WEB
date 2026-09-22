const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <span className="inline-block bg-orange-100 text-orange-600 font-semibold px-4 py-2 rounded-full mb-6">
            🍔 Delivery rápido e fácil
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Sua comida favorita
            <span className="text-orange-500">
              {" "}onde você estiver.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Descubra restaurantes, encontre seus pratos favoritos e receba tudo
            com rapidez, praticidade e segurança usando o GourmetOn.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <button className="bg-orange-500 text-white px-7 py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300 shadow-lg">
              Baixar o app
            </button>

            <a
              href="#pratos"
              className="border border-gray-300 text-gray-700 px-7 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300 text-center"
            >
              Ver pratos
            </a>

          </div>

          <div className="mt-10 flex gap-8">

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                +100
              </h3>
              <p className="text-gray-500">
                Restaurantes
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                +5 mil
              </h3>
              <p className="text-gray-500">
                Clientes
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                4.9
              </h3>
              <p className="text-gray-500">
                Avaliação
              </p>
            </div>

          </div>
        </div>

        <div className="relative">

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80"
            alt="Mesa com diferentes pratos de comida"
            className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
          />

          <div className="absolute bottom-6 left-6 bg-white p-4 rounded-2xl shadow-xl">
            <p className="text-sm text-gray-500">
              Tempo médio
            </p>

            <p className="text-xl font-bold text-gray-900">
              ⚡ 25 minutos
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero
