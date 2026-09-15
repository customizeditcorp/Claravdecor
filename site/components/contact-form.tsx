"use client"

import { useActionState } from "react"

import { submitContact, type ContactState } from "@/app/contact/actions"
import { business, cta } from "@/lib/site"

/*
  ContactForm — visible labels always, 1px --input fields, errors as text (design config §3).
  No quote calculator. Budget is optional and reframed (Addendum C4).
  Markup is server-rendered; only the submit state is client-side.
*/
const initial: ContactState = { status: "idle" }

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial)

  if (state.status === "success") {
    return (
      <div className="rounded-lg border border-border bg-card p-8 shadow-card" role="status">
        <h3 className="!text-h3">Got it — thank you.</h3>
        <p className="mt-3 text-muted-foreground">{cta.responseTime} If your event is soon, text us at {business.phone} and we&apos;ll move faster.</p>
      </div>
    )
  }

  return (
    <form action={action} className="grid gap-5 rounded-lg border border-border bg-card p-6 shadow-card md:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Phone" name="phone" type="tel" required autoComplete="tel" />
      </div>
      <Field label="Email" name="email" type="email" autoComplete="email" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Event date" name="eventDate" type="date" required />
        <Field label="City and venue" name="cityVenue" required placeholder="e.g. Plano — backyard" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <SelectField label="Type of celebration" name="celebration" required options={["Birthday", "Baby shower", "Gender reveal", "Quinceañera", "Graduation", "Corporate or school event", "Other"]} />
        <SelectField label="Indoor or outdoor" name="setting" required options={["Indoor", "Outdoor", "Both / not sure"]} />
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Approximate guest count" name="guests" type="number" required min={1} />
        <Field label="Event start time" name="eventTime" type="time" />
        <Field label="Earliest time we can install" name="installTime" type="time" />
      </div>

      <Field label="Inspiration photo link (Pinterest, Instagram…)" name="inspiration" type="url" placeholder="https://" />

      <div>
        <Field label="Approximate budget (optional)" name="budget" placeholder="e.g. $400–600" />
        <p className="mt-2 text-caption text-muted-foreground">
          This isn&apos;t to charge up to it — it&apos;s so we don&apos;t suggest something that doesn&apos;t fit.
        </p>
      </div>

      <div>
        <label htmlFor="details" className="mb-2 block text-caption font-semibold">Anything else about your idea</label>
        <textarea id="details" name="details" rows={4} className="field-input" placeholder="Theme, colors, what you've seen and liked…" />
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && (
        <p className="rounded-md border border-error/40 bg-card px-4 py-3 text-caption text-error" role="alert">{state.message}</p>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Sending…" : "Send my request"}
        </button>
        <p className="text-caption text-muted-foreground">{cta.responseTime}</p>
      </div>
    </form>
  )
}

function Field({ label, name, type = "text", required, placeholder, autoComplete, min }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; autoComplete?: string; min?: number }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-caption font-semibold">
        {label}{required && <span className="text-error"> *</span>}
      </label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} min={min} className="field-input" />
    </div>
  )
}

function SelectField({ label, name, required, options }: { label: string; name: string; required?: boolean; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-caption font-semibold">
        {label}{required && <span className="text-error"> *</span>}
      </label>
      <select id={name} name={name} required={required} defaultValue="" className="field-input">
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </div>
  )
}
