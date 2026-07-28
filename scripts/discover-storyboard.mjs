/**
 * Discover Storyboard pages from the reference site.
 * Run: node scripts/discover-storyboard.mjs
 */
import https from "node:https";

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          fetchText(new URL(res.headers.location, url).href).then(resolve).catch(reject);
          return;
        }
        let d = "";
        res.on("data", (c) => (d += c));
        res.on("end", () => resolve(d));
      })
      .on("error", reject);
  });
}

const html = await fetchText("https://www.videocaddy.com/storyboard/");
const links = [
  ...new Set(
    [...html.matchAll(/href=["'](https?:\/\/www\.videocaddy\.com\/storyboard\/[^"'#?]+|\/storyboard\/[^"'#?]+)["']/gi)].map(
      (m) => {
        const raw = m[1];
        return raw.startsWith("http") ? raw : `https://www.videocaddy.com${raw}`;
      }
    )
  ),
];

console.log("FOUND", links.length);
links.forEach((l) => console.log(l));

// Also scan main nav mega menu if present on homepage
const home = await fetchText("https://www.videocaddy.com/");
const storyLinks = [
  ...new Set(
    [...home.matchAll(/href=["']([^"']*storyboard[^"']*)["']/gi)]
      .map((m) => m[1])
      .filter((h) => /storyboard/i.test(h) && !h.includes("#"))
      .map((h) => (h.startsWith("http") ? h : `https://www.videocaddy.com${h.startsWith("/") ? "" : "/"}${h}`))
  ),
];
console.log("\nHOME STORYBOARD LINKS", storyLinks.length);
storyLinks.forEach((l) => console.log(l));
