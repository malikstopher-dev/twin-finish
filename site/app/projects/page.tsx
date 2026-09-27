import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import QuoteBand from "@/components/QuoteBand";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A visual gallery of painting and tiling concepts for TwinFinish Painting & Tiling, showing the presentation standard for completed project photography.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project gallery"
        title="A visual standard for the work."
        lead="This concept gallery establishes the photography and presentation direction for TwinFinish. Real completed-project photographs replace these concept visuals before launch."
        image="/images/twinfinish/04_Projects/hero-projects-desktop.webp"
        mobileImage="/images/twinfinish/04_Projects/hero-projects-mobile.webp"
        alt="TwinFinish crew painting and tiling a Cape Town property above the bay, concept visual"
        desktopWidth={1672}
        desktopHeight={941}
        mobileWidth={941}
        mobileHeight={1672}
        focal="center 46%"
        mobileFocal="center 18%"
      />

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Gallery</span>
            <h2 className="section-title">
              Painting, tiling and <em>finish details.</em>
            </h2>
            <p className="section-copy">
              Filter by category to see how each discipline is presented. Every image below is a
              visual concept, not a verified completed TwinFinish job.
            </p>
          </Reveal>

          <ProjectGallery />
        </div>
      </section>

      <QuoteBand
        title="Want work like this on your property?"
        copy="Describe the space, the surfaces and the timing — TwinFinish will come back with a free quotation."
      />
    </>
  );
}
