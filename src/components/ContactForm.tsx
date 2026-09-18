"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/Button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [sent, setSent] = useState(false);

  function validate(next: FormState) {
    const e: Partial<FormState> = {};
    if (!next.name.trim()) e.name = "Name is required";
    if (!next.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email))
      e.email = "Enter a valid email";
    if (!next.subject.trim()) e.subject = "Subject is required";
    if (!next.message.trim()) e.message = "Message is required";
    return e;
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const e = validate(values);
    setErrors(e);
    if (Object.keys(e).length) return;
    // Placeholder — no backend yet
    setSent(true);
    setValues(initial);
  }

  if (sent) {
    return (
      <div className="rounded-[1.75rem] border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-8 text-center md:p-10">
        <p className="font-[family-name:var(--font-display)] text-2xl text-[var(--ink)]">
          Thanks — we&apos;ll reply soon.
        </p>
        <p className="mt-3 text-sm text-[var(--ink-muted)]">
          Your message was captured locally. Email delivery will be wired up
          next.
        </p>
        <Button
          className="mt-6"
          variant="secondary"
          onClick={() => setSent(false)}
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Name"
          error={errors.name}
          value={values.name}
          onChange={(v) => setValues((s) => ({ ...s, name: v }))}
          autoComplete="name"
        />
        <Field
          label="Email"
          type="email"
          error={errors.email}
          value={values.email}
          onChange={(v) => setValues((s) => ({ ...s, email: v }))}
          autoComplete="email"
        />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label="Company"
          error={errors.company}
          value={values.company}
          onChange={(v) => setValues((s) => ({ ...s, company: v }))}
          autoComplete="organization"
        />
        <Field
          label="Subject"
          error={errors.subject}
          value={values.subject}
          onChange={(v) => setValues((s) => ({ ...s, subject: v }))}
        />
      </div>
      <Field
        label="Message"
        multiline
        error={errors.message}
        value={values.message}
        onChange={(v) => setValues((s) => ({ ...s, message: v }))}
      />
      <Button type="submit" className="w-full md:w-auto">
        Send message
      </Button>
      <p className="text-xs text-[var(--ink-muted)]">
        Form is a UI placeholder — messages are not emailed yet.
      </p>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  multiline,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  multiline?: boolean;
  autoComplete?: string;
}) {
  const id = label.toLowerCase().replace(/\s+/g, "-");
  const shared = cn(
    "w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-all duration-300 placeholder:text-[var(--ink-muted)]/60 focus:border-[var(--accent)]/50 focus:ring-4 focus:ring-[var(--accent)]/10",
    error ? "border-red-400" : "border-[var(--ink)]/10",
  );

  return (
    <label className="block text-sm" htmlFor={id}>
      <span className="mb-2 block font-medium text-[var(--ink)]">{label}</span>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(shared, "resize-y")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className={shared}
        />
      )}
      {error ? <span className="mt-1.5 block text-xs text-red-600">{error}</span> : null}
    </label>
  );
}
