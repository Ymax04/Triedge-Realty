# How to replace photos and text (Triedge Realty)

All content is data-driven so you can update listings without touching React components.

## 1. Replace photographs

### Folders

| Purpose | Folder |
|---|---|
| Hero, About, CTA backgrounds | `public/uploads/site/` |
| Property / category photos | `public/uploads/properties/` |

### Easy method (keep filenames)

1. Compress the new photo (see tips below).
2. Overwrite the existing file, e.g. replace `public/uploads/site/hero.jpg`.
3. Refresh the site. No code change needed.

### Or rename / add new files

1. Put the file in the correct folder, e.g. `public/uploads/properties/omaxe-gate.jpg`.
2. Open `src/data/properties.js`.
3. Update the path in the `IMG` object or the listing’s `images` array:

```js
images: ['/uploads/properties/omaxe-gate.jpg', '/uploads/properties/omaxe-2.jpg']
```

Paths always start with `/uploads/...` (files live under `public/`).

## 2. Replace text / listings

Edit `src/data/properties.js`:

- Business phone, email, YouTube → `BUSINESS`
- Categories → `categories` array
- Listings → `properties` array
- Set `isDemo: false` when a listing is real inventory
- Update `name`, `location`, `description`, `price`, etc.

## 3. Keep the site light (free hosting)

Free hosts (Netlify, Vercel, GitHub Pages, shared hosting) work best with small assets:

- Hero image: aim **under 300 KB**, width about **1600px**
- Listing photos: aim **under 150–200 KB**, width about **900–1200px**
- Prefer **JPG** or **WebP** (avoid huge PNG / raw phone photos)
- Compress with [Squoosh](https://squoosh.app), TinyPNG, or your phone’s “resize before send”
- Do **not** hotlink Unsplash/Google Drive in production — local `/uploads` files are more reliable and faster
- Non-hero images already use `loading="lazy"`

## 4. After changes

```bash
npm run build
```

Deploy the `dist/` folder (or connect the repo to Netlify/Vercel for automatic builds).
