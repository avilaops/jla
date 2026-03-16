'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">JLA</span>
              <span className="ml-2 text-xl text-secondary">IMPORTADORA</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-primary transition-colors">
              Sobre
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-primary transition-colors">
              Serviços
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-primary transition-colors">
              Produtos
            </Link>
            <Link href="#advantages" className="text-gray-700 hover:text-primary transition-colors">
              Vantagens
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contato
            </Link>
            <Link
              href="#contact"
              className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              Solicitar Cotação
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#products"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="#advantages"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Vantagens
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </Link>
            <Link
              href="#contact"
              className="block mx-3 mt-2 text-center bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Solicitar Cotação
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
