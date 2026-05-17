# SharingPlate — AI-Powered Food Surplus Donation Platform

> Connecting food donors (restaurants, marriage halls, caterers) with verified NGOs to **reduce food waste** and **fight hunger** — powered by geo-spatial intelligence and AI heatmaps.

**Live Preview:** https://plate-share-ai.lovable.app
---

## Overview

**SharingPlate** is a full-stack web platform designed to bridge the gap between **food surplus** and **food scarcity**. Restaurants, wedding halls, and event organizers often discard large amounts of edible food, while NGOs and shelters struggle to find consistent supply for the people they serve.

SharingPlate solves this by providing:
- A **public-facing homepage** showcasing impact, leaderboards, and a call-to-action.
- A **secure Donor Portal** for restaurants & event hosts to list surplus food.
- A **secure NGO Portal** for verified organizations to discover and claim donations.
- An **AI-powered heatmap** that visualizes hunger and donation hotspots geographically.

---

## Key Features

### Public Homepage
- **Hero section** with a striking visual and clear mission statement.
- **Animated meal counter** showing real-time impact (meals donated, NGOs served, cities covered).
- **Leaderboard** of top donors and most active NGOs.
- **Donation CTA** encouraging visitors to join as donor or NGO.
- Fully **responsive** navigation with sticky header and mobile menu.

### Donor Portal (`/donor`)
- Sign in / Register flow for restaurants and event organizers.
- **Dashboard** with key stats: total meals donated, events created, active listings, NGOs helped.
- **Create Donation Event** form: food description, quantity, date/time, location, contact info.
- **Recent Listings** view with status badges (available, claimed, completed).

### NGO Portal (`/ngo`)
- Sign in / Register flow for verified NGOs.
- Browse and **claim available food donations** in their area.
- Track claimed donations and impact over time.

### AI Heatmap (planned)
- Geo-spatial visualization powered by an external **AI/ML API**.
- Shows donation density, hunger hotspots, and optimal routing zones.
- Backend sends location + quantity data; AI returns heatmap intensities rendered on a map.

### Design System
- Warm, charitable color palette: **orange** (food/warmth), **green** (sustainability), **gold** (highlights).
- Custom gradients, elegant shadows, and smooth transitions defined in `index.css` & `tailwind.config.ts`.
- Fully **semantic tokens** — light/dark mode ready.

---

## Tech Stack

### Frontend (this repo)
| Layer | Technology |
|---|---|
| Framework | **React 18** + **Vite 5** |
| Language | **TypeScript 5** |
| Styling | **Tailwind CSS v3** + custom design tokens |
| UI Library | **shadcn/ui** (Radix primitives) |
| Routing | **React Router v6** |
| State / Data | **TanStack Query** |
| Icons | **lucide-react** |
| Notifications | **sonner** + shadcn toaster |

### Backend (target spec)
| Layer | Technology |
|---|---|
| API | **Spring Boot** (Java) — REST endpoints |
| Auth | **JWT** (JSON Web Tokens) with role-based access (DONOR / NGO / ADMIN) |
| Database | **PostgreSQL** + **PostGIS** extension (geo-spatial queries) |
| AI Service | External **Python/FastAPI** microservice for heatmap generation |
| Deployment | Containerized (Docker) — frontend on Lovable, backend on cloud VM |

---

## Project Structure

```
sharingplate/
├── public/                    # Static assets
├── src/
│   ├── assets/                # Images (hero, etc.)
│   ├── components/
│   │   ├── ui/                # shadcn/ui primitives
│   │   ├── Header.tsx         # Sticky responsive nav
│   │   ├── HeroSection.tsx    # Landing hero
│   │   ├── Leaderboard.tsx    # Top donors / NGOs
│   │   └── DonationCTA.tsx    # Call-to-action band
│   ├── pages/
│   │   ├── Index.tsx          # Public homepage
│   │   ├── DonorPortal.tsx    # Donor dashboard + auth
│   │   ├── NGOPortal.tsx      # NGO dashboard + auth
│   │   └── NotFound.tsx       # 404 page
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities (cn, etc.)
│   ├── index.css              # Design tokens & global styles
│   ├── App.tsx                # Routes
│   └── main.tsx               # Entry point
├── tailwind.config.ts         # Tailwind + design system extension
├── vite.config.ts             # Vite config
└── package.json
```

---

## Routes

| Route | Description | Access |
|---|---|---|
| `/` | Public homepage | Public |
| `/donor` | Donor portal (login → dashboard) | Donor (JWT) |
| `/ngo` | NGO portal (login → dashboard) | NGO (JWT) |
| `/heatmap` | AI-powered hunger/donation heatmap | Public *(planned)* |
| `/about` | About the project *(planned)* | Public |

---

## Getting Started

### Prerequisites
- **Node.js** ≥ 18 ([install via nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **npm** or **bun**

### Local development

```sh
# 1. Clone the repo
git clone <YOUR_GIT_URL>
cd sharingplate

# 2. Install dependencies
npm install

# 3. Run the dev server (with hot reload)
npm run dev
```

## AI Heatmap Architecture (planned)

```
   ┌──────────────┐    ┌──────────────┐    ┌─────────────────┐
   │   Frontend   │───▶│  Spring API  │───▶│  AI Heatmap     │
   │ (React/Vite) │    │ (Java + JWT) │    │  Service (FastAPI)│
   └──────────────┘    └──────┬───────┘    └────────┬────────┘
                              │                     │
                              ▼                     │
                       ┌──────────────┐             │
                       │ PostgreSQL   │◀────────────┘
                       │  + PostGIS   │
                       └──────────────┘
```

1. User opens `/heatmap`.
2. Frontend requests heatmap data from Spring backend.
3. Backend pulls listings + transactions (lat/lng, quantity) from PostGIS.
4. Backend forwards data to the AI microservice.
5. AI returns weighted heatmap points → frontend renders on Leaflet/Mapbox.

---

## Security

- **JWT-based auth** with role separation (DONOR / NGO / ADMIN).
- Roles stored in a **dedicated `user_roles` table** (never on the user/profile row) to prevent privilege escalation.
- All sensitive endpoints protected by Spring Security filters.
- HTTPS enforced in production.

---


- **shadcn/ui** for the beautiful component primitives
Acknowledgements- **Radix UI** for accessible headless components
- **Lucide** for the icon set
- **PostGIS** community for geo-spatial superpowers
- Every **donor** and **NGO** working to make hunger history 💚
