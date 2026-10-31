# NavegaSeguro

Plataforma educativa gratuita sobre segurança digital, construída com Vue 3, TypeScript e Vite. Não exige cadastro, não possui anúncios e usa `localStorage` apenas para progresso e checklist no navegador.

## Desenvolvimento

```bash
npm install
npm run dev
```

Para validar a produção: `npm run build`.

## Publicação

O build gera `dist/`, compatível com Cloudflare Pages (build command `npm run build`, output `dist`) ou GitHub Pages. A publicação e a URL pública dependem de credenciais e permissões do responsável pelo repositório.

## Estrutura

- `src/data.ts`: módulos e perguntas estáticas.
- `src/views/`: páginas da aplicação.
- `src/composables.ts`: progresso e checklist persistidos localmente.
- `docs/extensao/`: documentação acadêmica base.
