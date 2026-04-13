export function HeroSection() {
  return (
    <section className="relative z-10 px-5 pb-8 pt-12">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-[0.82rem] font-bold uppercase tracking-[0.04em] text-[rgba(231,228,255,0.72)]">
            <span className="h-2 w-2 rounded-full bg-[#2ee6c0] shadow-[0_0_18px_rgba(46,230,192,0.8)]" />
            Beschikbaar voor nieuwe projecten
          </p>
          <h1 className="font-display text-[clamp(2.4rem,5.2vw,3.75rem)] font-black leading-[1.02] tracking-[-0.04em]">
            Video editing die{" "}
            <span className="bg-gradient-to-br from-[#ff3d6b] via-[#7c5cff] to-[#2ee6c0] bg-clip-text text-transparent">
              niet voelt
            </span>{" "}
            als “standaard content”.
          </h1>
          <p className="mt-4 max-w-[52ch] text-[1.12rem] text-[rgba(231,228,255,0.72)]">
            Ik monteer social clips, YouTube-video’s en campagnes met strak ritme, warme kleur en een premium flow —
            zodat jouw merk meteen professioneel oogt.
          </p>
          <div className="mt-7 flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff3d6b] via-[#7c5cff] to-[#2ee6c0] px-6 py-3.5 text-[0.95rem] font-extrabold text-[#120a16] shadow-[0_18px_50px_rgba(124,92,255,0.35)] hover:shadow-[0_22px_60px_rgba(255,61,107,0.25)]"
            >
              Plan een kennismaking
            </a>
            <a
              href="#werk"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-3.5 text-[0.95rem] font-extrabold text-white hover:border-white/25"
            >
              Bekijk werk
            </a>
          </div>
          <dl className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-display text-[0.95rem] font-extrabold">Snel schakelen</dt>
              <dd className="mt-1 text-[0.92rem] text-[rgba(231,228,255,0.72)]">Feedback rondes zonder gedoe</dd>
            </div>
            <div>
              <dt className="font-display text-[0.95rem] font-extrabold">Creatief meedenken</dt>
              <dd className="mt-1 text-[0.92rem] text-[rgba(231,228,255,0.72)]">Hooks, structuur &amp; tempo</dd>
            </div>
            <div>
              <dt className="font-display text-[0.95rem] font-extrabold">Export klaar</dt>
              <dd className="mt-1 text-[0.92rem] text-[rgba(231,228,255,0.72)]">Juiste formats per kanaal</dd>
            </div>
          </dl>
        </div>

        <div className="relative min-h-[420px] lg:min-h-0">
          <div className="rounded-[26px] bg-gradient-to-br from-[#ff3d6b]/65 via-[#7c5cff]/55 to-[#2ee6c0]/45 p-px shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <div className="overflow-hidden rounded-[25px] bg-[#0a0910]">
              <div className="flex items-center gap-2 border-b border-white/10 px-3.5 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-[0.78rem] font-bold tracking-wide text-[rgba(231,228,255,0.72)]">
                  timeline_01 — Hodaifa
                </span>
              </div>
              <div className="bg-[radial-gradient(900px_300px_at_30%_0%,rgba(124,92,255,0.35),transparent_60%),#0b0a12] px-4 pb-4 pt-3">
                <div
                  className="mb-3.5 h-[86px] rounded-2xl opacity-90"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 10px), linear-gradient(180deg, rgba(46,230,192,0.15), rgba(124,92,255,0.12))",
                    maskImage: "radial-gradient(90% 120% at 50% 0%, black, transparent)",
                  }}
                />
                <div className="mb-4 flex flex-col gap-2">
                  <div className="h-2.5 w-[62%] rounded-full bg-white/[0.06]" />
                  <div className="h-2.5 w-[88%] rounded-full bg-gradient-to-r from-[#ff3d6b]/20 via-[#7c5cff] to-[#2ee6c0]/35 shadow-[0_0_26px_rgba(124,92,255,0.25)]" />
                  <div className="h-2.5 w-[74%] rounded-full bg-white/[0.06]" />
                </div>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
                  <div className="h-[34px] w-[34px] rounded-[10px] bg-gradient-to-br from-[#ff3d6b] via-[#7c5cff] to-[#2ee6c0] shadow-[0_12px_30px_rgba(255,61,107,0.22)]" />
                  <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
                    <span className="absolute inset-y-0 left-0 w-[62%] rounded-full bg-gradient-to-r from-[#ff3d6b] to-[#7c5cff]" />
                  </div>
                  <span className="text-[0.8rem] font-extrabold tracking-[0.06em] text-[rgba(231,228,255,0.85)]">
                    00:01:24:18
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-2 top-[18%] w-[min(240px,72vw)] rounded-2xl border border-white/10 bg-[#0a0910]/82 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-md max-lg:static max-lg:mt-4 max-lg:w-full">
            <strong className="font-display block text-base">+ Retentie</strong>
            <span className="text-[0.88rem] text-[rgba(231,228,255,0.72)]">Strakkere pacing = langer kijken</span>
          </div>
          <div className="absolute bottom-[8%] left-[-6px] w-[min(240px,72vw)] rounded-2xl border border-white/10 bg-[#0a0910]/82 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-md max-lg:static max-lg:mt-3 max-lg:w-full">
            <strong className="font-display block text-base">+ Look</strong>
            <span className="text-[0.88rem] text-[rgba(231,228,255,0.72)]">Kleurconsistentie over al je clips</span>
          </div>
        </div>
      </div>
    </section>
  );
}
