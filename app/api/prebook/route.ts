import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      guestName,
      mobile,
      email,
      checkIn,
      checkOut,
      adults,
      children,
      rooms = "1",
      roomPreference,
      specialRequests,
    } = body
    const submissionTimestamp = new Date().toISOString()

    // Format the email content for hotel
    const hotelEmailSubject = "New Booking Request - Hotel Excella"
    const hotelEmailBody = `
New Booking Request Received

Guest Details:
--------------
Name: ${guestName}
Mobile: ${mobile}
Email: ${email}

Booking Details:
----------------
Check-in Date: ${checkIn}
Check-out Date: ${checkOut}
Adults: ${adults}
Children: ${children}
Number of Rooms: ${rooms}
Room Preference: ${roomPreference}

Special Requests:
${specialRequests || "None"}

Submission Timestamp: ${submissionTimestamp}

---
This booking request was submitted via the Hotel Excella website.
Please follow up with the guest promptly.
    `.trim()

    // Format confirmation email for guest
    const guestEmailSubject = "Booking Request Received - Hotel Excella Vizag"
    const guestEmailBody = `
Dear ${guestName},

Thank you for your booking request at Hotel Excella Vizag!

Your Request Details:
--------------------
Check-in: ${checkIn}
Check-out: ${checkOut}
Room: ${roomPreference}
Guests: ${adults} Adults, ${children} Children
Rooms: ${rooms}
Submitted At: ${submissionTimestamp}

Our team will contact you shortly to confirm availability and complete your booking.

For immediate assistance, please contact us:
Phone: +91 99859 08131 / +91 89594 44555
WhatsApp: +91 99859 08131
Email: hotelexcellavizag@gmail.com

We look forward to hosting you!

Warm regards,
Hotel Excella Team
Visakhapatnam
    `.trim()

    // Send emails using Resend or fallback to logging
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      // Send to hotel
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Hotel Excella <noreply@resend.dev>",
          to: ["hotelexcellavizag@gmail.com"],
          subject: hotelEmailSubject,
          text: hotelEmailBody,
        }),
      })

      // Send confirmation to guest
      if (email) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Hotel Excella <noreply@resend.dev>",
            to: [email],
            subject: guestEmailSubject,
            text: guestEmailBody,
          }),
        })
      }
    } else {
      // Log for development
      console.log("Booking Request Received:")
      console.log(hotelEmailBody)
      console.log("\nGuest Confirmation:")
      console.log(guestEmailBody)
    }

    return NextResponse.json({ 
      success: true, 
      message: "Booking request submitted successfully",
      redirectUrl: "https://hotelexcella.bookmystay.io/"
    })
  } catch (error) {
    console.error("Error processing booking request:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit booking request" },
      { status: 500 }
    )
  }
}
