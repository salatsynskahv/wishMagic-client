import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.scss'
import {AuthProvider} from "@/components/context/AuthContext";
import React, {ReactNode} from "react";
import StoreProvider from "@/app/StoreProvider";
import {IntlProvider} from "react-intl";
import {NextIntlClientProvider, useMessages} from 'next-intl'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wish Magic',
  description: 'Create and Share Wishes',
}
interface LocaleLayoutProps {
  children: ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ua' }]
}

export default function LocaleLayout({children, params: {locale}}: LocaleLayoutProps) {
  const messages = useMessages();
  return (
    <html lang={locale}>
    <AuthProvider>
      <StoreProvider>
        <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>{children}</body>
        </NextIntlClientProvider>
      </StoreProvider>
    </AuthProvider>
    </html>
  )
}
