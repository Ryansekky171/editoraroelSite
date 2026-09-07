# Validação da versão exportada

## Resultado

A versão foi reconstruída em um diretório vazio, com instalação realizada exclusivamente pelo `pnpm-lock.yaml`. A verificação TypeScript, o build Vite, a preparação estática, a auditoria de assets e os testes HTTP foram concluídos sem erro.

| Verificação                          | Resultado                            |
| ------------------------------------ | ------------------------------------ |
| Instalação limpa com lockfile        | Aprovada                             |
| TypeScript estrito                   | Aprovado                             |
| Build de produção                    | Aprovado                             |
| Assets compilados                    | 10 imagens e 2 fontes locais         |
| Referências ao Manus ou Google Fonts | Nenhuma                              |
| Rotas HTTP testadas                  | 10 de 10 aprovadas                   |
| Falhas de rede ou console            | Nenhuma                              |
| Página inicial em desktop            | Aprovada visualmente                 |
| Página inicial em celular            | Aprovada visualmente                 |
| Catálogo em desktop                  | Aprovado visualmente, com oito capas |

A inspeção visual confirmou que a identidade, o fundo branco, as capas, a ilustração principal, os cards, o cabeçalho e o rodapé foram preservados. Não foram observados cortes, sobreposições, imagens ausentes ou perda de tipografia.

## Comando de reprodução

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build:static
pnpm verify
pnpm test:routes
```

## Referências

[1]: https://vite.dev/guide/build.html "Build de produção do Vite"
[2]: https://www.typescriptlang.org/docs/ "Documentação do TypeScript"
