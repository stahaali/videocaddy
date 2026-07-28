/**
 * Light post-scrape polish for animation JSON copy.
 * Run: node scripts/polish-animation-json.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "src",
  "data",
  "animation",
  "pages"
);

const fixes = [
  [/supports every ([a-z])/gi, (_, c) => `ensures every ${c}`],
  [/supporting every animation is shaped/gi, "ensuring every animation is shaped"],
  [/supporting every logo animation strictly/gi, "ensuring every logo animation strictly"],
  [/supporting every delivery is/gi, "ensuring every delivery is"],
  [/supporting every panel /gi, "ensuring every panel "],
  [/"provide /g, '"Provide '],
  [/"organized /g, '"Organized '],
  [/AI - assisted/g, "AI-assisted"],
  [/videos \./g, "videos."],
  [/around it's core/gi, "around its core"],
];

let n = 0;
for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json") && !x.startsWith("_"))) {
  const p = path.join(dir, f);
  let s = fs.readFileSync(p, "utf8");
  const orig = s;
  for (const [re, rep] of fixes) s = s.replace(re, rep);
  if (s !== orig) {
    fs.writeFileSync(p, s);
    n++;
    console.log("fixed", f);
  }
}
console.log("files fixed", n);
