import type { Metadata } from "next"
import GuestPortalClient from "./portal-client"

export const metadata: Metadata = {
  title: "Guest Portal | Hotel Excella Vizag",
  description: "Quick services at your fingertips. Access WiFi, book or extend your stay, contact reception, and more.",
}

export default function GuestPortalPage() {
  return <GuestPortalClient />
}
