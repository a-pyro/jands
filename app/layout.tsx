import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'

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
    <html lang="it">
      <body className={`${inter.className}`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
