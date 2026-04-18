const plans = [
  {
    duration: "Tot 30 sec",
    price: "€45",
    note: "1 korte video",
  },
  {
    duration: "30-60 sec",
    price: "€75",
    note: "Reel / TikTok / Short",
  },
  {
    duration: "1-3 min",
    price: "€120",
    note: "YouTube of promo",
  },
  {
    duration: "3-8 min",
    price: "€220",
    note: "Long-form edit",
  },
];

export function PricingSection() {
  return (
    <section id="prijzen" className="relative z-10 border-y border-black/10 bg-[#f2f2f2]/80 px-5 py-16">
      <div className="mx-auto max-w-[1140px]">
        <header className="mb-8 max-w-[720px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Prijzen
          </h2>
          <p className="mt-2 text-[1.02rem] text-black/60">Prijs hangt af van videolengte. Simpel en duidelijk.</p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.duration}
              className="rounded-[20px] border border-black/10 bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
            >
              <p className="text-[0.82rem] font-bold uppercase tracking-[0.06em] text-black/50">{plan.duration}</p>
              <p className="mt-2 font-display text-3xl font-black">{plan.price}</p>
              <p className="mt-2 text-[0.95rem] text-black/60">{plan.note}</p>
            </article>
          ))}
        </div>

        <p className="mt-5 text-[0.9rem] text-black/50">Extra revisies of complexe motion graphics: prijs op aanvraag.</p>
      </div>
    </section>
  );
}
