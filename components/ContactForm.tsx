"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

type ContactFormProps = {
  formType?: "contact" | "quote";
};

export function ContactForm({ formType = "contact" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const message = formData.get("message");
    const destination = formData.get("destination");
    const travelDates = formData.get("travelDates");

    const subject =
      formType === "quote"
        ? `Quote Request from ${firstName} ${lastName}`
        : `Contact from ${firstName} ${lastName}`;

    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      formType === "quote" && destination ? `Destination: ${destination}` : "",
      formType === "quote" && travelDates ? `Travel Dates: ${travelDates}` : "",
      "",
      String(message),
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-ocean-200 bg-ocean-50 p-8 text-center">
        <p className="text-lg font-semibold text-ocean-900">Thank you!</p>
        <p className="mt-2 text-ocean-700">
          Your email client should open with your message ready to send. We&apos;ll respond
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-ocean-900">
            First Name *
          </label>
          <input
            required
            id="firstName"
            name="firstName"
            type="text"
            className="w-full rounded-xl border border-ocean-200 px-4 py-3 text-ocean-900 outline-none ring-ocean-500 transition focus:ring-2"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-ocean-900">
            Last Name *
          </label>
          <input
            required
            id="lastName"
            name="lastName"
            type="text"
            className="w-full rounded-xl border border-ocean-200 px-4 py-3 text-ocean-900 outline-none ring-ocean-500 transition focus:ring-2"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-ocean-900">
          Email *
        </label>
        <input
          required
          id="email"
          name="email"
          type="email"
          className="w-full rounded-xl border border-ocean-200 px-4 py-3 text-ocean-900 outline-none ring-ocean-500 transition focus:ring-2"
        />
      </div>

      {formType === "quote" && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="destination" className="mb-2 block text-sm font-medium text-ocean-900">
              Destination or Trip Type
            </label>
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="Caribbean, Alaska cruise, Italy..."
              className="w-full rounded-xl border border-ocean-200 px-4 py-3 text-ocean-900 outline-none ring-ocean-500 transition focus:ring-2"
            />
          </div>
          <div>
            <label htmlFor="travelDates" className="mb-2 block text-sm font-medium text-ocean-900">
              Preferred Travel Dates
            </label>
            <input
              id="travelDates"
              name="travelDates"
              type="text"
              placeholder="March 2026, flexible..."
              className="w-full rounded-xl border border-ocean-200 px-4 py-3 text-ocean-900 outline-none ring-ocean-500 transition focus:ring-2"
            />
          </div>
        </div>
      )}

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ocean-900">
          {formType === "quote" ? "Tell us about your trip *" : "How can we help? *"}
        </label>
        <textarea
          required
          id="message"
          name="message"
          rows={5}
          className="w-full rounded-xl border border-ocean-200 px-4 py-3 text-ocean-900 outline-none ring-ocean-500 transition focus:ring-2"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ocean-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ocean-800 sm:w-auto"
      >
        {formType === "quote" ? "Request My Quote" : "Send Message"}
      </button>
    </form>
  );
}
