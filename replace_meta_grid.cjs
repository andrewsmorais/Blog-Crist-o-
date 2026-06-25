const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  // Grid
  { old: `<div className="meta">26 Dez, 2025</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Jó 42:2</div>` },
  { old: `<div className="meta">30 Mai, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Gálatas 5:1</div>` },
  { old: `<div className="meta">por João Calvino · 14 Mar, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> 1 Samuel 3:10</div>` },
  { old: `<div className="meta">10 Abr, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Efésios 2:8</div>` },
  { old: `<div className="meta">por Charles Spurgeon · 10 Abr, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Efésios 2:8</div>` },
  { old: `<div className="meta">20 Abr, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Atos 9:15</div>` },
  { old: `<div className="meta">05 Mai, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Romanos 1:17</div>` },
  { old: `<div className="meta">11 Fev, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Gênesis 1</div>` },
  { old: `<div className="meta">Vida Cristã</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Filipenses 4:19</div>` },
  { old: `<div className="meta">Mulheres da Bíblia</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Ester 4:14</div>` },
  { old: `<div className="meta">23 Jun, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> 1 Samuel 1</div>` },
  { old: `<div className="meta">História Bíblica / Liderança</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> 1 Samuel 16</div>` },
  { old: `<div className="meta">Personagens Bíblicos</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Vários</div>` },
  { old: `<div className="meta">por <span>João Calvino</span> · 12 Jun, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Filipenses 4:19</div>` },
  { old: `<div className="meta">22 Jun, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> 1 Samuel 16</div>` },
  { old: `<div className="meta">por <span>João Calvino</span> · 14 Mar, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> 1 Samuel 3:10</div>` },
  { old: `<div className="meta">por <span>João Calvino</span> · 05 Jun</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Romanos 1:17</div>` },
  { old: `<div className="meta">por <span>Charles Spurgeon</span> · 10 Abr, 2026</div>`, new: `<div className="meta">📖 <strong>Texto Base:</strong> Efésios 2:8</div>` },
];

replacements.forEach(r => {
  content = content.replace(new RegExp(r.old.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&"), 'g'), r.new);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done replacing meta');
