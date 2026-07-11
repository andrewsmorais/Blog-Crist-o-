import sys
sys.stdout.reconfigure(encoding='utf-8')

with open(r'd:\Antigravity\Blog Soli\src\App.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

NL = '\n'

# Trindade
old = ': isTrindade ? (\n          <main className="article-content section-mb">\n            <div className="article-header">'
new_val = ': isTrindade ? (\n          <main className="article-content section-mb">\n             <Breadcrumb category="Estudos B\u00edblicos" categoryLink="/estudos-biblicos" title="A Trindade" />\n            <div className="article-header">'

if old in content:
    content = content.replace(old, new_val, 1)
    print('Trindade breadcrumb added')
else:
    print('Trindade pattern NOT found')

# Santificacao
old2 = ': isSantificacao ? (\n          <main className="article-content section-mb">\n            <div className="article-header">'
new_val2 = ': isSantificacao ? (\n          <main className="article-content section-mb">\n             <Breadcrumb category="Estudos B\u00edblicos" categoryLink="/estudos-biblicos" title="Santifica\u00e7\u00e3o" />\n            <div className="article-header">'

if old2 in content:
    content = content.replace(old2, new_val2, 1)
    print('Santificacao breadcrumb added')
else:
    print('Santificacao pattern NOT found')

# ArticleInfo for Trindade
marker = 'title="A Trindade" />'
if marker in content:
    pos = content.find(marker)
    meta_pos = content.find('article-meta', pos)
    if meta_pos > 0:
        meta_close = content.find('</div>', meta_pos)
        if meta_close > 0:
            header_close = content.find('</div>', meta_close + 6)
            if header_close > 0:
                info = '\n               <ArticleInfo date="2 de Julho de 2026" readingTime={15} />'
                content = content[:header_close] + info + '\n              ' + content[header_close:]
                print('Trindade ArticleInfo added')

# ArticleInfo for Santificacao
marker2 = 'title="Santifica\u00e7\u00e3o" />'
if marker2 in content:
    pos = content.find(marker2)
    meta_pos = content.find('article-meta', pos)
    if meta_pos > 0:
        meta_close = content.find('</div>', meta_pos)
        if meta_close > 0:
            header_close = content.find('</div>', meta_close + 6)
            if header_close > 0:
                info = '\n               <ArticleInfo date="2 de Julho de 2026" readingTime={13} />'
                content = content[:header_close] + info + '\n              ' + content[header_close:]
                print('Santificacao ArticleInfo added')

# ShareBar for Santificacao (process later article first)
marker2 = 'title="Santifica\u00e7\u00e3o" />'
if marker2 in content:
    pos = content.find(marker2)
    main_close = content.find('</main>', pos)
    if main_close > 0:
        share = '\n              <ShareBar title="Santifica\u00e7\u00e3o" url="/santificacao-obra-vida-inteira-estudo" />\n              <RelatedArticles currentLink="/santificacao-obra-vida-inteira-estudo" category="Estudos B\u00edblicos" />\n           '
        content = content[:main_close] + share + content[main_close:]
        print('Santificacao ShareBar added')

# ShareBar for Trindade
marker = 'title="A Trindade" />'
if marker in content:
    pos = content.find(marker)
    main_close = content.find('</main>', pos)
    if main_close > 0:
        share = '\n              <ShareBar title="A Trindade" url="/trindade-um-so-deus-tres-pessoas-estudo-completo" />\n              <RelatedArticles currentLink="/trindade-um-so-deus-tres-pessoas-estudo-completo" category="Estudos B\u00edblicos" />\n           '
        content = content[:main_close] + share + content[main_close:]
        print('Trindade ShareBar added')

with open(r'd:\Antigravity\Blog Soli\src\App.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('DONE!')
