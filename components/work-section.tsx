const projects = [
  {
    tag: "Social",
    title: "Launchweek",
    body: "Snelle social edit.",
    thumb: "w1",
    wide: false,
  },
  {
    tag: "YouTube",
    title: "Interview edit",
    body: "Rustig tempo en duidelijke flow.",
    thumb: "w2",
    wide: false,
  },
  {
    tag: "Merk",
    title: "Campagne edit",
    body: "Nette merkvideo in meerdere formaten.",
    thumb: "w3",
    wide: true,
  },
];

const thumbClass: Record<string, string> = {
  w1: "bg-[radial-gradient(600px_240px_at_20%_20%,rgba(0,0,0,0.08),transparent_55%),radial-gradient(500px_240px_at_80%_70%,rgba(0,0,0,0.06),transparent_55%),linear-gradient(145deg,#f7f7f7,#efefef)]",
  w2: "bg-[radial-gradient(500px_240px_at_70%_25%,rgba(0,0,0,0.08),transparent_55%),radial-gradient(500px_240px_at_20%_80%,rgba(0,0,0,0.04),transparent_55%),linear-gradient(155deg,#fafafa,#ececec)]",
  w3: "bg-[conic-gradient(from_210deg_at_50%_45%,rgba(0,0,0,0.08),rgba(0,0,0,0.03),rgba(0,0,0,0.06),rgba(0,0,0,0.03),rgba(0,0,0,0.08)),linear-gradient(180deg,#f5f5f5,#ececec)]",
};

export function WorkSection() {
  return (
    <section id="werk" className="relative z-10 px-5 py-16">
      <div className="mx-auto max-w-[1140px]">
        <header className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Portfolio <span className="text-black/45">(voorbeelden)</span>
          </h2>
          <p className="mt-2 text-[1.05rem] text-black/60">Voorbeelden. Later kun je hier je echte werk zetten.</p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className={p.wide ? "md:col-span-2" : ""}>
              <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white">
                <div className="flex gap-1.5 border-b border-black/10 bg-[#f0f0f0] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                </div>
                <div className="relative aspect-video cursor-default select-none">
                  <div
                    className={`pointer-events-none absolute inset-0 ${thumbClass[p.thumb]}`}
                    aria-hidden
                  />
                  {/* Geen echte video: alleen een still / stijlvoorbeeld (geen play-knop — die leek klikbaar) */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" aria-hidden />
                  <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/85 to-transparent px-3 pb-3 pt-10">
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.06em] text-black/70">
                      Stijlvoorbeeld
                    </p>
                    <p className="text-[0.8rem] text-black/55">Geen video — dit is een decoratieve preview</p>
                  </div>
                </div>
              </div>
              <div className="px-1 pt-4">
                <span className="inline-flex rounded-full border border-black/10 px-2.5 py-1 text-[0.72rem] font-black uppercase tracking-[0.12em] text-black/60">
                  {p.tag}
                </span>
                <h3 className="font-display mt-2 text-xl font-black">{p.title}</h3>
                <p className="mt-1 text-black/60">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
