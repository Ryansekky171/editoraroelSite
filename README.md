# Site da Editora ROEL

Repositório do site institucional e do catálogo da **Editora ROEL**. O projeto utiliza React, TypeScript e Vite. Imagens, capas, logotipo e fontes estão armazenados localmente e entram no build com caminhos versionados.

## Início rápido

O ambiente recomendado é **Node.js 20.11 ou superior** com **pnpm 10**.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

O servidor de desenvolvimento abrirá em `http://localhost:3000`.

## Comandos

| Comando             | Finalidade                                                  |
| ------------------- | ----------------------------------------------------------- |
| `pnpm dev`          | Inicia o ambiente de desenvolvimento.                       |
| `pnpm check`        | Executa a verificação estrita do TypeScript.                |
| `pnpm build`        | Gera o build otimizado em `dist/`.                          |
| `pnpm build:static` | Gera `dist/` e prepara a versão portátil em `site/`.        |
| `pnpm verify`       | Valida assets, fontes, referências e independência externa. |
| `pnpm test:routes`  | Serve e testa as rotas e os arquivos essenciais do build.   |
| `pnpm start`        | Serve a pasta `site/` com fallback para rotas internas.     |
| `pnpm format`       | Formata os arquivos do repositório.                         |

## Estrutura

```text
.
├── .github/workflows/   # integração contínua
├── deploy/              # exemplos de configuração de servidor
├── docs/                # implantação, arquitetura e licenças de fontes
├── public/              # favicon, manifesto, robots e redirects
├── scripts/             # preparação, servidor e validação do build
├── site/                # build estático pronto para upload
├── src/
│   ├── assets/          # imagens e fontes incorporadas pelo Vite
│   ├── components/      # componentes compartilhados
│   ├── pages/           # páginas institucionais e catálogo
│   ├── App.tsx          # roteamento
│   ├── content.ts       # catálogo e dados centrais
│   └── index.css        # sistema visual responsivo
├── index.html
├── package.json
└── vite.config.ts
```

## Rotas

| Caminho        | Conteúdo                        |
| -------------- | ------------------------------- |
| `/`            | Página inicial.                 |
| `/catalogo`    | Catálogo completo.              |
| `/livro/:slug` | Detalhe de cada livro.          |
| `/historia`    | História institucional.         |
| `/solucoes`    | Serviços e soluções editoriais. |
| `/impacto`     | Impacto social.                 |
| `/contato`     | Formulário de contato.          |
| `/privacidade` | Aviso de privacidade.           |
| `/integridade` | Canal de integridade.           |

## Build portátil

```bash
pnpm build:static
pnpm verify
pnpm test:routes
pnpm start
```

A pasta `site/` pode ser enviada diretamente para uma hospedagem estática. O pacote inclui `404.html` e `_redirects` para preservar as rotas de aplicação de página única, também chamadas de **SPA**.

## Domínio e subdiretórios

Em domínio próprio, mantenha `VITE_BASE_PATH=/`. Para publicar em subdiretório, copie `.env.example` para `.env.production` e informe o caminho:

```env
VITE_BASE_PATH=/nome-do-repositorio/
```

Depois, execute novamente `pnpm build:static`.

## Formulários

O site é inteiramente estático. O formulário de contato abre o aplicativo de e-mail do visitante. Para recebimento direto sem abrir outro aplicativo, será necessário conectar um serviço de formulários ou uma API própria.

## Direitos e licenças

O código, o conteúdo editorial, o logotipo, as capas e as ilustrações da Editora ROEL são proprietários. Consulte `LICENSE.md`. As fontes Fraunces e Nunito são distribuídas sob a SIL Open Font License; os textos das licenças estão em `docs/licenses/`.

## Referências

[1]: https://react.dev/ "Documentação oficial do React"
[2]: https://vite.dev/guide/ "Guia oficial do Vite"
[3]: https://github.com/molefrog/wouter "Repositório oficial do Wouter"
[4]: https://pnpm.io/ "Documentação oficial do pnpm"
