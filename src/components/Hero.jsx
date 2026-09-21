const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-bold">
            GourmetOn
        </h1>

        <p className="mt-4 text-xl max-w-2xl">
            Seu Delivery Favorito em um so lugar.
        </p>

        <button className="mt-6 bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Peça Já
        </button>
    </section>
  )
}

export default Hero
