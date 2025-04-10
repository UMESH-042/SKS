"use client"

import { Button } from "@/components/ui/button"

export default function ContactForm() {
  return (
    <form className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="name" className="text-xs md:text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-xs md:text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
            placeholder="Your phone number"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-xs md:text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          placeholder="Your email address"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-xs md:text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
          placeholder="How can we help you?"
        ></textarea>
      </div>

      <Button className="w-full bg-amber-500 text-zinc-900 hover:bg-amber-600">Send Message</Button>
    </form>
  )
}
