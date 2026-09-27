import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import QuoteBand from "@/components/QuoteBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Painting",
  description:
    "Interior and exterior painting in Cape Town: surface preparation, patching, priming, cutting in and a clean handover from TwinFinish Painting & Tiling.",
  alternates: { canonical: "/services/painting" },
};

const scope = [
  {
    title: "Walls & ceilings",
    copy: "Refreshes, colour changes, new finishes and even coverage across full rooms.",
  },
  {
    title: "Trim & detail",
    copy: "Doors, skirtings, frames and neat cutting-in along every edge.",
  },
  {
    title: "Exterior surfaces",
    copy: "Preparation and painting for exposed walls, fascias and features.",
  },
  {
    title: "Patch & prep",
    copy: "Minor filling, sanding and repairs completed before painting starts.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Assess",
    copy: "Check the condition of the surfaces, the colours, the access and the expected wear.",
  },
  {
    step: "02",
    title: "Protect",
    copy: "Mask and cover everything that is not being painted — floors, fittings and furniture.",
  },
  {
    step: "03",
    title: "Prepare & paint",
    copy: "Patch, sand, prime where needed, then apply the right coating system for the surface.",
  },
  {
    step: "04",
    title: "Inspect",
    copy: "Complete touch-ups, clean the edges, remove masking and review the result with you.",
  },
];

const included = [
  {
    title: "Interior painting",
    copy: "Living areas, bedrooms, kitchens, passages, ceilings and feature walls.",
  },
  {
    title: "Exterior painting",
    copy: "External walls and surfaces prepared for exposure and weather.",
  },
  {
    title: "Surface preparation",
    copy: "Cleaning, filling, sanding, crack repair and priming where required.",
  },
  {
    title: "Commercial & rental refreshes",
    copy: "Fast, practical repaints for offices, rentals, shops and turnover work.",
  },
];

export default function PaintingPage() {
  return (
    <>
      <PageHero
        eyebrow="Painting services"
        title="Prep first. Finish better."
        lead="Interior and exterior painting for Cape Town properties, with attention to surface preparation, edges, coverage and a clean final handover."
        image="/images/twinfinish/03_Services/exterior-painting.webp"
        mobileImage="/images/twinfinish/03_Services/exterior-painting-mobile.webp"
        alt="TwinFinish painter rolling an exterior wall beside a ladder"
        desktopWidth={1448}
        desktopHeight={1086}
        mobileWidth={800}
        mobileHeight={1000}
        focal="center 42%"
        mobileFocal="center 26%"
      />

      <section className="section">
        <div className="container split">
          <Reveal className="split-text">
            <span className="eyebrow">Interior &amp; exterior</span>
            <h2 className="section-title">
              The quality is in what happens <em>before the last coat.</em>
            </h2>
            <p className="section-copy">
              A neat finish depends on cleaning, patching, sanding, masking, priming where
              required and choosing the right coating for the surface it is going on to.
            </p>
            <div className="checklist">
              {scope.map((item) => (
                <div className="check" key={item.title}>
                  <i aria-hidden="true">✓</i>
                  <div>
                    <b>{item.title}</b>
                    <span>{item.copy}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="media-frame">
              <Image
                src="/images/twinfinish/04_Projects/project-team-workmanship.webp"
                alt="TwinFinish crew painting and preparing a property exterior"
                width={1672}
                height={941}
                sizes="(max-width: 900px) calc(100vw - 40px), 48vw"
                style={{ objectPosition: "center 42%" }}
                loading="lazy"
              />
              <div className="media-note">Clean lines. Even coverage. Proper preparation.</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Painting workflow</span>
            <h2 className="section-title">
              A finish you can <em>inspect closely.</em>
            </h2>
          </Reveal>

          <div className="process">
            {workflow.map((step, index) => (
              <Reveal className="step" key={step.step} delay={index * 80}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What is included</span>
            <h2 className="section-title">
              Painting scopes <em>we take on.</em>
            </h2>
          </Reveal>

          <div className="service-list">
            {included.map((item, index) => (
              <Reveal className="service-item" key={item.title} delay={index * 60}>
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="btn-row" delay={120}>
            <Link className="btn btn--primary" href="/contact">
              Get a painting quotation
            </Link>
            <Link className="btn btn--outline" href="/services/tiling">
              Looking for tiling?
            </Link>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        title="Rooms to repaint, walls to refresh?"
        copy="Share the suburb, the rooms involved and any timing requirements for a free quotation."
      />
    </>
  );
}
