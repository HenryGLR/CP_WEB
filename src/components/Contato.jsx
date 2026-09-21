import { useState } from "react"

const Contato = () => {
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  const enviarFormulario = (evento) => {
    evento.preventDefault()

    if (email.trim() === "") {
      setMensagem("Digite um e-mail válido.")
      return
    }

    setMensagem("E-mail cadastrado com sucesso!")
    setEmail("")
  }

  return (
    <section id = "contato"className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-orange-500 font-semibold mb-2">
          Fique por dentro
        </p>

        <h2 className="text-4xl font-bold">
          Receba novidades do GourmetOn
        </h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Cadastre seu e-mail para receber novidades, promoções
          e informações sobre novos restaurantes.
        </p>

        <form
          onSubmit={enviarFormulario}
          className="mt-10 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
        >

          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            className="flex-1 px-5 py-3 rounded-xl text-gray-900 bg-white outline-none"
          />

          <button
            type="submit"
            className="bg-orange-500 px-7 py-3 rounded-xl font-semibold hover:bg-orange-600 transition duration-300"
          >
            Cadastrar
          </button>

        </form>

        {mensagem && (
          <p className="mt-4 text-sm text-gray-300">
            {mensagem}
          </p>
        )}

      </div>
    </section>
  )
}

export default Contato