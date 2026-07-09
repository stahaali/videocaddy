import sharp from "sharp";
import { readdir, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const IMAGES_DIR = join(process.cwd(), "public", "assets", "images");
const SKIP_EXT = new Set([".svg", ".webp"]);
const CONVERT_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function optimizeFile(filePath, fileName) {
  const ext = extname(fileName).toLowerCase();
  if (SKIP_EXT.has(ext)) return;

  const base = basename(fileName, ext);
  const outPath = join(IMAGES_DIR, `${base}.webp`);

  if (CONVERT_EXT.has(ext)) {
    const meta = await sharp(filePath).metadata();
    const maxWidth = meta.width > 1920 ? 1920 : meta.width;

    await sharp(filePath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(outPath);

    if (ext !== ".webp") {
      await unlink(filePath);
      console.log(`Converted: ${fileName} -> ${base}.webp`);
    }
    return;
  }

  // Re-compress existing large webp files (>100KB)
  const stats = await import("fs/promises").then((fs) => fs.stat(filePath));
  if (ext === ".webp" && stats.size > 100000) {
    const tmpPath = join(IMAGES_DIR, `${base}.tmp.webp`);
    await sharp(filePath)
      .webp({ quality: 80, effort: 4 })
      .toFile(tmpPath);
    await unlink(filePath);
    await import("fs/promises").then((fs) => fs.rename(tmpPath, filePath));
    console.log(`Recompressed: ${fileName}`);
  }
}

const files = await readdir(IMAGES_DIR);
for (const file of files) {
  if (file === "mock") continue;
  const filePath = join(IMAGES_DIR, file);
  try {
    await optimizeFile(filePath, file);
  } catch (err) {
    console.error(`Error processing ${file}:`, err.message);
  }
}

// Remove accidental large reference screenshot
try {
  await unlink(join(IMAGES_DIR, "1.png"));
  console.log("Removed 1.png (reference screenshot)");
} catch {
  /* ignore */
}

console.log("Done.");
