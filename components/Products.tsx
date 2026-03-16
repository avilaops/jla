interface Produto {
  codigo: string
  nome: string
  categoria: string
  descricao: string
  material: string
  dureza: string
  pressao: string
  temperatura: string
}

interface ProdutosData {
  produtos: Produto[]
  totalPaginas: number
  dataExtracao: string
}

async function getProdutos(): Promise<ProdutosData> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
  
  try {
    const res = await fetch(`${API_URL}/api/produtos`, {
      cache: 'no-store'
    })
    
    if (!res.ok) {
      throw new Error('Failed to fetch produtos')
    }
    
    return res.json()
  } catch (error) {
    console.error('Erro ao buscar produtos:', error)
    return {
      produtos: [],
      totalPaginas: 0,
      dataExtracao: new Date().toISOString()
    }
  }
}

export default async function Products() {
  const data = await getProdutos()

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluções em vedação industrial de alta qualidade, importadas diretamente dos melhores fabricantes
          </p>
          {data.totalPaginas > 0 && (
            <p className="mt-4 text-sm text-gray-500">
              {data.totalPaginas} páginas de catálogo disponíveis
            </p>
          )}
        </div>

        {data.produtos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum produto disponível no momento. Entre em contato para informações.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.produtos.map((produto) => (
              <div
                key={produto.codigo}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header do Card */}
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">
                      {produto.codigo}
                    </span>
                    <span className="text-3xl">
                      {produto.categoria === 'Hydraulic Sealing' ? '🔧' : 
                       produto.categoria === 'Pneumatic Sealing' ? '💨' : '⭕'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {produto.categoria}
                  </p>
                </div>

                {/* Corpo do Card */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {produto.descricao}
                  </p>

                  {/* Especificações Técnicas */}
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-700">Material</p>
                        <p className="text-sm text-gray-600">{produto.material}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-700">Dureza</p>
                        <p className="text-sm text-gray-600">{produto.dureza}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-700">Pressão</p>
                        <p className="text-sm text-gray-600">{produto.pressao}</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-700">Temperatura</p>
                        <p className="text-sm text-gray-600">{produto.temperatura}</p>
                      </div>
                    </div>
                  </div>

                  {/* Botão de Ação */}
                  <div className="mt-6">
                    <a
                      href="#contact"
                      className="block w-full text-center bg-secondary hover:bg-secondary/90 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105"
                    >
                      Solicitar Cotação
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA adicional */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Temos acesso a um catálogo completo com centenas de produtos. Entre em contato e nossa equipe 
            ajudará você a encontrar a solução perfeita para sua necessidade.
          </p>
          <a
            href="#contact"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 rounded-full transition-all transform hover:scale-105"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  )
}
