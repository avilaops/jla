import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JLA Importadora - Soluções em Importação',
  description: 'Especialistas em importação de produtos industriais e comerciais. Conectando o Brasil ao mercado global com eficiência e segurança.',
  keywords: ['importação', 'comércio exterior', 'produtos industriais', 'JLA Importadora'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
