"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PhoneCall, Menu } from "lucide-react"

export default function MobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="outline" className="border-zinc-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-zinc-900 border-b border-zinc-800 py-4 shadow-lg">
          <nav className="container flex flex-col space-y-4">
            <Link
              href="#home"
              className="text-sm font-medium hover:text-amber-500 transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-amber-500 transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-amber-500 transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#gallery"
              className="text-sm font-medium hover:text-amber-500 transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-amber-500 transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-amber-500 transition-colors px-2 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="flex items-center justify-center w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-900 mt-2">
              <PhoneCall className="mr-2 h-4 w-4" /> 6355108714
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}

