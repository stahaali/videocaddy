# Cursor Prompt — Build Storyboard Dropdown Pages (Match Reference + Download Banner Images)

Copy the block below into Cursor.

---

## PROMPT

I need you to create the "Storyboard" dropdown pages in this Next.js project, matching this reference site: **https://www.videocaddy.com/storyboard/**

**Step 1 — Study the existing pattern first.**
Before writing anything, look at the pages/dropdowns already completed in this codebase (Audio Editing, and whichever Video Editing pages are already done). Identify:
- The folder/routing structure used for dropdown sub-pages
- Component breakdown (Hero, StatsBar, ServiceList/IconCards, WhyChooseUs, Testimonials, CaseStudies, CTA, FAQ, Footer)
- Naming conventions for components and `.module.css` files
- How Tailwind + CSS Modules are combined
- Shared/reusable components already built (reuse these, don't recreate)

Match this exact structure and coding style — keep everything consistent with what's already built.

**Step 2 — Keep structure identical to the reference.**
The Storyboard dropdown section on the reference site has this structure — replicate it exactly (section order, layout, card counts), only rewriting the copy in our own words:
- Main Storyboard landing page: **https://www.videocaddy.com/storyboard/**
- Sub-pages under it, e.g.:
  - eLearning Storyboard — https://www.videocaddy.com/storyboard/e-learning-storyboard.php
  - Video Game Storyboard — https://www.videocaddy.com/storyboard/video-game.php
  - Photomatic Storyboard — https://www.videocaddy.com/storyboard/photomatic-storyboard.php
  - Animatic Storyboard — https://www.videocaddy.com/storyboard/animatic-services.php
  - Comic Book Storyboard — https://www.videocaddy.com/storyboard/comic-book.php
  - Cartoon Storyboard — https://www.videocaddy.com/storyboard/cartoon-storyboard.php
  - Storyboard Illustration — https://www.videocaddy.com/storyboard/illustration.php

(Check the reference site's live dropdown menu for the complete/current list of sub-pages in case there are more or fewer than listed above, and build one page per sub-item.)

**Step 3 — Banners: download the actual images, don't recreate them.**
The banner sections on these pages are images, not CSS-generated backgrounds. For each page:
- Download the actual banner images directly from the reference site (inspect the page source / network tab to get the real image URLs, then save them).
- Store them in the project's existing image assets folder, following the current naming convention already used for other pages.
- Reference them in the code exactly the way banners are referenced on already-completed pages (same component prop / CSS background pattern).
- Do not attempt to redraw, regenerate, or approximate these images — use the real downloaded files.

**Step 4 — Content rules.**
- Rewrite all copy in our own words — do not copy sentences verbatim from the reference site.
- Keep the same section order/structure as the reference (hero → stats → intro → service breakdown/sub-categories → why choose us → testimonials → case studies → CTA → FAQ, adjusting to match whatever the actual Storyboard section includes).
- Proper SEO structure: one `h1`, `h2` for sections, meta title/description, alt text for every image (including the downloaded banners).

**Step 5 — Navigation.**
Make sure every new Storyboard sub-page is linked correctly under the "Storyboard" dropdown menu item in the shared navbar, following the same link pattern used for Audio Editing/Video Editing.

**Step 6 — Responsiveness.**
Fully responsive using the same Tailwind breakpoints already defined in the project. Reuse existing container/spacing components.

**After building, report:**
- Every new page/file created (path)
- Every banner image downloaded and where it was saved
- Every shared component reused
- Any new component you had to create that didn't already exist, and why

Do not modify any already-completed pages (Audio Editing or the Video Editing pages already finished) while doing this.

---

### Note for you
If the actual list of Storyboard sub-pages on the live site differs from what's listed above, tell Cursor to just crawl the dropdown menu on https://www.videocaddy.com/storyboard/ itself and build one page per item it finds there.
