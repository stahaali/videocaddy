/**
 * Discover Animation subpages from videocaddy.com and probe candidate URLs.
 * Run: node scripts/discover-animation.mjs
 */
const HOME = "https://www.videocaddy.com/";
const LANDING = "https://www.videocaddy.com/animation/";

const NAV_LABELS = [
  "3D Engineering Animation",
  "Animated Product Advertisement",
  "2D Animation",
  "3D Animation",
  "3D Product Animation",
  "Architecture Animation",
  "Character Animation",
  "Cutout Animation",
  "Explainer Video Animation",
  "Feature Film Animation",
  "Flash Animation",
  "Logo Animation",
  "Machine Assembly Animation",
  "Product Animation",
  "Rotoscoping Animation",
  "Titling Animation",
  "Whiteboard Animation",
  "Stop Motion Animation",
  "TV Commercial Animation",
  "Medical Animation",
];

function slugify(label) {
  return label
    .toLowerCase()
    .replace(/3d/g, "3d")
    .replace(/2d/g, "2d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; VideoCaddyClone/1.0)" },
    redirect: "follow",
  });
  return { status: res.status, url: res.url, html: res.ok ? await res.text() : "" };
}

function extractAnimationHrefs(html) {
  const out = new Set();
  const re = /href=["']([^"']*\/animation\/[^"']+)["']/gi;
  let m;
  while ((m = re.exec(html))) {
    let href = m[1];
    if (href.startsWith("/")) href = HOME.replace(/\/$/, "") + href;
    if (href.includes("#") || href.includes("mailto:")) continue;
    out.add(href.split("#")[0]);
  }
  return [...out].sort();
}

async function probe(url) {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      headers: { "User-Agent": "Mozilla/5.0 (compatible; VideoCaddyClone/1.0)" },
      redirect: "follow",
    });
    // some hosts block HEAD
    if (res.status === 405 || res.status === 403) {
      const g = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (compatible; VideoCaddyClone/1.0)" },
        redirect: "follow",
      });
      return { status: g.status, final: g.url };
    }
    return { status: res.status, final: res.url };
  } catch (e) {
    return { status: 0, error: e.message };
  }
}

async function main() {
  const landing = await fetchText(LANDING);
  const home = await fetchText(HOME);
  const fromLanding = extractAnimationHrefs(landing.html);
  const fromHome = extractAnimationHrefs(home.html);
  const discovered = [...new Set([...fromLanding, ...fromHome])].sort();
  console.log("Discovered from HTML:", discovered.length);
  discovered.forEach((u) => console.log(" ", u));

  const candidates = [];
  for (const label of NAV_LABELS) {
    const base = slugify(label);
    const guesses = [
      `${LANDING}${base}.php`,
      `${LANDING}${base.replace(/-animation$/, "")}.php`,
      `${LANDING}${base.replace(/-animation$/, "")}-animation.php`,
      `${LANDING}${base.replace(/^3d-/, "3d-").replace(/-animation$/, "")}.php`,
    ];
    // known special cases
    if (label === "Animated Product Advertisement") {
      guesses.unshift(`${LANDING}animated-product-advertisement.php`);
    }
    if (label === "3D Product Animation") guesses.unshift(`${LANDING}3d-product-animation.php`);
    if (label === "Product Animation") guesses.unshift(`${LANDING}product.php`);
    if (label === "Feature Film Animation") guesses.unshift(`${LANDING}feature-film.php`);
    if (label === "Explainer Video Animation") {
      guesses.unshift(`${LANDING}explainer-video.php`, `${LANDING}explainer.php`);
    }
    if (label === "Titling Animation") {
      guesses.unshift(`${LANDING}title-animation.php`, `${LANDING}titling.php`, `${LANDING}titling-animation.php`);
    }
    if (label === "TV Commercial Animation") {
      guesses.unshift(`${LANDING}tv-commercial.php`, `${LANDING}tv-commercial-animation.php`);
    }
    if (label === "3D Engineering Animation") {
      guesses.unshift(`${LANDING}3d-engineering-animation.php`, `${LANDING}engineering.php`);
    }
    if (label === "Machine Assembly Animation") {
      guesses.unshift(`${LANDING}machine-assembly.php`, `${LANDING}machine-assembly-animation.php`);
    }
    if (label === "Stop Motion Animation") {
      guesses.unshift(`${LANDING}stop-motion.php`, `${LANDING}stop-motion-animation.php`);
    }
    if (label === "Whiteboard Animation") {
      guesses.unshift(`${LANDING}whiteboard.php`, `${LANDING}whiteboard-animation.php`);
    }
    if (label === "Character Animation") {
      guesses.unshift(`${LANDING}character.php`, `${LANDING}character-animation.php`);
    }
    if (label === "Logo Animation") {
      guesses.unshift(`${LANDING}logo.php`, `${LANDING}logo-animation.php`);
    }
    if (label === "Medical Animation") {
      guesses.unshift(`${LANDING}medical.php`, `${LANDING}medical-animation.php`);
    }
    if (label === "Architecture Animation") {
      guesses.unshift(`${LANDING}architecture.php`, `${LANDING}architecture-animation.php`);
    }
    if (label === "Cutout Animation") {
      guesses.unshift(`${LANDING}cutout.php`, `${LANDING}cutout-animation.php`);
    }
    if (label === "Flash Animation") {
      guesses.unshift(`${LANDING}flash.php`, `${LANDING}flash-animation.php`);
    }
    if (label === "Rotoscoping Animation") {
      guesses.unshift(`${LANDING}rotoscoping.php`, `${LANDING}rotoscope.php`);
    }
    if (label === "2D Animation") guesses.unshift(`${LANDING}2d.php`, `${LANDING}2d-animation.php`);
    if (label === "3D Animation") guesses.unshift(`${LANDING}3d.php`, `${LANDING}3d-animation.php`);

    candidates.push({ label, guesses: [...new Set(guesses)] });
  }

  const resolved = [];
  for (const { label, guesses } of candidates) {
    let found = null;
    for (const g of guesses) {
      const r = await probe(g);
      if (r.status === 200) {
        found = { label, url: r.final || g, status: r.status };
        break;
      }
    }
    // also match against discovered
    if (!found) {
      const slug = slugify(label);
      const hit = discovered.find(
        (u) =>
          u.includes(slug) ||
          u.includes(slug.replace(/-animation$/, "")) ||
          (label === "Product Animation" && /\/product\.php/.test(u))
      );
      if (hit) found = { label, url: hit, status: 200 };
    }
    console.log(found ? `OK  ${label} -> ${found.url}` : `MISS ${label}`);
    if (found) resolved.push(found);
  }

  // include landing
  resolved.unshift({ label: "Animation Services", url: LANDING, status: 200 });

  // merge any discovered not in resolved
  for (const u of discovered) {
    if (!resolved.some((r) => r.url.replace(/\/$/, "") === u.replace(/\/$/, ""))) {
      const name = u.split("/").pop().replace(/\.php$/, "") || "index";
      resolved.push({ label: name, url: u, status: 200, extra: true });
      console.log("EXTRA", u);
    }
  }

  console.log("\nTOTAL", resolved.length);
  console.log(JSON.stringify(resolved, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
