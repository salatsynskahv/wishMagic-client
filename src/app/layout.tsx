import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import {AuthProvider} from "@/components/context/AuthContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wish Magic',
  description: 'Create and Share Wishes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <AuthProvider>
      <body className={inter.className}>{children}</body>
    </AuthProvider>
    </html>
  )
}
