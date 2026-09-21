const Depoimentos = () => {
  const depoimentos = [
    {
      nome: "Mariana Silva",
      texto: "O GourmetOn facilitou muito meus pedidos. Tudo é rápido, simples e fácil de usar.",
      avaliacao: "⭐⭐⭐⭐⭐",
    },
    {
      nome: "Lucas Martins",
      texto: "Gostei bastante da variedade de restaurantes e da praticidade para encontrar os pratos.",
      avaliacao: "⭐⭐⭐⭐⭐",
    },
    {
      nome: "Ana Souza",
      texto: "A experiência é muito boa e o aplicativo deixa o pedido bem mais organizado.",
      avaliacao: "⭐⭐⭐⭐⭐",
    },
  ]

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold mb-2">
            Depoimentos
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            O que nossos clientes dizem
          </h2>

          <p className="mt-4 text-gray-500">
            Confira a experiência de quem já utiliza o GourmetOn.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, indice) => (
            <div
              key={indice}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <p className="text-lg mb-4">
                {depoimento.avaliacao}
              </p>

              <p className="text-gray-600">
                "{depoimento.texto}"
              </p>

              <h3 className="mt-6 font-bold text-gray-900">
                {depoimento.nome}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Depoimentos