import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StickyCTA } from "@/components/sticky-cta"
import { Clock, Phone, UtensilsCrossed, MessageCircle, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Order Food | Hotel Excella Vizag",
  description:
    "Order fresh food to your room at Hotel Excella. Contact reception or WhatsApp us for in-room dining.",
}

const highlights = [
  "Freshly prepared meals",
  "Vegetarian and non-vegetarian options",
  "Room delivery support",
]

export default function OrderFoodPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="border-b border-border bg-card py-16 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <UtensilsCrossed className="h-8 w-8" />
            </div>
            <h1 className="mt-6 font-serif text-4xl font-bold text-foreground lg:text-5xl">
              In-Room <span className="text-primary">Food Service</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Place your order quickly and enjoy delicious food delivered to your room.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-border bg-card p-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <p className="mt-3 font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-5xl px-4">
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-foreground">How to order</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground">
                <li>Call reception or send a WhatsApp message with your room number and food preference.</li>
                <li>Our team will confirm available items, preparation time, and price.</li>
                <li>Food will be delivered to your room once ready.</li>
              </ol>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <a
                  href="tel:+919985908131"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Phone className="h-5 w-5" />
                  Call Reception
                </a>
                <a
                  href="https://wa.me/919985908131?text=Hi%2C%20I%20am%20staying%20at%20Hotel%20Excella%20and%20want%20to%20order%20food."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-semibold text-white hover:bg-green-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  Order on WhatsApp
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary" />
                Service availability may vary by kitchen timings.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <StickyCTA />
    </div>
  )
}
