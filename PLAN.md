# Steve Adakole — Portfolio Website Build Plan

Hand this file to the builder. It covers the visual direction, the site map, all the copy and the asset map. Everything needed is in this repo.

## 0. Inputs in this repo

| Path | What it is |
|---|---|
| `source/steve-portfolio.pdf` | Steve's 12‑page PDF portfolio. **All copy and images come from here.** |
| `source/page-renders/page-XX.jpg` | Low‑res render of each PDF page, for quick visual reference. |
| `assets/images/portraits/` | Steve's photos. The `*-cutout.png` files have transparent backgrounds (alpha taken from the PDF masks). |
| `assets/images/projects/<category>/` | Project images pulled from the PDF, grouped by the PDF page they appear on. |

The design reference is the **"Folioblox" layout** the user supplied (not in the repo). It's described in §2.

## 1. Goals

- A single‑page, responsive, fast **static** portfolio for **Steve Adakole**: Still & Motion Designer, Media Manager and Content Creator, based in Abuja, Nigeria.
- Use the **layout and composition** of the Folioblox reference, with **Steve's own content and brand colour** (the blue/violet gradients from his PDF instead of the reference's orange).
- The main goal of the site is to get clients to contact Steve.

## 2. Design direction

### Layout we take from the reference (Folioblox)
1. **Hero card**: a full‑width card with a rounded bottom (about 40px radius) and a strong colour gradient. It has a small top nav (logo text on the left; links plus a pill "Get in touch" button with a round arrow icon on the right). On the left is a small line "Hey, I'm a" over a very large two‑line headline. On the right sits a short tagline with a subline. The portrait sits in the centre/right and blends into the gradient. Along the bottom of the card is a row of 4 numbered services (`#01 … #04`, with the `#` in the accent colour).
2. **"Trusted by" strip**: a dark rounded panel under the hero with a label on the left and a row of client names/logos.
3. **Intro split section**: on the left, an accent‑coloured eyebrow line and a large bold headline. On the right, a medium statement paragraph, small muted text and a pill CTA.
4. **Image triptych / gallery**: rounded cards (about 16px radius) in a 3‑column grid.
5. The page sits on a near‑black background, uses generous spacing and is built on a 12‑column grid with a max width of about 1200px.

### Brand taken from Steve's PDF
- **Background:** `#0d0d0f` (near‑black), with a subtle film‑grain noise overlay (SVG `feTurbulence` or a tiny PNG at about 6% opacity). Grain is a key part of the PDF's look.
- **Accent:** `#38b6ff` (sky blue, used for the name tag, underlines and active nav).
- **Gradient glows:** violet `#6a3cff` → blue `#2f6bff` → teal `#1fa2b8`. The hero card gradient runs from `#7b3cff` (top‑left) through `#2f6bff` to `#0d0d0f` (bottom‑right), in the same spirit as the orange in the reference.
- **Text:** `#ffffff`. Muted text: `#9a9aa5`. Panels: `#161619`.
- **Fonts (Google Fonts):**
  - Headlines: **League Spartan** (800), the closest free match to the PDF headings.
  - Body: **Open Sans** (400/600).
  - Mono/labels: **Space Mono** (400/700, including italic). Use it for nav, eyebrows, the "PORTFOLIO 2026" tag and the italic "Hello" / "Let's Work Together".
- **Signature details from the PDF to reuse:**
  - Thin horizontal rules that end in a small hollow circle (`—————o`).
  - A blue underline bar under section titles.
  - Outlined, stroke‑only large numerals for year ranges (`2020 – 2022`, `2018 – 2025`), done with `-webkit-text-stroke`.
  - A blue dot‑grid decoration.
  - Pill‑shaped skill tags with outlined borders.
  - Steve's name in large outlined text in the footer.

### Motion
Keep it subtle. Add a fade/slide‑up on scroll (IntersectionObserver), a slow drift on the gradient glows and an infinite marquee for the "Trusted by" strip. Respect `prefers-reduced-motion`.

## 3. Tech stack

- **Plain HTML + CSS + a little vanilla JS.** There is no framework and no build step, so the site deploys anywhere (GitHub Pages, Netlify).
- Files: `index.html`, `css/styles.css`, `js/main.js`, `assets/…`.
- Images: convert to WebP at 2 widths (about 800px and 1600px) and use `srcset` with `loading="lazy"`. Keep the original JPGs as fallback. Optimise the portrait PNG cutouts (keep alpha, or use WebP with alpha).
- Add a lightbox for gallery images. Write it yourself in about 60 lines of vanilla JS (dialog element, arrow keys and Esc).
- SEO: set the title, meta description, Open Graph image (use the hero section) and JSON‑LD `Person` schema.
- Accessibility: use semantic landmarks and real alt text on every image. Contrast must be ≥ 4.5:1, and every control must be keyboard reachable.

## 4. Site map (single page, anchor nav)

Nav: **Steve Adakole** (logo, accent‑blue tag) · About · Education · Experience · Projects · Contact · [Get in touch →]
On mobile, use a hamburger that opens a full‑screen overlay menu.

### 4.1 Hero (`#home`)
Uses the Folioblox hero card layout, with the gradient in Steve's colours.
- Eyebrow (Space Mono italic, accent): **Hello, I'm**
- Headline: **Steve Adakole**
- Tag bar (accent‑blue box, mono italic caps): **STILL & MOTION DESIGN / MEDIA MGT / CONTENT CREATOR**
- Right column tagline: **"Bringing brand stories to life through thoughtful, strategic design."**
- Subline: *I'm a passionate and dedicated designer with a strong background in creating visually compelling and effective design solutions. My professional interests lie in helping clients bring their unique brand stories and projects to life through thoughtful and strategic design.*
- Portrait: `portraits/steve-suit-cutout.png`, cropped to head and shoulders, positioned right and blending into the gradient.
- Bottom numbered row (based on his skills):
  `#01 Graphic Design` · `#02 Brand Identity` · `#03 Motion Design` · `#04 Illustration`
- Bottom‑right mono tag: **PORTFOLIO 2026**, with the hollow‑circle rule.

### 4.2 "Brands I've Worked With" strip
- Label: **Brands I've helped shape**
- Marquee of names in text‑logo style, taken from the experience and projects pages:
  Sevhage Publishers · Agro Alala · PRS Impact · Johnny Rockets · 4 Guys · Nosta Cafe · The Aretean · CBM · Rockshaw Logistics · Northstar Leadership · Fiscal Responsibility Commission
  Use only text, no third‑party logo files.

### 4.3 About (`#about`)
Uses the Folioblox intro split section.
- Eyebrow (accent): **About Me**
- Headline: **Solving Brand Problems With Precise Visual Communication**
- Image: `portraits/steve-striped-shirt-cutout.png` on a violet glow, with the dot‑grid decoration.
- Body copy (verbatim from the PDF; fix only the lowercase "whether"):
  > Hey there, I'm Steve. By day, I'm a visual communicator, Graphic designer, illustrator, and social media manager who loves solving complex brand problems with precise visual communication and design solutions.
  >
  > By night (and on weekends), you'll find me editing videos and motion materials for the brands I manage against the week ahead. I'm a big believer in lifelong learning and am always looking for new skills to pick up within the design and creative field. Whether it's a new approach to design or a new trail to explore.
- Subheading: **Skill & Interest**. Pills: Graphic Design · Content Mgt · Reading · Illustration · Motion Design · Movies
- CTA pill: **Let's build something meaningful together →** (links to `#contact`)

### 4.4 Education (`#education`)
- Big outlined numerals: **2020 – 2022**
- Title: **Education** (with blue underline bar)
- Intro:
  > My educational background includes my first bachelor's degree in Resource Management from the **National Open University, Nigeria.** I then moved on to focus more on my passion for art and design. My passion for art and studies provided me with a strong foundation in a range of subjects, including comic art illustration, graphic design, motion design, social media management, stage design, and visual communication.
- Timeline cards:
  1. **Warwick University, UK**: School of Art · Arts and Illustration Bachelor · 2020
  2. **Bachelor Degree**: Warwick University · Graphic Design Bachelor · 2022
  3. **Master Degree**: Warwick University · Masters in Communication · 2023
- ⚠️ The PDF says "2020 – 2022" but lists a degree from 2023. Confirm the year range with Steve. Until then, show **2020 – 2023**.

### 4.5 Experience (`#experience`)
- Big outlined numerals: **2018 – 2025**
- Title: **Experience**
- Show these as 3 rows. Each row has the blue `»` chevron icon, the company, role and dates on the left, and the description on the right, with hairline dividers between rows:
  1. **SEVHAGE Publishers**: Senior Graphic Designer · 2018 – 2024 (Virtual)
     *My duties revolved around creating in-depth visual impressions and illustrations for book cover designs, magazines, print-ready layouts and event publicity materials like flyers/posters/banners, etc.*
  2. **Agro Alala / F.C.T., Nigeria**: Group Brand Manager · 2019 – 2023 (Onsite)
     *My core role and responsibility was creating and managing the visual brand identity online and onsite. Ranging from billboard advertising to social media management to creating campaign materials for print and publishing.*
  3. **PRS Impact / F.C.T., Nigeria**: Senior Graphic Designer/Admin · 2020 – 2022 (Virtual/Onsite)
     *I was responsible for managing the visual identity of several social media brands we partnered with, like Johnny Rockets (restaurant), 4 Guys (eatery), Nosta Cafe, and The Aretean (Int'l school).*

### 4.6 Projects (`#projects`)
- Eyebrow: **Behind the Designs**. Headline: **Selected Work**
- **Filter tabs** (pill buttons): All · Flyers · Reports · Brochures · Book Covers · 3D Product · Brand Identity · Illustration
- Show a masonry/grid of rounded cards. Hovering a card scales the image to 1.04 and shows a caption overlay. Clicking opens the lightbox.
- Show 6–8 images in "All", then a **"View more"** button.

| Tab | Folder | Description (for card caption / tab intro) |
|---|---|---|
| Flyers | `projects/flyers/` (12) | Event flyers, campaign posters and social graphics: CBM International Report 2022, "Orange the World / End Violence Against Women", "Good Design" series, Brand Image System. |
| Reports | `projects/reports/` (7) | Report & event-gallery publication for the Fiscal Responsibility Commission's South‑South Fiscal Accountability Retreat, Port‑Harcourt. |
| Brochures | `projects/brochures/` (5) | Corporate brochure for Rockshaw Logistics Limited: core values, vision & mission, service spreads. |
| Book Covers | `projects/covers/` (5) | Book covers: *Meetings and Encounters* (Eugenia Abu), *While She Slept*, *Bearing the Brunt Alone*, *Mourndays and Ruminations*, *Instrument of Immortality*. |
| 3D Product | `projects/3d/` (7) | 3D product and out-of-home mockups: branded bag & bottle, beverage can renders, bus‑shelter "Conversations" campaign. |
| Brand Identity | `projects/brand/` (6) | Logo crafting & brand systems: Northstar Leadership, Sickerville Youth, and 30+ logos (Acoustichild, Time Out Media, Soar Tech, …). |
| Illustration | `projects/illustration/` (3) | Children's book illustration, editorial cartoon and the *Commander Zeal* comic. |

**Builder: before wiring up the gallery, open every image in these folders.** Each folder holds every image from that PDF page. A few may be fragments or duplicates, so drop those, and write proper alt text from what each image shows. Use the matching `source/page-renders` page to check how the images are meant to be arranged.

### 4.7 Contact (`#contact`)
- Title: **Get In Touch**. Subtitle (mono italic, accent): *Let's Work Together*
- 4 cards with line icons (inline SVG):
  - **Phone & Mobile**: +234 906 988 2851 (`tel:+2349069882851`)
  - **Email**: rocksolidpixel@gmail.com · rocksolidpixels@outlook.com (`mailto:`)
  - **Address**: 281, Jessi Jackson Street, Asokoro, Abuja.
  - **Social**: Instagram @rocksolidpixels (https://instagram.com/rocksolidpixels)
- Optional contact form. With no backend, use a `mailto:` fallback or Formspree. Ask the user before adding a third‑party service.
- ⚠️ The phone number is written two ways in the PDF ("+234 - 90 6988 2851" on the contact page, "+234 906 988 2851" on the book covers). Both are the same digits, so use `+234 906 988 2851`.

### 4.8 Footer
- Hollow‑circle rule, then a huge outlined **STEVE ADAKOLE**, then a rule with **PORTFOLIO 2026** in the middle.
- Small line: © 2026 Steve Adakole · Rocksolid Pixel · back‑to‑top link.

## 5. Copy fixes to apply
- Fix "Portofolio" → **Portfolio** everywhere.
- Fix "illustraton" → **illustration**.
- Fix "WarwickUniversity" → **Warwick University**.
- Fix the trailing comma at the end of the PRS Impact description.
- Keep everything else verbatim.

## 6. Responsive behaviour
- **≥1200px:** the full layout described above.
- **768–1199px:** the hero headline is about 64px. The experience rows stack, with the description under the title. The gallery has 2 columns.
- **<768px:** the hero card stacks: text first, then the portrait, then the services in a 2×2 grid. Use a hamburger nav. The gallery has 1–2 columns. The outlined numerals shrink to about 56px. Keep 16px side gutters and no horizontal scroll (the marquee is clipped).

## 7. Build order (suggested commits)
1. Scaffold the files, CSS tokens, fonts, grain overlay, nav and footer.
2. Hero card and brands strip.
3. About and Education.
4. Experience.
5. Projects grid, filters and lightbox, plus image optimisation (WebP + srcset).
6. Contact, SEO meta, JSON‑LD and favicon (a "SA" monogram in accent blue).
7. Responsive QA, reduced motion and a Lighthouse pass (target ≥ 90 on all four scores).

## 8. Acceptance checklist
- [ ] All copy matches §4 (with the fixes from §5).
- [ ] Every PDF section is represented: Hero, About, Education, Experience, 7 project categories, Contact.
- [ ] Layout clearly follows the reference: hero card with rounded bottom, numbered services row, trusted‑by strip, intro split, rounded image grid.
- [ ] Colours and grain match Steve's PDF (blue/violet, not orange).
- [ ] Gallery filters, lightbox (keyboard + Esc) and mobile menu all work.
- [ ] No horizontal scroll at 360px. Images are lazy‑loaded. Alt text is on every image.
- [ ] The phone, email and Instagram links work.

## 9. Open questions for Steve
1. What are the correct education dates (2020–2022 or 2020–2023)?
2. Should the site use a custom domain and a specific host (GitHub Pages or Netlify)?
3. Does he have a contact‑form preference (mailto only, or Formspree)?
4. Can he send higher‑resolution originals of the project work? The PDF images are compressed, and some are around 600px wide.
