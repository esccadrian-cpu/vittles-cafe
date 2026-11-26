# Vittles Cafe — Website

Official website for Vittles Cafe, 4074 US-231 Ste A, Ozark, AL 36360.
Phone: (334) 443-1019. Live at https://vittles.cafe

## Files

- `index.html` — the whole site in one file (menu, hours, contact info, logo embedded). Edit this to change anything visitors see.
- `menu.json` — the menu as structured data: 22 categories, 163 items, with prices. This is the source of truth for the menu; `index.html` is built from it.
- `vercel.json` — routing config for hosting on Vercel (single-page rewrite).
- `img-4ce23972.jpg` — **not in this repo yet.** The logo is an image file and has to be uploaded separately: on GitHub, Add file → Upload files, drop in `img-4ce23972.jpg` at the repo root, exact filename. (Only needed if you switch `index.html` to the split version; the single-file `index.html` here already has the logo embedded.)

## How to deploy

Import this repo into Vercel (vercel.com → Add New → Project → Import Git Repository). It deploys as a static site; no build step, no environment variables. Add the custom domain `vittles.cafe` in the project settings (DNS: A @ → 76.76.21.21, CNAME www → cname.vercel-dns.com).

## How to update the menu

1. Edit the item in `menu.json` (and the same text in `index.html` — keep them in sync).
2. Commit, then redeploy in Vercel (automatic on push if the project is connected to this repo).

## Notes

- **Order Online is intentionally off.** The Toast storefront menu is behind this menu, so no ordering links are on the site. Don't re-add ordering links until Toast's menu has caught up.
- Menu data comes from the cafe's printed menus (Nov 2026). Nothing here is invented — prices and items match the printed menus except for removals the owner requested (dinner specials, potato chips, Cinnamon Roll Skillet, fried pork chops).
- Hours: Mon closed, Tue–Fri 7am–8pm, Sat 7am–4pm, Sun 7am–2pm.
