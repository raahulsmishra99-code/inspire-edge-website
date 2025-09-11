import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Inspire Edge Ventures - Comprehensive Business Solutions',
  description: 'Empowering businesses with financial services, infrastructure, education, process optimization, and outsourcing solutions.',
  keywords: 'financial services, infrastructure, education services, process creation, outsourcing, manpower supply, business solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
