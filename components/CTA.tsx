export default function CTA() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Pronto para Expandir Seus Negócios?
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
          Entre em contato conosco e descubra como podemos ajudar sua empresa a alcançar novos mercados
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white hover:bg-gray-100 text-secondary font-bold px-10 py-4 rounded-full text-lg shadow-lg transform transition hover:scale-105 inline-block"
          >
            Solicitar Orçamento
          </a>
          <a
            href="tel:+5511999999999"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-secondary text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg transform transition hover:scale-105 inline-block"
          >
            Ligar Agora
          </a>
        </div>
      </div>
    </section>
  )
}
