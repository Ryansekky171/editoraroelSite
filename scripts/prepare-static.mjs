import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const site = path.join(root, "site");

await rm(site, { recursive: true, force: true });
await mkdir(site, { recursive: true });
await cp(dist, site, { recursive: true });

const indexPath = path.join(site, "index.html");
const indexHtml = await readFile(indexPath, "utf8");
await writeFile(path.join(site, "404.html"), indexHtml);

await writeFile(path.join(site, "_redirects"), "/* /index.html 200\n", "utf8");

console.log(`Pasta estática preparada em: ${site}`);
