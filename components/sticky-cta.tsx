"use client"

import Link from "next/link"
import { Phone, MessageCircle, Calendar, ClipboardCheck } from "lucide-react"

export function StickyCTA() {
  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-[#d1a24d]/45 bg-black/95 backdrop-blur-md">
        <div className="grid grid-cols-4 divide-x divide-[#d1a24d]/35">
          <a
            href="https://hotelexcella.bookmystay.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 text-[#d8af5a] transition-colors hover:bg-[#141414]"
          >
            <Calendar className="h-5 w-5" />
            <span className="mt-1 text-xs font-medium">Book</span>
          </a>
          <Link
            href="/prebook"
            className="flex flex-col items-center justify-center py-3 text-white transition-colors hover:bg-[#141414]"
          >
            <ClipboardCheck className="h-5 w-5" />
            <span className="mt-1 text-xs font-medium">Enquiry</span>
          </Link>
          <a
            href="tel:+919985908131"
            className="flex flex-col items-center justify-center py-3 text-white transition-colors hover:bg-[#141414]"
          >
            <Phone className="h-5 w-5" />
            <span className="mt-1 text-xs font-medium">Call</span>
          </a>
          <a
            href="https://wa.me/919985908131"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-3 text-white transition-colors hover:bg-[#141414]"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="mt-1 text-xs font-medium">WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button */}
      <a
        href="https://wa.me/919985908131"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-medium">Chat with us</span>
      </a>
    </>
  )
}
