"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const WEB3_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export function ContactForm() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [wens, setWens] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState("");

  const useWeb3 = WEB3_KEY.length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrMsg("");

    if (useWeb3) {
      setStatus("sending");
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3_KEY,
            subject: `Contact website — ${naam.trim() || "aanvraag"}`,
            name: naam.trim(),
            email: email.trim(),
            replyto: email.trim(),
            message: [
              `Naam: ${naam.trim()}`,
              `E-mail: ${email.trim()}`,
              "",
              "Wat wil ik laten doen:",
              wens.trim(),
            ].join("\n"),
          }),
        });
        const data = (await res.json()) as { success?: boolean; message?: string };
        if (data.success) {
          setStatus("ok");
          setNaam("");
          setEmail("");
          setWens("");
        } else {
          setStatus("err");
          setErrMsg(data.message ?? "Versturen mislukt. Probeer later opnieuw.");
        }
      } catch {
        setStatus("err");
        setErrMsg("Netwerkfout. Check je verbinding en probeer opnieuw.");
      }
      return;
    }

    const subject = `Contact website — ${naam.trim() || "aanvraag"}`;
    const body = [
      `Naam: ${naam.trim()}`,
      `E-mail van bezoeker: ${email.trim()}`,
      "",
      "Wat wil ik laten doen:",
      wens.trim() || "(nog niet ingevuld)",
      "",
      "---",
      "(Beantwoord naar het e-mailadres hierboven.)",
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
      {status === "ok" && (
        <p className="rounded-xl border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-100">
          Bedankt! Je bericht is verstuurd. Ik neem zo snel mogelijk contact met je op.
        </p>
      )}
      {status === "err" && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-100">
          {errMsg}
        </p>
      )}

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
          disabled={status === "sending"}
          className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[#f7f4ff] placeholder:text-white/35 outline-none ring-violet-500/40 focus:border-violet-500/50 focus:ring-2 disabled:opacity-50"
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
          disabled={status === "sending"}
          className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[#f7f4ff] placeholder:text-white/35 outline-none ring-violet-500/40 focus:border-violet-500/50 focus:ring-2 disabled:opacity-50"
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
          disabled={status === "sending"}
          className="w-full resize-y rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[#f7f4ff] placeholder:text-white/35 outline-none ring-violet-500/40 focus:border-violet-500/50 focus:ring-2 disabled:opacity-50"
          placeholder="Bijv. 3 Reels van ruw materiaal, deadline volgende week…"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-[#ff3d6b] via-[#7c5cff] to-[#2ee6c0] px-8 py-4 text-base font-extrabold text-[#120a16] shadow-[0_18px_50px_rgba(124,92,255,0.35)] hover:opacity-95 disabled:opacity-60 sm:w-auto"
      >
        {status === "sending"
          ? "Bezig met versturen…"
          : useWeb3
            ? "Verstuur bericht"
            : "Open mail met dit bericht"}
      </button>
      <p className="text-[0.85rem] leading-relaxed text-[rgba(231,228,255,0.55)]">
        {useWeb3 ? (
          <>
            Je bericht gaat direct naar <span className="font-semibold text-white/80">{CONTACT_EMAIL}</span>. Je hoeft
            je mailprogramma niet te openen.
          </>
        ) : (
          <>
            Zonder extra instelling opent na Verzenden je mail-app (Outlook, Gmail, …) met dit bericht. Voor{" "}
            <strong className="text-white/75">direct versturen</strong> zonder mail-app: zie{" "}
            <span className="text-white/80">SETUP.md</span> op GitHub (Web3Forms, eenmalig).
          </>
        )}
      </p>
    </form>
  );
}
