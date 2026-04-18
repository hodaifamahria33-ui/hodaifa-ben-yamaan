const items = [
  "Montage",
  "Geluid (mix)",
  "Color grading",
  "Motion & titels",
  "Reels & Shorts",
  "YouTube long-form",
];

export function MarqueeStrip() {
  const row = [...items, ...items];
  return (
    <div className="mt-10 overflow-hidden border-y border-black/10 bg-white/70">
      <div className="animate-marquee flex w-max gap-10 py-3.5 text-[0.82rem] font-black uppercase tracking-[0.08em] text-black/50">
        {row.map((t, i) => (
          <span key={`${t}-${i}`} className="whitespace-nowrap">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
