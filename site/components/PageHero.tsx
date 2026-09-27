import ArtImage from "@/components/ArtImage";
import Reveal from "@/components/Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  mobileImage: string;
  alt: string;
  desktopWidth?: number;
  desktopHeight?: number;
  mobileWidth?: number;
  mobileHeight?: number;
  focal?: string;
  mobileFocal?: string;
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  image,
  mobileImage,
  alt,
  desktopWidth = 1600,
  desktopHeight = 1000,
  mobileWidth = 1080,
  mobileHeight = 1440,
  focal = "center 42%",
  mobileFocal = "center 35%",
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-media">
        <ArtImage
          src={image}
          mobileSrc={mobileImage}
          alt={alt}
          width={desktopWidth}
          height={desktopHeight}
          mobileWidth={mobileWidth}
          mobileHeight={mobileHeight}
          focal={focal}
          mobileFocal={mobileFocal}
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="container page-hero-content">
        <Reveal as="div" className="eyebrow">
          {eyebrow}
        </Reveal>
        <h1 className="page-hero-title">
          <span className="mask-line">
            <span>{title}</span>
          </span>
        </h1>
        <Reveal as="p" className="page-hero-lead" delay={140}>
          {lead}
        </Reveal>
      </div>
    </section>
  );
}
