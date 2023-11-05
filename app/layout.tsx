import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { NAVBAR_HEIGHT } from '@/utils/css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        <main className={`h-[calc(100vh-${NAVBAR_HEIGHT})]`}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
