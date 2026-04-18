"use client";

import { useState } from "react";
import { SITE_OWNER_FULL_NAME } from "@/lib/site";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#werk", label: "Werk" },
  { href: "#reviews", label: "Ervaringen" },
  { href: "#proces", label: "Werkwijze" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/85 backdrop-blur-[18px]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-3.5">
        <a
          href="#"
          className="font-display text-xl font-black tracking-tight"
          aria-label={`${SITE_OWNER_FULL_NAME} — home`}
        >
          Hodaifa<span className="text-black/50">.</span>
        </a>
        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] rounded-xl border border-black/10 bg-white md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 rounded-sm bg-black transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-sm bg-black transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
        <nav
          id="site-menu"
          className={`absolute left-0 right-0 top-full flex-col gap-0 border-b border-black/10 bg-[#f7f7f7]/[0.98] px-6 py-4 font-semibold md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-black/10 py-3 text-black/65 last:border-b-0 hover:text-black md:border-0 md:py-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full border border-black/15 bg-white px-4 py-2 text-center text-black hover:border-black/30 md:mt-0"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
