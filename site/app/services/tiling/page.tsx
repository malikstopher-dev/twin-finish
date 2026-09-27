import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import QuoteBand from "@/components/QuoteBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tiling",
  description:
    "Wall and floor tiling in Cape Town: measured layouts, clean cuts, consistent joints and detailed grouting for bathrooms, kitchens and living areas.",
  alternates: { canonical: "/services/tiling" },
};

const scope = [
  {
    title: "Bathroom tiling",
    copy: "Walls, floors, shower zones and feature areas.",
  },
  {
    title: "Kitchen tiling",
    copy: "Splashbacks, walls and floors around working areas.",
  },
  {
    title: "Floor tiling",
    copy: "Room layouts, cuts, joints and grouting across full floors.",
  },
  {
    title: "Repair & replacement work",
    copy: "Selected tile replacement or re-finishing where practical.",
  },
];

const workflow = [
  {
    step: "01",
    title: "Measure",
    copy: "Check the area, tile size, layout and the visible lines the eye will follow.",
  },
  {
    step: "02",
    title: "Prepare",
    copy: "Assess the substrate, level it where needed and confirm it is ready for adhesive.",
  },
  {
    step: "03",
    title: "Install",
    copy: "Set tiles to the planned layout, keep alignment tight and manage clean cuts.",
  },
  {
    step: "04",
    title: "Grout & finish",
    copy: "Finish joints, edges and trims, then clean the surface for handover.",
  },
];

const included = [
  {
    title: "Wall tiling",
    copy: "Bathrooms, kitchens, splashbacks and decorative tiled surfaces.",
  },
  {
    title: "Floor tiling",
    copy: "Layout planning, adhesive application, cutting, alignment and grouting.",
  },
  {
    title: "Bathroom & kitchen tiling",
    copy: "Full-room tiling as part of a renovation or a targeted upgrade.",
  },
  {
    title: "Preparation & repairs",
    copy: "Substrate checks, patching and minor corrections before installation.",
  },
];

export default function TilingPage() {
  return (
    <>
      <PageHero
        eyebrow="Tiling services"
        title="Precision from layout to grout."
        lead="Wall and floor tiling for bathrooms, kitchens, living areas and renovation projects, with attention to alignment, cuts and finishing detail."
        image="/images/twinfinish/03_Services/bathroom-wall-tiling.webp"
        mobileImage="/images/twinfinish/03_Services/bathroom-wall-tiling-mobile.webp"
        alt="TwinFinish tiler setting large marble wall tiles in a bathroom"
        desktopWidth={1672}
        desktopHeight={941}
        mobileWidth={800}
        mobileHeight={1000}
        focal="center 42%"
        mobileFocal="center 30%"
      />

      <section className="section">
        <div className="container split split--reverse">
          <Reveal className="split-text">
            <span className="eyebrow">Measured, aligned, finished</span>
            <h2 className="section-title">
              Tiling should feel intentional, <em>not improvised.</em>
            </h2>
            <p className="section-copy">
              The layout, the starting point, joint consistency and edge cuts all decide how the
              finished surface reads. TwinFinish is positioned around careful setting out and a
              clean completed result.
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
                src="/images/twinfinish/03_Services/floor-tiling.webp"
                alt="Large floor tiles being set with levelling clips"
                width={1448}
                height={1086}
                sizes="(max-width: 900px) calc(100vw - 40px), 48vw"
                style={{ objectPosition: "center 56%" }}
                loading="lazy"
              />
              <div className="media-note">Bathrooms, kitchens, walls &amp; floors</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Tiling process</span>
            <h2 className="section-title">
              Plan the pattern before <em>the adhesive goes down.</em>
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
              Tiling scopes <em>we take on.</em>
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
              Get a tiling quotation
            </Link>
            <Link className="btn btn--outline" href="/services/painting">
              Looking for painting?
            </Link>
          </Reveal>
        </div>
      </section>

      <QuoteBand
        title="A bathroom, kitchen or floor to retile?"
        copy="Send the suburb, the tiled area and a few photos over WhatsApp so the scope can be assessed properly."
      />
    </>
  );
}
