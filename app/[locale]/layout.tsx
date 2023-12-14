import { Prata } from 'next/font/google'
import '../../style/globals.css'
import { redirect } from 'next/navigation'
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'
import { type Locale, defaultLocale } from '@/i18n'
import { type MetadataProps, getMetadata } from '@/utils/metadata'

const prata = Prata({ subsets: ['latin'], weight: ['400'] })

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const metadata = await getMetadata({ locale, localeNamespace: 'home' })
  return metadata
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) {
  const { locale } = params

  let messages
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- we trust the import
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    redirect(`/${defaultLocale}`)
  }

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
