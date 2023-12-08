import type { Metadata } from 'next'
import { Prata } from 'next/font/google'
import '../style/globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
// import { ClerkProvider } from '@clerk/nextjs'

const prata = Prata({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'JandS - Home',
  description: 'Handmade resin creations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <ClerkProvider>
    <html lang="it">
      <body className={`${prata.className}`}>
        <div className="flex min-h-[100dvh] flex-col overflow-hidden">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
    // </ClerkProvider>
  )
}
