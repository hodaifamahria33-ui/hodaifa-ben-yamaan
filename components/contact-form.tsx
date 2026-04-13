"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

export function ContactForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [wens, setWens] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `Contact website — ${naam.trim() || "aanvraag"}`;
    const body = [
      `Naam: ${naam.trim()}`,
      `E-mail van bezoeker: ${email.trim()}`,
      "",
      "Wat wil ik laten doen:",
      wens.trim() || "(nog niet ingevuld)",
      "",
      "---",
      "(Beantwoord dit bericht naar het adres hierboven om terug te mailen.)",
    ].join("\n");

    const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 grid max-w-xl gap-4 rounded-2xl border border-white/10 bg-black/25 p-6 text-left"
      noValidate
    >
      <div>
        <label htmlFor="contact-naam" className="mb-1.5 block text-sm font-bold text-[rgba(231,228,255,0.85)]">
          Jouw naam
        </label>
        <input
          id="contact-naam"
          name="naam"
          type="text"
          autoComplete="name"
          required
          value={naam}
          onChange={(e) => setNaam(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[#f7f4ff] placeholder:text-white/35 outline-none ring-violet-500/40 focus:border-violet-500/50 focus:ring-2"
          placeholder="Bijv. Sam de Vries"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-bold text-[rgba(231,228,255,0.85)]">
          Jouw e-mail
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[#f7f4ff] placeholder:text-white/35 outline-none ring-violet-500/40 focus:border-violet-500/50 focus:ring-2"
          placeholder="jij@voorbeeld.nl"
        />
      </div>
      <div>
        <label htmlFor="contact-wens" className="mb-1.5 block text-sm font-bold text-[rgba(231,228,255,0.85)]">
          Wat wil je laten doen?
        </label>
        <textarea
          id="contact-wens"
          name="wens"
          required
          rows={4}
          value={wens}
          onChange={(e) => setWens(e.target.value)}
          className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[#f7f4ff] placeholder:text-white/35 outline-none ring-violet-500/40 focus:border-violet-500/50 focus:ring-2"
          placeholder="Bijv. 3 Reels van ruw materiaal, deadline volgende week…"
        />
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-[#ff3d6b] via-[#7c5cff] to-[#2ee6c0] px-8 py-4 text-base font-extrabold text-[#120a16] shadow-[0_18px_50px_rgba(124,92,255,0.35)] hover:opacity-95 sm:w-auto"
      >
        Open mail met dit bericht
      </button>
      <p className="text-[0.85rem] leading-relaxed text-[rgba(231,228,255,0.55)]">
        Er opent je eigen mail-app (Outlook, Gmail, enz.) met dit bericht klaar om te versturen. Zo hoeft er geen server te
        draaien — jij klikt nog één keer op &quot;Verzenden&quot; in je mailprogramma.
      </p>
    </form>
  );
}
