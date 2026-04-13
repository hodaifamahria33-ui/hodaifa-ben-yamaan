const steps = [
  {
    n: "1",
    title: "Brief",
    body: "Doel, stijl, referenties en deadline — zodat ik meteen scherp kan starten.",
  },
  {
    n: "2",
    title: "V1 montage",
    body: "Eerste versie met structuur en ritme. Jij geeft heldere feedback.",
  },
  {
    n: "3",
    title: "Finishing",
    body: "Kleur, geluid, titels — export in de formats die jij nodig hebt.",
  },
];

export function ProcessSection() {
  return (
    <section id="proces" className="relative z-10 px-5 py-16">
      <div className="mx-auto max-w-[1140px]">
        <header className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Werkwijze — simpel en transparant
          </h2>
          <p className="mt-2 text-[1.05rem] text-[rgba(231,228,255,0.72)]">
            Geen eindeloze meetings: duidelijke stappen, strakke feedback, snelle iteraties.
          </p>
        </header>
        <div className="grid gap-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative grid grid-cols-[52px_1fr] items-start gap-4 rounded-[22px] border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="font-display grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-black">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-lg font-black">{s.title}</h3>
                <p className="mt-1 text-[rgba(231,228,255,0.72)]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
