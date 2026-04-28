import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { Calendar, ClipboardCheck } from "lucide-react"

const trustBadges = [
  { icon: Calendar, label: "Prime Vizag Location" },
  { icon: Calendar, label: "Hygienic Rooms" },
  { icon: Calendar, label: "Family Friendly" },
  { icon: Calendar, label: "Direct Booking Available" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* 🔥 UPDATED HERO SECTION */}
        <section className="relative min-h-[72vh] sm:min-h-[80vh] flex items-start justify-center overflow-hidden pt-6 sm:pt-8">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior-nVoa2Cga1MFRzoV6YEywjt23i2QKvv.png"
              alt="Hotel Excella Exterior - Premium Hotel in Vizag"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col px-5 pb-10 pt-6 text-left sm:px-8 sm:pb-12 sm:pt-6">
            {/* Heading */}
            <h1 className="mt-8 font-serif text-[2rem] font-semibold leading-[1.1] tracking-[0.01em] text-[#d7b35f] sm:mt-9 sm:text-[2.3rem] lg:text-[2.8rem] drop-shadow-[0_0_12px_rgba(0,0,0,0.6)]">
              Welcome to <span className="whitespace-nowrap">Hotel Excella</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-1.5 text-[1rem] font-medium text-white/90 sm:text-[1.05rem] drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]">
              Premium comfort in the heart of Vizag.
            </p>

            {/* Supporting line */}
            <p className="mt-1 text-[0.92rem] leading-[1.45] text-white/75 sm:text-[0.98rem] drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
              A stay designed with comfort, cleanliness and convenience in mind.
            </p>

{/* CTA Buttons */}
<div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center gap-2">
  <Link
    href="/prebook"
    className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-[0.95rem] font-semibold text-secondary-foreground border border-primary hover:bg-primary/10 transition-all duration-300"
  >
    <ClipboardCheck className="h-4 w-4" />
    Enquiry
  </Link>
</div>

{/* Scroll Indicator */}
<div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 animate-bounce">
  <div className="w-5 h-9 border border-[#d7b35f]/50 rounded-full flex justify-center">
    <div className="w-1 h-2.5 bg-[#d7b35f] rounded-full mt-2 animate-pulse" />
  </div>
</div>

{/* Trust Badges - moved closer to CTA */}
<section className="relative z-10 bg-card border-y border-border py-6 -mt-10">
  <div className="mx-auto max-w-7xl px-4">
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {trustBadges.map((badge) => (
        <div key={badge.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/50">
          <badge.icon className="h-8 w-8 text-primary" />
          <span className="mt-2 text-sm font-medium text-foreground">{badge.label}</span>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* (Rest of your main page sections remain unchanged) */}

      </main>

      <Footer />
      <StickyCTA />
      <div className="h-16 lg:hidden" />
    </div>
  )
}
