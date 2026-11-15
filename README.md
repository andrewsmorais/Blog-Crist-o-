# Soli Deo Gloria — sdgloria.com.br

Blog cristão feito em React + Vite, publicado na Vercel.

## Como o site é gerado

`npm run build` faz três coisas:

1. Monta o site normal (`vite build`).
2. Monta uma versão "servidor" do app (`dist-server/`).
3. Roda `scripts/prerender.mjs`, que cria **um arquivo HTML pronto para cada página**
   (com título, descrição, canonical, imagem de compartilhamento e dados estruturados próprios),
   uma página `404.html` de verdade e o `sitemap.xml` com todas as páginas.

Assim o Google, o AdSense e as IAs leem o texto dos artigos direto no HTML.

## Ao publicar um artigo novo

- Crie a página no `src/App.jsx` como as outras (`const isNomeDoArtigo = path === '/endereco'` e o bloco `) : isNomeDoArtigo ? (`).
- O sitemap é criado sozinho no build — **não precisa editar sitemap à mão**.
- Se adicionou imagens novas em `public/`, rode `npm run images` (cria a versão `.webp` leve) e use o `.webp` no artigo.
- Ao final do build, se aparecer "⚠ Atenção", alguma página do código está abrindo a 404.
