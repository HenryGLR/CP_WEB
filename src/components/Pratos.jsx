import { useEffect, useState } from "react"

const Pratos = () => {

  // Cria uma lista vazia para armazenar os pratos recebidos da API.
  const [pratos, setPratos] = useState([])

  // Controla se a mensagem de carregamento deve ser exibida na tela.
  const [carregando, setCarregando] = useState(true)

  // Executa o código de busca quando o componente é carregado.
  useEffect(() => {

    // Declara uma função assíncrona para buscar os pratos na API.
    const buscarPratos = async () => {

      // Inicia o bloco que pode gerar um erro durante a requisição.
      try {

        // Faz uma requisição para buscar pratos com frango e aguarda a resposta.
        const resposta = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        )

        // Converte o conteúdo da resposta para um objeto JavaScript.
        const dados = await resposta.json()

        // Salva os pratos recebidos; usa uma lista vazia se a API não retornar meals.
        setPratos(dados.meals || [])

      // Captura erros de conexão ou de processamento da resposta.
      } catch (erro) {

        // Exibe o erro no console para facilitar a identificação do problema.
        console.error("Erro ao buscar os pratos:", erro)

      // Executa este bloco depois do sucesso ou do erro da requisição.
      } finally {

        // Finaliza o carregamento e permite exibir os pratos ou o estado vazio.
        setCarregando(false)

      }

    }

    // Executa a função que realiza a busca dos pratos.
    buscarPratos()

  // O array vazio faz o efeito ser executado apenas uma vez, ao montar o componente.
  }, [])

  return (
    <section id = "pratos" className="py-20 bg-white">

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