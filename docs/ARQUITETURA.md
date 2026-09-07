# Arquitetura do projeto

## Organização

O projeto é uma aplicação React de página única compilada pelo Vite. O Wouter controla as rotas no navegador. Não existe banco de dados, autenticação ou serviço de backend.

| Área              | Responsabilidade                                        |
| ----------------- | ------------------------------------------------------- |
| `src/content.ts`  | Catálogo, textos curtos, e-mails e caminhos dos assets. |
| `src/pages/`      | Composição das páginas públicas.                        |
| `src/components/` | Cabeçalho, rodapé e cartões reutilizáveis.              |
| `src/index.css`   | Paleta, tipografia, responsividade e animações.         |
| `src/assets/`     | Imagens e fontes incorporadas pelo build.               |
| `public/`         | Arquivos copiados sem transformação.                    |
| `scripts/`        | Preparação e validação do build estático.               |

## Atualização de livros

Adicione a capa em `src/assets/images/`. Importe o arquivo no início de `src/content.ts`. Depois, crie um novo objeto no array `books`, com `slug` único, título, tema, coleção, cor, imagem e sinopse.

## Caminho-base

O Vite gera todos os caminhos de acordo com `VITE_BASE_PATH`. A mesma base é enviada ao Wouter para que a navegação funcione quando o site estiver hospedado em um subdiretório.

## Assets

As imagens e fontes em `src/assets/` recebem nomes com hash no build. Essa estratégia evita cache obsoleto após uma atualização. O favicon e os metadados ficam em `public/` porque precisam manter nomes previsíveis.

## Formulário

O formulário cria uma mensagem `mailto:` no navegador. Ele não armazena dados. Qualquer integração futura com serviço externo deverá incluir validação, proteção contra abuso, aviso de privacidade e política de retenção.

## Referências

[1]: https://vite.dev/guide/assets.html "Tratamento de assets estáticos no Vite"
[2]: https://github.com/molefrog/wouter "Roteamento Wouter"
[3]: https://react.dev/learn "Arquitetura de componentes React"
