import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextAppDirEmotionCacheProvider } from 'tss-react/next'
import { NextIntlClientProvider, useMessages } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lu Lu Land',
  description: 'Welcome to Lu Lu Land',
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  )
}
