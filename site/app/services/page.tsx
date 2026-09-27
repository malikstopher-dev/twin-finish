import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import QuoteBand from "@/components/QuoteBand";
import Reveal from "@/components/Reveal";
import { SERVICE_OVERVIEW } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior and exterior painting, wall and floor tiling, surface preparation and commercial refreshes for homes, rentals and offices in Cape Town.",
  alternates: { canonical: "/services" },
};

const deepDives = [
  {
    title: "Painting",
    copy: "Preparation, interior, exterior and detailed finishing.",
    href: "/services/painting",
    image: "/images/twinfinish/03_Services/exterior-painting.webp",
    width: 1448,
    height: 1086,
    focal: "64% 48%",
    alt: "Painter rolling an exterior wall beside a ladder",
  },
  {
    title: "Tiling",
    copy: "Walls, floors, bathrooms, kitchens and renovation finishes.",
    href: "/services/tiling",
    image: "/images/twinfinish/03_Services/floor-tiling.webp",
    width: 1448,
    height: 1086,
    focal: "center 58%",
    alt: "Floor tiles being set with levelling clips for an even surface",
  },
  {
    title: "Request a quote",
    copy: "Tell us about the space, location and work required.",
    href: "/contact",
    image: "/images/twinfinish/05_Contact/contact-hero-desktop.webp",
    width: 1672,
    height: 941,
    focal: "72% 45%",
    alt: "TwinFinish enquiry desk ready to take your call",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Painting and tiling, handled with care."
        lead="Focused services for residential, rental, office and commercial spaces, from surface preparation through to the final finish."
        image="/images/twinfinish/03_Services/renovation-exterior.webp"
        mobileImage="/images/twinfinish/03_Services/renovation-exterior-mobile.webp"
        alt="TwinFinish painters finishing the exterior of a Cape Town villa"
        desktopWidth={1448}
        desktopHeight={1086}
        mobileWidth={800}
        mobileHeight={1000}
        focal="center 52%"
        mobileFocal="center 45%"
      />

      <section className="section section--white">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we do</span>
            <h2 className="section-title">
              The services clients <em>ask for most.</em>
            </h2>
            <p className="section-copy">
              Each service can be booked on its own or combined into a single refresh of a room,
              rental unit, office or commercial space.
            </p>
          </Reveal>

          <div className="service-list">
            {SERVICE_OVERVIEW.map((service, index) => (
              <Reveal className="service-item" key={service.title} delay={index * 60}>
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Choose a service</span>
            <h2 className="section-title">
              Go deeper <em>into the work.</em>
            </h2>
          </Reveal>

          <div className="cards">
            {deepDives.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <Link className="card" href={item.href}>
                  <div className="card-media">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={item.width}
                      height={item.height}
                      sizes="(max-width: 900px) calc(100vw - 40px), 30vw"
                      style={{ objectPosition: item.focal }}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <span className="card-link">
                      Open <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <QuoteBand
        title="Not sure which service you need?"
        copy="Describe the space and what is bothering you about it — TwinFinish will tell you what the job actually requires."
      />
    </>
  );
}
