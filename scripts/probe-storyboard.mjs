/**
 * Probe known Storyboard URLs + scrape pages.
 * Run: node scripts/scrape-storyboard.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import https from "node:https";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outDir = path.join(root, "src", "data", "storyboard", "pages");
const imgRoot = path.join(root, "public", "assets", "images", "storyboard");

const CANDIDATES = [
  { slug: "cartoon", url: "https://www.videocaddy.com/storyboard/cartoon-storyboard.php", label: "Cartoon Storyboard" },
  { slug: "character-creation", url: "https://www.videocaddy.com/storyboard/character-creation.php", label: "Character Creation" },
  { slug: "comic-book", url: "https://www.videocaddy.com/storyboard/comic-book.php", label: "Comic Book Storyboard" },
  { slug: "elearning", url: "https://www.videocaddy.com/storyboard/e-learning-storyboard.php", label: "eLearning Storyboard" },
  { slug: "illustration", url: "https://www.videocaddy.com/storyboard/illustration.php", label: "Illustration Storyboard" },
  { slug: "photomatic", url: "https://www.videocaddy.com/storyboard/photomatic-storyboard.php", label: "Photomatic Storyboard" },
  { slug: "animatics", url: "https://www.videocaddy.com/storyboard/animatic-services.php", label: "Storyboard Animatics" },
  { slug: "video-game", url: "https://www.videocaddy.com/storyboard/video-game.php", label: "Video Game Storyboard" },
  // landing
  { slug: "index", url: "https://www.videocaddy.com/storyboard/", label: "Storyboard Services" },
];

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { "User-Agent": "Mozilla/5.0 (compatible; VideoCaddyClone/1.0)" } },
      (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchText(new URL(res.headers.location, url).href).then(resolve).catch(reject);
          return;
        }
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve({ status: res.statusCode || 0, html: d, url }));
      }
    );
    req.on("error", reject);
  });
}

async function probe() {
  const ok = [];
  for (const page of CANDIDATES) {
    try {
      const { status, html, url } = await fetchText(page.url);
      const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [, ""])[1].replace(/<[^>]+>/g, "").trim();
      const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [, ""])[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
      console.log(status, page.slug, "|", h1.slice(0, 60) || title.slice(0, 60));
      if (status === 200 && !/404|not found/i.test(title + h1)) {
        ok.push({ ...page, finalUrl: url });
      }
    } catch (e) {
      console.log("ERR", page.slug, e.message);
    }
  }
  return ok;
}

const pages = await probe();
console.log("\nOK PAGES", pages.length);
pages.forEach((p) => console.log("-", p.slug, p.finalUrl));
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "_discovered.json"), JSON.stringify(pages, null, 2));
