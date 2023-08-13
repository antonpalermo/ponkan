import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import type { Metadata } from "next"

import "ui/src/globals.css"
import { Toaster } from "ui"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "Ponkan - %s",
    default: "Ponkan"
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  )
}
