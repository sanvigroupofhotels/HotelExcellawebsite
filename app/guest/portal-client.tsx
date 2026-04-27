"use client"

import { type ComponentType, useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { StickyCTA } from "@/components/sticky-cta"
import {
  AlertCircle,
  BedDouble,
  CalendarClock,
  ChevronRight,
  Clock3,
  Instagram,
  Linkedin,
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
        icon: Star,
        title: "Review Us",
        description: "Share your experience",
        href: "/review",
      },
      {
        icon: Wifi,
        title: "WiFi Access",
        description: "Connect to our internet",
        onClick: () => setActivePopup("wifi"),
      },
      {
        icon: UtensilsCrossed,
        title: "Food Menu",
        description: "Browse dining options",
        href: "https://hotelexcellafoodmenu.netlify.app/",
        external: true,
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
        description: "Dial 9 from landline or call mobile",
        href: "tel:+919985908131",
      },
      {
        icon: AlertCircle,
        title: "Report an Issue",
        description: "We're here to help",
        href: "https://wa.me/919985908131?text=Hi%2C%20I%20am%20a%20guest%20at%20Hotel%20Excella%20and%20I%20would%20like%20to%20report%20an%20issue.",
        external: true,
      },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <main className="w-full pb-28">
        <section className="relative flex min-h-[88svh] items-center justify-center overflow-hidden pt-8 sm:pt-12">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior-nVoa2Cga1MFRzoV6YEywjt23i2QKvv.png"
            alt="Hotel Excella exterior"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qq8Cvn8rVABsuUvFcXt0Nc1n64vZlL.png"
              alt="Hotel Excella Logo"
              width={180}
              height={90}
              className="h-auto w-[132px] sm:w-[150px]"
              priority
            />
            <p className="mt-8 text-[18px] font-semibold tracking-wide text-white">Welcome to</p>
            <h1 className="mt-1 font-serif text-[3rem] font-semibold leading-[0.96] tracking-[0.01em] text-[#d7b35f] sm:text-[3.5rem]">
              Hotel Excella
            </h1>
            <p className="mt-6 text-[1.05rem] font-medium leading-[1.25] text-[#d7b35f]">
              Premium comfort in the heart of Vizag.
            </p>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-[1.5] text-white/82">
              A stay designed with comfort, cleanliness and convenience in mind.
            </p>
            <a
              href="https://hotelexcella.bookmystay.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full max-w-[340px] items-center justify-center rounded-2xl border border-[#d7b877] bg-[#c8a45c] px-6 py-3.5 text-xl font-semibold text-black transition hover:bg-[#d7b877]"
            >
              Book Now
            </a>
          </div>
        </section>

        <div className="mx-auto w-full max-w-6xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
          <section className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {quickActions.map((action, index) => {
              const Card = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c8a45c]/55 bg-[#101010] text-[#d4ad5a]">
                    <action.icon className="h-[21px] w-[21px]" />
                  </div>
                  <h2 className="mt-4 text-[1.03rem] font-semibold leading-tight text-white">{action.title}</h2>
                  <p className="mt-1 text-[0.91rem] leading-snug text-white/73">{action.description}</p>
                </>
              )

              const classes =
                "group flex min-h-[172px] flex-col justify-center rounded-2xl border border-[#c8a45c]/45 bg-gradient-to-b from-[#111111] to-[#0b0b0b] p-4 text-left shadow-[0_20px_34px_-33px_rgba(0,0,0,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d7b877] active:scale-[0.985]"

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
            className="mt-4 flex min-h-[88px] w-full items-center gap-3 rounded-2xl border border-[#c8a45c]/55 bg-gradient-to-r from-[#111111] to-[#0b0b0b] p-4 text-left shadow-[0_18px_35px_-32px_rgba(0,0,0,0.95)] transition-all duration-300 hover:border-[#d7b877] active:scale-[0.99]"
            style={{ animation: "fadeCard 360ms ease 460ms both" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c8a45c]/45 bg-[#101010] text-[#d4ad5a]">
              <ShieldCheck className="h-[21px] w-[21px]" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-[1.1rem] font-semibold">Payment Info</h2>
              <p className="mt-1 text-sm text-white/75">Important payment information</p>
            </div>
            <ChevronRight className="h-6 w-6 text-[#d4ad5a]" />
          </button>

          <section className="mt-4 grid grid-cols-3 gap-2.5 sm:gap-3">
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-3 text-center">
              <Clock3 className="mx-auto h-4 w-4 text-[#d4ad5a]" />
              <p className="mt-1 text-[11px] text-white/70">Check-in</p>
              <p className="text-sm font-semibold text-white">1:00 PM</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f] p-3 text-center">
              <CalendarClock className="mx-auto h-4 w-4 text-[#d4ad5a]" />
              <p className="mt-1 text-[11px] text-white/70">Check-out</p>
              <p className="text-sm font-semibold text-white">11:00 AM</p>
            </div>
            <a
              href="https://maps.app.goo.gl/C4MScoYMJLYnc3Gz6?g_st=ac"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/10 bg-[#0f0f0f] p-3 text-center transition hover:border-[#c8a45c]/45"
            >
              <MapPin className="mx-auto h-4 w-4 text-[#d4ad5a]" />
              <p className="mt-1 text-[11px] text-white/70">Address</p>
              <p className="text-xs font-semibold leading-tight text-white">Hotel Excella, Vizag</p>
            </a>
          </section>

          <section className="mt-4 rounded-2xl border border-[#c8a45c]/35 bg-[#0f0f0f] px-4 py-3.5 text-center">
            <p className="text-sm tracking-wide text-[#d7bf8a]">Follow us at</p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <a
                href="https://www.instagram.com/hotelexcella_vizag"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Hotel Excella on Instagram"
                className="rounded-xl border border-[#c8a45c]/60 p-2.5 text-[#d4ad5a] transition hover:border-[#d7b877] hover:bg-[#131313]"
              >
                <Instagram className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/company/sanvigroupofhotels-vizag/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Hotel Excella on LinkedIn"
                className="rounded-xl border border-[#c8a45c]/60 p-2.5 text-[#d4ad5a] transition hover:border-[#d7b877] hover:bg-[#131313]"
              >
                <Linkedin className="h-[18px] w-[18px]" />
              </a>
            </div>
          </section>
        </div>
      </main>

      <StickyCTA />

      {activePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/72 p-4 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-md rounded-3xl border border-[#d0ab63]/75 bg-[#f8f6f1] p-5 text-[#1d1a16] shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-serif text-[1.65rem] font-semibold text-[#1f1b16]">
                {activePopup === "payment" ? "Payment Notice" : "WiFi Access"}
              </h3>
              <button
                type="button"
                aria-label="Close popup"
                onClick={() => setActivePopup(null)}
                className="rounded-full border border-black/15 p-1.5 text-black/65 transition hover:text-black"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {activePopup === "payment" ? (
              <div className="space-y-4 text-sm text-[#34302a]">
                <p>
                  Please make payments only to authorized Hotel Excella payment channels or approved persons.
                </p>
                <div className="rounded-2xl border border-[#d0ab63]/45 bg-white p-4">
                  <p className="mb-2 text-xs uppercase tracking-wide text-[#ad8130]">Authorized Recipients</p>
                  <ul className="space-y-1.5">
                    <li>• Sanvi Group of Hotels QR</li>
                    <li>• Shobhan Kumar</li>
                    <li>• Nageswararao K</li>
                  </ul>
                </div>
                <p className="rounded-2xl border border-rose-300/45 bg-rose-50 p-3 text-rose-800">
                  Payments made to unauthorized personal staff accounts may not be considered valid.
                </p>
                <p className="text-[#4a433b]">Kindly contact management before making payment.</p>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setActivePopup(null)}
                    className="rounded-xl border border-black/15 px-4 py-3 text-sm font-semibold text-[#2b261f] transition hover:bg-black/[0.04]"
                  >
                    Understood
                  </button>
                  <a
                    href="tel:+919985908131"
                    className="rounded-xl bg-[#c8a45c] px-4 py-3 text-center text-sm font-semibold text-black transition hover:bg-[#d7b877]"
                  >
                    Contact Management
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4 text-sm text-[#34302a]">
                <div className="rounded-2xl border border-[#d0ab63]/45 bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-[#ad8130]">Network Name</p>
                  <p className="mt-1 font-semibold text-[#1f1b16]">Hotel Excella</p>
                </div>
                <div className="rounded-2xl border border-[#d0ab63]/45 bg-white p-4">
                  <p className="text-xs uppercase tracking-wide text-[#ad8130]">Password</p>
                  <p className="mt-1 font-semibold text-[#1f1b16]">Not Required</p>
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
