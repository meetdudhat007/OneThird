@AGENTS.md

## WHAT WE'RE BUILDING
A marketing/portfolio website for OneThird, a small custom software development team
based in India. This is a client-acquisition tool: its job is to convince overseas B2B
businesses (primarily US, Australia, Canada first; UK/Europe/Middle East later) that
OneThird is a credible custom software partner — not a template SaaS product, not a
personal portfolio. Positioning: "Custom Software & Digital Solutions Partner." Service
areas: Business Software (ERP/CRM/workflow/ops/procurement), Web & SaaS, AI/ML, and
Automation.

Honest context (don't let this leak into copy as false modesty or overclaiming): OneThird
is a student team of 4-5 people, working together about 6 months, going semi-professional.
The site should read as credible and competent — not a 20-person agency, not a hobby
project either.

## TECH STACK
Next.js (App Router) — required for SEO/SSR, not a client-only SPA. Tailwind CSS. GSAP
for animation. No backend — static/frontend marketing site only.

## STRUCTURAL DIRECTION (reference only — do not copy)
For general section rhythm, use a typical modern agency/software-studio site as a loose
category reference: hero, services/capabilities, project/case-study showcase, about/
process, team, contact — roughly the shape of sites like tailgrids.com/templates/
nexstudio (a commercial template we don't own a license to and are not copying). Use
that only as a reference for "what sections this kind of site usually has and in what
order" — never its actual layout code, copy, images, or specific visual treatment. Every
section's real design, copy, and visual execution must be original and built around
OneThird's own brand system below.

## BRAND SYSTEM
Company name: OneThird (one word, capital T). Renamed from ZapStack in November 2026.

Logo: the Devanagari वन/थर्ड mark, a deliberate team decision that may move to an English
version later. Files are in public/images/brand/ (blue and white versions, rendered by
src/components/Logo.tsx). Always give the name in English in the surrounding text: alt
text, page titles, footer.

Palette, confirmed as exact matches to the logo:
- Main: #1e3bff (primary buttons, blue sections)
- Highlight: #ff3131 (accents only; large text and small marks on white)
- Base: #ffffff (page background)
- Supporting neutrals: near-black text, greys for secondary text, lines and soft backgrounds

Contrast limits: red is 3.66:1 on white, so never use it for small text. Red is 1.84:1
on blue, so never put red on blue outside the logo and the matching footer wordmark.

All colours are semantic tokens in src/app/globals.css (brand, accent, canvas, surface,
ink, ink-soft, muted, line, inverse, on-inverse, on-inverse-soft). Components must use
those tokens, never raw hex values.

## RULES TO AVOID LOOKING "AI-GENERATED"
- No bracket/terminal-style labels like "[ 01 // SECTION NAME ]"
- No decorative colored status dots used purely as visual filler
- No numbered "01/02/03/04 metadata grid" blocks used just to manufacture technical
  credibility
- No placeholder-sounding generic copy (e.g. "Enterprise Business Platform", "Team
  Member 01") — use [NEEDS INPUT] instead of inventing filler
- Don't default to a monospace/uppercase "technical HUD" look on every element

## CONTENT INTEGRITY — HARD RULE
Never invent clients, revenue, employee counts, years of experience, certifications,
awards, testimonials, or metrics. Use [NEEDS INPUT] as a visible placeholder instead.

Real case studies you may reference (nothing beyond what I confirm per project):
- Madhav Pharma Industries — confirmed flagship case study, live and public
- DeepShield (AI deepfake detection) — confirmed secondary/minor showcase item
- Do NOT reference any ERP/CRM client engagement anywhere — publication permission has
  not been confirmed. Skip it entirely for now.

## SITE STRUCTURE DECISIONS
- Pages: Home, Work (list + case study detail), Services, About, Blog (list + post),
  Contact.
- Blog: keep the page and home-page section; posts are [NEEDS INPUT] placeholders until
  the team writes real ones.
- Contact form: front-end only, no backend yet. How submissions are delivered will be
  decided later — don't wire it to any service without asking.
- Images: every image used on the site lives under public/images/, in a subfolder by
  type (brand/ for logos, blog/, team/, and so on). Move any photo or logo the team
  provides there, with a clear file name, and don't leave images in the project root.

## PROCESS RULES
- Build one section/component at a time. After each one works and I've reviewed it,
  commit it to git before starting the next.
- Don't introduce exotic or unproven techniques (custom WebGL/GLSL shaders, experimental
  libraries) without asking me first and explaining the tradeoff.
- If something doesn't render or a build fails, show me the actual terminal/console
  error rather than describing what you think you fixed.
