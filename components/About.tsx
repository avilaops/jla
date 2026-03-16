export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl mb-2 font-bold text-primary">
              Sobre a JLA Importadora
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
              Com anos de experiência no mercado de importação, a JLA Importadora se consolidou como referência 
              em soluções para empresas que desejam expandir seus negócios através do comércio exterior.
            </p>
            <p className="text-lg leading-relaxed mb-4 text-gray-700">
              Nossa missão é simplificar o processo de importação, oferecendo um serviço completo e personalizado, 
              desde a negociação com fornecedores internacionais até a entrega final no Brasil.
            </p>
          </div>

          <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-primary">
              <div className="px-6 py-6">
                <div className="flex flex-wrap">
                  <div className="w-full px-4">
                    <h3 className="text-3xl font-bold text-white mb-8">Nossa Expertise</h3>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                            <span className="text-2xl font-bold">15+</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-white">Anos de Experiência</h4>
                          <p className="text-gray-300">No mercado de importação</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                            <span className="text-2xl font-bold">500+</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-white">Clientes Satisfeitos</h4>
                          <p className="text-gray-300">Em todo o Brasil</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                            <span className="text-2xl font-bold">50+</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-semibold text-white">Países de Origem</h4>
                          <p className="text-gray-300">Rede global de fornecedores</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
