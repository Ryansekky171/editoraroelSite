import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const site = path.join(root, "site");
const errors = [];

async function walk(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...(await walk(full)));
    else result.push(full);
  }
  return result;
}

for (const required of [
  "index.html",
  "404.html",
  "_redirects",
  "favicon.webp",
  "site.webmanifest",
]) {
  try {
    await access(path.join(site, required));
  } catch {
    errors.push(`Arquivo ausente: site/${required}`);
  }
}

const files = await walk(site);
const textFiles = files.filter((file) => /\.(?:html|css|js|json|map|txt)$/.test(file));
let bundleText = "";
for (const file of textFiles) bundleText += `\n${await readFile(file, "utf8")}`;

for (const forbidden of [
  "/manus-storage/",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
  "vite-plugin-manus-runtime",
]) {
  if (bundleText.includes(forbidden))
    errors.push(`Referência externa proibida encontrada: ${forbidden}`);
}

// Descobre o base path real a partir do próprio index.html buildado (ex: "/editoraroelSite/"),
// em vez de assumir que o site sempre foi publicado na raiz "/".
const indexHtml = await readFile(path.join(site, "index.html"), "utf8");
const firstAssetRef = [...indexHtml.matchAll(/(?:src|href)="(\/[^"#]*\/assets\/[^"#]+)"/g)][0];
let basePrefix = "/";
if (firstAssetRef) {
  const match = firstAssetRef[1].match(/^(\/[^"]*\/)assets\//);
  if (match) basePrefix = match[1];
}

const references = [...indexHtml.matchAll(/(?:src|href)="([^"#]+)"/g)].map((match) => match[1]);
for (const reference of references) {
  if (/^(?:https?:|mailto:|tel:|data:)/.test(reference)) continue;
  let relative = reference.replace(/^\//, "");
  if (basePrefix !== "/" && reference.startsWith(basePrefix)) {
    relative = reference.slice(basePrefix.length);
  }
  try {
    await access(path.join(site, relative));
  } catch {
    errors.push(`Referência quebrada em index.html: ${reference}`);
  }
}

const assetFiles = files.filter((file) => file.includes(`${path.sep}assets${path.sep}`));
const imageCount = assetFiles.filter((file) => /\.(?:png|webp)$/.test(file)).length;
const fontCount = assetFiles.filter((file) => /\.woff2$/.test(file)).length;
if (imageCount !== 10) errors.push(`Esperadas 10 imagens compiladas; encontradas ${imageCount}.`);
if (fontCount !== 2) errors.push(`Esperadas 2 fontes compiladas; encontradas ${fontCount}.`);

for (const file of files) {
  const info = await stat(file);
  if (info.size === 0) errors.push(`Arquivo vazio: ${path.relative(root, file)}`);
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join("\n"));
  process.exit(1);
}

console.log(
  JSON.stringify(
    { status: "ok", files: files.length, images: imageCount, fonts: fontCount },
    null,
    2,
  ),
);
