const advantages = [
  {
    title: 'Economia de Tempo',
    description: 'Cuidamos de toda a burocracia enquanto você foca no seu negócio',
    icon: '⏱️'
  },
  {
    title: 'Redução de Custos',
    description: 'Negociação com fornecedores e otimização tributária',
    icon: '💰'
  },
  {
    title: 'Segurança Jurídica',
    description: 'Conformidade com todas as legislações e normas',
    icon: '🛡️'
  },
  {
    title: 'Rede Global',
    description: 'Parceiros em mais de 50 países',
    icon: '🌍'
  },
  {
    title: 'Acompanhamento em Tempo Real',
    description: 'Rastreamento completo de todas as etapas',
    icon: '📊'
  },
  {
    title: 'Suporte Especializado',
    description: 'Equipe experiente disponível para atendê-lo',
    icon: '👥'
  }
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Por Que Escolher a JLA?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Diferenciais que fazem da JLA Importadora sua melhor escolha
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-5xl mb-4">{advantage.icon}</div>
              <h3 className="text-2xl font-bold mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Resultados Comprovados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">98%</div>
                <p className="text-lg">Taxa de Satisfação</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">-30%</div>
                <p className="text-lg">Redução Média de Custos</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-secondary mb-2">24h</div>
                <p className="text-lg">Tempo Médio de Resposta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
