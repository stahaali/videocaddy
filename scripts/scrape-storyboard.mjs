/**
 * Scrape Video Caddy storyboard pages into JSON + local images.
 * Run: node scripts/scrape-storyboard.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "src", "data", "storyboard", "pages");
const imgRoot = path.join(root, "public", "assets", "images", "storyboard");

const FALLBACK_BG = "/assets/images/cartoon-storyboard-bg-banner.webp";

const PAGES = [
  { slug: "cartoon", url: "https://www.videocaddy.com/storyboard/cartoon-storyboard.php", label: "Cartoon Storyboard" },
  { slug: "character-creation", url: "https://www.videocaddy.com/storyboard/character-creation.php", label: "Character Creation" },
  { slug: "comic-book", url: "https://www.videocaddy.com/storyboard/comic-book.php", label: "Comic Book Storyboard" },
  { slug: "elearning", url: "https://www.videocaddy.com/storyboard/e-learning-storyboard.php", label: "eLearning Storyboard" },
  { slug: "illustration", url: "https://www.videocaddy.com/storyboard/illustration.php", label: "Illustration Storyboard" },
  { slug: "photomatic", url: "https://www.videocaddy.com/storyboard/photomatic-storyboard.php", label: "Photomatic Storyboard" },
  { slug: "animatics", url: "https://www.videocaddy.com/storyboard/animatic-services.php", label: "Storyboard Animatics" },
  { slug: "video-game", url: "https://www.videocaddy.com/storyboard/video-game.php", label: "Video Game Storyboard" },
  { slug: "index", url: "https://www.videocaddy.com/storyboard/", label: "Storyboard Services" },
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

  if (!services.length) {
    const altBoxes = html.match(/<div class="sb-service-box"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi) || [];
    for (const box of altBoxes) {
      const title = stripTags(firstMatch(box, /<(?:h2|h3)[^>]*>([\s\S]*?)<\/(?:h2|h3)>/i));
      const desc = stripTags(
        firstMatch(box, /sb-service-box-txt[^>]*>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/i) ||
          allMatches(box, /<p[^>]*>([\s\S]*?)<\/p>/gi)
            .map(stripTags)
            .find((p) => p.length > 40 && !/^\[\d+\]$/.test(p)) ||
          ""
      );
      const image = imgSrc(box);
      if (title && desc) services.push({ title, items: [desc], imageUrl: image || "" });
    }
  }

  if (!services.length) {
    const section =
      html.match(
        /(?:OUTSOURCE YOUR EDITING|Our [\w\s]+ Services|STUNNING|DRONE FOOTAGE|VIDEO CADDY OFFERS|Storyboard)[\s\S]*?(?=WHY CHOOSE|Why Should|CLIENTS FEEDBACK|Need Pricing|View More)/i
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
      const q = faqs.length; // placeholder to silence lint if unused
      void q;
      const question = stripTags(headers[i]);
      const answer = stripTags(bodies[i]);
      if (question.includes("?") && answer.length > 20) faqs.push({ question, answer });
    }
    if (faqs.length) return faqs.slice(0, 12);
  }

  const qaRe =
    /<(?:h[345])[^>]*>([\s\S]*?\?)[\s\S]*?<\/(?:h[345])>\s*(?:<div[^>]*>)?\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = qaRe.exec(section))) {
    const question = stripTags(m[1]);
    const answer = stripTags(m[2]);
    if (question.includes("?") && answer.length > 20) faqs.push({ question, answer });
  }

  if (!faqs.length) {
    const text = stripTags(section);
    const parts = text.split(/(?<=\?)\s+/);
    for (let i = 0; i < parts.length - 1; i++) {
      const question = parts[i].trim();
      const answer = parts[i + 1]
        .replace(/\s*How |\s*What |\s*Can |\s*Is |\s*Which |\s*Why |\s*Do /g, "|||$&")
        .split("|||")[0]
        .trim();
      if (question.endsWith("?") && question.length > 20 && answer.length > 30 && answer.length < 600) {
        faqs.push({ question, answer });
        i++;
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
    const description = stripTags(
      firstMatch(card, /<p[^>]*class=["'][^"']*card-text[^"']*["'][^>]*>([\s\S]*?)<\/p>/i) ||
        firstMatch(card, /<p[^>]*>([\s\S]*?)<\/p>/i)
    );
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

function extractWhyImage(html) {
  const near =
    html.match(
      /(?:WHY CHOOSE|Why Should Businesses|benefit-img)[\s\S]{0,4000}?(?:nitro-lazy-src|src)=["'](https:\/\/[^"']*benefit[^"']*\.(?:webp|jpg|jpeg|png))["']/i
    ) ||
    html.match(
      /(?:nitro-lazy-src|src)=["'](https:\/\/[^"']*benefit[^"']*\.(?:webp|jpg|jpeg|png))["']/i
    );
  return near ? near[1] : "";
}

function extractCaseStudies(html) {
  const section =
    html.match(/OUR RECENT CASE STUDIES[\s\S]*?(?=<section|Have a project|Frequently Asked|HOW DO YOU)/i)?.[0] || "";
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
  const chunks = [];
  // Storyboard pages put long intro after the stats counter, before the services header h2
  const afterStats =
    html.match(
      /<section[^>]*class=["'][^"']*sb-service-section[^"']*["'][^>]*>[\s\S]{0,8000}?(?=<h2|box-service|Why Should Businesses|WHY CHOOSE|CLIENTS FEEDBACK)/i
    )?.[0] ||
    html.match(
      /Satisfied clients[\s\S]{0,12000}?(?=<h2[^>]*>|box-service|Why Should Businesses|WHY CHOOSE)/i
    )?.[0] ||
    "";
  const fromStats = allMatches(afterStats, /<p[^>]*>([\s\S]*?)<\/p>/gi)
    .map(stripTags)
    .filter(
      (p) =>
        p.length > 80 &&
        !/GET STARTED|PORTFOLIO|Years of experience|Satisfied clients|Project Done|GET A FREE|4K resolution/i.test(
          p
        )
    );
  chunks.push(...fromStats.slice(0, 3));

  if (!chunks.length) {
    const afterHero =
      html.match(/<\/h1>[\s\S]*?(?=<section[^>]*class=["'][^"']*counter|Years of experience)/i)?.[0] || "";
    const paras = allMatches(afterHero, /<p[^>]*>([\s\S]*?)<\/p>/gi)
      .map(stripTags)
      .filter((p) => p.length > 100 && !/GET STARTED|PORTFOLIO/i.test(p));
    chunks.push(...paras.slice(0, 3));
  }
  return chunks;
}

function extractServicesHeader(html) {
  const titleMatch = html.match(
    /<h2[^>]*>\s*((?:<[^>]+>\s*)*(?:Our[\s\S]{0,100}?Services|OUTSOURCE YOUR|STUNNING[\s\S]{0,40}|ADOBE[\s\S]{0,40}|PROFESSIONAL[\s\S]{0,60}Services|Storyboard[\s\S]{0,60}Services)[\s\S]*?)<\/h2>/i
  );
  if (!titleMatch) return null;
  const title = stripTags(titleMatch[1]);
  if (/CASE STUDIES|SUCCESS STORIES|CLIENTS|FAQ|Frequently|WHAT OUR CLIENTS/i.test(title)) return null;

  const afterTitle = html.slice(
    html.indexOf(titleMatch[0]) + titleMatch[0].length,
    html.indexOf(titleMatch[0]) + titleMatch[0].length + 800
  );
  const desc = stripTags(firstMatch(afterTitle, /<p[^>]*>([\s\S]*?)<\/p>/i));
  if (/CASE STUDIES|SUCCESS STORIES|CLIENTS FEEDBACK/i.test(desc)) {
    return { title, description: "" };
  }
  return { title, description: desc || "" };
}

function extractMidCta(html) {
  const ctaBlock =
    html.match(/id=["']ss-page-cta["'][\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/i) ||
    html.match(
      /<(?:section)[^>]*class=["'][^"']*form-section[^"']*["'][^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/i
    );

  if (ctaBlock) {
    const title = stripTags(ctaBlock[1]);
    const description = stripTags(ctaBlock[2]);
    if (title.length < 200 && description.length > 40) {
      return { title, description, cta: { label: "Contact Us", href: "/contact" } };
    }
  }

  const mid = html.match(
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
  const banner =
    html.match(
      /banner[\s\S]{0,2500}?(?:nitro-lazy-src|src)=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i
    ) ||
    html.match(
      /video-section[\s\S]{0,1500}?(?:nitro-lazy-src|src)=["'](https:\/\/[^"']+\.(?:webp|jpg|jpeg|png))["']/i
    );

  if (banner) return banner[1];

  const all = allMatches(
    html,
    /(?:nitro-lazy-src|src)=["'](https:\/\/[^"']+\/img\/[^"']+\.(?:webp|jpg|jpeg|png))["']/gi
  );
  const prefer = all.find(
    (u) =>
      new RegExp(slug.replace(/-/g, "[-_]?"), "i").test(u) || /banner|hero|service-banner/i.test(u)
  );
  return prefer || all[0] || "";
}

/**
 * Find page-specific banner background (ss-page / *-storyboard-bg style).
 * Prefer unique page BGs over shared banner-bg / service-main-bg.
 */
function extractBannerBackground(html) {
  const urls = [];
  const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((s) => s[1]).join("\n");
  const cssRe =
    /\.(?:banner-section|ss-page|[a-z0-9_-]*(?:storyboard|banner)-bg[a-z0-9_-]*)[^{]*\{[^}]*url\(['"]?([^)'"]+)['"]?\)/gi;
  let m;
  while ((m = cssRe.exec(styles))) urls.push(m[1]);
  const storyBgRe =
    /url\(['"]?(https?:\/\/[^)'"]*(?:storyboard|banner)[^)'"]*\.(?:webp|jpg|jpeg|png))['"]?\)/gi;
  while ((m = storyBgRe.exec(styles))) urls.push(m[1]);
  const allBg = [...styles.matchAll(/url\(['"]?(https?:\/\/[^)'"]+\.(?:webp|jpg|jpeg|png))['"]?\)/gi)].map(
    (x) => x[1]
  );
  urls.push(...allBg);

  const unique = [...new Set(urls)];
  const pageSpecific = unique.find((u) =>
    /storyboard-bg|cartoon-storyboard-bg|character-|comic-|e-?learning|illustration|photomatic|animatic|video-game/i.test(
      u
    )
  );
  if (pageSpecific) return pageSpecific;
  return "";
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

const SYNONYMS = [
  [/\bstructured\b/gi, "organized"],
  [/\bdelivering\b/gi, "providing"],
  [/\bdelivered\b/gi, "provided"],
  [/\bdelivers\b/gi, "provides"],
  [/\bdeliver\b/gi, "provide"],
  [/\bensuring\b/gi, "supporting"],
  [/\bensures\b/gi, "supports"],
  [/\bensured\b/gi, "supported"],
  [/\bensure\b/gi, "support"],
  [/\bcomprehensive\b/gi, "complete"],
  [/\bhigh[- ]quality\b/gi, "top-tier"],
  [/\btailored\b/gi, "customized"],
  [/\bseamless\b/gi, "smooth"],
  [/\binnovative\b/gi, "creative"],
  [/\bstreamlined\b/gi, "efficient"],
  [/\bmeticulous\b/gi, "careful"],
  [/\bcaptivating\b/gi, "engaging"],
  [/\boutstanding\b/gi, "exceptional"],
  [/\butilizing\b/gi, "using"],
  [/\butilizes\b/gi, "uses"],
  [/\butilized\b/gi, "used"],
  [/\butilize\b/gi, "use"],
  [/\benhancing\b/gi, "improving"],
  [/\benhances\b/gi, "improves"],
  [/\benhanced\b/gi, "improved"],
  [/\benhance\b/gi, "improve"],
];

function paraphraseRewrite(text) {
  if (!text || typeof text !== "string") return text;
  if (text.length <= 40) return text;

  let out = text;
  // Protect brand
  out = out.replace(/Video Caddy/gi, "§§VC§§");

  // Synonym-only rewrite — avoid clause shuffling (it mangled list items)
  for (const [re, rep] of SYNONYMS) {
    out = out.replace(re, rep);
  }

  out = out.replace(/§§VC§§/g, "Video Caddy");
  return out.replace(/\s+/g, " ").trim();
}

function rewriteDeep(value) {
  if (typeof value === "string") return paraphraseRewrite(value);
  if (Array.isArray(value)) return value.map(rewriteDeep);
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      // Skip non-copy fields
      if (
        ["slug", "label", "sourceUrl", "image", "backgroundImage", "href", "primaryCta", "secondaryCta", "cta", "placement", "eyebrow"].includes(
          k
        )
      ) {
        out[k] = v;
        continue;
      }
      if (k === "primaryCta" || k === "secondaryCta" || k === "cta") {
        out[k] = v;
        continue;
      }
      out[k] = rewriteDeep(v);
    }
    return out;
  }
  return value;
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
  const heroLocal = `/assets/images/storyboard/hero/${page.slug}.${heroExt}`;
  if (heroImgUrl) await downloadImage(heroImgUrl, path.join(root, "public", heroLocal.slice(1)));

  // Banner background
  let backgroundImage;
  const bgUrl = extractBannerBackground(html);
  const fallbackExists = fs.existsSync(path.join(root, "public", FALLBACK_BG.slice(1)));
  if (bgUrl) {
    const bgExt = localPath(bgUrl);
    const bgName = path.basename(bgUrl.split("?")[0]).replace(/\.(webp|jpg|jpeg|png)$/i, "");
    // If it's the shared cartoon-storyboard-bg and we already have it at root, reuse
    if (/cartoon-storyboard-bg-banner/i.test(bgUrl) && fallbackExists) {
      backgroundImage = FALLBACK_BG;
    } else if (!/banner-bg\.webp|service-main-bg/i.test(bgUrl)) {
      const bgLocal = `/assets/images/storyboard/bg/${bgName}.${bgExt}`;
      const saved = await downloadImage(bgUrl, path.join(root, "public", bgLocal.slice(1)));
      if (saved) backgroundImage = bgLocal;
    } else if (fallbackExists) {
      backgroundImage = FALLBACK_BG;
    }
  } else if (fallbackExists) {
    backgroundImage = FALLBACK_BG;
  }

  const rawServices = extractBoxServices(html);
  const services = [];
  for (let i = 0; i < rawServices.length; i++) {
    const s = rawServices[i];
    let image;
    if (s.imageUrl) {
      const ext = localPath(s.imageUrl);
      image = `/assets/images/storyboard/services/${page.slug}-${i}.${ext}`;
      await downloadImage(s.imageUrl, path.join(root, "public", image.slice(1)));
    }
    services.push({
      title: s.title,
      items: s.items,
      ...(image ? { image } : {}),
    });
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

  const whyImgUrl = extractWhyImage(html);
  let whyImage;
  if (whyImgUrl) {
    const ext = localPath(whyImgUrl);
    whyImage = `/assets/images/storyboard/why/${page.slug}.${ext}`;
    await downloadImage(whyImgUrl, path.join(root, "public", whyImage.slice(1)));
  }

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
      ...(backgroundImage ? { backgroundImage } : {}),
      primaryCta: { label: "Get Started Now", href: "/contact" },
      secondaryCta: { label: "Portfolio", href: "/portfolio" },
    },
    intro: extractIntro(html),
    servicesHeader,
    services: services.filter((s) => s.title && s.items?.length),
    why: {
      eyebrow: "WHY CHOOSE US",
      title: whyTitle.replace(/^WHY CHOOSE US\s*/i, ""),
      ...(whyImage ? { image: whyImage } : {}),
      items: whyItems,
    },
    process: extractProcess(html),
    midCta: extractMidCta(html),
    caseStudies: extractCaseStudies(html),
    faqs: extractFaqs(html),
  };

  return rewriteDeep(data);
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  fs.mkdirSync(path.join(imgRoot, "hero"), { recursive: true });
  fs.mkdirSync(path.join(imgRoot, "services"), { recursive: true });
  fs.mkdirSync(path.join(imgRoot, "bg"), { recursive: true });
  fs.mkdirSync(path.join(imgRoot, "why"), { recursive: true });

  const index = [];
  const failures = [];
  for (const page of PAGES) {
    try {
      const data = await scrapePage(page);
      fs.writeFileSync(path.join(outDir, `${page.slug}.json`), JSON.stringify(data, null, 2));
      index.push({ slug: page.slug, label: page.label, sourceUrl: page.url });
      console.log(
        `  OK ${page.slug} | services:${data.services.length} why:${data.why.items.length} faqs:${data.faqs.length} cases:${data.caseStudies.length} bg:${data.hero.backgroundImage || "-"}`
      );
    } catch (err) {
      console.error("  FAIL", page.slug, err.message);
      failures.push({ slug: page.slug, error: err.message });
    }
  }
  fs.writeFileSync(path.join(outDir, "_index.json"), JSON.stringify(index, null, 2));
  console.log("Done:", index.length, "failures:", failures.length);
  if (failures.length) console.log(JSON.stringify(failures, null, 2));
}

main();
