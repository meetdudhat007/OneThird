"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Button from "@/components/ui/Button";
import Slash from "@/components/ui/Slash";
import { services } from "@/content/services";

type FieldName = "name" | "email" | "message";
type Errors = Partial<Record<FieldName, string>>;

const serviceOptions = [...services.map((s) => s.title), "Not sure yet"];

// Listed in page order, so the first error found is the first one on screen.
function validate(data: FormData): Errors {
  const errors: Errors = {};
  const value = (name: FieldName) => String(data.get(name) ?? "").trim();

  if (!value("name")) errors.name = "Please enter your name.";
  if (!value("email")) errors.email = "Please enter your work email.";
  else if (!/^\S+@\S+\.\S+$/.test(value("email"))) {
    errors.email = "Please enter a valid email address.";
  }
  if (!value("message")) errors.message = "Please tell us a little about your project.";

  return errors;
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {/* Red is too low contrast for small text, so the slash carries the colour. */}
      {error && (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-sm text-ink-soft">
          <Slash className="size-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function inputProps(id: FieldName, error?: string) {
  return {
    id,
    name: id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
    className: `mt-2 block w-full border-b bg-transparent py-3 text-lg outline-none transition-[border-color,box-shadow] focus:border-brand focus:shadow-[0_1px_0_0_var(--color-brand)] ${
      error ? "border-accent" : "border-muted"
    }`,
  };
}

/**
 * Front-end only: delivery hasn't been decided (see CLAUDE.md), so a valid
 * submission sends nothing. It must never show a success message until it's
 * connected, or a real client would think they had reached the team.
 */
export default function ContactForm({ className = "" }: { className?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [notSent, setNotSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const found = validate(new FormData(form));
    setErrors(found);

    const first = Object.keys(found)[0];
    if (first) {
      setNotSent(false);
      (form.elements.namedItem(first) as HTMLElement).focus();
    } else {
      setNotSent(true);
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      onChange={() => setNotSent(false)}
      style={{ animationDelay: "200ms" }}
      className={`grid gap-8 animate-fade-up motion-reduce:animate-none ${className}`}
    >
      <p className="text-sm text-muted">Every field is required unless it says optional.</p>

      <Field id="name" label="Name" error={errors.name}>
        <input type="text" autoComplete="name" {...inputProps("name", errors.name)} />
      </Field>

      <Field id="email" label="Work email" error={errors.email}>
        <input type="email" autoComplete="email" {...inputProps("email", errors.email)} />
      </Field>

      <Field id="company" label="Company (optional)">
        <input
          type="text"
          id="company"
          name="company"
          autoComplete="organization"
          className={inputProps("name").className}
        />
      </Field>

      <fieldset>
        <legend className="text-sm font-medium">What do you need? (optional)</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {serviceOptions.map((option) => (
            <label key={option} className="cursor-pointer">
              <input type="checkbox" name="services" value={option} className="peer sr-only" />
              <span className="block rounded-full border border-muted px-5 py-2.5 text-sm transition-colors hover:border-brand hover:text-brand peer-checked:border-brand peer-checked:bg-brand peer-checked:text-on-inverse peer-checked:hover:text-on-inverse peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <Field id="message" label="Your message" error={errors.message}>
        <textarea rows={5} {...inputProps("message", errors.message)} />
      </Field>

      <div>
        <Button size="lg">Send message</Button>

        {notSent && (
          <p role="status" className="mt-6 rounded-2xl bg-surface p-4 text-sm leading-relaxed">
            [NEEDS INPUT] This form isn’t connected yet, so your message has not been sent.
          </p>
        )}
      </div>
    </form>
  );
}
