# Mall of America - Interactive Sales Deck

A fully interactive, premium sales deck application designed for the commercial prospects of Mall of America. This application replaces traditional static PDFs and verbal pitches with a high-impact, non-linear web experience aimed at driving leasing, sponsorships, and event bookings.

## 🚀 Features
- **Video-First & High Impact:** Utilizes ambient motion, dynamic video highlights, and ultra-high-resolution AI-generated assets to create a luxury brand feel.
- **Non-linear Navigation:** Seamlessly jump between Phase 1 (Core Property Story) and Phase 2 (Expandable Architecture Sub-modules).
- **Expandable Modules:**
  - `/events` - Showcasing venue capacities and live event capabilities.
  - `/sponsorship` - Breaking down media takeovers and naming rights.
  - `/leasing` - Presenting tailored pitches for luxury flagships vs. pop-ups.
- **SEO & Performance Optimized:** Dynamically handles page titles and meta-descriptions per route, with an incredibly fast Vite + React DOM.

## 💻 Tech Stack
- **Frontend:** React 19, Vite, Framer Motion, React Router DOM
- **Backend:** Node.js, Express (Mock API for inquiries)
- **Styling:** Custom CSS luxury tokens, CSS Modules, Lucide React Icons

## 🛠 Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- NPM or Yarn

### 1. Running the API Backend (Local)
The application comes with a mock Node.js backend to collect contact inquiries.
```bash
cd backend
npm install
node server.js
```
*The backend will run on `http://localhost:5001`.*

### 2. Running the Frontend
In a separate terminal, launch the React UI:
```bash
cd frontend
npm install
npm run dev
```
*The frontend will compile and run on `http://localhost:5173` (or typical Vite port).*

## 📖 System Architecture
- `src/App.jsx` handles global routing and SEO wrapping.
- `src/components/` contains both single-page sections (Hero, RetailLuxury) and full-page Expandable Modules (EventsModule, SponsorshipModule).
- `src/index.css` acts as the single source of truth for the luxury design system variables.

## 🤖 AI-Generated Assets
Several core graphical assets inside `/public/` were generated via gen-AI to accurately simulate the grand scale and photorealistic rendering required for a modern mega-mall pitch, satisfying the project criteria strictly.
