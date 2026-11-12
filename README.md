# Short Film Studio

A cinematic portfolio and production-planning website for short films — built with
React 18 + Vite 5. Featured project: **Midnight Signal** (12-minute drama / mystery).

> **Tóm tắt tiếng Việt:** Website giới thiệu phim ngắn và quản lý sản xuất phim:
> danh mục phim, lịch quay, shot list, checklist tiền kỳ / sản xuất / hậu kỳ,
> theo dõi nộp liên hoan phim và liên hệ. Toàn bộ nội dung sửa trong một file
> duy nhất: `src/data.js`. Không cần backend.

## What it includes

- **Films catalogue** — 4 short films (Midnight Signal, The Last Projectionist,
  Neon Alley, Rice Field Letters) with genre filter, duration, year and status.
- **Story** — synopsis and 3 storyboard beats for the featured film.
- **Production planning** — shoot schedule table, shot list table, and interactive
  pre-production / production / post-production checklists (saved in the browser).
- **Festival tracker** — film, festival, deadline and submission status.
- **Crew & contact** — crew list plus a validated contact form (opens the
  visitor's email app with a pre-filled message — no server needed).

## Run it

```bash
npm install
npm run dev      # open http://localhost:3000
npm run build    # production build into dist/
npm run preview  # preview the production build
```

Requires Node.js 18+.

## Edit the content

Everything editable lives in **`src/data.js`**:

| What to change | Where in `src/data.js` |
| --- | --- |
| Add / edit a film | `films` |
| Storyboard beats | `storyBeats` |
| Crew members | `crew` |
| Shoot days | `shootSchedule` |
| Shots | `shotList` |
| Checklists | `checklists` |
| Festival submissions | `festivals` |
| Studio name, email, location | `studio` |

Page structure is in `src/main.jsx`; styling is in `src/styles.css`
(cinematic dark theme, Cormorant Garamond + Inter).

## Project structure

```
index.html          # entry page, fonts
vite.config.js      # Vite config (dev server on port 3000)
src/
  main.jsx          # React app: hero, films, boards, planning, festivals, contact
  data.js           # all editable content (films, crew, schedule, festivals)
  styles.css        # cinematic dark theme, responsive
```

## Deploy

`npm run build` produces a static `dist/` folder — host it on GitHub Pages,
Netlify, Vercel, or any static host.
