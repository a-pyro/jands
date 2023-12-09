import type { Metadata } from 'next'
import { Prata } from 'next/font/google'
import '../../style/globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import { type Locale } from '@/navigation'

const prata = Prata({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'JandS - Home',
  description: 'Handmade resin creations',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const { locale } = params
  return (
    <html lang={locale}>
      <body className={`${prata.className}`}>
        <div className="flex min-h-[100dvh] flex-col overflow-hidden">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
