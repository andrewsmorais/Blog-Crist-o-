import re

# Read the file
with open(r'd:\Antigravity\Blog Soli\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Newline character used in file
NL = '\n'

articles = [
    ('isSarcaArdente', 'Estudos Bíblicos', '/estudos-biblicos', 'A Sarça Ardente', '10 de Junho de 2026', 12, '/artigo/sarca-ardente'),
    ('isSermaoDoMonte', 'Estudos Bíblicos', '/estudos-biblicos', 'Sermão do Monte', '10 de Junho de 2026', 14, '/artigo/sermao-do-monte'),
    ('isBibliaEmUmAno', 'Estudos Bíblicos', '/estudos-biblicos', 'Como Ler a Bíblia Inteira em 2026', '11 de Junho de 2026', 10, '/como-ler-biblia-inteira-2026-metodos-praticos'),
    ('isAhJesus', 'Devocionais', '/devocionais', 'Ah Jesus, Coração Igual ao Teu', '11 de Junho de 2026', 15, '/ah-jesus-coracao-igual-ao-teu-analise-biblica-julliany-souza'),
    ('isSilencioDeDeus', 'Estudos Bíblicos', '/estudos-biblicos', 'O Silêncio de Deus nas Dificuldades', '11 de Junho de 2026', 11, '/silencio-deus-dificuldades-charles-spurgeon'),
    ('isEleicao', 'Estudos Bíblicos', '/estudos-biblicos', 'Eleição Incondicional', '11 de Junho de 2026', 13, '/doutrina-eleicao-incondicional-efesios-romanos'),
    ('isGalatas', 'Estudos Bíblicos', '/estudos-biblicos', 'A Carta aos Gálatas', '11 de Junho de 2026', 12, '/carta-galatas-liberdade-crista-estudo-completo'),
    ('isProvisao', 'Testemunhos', '/testemunhos', 'Deus Honrou a Fé Dela', '11 de Junho de 2026', 8, '/deus-honrou-fe-testemunho-milagres-provisao-divina'),
    ('isCincoSolas', 'Estudos Bíblicos', '/estudos-biblicos', 'As Cinco Solas', '22 de Junho de 2026', 14, '/cinco-solas-relevancia-hoje-reforma-protestante'),
    ('isPauloTarso', 'Personagens Bíblicos', '/personagens-biblicos', 'Paulo de Tarso', '23 de Junho de 2026', 10, '/paulo-tarso-apostolo-nacoes'),
    ('isSamuel', 'Personagens Bíblicos', '/personagens-biblicos', 'Samuel', '23 de Junho de 2026', 9, '/samuel-profeta-voz-deus-trevas-israel'),
    ('isJo', 'Personagens Bíblicos', '/personagens-biblicos', 'Jó', '23 de Junho de 2026', 11, '/jo-homem-perdeu-tudo-soberania-divina'),
    ('isAna', 'Personagens Bíblicos', '/personagens-biblicos', 'Ana', '23 de Junho de 2026', 9, '/ana-mae-orou-chorou-gerou-profeta-samuel'),
    ('isDavi', 'Personagens Bíblicos', '/personagens-biblicos', 'Davi', '23 de Junho de 2026', 10, '/pastor-conquistou-trono-jornada-davi-belem-jerusalem'),
    ('isEster', 'Personagens Bíblicos', '/personagens-biblicos', 'Ester', '23 de Junho de 2026', 10, '/ester-rainha-salvou-povo-deus-age-sombras'),
    ('isTestemunhoDeusEBom', 'Testemunhos', '/testemunhos', 'Deus É Bom', '25 de Junho de 2026', 12, '/testemunho-deus-e-bom-historia-fe-transformacao'),
    ('isTestemunhoDesespero', 'Testemunhos', '/testemunhos', 'Do Desespero à Esperança', '25 de Junho de 2026', 10, '/testemunho-desespero-esperanca'),
    ('isTestemunhoEEle', 'Testemunhos', '/testemunhos', 'É Ele — Paulo Vicente', '25 de Junho de 2026', 9, '/testemunho-e-ele-cancao-nasceu-deserto-paulo-vicente'),
    ('isTestemunhoThamires', 'Testemunhos', '/testemunhos', 'Thamires', '25 de Junho de 2026', 8, '/testemunho-thamires-musica-cura-aquieta-minhalma'),
    ('isTestemunhoJulliany', 'Testemunhos', '/testemunhos', 'Julliany Souza', '25 de Junho de 2026', 9, '/testemunho-julliany-souza-louvor-arma-espiritual-familia'),
    ('isTrindade', 'Estudos Bíblicos', '/estudos-biblicos', 'A Trindade', '2 de Julho de 2026', 15, '/trindade-um-so-deus-tres-pessoas-estudo-completo'),
    ('isSantificacao', 'Estudos Bíblicos', '/estudos-biblicos', 'Santificação', '2 de Julho de 2026', 13, '/santificacao-obra-vida-inteira-estudo'),
]

breadcrumb_count = 0
info_count = 0
share_count = 0

for var_name, category, catLink, title, date, readTime, url in articles:
    # 1. Add Breadcrumb before article-header
    old = f': {var_name} ? ({NL}          <main className="article-content section-mb">{NL}             <div className="article-header">'
    new = f': {var_name} ? ({NL}          <main className="article-content section-mb">{NL}             <Breadcrumb category="{category}" categoryLink="{catLink}" title="{title}" />{NL}             <div className="article-header">'
    
    if old in content:
        content = content.replace(old, new, 1)
        breadcrumb_count += 1
    else:
        print(f'BREADCRUMB WARNING: Could not find pattern for {var_name}')

print(f'Breadcrumbs added: {breadcrumb_count}')

# 2. Add ArticleInfo after article-header closing </div> for each article
for var_name, category, catLink, title, date, readTime, url in articles:
    breadcrumb_marker = f'<Breadcrumb category="{category}" categoryLink="{catLink}" title="{title}" />'
    
    if breadcrumb_marker in content:
        pos = content.find(breadcrumb_marker)
        # Find "article-meta" after this breadcrumb
        meta_pos = content.find('article-meta', pos)
        if meta_pos > 0:
            # Find the </div> that closes article-meta
            meta_close = content.find('</div>', meta_pos)
            if meta_close > 0:
                # Find the NEXT </div> which closes article-header
                header_close = content.find('</div>', meta_close + 6)
                if header_close > 0:
                    # Insert ArticleInfo before the closing </div>
                    info_code = f'{NL}               <ArticleInfo date="{date}" readingTime={{{readTime}}} />'
                    content = content[:header_close] + info_code + NL + '              ' + content[header_close:]
                    info_count += 1

print(f'ArticleInfo added: {info_count}')

# 3. Add ShareBar + RelatedArticles before </main> of each article
# Process in reverse order to avoid position shifts
for var_name, category, catLink, title, date, readTime, url in reversed(articles):
    breadcrumb_marker = f'<Breadcrumb category="{category}" categoryLink="{catLink}" title="{title}" />'
    
    if breadcrumb_marker in content:
        pos = content.find(breadcrumb_marker)
        # Find the next </main> after this article
        main_close = content.find('</main>', pos)
        if main_close > 0:
            share_code = f'{NL}              <ShareBar title="{title}" url="{url}" />{NL}              <RelatedArticles currentLink="{url}" category="{category}" />{NL}           '
            content = content[:main_close] + share_code + content[main_close:]
            share_count += 1

print(f'ShareBar+Related added: {share_count}')

# Write the modified file
with open(r'd:\Antigravity\Blog Soli\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'DONE! Total modifications: {breadcrumb_count + info_count + share_count}')
