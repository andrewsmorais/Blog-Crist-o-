import re

with open(r'd:\Antigravity\Blog Soli\src\App.jsx', 'r', encoding='utf-8', errors='surrogatepass') as f:
    content = f.read()

updated = 0

def update_article(title_snippet, category, date, is_news=False):
    global content
    global updated
    
    escaped_snippet = re.escape(title_snippet)
    
    # We want to match: <h1>...snippet...</h1> ... <div className="article-meta"> ... <ArticleInfo ... />
    # Or just <div className="article-meta"> ... </div> for news
    
    pattern1 = re.compile(rf"(<h1>[^\n]*?{escaped_snippet}[^\n]*?</h1>.*?)(<div className=\"article-meta\">.*?<ArticleInfo[^>]*/>)", re.DOTALL)
    
    match = pattern1.search(content)
    if match:
        old_block = match.group(2)
        rt_match = re.search(r'readingTime=\{([0-9]+)\}', old_block)
        reading_time = rt_match.group(1) if rt_match else '10'
        
        line2 = f"Adaptado de fonte externa | {date}" if is_news else f"Baseado em conteúdo do YouTube | {date}"
        
        new_block = f'''<div className="article-meta">
                 📖 <strong>{category} | Soli Deo Gloria</strong><br/>
                 <span style={{{{fontSize: '0.9rem', color: '#666'}}}}><em>{line2}</em></span>
               </div>
               <ArticleInfo readingTime={{{reading_time}}} />'''
        
        content = content.replace(old_block, new_block)
        print(f"Updated: {title_snippet}")
        updated += 1
    else:
        # Try finding without ArticleInfo (for news)
        pattern2 = re.compile(rf"(<h1>[^\n]*?{escaped_snippet}[^\n]*?</h1>.*?)(<div className=\"article-meta\">.*?</div>)", re.DOTALL)
        match2 = pattern2.search(content)
        if match2:
            old_block = match2.group(2)
            line2 = f"Adaptado de fonte externa | {date}" if is_news else f"Baseado em conteúdo do YouTube | {date}"
            new_block = f'''<div className="article-meta">
                 📖 <strong>{category} | Soli Deo Gloria</strong><br/>
                 <span style={{{{fontSize: '0.9rem', color: '#666'}}}}><em>{line2}</em></span>
               </div>'''
            content = content.replace(old_block, new_block)
            print(f"Updated (no ArticleInfo): {title_snippet}")
            updated += 1
        else:
            print(f"NOT FOUND: {title_snippet}")

# 1. Testemunhos
update_article("Deus É Bom", "TESTEMUNHOS", "25 Jun, 2026")
update_article("A Canção que Nasceu no Deserto", "TESTEMUNHOS", "25 Jun, 2026")
update_article("Da Epilepsia à Adoração", "TESTEMUNHOS", "25 Jun, 2026")
update_article("A Voz que Quebrou Correntes", "TESTEMUNHOS", "25 Jun, 2026")
update_article("Sob os Escombros, Uma Bíblia", "TESTEMUNHOS", "25 Jun, 2026")

# 2. Estudos Bíblicos
update_article("Para Onde Vai a Alma do Cristão Após a Morte", "ESTUDOS BÍBLICOS", "25 Jun, 2026")
update_article("A Carta aos Gálatas", "ESTUDOS BÍBLICOS", "14 Mar, 2026")

# 4. Personagens Bíblicos
update_article("Ana: A Mãe que Orou", "PERSONAGENS BÍBLICOS", "25 Jun, 2026")
update_article("O Pastor que Conquistou um Trono", "PERSONAGENS BÍBLICOS", "25 Jun, 2026")
update_article("Ester: A Rainha que Salvou", "PERSONAGENS BÍBLICOS", "25 Jun, 2026")
update_article("Paulo de Tarso", "PERSONAGENS BÍBLICOS", "25 Jun, 2026")
update_article("Jó: O Homem que Perdeu Tudo", "PERSONAGENS BÍBLICOS", "25 Jun, 2026")
update_article("Samuel: O Profeta", "PERSONAGENS BÍBLICOS", "25 Jun, 2026")

# 5. Início (Homepage)
update_article("Multidão, Oposição ou Discípulo?", "INÍCIO / ESTUDOS BÍBLICOS", "25 Jun, 2026")

# 6. Notícias
# Wait, for the news article, it might be an <h3> or similar, because it's rendered inline?
# No, the full article has an <h1>.
update_article("14 Estrelas da Copa do Mundo", "NOTÍCIAS", "25 Jun, 2026", True)

# Devocionais: "Antes de Ler o Comentário"
update_article("Antes de Ler o Comentário", "DEVOCIONAIS / VIDA CRISTÃ", "25 Jun, 2026")


with open(r'd:\Antigravity\Blog Soli\src\App.jsx', 'w', encoding='utf-8', errors='surrogatepass') as f:
    f.write(content)

print(f"\\nFinished! Updated {updated} articles.")
