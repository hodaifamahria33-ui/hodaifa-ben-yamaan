const cards = [
  {
    title: "Short-form & social",
    body: "Korte edits met tempo voor Reels, TikTok en Shorts.",
    ticks: ["Snelle hook", "Ondertiteling"],
    icon: (
      <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden>
        <path fill="currentColor" d="M4 6h16v2H4V6zm0 5h10v2H4v-2zm0 5h16v2H4v-2z" />
      </svg>
    ),
  },
  {
    title: "YouTube & longform",
    body: "Rustige opbouw, goede flow en duidelijk verhaal.",
    ticks: ["Sterke structuur", "Retention focus"],
    icon: (
      <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden>
        <path fill="currentColor" d="M8 5v14l11-7-11-7z" />
      </svg>
    ),
  },
  {
    title: "Campagnes & ads",
    body: "Uit 1 shoot meerdere formaten, direct klaar voor ads.",
    ticks: ["Alle formaten", "Nette afwerking"],
    icon: (
      <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden>
        <path fill="currentColor" d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 110 14 7 7 0 010-14zm-1 3v8l6-4-6-4z" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="diensten" className="relative z-10 border-y border-black/10 bg-[linear-gradient(180deg,rgba(248,248,248,0.96),rgba(236,236,236,0.96))] py-16 text-[#171717]">
      <div className="mx-auto max-w-[1140px] px-5">
        <header className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Diensten
          </h2>
          <p className="mt-2 text-[1.05rem] text-[#4a4a4a]">Kies wat je nodig hebt. Kort en duidelijk.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-[22px] border border-black/10 bg-white/[0.8] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-black/15 bg-[linear-gradient(145deg,rgba(24,24,24,0.14),rgba(24,24,24,0.06))] text-[#222]">
                {c.icon}
              </div>
              <h3 className="font-display mt-2 text-xl font-black">{c.title}</h3>
              <p className="mt-2 text-[#4a4a4a]">{c.body}</p>
              <ul className="mt-4 grid gap-2">
                {c.ticks.map((t) => (
                  <li key={t} className="relative pl-6 text-[0.95rem] font-semibold text-black/75">
                    <span className="absolute left-0 font-black text-black/60">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
