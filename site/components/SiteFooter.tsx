import Link from "next/link";
import Image from "next/image";
import { PHONE_HREF, SITE } from "@/lib/site";

const pages = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const services = [
  { href: "/services/painting", label: "Painting" },
  { href: "/services/tiling", label: "Tiling" },
  { href: "/services", label: "Repairs & preparation" },
  { href: "/services", label: "Commercial work" },
];

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link className="brand" href="/">
              <Image src="/assets/logo.png" alt="" width={58} height={52} />
              <span>
                {SITE.short}
                <small>Painting &amp; Tiling</small>
              </span>
            </Link>
            <p>{SITE.description}</p>
            <p className="footer-founder">Led by {SITE.founder}</p>
          </div>

          <div>
            <h4>Pages</h4>
            {pages.map((page) => (
              <Link key={page.href + page.label} href={page.href}>
                {page.label}
              </Link>
            ))}
          </div>

          <div>
            <h4>Services</h4>
            {services.map((service) => (
              <Link key={service.href + service.label} href={service.href}>
                {service.label}
              </Link>
            ))}
          </div>

          <div>
            <h4>Contact</h4>
            <a href={PHONE_HREF}>{SITE.phoneDisplay}</a>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <p>{SITE.area}</p>
          </div>
        </div>

        <div className="copyright">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span>
            Project images are visual concepts — replace with verified completed-work photography
            before public launch.
          </span>
        </div>
      </div>
    </footer>
  );
}
