"use client"

import { type ComponentType, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import {
  AlertCircle,
  Calendar,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  UtensilsCrossed,
  Wifi,
  X,
} from "lucide-react"

type PopupType = "payment" | "wifi" | null

type QuickAction = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
  action: string
  href?: string
  external?: boolean
  accent: string
  onClick?: () => void
}

const PAYMENT_NOTICE_KEY = "guest-payment-notice-date"

export default function GuestPortalClient() {
  const [activePopup, setActivePopup] = useState<PopupType>(null)

  useEffect(() => {
    const today = new Date().toISOString().slice(0, 10)
    const lastSeenDate = window.localStorage.getItem(PAYMENT_NOTICE_KEY)

    if (lastSeenDate !== today) {
      setActivePopup("payment")
      window.localStorage.setItem(PAYMENT_NOTICE_KEY, today)
    }
  }, [])

  const quickActions: QuickAction[] = useMemo(
    () => [
      {
        icon: Wifi,
        title: "WiFi Access",
        description: "Connect to our high-speed internet",
        action: "View Details",
        accent: "text-cyan-300",
        onClick: () => setActivePopup("wifi"),
      },
      {
        icon: Calendar,
        title: "Book / Extend Stay",
        description: "Manage your reservation",
        action: "Book Now",
        href: "https://hotelexcella.bookmystay.io/",
        external: true,
        accent: "text-yellow-300",
      },
      {
        icon: Phone,
        title: "Reception Help",
        description: "Dial 9 from room phone · Direct call: 7702483811",
        action: "Call Now",
        href: "tel:+917702483811",
        accent: "text-emerald-300",
      },
      {
        icon: AlertCircle,
        title: "Report an Issue",
        description: "WhatsApp Support: 9985908131",
        action: "WhatsApp",
        href: "https://wa.me/919985908131?text=Hi%2C%20I%20am%20a%20guest%20at%20Hotel%20Excella%20and%20I%20would%20like%20to%20report%20an%20issue.",
        external: true,
        accent: "text-amber-300",
      },
      {
        icon: UtensilsCrossed,
        title: "Food Menu",
        description: "Browse our dining options",
        action: "View Menu",
        href: "https://hotelexcellafoodmenu.netlify.app/",
        external: true,
        accent: "text-rose-300",
      },
      {
        icon: Star,
        title: "Review Us",
        description: "Share your experience",
        action: "Leave Review",
        href: "https://search.google.com/local/writereview?placeid=ChIJH-C8eTZbOToRDi7ckoJipcQ",
        external: true,
        accent: "text-yellow-300",
      },
      {
        icon: MapPin,
        title: "Location",
        description: "Get directions to Hotel Excella",
        action: "Open Maps",
        href: "https://maps.app.goo.gl/C4MScoYMJLYnc3Gz6?g_st=ac",
        external: true,
        accent: "text-violet-300",
      },
      {
        icon: ShieldCheck,
        title: "Authorized Payments",
        description: "Important payment information",
        action: "View Details",
        accent: "text-yellow-300",
        onClick: () => setActivePopup("payment"),
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <header className="border-b border-[#c8a45c]/30 bg-[#0e0e0e]">
        <div className="mx-auto max-w-lg px-5 py-6 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qq8Cvn8rVABsuUvFcXt0Nc1n64vZlL.png"
            alt="Hotel Excella Logo"
            width={170}
            height={84}
            className="mx-auto h-auto w-[150px]"
            priority
          />
        </div>
      </header>

      <main className="mx-auto max-w-lg px-5 pb-12 pt-6">
        <section className="relative overflow-hidden rounded-3xl border border-[#c8a45c]/35 shadow-[0_22px_45px_-30px_rgba(200,164,92,0.7)]">
          <Image
            src="/placeholder.jpg"
            alt="Hotel Excella exterior"
            width={900}
            height={550}
            className="h-[230px] w-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/40" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <h1 className="font-serif text-3xl font-semibold text-white">Welcome to Hotel Excella</h1>
            <p className="mt-2 text-sm text-white/85">Quick services at your fingertips</p>
          </div>
        </section>

        <section className="mt-6 space-y-4">
          {quickActions.map((action) => {
            const cardContent = (
              <>
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 ${action.accent}`}>
                  <action.icon className="h-7 w-7" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-base font-semibold text-white">{action.title}</h2>
                  <p className="mt-1 text-sm text-white/70">{action.description}</p>
                </div>
                <div className="rounded-xl border border-[#c8a45c]/60 bg-[#c8a45c]/10 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[#f0d18f] transition group-hover:bg-[#c8a45c]/20">
                  {action.action}
                </div>
              </>
            )

            if (action.onClick) {
              return (
                <button
                  key={action.title}
                  type="button"
                  onClick={action.onClick}
                  className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-[#171717] p-4 text-left shadow-[0_20px_40px_-36px_rgba(0,0,0,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8a45c]/50 hover:bg-[#1b1b1b]"
                >
                  {cardContent}
                </button>
              )
            }

            return (
              <a
                key={action.title}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#171717] p-4 shadow-[0_20px_40px_-36px_rgba(0,0,0,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c8a45c]/50 hover:bg-[#1b1b1b]"
              >
                {cardContent}
              </a>
            )
          })}
        </section>
      </main>

      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl border border-[#c8a45c]/70 bg-[#161616] p-6 text-white shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-[#f5dca5]">
                {activePopup === "payment" ? "Important Payment Notice" : "WiFi Access"}
              </h3>
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setActivePopup(null)}
                className="rounded-full border border-white/10 p-1.5 text-white/70 transition hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {activePopup === "payment" ? (
              <div className="space-y-4 text-sm text-white/85">
                <p>
                  Please make payments only to authorized Hotel Excella payment channels or approved persons.
                </p>
                <div className="rounded-2xl border border-[#c8a45c]/35 bg-[#202020] p-4">
                  <p className="mb-2 text-xs uppercase tracking-wide text-[#f0d18f]">Authorized</p>
                  <ul className="space-y-1.5">
                    <li>• Sanvi Group of Hotels QR</li>
                    <li>• Shobhan Kumar</li>
                    <li>• Nageswararao K</li>
                  </ul>
                </div>
                <p className="rounded-2xl border border-rose-400/35 bg-rose-400/10 p-3 text-rose-100">
                  Payments made to unauthorized personal staff accounts may not be considered valid.
                </p>
                <p className="text-white/80">If unsure, kindly contact reception before making payment.</p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setActivePopup(null)}
                    className="rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
                  >
                    Understood
                  </button>
                  <a
                    href="tel:+917702483811"
                    className="rounded-xl bg-[#c8a45c] px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#d7b877]"
                  >
                    Contact Reception
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-sm text-white/85">
                <div className="rounded-2xl border border-white/15 bg-[#202020] p-4">
                  <p className="text-xs uppercase tracking-wide text-[#f0d18f]">Network Name</p>
                  <p className="mt-1 font-semibold text-white">Hotel Excella</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-[#202020] p-4">
                  <p className="text-xs uppercase tracking-wide text-[#f0d18f]">Password</p>
                  <p className="mt-1 font-semibold text-white">Not Required</p>
                </div>
                <p>Please contact reception if you face any issue while connecting.</p>
                <button
                  type="button"
                  onClick={() => setActivePopup(null)}
                  className="w-full rounded-xl bg-[#c8a45c] px-4 py-3 text-sm font-semibold text-black transition hover:bg-[#d7b877]"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="pb-10 text-center">
        <p className="text-xs text-white/50">&copy; {new Date().getFullYear()} Hotel Excella. All rights reserved.</p>
        <p className="mt-1 text-xs text-white/50">Thank you for staying with us!</p>
      </footer>
    </div>
  )
}
