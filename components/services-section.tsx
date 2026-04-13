const cards = [
  {
    title: "Short-form & social",
    body: "Hooks die meteen pakken, snelle cuts en formats die werken op Reels, TikTok en Shorts.",
    ticks: ["Meerdere hooks/variaties", "Ondertiteling & captions"],
    icon: (
      <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden>
        <path fill="currentColor" d="M4 6h16v2H4V6zm0 5h10v2H4v-2zm0 5h16v2H4v-2z" />
      </svg>
    ),
  },
  {
    title: "YouTube & longform",
    body: "Verhaal eerst: chapters, pacing en een montage die kijkers langer vasthoudt.",
    ticks: ["Structuur & storytelling", "Thumbnail momenten"],
    icon: (
      <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden>
        <path fill="currentColor" d="M8 5v14l11-7-11-7z" />
      </svg>
    ),
  },
  {
    title: "Campagnes & ads",
    body: "Meerdere lengtes en ratios uit één shoot — klaar om te schalen.",
    ticks: ["9:16 / 1:1 / 16:9", "Merk-consistente afwerking"],
    icon: (
      <svg viewBox="0 0 24 24" width={28} height={28} aria-hidden>
        <path fill="currentColor" d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 2a7 7 0 110 14 7 7 0 010-14zm-1 3v8l6-4-6-4z" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section id="diensten" className="relative z-10 border-y border-[rgba(24,18,36,0.08)] bg-[linear-gradient(180deg,rgba(246,241,234,0.96),rgba(239,231,220,0.96))] py-16 text-[#1c1528]">
      <div className="mx-auto max-w-[1140px] px-5">
        <header className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Diensten die je voelt — niet alleen ziet
          </h2>
          <p className="mt-2 text-[1.05rem] text-[#4a4458]">
            Geen trucjes: gewoon sterke keuzes in tempo, muziek en beeld. Kies wat bij je past; ik stem alles af op jouw
            doel.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              className="rounded-[22px] border border-[rgba(24,18,36,0.12)] bg-white/[0.72] p-6 shadow-[0_22px_60px_rgba(24,18,36,0.08)]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[rgba(124,92,255,0.18)] bg-gradient-to-br from-[rgba(124,92,255,0.25)] to-[rgba(255,61,107,0.12)] text-[#2f0d4f]">
                {c.icon}
              </div>
              <h3 className="font-display mt-2 text-xl font-black">{c.title}</h3>
              <p className="mt-2 text-[#4a4458]">{c.body}</p>
              <ul className="mt-4 grid gap-2">
                {c.ticks.map((t) => (
                  <li key={t} className="relative pl-6 text-[0.95rem] font-semibold text-[rgba(28,21,40,0.78)]">
                    <span className="absolute left-0 font-black text-green-600">✓</span>
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
