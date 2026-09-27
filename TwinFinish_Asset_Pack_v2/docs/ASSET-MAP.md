# TwinFinish Asset Placement Map v2

This pack fixes the repetition and cropping problems visible in the current localhost build.

## Non-negotiable rule
Do not use one image for multiple cards in the same section. In particular, **Floor Tiling** and **Bathroom / Toilet Tiling** must NEVER use the same source image.

## Home
- Desktop hero: `01_Home/home-hero-desktop.webp`
- Mobile hero: `01_Home/home-hero-mobile.webp`
- Do not reuse either hero image as a service card on Home.

## About
- Founder portrait: `02_About/about-founder-portrait.webp`
- Team section: `02_About/about-team.webp`
- Where we work / Cape Town section: `02_About/about-service-area.webp`

## Services
- Exterior Painting: `03_Services/exterior-painting.webp`
- Floor Tiling: `03_Services/floor-tiling.webp`
- Bathroom / Toilet Wall Tiling: `03_Services/bathroom-wall-tiling.webp`
- Renovation / Exterior Finish: `03_Services/renovation-exterior.webp`
- Mobile card variants are included with `-mobile` filenames.

IMPORTANT: Floor Tiling and Bathroom / Toilet Wall Tiling are two different photos. Do not point both cards to the same import.

## Projects
- Team workmanship / people-at-work card: `04_Projects/project-team-workmanship.webp`
- Reuse a Services image on Projects only if there is no alternative, and never show two copies of the same source in the same viewport.

## Contact
- Desktop: `05_Contact/contact-hero-desktop.webp`
- Mobile: `05_Contact/contact-hero-mobile.webp`
- Use `<picture>` or separate Next/Image sources. Do not crop the desktop image into the mobile hero.

## Brand
- Logo: `06_Brand/twinfinish-logo.png`
- Facebook poster: `06_Brand/facebook-poster.png`

## Crop rules
1. No face may be cropped at the forehead, chin or eyes.
2. Hero text may not cover Frank/Malik's face, hands, roller, trowel or primary work action.
3. Mobile heroes use their dedicated portrait assets.
4. Service cards may use the supplied `-mobile.webp` crop on narrow screens.
5. Do not globally set every image to `object-position:center`. Use per-image positions.
