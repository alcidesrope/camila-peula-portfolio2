"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const routes = [
  { name: "Inicio", path: "/" },
  { name: "Películas", path: "/peliculas" },
  { name: "Publicidad", path: "/publicidad" },
  { name: "Series", path: "/series" },
  { name: "Cortometrajes", path: "/cortometrajes" },
  { name: "Videoclips", path: "/videoclips" },
  { name: "Info", path: "/info" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdeaf2]/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-medium">
          Camila Peula
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`hover:text-gray-600 transition-colors ${pathname === route.path ? "font-medium" : ""}`}
            >
              {route.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden py-4 px-4 bg-[#fdeaf2] border-t">
          <div className="flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`hover:text-gray-600 transition-colors ${pathname === route.path ? "font-medium" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

