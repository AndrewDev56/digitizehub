# Assets to add before this matches the Figma pixel-for-pixel

My sandbox can't reach `figma.com` (it's not on the network allowlist here), so I
could not download the real exported assets and copy them into `public/` as
required. Everything else (fonts wiring, colors, layout, components) is real
and complete — these are the only manual steps left.

## 1. Logo — `public/images/logo.svg`

The Figma logo (node `1:436`, "Asset 1 1") is a flattened SVG wordmark
("Digitize" / "HUB"). Temporary export link (valid ~7 days from Sept 15,
2026):
`https://www.figma.com/api/mcp/asset/bab9cf10-5be7-4e6a-b749-793d18d5ab9d.svg`

Download it and save as `public/images/logo.svg`.

## 2. Button arrow icon — `public/icons/arrow-right.svg`

Used inside `Button.tsx` (Figma node `1:13`, "Xnix/Line/Arrow_Right").
Temporary link: `https://www.figma.com/api/mcp/asset/a4a044d1-756f-4a2d-a43c-c992139f74dd.svg`

Save as `public/icons/arrow-right.svg`.

## 3. "Discover" down arrow — `public/icons/arrow-down.svg`

Used in `Hero.tsx` (Figma node `1:566`, "Xnix/Line/Down_Arrow_5"). This one
wasn't fetched yet — open the node in Figma (or ask Claude to re-fetch once
`figma.com` is reachable) and export it as `public/icons/arrow-down.svg`.

## 4. Hero chip icon — `public/icons/chip-icon.svg`

Used in `FloatingChip.tsx` (Figma node `1:516` group, reused identically
across all 5 floating hero chips). Temporary link:
`https://www.figma.com/api/mcp/asset/13827d49-3199-40cf-ad45-9fc5d5e42c3c.svg`

Save as `public/icons/chip-icon.svg`.

## 5. Aileron font files — `public/fonts/aileron/`

Aileron isn't on Google Fonts, so it can't be fetched automatically the way
Inter/Montserrat are. `app/globals.css` already has `@font-face` rules
pointing at these expected filenames — add the licensed `.woff2` files and
headings will pick it up automatically (currently falls back to Inter):

- `public/fonts/aileron/Aileron-Light.woff2`
- `public/fonts/aileron/Aileron-Regular.woff2`
- `public/fonts/aileron/Aileron-SemiBold.woff2`
- `public/fonts/aileron/Aileron-Bold.woff2`
- `public/fonts/aileron/Aileron-Heavy.woff2`

---

**Easiest fix:** if you enable network access to `figma.com` / `www.figma.com`
in this environment's network settings, I can fetch and commit the real SVGs
directly instead of you doing it by hand — just say the word.

## Note on `next/font/google`

`npx next build` in my sandbox also can't reach `fonts.googleapis.com`
(same allowlist restriction), so the build fails there with a font-fetch
error. This is a sandbox-only limitation — on your machine, with normal
internet access, `next/font/google` for Inter and Montserrat will fetch and
self-host correctly at build time. I verified the code separately with
`tsc --noEmit` and `eslint` (both clean).
