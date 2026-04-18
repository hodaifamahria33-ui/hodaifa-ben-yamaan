import { SITE_OWNER_FULL_NAME } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="relative z-10 px-5 pb-8 pt-12">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-2 text-[0.95rem] font-semibold text-black/80">{SITE_OWNER_FULL_NAME}</p>
          <p className="mb-3 max-w-[62ch] text-[0.8rem] leading-snug text-black/45">Video editor · Nederland</p>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-[0.82rem] font-bold uppercase tracking-[0.04em] text-black/65">
            <span className="h-2 w-2 rounded-full bg-black/60" />
            Beschikbaar voor nieuwe projecten
          </p>
          <h1 className="font-display text-[clamp(2.4rem,5.2vw,3.75rem)] font-black leading-[1.02] tracking-[-0.04em]">
            Strakke edits zonder gedoe.
          </h1>
          <p className="mt-4 max-w-[52ch] text-[1.05rem] text-black/65">
            Korte of lange video. Snel en netjes opgeleverd.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-black px-6 py-3.5 text-[0.95rem] font-extrabold text-white hover:bg-black/85"
            >
              Start project
            </a>
            <a
              href="#werk"
              className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3.5 text-[0.95rem] font-extrabold text-black hover:border-black/30"
            >
              Portfolio
            </a>
          </div>
          <dl className="mt-8 grid gap-4 border-t border-black/10 pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-display text-[0.95rem] font-extrabold">Snel schakelen</dt>
              <dd className="mt-1 text-[0.92rem] text-black/60">Feedback zonder gedoe</dd>
            </div>
            <div>
              <dt className="font-display text-[0.95rem] font-extrabold">Creatief meedenken</dt>
              <dd className="mt-1 text-[0.92rem] text-black/60">Hooks, structuur &amp; tempo</dd>
            </div>
            <div>
              <dt className="font-display text-[0.95rem] font-extrabold">Export klaar</dt>
              <dd className="mt-1 text-[0.92rem] text-black/60">Juiste formats per kanaal</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[420px] lg:min-h-0">
          <div className="rounded-[26px] border border-black/10 bg-white p-px shadow-[0_20px_45px_rgba(0,0,0,0.08)]">
            <div className="overflow-hidden rounded-[25px] bg-[#fcfcfc]">
              <div className="flex items-center gap-2 border-b border-black/10 px-3.5 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
                <span className="ml-2 text-[0.78rem] font-bold tracking-wide text-black/55">
                  timeline_01 — {SITE_OWNER_FULL_NAME}
                </span>
              </div>
              <div className="bg-[radial-gradient(700px_240px_at_30%_0%,rgba(0,0,0,0.06),transparent_60%),#f8f8f8] px-4 pb-4 pt-3">
                <div
                  className="mb-3.5 h-[86px] rounded-2xl opacity-90"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(0,0,0,0.09) 0 2px, transparent 2px 10px), linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.04))",
                    maskImage: "radial-gradient(90% 120% at 50% 0%, black, transparent)",
                  }}
                />
                <div className="mb-4 flex flex-col gap-2">
                  <div className="h-2.5 w-[62%] rounded-full bg-black/[0.1]" />
                  <div className="h-2.5 w-[88%] rounded-full bg-black/[0.22]" />
                  <div className="h-2.5 w-[74%] rounded-full bg-black/[0.1]" />
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-3 py-2.5">
                  <div className="h-[34px] w-[34px] rounded-[10px] bg-black/80" />
                  <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-black/[0.1]">
                    <span className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-black/70" />
                  </div>
                  <span className="text-[0.8rem] font-extrabold tracking-[0.06em] text-black/70">00:01:24:18</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 top-[18%] w-[min(240px,72vw)] rounded-2xl border border-black/10 bg-white/90 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.08)] backdrop-blur-md max-lg:static max-lg:mt-4 max-lg:w-full">
            <strong className="font-display block text-base">+ Retentie</strong>
            <span className="text-[0.88rem] text-black/60">Strakkere pacing = langer kijken</span>
          </div>
          <div className="absolute bottom-[8%] left-[-6px] w-[min(240px,72vw)] rounded-2xl border border-black/10 bg-white/90 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.08)] backdrop-blur-md max-lg:static max-lg:mt-3 max-lg:w-full">
            <strong className="font-display block text-base">+ Look</strong>
            <span className="text-[0.88rem] text-black/60">Consistente look over je clips</span>
          </div>
        </div>
      </div>
    </section>
  );
}
