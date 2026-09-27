import type { Metadata } from "next";
import ArtImage from "@/components/ArtImage";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { PHONE_HREF, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or WhatsApp TwinFinish Painting & Tiling on 063 499 7520 for painting and tiling quotations in Cape Town and surrounding areas.",
  alternates: { canonical: "/contact" },
};

const points = [
  { icon: "☎", label: "Call", value: SITE.phoneDisplay, href: PHONE_HREF },
  { icon: "◉", label: "WhatsApp", value: `Message ${SITE.phoneDisplay}`, href: SITE.whatsapp },
  { icon: "⌖", label: "Service area", value: SITE.area, href: null },
];

const faqs = [
  {
    q: "Do you work around Cape Town?",
    a: "The business is positioned for Cape Town and nearby areas. Confirm the exact travel coverage with Frank before publishing this page.",
  },
  {
    q: "Can I send photos first?",
    a: "Yes. WhatsApp is the quickest way to send project photos and arrange an assessment of the surfaces.",
  },
  {
    q: "Does the form send email?",
    a: "Not yet. It is intentionally front-end only until an email address, form service or backend destination is chosen.",
  },
  {
    q: "Is there a cost for a quotation?",
    a: "The quotation conversation itself is free. Share the suburb, the type of work and the rooms or areas involved to get started.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero">
        <div className="contact-info">
          <div className="contact-info-inner">
            <Reveal as="div" className="eyebrow">
              Contact TwinFinish
            </Reveal>
            <h1 className="mask-line">
              <span>Let&apos;s talk about the space.</span>
            </h1>
            <p className="contact-lead">
              Painting, tiling or a renovation finish project in Cape Town? Send the details and
              arrange a quotation with the team.
            </p>

            <div className="contact-points">
              {points.map((point) => {
                const body = (
                  <>
                    <span aria-hidden="true">{point.icon}</span>
                    <div>
                      <b>{point.label}</b>
                      <span>{point.value}</span>
                    </div>
                  </>
                );

                return point.href ? (
                  <a
                    className="contact-point"
                    key={point.label}
                    href={point.href}
                    target={point.href.startsWith("http") ? "_blank" : undefined}
                    rel={point.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {body}
                  </a>
                ) : (
                  <div className="contact-point" key={point.label}>
                    {body}
                  </div>
                );
              })}
            </div>

            <div className="btn-row">
              <a className="btn btn--primary" href={PHONE_HREF}>
                Call now
              </a>
              <a
                className="btn btn--ghost"
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
            </div>

            <p className="notice">
              Led by {SITE.founder} — residential, rental and commercial painting and tiling.
            </p>
          </div>
        </div>

        <div className="contact-photo">
          <ArtImage
            src="/images/twinfinish/05_Contact/contact-hero-desktop.webp"
            mobileSrc="/images/twinfinish/05_Contact/contact-hero-mobile.webp"
            alt="TwinFinish enquiry desk with headset ready to take your call"
            width={1672}
            height={941}
            mobileWidth={941}
            mobileHeight={1672}
            loading="eager"
            fetchPriority="high"
            focal="84% 30%"
            mobileFocal="center 26%"
          />
        </div>
      </section>

      <section className="section">
        <div className="container form-wrap">
          <Reveal className="split-text">
            <span className="eyebrow">Send an enquiry</span>
            <h2 className="section-title">
              Give us <em>the basics.</em>
            </h2>
            <p className="section-copy">
              For a useful quotation request, include the suburb, the type of work, approximate
              areas or rooms, and any timing requirements. Photos can be requested over WhatsApp.
            </p>

            <div className="faq">
              {faqs.map((faq, index) => (
                <details key={faq.q} open={index === 0}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
