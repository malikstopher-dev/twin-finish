"use client";

import { useState, type FormEvent } from "react";

const SERVICES = [
  "Painting",
  "Tiling",
  "Painting & tiling",
  "Repairs & preparation",
  "Commercial or rental refresh",
  "Other finishing work",
];

export default function ContactForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(
      "Thank you — your details are ready to send. This form is not connected to a mailbox yet, so please tap WhatsApp or call 063 499 7520 to reach the team directly."
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your name" />
      </div>

      <div className="field">
        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="Your contact number"
        />
      </div>

      <div className="field">
        <label htmlFor="area">Suburb / area</label>
        <input
          id="area"
          name="area"
          type="text"
          autoComplete="address-level2"
          placeholder="Where is the work?"
        />
      </div>

      <div className="field">
        <label htmlFor="service">Service</label>
        <select id="service" name="service" defaultValue="Painting">
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="details">Project details</label>
        <textarea
          id="details"
          name="details"
          rows={5}
          placeholder="Rooms or areas, condition of the surfaces, timing and anything else useful"
        />
      </div>

      <button className="btn btn--primary" type="submit">
        Send enquiry
      </button>

      <p className="notice" role="status" aria-live="polite">
        {message ||
          "Demo form — not connected to a mailbox yet. Choose a form service or backend before launch."}
      </p>
    </form>
  );
}
