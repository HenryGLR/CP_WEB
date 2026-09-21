import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Beneficios from "./components/Beneficios"
import Funcionalidades from "./components/Funcionalidades"
import Pratos from "./components/Pratos"
import Depoimentos from "./components/Depoimentos"
import Contato from "./components/Contato"
import Rodape from "./components/Rodape"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beneficios />
      <Funcionalidades />
      <Pratos />
      <Depoimentos />
      <Contato />
      <Rodape />
    </div>
  )
}

export default App