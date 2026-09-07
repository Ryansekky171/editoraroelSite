import { createServer } from "node:http";
import { stat, readFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(process.argv[2] || "site");
const port = Number(process.argv[3] || process.env.PORT || 4173);
const mime = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
};

function safePath(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]).replace(/^\/+/, "");
  const resolved = path.resolve(root, clean);
  return resolved.startsWith(root) ? resolved : path.join(root, "index.html");
}

createServer(async (request, response) => {
  let target = safePath(request.url || "/");

  try {
    const info = await stat(target);
    if (info.isDirectory()) target = path.join(target, "index.html");
  } catch {
    target = path.join(root, "index.html");
  }

  try {
    const body = await readFile(target);
    response.writeHead(200, {
      "Content-Type": mime[path.extname(target)] || "application/octet-stream",
      "Cache-Control": target.endsWith("index.html")
        ? "no-cache"
        : "public, max-age=31536000, immutable",
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Arquivo não encontrado.");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Editora ROEL: http://localhost:${port}`);
});
