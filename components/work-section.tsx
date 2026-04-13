const projects = [
  {
    tag: "Social",
    title: "Launch week — high energy",
    body: "Snelle cuts, punchy muziek, sterke hook binnen 2 seconden.",
    thumb: "w1",
    wide: false,
  },
  {
    tag: "YouTube",
    title: "Deep dive — rust & ritme",
    body: "Ademruimte waar het moet, en versnelling waar het mag.",
    thumb: "w2",
    wide: false,
  },
  {
    tag: "Brand",
    title: "Campaign — clean & bold",
    body: "Strakke typografie, consistente kleur en premium eindgevoel.",
    thumb: "w3",
    wide: true,
  },
];

const thumbClass: Record<string, string> = {
  w1: "bg-[radial-gradient(600px_240px_at_20%_20%,rgba(255,61,107,0.55),transparent_55%),radial-gradient(500px_240px_at_80%_70%,rgba(124,92,255,0.55),transparent_55%),linear-gradient(145deg,#120b1f,#07060b)]",
  w2: "bg-[radial-gradient(500px_240px_at_70%_25%,rgba(46,230,192,0.45),transparent_55%),radial-gradient(500px_240px_at_20%_80%,rgba(124,92,255,0.35),transparent_55%),linear-gradient(155deg,#0b1220,#07060b)]",
  w3: "bg-[conic-gradient(from_210deg_at_50%_45%,rgba(255,200,87,0.35),rgba(124,92,255,0.45),rgba(255,61,107,0.35),rgba(46,230,192,0.25),rgba(255,200,87,0.35)),linear-gradient(180deg,#0a0a12,#120b1f)]",
};

export function WorkSection() {
  return (
    <section id="werk" className="relative z-10 px-5 py-16">
      <div className="mx-auto max-w-[1140px]">
        <header className="mb-10 max-w-[760px]">
          <h2 className="font-display text-[clamp(1.75rem,3.2vw,2.45rem)] font-black leading-tight tracking-[-0.03em]">
            Selected work{" "}
            <span className="text-[rgba(231,228,255,0.55)]">(placeholders — jouw echte werk hier)</span>
          </h2>
          <p className="mt-2 text-[1.05rem] text-[rgba(231,228,255,0.72)]">
            Stijlvoorbeelden: strak, kleurrijk en “expensive”. Vervang door jouw projecten zodra je assets hebt.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.title} className={p.wide ? "md:col-span-2" : ""}>
              <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03]">
                <div className="flex gap-1.5 border-b border-white/10 bg-[#0a0910]/65 px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="relative aspect-video">
                  <div className={`absolute inset-0 ${thumbClass[p.thumb]}`} />
                  <div className="absolute left-1/2 top-[56%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07060b]/45 text-lg text-white backdrop-blur-md">
                    ▶
                  </div>
                </div>
              </div>
              <div className="px-1 pt-4">
                <span className="inline-flex rounded-full border border-white/10 px-2.5 py-1 text-[0.72rem] font-black uppercase tracking-[0.12em] text-[rgba(231,228,255,0.65)]">
                  {p.tag}
                </span>
                <h3 className="font-display mt-2 text-xl font-black">{p.title}</h3>
                <p className="mt-1 text-[rgba(231,228,255,0.72)]">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
