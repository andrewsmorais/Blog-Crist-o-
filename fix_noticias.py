import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'd:\Antigravity\Blog Soli\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

marker = "        ) : isContato ? ("

noticias_block = """        ) : isNoticias ? (
          <main className="section-mb">
            <div className="section-title">
              <h2>Not\u00edcias</h2>
            </div>
            <div className="grid-3" style={{marginTop: '2rem'}}>
              
              <div className="grid-3-item">
                <a href="/14-estrelas-copa-mundo-2026-seguem-jesus-jogadores-cristaos" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/copa_mundo_fe.png" alt="14 Estrelas da Copa do Mundo 2026" className="img-ph" loading="lazy" style={{objectFit: 'cover', aspectRatio: '16/9'}} />
                  <span className="cat-tag" style={{display: 'inline-block', marginBottom: '8px', marginTop: '12px'}}>NOT\u00cdCIAS</span>
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>14 Estrelas da Copa do Mundo 2026 que Seguem Jesus</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px', marginBottom: '12px'}}>Conhe\u00e7a os atletas que entram na maior competi\u00e7\u00e3o do futebol mundial para exaltar o nome de Cristo</p>
                  <div style={{marginTop: '15px', color: '#722F37', fontWeight: 'bold', fontSize: '0.9rem'}}>
                    \u2192 Ler Artigo
                  </div>
                </a>
              </div>

            </div>
            
            <div style={{marginTop: '3rem', textAlign: 'center', color: '#666', fontSize: '0.95rem'}}>
              <p>\ud83d\udccd <strong>Soli Deo Gloria Portal Teol\u00f3gico</strong></p>
              <p>\u2709\ufe0f E-mail oficial: contato@sdgloria.com.br</p>
            </div>
          </main>
"""

if marker in content:
    content = content.replace(marker, noticias_block + marker, 1)
    with open(r'd:\Antigravity\Blog Soli\src\App.jsx', 'w', encoding='utf-8', newline='') as f:
        f.write(content)
    print("SUCCESS: Noticias block added")
else:
    print("ERROR: marker not found")
