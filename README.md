# Relqyn.com static specimen shop

A polished, dependency-free static Relqyn storefront for USPTO use-in-commerce specimen screenshots. It is built with semantic HTML, one shared stylesheet, and a small vanilla JavaScript cart mock.

## Pages

- `index.html` — branded shop homepage with four products, prices, and add-to-cart UI.
- `products/dishwasher-tablets.html` — dedicated dishwasher tablets product page with quantity control, Add to cart, and Buy now UI.
- `about.html` — brief Relqyn story and brand values.

## Run locally

From this folder, serve the files over HTTP (recommended so browser local-storage and relative links behave like deployment):

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`. Opening `index.html` directly also works for the static layout.

## Deploy

### Vercel

Import this folder/repository in Vercel. No build command is required; set the output directory to `.` (or leave the framework preset as “Other”).

### GitHub Pages

Push the contents of this folder to a repository and enable Pages from the branch root (`/`). This site uses relative asset paths, so it works from a project subpath as well as a custom domain.

## Notes

- Cart behavior is intentionally client-side only and stored in `localStorage`; checkout displays a demo message. Connect a real payment/storefront provider before taking orders.
- Product artwork is lightweight local SVG illustration so the specimen remains self-contained and fast.
- Brand files copied into `assets/`: `relqyn-final-locked.png`, `relqyn-locked.png`, `relqyn-lockup-horizontal.svg`, `relqyn-wordmark-reversed.svg`, and `relqyn-leaf-seal.svg`.
