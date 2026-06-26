# OCTOPayGate

A modern payment gateway dashboard prototype built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Pages

| Route | Page |
|---|---|
| `/` | Landing page (Hero, Features, How It Works, Benefits, CTA) |
| `/login` | Sign-in page (any email/password works) |
| `/dashboard` | Dashboard overview with stat cards and transaction chart |
| `/dashboard/integrations` | List of created payment integrations |
| `/dashboard/integrations/new` | Multi-step wizard to create a new integration and get an API key |
| `/dashboard/integrations/[id]` | Integration detail (general info, features, API key, delete) |
| `/dashboard/settings` | Account settings |

## Key Features

- **Payment Gateway Flow** — 4-step wizard: App Info → Features → Review → API Key generation with copy and download
- **API Key Management** — Generate, mask/unmask, copy to clipboard, download as `.env` file
- **Transaction Chart** — Recharts bar chart showing mock daily transaction volume
- **Animations** — Page transitions, scroll-triggered fade-ins, staggered list entries, wizard step slides
- **Auth Simulation** — React Context + localStorage (no backend needed)
- **Data Persistence** — Integrations stored in `localStorage`, survive page refreshes
- **OCTO Brand Design** — Signature red (`#D52B1E`), SF Pro Display system font, professional banking aesthetic

## Stack

- **Framework**: Next.js 16.2.9 (App Router, Turbopack)
- **UI**: React 19 + Tailwind CSS v4
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Language**: TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```
