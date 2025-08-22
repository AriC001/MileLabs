# Lamps Product Catalog

This project is a simple product display website for our collection of lamps, built with [Astro](https://astro.build/) and styled using [Tailwind CSS](https://tailwindcss.com/).

## ✨ Features

- **Product Catalog:** Browse a curated selection of lamps, each with a name, description, price, and image.
- **Filtering & Sorting:** Filter products by price range and sort by price (low to high, high to low).
- **Responsive Design:** Looks great on desktop and mobile devices.
- **Contact Button:** Each product features a WhatsApp button for quick inquiries.
- **SEO Ready:** Includes meta tags, OpenGraph, and Twitter card support.
- **Blog Section:** Markdown/MDX-powered blog for news, guides, or announcements.

## 🛒 How It Works

- Products are defined in [`src/components/products.json`](src/components/products.json).
- The main page ([`src/pages/index.astro`](src/pages/index.astro)) displays all products in a grid.
- Users can filter products by price and sort them using the dropdown menus.
- Each product is rendered using the [`ProductCart`](src/components/ProductCart.astro) component.

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Start the development server:**
   ```sh
   npm run dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:4321](http://localhost:4321) to view the catalog.

## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/           # Product images
│   ├── components/       # UI components (ProductCart, Button, etc.)
│   ├── content/          # Blog content (Markdown/MDX)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Site pages (index.astro, etc.)
│   └── styles/           # Global styles
├── package.json
├── astro.config.mjs
└── tsconfig.json
```

## 🖼️ Adding/Editing Products

Edit [`src/components/products.json`](src/components/products.json) to add, remove, or update products. Each product should have:

- `name`: Product name
- `description`: Short description
- `price`: Price (number)
- `img`: Path to image (relative to the project root or `/src/assets/`)

## 📚 Blog

You can add blog posts in Markdown or MDX format under `src/content/blog/`. Posts are automatically type-checked and displayed in the blog section.

## 📝 License

This project is for demonstration purposes.  
Feel free to adapt and use it for your own lamp catalog or similar

---

## Deploying to GitHub Pages

This project is configured to publish as a GitHub Pages project site under:

https://AriC001.github.io/MileLabs/

Steps to enable automatic deploy on push to `master`:

1. Commit and push your changes to the `master` branch.
2. The included GitHub Actions workflow (`.github/workflows/deploy.yml`) will build the site and publish the `dist/` folder to the `gh-pages` branch.
3. In your repository Settings → Pages, set the source to the `gh-pages` branch (folder: /) and save.

Local test and build commands:

```powershell
npm install
npm run dev
# Build for production
npm run build
# Preview production build
npm run preview
```

Notes:
- If you want a user site (https://AriC001.github.io) instead of a project site under a subpath, change `base` to `'/'` and `site` to `'https://AriC001.github.io'` in `astro.config.mjs`.
- If you use a custom domain, add a `CNAME` file into the `public/` directory with your domain name.