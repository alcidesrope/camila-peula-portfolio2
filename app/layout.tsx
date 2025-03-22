import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

const poppins = Poppins({
  weight: ['400', '500', '700'], // Pesos que necesites
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Camila Peula | Dirección de Arte y Vestuario",
  description: "Portfolio de Camila Peula, Directora de Arte y Vestuario con amplia experiencia en la industria audiovisual."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className, poppins.className} bg-[#1f1f1f] text-white`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t py-6 mt-2 md:py-0">
          <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row md:justify-center">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              &copy; {new Date().getFullYear()} Camila Peula. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 px-4">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Instagram
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                LinkedIn
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Contacto
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

