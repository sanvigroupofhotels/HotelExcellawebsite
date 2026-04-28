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
  MessageCircle,
  ArrowRight,
  Star,
  ClipboardCheck,
} from "lucide-react"

const highlightCards = [
  { icon: MapPin, label: "Prime Vizag Location" },
  { icon: Shield, label: "Hygienic Rooms" },
  { icon: Users, label: "Family Friendly" },
  { icon: Calendar, label: "Direct Booking Available" },
  { icon: Wifi, label: "Free Wi-Fi" },
  { icon: Clock, label: "24 Hours Reception" },
  { icon: Sparkles, label: "Clean Rooms" },
  { icon: Home, label: "Free Daily Housekeeping" },
]

const rooms = [
  {
    name: "Queen Executive Room",
    description:
      "Comfortable queen bed room with a clean modern layout designed for couples, solo guests and families seeking a premium stay experience.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room1-gwtPWoLoADzaldmYrRdj4539Sv4Zli.jpg",
    highlights: ["Queen Size Bed", "Family Friendly", "Air Conditioned"],
  },
  {
    name: "King Executive Room",
    description:
      "Spacious king bed room offering elevated comfort, stylish interiors and a relaxing premium stay for couples, families and business travellers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room2-UfQMHpyryUBdNLST83IpWIvfh3PizR.jpg",
    highlights: ["King Size Bed", "Spacious Layout", "Premium Comfort"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <section className="relative flex min-h-[84vh] items-center pt-20 sm:pt-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior-nVoa2Cga1MFRzoV6YEywjt23i2QKvv.png"
              alt="Hotel Excella Exterior - Premium Hotel in Vizag"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/30 to-black/35" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl text-left">
              <h1 className="font-serif text-[2.2rem] leading-[1.1] font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-[2.6rem] lg:text-[3.2rem]">
                Welcome to <span className="text-[#f2d28f]">Hotel Excella</span>
              </h1>

              <p className="mt-2 text-[1.05rem] font-medium text-white/95 sm:text-[1.15rem]">
                Premium comfort in the heart of Vizag.
              </p>

              <p className="mt-2 text-[0.95rem] leading-[1.5] text-white/85 sm:text-[1rem]">
                A stay designed with comfort, cleanliness and convenience in mind.
              </p>

              <div className="mt-6 flex max-w-xs flex-col items-start gap-3">
                <Link
                  href="/prebook"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground transition-all duration-300 hover:bg-primary/10"
                >
                  <ClipboardCheck className="h-4 w-4" />
                  Enquiry
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce">
            <div className="flex h-9 w-5 justify-center rounded-full border border-white/70">
              <div className="mt-2 h-2.5 w-1 animate-pulse rounded-full bg-white" />
            </div>
          </div>
        </section>

        <section className="border-b border-primary/20 bg-primary/10 py-5">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Star className="h-5 w-5 fill-current" />
              <p className="text-sm font-medium lg:text-base">
                Book direct on our official website for best available pricing and faster confirmation.
              </p>
              <Star className="h-5 w-5 fill-current" />
            </div>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Why Choose <span className="text-primary">Hotel Excella</span>
              </h2>
              <p className="mt-3 text-base text-muted-foreground lg:text-lg">Experience premium hospitality with every stay</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
              {highlightCards.map((card) => (
                <div
                  key={card.label}
                  className="group flex flex-col items-center rounded-xl border border-border bg-card px-3 py-4 text-center transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                    <card.icon className="h-5 w-5" />
                  </div>
                  <span className="mt-2 text-sm font-semibold text-foreground">{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Our <span className="text-primary">Rooms</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">Comfortable spaces designed for your perfect stay</p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {rooms.map((room) => (
                <div
                  key={room.name}
                  className="group overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:border-primary/50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={room.image}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground">{room.name}</h3>
                    <p className="mt-2 text-muted-foreground">{room.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {room.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://hotelexcella.bookmystay.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                    >
                      Book Now
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/rooms"
                className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-primary/80"
              >
                View All Rooms
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-16">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Experience <span className="text-primary">Hotel Excella</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Take a glimpse of our premium facilities</p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior-nVoa2Cga1MFRzoV6YEywjt23i2QKvv.png"
                  alt="Hotel Excella Exterior"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room1-gwtPWoLoADzaldmYrRdj4539Sv4Zli.jpg"
                  alt="Queen Executive Room"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room2-UfQMHpyryUBdNLST83IpWIvfh3PizR.jpg"
                  alt="King Executive Room"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dining-cjkV0vqP1I6CQ10QQEYvazUmhUKlTX.jpg"
                  alt="Dining Area"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lobby-nEEo9EQvawS3OCTf8VMen4Ct2sycAS.jpg"
                  alt="Lobby Area"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-lg font-medium text-primary transition-colors hover:text-primary/80"
              >
                View Full Gallery
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-balance font-serif text-3xl font-bold text-foreground lg:text-4xl">
              Ready for a <span className="text-primary">Premium Stay</span> in Vizag?
            </h2>
            <p className="mt-4 text-pretty text-lg text-muted-foreground">
              Book directly with us for the best rates, faster confirmation, and trusted direct support.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://hotelexcella.bookmystay.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 sm:w-auto"
              >
                <Calendar className="h-5 w-5" />
                Book Your Stay
              </a>
              <Link
                href="/prebook"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary px-8 py-4 text-lg font-semibold text-primary transition-all duration-300 hover:bg-primary/10 sm:w-auto"
              >
                <ClipboardCheck className="h-5 w-5" />
                Check Availability
              </Link>
              <a
                href="https://wa.me/919985908131"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-700 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
      <div className="h-16 lg:hidden" />
    </div>
  )
}
