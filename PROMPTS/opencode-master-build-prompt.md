# OPENCODE MASTER PROMPT — TwinFinish Painting & Tiling

## MODEL
Use the strongest coding/design-capable model available. The mission requires visual judgment, responsive implementation, animation restraint, SEO discipline and image handling.

## MISSION
Build a production-quality website for **TwinFinish Painting & Tiling**, led by **Frank Sbu Biyela**, serving **Cape Town and surrounding areas**. Use the supplied SOURCE mockup and assets as the approved visual direction, then upgrade it into a refined bespoke implementation without turning it into a generic trade template.

## NON-NEGOTIABLE BRAND
- Company name: TwinFinish Painting & Tiling
- Founder: Frank Sbu Biyela
- Phone / WhatsApp: 063 499 7520 / +27 63 499 7520
- Primary palette: deep navy + vivid orange + white / cool neutral
- Preserve the supplied TwinFinish logo and its navy/orange character.
- Brand personality: professional, warm, family-rooted, meticulous, modern Cape Town contractor.
- Do not invent business registration details, years of experience, awards, guarantees, client counts, reviews or street address.

## REQUIRED ROUTES
/
/about
/services
/services/painting
/services/tiling
/projects
/contact

## VISUAL DIRECTION
Aim for a premium bespoke agency build:
- bold editorial hero typography
- cinematic full-bleed work photography
- deep navy framing with orange accents
- generous whitespace
- premium rounded cards, but avoid SaaS-dashboard styling
- strong art direction on mobile, not simply stacked desktop sections
- subtle masking/reveal motion, parallax or image-scale interactions only where they improve the story
- polished nav transition and mobile menu
- large tactile CTA buttons
- project gallery with elegant filtering
- contact page with the supplied branded portrait of the website contact representative
- use motion sparingly; no gimmicky cursor trails, excessive 3D or constant floating elements

## HOMEPAGE STRUCTURE
1. Transparent/floating navigation over hero
2. Hero: “Beautiful spaces. Done properly.” + quote CTA + project CTA
3. Trust/quality strip
4. Three core service cards
5. Founder / why TwinFinish split feature
6. Four-step work process
7. Project/gallery feature
8. Strong orange quotation band
9. Footer

## ABOUT
- Frank-led business story
- Family-inspired TwinFinish name; keep wording cautious until Frank approves final public story
- Values: preparation, respect for property, dependable finishing, communication
- Residential + commercial positioning

## SERVICES
Primary services: interior painting, exterior painting, wall tiling, floor tiling, bathroom/kitchen tiling, surface preparation/minor repairs, rental/commercial refreshes.

## CONTACT
- Use the supplied contact hero showing the contact representative. Do not regenerate or alter his face.
- The branding on his shirt, cup and wall has already been replaced with TwinFinish branding in the supplied asset.
- Primary CTA: Call / WhatsApp 063 499 7520
- Contact form fields: name, phone, suburb/area, service, project details.
- Do not pretend the form is connected until a real destination is configured.

## PROJECT IMAGES
The current visuals are concept images. In development, keep them isolated in an easily replaceable data structure. Do not write copy that falsely claims the concept scenes are verified completed jobs. Use labels such as “Project gallery” or “visual concept” until real project photos are supplied.

## RESPONSIVE REQUIREMENTS
- Design mobile-first from 360px upward.
- Provide separate image art direction using the supplied mobile assets.
- Keep tap targets >=44px.
- Sticky mobile quote/WhatsApp CTA is allowed if tasteful.
- Prevent layout shift by setting image dimensions/aspect ratios.
- Test 360, 390, 430, 768, 1024, 1440 and 1920 widths.

## TECHNICAL / SEO
If using Next.js: App Router, TypeScript, semantic HTML, next/image, metadata API, sitemap, robots, canonical URLs, JSON-LD after business details are confirmed. Target Lighthouse mobile >=90 for performance/accessibility/SEO where practical. No console errors, broken routes or hydration warnings.

## ACCESSIBILITY
Keyboard navigation, visible focus states, correct labels, sufficient contrast, semantic headings, reduced-motion support, meaningful image alt text.

## CONTENT SAFETY / ACCURACY
Never fabricate testimonials, star ratings, certifications, registration numbers, guarantees, team sizes, client counts or “X years experience.” Keep all unverifiable claims out of production.

## ASSET MAP
- logo.png — approved logo
- home-hero.webp / mobile-home-hero.webp
- painting-hero.webp / mobile-painting-hero.webp
- tiling-hero.webp / mobile-tiling-hero.webp
- bathroom-project.webp / mobile-bathroom-project.webp
- about-founder.webp / mobile-about-founder.webp
- contact-hero.webp / mobile-contact-hero.webp
- project-01.webp … project-06.webp — concept gallery placeholders

## FINAL QA
Run lint, typecheck and production build. Inspect every route desktop and mobile. Fix image crops, overflow, text orphans, spacing collisions, focus states and mobile nav. Return a concise completion report listing routes, assets used, any placeholders that still require real business information, and commands used to validate the build.
