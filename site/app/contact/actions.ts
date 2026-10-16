"use server"

import { business } from "@/lib/site"

/*
  Contact form handler.
  Primary: email to info@claravdecor.com through Resend's REST API (RESEND_API_KEY).
  Fallback: JSON POST to CONTACT_WEBHOOK_URL. With neither, the form reports the direct
  channels instead of pretending to send.
  Env (Vercel → Settings → Environment Variables):
    RESEND_API_KEY   — from resend.com (domain claravdecor.com verified there)
    CONTACT_FROM     — optional, default "ClaravDecor Website <quotes@claravdecor.com>"
    CONTACT_TO       — optional, default business.email
*/
export type ContactState = { status: "idle" | "success" | "error"; message?: string }

const required = ["name", "phone", "eventDate", "cityVenue", "celebration", "setting", "guests"] as const
const labels: Record<string, string> = {
  name: "Name", phone: "Phone", email: "Email", eventDate: "Event date", cityVenue: "City and venue",
  celebration: "Type of celebration", setting: "Indoor / outdoor", guests: "Approximate guests",
  eventTime: "Event start time", installTime: "Earliest install time", inspiration: "Inspiration link",
  budget: "Approximate budget", details: "Details",
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  if (formData.get("company")) return { status: "success" } // honeypot

  const data: Record<string, string> = {}
  for (const [k, v] of formData.entries()) if (typeof v === "string" && k !== "company") data[k] = v.trim().slice(0, 2000)

  const missing = required.filter((k) => !data[k])
  if (missing.length) return { status: "error", message: "Please fill in the required fields marked with *." }

  const fallback = `Please text or call ${business.phone} or email ${business.email} — we reply within 24–48 business hours.`
  const resendKey = process.env.RESEND_API_KEY
  const webhook = process.env.CONTACT_WEBHOOK_URL

  if (!resendKey && !webhook) {
    return { status: "error", message: `Our form isn't connected yet. ${fallback}` }
  }

  try {
    if (resendKey) {
      const lines = Object.keys(labels).filter((k) => data[k]).map((k) => `${labels[k]}: ${data[k]}`)
      const subject = `New quote request — ${data.name} — ${data.celebration} on ${data.eventDate}`
      const text = [`New quote request from ${business.url}/contact`, "", ...lines, "", `Submitted: ${new Date().toISOString()}`].join("\n")
      const html = `<p>New quote request from <a href="${business.url}/contact">${business.url}/contact</a></p><table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${Object.keys(labels).filter((k) => data[k]).map((k) => `<tr><td style="color:#6b5b4c;vertical-align:top"><strong>${labels[k]}</strong></td><td>${escapeHtml(data[k])}</td></tr>`).join("")}</table>`
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM ?? `ClaravDecor Website <quotes@claravdecor.com>`,
          to: [process.env.CONTACT_TO ?? business.email],
          reply_to: data.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email) ? data.email : undefined,
          subject,
          text,
          html,
        }),
      })
      if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`)
      return { status: "success" }
    }
    const res = await fetch(webhook!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source: `${business.url}/contact`, submittedAt: new Date().toISOString(), ...data }),
    })
    if (!res.ok) throw new Error(`Webhook ${res.status}`)
    return { status: "success" }
  } catch (err) {
    console.error("[contact] send failed:", err)
    return { status: "error", message: `Something went wrong sending your request. ${fallback}` }
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string)
}
