"use client"

import { type ComponentType, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import {
  AlertCircle,
  BedDouble,
  CalendarClock,
  ChevronRight,
  Clock3,
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
  href?: string
  external?: boolean
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
        description: "Connect to our internet",
        onClick: () => setActivePopup("wifi"),
      },
      {
        icon: BedDouble,
        title: "Book / Extend Stay",
        description: "Manage your reservation",
        href: "https://hotelexcella.bookmystay.io/",
        external: true,
      },
      {
        icon: Phone,
        title: "Reception Help",
        description: "Connect with front desk",
        href: "tel:+917702483811",
      },
      {
        icon: AlertCircle,
        title: "Report an Issue",
        description: "We're here to help",
        href: "https://wa.me/919985908131?text=Hi%2C%20I%20am%20a%20guest%20at%20Hotel%20Excella%20and%20I%20would%20like%20to%20report%20an%20issue.",
        external: true,
      },
      {
        icon: UtensilsCrossed,
        title: "Food Menu",
        description: "Browse dining options",
        href: "https://hotelexcellafoodmenu.netlify.app/",
        external: true,
      },
      {
        icon: Star,
        title: "Review Us",
        description: "Share your experience",
        href: "https://search.google.com/local/writereview?placeid=ChIJH-C8eTZbOToRDi7ckoJipcQ",
        external: true,
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <main className="mx-auto w-full max-w-md px-4 pb-8 pt-4 sm:max-w-xl sm:px-5">
        <section className="rounded-[26px] border border-[#c8a45c]/45 bg-gradient-to-b from-[#0f0f0f] to-[#070707] p-4 shadow-[0_18px_50px_-35px_rgba(200,164,92,0.8)]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qq8Cvn8rVABsuUvFcXt0Nc1n64vZlL.png"
            alt="Hotel Excella Logo"
            width={180}
            height={90}
            className="mx-auto h-auto w-[160px]"
            priority
          />

          <div className="relative mt-4 overflow-hidden rounded-2xl border border-[#c8a45c]/35">
            <Image
              src="/placeholder.jpg"
              alt="Hotel Excella exterior"
              width={900}
              height={650}
              className="h-[210px] w-full object-cover object-center sm:h-[250px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30" />
          </div>

          <div className="mt-5 px-1 text-left">
            <p className="text-[15px] text-[#d7bf8a]">Welcome to Hotel Excella</p>
            <h1 className="mt-1 font-serif text-[2.1rem] font-semibold leading-[1.15] text-white">Hotel Excella</h1>
            <p className="mt-2 text-[1.08rem] leading-snug text-[#f4efe6]">We are delighted to have you with us.</p>
            <p className="mt-1.5 text-sm text-white/85">Quick Services at your fingertips</p>
          </div>
        </section>

        <section className="mt-5 grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => {
            const Card = (
              <>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c8a45c]/45 bg-[#131313] text-[#d4ad5a]">
                  <action.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-3 text-[1.05rem] font-semibold leading-tight text-white">{action.title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-white/75">{action.description}</p>
              </>
            )

            const classes =
              "group rounded-2xl border border-[#c8a45c]/45 bg-gradient-to-b from-[#121212] to-[#0d0d0d] p-4 text-left shadow-[0_18px_35px_-32px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d7b877] active:translate-y-[1px]"

            if (action.onClick) {
              return (
                <button
                  key={action.title}
                  type="button"
                  onClick={action.onClick}
                  className={classes}
                  style={{ animation: `fadeCard 360ms ease ${index * 70}ms both` }}
                >
                  {Card}
                </button>
              )
            }

            return (
              <a
                key={action.title}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className={classes}
                style={{ animation: `fadeCard 360ms ease ${index * 70}ms both` }}
              >
                {Card}
              </a>
            )
          })}
        </section>

        <button
          type="button"
          onClick={() => setActivePopup("payment")}
          className="mt-3 flex w-full items-center gap-3 rounded-2xl border border-[#c8a45c]/55 bg-gradient-to-r from-[#121212] to-[#0d0d0d] p-4 text-left shadow-[0_18px_35px_-32px_rgba(0,0,0,0.95)] transition-all duration-300 hover:border-[#d7b877] active:translate-y-[1px]"
          style={{ animation: "fadeCard 360ms ease 460ms both" }}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#c8a45c]/45 bg-[#131313] text-[#d4ad5a]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold">Payment Info</h2>
            <p className="mt-1 text-xs text-white/75">Important payment information</p>
          </div>
          <ChevronRight className="h-5 w-5 text-[#d4ad5a]" />
        </button>

        <section className="mt-4 grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-3 text-center">
            <Clock3 className="mx-auto h-4 w-4 text-[#d4ad5a]" />
            <p className="mt-1 text-[11px] text-white/70">Check-in</p>
            <p className="text-xs font-semibold text-white">1:00 PM</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-3 text-center">
            <CalendarClock className="mx-auto h-4 w-4 text-[#d4ad5a]" />
            <p className="mt-1 text-[11px] text-white/70">Check-out</p>
            <p className="text-xs font-semibold text-white">11:00 AM</p>
          </div>
          <a
            href="https://maps.app.goo.gl/C4MScoYMJLYnc3Gz6?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-[#0f0f0f] p-3 text-center transition hover:border-[#c8a45c]/45"
          >
            <MapPin className="mx-auto h-4 w-4 text-[#d4ad5a]" />
            <p className="mt-1 text-[11px] text-white/70">Address</p>
            <p className="text-[11px] font-semibold leading-tight text-white">Hotel Excella, Visalakshinagar, Vizag</p>
          </a>
        </section>

        <section className="mt-4 grid grid-cols-4 gap-2">
          <a
            href="tel:+917702483811"
            className="rounded-xl border border-[#c8a45c]/35 bg-[#0f0f0f] p-2 text-center transition hover:border-[#d7b877]"
          >
            <Phone className="mx-auto h-4 w-4 text-[#d4ad5a]" />
            <p className="mt-1 text-[11px] text-white/85">Reception</p>
          </a>
          <a
            href="https://wa.me/919985908131"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#c8a45c]/35 bg-[#0f0f0f] p-2 text-center transition hover:border-[#d7b877]"
          >
            <Phone className="mx-auto h-4 w-4 text-[#d4ad5a]" />
            <p className="mt-1 text-[11px] text-white/85">WhatsApp</p>
          </a>
          <a
            href="https://maps.app.goo.gl/C4MScoYMJLYnc3Gz6?g_st=ac"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#c8a45c]/35 bg-[#0f0f0f] p-2 text-center transition hover:border-[#d7b877]"
          >
            <MapPin className="mx-auto h-4 w-4 text-[#d4ad5a]" />
            <p className="mt-1 text-[11px] text-white/85">Google Maps</p>
          </a>
          <a
            href="https://www.instagram.com/hotelexcellavizag/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#c8a45c]/35 bg-[#0f0f0f] p-2 text-center transition hover:border-[#d7b877]"
          >
            <Star className="mx-auto h-4 w-4 text-[#d4ad5a]" />
            <p className="mt-1 text-[11px] text-white/85">Instagram</p>
          </a>
        </section>
      </main>

      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-md rounded-3xl border border-[#c8a45c]/70 bg-[#161616] p-6 text-white shadow-2xl animate-in zoom-in-95 duration-300">
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
                <p className="text-white/80">kindly contact Management before making payment</p>
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
                    Contact Management
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

      <footer className="pb-8 text-center">
        <p className="text-[11px] text-white/55">&copy; {new Date().getFullYear()} Hotel Excella. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes fadeCard {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
