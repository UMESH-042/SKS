"use client"

import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <Button className="bg-amber-500 text-zinc-900 hover:bg-amber-600 w-full sm:w-auto">Get a Quote</Button>
      <Button
        variant="outline"
        className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-900 w-full sm:w-auto"
      >
        <PhoneCall className="mr-2 h-4 w-4" /> Call Now: 6355108714
      </Button>
    </div>
  )
}

export function AboutButton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button className="bg-amber-500 text-zinc-900 hover:bg-amber-600 w-full sm:w-auto">
        Learn More About Our Journey
      </Button>
    </div>
  )
}

export function GalleryButton() {
  return (
    <Button variant="outline" className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-zinc-900">
      View All Projects
    </Button>
  )
}
