import { PHONE_HREF, SITE } from "@/lib/site";

export default function MobileCtaBar() {
  return (
    <div className="mobile-cta" aria-label="Quick contact">
      <a className="mobile-cta-call" href={PHONE_HREF}>
        Call {SITE.phoneDisplay}
      </a>
      <a
        className="mobile-cta-whatsapp"
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
