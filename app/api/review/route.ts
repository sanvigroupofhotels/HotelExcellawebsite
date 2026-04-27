import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, roomNumber, issue, improvement } = body

    // Format the email content
    const emailSubject = "Guest Feedback - Hotel Excella"
    const emailBody = `
New Guest Feedback Received

Name: ${name}
Phone: ${phone}
Room Number: ${roomNumber || "Not provided"}

What went wrong:
${issue}

How can we improve:
${improvement}

---
This feedback was submitted via the Hotel Excella website review page.
    `.trim()

    // Send email using Resend or fallback to logging
    const resendApiKey = process.env.RESEND_API_KEY_REVIEWS

    if (resendApiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "Hotel Excella <onboarding@resend.dev>",
          to: ["hotelexcellavizag@gmail.com"],
          subject: emailSubject,
          text: emailBody,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("Failed to send email via Resend:", errorData)
      }
    } else {
      // Log the feedback for development
      console.log("Guest Feedback Received:")
      console.log(emailBody)
    }

    return NextResponse.json({ success: true, message: "Feedback submitted successfully" })
  } catch (error) {
    console.error("Error processing feedback:", error)
    return NextResponse.json(
      { success: false, message: "Failed to submit feedback" },
      { status: 500 }
    )
  }
}
