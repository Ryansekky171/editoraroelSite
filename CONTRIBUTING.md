# Como contribuir

Este repositório é de uso interno da Editora ROEL. Mudanças devem ser realizadas em branch separada e revisadas antes da integração.

## Fluxo recomendado

1. Crie uma branch com nome descritivo, como `feature/novo-livro` ou `fix/menu-mobile`.
2. Faça alterações pequenas e relacionadas a uma única finalidade.
3. Execute `pnpm check`, `pnpm build:static` e `pnpm verify`.
4. Revise as páginas em desktop e celular.
5. Abra uma solicitação de mudança com resumo, evidências visuais e riscos conhecidos.

## Padrões

Use TypeScript estrito. Preserve o fundo branco e o sistema visual da marca. Mantenha textos em português do Brasil. Não inclua credenciais, dados pessoais, arquivos temporários ou dependências sem necessidade.

## Conteúdo editorial

Alterações em títulos, sinopses, capas, informações institucionais, privacidade e integridade exigem validação da Editora ROEL.

## Referências

[1]: https://docs.github.com/pull-requests "Documentação de pull requests do GitHub"
[2]: https://www.conventionalcommits.org/pt-br/ "Conventional Commits"
