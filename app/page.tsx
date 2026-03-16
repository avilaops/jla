import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Advantages from '@/components/Advantages'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Advantages />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
