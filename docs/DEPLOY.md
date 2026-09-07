# Guia de implantação

## Visão geral

O site pode ser publicado como aplicação Vite ou como conjunto de arquivos estáticos. A forma mais simples é gerar a pasta `site/` e enviar seu conteúdo à hospedagem.

## Preparação

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build:static
pnpm verify
```

## Domínio próprio

Use `VITE_BASE_PATH=/`. Publique o conteúdo da pasta `site/` na raiz pública do domínio. Configure a hospedagem para devolver `index.html` quando uma rota não corresponder a um arquivo físico.

## Netlify

O arquivo `netlify.toml` já aponta a publicação para `site/` e configura o fallback de rotas. O build recomendado é `pnpm build:static`.

## Vercel

O arquivo `vercel.json` configura o build e o fallback para `index.html`. Não é necessário criar um backend.

## GitHub Pages

Defina o caminho do repositório antes do build:

```bash
VITE_BASE_PATH=/nome-do-repositorio/ pnpm build:static
```

Publique o conteúdo de `site/`. O arquivo `404.html` reduz falhas ao abrir rotas internas diretamente.

## Nginx

Use `deploy/nginx.conf.example` como referência. A regra essencial é `try_files $uri $uri/ /index.html;`.

## Hospedagem por FTP ou painel

Envie **o conteúdo interno** de `site/`, e não a pasta-mãe inteira. Confirme que `index.html`, `assets/`, `favicon.webp`, `site.webmanifest` e `robots.txt` ficaram na raiz pública.

## Verificação posterior

Abra a página inicial, o catálogo, um livro, o contato e uma rota digitada diretamente no navegador. Confirme também que não existem respostas 404 para arquivos em `assets/`.

## Referências

[1]: https://vite.dev/guide/static-deploy.html "Implantação de site estático com Vite"
[2]: https://docs.netlify.com/routing/redirects/ "Redirecionamentos no Netlify"
[3]: https://vercel.com/docs/rewrites "Rewrites no Vercel"
[4]: https://docs.github.com/pages "Documentação do GitHub Pages"
[5]: https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files "Diretiva try_files do Nginx"
