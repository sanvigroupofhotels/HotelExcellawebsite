import type { Metadata } from "next"
import Image from "next/image"
import { 
  Wifi,
  Calendar,
  Phone,
  AlertCircle,
  UtensilsCrossed,
  Star,
  MapPin,
  MessageCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Guest Portal | Hotel Excella Vizag",
  description: "Quick services at your fingertips. Access WiFi, book or extend your stay, contact reception, and more.",
}

const quickActions = [
  {
    icon: Wifi,
    title: "WiFi Access",
    description: "Connect to our high-speed internet",
    action: "View Details",
    href: "#wifi",
    color: "bg-blue-500/10 text-blue-500",
    hoverColor: "hover:bg-blue-500 hover:text-white",
  },
  {
    icon: Calendar,
    title: "Book / Extend Stay",
    description: "Manage your reservation",
    action: "Book Now",
    href: "/prebook",
    external: false,
    color: "bg-primary/10 text-primary",
    hoverColor: "hover:bg-primary hover:text-primary-foreground",
  },
  {
    icon: Phone,
    title: "Reception Help",
    description: "Connect with front desk",
    action: "Call Now",
    href: "tel:+919985908131",
    color: "bg-green-500/10 text-green-500",
    hoverColor: "hover:bg-green-500 hover:text-white",
  },
  {
    icon: AlertCircle,
    title: "Report an Issue",
    description: "Let us know if something is wrong",
    action: "WhatsApp",
    href: "https://wa.me/919985908131?text=Hi%2C%20I%20am%20a%20guest%20at%20Hotel%20Excella%20and%20I%20would%20like%20to%20report%20an%20issue.",
    external: true,
    color: "bg-orange-500/10 text-orange-500",
    hoverColor: "hover:bg-orange-500 hover:text-white",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Menu",
    description: "Browse our dining options",
    action: "View Menu",
    href: "https://hotelexcellafoodmenu.netlify.app/",
    external: true,
    color: "bg-red-500/10 text-red-500",
    hoverColor: "hover:bg-red-500 hover:text-white",
  },
  {
    icon: Star,
    title: "Review Us",
    description: "Share your experience",
    action: "Leave Review",
    href: "/review",
    external: false,
    color: "bg-yellow-500/10 text-yellow-500",
    hoverColor: "hover:bg-yellow-500 hover:text-white",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Get directions",
    action: "Open Maps",
    href: "https://maps.app.goo.gl/C4MScoYMJLYnc3Gz6?g_st=ac",
    external: true,
    color: "bg-purple-500/10 text-purple-500",
    hoverColor: "hover:bg-purple-500 hover:text-white",
  },
]

export default function GuestPortalPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border py-6">
        <div className="mx-auto max-w-lg px-4 text-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-qq8Cvn8rVABsuUvFcXt0Nc1n64vZlL.png"
            alt="Hotel Excella Logo"
            width={160}
            height={80}
            className="mx-auto h-20 w-auto"
            priority
          />
        </div>
      </header>
      
      <main className="mx-auto max-w-lg px-4 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl font-bold text-foreground">
            Welcome to <span className="text-primary">Hotel Excella</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Quick services at your fingertips
          </p>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          {quickActions.map((action) => (
            <a
              key={action.title}
              href={action.href}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
              className={`group flex items-center gap-4 p-4 rounded-2xl bg-card border border-border transition-all duration-300 ${action.hoverColor}`}
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 ${action.color} group-hover:bg-white/20`}>
                <action.icon className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <h2 className="font-semibold text-foreground group-hover:text-inherit transition-colors">
                  {action.title}
                </h2>
                <p className="text-sm text-muted-foreground group-hover:text-inherit/80 transition-colors">
                  {action.description}
                </p>
              </div>
              <div className="text-sm font-medium text-primary group-hover:text-inherit transition-colors">
                {action.action}
              </div>
            </a>
          ))}
        </div>

        {/* WiFi Details Modal (inline for simplicity) */}
        <div id="wifi" className="mt-8 p-6 rounded-2xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10">
              <Wifi className="h-5 w-5 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">WiFi Details</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
              <span className="text-sm text-muted-foreground">Network Name</span>
              <span className="font-mono font-medium text-foreground">Hotel_Excella</span>
            </div>
            <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
              <span className="text-sm text-muted-foreground">Password</span>
              <span className="font-mono font-medium text-foreground">Ask Reception</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground text-center">
            Please contact reception for the current WiFi password
          </p>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/20">
          <h3 className="font-semibold text-foreground text-center mb-4">Need Immediate Assistance?</h3>
          <div className="flex gap-3">
            <a
              href="tel:+919985908131"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              Call
            </a>
            <a
              href="https://wa.me/919985908131"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Hotel Excella. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Thank you for staying with us!
          </p>
        </footer>
      </main>
    </div>
  )
}
