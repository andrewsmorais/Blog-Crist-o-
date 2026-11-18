import re,os,json,sys,html
from collections import Counter,defaultdict
import pathlib; D=str(pathlib.Path(__file__).resolve().parent.parent/'dist')
pages={}
for f in sorted(os.listdir(D)):
    if f.endswith('.html') and f!='404.html':
        pages['/'+f[:-5] if f!='index.html' else '/']=open(f'{D}/{f}',encoding='utf-8').read()
def g(rx,s,fl=re.S):
    m=re.search(rx,s,fl); return html.unescape(m.group(1).strip()) if m else ''
rows=[]; links_in=defaultdict(set)
for u,s in pages.items():
    for h in re.findall(r'<a[^>]+href="(/[^"#?]*)"',s):
        h=h.rstrip('/') or '/'
        if h!=u: links_in[h].add(u)
for u,s in pages.items():
    main=g(r'<main[^>]*>(.*?)</main>',s) or s
    txt=re.sub(r'<[^>]+>',' ',re.sub(r'<(script|style)[^>]*>.*?</\1>','',main,flags=re.S))
    words=len(txt.split())
    ld=re.findall(r'<script type="application/ld\+json">(.*?)</script>',s,re.S)
    types=[]
    for j in ld:
        try:
            d=json.loads(j); d=d if isinstance(d,list) else [d]
            for x in d: types.append(x.get('@type') if not isinstance(x.get('@type'),list) else '/'.join(x['@type']))
        except: types.append('JSON-ERRO')
    imgs=re.findall(r'<img[^>]*>',main)
    noalt=sum(1 for i in imgs if not re.search(r'alt="[^"]+"',i))
    ext=len(set(re.findall(r'<a[^>]+href="https?://(?!www\.sdgloria)([^/"]+)',main)))
    internal=len(set(h for h in re.findall(r'<a[^>]+href="(/[^"#?]+)"',main)))
    rows.append(dict(u=u,title=g(r'<title>(.*?)</title>',s),desc=g(r'<meta name="description" content="(.*?)"',s),
      h1=len(re.findall(r'<h1',s)),canon=g(r'<link rel="canonical" href="(.*?)"',s),og=bool(re.search('og:image',s)),
      words=words,types=types,imgs=len(imgs),noalt=noalt,ext=ext,internal=internal,
      inbound=len(links_in.get(u,())),robots=g(r'<meta name="robots" content="(.*?)"',s),
      h2=len(re.findall(r'<h2',main)),author=bool(re.search(r'Andrews Rocha',main)),date=bool(re.search(r'20\d\d',txt))))
json.dump(rows,open('auditoria-seo.json','w'),ensure_ascii=False,indent=1)
print(len(rows),'páginas')
tc=Counter(r['title'] for r in rows); dc=Counter(r['desc'] for r in rows)
print('\nTÍTULOS duplicados:',[t for t,c in tc.items() if c>1])
print('DESCRIÇÕES duplicadas:',[t[:60] for t,c in dc.items() if c>1])
print('\nSem canonical:',[r['u'] for r in rows if not r['canon']])
print('Sem og:image:',[r['u'] for r in rows if not r['og']])
print('H1 != 1:',[(r['u'],r['h1']) for r in rows if r['h1']!=1])
print('Título >65 ou <25:',[(r['u'],len(r['title'])) for r in rows if len(r['title'])>65 or len(r['title'])<25])
print('Descr >160 ou <70:',[(r['u'],len(r['desc'])) for r in rows if len(r['desc'])>160 or len(r['desc'])<70])
print('Imagens sem alt:',[(r['u'],r['noalt']) for r in rows if r['noalt']])
print('JSON-LD com erro:',[r['u'] for r in rows if 'JSON-ERRO' in r['types']])
print('noindex:',[r['u'] for r in rows if 'noindex' in r['robots']])
print('\nSem links de entrada (órfãs):',[r['u'] for r in rows if r['inbound']==0])
