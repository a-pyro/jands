import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'J and S - Home',
  description: 'J and S - Handmade resin creations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="h-screen">
      <body className={`${inter.className}`}>
        <Header />
        <main className={'h-[calc(100vh-60px)]'}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
