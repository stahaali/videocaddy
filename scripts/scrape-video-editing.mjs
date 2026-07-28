/**
 * Improved scrape for Video Caddy video-editing pages.
 * Run: node scripts/scrape-video-editing.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "src", "data", "video-editing", "pages");
const imgRoot = path.join(root, "public", "assets", "images", "video-editing");

const PAGES = [
  { slug: "360", url: "https://www.videocaddy.com/360-degree.php", label: "360 Video Editing" },
  { slug: "corporate", url: "https://www.videocaddy.com/corporate.php", label: "Corporate Videos" },
  { slug: "edius-pro", url: "https://www.videocaddy.com/edius-pro-editing.php", label: "Edius Pro Editing" },
  { slug: "film-re-editing", url: "https://www.videocaddy.com/film-re-editing.php", label: "Film Re-editing" },
  { slug: "final-cut-pro", url: "https://www.videocaddy.com/final-cut-pro-editing.php", label: "Final Cut Editing" },
  { slug: "real-estate", url: "https://www.videocaddy.com/real-estate-video-editing.php", label: "Real Estate Video Editing" },
  { slug: "holiday", url: "https://www.videocaddy.com/holiday.php", label: "Holiday Vacation Video" },
  { slug: "interview", url: "https://www.videocaddy.com/interview.php", label: "Interview Video Editing" },
  { slug: "premiere-pro", url: "https://www.videocaddy.com/premiere-pro-editing.php", label: "Premiere Pro Editing" },
  { slug: "product", url: "https://www.videocaddy.com/product.php", label: "Product Video Editing" },
  { slug: "real-estate-tour", url: "https://www.videocaddy.com/real-estate-video-tour.php", label: "Real Estate Video Tour" },
  { slug: "youtube", url: "https://www.videocaddy.com/youtube-video-editing.php", label: "Youtube Video Editing" },
  { slug: "sales-pitch", url: "https://www.videocaddy.com/sales-pitch-video-editing.php", label: "Sale Pitch Video Editing" },
  { slug: "sports", url: "https://www.videocaddy.com/sports-video-editing.php", label: "Sports Video Editing" },
  { slug: "testimonial", url: "https://www.videocaddy.com/testimonial-video-editing.php", label: "Testimonial Video Editing" },
  { slug: "brochure", url: "https://www.videocaddy.com/brochure.php", label: "Video Brochure" },
  { slug: "clipping", url: "https://www.videocaddy.com/clipping.php", label: "Video Clipping" },
  { slug: "commercials", url: "https://www.videocaddy.com/commercials.php", label: "Commercial Video Editing" },
  { slug: "stabilizing", url: "https://www.videocaddy.com/stabilizing-services.php", label: "Video Stabilizing" },
  { slug: "summary", url: "https://www.videocaddy.com/video-summary.php", label: "Video Summary" },
  { slug: "tagging", url: "https://www.videocaddy.com/video-tagging.php", label: "Video Tagging" },
  { slug: "virtual-reality", url: "https://www.videocaddy.com/virtual-reality.php", label: "Virtual Reality Post-Production" },
  { slug: "wedding", url: "https://www.videocaddy.com/wedding.php", label: "Wedding Video Editing" },
  { slug: "adobe-after-effects", url: "https://www.videocaddy.com/adobe-after-effects.php", label: "Adobe After Effects Editing" },
];

function stripTags(html) {
  if (!html) return "";
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function meta(html, name) {
  const re = new RegExp(
    `<meta[^>]*(?:name|property)=["']${name}["'][^>]*content=["']([^"']+)["']|<meta[^>]*content=["']([^"']+)["'][^>]*(?:name|property)=["']${name}["']`,
    "i"
  );
  const m = html.match(re);
  return m ? m[1] || m[2] || "" : "";
}

function firstMatch(html, re) {
  const m = html.match(re);
  if (!m) return "";
  return (m[1] ?? m[0] ?? "").trim();
}

function allMatches(html, re) {
  const out = [];
  let m;
  const r = new RegExp(re.source, re.flags.includes("g") ? re.flags : `${re.flags}g`);
  while ((m = r.exec(html))) out.push((m[1] ?? "").trim());
  return out.filter(Boolean);
}

function imgSrc(chunk) {
  return (
    firstMatch(chunk, /nitro-lazy-src=["'](https:\/\/[^"']+)["']/i) ||
    firstMatch(chunk, /(?:data-src|src)=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i)
  );
}

function extractBoxServices(html) {
  const services = [];
  const boxes = html.match(/<div class="box-service">[\s\S]*?<\/div>\s*<\/div>/gi) || [];
  for (const box of boxes) {
    const title =
      stripTags(firstMatch(box, /<(?:h2|h3)[^>]*class="[^"]*title[^"]*"[^>]*>([\s\S]*?)<\/(?:h2|h3)>/i)) ||
      stripTags(firstMatch(box, /<(?:h2|h3)[^>]*>([\s\S]*?)<\/(?:h2|h3)>/i));
    let items = allMatches(box, /<li[^>]*>([\s\S]*?)<\/li>/gi).map(stripTags).filter(Boolean);
    if (!items.length) {
      const desc = stripTags(firstMatch(box, /<p[^>]*>([\s\S]*?)<\/p>/i));
      if (desc) items = [desc];
    }
    const image = imgSrc(box);
    if (title && (items.length || image)) {
      services.push({ title, items: items.length ? items : [title], imageUrl: image || "" });
    }
  }

  // wedding-style icon cards: often h3 + p without ul
  if (!services.length) {
    const altBoxes =
      html.match(/<div class="(?:sb-service-box|feature-box|service-box)[^"]*"[\s\S]*?<\/div>\s*<\/div>/gi) || [];
    for (const box of altBoxes) {
      const title = stripTags(firstMatch(box, /<(?:h2|h3)[^>]*>([\s\S]*?)<\/(?:h2|h3)>/i));
      const desc = stripTags(firstMatch(box, /<p[^>]*>([\s\S]*?)<\/p>/i));
      const image = imgSrc(box);
      if (title && desc) services.push({ title, items: [desc], imageUrl: image || "" });
    }
  }

  // h2 + p service pairs (wedding / specialty pages)
  if (!services.length) {
    const section =
      html.match(
        /(?:OUTSOURCE YOUR EDITING|Our [\w\s]+ Services|STUNNING|DRONE FOOTAGE|VIDEO CADDY OFFERS)[\s\S]*?(?=WHY CHOOSE|Why Should|CLIENTS FEEDBACK|Need Pricing|View More)/i
      )?.[0] || "";
    const pairRe = /<(?:h2|h3)[^>]*>([\s\S]*?)<\/(?:h2|h3)>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = pairRe.exec(section))) {
      const title = stripTags(m[1]);
      const desc = stripTags(m[2]);
      if (
        title.length > 3 &&
        title.length < 120 &&
        desc.length > 40 &&
        !/OUR RECENT|SUCCESS STORIES|Frequently|CLIENTS/i.test(title)
      ) {
        services.push({ title, items: [desc], imageUrl: "" });
      }
    }
  }

  // premiere / feature cards: #what-we-do card-text only
  if (!services.length) {
    const whatWeDo = html.match(/id=["']what-we-do["'][\s\S]*?(?=<\/section|View More|Need Pricing)/i)?.[0] || "";
    const texts = allMatches(whatWeDo, /<p[^>]*class=["'][^"']*card-text[^"']*["'][^>]*>([\s\S]*?)<\/p>/gi)
      .map(stripTags)
      .filter((t) => t.length > 40);
    if (texts.length >= 2) {
      for (let i = 0; i < texts.length; i++) {
        const sentence = texts[i];
        const title = sentence.split(/[.!?]/)[0].slice(0, 70) || `Feature ${i + 1}`;
        services.push({ title, items: [sentence], imageUrl: "" });
      }
    }
  }

  return services;
}

function extractFaqs(html) {
  const faqs = [];
  const section =
    html.match(/id=["']faq["'][\s\S]*?(?=<section|<\/main|$)/i)?.[0] ||
    html.match(/Frequently Asked Questions[\s\S]*?(?=<section class="|<\/body|$)/i)?.[0] ||
    "";

  // card-header / accordion-button patterns
  const headers = allMatches(
    section,
    /<(?:button|a|div)[^>]*(?:accordion-button|card-header|data-toggle=["']collapse["'])[^>]*>([\s\S]*?)<\/(?:button|a|div)>/gi
  );
  const bodies = allMatches(
    section,
    /<(?:div)[^>]*(?:accordion-body|card-body|collapse)[^>]*>([\s\S]*?)<\/div>/gi
  );
  if (headers.length && bodies.length) {
    for (let i = 0; i < Math.min(headers.length, bodies.length); i++) {
      const q = stripTags(headers[i]);
      const a = stripTags(bodies[i]);
      if (q.includes("?") && a.length > 20) faqs.push({ question: q, answer: a });
    }
    if (faqs.length) return faqs.slice(0, 12);
  }

  // h5/h4 question + following paragraph
  const qaRe =
    /<(?:h[345])[^>]*>([\s\S]*?\?)[\s\S]*?<\/(?:h[345])>\s*(?:<div[^>]*>)?\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = qaRe.exec(section))) {
    const q = stripTags(m[1]);
    const a = stripTags(m[2]);
    if (q.includes("?") && a.length > 20) faqs.push({ question: q, answer: a });
  }

  if (!faqs.length) {
    // plain text split on ?
    const text = stripTags(section);
    const parts = text.split(/(?<=\?)\s+/);
    for (let i = 0; i < parts.length - 1; i++) {
      const q = parts[i].trim();
      const a = parts[i + 1].replace(/\s*How |\s*What |\s*Can |\s*Is |\s*Which |\s*Why |\s*Do /g, "|||$&").split("|||")[0].trim();
      if (q.endsWith("?") && q.length > 20 && a.length > 30 && a.length < 600) {
        faqs.push({ question: q, answer: a });
        i++; // skip consumed answer start - rough
      }
    }
  }

  return faqs.slice(0, 12);
}

function extractWhyItems(html) {
  const why = [];
  const section =
    html.match(/id=["']what-we-do["'][\s\S]*?(?=<div class="view-more|<\/section|CLIENTS FEEDBACK)/i)?.[0] ||
    html.match(/Why Should Businesses Choose[\s\S]*?(?=View More|Strengthen|CLIENTS FEEDBACK|SUCCESS STORIES)/i)?.[0] ||
    html.match(/WHY CHOOSE US[\s\S]*?(?=View More|CLIENTS FEEDBACK|Need Pricing)/i)?.[0] ||
    "";

  const cards = section.match(/<div class="card(?:\s+hidden)?"[\s\S]*?<\/div>\s*<\/div>/gi) || [];
  for (const card of cards) {
    const title = stripTags(firstMatch(card, /<(?:h3|h2)[^>]*>([\s\S]*?)<\/(?:h3|h2)>/i));
    const description = stripTags(firstMatch(card, /<p[^>]*class=["'][^"']*card-text[^"']*["'][^>]*>([\s\S]*?)<\/p>/i) || firstMatch(card, /<p[^>]*>([\s\S]*?)<\/p>/i));
    if (title && description) why.push({ title, description });
  }

  if (!why.length) {
    const re = /<(?:h3|h2)[^>]*>([\s\S]*?)<\/(?:h3|h2)>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
    let m;
    while ((m = re.exec(section))) {
      const title = stripTags(m[1]);
      const description = stripTags(m[2]);
      if (title.length > 3 && description.length > 20) why.push({ title, description });
    }
  }
  return why;
}

function extractCaseStudies(html) {
  const section = html.match(/OUR RECENT CASE STUDIES[\s\S]*?(?=<section|Have a project|Frequently Asked|HOW DO YOU)/i)?.[0] || "";
  const titles = allMatches(section, /sb-case-study-title[\s\S]*?<a[^>]*>([\s\S]*?)<\/a>/gi).map(stripTags);
  return titles.map((title) => ({ title, href: "/portfolio" }));
}

function extractProcess(html) {
  const section =
    html.match(/HOW DO YOU COLLABORATE[\s\S]*?(?=<section|Have a project|Frequently Asked)/i)?.[0] || "";
  const steps = [];
  const re = /<(?:h3|h4)[^>]*>([\s\S]*?)<\/(?:h3|h4)>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(section))) {
    steps.push({ title: stripTags(m[1]), description: stripTags(m[2]) });
  }
  return steps;
}

function extractIntro(html) {
  // corporate-style: paragraphs between banner and stats or after hero before services
  const chunks = [];
  const afterHero =
    html.match(/<\/h1>[\s\S]*?(?=<section[^>]*class=["'][^"']*counter|Years of experience|Our [A-Z])/i)?.[0] || "";
  const paras = allMatches(afterHero, /<p[^>]*>([\s\S]*?)<\/p>/gi)
    .map(stripTags)
    .filter((p) => p.length > 100 && !/GET STARTED|PORTFOLIO|Years of experience|Satisfied/i.test(p));
  chunks.push(...paras.slice(0, 3));

  // wedding-style section after stats
  if (!chunks.length) {
    const afterStats =
      html.match(/Project Done[\s\S]{0,8000}?(?=box-service|WHY CHOOSE|ADOBE|Our )/i)?.[0] || "";
    const more = allMatches(afterStats, /<p[^>]*>([\s\S]*?)<\/p>/gi)
      .map(stripTags)
      .filter((p) => p.length > 80);
    chunks.push(...more.slice(0, 2));
  }
  return chunks;
}

function extractServicesHeader(html) {
  const row =
    html.match(/<h2[^>]*>\s*Our[\s\S]*?Services[\s\S]*?<\/h2>[\s\S]{0,600}?<p[^>]*>([\s\S]*?)<\/p>/i) ||
    html.match(/<(?:div class="h5"|h5)[^>]*>[\s\S]*?<\/(?:div|h5)>\s*<h2[^>]*>([\s\S]*?)<\/h2>[\s\S]{0,400}<p[^>]*>([\s\S]*?)<\/p>/i);
  const titleMatch = html.match(/<h2[^>]*>\s*((?:Our|OUTSOURCE|STUNNING|ADOBE|PROFESSIONAL|VIDEO|EXCLUSIVE)[\s\S]*?)<\/h2>/i);
  if (row && titleMatch) {
    return { title: stripTags(titleMatch[1]), description: stripTags(row[1] || row[2] || "") };
  }
  if (titleMatch) return { title: stripTags(titleMatch[1]), description: "" };
  return null;
}

function extractMidCta(html) {
  // dedicated form-section / ss-page-cta or mid paragraph CTA
  const ctaBlock =
    html.match(/id=["']ss-page-cta["'][\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/i) ||
    html.match(/<(?:section)[^>]*class=["'][^"']*form-section[^"']*["'][^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/i);

  if (ctaBlock) {
    const title = stripTags(ctaBlock[1]);
    const description = stripTags(ctaBlock[2]);
    if (title.length < 200 && description.length > 40) {
      return { title, description, cta: { label: "Contact Us", href: "/contact" } };
    }
  }

  // wedding mid CTA heading pattern
  const mid =
    html.match(
      /<(?:h2)[^>]*>((?:TIMELESS|Strengthen|EXCLUSIVE|Maximize|Elevate)[\s\S]*?)<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/i
    );
  if (mid) {
    return {
      title: stripTags(mid[1]),
      description: stripTags(mid[2]),
      cta: { label: "Contact Us", href: "/contact" },
    };
  }
  return null;
}

function extractHeroImage(html, slug) {
  // Prefer banner/video section image near top
  const banner =
    html.match(/banner[\s\S]{0,2500}?(?:nitro-lazy-src|src)=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i) ||
    html.match(/video-section[\s\S]{0,1500}?(?:nitro-lazy-src|src)=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i);

  if (banner) return banner[1];

  const all = allMatches(html, /(?:nitro-lazy-src|src)=["'](https:\/\/[^"']+\/img\/[^"']+\.(?:webp|jpg|jpeg|png))["']/gi);
  const prefer = all.find(
    (u) =>
      new RegExp(slug.replace(/-/g, "[-_]?"), "i").test(u) ||
      /banner|hero|service-banner/i.test(u)
  );
  return prefer || all[0] || "";
}

async function downloadImage(url, dest) {
  if (!url || url.startsWith("data:")) return null;
  try {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) return dest;
    const res = await fetch(url);
    if (!res.ok) return null;
    const buf = Buffer.from(await res.arrayBuffer());
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, buf);
    return dest;
  } catch {
    return null;
  }
}

function localPath(relUrl, fallbackExt = "webp") {
  const ext = (relUrl.match(/\.(webp|jpg|jpeg|png)(?:\?|$)/i) || [, fallbackExt])[1].toLowerCase();
  return ext === "jpeg" ? "jpg" : ext;
}

async function scrapePage(page) {
  console.log("Scraping", page.slug);
  const res = await fetch(page.url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; VideoCaddyClone/1.0)" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();

  const titleTag = firstMatch(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const h1 = stripTags(firstMatch(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i));
  const heroImgUrl = extractHeroImage(html, page.slug);
  const heroExt = localPath(heroImgUrl || "x.webp");
  const heroLocal = `/assets/images/video-editing/hero/${page.slug}.${heroExt}`;
  if (heroImgUrl) await downloadImage(heroImgUrl, path.join(root, "public", heroLocal.slice(1)));

  const rawServices = extractBoxServices(html);
  const services = [];
  for (let i = 0; i < rawServices.length; i++) {
    const s = rawServices[i];
    let image;
    if (s.imageUrl) {
      const ext = localPath(s.imageUrl);
      image = `/assets/images/video-editing/services/${page.slug}-${i}.${ext}`;
      await downloadImage(s.imageUrl, path.join(root, "public", image.slice(1)));
    }
    services.push({
      title: s.isFeature ? s.items[0].slice(0, 60) : s.title,
      items: s.isFeature ? s.items : s.items,
      ...(image ? { image } : {}),
    });
    if (s.isFeature) {
      services[services.length - 1].title = `Capability ${i + 1}`;
      services[services.length - 1].items = s.items;
    }
  }

  const afterH1 = html.split(/<\/h1>/i)[1] || "";
  const subtitle =
    allMatches(afterH1.slice(0, 3000), /<p[^>]*>([\s\S]*?)<\/p>/gi)
      .map(stripTags)
      .find((p) => p.length > 40 && !/GET STARTED|PORTFOLIO|Years of experience/i.test(p)) || "";

  const whyItems = extractWhyItems(html);
  const whyTitleRaw =
    firstMatch(html, /<(?:h2)[^>]*>\s*(Why Should Businesses Choose[\s\S]*?)<\/h2>/i) ||
    firstMatch(html, /WHY CHOOSE US[\s\S]{0,200}<h2[^>]*>([\s\S]*?)<\/h2>/i) ||
    "";
  const whyTitle =
    stripTags(whyTitleRaw) || (whyItems.length ? `Why Choose Our ${page.label}` : "");

  // services header description from col next to title
  const servicesHeader = extractServicesHeader(html);

  const data = {
    slug: page.slug,
    label: page.label,
    sourceUrl: page.url,
    meta: {
      title: stripTags(titleTag).replace(/\s*\|\s*Video Caddy.*/i, "") || page.label,
      description: meta(html, "description") || subtitle.slice(0, 160),
    },
    hero: {
      title: h1 || page.label,
      subtitle,
      image: heroImgUrl ? heroLocal : "/assets/images/audio-editing-banner.webp",
      primaryCta: { label: "Get Started Now", href: "/contact" },
      secondaryCta: { label: "Portfolio", href: "/portfolio" },
    },
    intro: extractIntro(html),
    servicesHeader,
    services: services.filter((s) => s.title && s.items?.length),
    why: {
      eyebrow: "WHY CHOOSE US",
      title: whyTitle.replace(/^WHY CHOOSE US\s*/i, ""),
      items: whyItems,
    },
    process: extractProcess(html),
    midCta: extractMidCta(html),
    caseStudies: extractCaseStudies(html),
    faqs: extractFaqs(html),
  };

  return data;
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(path.join(imgRoot, "hero"), { recursive: true });
  fs.mkdirSync(path.join(imgRoot, "services"), { recursive: true });

  const index = [];
  for (const page of PAGES) {
    try {
      const data = await scrapePage(page);
      fs.writeFileSync(path.join(outDir, `${page.slug}.json`), JSON.stringify(data, null, 2));
      index.push({ slug: page.slug, label: page.label, sourceUrl: page.url });
      console.log(
        `  OK ${page.slug} | services:${data.services.length} why:${data.why.items.length} faqs:${data.faqs.length} cases:${data.caseStudies.length}`
      );
    } catch (err) {
      console.error("  FAIL", page.slug, err.message);
    }
  }
  fs.writeFileSync(path.join(outDir, "_index.json"), JSON.stringify(index, null, 2));
  console.log("Done:", index.length);
}

main();
