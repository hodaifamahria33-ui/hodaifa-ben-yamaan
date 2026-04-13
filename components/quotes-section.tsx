const quotes = [
  {
    q: "“Eindelijk iemand die begrijpt dat een goede edit ook emotie heeft. Het voelt duurder dan het is.”",
    a: "— Creator, mode & lifestyle (voorbeeld)",
  },
  {
    q: "“Snel, duidelijk, en de pacing klopt. Onze Shorts presteren merkbaar beter.”",
    a: "— Klein merk, Randstad (voorbeeld)",
  },
];

export function QuotesSection() {
  return (
    <section
      id="reviews"
      className="relative z-10 border-y border-[rgba(24,18,36,0.08)] bg-[linear-gradient(180deg,rgba(246,241,234,0.96),rgba(239,231,220,0.96))] py-16 text-[#1c1528]"
    >
      <div className="mx-auto max-w-[1140px] px-5">
        <header className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Wat klanten graag horen{" "}
            <span className="font-bold text-[rgba(74,68,88,0.85)]">(voorbeeldteksten)</span>
          </h2>
          <p className="mt-2 text-[1.05rem] text-[#4a4458]">Vervang dit later door echte quotes.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {quotes.map((x) => (
            <figure
              key={x.q}
              className="rounded-[22px] border border-[rgba(24,18,36,0.12)] bg-white/[0.65] p-6 shadow-[0_22px_60px_rgba(24,18,36,0.08)]"
            >
              <blockquote className="text-[1.08rem] font-semibold text-[rgba(28,21,40,0.92)]">{x.q}</blockquote>
              <figcaption className="mt-4 text-[0.95rem] font-semibold text-[rgba(74,68,88,0.85)]">{x.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
