const steps = [
  {
    n: "1",
    title: "Brief",
    body: "Jij stuurt doel en stijl.",
  },
  {
    n: "2",
    title: "V1 montage",
    body: "Je krijgt een eerste versie.",
  },
  {
    n: "3",
    title: "Finishing",
    body: "Ik lever de finale video op.",
  },
];

export function ProcessSection() {
  return (
    <section id="proces" className="relative z-10 px-5 py-16">
      <div className="mx-auto max-w-[1140px]">
        <header className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Werkwijze
          </h2>
          <p className="mt-2 text-[1.05rem] text-black/60">Duidelijke stappen, snelle feedback, nette oplevering.</p>
        </header>
        <div className="grid gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative grid grid-cols-[52px_1fr] items-start gap-4 rounded-[22px] border border-black/10 bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.05)]"
            >
              <span className="font-display grid h-11 w-11 place-items-center rounded-2xl border border-black/10 bg-[#f2f2f2] text-sm font-black">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-lg font-black">{s.title}</h3>
                <p className="mt-1 text-black/60">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
