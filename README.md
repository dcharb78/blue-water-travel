# Blue Water Travel & Cruises — Modern Website

A modern, SEO- and AI-SEO-optimized rebuild of [bluewatertravelandcruises.com](https://www.bluewatertravelandcruises.com/), built with **Next.js 15** (static export) and deployed to **Cloudflare Pages**.

## Tech Stack

- **Next.js 15** — App Router with `output: 'export'` for fully static HTML
- **Tailwind CSS** — Ocean-blue design system, mobile-first responsive layout
- **TypeScript** — Type-safe site configuration and components

## SEO & AI SEO Features

- Unique meta titles, descriptions, and canonical URLs per page
- Open Graph and Twitter Card metadata
- Auto-generated `sitemap.xml` and `robots.txt`
- JSON-LD structured data: `TravelAgency`, `Service`, `FAQPage`, `BlogPosting`, `BreadcrumbList`
- Semantic HTML with proper heading hierarchy
- `public/llms.txt` — curated AI discoverability index (10–20 high-value pages)
- Security and caching headers via `public/_headers` (Cloudflare Pages)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (Static Export)

```bash
npm run build
```

Static output is written to **`out/`** — this is the directory Cloudflare Pages serves.

Verify locally:

```bash
npx serve out
```

## Deploy to Cloudflare Pages

### Option A: Git Integration (Recommended)

1. Push this repo to GitHub/GitLab
2. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Select your repository
4. Configure build settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js (Static HTML Export) or None |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Node.js version** | 20 (set via `NODE_VERSION` env var) |

5. **Environment variables** (optional):

| Variable | Value |
|----------|-------|
| `NODE_VERSION` | `20` |
| `NEXT_PUBLIC_SITE_URL` | `https://www.bluewatertravelandcruises.com` |

6. Deploy. Cloudflare runs `npm run build` and publishes the `out/` folder.

### Option B: Wrangler CLI

```bash
npm run build
npm run pages:deploy
```

Requires [Wrangler](https://developers.cloudflare.com/workers/wrangler/) authenticated to your Cloudflare account.

### Custom Domain

1. In your Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Add `www.bluewatertravelandcruises.com` (and optionally the apex domain)
3. Cloudflare auto-provisions SSL

### Cloudflare Files

- `public/_headers` — security headers and cache rules (copied to `out/_headers`)
- `public/_redirects` — URL redirects (copied to `out/_redirects`)
- `wrangler.toml` — optional Wrangler/Pages config with `pages_build_output_dir = "out"`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, reviews, gallery, social, FAQ, CTA |
| `/types-of-travel/` | All travel categories overview |
| `/all-inclusive/` | All-inclusive resort planning |
| `/ocean-cruises/` | Ocean cruise planning |
| `/river-cruises/` | River cruise planning |
| `/packages-tours/` | Land packages and tours |
| `/weddings-honeymoons/` | Destination weddings & honeymoons |
| `/about/` | About the agency |
| `/meet-the-team/` | Team profiles |
| `/join-our-team/` | Careers |
| `/gallery/` | Photo gallery, videos, and social highlights |
| `/reviews/` | Client reviews and testimonials |
| `/blog/` | Travel blog index |
| `/blog/[slug]/` | Individual blog posts |
| `/request-a-quote/` | Quote request form |
| `/contact/` | Contact form |
| `/privacy-policy/` | Privacy policy |
| `/website-policy/` | Website policy |
| `/accessibility/` | Accessibility statement |

## Content Management

All media and social content is managed through simple TypeScript config files — no CMS or backend required for v1. Edit the files below, then run `npm run build` to publish changes.

### Social Media Posts

**File:** `lib/content/social.ts`

```typescript
{
  id: "unique-id",
  platform: "instagram",        // instagram | facebook | twitter
  url: "https://instagram.com/p/...",  // link to original post
  embedUrl: "https://instagram.com/p/.../embed",  // optional live embed
  image: "/social/my-post.jpg", // save image to public/social/
  caption: "Your post caption",
  date: "2026-03-01",
}
```

**Tips:**
- Download Instagram/Facebook post images and save to `public/social/`
- For live embeds, use the platform's embed URL (Instagram: append `/embed` to post URL)
- For auto-syncing feeds later, consider [Elfsight](https://elfsight.com), [Curator.io](https://curator.io), or a Cloudflare Worker

### Client Reviews

**File:** `lib/content/reviews.ts`

```typescript
{
  id: "review-7",
  author: "Jane D.",
  rating: 5,                    // 1-5 stars
  text: "Review text here...",
  source: "Google",             // Google | Facebook | TripAdvisor | Direct
  date: "2026-03-01",
  tripType: "Ocean Cruise",     // optional
}
```

Reviews appear on the homepage (top 3) and `/reviews/`. JSON-LD `AggregateRating` is auto-generated for SEO.

### Photo Gallery

**File:** `lib/content/gallery.ts`

1. Save photos to `public/gallery/` (recommended: 1200px wide `.jpg` or `.webp`)
2. Add entries:

```typescript
{
  id: "my-photo",
  src: "/gallery/my-photo.jpg",
  alt: "Descriptive alt text for SEO and accessibility",
  category: "cruises",          // all-inclusive | cruises | europe | weddings | team | destinations
  caption: "Optional caption",
}
```

Replace placeholder SVGs in `public/gallery/` with real photos when ready.

### Videos

**File:** `lib/content/videos.ts`

```typescript
{
  id: "my-video",
  title: "Video Title",
  url: "https://www.youtube.com/watch?v=VIDEO_ID",  // or Vimeo URL
  description: "Optional description",
  category: "cruises",
}
```

Supported: YouTube and Vimeo URLs. Thumbnails are auto-generated from YouTube.

### Team Photos

**File:** `lib/site-config.ts` → `teamMembers`

Add a `photo` path for each team member:

```typescript
{ name: "Jane Smith", role: "...", bio: "...", photo: "/gallery/jane-smith.jpg" }
```

## Notes

- Contact/quote forms use `mailto:` — replace with Formspree, Cloudflare Workers, or another backend when ready
- Update `lib/site-config.ts` with real phone number, email, and team details
- No server-side features — fully compatible with Cloudflare Pages static hosting
