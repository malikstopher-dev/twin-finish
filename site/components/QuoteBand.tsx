import Link from "next/link";
import { PHONE_HREF, SITE } from "@/lib/site";

type QuoteBandProps = {
  title?: string;
  copy?: string;
  variant?: "orange" | "navy";
};

export default function QuoteBand({
  title = "Planning a painting or tiling project?",
  copy = "Send the details of your space and we will talk through the work, the timing and a free quotation.",
  variant = "orange",
}: QuoteBandProps) {
  return (
    <section className={`quote-band quote-band--${variant}`}>
      <div className="container">
        <div className="quote-inner">
          <div className="quote-text">
            <h2>{title}</h2>
            <p>{copy}</p>
          </div>
          <div className="btn-row">
            <Link className="btn btn--dark" href="/contact">
              Get a free quotation
            </Link>
            <a className="btn btn--outline-dark" href={PHONE_HREF}>
              Call {SITE.phoneDisplay}
            </a>
            <a
              className="btn btn--outline-dark"
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
