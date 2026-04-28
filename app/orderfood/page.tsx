import { redirect } from "next/navigation"

export default function OrderFoodPage() {
  redirect(
    "https://wa.me/919985908131?text=Hi%2C%20I%20am%20staying%20at%20Hotel%20Excella%20and%20I%20would%20like%20to%20place%20a%20food%20order.",
  )
}
