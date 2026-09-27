import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ArtImage from "@/components/ArtImage";
import QuoteBand from "@/components/QuoteBand";
import Reveal from "@/components/Reveal";
import { PROCESS, SITE } from "@/lib/site";
import { PROJECT_PREVIEW } from "@/lib/projects";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const heroFacts = [
  { label: "Painting", detail: "Interior & exterior" },
  { label: "Tiling", detail: "Walls & floors" },
  { label: "Professional finish", detail: "Clean, careful workmanship" },
  { label: "Cape Town", detail: "City & surrounding areas" },
];

const metrics = [
  {
    index: "01",
    title: "Prepared properly",
    detail: "Surface prep before the finish goes on.",
  },
  {
    index: "02",
    title: "Detail focused",
    detail: "Edges, lines, joints and final cleanup matter.",
  },
  {
    index: "03",
    title: "Clear communication",
    detail: "Know what is being done and what comes next.",
  },
  {
    index: "04",
    title: "Free quotation",
    detail: "Discuss your project before work begins.",
  },
];

const services = [
  {
    title: "Professional painting",
    copy: "Interior and exterior painting, preparation, patching and clean finishing.",
    href: "/services/painting",
    image: "/images/twinfinish/03_Services/exterior-painting.webp",
    width: 1448,
    height: 1086,
    focal: "64% 48%",
    alt: "Painter rolling an exterior wall beside a ladder on a Cape Town property",
  },
  {
    title: "Wall & floor tiling",
    copy: "Accurate layouts, clean cuts, consistent joints and detailed finishes.",
    href: "/services/tiling",
    image: "/images/twinfinish/03_Services/bathroom-wall-tiling.webp",
    width: 1672,
    height: 941,
    focal: "center 50%",
    alt: "TwinFinish crew tiling the walls and floor of a marble bathroom",
  },
  {
    title: "Renovation finishes",
    copy: "Painting and tiling for bathrooms, kitchens, rooms and refurbishment projects.",
    href: "/services",
    image: "/images/twinfinish/03_Services/renovation-exterior.webp",
    width: 1448,
    height: 1086,
    focal: "center 55%",
    alt: "Painters refreshing the exterior of a coastal villa with a pool",
  },
];

const values = [
  {
    title: "Careful preparation",
    copy: "Good finishing starts before the paint or tile is installed.",
  },
  {
    title: "Respect for the property",
    copy: "Work areas are protected, managed and cleaned as the project progresses.",
  },
  {
    title: "One finish standard",
    copy: "Whether residential or commercial, the detail level stays consistent.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-media">
          <ArtImage
            src="/images/twinfinish/01_Home/home-hero-desktop.webp"
            mobileSrc="/images/twinfinish/01_Home/home-hero-mobile.webp"
            alt="TwinFinish founder and crew working on a Cape Town property above the bay"
            width={1672}
            height={941}
            mobileWidth={941}
            mobileHeight={1672}
            loading="eager"
            fetchPriority="high"
        focal="0% 38%"
        mobileFocal="center 35%"
          />
        </div>

        <div className="container hero-content">
          <div className="eyebrow">Cape Town painting &amp; tiling</div>

          <h1 className="hero-title">
            <span className="mask-line">
              <span>Beautiful spaces.</span>
            </span>
            <span className="mask-line">
              <span style={{ animationDelay: "0.14s" }}>
                <em>Done properly.</em>
              </span>
            </span>
          </h1>

          <p className="hero-lead">
            TwinFinish delivers careful painting, precise tiling and clean workmanship for homes,
            apartments, offices and commercial spaces across Cape Town.
          </p>

          <div className="btn-row">
            <Link className="btn btn--primary" href="/contact">
              Get a free quotation
            </Link>
            <Link className="btn btn--ghost" href="/projects">
              See our work
            </Link>
          </div>

          <div className="hero-facts">
            {heroFacts.map((fact) => (
              <div key={fact.label}>
                <b>{fact.label}</b>
                <span>{fact.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="metrics" aria-label="How TwinFinish works">
        <div className="container metrics-grid">
          {metrics.map((metric) => (
            <div className="metric" key={metric.title}>
              <i>{metric.index}</i>
              <b>{metric.title}</b>
              <span>{metric.detail}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our core services</span>
            <h2 className="section-title">
              From first coat to <em>final grout line.</em>
            </h2>
            <p className="section-copy">
              One practical team for the surfaces that define a room: walls, ceilings, floors,
              bathrooms, kitchens and exterior finishes.
            </p>
          </Reveal>

          <div className="cards">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <Link className="card" href={service.href}>
                  <div className="card-media">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      width={service.width}
                      height={service.height}
                      sizes="(max-width: 900px) calc(100vw - 40px), 30vw"
                      style={{ objectPosition: service.focal }}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3>{service.title}</h3>
                    <p>{service.copy}</p>
                    <span className="card-link">
                      Explore <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container split">
          <Reveal className="split-text">
            <span className="eyebrow">Why TwinFinish</span>
            <h2 className="section-title">
              A personal business with <em>professional standards.</em>
            </h2>
            <p className="section-copy">
              TwinFinish is led by {SITE.founder} and built around the kind of reputation that
              depends on how every space is left when the job is finished.
            </p>
            <div className="checklist">
              {values.map((value) => (
                <div className="check" key={value.title}>
                  <i aria-hidden="true">✓</i>
                  <div>
                    <b>{value.title}</b>
                    <span>{value.copy}</span>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <Link className="btn btn--primary" href="/about">
                Meet the business
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="media-frame">
              <Image
                src="/images/twinfinish/02_About/about-team.webp"
                alt="The TwinFinish crew on site with brushes and rollers"
                width={1448}
                height={1086}
                sizes="(max-width: 900px) calc(100vw - 40px), 48vw"
                style={{ objectPosition: "center 42%" }}
                loading="lazy"
              />
              <div className="media-note">
                TwinFinish is a family-inspired brand built to grow on trust.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">How we work</span>
            <h2 className="section-title">
              Simple process. <em>Clean execution.</em>
            </h2>
          </Reveal>

          <div className="process">
            {PROCESS.map((step, index) => (
              <Reveal className="step" key={step.step} delay={index * 90}>
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Project gallery</span>
            <h2 className="section-title">
              Work that looks good <em>up close.</em>
            </h2>
            <p className="section-copy">
              These concept images establish the photography and presentation direction for
              TwinFinish. Verified project photographs replace them as the portfolio grows.
            </p>
          </Reveal>

          <Reveal className="gallery">
            {PROJECT_PREVIEW.map((project) => (
              <figure key={project.id}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 900px) 46vw, 33vw"
                  style={{ objectPosition: project.focal ?? "center" }}
                  loading="lazy"
                />
                <figcaption>{project.caption}</figcaption>
              </figure>
            ))}
          </Reveal>

          <Reveal className="btn-row" delay={120}>
            <Link className="btn btn--primary" href="/projects">
              View the full gallery
            </Link>
          </Reveal>
        </div>
      </section>

      <QuoteBand />
    </>
  );
}
