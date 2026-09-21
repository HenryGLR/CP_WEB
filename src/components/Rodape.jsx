const Rodape = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold text-orange-500">
              GourmetOn
            </h2>

            <p className="mt-4 text-gray-400">
              Seu delivery favorito em um só lugar.
              Praticidade, variedade e rapidez para você.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">
              Links rápidos
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Início
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Restaurantes
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">
              Contato
            </h3>

            <p className="text-gray-400">
              contato@gourmeton.com
            </p>

            <p className="text-gray-400 mt-2">
              Instagram: @gourmeton
            </p>

            <p className="text-gray-400 mt-2">
              São Paulo - SP
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-500">

          <p>
            © 2026 GourmetOn. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500 transition">
              Termos de Uso
            </a>

            <a href="#" className="hover:text-orange-500 transition">
              Política de Privacidade
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Rodape