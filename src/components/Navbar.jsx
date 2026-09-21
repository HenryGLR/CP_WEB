const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-white shadow">
      
      <h1 className="text-2xl font-bold text-orange-500">
        GourmetOn
      </h1>

      <div className="flex gap-6">
        <a href="#" className="hover:text-orange-500">Início</a>
        <a href="#" className="hover:text-orange-500">Restaurantes</a>
        <a href="#" className="hover:text-orange-500">Sobre</a>
        <a href="#" className="hover:text-orange-500">Contato</a>
      </div>

    </nav>
  )
}

export default Navbar