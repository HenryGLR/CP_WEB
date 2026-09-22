const Funcionalidades = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold mb-2">
            Funcionalidades
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Tudo para facilitar seu pedido
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Encontre seus pratos favoritos de forma rápida e prática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">
              <span className="material-icons text-orange-500" aria-hidden="true">
                search
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Busca rápida
            </h3>

            <p className="mt-2 text-gray-600">
              Pesquise facilmente pelo prato ou restaurante que você deseja.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">
              <span className="material-icons text-orange-500" aria-hidden="true">
                restaurant
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Categorias
            </h3>

            <p className="mt-2 text-gray-600">
              Explore diferentes tipos de comida e encontre novas opções.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">
              <span className="material-icons text-orange-500" aria-hidden="true">
                tune
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Filtros
            </h3>

            <p className="mt-2 text-gray-600">
              Filtre os resultados para encontrar exatamente o que procura.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">
              <span className="material-icons text-orange-500" aria-hidden="true">
                favorite
              </span>
            </div>

            <h3 className="text-xl font-bold text-gray-900">
              Favoritos
            </h3>

            <p className="mt-2 text-gray-600">
              Salve seus pratos e restaurantes preferidos para acessar depois.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Funcionalidades