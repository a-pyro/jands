import type { Metadata } from 'next'
import { Prata } from 'next/font/google'
import '../../style/globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import { type Locale } from '@/navigation'
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

const prata = Prata({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'JandS - Home',
  description: 'Handmade resin creations',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const { locale } = params
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const messages = (await import(`../../lang/${locale}.json`)).default
  return (
    <html lang={locale}>
      <body className={`${prata.className}`}>
        <NextIntlClientProvider messages={messages as AbstractIntlMessages}>
          <div className="flex min-h-[100dvh] flex-col overflow-hidden">
            <Header />
            <main>{children}</main>
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
