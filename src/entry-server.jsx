// Usado só na hora do build: gera o HTML de cada página para o Google ler sem precisar rodar JavaScript.
import { renderToString } from 'react-dom/server';
import App, { allArticlesData } from './App.jsx';
import { novosArtigos } from './artigos/registry.js';

export function render(path) {
  return renderToString(<App ssrPath={path} />);
}

export { allArticlesData };
// O corpo (componente) não é serializável; o prerender só precisa dos dados.
export const artigosNovos = novosArtigos.map(({ Body, ...meta }) => meta);
