import { ContactForm } from "@/components/contact-form";
import { CONTACT_EMAIL } from "@/lib/site";

const hasWeb3 = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

export function CtaSection() {
  return (
    <section id="contact" className="relative z-10 px-5 pb-20 pt-4">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[28px] border border-white/15 bg-[radial-gradient(900px_420px_at_20%_20%,rgba(124,92,255,0.35),transparent_60%),radial-gradient(700px_420px_at_80%_40%,rgba(255,61,107,0.22),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.55)] md:p-10">
          <div className="max-w-[52ch]">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-black tracking-[-0.03em]">
              Klaar voor een edit die opvalt?
            </h2>
            <p className="mt-2 text-[rgba(231,228,255,0.72)]">
              {hasWeb3 ? (
                <>
                  Vul hieronder je naam, je e-mail en wat je wilt laten doen. Je bericht wordt verstuurd naar{" "}
                  <span className="font-semibold text-white/90">{CONTACT_EMAIL}</span>.
                </>
              ) : (
                <>
                  Vul hieronder je naam, je e-mail en wat je wilt laten doen. Je mail-app opent met een kant-en-klaar
                  bericht naar <span className="font-semibold text-white/90">{CONTACT_EMAIL}</span> (daarna één keer op
                  Verzenden). Wil je dat het <em>zonder</em> mail-app direct binnenkomt? Dat kan met een gratis sleutel —
                  uitleg staat in het bestand <span className="font-semibold text-white/85">SETUP.md</span> in je
                  GitHub-repo.
                </>
              )}
            </p>
          </div>
          <ContactForm />
          <p className="mt-4 max-w-xl text-[0.92rem] text-[rgba(231,228,255,0.62)]">
            Tip: heb je al bestanden? Zet een Drive- of WeTransfer-link in het veld &quot;Wat wil je laten doen?&quot;.
          </p>
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
