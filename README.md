# nabindhamala.com

Next.js (App Router), static export. No database, no CMS.

    npm install
    npm run dev      # http://localhost:3000
    npm run build    # writes ./out — plain HTML/CSS/JS, upload anywhere

## Your photo
Replace `public/nabin.jpg`. Anything roughly 4:3.5 or taller works; it is cropped to that.

## Editing content
All copy lives in `app/page.js` — the arrays at the top (nav, work, services, clients, ticker)
and the JSX below. Styling is one file: `app/globals.css`.
