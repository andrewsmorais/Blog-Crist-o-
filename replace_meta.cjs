const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Function to replace based on URL
// Wait, the meta in the grid is usually right under the <p> or <h3> or <img /> inside an <a> tag.
// And inside the articles, it's inside <div className="article-header">.

// Let's do a more robust approach. We can manually specify the replacements.

const replacements = [
  // isGalatas
  { old: `<div className="article-meta">Por <strong>João Calvino</strong> | 30 de Maio, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Gálatas 5:1</div>` },
  // isCincoSolas
  { old: `<div className="article-meta">Por <strong>João Calvino</strong> | 05 de Junho, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Romanos 1:17</div>` },
  // isProvisao
  { old: `<div className="article-meta">Por <strong>João Calvino</strong> | 12 Jun, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Filipenses 4:19</div>` },
  // isEster
  { old: `<div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 24 Jun, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Ester 4:14</div>` },
  // isDavi
  { old: `<div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 24 Jun, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> 1 Samuel 16</div>` },
  // isAna
  { old: `<div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 25 Jun, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> 1 Samuel 1</div>` },
  // Testemunhos
  { old: `<div className="article-meta">Por <strong>João Calvino</strong> | 25 Jun, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Salmos e Hebreus</div>` },
  // isAhJesus
  { old: `<div className="article-meta">Por <strong>João Calvino</strong> | 12 Jun, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Tiago 4:6</div>` },
  // isPregacaoSpurgeon
  { old: `<div className="article-meta">Por <strong>Charles Spurgeon</strong> | 10 Abr, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Efésios 2:8</div>` },
  // isPauloTarso
  { old: `<div className="article-meta">Por <strong>João Calvino</strong> | 18 Abr, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Atos 9:15</div>` },
  // isSamuel
  { old: `<div className="article-meta">Por <strong>João Calvino</strong> | 14 Mar, 2026</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> 1 Samuel 3:10</div>` },
  // isJo
  { old: `<div className="article-meta">Por <strong>João Calvino</strong> | 26 Dez, 2025</div>`, new: `<div className="article-meta">📖 <strong>Texto Base:</strong> Jó 42:2</div>` }
];

replacements.forEach(r => {
  content = content.replace(new RegExp(r.old, 'g'), r.new);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacing article-meta');
