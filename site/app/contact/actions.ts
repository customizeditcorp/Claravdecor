"use server"

/*
  Contact form handler. Sends the submission as JSON to CONTACT_WEBHOOK_URL
  (GHL inbound webhook or any endpoint) — [TO CONFIRM] endpoint. Without it,
  the form reports the direct channels instead of pretending to send.
*/
export type ContactState = { status: "idle" | "success" | "error"; message?: string }

const required = ["name", "phone", "eventDate", "cityVenue", "celebration", "setting", "guests"] as const

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot
  if (formData.get("company")) return { status: "success" }

  const data: Record<string, string> = {}
  for (const [k, v] of formData.entries()) {
    if (typeof v === "string") data[k] = v.trim().slice(0, 2000)
  }

  const missing = required.filter((k) => !data[k])
  if (missing.length) {
    return { status: "error", message: "Please fill in the required fields marked with *." }
  }

  const url = process.env.CONTACT_WEBHOOK_URL
  if (!url) {
    return {
      status: "error",
      message: "Our form isn't connected yet. Please text or call (469) 567-0386 or email info@claravdecor.com — we reply within 24–48 business hours.",
    }
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: "claravdecor.com/contact", submittedAt: new Date().toISOString(), ...data }),
    })
    if (!res.ok) throw new Error(`Webhook ${res.status}`)
    return { status: "success" }
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your request. Please text or call (469) 567-0386 and we'll take it from there.",
    }
  }
}
