import { spawn } from "node:child_process";

const port = 4174;
const origin = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, ["scripts/serve.mjs", "site", String(port)], {
  stdio: "ignore",
});

const routes = [
  "/",
  "/catalogo",
  "/historia",
  "/solucoes",
  "/impacto",
  "/contato",
  "/privacidade",
  "/integridade",
  "/livro/o-menino-que-via-o-mundo-diferente",
  "/livro/a-menina-das-ideias-brilhantes",
];

async function waitForServer() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // O processo ainda está iniciando.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("O servidor de teste não iniciou.");
}

try {
  await waitForServer();

  for (const route of routes) {
    const response = await fetch(`${origin}${route}`);
    const html = await response.text();
    if (!response.ok || !html.includes('id="root"')) {
      throw new Error(`Falha na rota ${route}: HTTP ${response.status}`);
    }
  }

  const index = await (await fetch(origin)).text();
  const assets = [...index.matchAll(/(?:src|href)="([^"#]+)"/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith("/assets/") || url.endsWith(".webp"));

  for (const asset of assets) {
    const response = await fetch(`${origin}${asset}`);
    const body = await response.arrayBuffer();
    if (!response.ok || body.byteLength === 0) {
      throw new Error(`Falha no asset ${asset}: HTTP ${response.status}`);
    }
  }

  console.log(
    JSON.stringify({ status: "ok", routes: routes.length, entryAssets: assets.length }, null, 2),
  );
} finally {
  server.kill("SIGTERM");
}
