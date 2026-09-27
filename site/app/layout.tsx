import type { Metadata } from "next";
import { Archivo, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import MobileCtaBar from "@/components/MobileCtaBar";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import { SITE } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Painting & tiling in Cape Town`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.short,
  keywords: [
    "painting contractor Cape Town",
    "tiling contractor Cape Town",
    "interior painting Cape Town",
    "exterior painting Cape Town",
    "bathroom tiling Cape Town",
    "floor tiling Cape Town",
    "TwinFinish Painting & Tiling",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: SITE.name,
    title: `${SITE.name} | Painting & tiling in Cape Town`,
    description: SITE.description,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Painting & tiling in Cape Town`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/assets/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  telephone: SITE.phoneIntl,
  founder: {
    "@type": "Person",
    name: SITE.founder,
  },
  areaServed: {
    "@type": "City",
    name: "Cape Town",
  },
  serviceType: ["Painting services", "Tiling services", "Surface preparation and repairs"],
  knowsAbout: [
    "Interior painting",
    "Exterior painting",
    "Wall tiling",
    "Floor tiling",
    "Bathroom and kitchen tiling",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-ZA"
      className={`${inter.variable} ${archivo.variable} ${instrument.variable} js`}
    >
      <head>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteNav />
        <main id="main">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
