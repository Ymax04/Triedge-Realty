# Triedge Realty

Professional real estate website for **Triedge Realty**, Lucknow — built for WhatsApp-led lead generation.

## Stack

- React + Vite
- Tailwind CSS v4
- React Router
- Lucide React icons

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Adding / replacing photos and text

Full guide: [`docs/REPLACING-CONTENT.md`](docs/REPLACING-CONTENT.md)

Quick version:

1. Put compressed JPG/WebP files in `public/uploads/site/` (hero/about) or `public/uploads/properties/`.
2. Overwrite existing filenames **or** update paths in `src/data/properties.js`.
3. Edit listing/category copy in the same data file.
4. Keep hero ≈ under 300KB and listing images ≈ under 200KB for free hosting.

## WhatsApp

Number used: `919794503222`  
Click-to-chat helpers: `src/utils/whatsapp.js`

## Placeholder data needing client confirmation

- Demo listings in Gomti Nagar, Raebareli Road corridor, and Aliganj (`isDemo: true`)
- Illustrative stock photographs (not actual property photos)
- Category cards use illustrative imagery until real inventory photos arrive
- Short business copy in About / Footer (no years, awards, or transaction counts claimed)
- “On Request” / “Contact for Availability” wording
- Exact map pin / coordinates for Omaxe Metro City
- Favicon / logo refinements if a brand mark is provided
- Open Graph share image (optional)

## Confirmed contact channels

- Phone / WhatsApp: +91 97945 03222 (`https://wa.me/919794503222`)
- Email: sharmaankit2502@gmail.com
- YouTube: https://www.youtube.com/@PropertyConsultant30

## Project structure

```
src/
  components/   UI sections and shared pieces
  data/         Property + business data
  pages/        Home and property detail routes
  utils/        WhatsApp helpers
public/
  uploads/properties/   Local property images
```
