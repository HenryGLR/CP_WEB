import { useEffect, useState } from "react"

const Pratos = () => {

  const [pratos, setPratos] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {

    const buscarPratos = async () => {

      try {

        const resposta = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        )

        const dados = await resposta.json()

        setPratos(dados.meals || [])

      } catch (erro) {

        console.error("Erro ao buscar os pratos:", erro)

      } finally {

        setCarregando(false)

      }

    }

    buscarPratos()

  }, [])

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-orange-500 font-semibold mb-2">
            Nosso cardápio
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Pratos em destaque
          </h2>

          <p className="mt-4 text-gray-500">
            Conheça algumas opções disponíveis no GourmetOn.
          </p>

        </div>

        {carregando ? (

          <p className="text-center text-gray-500">
            Carregando pratos...
          </p>

        ) : (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {pratos.slice(0, 6).map((prato) => (

              <div
                key={prato.idMeal}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >

                <img
                  src={prato.strMealThumb}
                  alt={prato.strMeal}
                  className="w-full h-56 object-cover"
                />

                <div className="p-6">

                  <p className="text-orange-500 text-sm font-semibold">
                    {prato.strCategory}
                  </p>

                  <h3 className="text-xl font-bold text-gray-900 mt-2">
                    {prato.strMeal}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Origem: {prato.strArea}
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  )
}

export default Pratos