import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { 
  MapPin, 
  Shield, 
  Users, 
  Calendar,
  Wifi,
  Clock,
  Sparkles,
  Home,
  Phone,
  MessageCircle,
  ArrowRight,
  Star,
  ClipboardCheck
} from "lucide-react"

const trustBadges = [
  { icon: MapPin, label: "Prime Vizag Location" },
  { icon: Shield, label: "Hygienic Rooms" },
  { icon: Users, label: "Family Friendly" },
  { icon: Calendar, label: "Direct Booking Available" },
]

const features = [
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Clock, label: "24 Hours Reception" },
  { icon: Sparkles, label: "Clean Rooms" },
  { icon: Home, label: "Free Daily Housekeeping" },
]

const rooms = [
  {
    name: "Queen Executive Room",
    description: "Comfortable queen bed room with a clean modern layout designed for couples, solo guests and families seeking a premium stay experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room1-gwtPWoLoADzaldmYrRdj4539Sv4Zli.jpg",
    highlights: ["Queen Size Bed", "Family Friendly", "Air Conditioned"],
  },
  {
    name: "King Executive Room",
    description: "Spacious king bed room offering elevated comfort, stylish interiors and a relaxing premium stay for couples, families and business travellers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room2-UfQMHpyryUBdNLST83IpWIvfh3PizR.jpg",
    highlights: ["King Size Bed", "Spacious Layout", "Premium Comfort"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>

        {/* 🔥 UPDATED HERO SECTION */}
        <section className="relative min-h-[72vh] sm:min-h-[80vh] flex items-start justify-center overflow-hidden pt-6 sm:pt-8">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior-nVoa2Cga1MFRzoV6YEywjt23i2QKvv.png"
              alt="Hotel Excella Exterior - Premium Hotel in Vizag"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/60 to-black/85" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col px-5 pb-10 pt-4 text-left sm:px-8 sm:pb-12 sm:pt-6">

            <Image
              src="/orderfood/data/images/logo.png"
              alt="Hotel Excella Logo"
              width={140}
              height={70}
              className="h-auto w-[95px] sm:w-[115px] lg:w-[130px] drop-shadow-[0_0_16px_rgba(0,0,0,0.45)]"
              priority
            />

            <h1 className="mt-5 font-serif text-[2rem] font-semibold leading-[1.1] tracking-[0.01em] text-[#d7b35f] sm:mt-6 sm:text-[2.3rem] lg:text-[2.8rem]">
              Welcome to <span className="whitespace-nowrap">Hotel Excella</span>
            </h1>

            <p className="mt-1.5 text-[1rem] font-medium text-white/90 sm:text-[1.05rem]">
              Premium comfort in the heart of Vizag.
            </p>

            <p className="mt-1 text-[0.92rem] leading-[1.45] text-white/75 sm:text-[0.98rem]">
              A stay designed with comfort, cleanliness and convenience in mind.
            </p>

            <div className="mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3">

              <a
                href="https://hotelexcella.bookmystay.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[0.95rem] font-semibold text-primary-foreground shadow-md hover:bg-primary/90 transition-all duration-300"
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </a>

              <Link
                href="/prebook"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-[0.95rem] font-semibold text-secondary-foreground border border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <ClipboardCheck className="h-4 w-4" />
                Check Availability
              </Link>

              <a
                href="https://wa.me/919985908131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-[0.95rem] font-semibold text-white shadow-md hover:bg-green-700 transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

            </div>
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-5 h-9 border border-[#d7b35f]/50 rounded-full flex justify-center">
              <div className="w-1 h-2.5 bg-[#d7b35f] rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="relative z-10 bg-card border-y border-border py-8 -mt-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {trustBadges.map((badge) => (
                <div key={badge.label} className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/50">
                  <badge.icon className="h-8 w-8 text-primary" />
                  <span className="mt-2 text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* (Rest of your code unchanged exactly as you had) */}

      </main>

      <Footer />
      <StickyCTA />
      <div className="h-16 lg:hidden" />
    </div>
  )
}
