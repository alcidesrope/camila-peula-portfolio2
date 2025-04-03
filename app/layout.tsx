import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Camila Peula | Art & Costume Director",
  description: "Portfolio of Camila Peula, Art and Costume Director",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#fdeaf2]`}>
        <Navigation />
        <main className="min-h-screen pt-16">{children}</main>
      </body>
    </html>
  )
}

