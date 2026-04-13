import { CONTACT_EMAIL, mailtoSubject } from "@/lib/site";

export function CtaSection() {
  return (
    <section id="contact" className="relative z-10 px-5 pb-20 pt-4">
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-col gap-6 rounded-[28px] border border-white/15 bg-[radial-gradient(900px_420px_at_20%_20%,rgba(124,92,255,0.35),transparent_60%),radial-gradient(700px_420px_at_80%_40%,rgba(255,61,107,0.22),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.55)] md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-black tracking-[-0.03em]">
              Klaar voor een edit die opvalt?
            </h2>
            <p className="mt-2 max-w-[52ch] text-[rgba(231,228,255,0.72)]">
              Mail me met je idee, linkjes naar referenties, en je planning. Ik reageer snel met een voorstel.
            </p>
          </div>
          <div className="shrink-0 text-left md:text-right">
            <a
              href={mailtoSubject("Video editing — nieuw project")}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff3d6b] via-[#7c5cff] to-[#2ee6c0] px-8 py-4 text-base font-extrabold text-[#120a16] shadow-[0_18px_50px_rgba(124,92,255,0.35)]"
            >
              Mail: start je project
            </a>
            <p className="mt-3 text-[0.92rem] text-[rgba(231,228,255,0.62)]">
              Voeg een Drive-link toe als je al beelden hebt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/20 px-5 py-10">
      <div className="mx-auto grid max-w-[1140px] gap-4 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <strong className="font-display text-lg">Hodaifa</strong>
          <p className="text-[0.92rem] text-[rgba(231,228,255,0.62)]">Video editing · Montage · Kleur</p>
        </div>
        <div className="flex flex-wrap gap-4 font-extrabold md:justify-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#2ee6c0]" title={CONTACT_EMAIL}>
            {CONTACT_EMAIL}
          </a>
          <a href="#diensten" className="hover:text-[#2ee6c0]">
            Diensten
          </a>
          <a href="#werk" className="hover:text-[#2ee6c0]">
            Werk
          </a>
        </div>
        <p className="text-[0.92rem] text-[rgba(231,228,255,0.62)] md:col-span-2">
          © {new Date().getFullYear()} Hodaifa. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}
