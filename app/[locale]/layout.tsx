import { Analytics } from '@vercel/analytics/react'
import { type Metadata } from 'next'
import { Prata } from 'next/font/google'
import '../../style/globals.css'
import { redirect } from 'next/navigation'
import { type AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'
import { env } from '@/env.mjs'
import { type Locale, defaultLocale } from '@/i18n'
import { type MetadataProps, getMetadata } from '@/utils/metadata'

const prata = Prata({ subsets: ['latin'], weight: ['400'] })

export async function generateMetadata({
  params: { locale },
}: MetadataProps): Promise<Metadata> {
  const metadata = await getMetadata({ locale, localeNamespace: 'home' })
  return {
    ...metadata,
    verification: {
      google: 'FM0rw-Kp4MDRShwshRp7CS8wSzEaBTewsZwcMoojv2s',
    },
  }
}

const RootLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: Locale }
}) => {
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
          <div className="flex min-h-[100dvh] flex-col overflow-clip">
            <Header />
            <main>{children}</main>
            {env.NODE_ENV === 'production' && <Analytics />}
          </div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
