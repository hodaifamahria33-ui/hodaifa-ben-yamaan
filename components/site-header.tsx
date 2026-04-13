"use client";

import { useState } from "react";

const links = [
  { href: "#diensten", label: "Diensten" },
  { href: "#werk", label: "Werk" },
  { href: "#reviews", label: "Ervaringen" },
  { href: "#proces", label: "Werkwijze" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07060b]/75 backdrop-blur-[18px]">
      <div className="mx-auto flex max-w-[1140px] items-center justify-between gap-4 px-5 py-3.5">
        <a href="#" className="font-display text-xl font-black tracking-tight">
          Hodaifa<span className="text-[#2ee6c0]">.</span>
        </a>
        <button
          type="button"
          className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-0.5 w-5 rounded-sm bg-white transition ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-sm bg-white transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </button>
        <nav
          id="site-menu"
          className={`absolute left-0 right-0 top-full flex-col gap-0 border-b border-white/10 bg-[#07060b]/[0.98] px-6 py-4 font-semibold md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 ${
            open ? "flex" : "hidden md:flex"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b border-white/10 py-3 text-[rgba(231,228,255,0.72)] last:border-b-0 hover:text-white md:border-0 md:py-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-white hover:border-[#2ee6c0]/45 hover:text-[#2ee6c0] md:mt-0"
            onClick={() => setOpen(false)}
          >
            Boek een call
          </a>
        </nav>
      </div>
    </header>
  );
}
