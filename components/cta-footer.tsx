import { ContactForm } from "@/components/contact-form";
import { CONTACT_EMAIL, SITE_OWNER_FULL_NAME } from "@/lib/site";

const hasWeb3 = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

export function CtaSection() {
  return (
    <section id="contact" className="relative z-10 px-5 pb-20 pt-4">
      <div className="mx-auto max-w-[1140px]">
        <div className="rounded-[28px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(242,242,242,0.95))] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.08)] md:p-10">
          <div className="max-w-[52ch]">
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.25rem)] font-black tracking-[-0.03em]">
              Klaar om te starten?
            </h2>
            <p className="mt-2 text-black/65">
              {hasWeb3 ? (
                <>
                  Vul je naam en e-mail in. Je bericht gaat direct naar{" "}
                  <span className="font-semibold text-black/85">{CONTACT_EMAIL}</span>.
                </>
              ) : (
                <>
                  Vul je naam en e-mail in. Daarna opent je mail-app naar{" "}
                  <span className="font-semibold text-black/85">{CONTACT_EMAIL}</span>.
                </>
              )}
            </p>
          </div>
          <ContactForm />
          <p className="mt-4 max-w-xl text-[0.92rem] text-black/55">
            Tip: heb je al bestanden? Zet een Drive- of WeTransfer-link in het veld &quot;Wat wil je laten doen?&quot;.
          </p>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-black/10 bg-[#f2f2f2] px-5 py-10">
      <div className="mx-auto grid max-w-[1140px] gap-4 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <strong className="font-display text-lg">{SITE_OWNER_FULL_NAME}</strong>
          <p className="text-[0.92rem] text-black/55">Video editing · Montage · Kleur</p>
        </div>
        <div className="flex flex-wrap gap-4 font-extrabold md:justify-end">
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-black" title={CONTACT_EMAIL}>
            {CONTACT_EMAIL}
          </a>
          <a href="#diensten" className="hover:text-black">
            Diensten
          </a>
          <a href="#prijzen" className="hover:text-black">
            Prijzen
          </a>
          <a href="#werk" className="hover:text-black">
            Werk
          </a>
        </div>
        <div className="space-y-2 text-[0.92rem] text-black/55 md:col-span-2">
          <p>
            © {new Date().getFullYear()} {SITE_OWNER_FULL_NAME}. Alle rechten voorbehouden.
          </p>
          <p className="text-[0.85rem] leading-relaxed text-black/45">Portfolio van {SITE_OWNER_FULL_NAME}.</p>
        </div>
      </div>
    </footer>
  );
}
