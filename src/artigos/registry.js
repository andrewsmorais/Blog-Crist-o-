// Registro dos artigos novos. Para publicar um artigo: crie src/artigos/<slug>.jsx
// exportando `meta` (dados do artigo) e o componente padrão (corpo do texto).
// Ele aparece sozinho na página inicial, na categoria, nos relacionados e no sitemap.
const modules = import.meta.glob('./*.jsx', { eager: true });

export const CATEGORY_LINKS = {
  'Estudos Bíblicos': '/estudos-biblicos',
  Devocionais: '/devocionais',
  'Personagens Bíblicos': '/personagens-biblicos',
  Testemunhos: '/testemunhos',
  Notícias: '/noticias',
};

export const novosArtigos = Object.entries(modules)
  .filter(([, mod]) => mod.meta && mod.default)
  .map(([file, mod]) => {
    const slug = file.replace('./', '').replace('.jsx', '');
    return {
      ...mod.meta,
      slug,
      link: '/' + slug,
      image: `/capas/${slug}.webp`,
      Body: mod.default,
    };
  })
  .sort((a, b) => (b.dateISO + b.slug).localeCompare(a.dateISO + a.slug));
