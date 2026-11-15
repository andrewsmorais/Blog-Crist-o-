// Usado só na hora do build: gera o HTML de cada página para o Google ler sem precisar rodar JavaScript.
import { renderToString } from 'react-dom/server';
import App, { allArticlesData } from './App.jsx';

export function render(path) {
  return renderToString(<App ssrPath={path} />);
}

export { allArticlesData };
