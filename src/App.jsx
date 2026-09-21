import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Beneficios from "./components/Beneficios"
import Funcionalidades from "./components/Funcionalidades"
import Pratos from "./components/Pratos"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beneficios />
      <Funcionalidades />
      <Pratos />
    </div>
  )
}

export default App