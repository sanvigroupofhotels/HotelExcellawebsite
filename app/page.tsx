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
  Star
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
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-16">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior-nVoa2Cga1MFRzoV6YEywjt23i2QKvv.png"
              alt="Hotel Excella Exterior - Premium Hotel in Vizag"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center lg:py-32">
            <div className="mx-auto max-w-3xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qq8Cvn8rVABsuUvFcXt0Nc1n64vZlL.png"
                alt="Hotel Excella Logo"
                width={200}
                height={100}
                className="mx-auto h-24 w-auto lg:h-32"
                priority
              />
              
              <h1 className="mt-8 font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
                Welcome to <span className="text-primary">Hotel Excella</span>
              </h1>
              
              <p className="mt-4 text-xl text-primary font-medium">
                Premium comfort in the heart of Vizag.
              </p>
              
              <p className="mt-4 text-lg text-muted-foreground text-pretty">
                A stay designed with comfort, cleanliness and convenience in mind.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://hotelexcella.bookmystay.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="h-5 w-5" />
                  Book Now
                </a>
                <a
                  href="tel:+919985908131"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-8 py-4 text-lg font-semibold text-secondary-foreground border border-border hover:bg-secondary/80 transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919985908131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-700 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="relative z-10 bg-card border-y border-border py-8 -mt-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/50"
                >
                  <badge.icon className="h-8 w-8 text-primary" />
                  <span className="mt-2 text-sm font-medium text-foreground">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Booking Banner */}
        <section className="bg-primary/10 border-b border-primary/20 py-6">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Star className="h-5 w-5 fill-current" />
              <p className="text-base lg:text-lg font-medium">
                Book direct on our official website for best available pricing and faster confirmation.
              </p>
              <Star className="h-5 w-5 fill-current" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Why Choose <span className="text-primary">Hotel Excella</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Experience premium hospitality with every stay
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="group flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <span className="mt-4 text-base font-semibold text-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rooms Preview */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Our <span className="text-primary">Rooms</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comfortable spaces designed for your perfect stay
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {rooms.map((room) => (
                <div
                  key={room.name}
                  className="group overflow-hidden rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
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
                      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300"
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
                className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View All Rooms
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery Preview */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                Experience <span className="text-primary">Hotel Excella</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Take a glimpse of our premium facilities
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/exterior-nVoa2Cga1MFRzoV6YEywjt23i2QKvv.png"
                  alt="Hotel Excella Exterior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room1-gwtPWoLoADzaldmYrRdj4539Sv4Zli.jpg"
                  alt="Queen Executive Room"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/room2-UfQMHpyryUBdNLST83IpWIvfh3PizR.jpg"
                  alt="King Executive Room"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dining-cjkV0vqP1I6CQ10QQEYvazUmhUKlTX.jpg"
                  alt="Dining Area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lobby-nEEo9EQvawS3OCTf8VMen4Ct2sycAS.jpg"
                  alt="Lobby Area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View Full Gallery
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground lg:text-4xl text-balance">
              Ready for a <span className="text-primary">Premium Stay</span> in Vizag?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Book directly with us for the best rates, faster confirmation, and trusted direct support.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://hotelexcella.bookmystay.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
              >
                <Calendar className="h-5 w-5" />
                Book Your Stay
              </a>
              <a
                href="https://wa.me/919985908131"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-green-700 transition-all duration-300"
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
      
      {/* Bottom padding for mobile sticky bar */}
      <div className="h-16 lg:hidden" />
    </div>
  )
}
