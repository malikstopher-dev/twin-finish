import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import QuoteBand from "@/components/QuoteBand";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "TwinFinish Painting & Tiling is led by Frank Sbu Biyela, serving Cape Town with painting and tiling work focused on preparation, detail and dependable finishing.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    index: "01",
    title: "Preparation",
    copy: "Surfaces are cleaned, filled, sanded and masked before any finish is applied.",
  },
  {
    index: "02",
    title: "Respect for property",
    copy: "Floors, furniture and fixtures are protected while the work is under way.",
  },
  {
    index: "03",
    title: "Dependable finishing",
    copy: "Edges, joints, coverage and cleanup are checked before a space is handed over.",
  },
  {
    index: "04",
    title: "Communication",
    copy: "Scope, progress and next steps are discussed plainly, from quote to completion.",
  },
];

const audiences = [
  {
    title: "Homes & apartments",
    copy: "Rooms, living areas, bathrooms, kitchens and exteriors.",
  },
  {
    title: "Commercial spaces",
    copy: "Offices, retail spaces, small business premises and refurbishments.",
  },
  {
    title: "Renovation support",
    copy: "Painting and tiling as part of a larger property improvement project.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-split">
        <div className="container hero-split-grid">
          <div className="hero-split-copy">
            <span className="eyebrow">About TwinFinish</span>
            <h1 className="hero-split-title">
              <span className="mask-line">
                <span>Workmanship with a</span>
              </span>
              <span className="mask-line">
                <span style={{ animationDelay: "0.14s" }}>
                  <em>personal foundation.</em>
                </span>
              </span>
            </h1>
            <p className="hero-split-lead">
              TwinFinish Painting &amp; Tiling is led by Frank Sbu Biyela, serving clients across
              Cape Town with painting and tiling work focused on preparation, detail and
              dependable finishing.
            </p>
          </div>

          <figure className="hero-split-figure">
            <Image
              src="/images/twinfinish/02_About/about-founder-portrait.webp"
              alt={`${SITE.founder}, founder of TwinFinish Painting & Tiling`}
              width={1122}
              height={1402}
              sizes="(max-width: 900px) calc(100vw - 40px), 42vw"
              loading="eager"
              fetchPriority="high"
            />
            <picture className="hero-split-mobile-picture">
              <Image
                src="/images/twinfinish/02_About/about-founder-mobile-framed.webp"
                alt={`${SITE.founder}, founder of TwinFinish Painting & Tiling`}
                width={1122}
                height={1582}
                sizes="100vw"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
            <figcaption>
              <b>{SITE.founder}</b>
              <span>Founder</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal className="split-text">
            <span className="eyebrow">The story</span>
            <h2 className="section-title">
              A name inspired by family. <em>A reputation built on the finish.</em>
            </h2>
            <p className="section-copy">
              The TwinFinish name was developed around Frank&apos;s twins, Sasha and Sbu, giving
              the business a personal identity rather than a generic contractor name. The aim is
              simple: build a company that clients remember for good workmanship, clear
              communication and pride in the final result.
            </p>
            <p className="section-copy">
              Everything is positioned around one standard — the space should be left better than
              it was found, and the client should know exactly what was done.
            </p>
            <p className="notice">
              Brand story to confirm before launch: the family inspiration is part of this concept
              direction and can be rewritten if Frank prefers a different public story.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="media-frame">
              <Image
                src="/images/twinfinish/02_About/about-team.webp"
                alt="The TwinFinish crew together on site"
                width={1448}
                height={1086}
                sizes="(max-width: 900px) calc(100vw - 40px), 48vw"
                style={{ objectPosition: "center 42%" }}
                loading="lazy"
              />
              <div className="media-note">
                {SITE.founder}
                <br />
                Founder, with the TwinFinish team
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What the brand stands for</span>
            <h2 className="section-title">
              Professional <em>without feeling corporate.</em>
            </h2>
            <p className="section-copy">
              Four working values shape how every quotation, site visit and handover is handled.
            </p>
          </Reveal>

          <div className="process">
            {values.map((value, index) => (
              <Reveal className="step" key={value.index} delay={index * 80}>
                <span>{value.index}</span>
                <h3>{value.title}</h3>
                <p>{value.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split-text">
            <span className="eyebrow">Where we work</span>
            <h2 className="section-title">
              Residential and <em>commercial spaces.</em>
            </h2>
            <p className="section-copy">
              The business is positioned for enquiries from homeowners, landlords, property
              managers, small businesses, offices and renovation clients around {SITE.area}.
            </p>
            <div className="checklist">
              {audiences.map((audience) => (
                <div className="check" key={audience.title}>
                  <i aria-hidden="true">✓</i>
                  <div>
                    <b>{audience.title}</b>
                    <span>{audience.copy}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" href="/contact">
                Request a quotation
              </Link>
              <Link className="btn btn--outline" href="/services">
                See all services
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="media-frame">
              <Image
                src="/images/twinfinish/02_About/about-service-area.webp"
                alt="A finished Cape Town property with Table Mountain in the background"
                width={1448}
                height={1086}
                sizes="(max-width: 900px) calc(100vw - 40px), 48vw"
                style={{ objectPosition: "center 52%" }}
                loading="lazy"
              />
              <div className="media-note">{SITE.area}</div>
            </div>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        title="Want to talk through your project?"
        copy="Send the suburb, the type of work and a few photos over WhatsApp, and the team can take it from there."
      />
    </>
  );
}
