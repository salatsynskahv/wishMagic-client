import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'
import {AuthProvider} from "@/components/context/AuthContext";
import store from "@/components/store/store";
import React from "react";
import {Provider} from "react-redux";
import StoreProvider from "@/app/StoreProvider";

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
      <StoreProvider>
        <body className={inter.className}>{children}</body>
      </StoreProvider>
    </AuthProvider>
    </html>
  )
}
