"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PHONE_HREF, SITE } from "@/lib/site";

export default function MobileCtaBar() {
  const pathname = usePathname();
  const [avoidingHero, setAvoidingHero] = useState(false);

  useEffect(() => {
    const update = () => {
      const bar = document.querySelector<HTMLElement>(".mobile-cta");
      if (!bar || window.innerWidth > 900) return;
      const barRect = bar.getBoundingClientRect();
      const important = document.querySelectorAll<HTMLElement>(
        ".hero .btn-row, .hero .hero-facts, .contact-hero .btn-row, .contact-hero .notice",
      );
      setAvoidingHero(
        Array.from(important).some((element) => {
          const rect = element.getBoundingClientRect();
          return rect.top < barRect.bottom && rect.bottom > barRect.top;
        }),
      );
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <div className="mobile-cta" aria-label="Quick contact" data-avoiding-hero={avoidingHero}>
      <a className="mobile-cta-call" href={PHONE_HREF}>
        Call {SITE.phoneDisplay}
      </a>
      <a
        className="mobile-cta-whatsapp"
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </div>
  );
}
