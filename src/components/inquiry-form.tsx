"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;
const VISIT_TIMES = ["Morning", "Afternoon", "Either"] as const;

type Inquiry = {
  parentName: string;
  email: string;
  phone: string;
  childName: string;
  childAge: string;
  startDate: string;
  visitDays: string[];
  visitTime: string;
  notes: string;
  submittedAt: string;
};

const empty: Omit<Inquiry, "submittedAt"> = {
  parentName: "",
  email: "",
  phone: "",
  childName: "",
  childAge: "",
  startDate: "",
  visitDays: [],
  visitTime: "",
  notes: "",
};

const FORM_ENDPOINT = "https://formsubmit.co/ajax/farhana.abid@gmail.com";

export function InquiryForm() {
  const [values, setValues] = useState(empty);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<Inquiry | null>(null);
  const [sending, setSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  function toggleDay(day: (typeof WEEKDAYS)[number]) {
    setValues((v) => ({
      ...v,
      visitDays: v.visitDays.includes(day)
        ? v.visitDays.filter((d) => d !== day)
        : [...v.visitDays, day],
    }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (!values.parentName.trim() || !values.email.trim() || !values.phone.trim()) {
      setError("Please share your name, email, and phone so we can reach you.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      setError("That email doesn’t look quite right.");
      return;
    }
    const inquiry: Inquiry = {
      ...values,
      submittedAt: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("jolly-inquiries") || "[]") as Inquiry[];
      localStorage.setItem("jolly-inquiries", JSON.stringify([inquiry, ...prev].slice(0, 20)));
    } catch {
      /* storage may be blocked; still send the email */
    }

    if (honeypot.trim()) {
      setDone(inquiry);
      return;
    }

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `Jolly Home Daycare inquiry from ${inquiry.parentName}`,
          _template: "table",
          _captcha: "false",
          _honey: honeypot,
          name: inquiry.parentName,
          email: inquiry.email,
          _replyto: inquiry.email,
          phone: inquiry.phone,
          childName: inquiry.childName || "(not given)",
          childAge: inquiry.childAge || "(not given)",
          startDate: inquiry.startDate || "(not given)",
          visitDays: inquiry.visitDays.join(", ") || "(not given)",
          visitTime: inquiry.visitTime || "(not given)",
          notes: inquiry.notes || "(none)",
        }),
      });
      const data = (await res.json().catch(() => null)) as
        | { success?: string | boolean; message?: string }
        | null;
      const ok = res.ok && (data == null || data.success === true || data.success === "true");
      if (!ok) {
        throw new Error(data?.message || "The inquiry did not send.");
      }
      setDone(inquiry);
    } catch {
      setError(
        `We couldn’t send that just now. Please call ${site.phone} or email ${site.email} and we’ll get back to you.`,
      );
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-lg border border-line bg-surface p-6 shadow-soft sm:p-8">
        <CheckCircle2 className="size-8 text-forest" aria-hidden="true" />
        <h3 className="mt-4 font-display text-2xl text-ink">We’ll follow up about a visit.</h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">
          Thank you, {done.parentName}. We’ll be in touch at {done.email}
          {done.phone ? ` or ${done.phone}` : ""} to talk through openings and set a time to see the
          house.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => {
            setDone(null);
            setValues(empty);
          }}
        >
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative rounded-lg border border-line bg-surface p-5 shadow-soft sm:p-8"
    >
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Leave blank
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your name" htmlFor="parentName">
          <Input
            id="parentName"
            name="parentName"
            autoComplete="name"
            required
            value={values.parentName}
            onChange={(e) => setValues((v) => ({ ...v, parentName: e.target.value }))}
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          />
        </Field>
        <Field label="Phone" htmlFor="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          />
        </Field>
        <Field label="Child’s first name" htmlFor="childName">
          <Input
            id="childName"
            name="childName"
            autoComplete="off"
            value={values.childName}
            onChange={(e) => setValues((v) => ({ ...v, childName: e.target.value }))}
          />
        </Field>
        <Field label="Child’s age" htmlFor="childAge">
          <Input
            id="childAge"
            name="childAge"
            inputMode="text"
            placeholder="e.g. 9 months, 3 years"
            value={values.childAge}
            onChange={(e) => setValues((v) => ({ ...v, childAge: e.target.value }))}
          />
        </Field>
        <Field label="Hoped-for start" htmlFor="startDate">
          <Input
            id="startDate"
            name="startDate"
            type="date"
            value={values.startDate}
            onChange={(e) => setValues((v) => ({ ...v, startDate: e.target.value }))}
          />
        </Field>
        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-ink">Preferred visit days</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {WEEKDAYS.map((day) => {
              const selected = values.visitDays.includes(day);
              return (
                <label
                  key={day}
                  className={cn(
                    "inline-flex min-h-11 cursor-pointer items-center rounded-md border px-3.5 text-sm",
                    selected
                      ? "border-forest bg-forest text-cream"
                      : "border-line bg-cream text-ink hover:border-terracotta",
                  )}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={selected}
                    onChange={() => toggleDay(day)}
                  />
                  {day.slice(0, 3)}
                </label>
              );
            })}
          </div>
        </fieldset>
        <fieldset className="sm:col-span-2">
          <legend className="text-sm font-medium text-ink">Preferred visit time</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {VISIT_TIMES.map((time) => {
              const selected = values.visitTime === time;
              return (
                <label
                  key={time}
                  className={cn(
                    "inline-flex min-h-11 cursor-pointer items-center rounded-md border px-3.5 text-sm",
                    selected
                      ? "border-forest bg-forest text-cream"
                      : "border-line bg-cream text-ink hover:border-terracotta",
                  )}
                >
                  <input
                    type="radio"
                    name="visitTime"
                    className="sr-only"
                    checked={selected}
                    onChange={() => setValues((v) => ({ ...v, visitTime: time }))}
                  />
                  {time}
                </label>
              );
            })}
          </div>
        </fieldset>
        <div className="sm:col-span-2">
          <Field label="Anything we should know?" htmlFor="notes">
            <Textarea
              id="notes"
              name="notes"
              placeholder="Schedule, siblings, allergies, questions about a tour…"
              value={values.notes}
              onChange={(e) => setValues((v) => ({ ...v, notes: e.target.value }))}
            />
          </Field>
        </div>
      </div>
      {error ? <p className="mt-4 text-sm text-terracotta-deep">{error}</p> : null}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted">
          We’ll follow up about a visit. We only use this to reply — no mailing lists.
        </p>
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? "Sending…" : "Request a visit"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
