import { useState } from "react"

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <a
          href="#inicio"
          className="text-2xl font-bold text-orange-500"
        >
          GourmetOn
        </a>

        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#inicio" className="hover:text-orange-500 transition">
            Início
          </a>

          <a href="#pratos" className="hover:text-orange-500 transition">
            Pratos
          </a>

          <a href="#sobre" className="hover:text-orange-500 transition">
            Sobre
          </a>

          <a href="#contato" className="hover:text-orange-500 transition">
            Contato
          </a>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>

      </div>

      {menuAberto && (
        <div className="md:hidden bg-white px-6 pb-5 flex flex-col gap-4 font-medium text-gray-700">

          <a
            href="#inicio"
            onClick={() => setMenuAberto(false)}
          >
            Início
          </a>

          <a
            href="#pratos"
            onClick={() => setMenuAberto(false)}
          >
            Pratos
          </a>

          <a
            href="#sobre"
            onClick={() => setMenuAberto(false)}
          >
            Sobre
          </a>

          <a
            href="#contato"
            onClick={() => setMenuAberto(false)}
          >
            Contato
          </a>

        </div>
      )}
    </nav>
  )
}

export default Navbar