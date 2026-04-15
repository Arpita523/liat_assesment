# Design Rationale & Technical Write-Up

**Project:** Mall of America — Interactive Sales Deck  
**Candidate:** Arpita Pandey  
**Date:** April 2026

---

## 1. Design Rationale

### Why Mall of America?
I chose Mall of America for two reasons: it is the largest mall in the United States with rich publicly available media assets, and its commercial profile (40M+ annual visitors, 520+ stores, Nickelodeon Universe, SEA LIFE Aquarium) provides a compelling narrative for a sales deck aimed at prospective tenants, sponsors, and event partners.

### Visual & UX Philosophy
The design draws from three reference categories outlined in the brief:

- **Luxury Brand UI** (Apple, Hermès): Dark theme with gold (#D4AF37) accent, generous whitespace, Playfair Display serif for headlines, Outfit sans-serif for body text. Minimal chrome — the content is the interface.
- **Interactive Deck / DigiDeck**: Non-linear navigation via React Router. The viewer controls their journey between the main overview and deep-dive sub-modules. No forced linear slide progression.
- **Experiential / Destination Storytelling** (Disney, Universal): Full-bleed imagery, cinematic video backgrounds, scroll-triggered animations via Framer Motion that create a sense of discovery as the user explores.

### Information Architecture
The deck is structured in two phases:

**Phase 1 (Core Overview — Single Page Scroll):**
Opening → Why This Property → Retail & Luxury → Dining & Attractions → Events & Contact

**Phase 2 (Expandable Sub-Modules — Routed Pages):**
`/events` → Venue specs, video highlights, booking CTAs  
`/sponsorship` → Three partnership tiers with activation details  
`/leasing` → Segmented paths for luxury, mass-market, and pop-up tenants

Each CTA on the main overview routes into the relevant deep-dive module, creating a seamless transition from storytelling to business action.

### Key Design Decisions
- **Video as poster fallback**: The hero uses `<video>` with a `poster` attribute so the cinematic image renders instantly while the video streams in the background — no black flash.
- **Glassmorphism panels**: Used sparingly for stat cards and forms to create depth without visual heaviness.
- **Gold accent system**: A single accent color (#D4AF37) creates consistency across CTAs, labels, and tier highlights without competing with the imagery.

---

## 2. How I Used AI

### Code Development
I used **AI-assisted coding (Gemini)** throughout the development process for:
- Scaffolding the initial React component architecture
- Generating responsive CSS media queries and design token systems
- Debugging Netlify deployment configuration (SPA redirect rules)
- Systematic code audits against the assessment rubric to identify gaps

### Visual Asset Generation
Three core images were generated using **AI image generation** to fill gaps where real Mall of America interior photography was not publicly available at sufficient resolution:
- `luxury_avenue.png` — A photorealistic luxury mall concourse with brand storefronts
- `indoor_theme_park.png` — A dynamic indoor amusement park with neon lighting and rollercoasters
- `concert_rotunda.png` — A four-story rotunda concert scene showing the scale of live events

These were specifically designed to match the "cinematic, confident" creative direction specified in the brief, and were integrated as local assets (not external URLs) for reliability.

### Content Strategy
AI assisted in crafting the sales-oriented copy throughout the deck — from stat card descriptions to sponsorship tier details — ensuring every piece of text serves one of the three business objectives: drive leasing, drive sponsorships, or drive event bookings.

---

## 3. What I Would Improve With More Time

### Immediate Improvements
- **Real Mall of America video assets**: Replace the stock video with official MOA promotional footage from their YouTube channel or press kit for authentic storytelling.
- **Scroll-triggered video sections**: Add parallax video panels between sections (e.g., a walkthrough of The Avenue between the Retail and Dining sections) for a more cinematic flow.
- **Animated counter stats**: The "40M+", "5.6M", "$2B+" numbers should animate/count up when they scroll into view for more visual impact.

### Architecture Enhancements
- **CMS integration**: Connect to a headless CMS (Contentful or Sanity) so the commercial team can update stats, images, and event highlights without developer involvement.
- **Analytics tracking**: Add event tracking on every CTA click to measure which sections and modules drive the most engagement — critical data for refining the sales process.
- **PDF export**: Allow the salesperson to generate a branded PDF snapshot of customized sections for follow-up emails after a live call.

### Performance & Polish
- **Image optimization pipeline**: Convert all PNGs to WebP/AVIF with responsive `srcset` for faster loading on mobile connections.
- **Lighthouse 95+**: Implement code splitting with `React.lazy()` for sub-module routes, add preload hints for critical fonts, and optimize the Largest Contentful Paint.
- **Dark/Light mode toggle**: While the dark luxury theme works for screen-share presentations, a light mode option would improve readability for prospects exploring on their own in bright environments.

### Advanced Features
- **Interactive floor map**: A clickable SVG map of Mall of America's four floors showing available leasing spaces, key attractions, and venue locations.
- **Live availability calendar**: For the Events Module — show real-time venue booking availability connected to a property management system.
- **Personalized deck builder**: Allow the sales rep to select which modules to include and auto-generate a custom link tailored to each prospect's interests (e.g., a luxury brand sees only The Avenue + Sponsorship modules).

---

*This project was built with React 19, Vite, Framer Motion, React Router, and a Node.js/Express backend. The full source code is available in the GitHub repository with setup instructions in the README.*
