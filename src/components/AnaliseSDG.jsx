// Mostra a seção "Análise do Soli Deo Gloria" do artigo, se existir um arquivo
// em src/analises/<endereco-do-artigo>.jsx. Basta criar o arquivo: ela aparece sozinha.
const modules = import.meta.glob('../analises/*.jsx', { eager: true });
const analises = Object.fromEntries(
  Object.entries(modules).map(([file, mod]) => [file.split('/').pop().replace('.jsx', ''), mod.default])
);

export default function AnaliseSDG({ slug }) {
  const Analise = analises[slug];
  return Analise ? <Analise /> : null;
}
