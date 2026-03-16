export default function Hero() {
  return (
    <section className="relative pt-24 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "linear-gradient(135deg, #0f3460 0%, #16c784 100%)"
        }}>
        <span className="w-full h-full absolute opacity-75 bg-black"></span>
      </div>
      <div className="container relative mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-white font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
                JLA IMPORTADORA
              </h1>
              <p className="mt-4 text-lg text-gray-200 md:text-xl lg:text-2xl max-w-3xl mx-auto">
                Conectando o Brasil ao mercado global com <span className="text-secondary font-semibold">eficiência</span>, 
                <span className="text-secondary font-semibold"> segurança</span> e 
                <span className="text-secondary font-semibold"> expertise</span> em importação
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#services"
                  className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transform transition hover:scale-105"
                >
                  Conheça Nossos Serviços
                </a>
                <a
                  href="#contact"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transform transition hover:scale-105"
                >
                  Fale Conosco
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-50 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  )
}
