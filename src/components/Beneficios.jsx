const Beneficios = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold mb-2">
            Por que escolher o GourmetOn?
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Tudo que você precisa em um só app
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Pensamos em cada detalhe para deixar seu pedido mais simples,
            rápido e seguro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-2xl bg-orange-50 text-center hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-5">
              ⚡
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Entrega rápida
            </h3>

            <p className="mt-3 text-gray-600">
              Receba seus pedidos com rapidez e acompanhe tudo de forma simples.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-orange-50 text-center hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-5">
              🍕
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Variedade de restaurantes
            </h3>

            <p className="mt-3 text-gray-600">
              Encontre diferentes tipos de comida e escolha seu restaurante favorito.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-orange-50 text-center hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-5">
              💳
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Pagamento fácil
            </h3>

            <p className="mt-3 text-gray-600">
              Faça seus pagamentos de maneira simples, prática e segura.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Beneficios