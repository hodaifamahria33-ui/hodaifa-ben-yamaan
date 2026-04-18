const quotes = [
  {
    q: "“Snel geleverd en strak gemonteerd.”",
    a: "— Creator (voorbeeld)",
  },
  {
    q: "“Onze video’s zien er direct beter uit.”",
    a: "— Merk (voorbeeld)",
  },
];

export function QuotesSection() {
  return (
    <section
      id="reviews"
      className="relative z-10 border-y border-black/10 bg-[linear-gradient(180deg,rgba(248,248,248,0.96),rgba(236,236,236,0.96))] py-16 text-[#171717]"
    >
      <div className="mx-auto max-w-[1140px] px-5">
        <header className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Reviews <span className="font-bold text-black/60">(voorbeeld)</span>
          </h2>
          <p className="mt-2 text-[1.05rem] text-[#4a4a4a]">Vervang dit later door echte quotes.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {quotes.map((x) => (
            <figure
              key={x.q}
              className="rounded-[22px] border border-black/10 bg-white/[0.8] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.08)]"
            >
              <blockquote className="text-[1.08rem] font-semibold text-black/85">{x.q}</blockquote>
              <figcaption className="mt-4 text-[0.95rem] font-semibold text-black/60">{x.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
