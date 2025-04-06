import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SKS Repairing Works - Truck Cabin Building & Body Repairing",
  description:
    "Specialists in custom truck cabin fabrication, welding, and body repair services for TATA, Ashok Leyland, and other commercial vehicles.",
  keywords: "truck welding, truck cabin fabrication, body repair, TATA trucks, Ashok Leyland, welding services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

