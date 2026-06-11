import React from 'react';
import './index.css';

function App() {
  const path = window.location.pathname;
  const isPrivacyPolicy = path === '/politica-de-privacidade';
  const isCookiePolicy = path === '/politica-de-cookies';
  const isTermsOfUse = path === '/termos-de-uso';
  const isSarcaArdente = path === '/artigo/sarca-ardente';
  const isSermaoDoMonte = path === '/artigo/sermao-do-monte';
  const isBibliaEmUmAno = path === '/como-ler-biblia-inteira-2026-metodos-praticos';
  const isAhJesus = path === '/ah-jesus-coracao-igual-ao-teu-analise-biblica-julliany-souza';
  const isSilencioDeDeus = path === '/silencio-deus-dificuldades-charles-spurgeon';

  return (
    <>
      <div className="container">
        {/* HEADER */}
        <header>
          <div className="header-top">
            <div className="header-left">
              <a href="/" style={{textDecoration: 'none', color: 'inherit'}}>
                <div className="logo-main">SOLI DEO GLORIA</div>
              </a>
              <div className="logo-sub">Estudos Bíblicos e Teologia</div>
            </div>
            
            <div className="header-center" style={{display: 'none' /* O menu principal fica na segunda linha no ref, mas o prompt pediu no centro. Vou colocar no nav abaixo. */}}>
            </div>

            <div className="header-right">
              <span className="icon-search">🔍</span>
              <button className="btn">Login</button>
              <button className="btn btn-dark">Assinar</button>
            </div>
          </div>
          
          <nav className="header-nav">
            <ul className="nav-list">
              <li><a href="/">Início</a></li>
              <li><a href="#">Estudos Bíblicos</a></li>
              <li><a href="#">Devocionais</a></li>
              <li><a href="#">Teologia</a></li>
              <li><a href="#">História Bíblica</a></li>
              <li><a href="#">Apologética</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </nav>
        </header>

        {isPrivacyPolicy ? (
          <main className="privacy-policy-content section-mb">
            <h1>Política de Privacidade — Soli Deo Gloria</h1>
            
            <p>No blog <strong>Soli Deo Gloria</strong>, acessível em nosso endereço web, uma de nossas principais prioridades é a privacidade dos nossos visitantes. Este documento de Política de Privacidade contém os tipos de informações que são coletadas e registradas pelo nosso site e como as utilizamos.</p>
            <p>Se você tiver dúvidas adicionais ou precisar de mais informações sobre nossa Política de Privacidade, não hesite em nos contatar através do nosso e-mail de suporte.</p>
            
            <hr />

            <h2>1. Consentimento</h2>
            <p>Ao utilizar o nosso site, você consente explicitamente com a nossa Política de Privacidade e concorda com os seus termos.</p>

            <h2>2. Informações que Coletamos</h2>
            <p>O blog Soli Deo Gloria segue um procedimento padrão de uso de arquivos de log. Esses arquivos registram os visitantes quando eles visitam sites. Todas as empresas de hospedagem fazem isso como parte da análise de serviços de hospedagem.</p>
            <p>As informações coletadas pelos arquivos de log incluem:</p>
            <ul>
              <li>Endereço de protocolo de internet (IP);</li>
              <li>Tipo de navegador;</li>
              <li>Provedor de Serviços de Internet (ISP);</li>
              <li>Carimbo de data e hora;</li>
              <li>Páginas de referência/saída;</li>
              <li>O número de cliques.</li>
            </ul>
            <p>Esses dados não estão vinculados a nenhuma informação que seja pessoalmente identificável. O objetivo das informações é analisar tendências, administrar o site, rastrear o movimento dos usuários no site e coletar informações demográficas.</p>

            <h2>3. Cookies e Web Beacons</h2>
            <p>Como qualquer outro site, o Soli Deo Gloria usa "cookies". Esses cookies são usados para armazenar informações, incluindo as preferências dos visitantes e as páginas do site que o visitante acessou ou visitou. As informações são usadas para otimizar a experiência dos usuários, personalizando o conteúdo da nossa página web com base no tipo de navegador dos visitantes e/ou em outras informações.</p>

            <h2>4. Cookie Google DoubleClick DART</h2>
            <p>O Google é um dos fornecedores terceiros em nosso site. Ele também usa cookies, conhecidos como cookies DART, para veicular anúncios aos visitantes do nosso site com base em sua visita a este e a outros sites na Internet.</p>
            <ul>
              <li><strong>Nota de Transparência:</strong> Os visitantes podem optar por recusar o uso de cookies DART visitando a Política de Privacidade da rede de conteúdo e anúncios do Google no seguinte URL: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer">https://policies.google.com/technologies/ads</a></li>
            </ul>

            <h2>5. Nossos Parceiros de Publicidade (Google AdSense)</h2>
            <p>Alguns dos anunciantes em nosso site podem usar cookies e web beacons. Nosso principal parceiro de publicidade é o <strong>Google AdSense</strong>.</p>
            <p>Os servidores de anúncios de terceiros ou redes de anúncios utilizam tecnologias como cookies, JavaScript ou Web Beacons em seus respectivos anúncios e links que aparecem no Soli Deo Gloria, os quais são enviados diretamente para o navegador dos usuários. Eles recebem automaticamente o seu endereço IP quando isso ocorre. Essas tecnologias são usadas para medir a eficácia de suas campanhas publicitárias e/ou para personalizar o conteúdo publicitário que você vê nos sites que visita.</p>
            <p><em>Importante:</em> O Soli Deo Gloria não tem acesso ou controle sobre esses cookies que são usados por anunciantes de terceiros.</p>

            <h2>6. Políticas de Privacidade de Terceiros</h2>
            <p>A Política de Privacidade do Soli Deo Gloria não se aplica a outros anunciantes ou sites. Portanto, aconselhamos você a consultar as respectivas Políticas de Privacidade desses servidores de anúncios de terceiros para obter informações mais detalhadas. Ela pode incluir suas práticas e instruções sobre como optar por sair de certas opções.</p>
            <p>Você pode optar por desativar os cookies por meio das opções individuais do seu navegador. Para saber informações mais detalhadas sobre o gerenciamento de cookies com navegadores da web específicos, elas podem ser encontradas nos respectivos sites dos navegadores.</p>

            <h2>7. Conformidade com a LGPD e Direitos do Usuário</h2>
            <p>Garantimos aos nossos leitores todos os direitos de acesso, retificação, exclusão e portabilidade dos dados, conforme exigido pela Lei Geral de Proteção de Dados (LGPD). Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>

            <h2>8. Atualizações desta Política</h2>
            <p>Podemos atualizar nossa Política de Privacidade de tempos em tempos. Portanto, aconselhamos que você reveja esta página periodicamente para verificar quaisquer alterações. Esta política é válida a partir de 2026.</p>
          </main>
        ) : isCookiePolicy ? (
          <main className="privacy-policy-content section-mb">
            <h1>Política de Cookies — Soli Deo Gloria</h1>
            
            <p>Esta é a Política de Cookies do blog <strong>Soli Deo Gloria</strong>, acessível em nosso endereço web. Para garantir total transparência sobre como cuidamos dos seus dados, explicamos abaixo o que são cookies, como os utilizamos e como você pode gerenciá-los.</p>
            
            <hr />

            <h2>1. O que são Cookies?</h2>
            <p>Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador ou dispositivo móvel, para melhorar sua experiência de navegação.</p>
            <p>Esta página descreve quais informações eles coletam, como as usamos e por que às vezes precisamos armazenar esses cookies. Também compartilharemos como você pode impedir que esses cookies sejam armazenados, no entanto, isso pode fazer o downgrade ou 'quebrar' certos elementos da funcionalidade do site.</p>

            <h2>2. Como Usamos os Cookies?</h2>
            <p>Utilizamos cookies por vários motivos, detalhados abaixo. Infelizmente, na maioria dos casos, não existem opções padrão do setor para desativar os cookies sem desativar completamente a funcionalidade e os recursos que eles adicionam a este site. É recomendável que você deixe todos os cookies ativados se não tiver certeza se precisa deles ou não, caso sejam usados para fornecer um serviço que você utiliza.</p>

            <h2>3. Desativar Cookies</h2>
            <p>Você pode impedir a configuração de cookies ajustando as configurações do seu navegador (consulte a "Ajuda" do navegador para saber como fazer isso).</p>
            <p>Esteja ciente de que a desativação de cookies afetará a funcionalidade deste e de muitos outros sites que você visita. A desativação de cookies geralmente resultará na desativação de certas funcionalidades e recursos deste site. Portanto, recomenda-se que você não desative os cookies.</p>

            <h2>4. Cookies que Definimos (Preferências do Site)</h2>
            <p>Para proporcionar uma ótima experiência neste site, fornecemos a funcionalidade para definir suas preferências de como esse site é executado quando você o usa. Para lembrar suas preferências, precisamos definir cookies para que essas informações possam ser chamadas sempre que você interagir com uma página que for afetada por suas preferências.</p>

            <h2>5. Cookies de Terceiros (Google AdSense e Analíticos)</h2>
            <p>Em alguns casos especiais, também usamos cookies fornecidos por terceiros confiáveis. A seção a seguir detalha quais cookies de terceiros você pode encontrar através deste site.</p>
            <ul>
              <li><strong>Google AdSense:</strong> Este site usa o serviço Google AdSense para veicular publicidade de forma mais relevante em toda a web e limitar o número de vezes que um determinado anúncio é exibido para você. O AdSense utiliza o cookie DoubleClick DART para rastrear o comportamento do usuário e exibir anúncios baseados em seus interesses.</li>
              <li><strong>Controle de Anúncios:</strong> Para obter mais informações sobre o Google AdSense, consulte as perguntas frequentes oficiais sobre a Privacidade do Google AdSense. Você pode optar por desativar os anúncios personalizados acessando as Configurações de anúncios do Google.</li>
              <li><strong>Google Analytics:</strong> Também podemos utilizar ferramentas de análise de tráfego de terceiros para entender como nossos leitores interagem com os artigos teológicos, ajudando-nos a produzir conteúdos cada vez melhores e mais profundos.</li>
            </ul>

            <h2>6. Mais Informações e Contato</h2>
            <p>Esperamos que estas informações tenham esclarecido o uso de cookies para você. Como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
            <p>Se você ainda estiver procurando mais informações, entre em contato conosco através do nosso e-mail oficial de suporte ou formulário de contato do site.</p>
            <p>Esta política é válida a partir de 2026.</p>
          </main>
        ) : isTermsOfUse ? (
          <main className="privacy-policy-content section-mb">
            <h1>Termos e Condições de Uso — Soli Deo Gloria</h1>
            
            <p>Bem-vindo ao blog <strong>Soli Deo Gloria</strong>, acessível em nosso endereço web. Ao acessar e utilizar este site, você concorda em cumprir e cumprir integralmente os seguintes termos e condições de uso. Se você não concorda com qualquer parte destes termos, por favor, não continue a utilizar o nosso site.</p>
            
            <hr />

            <h2>1. Aceitação dos Termos</h2>
            <p>Os presentes termos regulam o uso do site Soli Deo Gloria. O acesso aos artigos, estudos bíblicos, devocionais e demais materiais implica na aceitação plena das condições aqui estabelecidas. Podemos revisar estes termos a qualquer momento, e o uso continuado do site significa a aceitação dos termos atualizados.</p>

            <h2>2. Direitos Autorais e Propriedade Intelectual</h2>
            <p>Todo o conteúdo publicado neste blog — incluindo artigos teológicos, análises textuais, imagens, logotipos e layout — é de propriedade do Soli Deo Gloria ou de seus respectivos criadores e parceiros, sendo protegido pelas leis de direitos autorais nacionais e internacionais.</p>
            <ul>
              <li><strong>Uso Permitido:</strong> Você pode ler, imprimir ou citar trechos dos artigos para uso pessoal, devocional, acadêmico ou para pregações e estudos em igrejas locais, desde que cite explicitamente a fonte com um link para o artigo original do Soli Deo Gloria.</li>
              <li><strong>Uso Proibido:</strong> É estritamente proibida a cópia massiva, reprodução integral sem autorização prévia por escrito, venda, distribuição comercial ou modificação de qualquer conteúdo deste site para fins lucrativos ou em portais de terceiros. Plágio de materiais teológicos viola tanto a ética cristã quanto a legislação vigente.</li>
            </ul>

            <h2>3. Isenção de Responsabilidade</h2>
            <p>O conteúdo disponibilizado no Soli Deo Gloria possui caráter exclusivamente informativo, educacional, teológico e devocional. Embora nos esforcemos para manter o conteúdo preciso e fundamentado em fontes históricas e bíblicas confiáveis (como as obras de autores reformados clássicos), não garantimos a infalibilidade das interpretações e análises produzidas por nossos colaboradores humanos.</p>
            <p>O site não se responsabiliza por decisões pessoais tomadas com base nas leituras dos artigos, cabendo a cada usuário examinar tudo e reter o que é bom.</p>

            <h2>4. Anúncios de Terceiros e Links Externos</h2>
            <p>Para manter o projeto ativo e gratuito para os leitores, o Soli Deo Gloria exibe anúncios publicitários distribuídos pelo <strong>Google AdSense</strong>.</p>
            <ul>
              <li>Não controlamos o conteúdo exato de todos os anúncios gerados por redes de terceiros, embora configurem filtros para manter a publicidade o mais respeitosa possível.</li>
              <li>Nosso site pode conter links para sites de terceiros (como editoras de livros, redes sociais ou sites de apoio). Não temos controle e não assumimos qualquer responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros.</li>
            </ul>

            <h2>5. Limitação de Responsabilidade</h2>
            <p>Em circunstância alguma o Soli Deo Gloria, seus administradores ou colaboradores serão responsáveis por quaisquer danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou da incapacidade de usar este site ou seus conteúdos.</p>

            <h2>6. Modificações no Serviço</h2>
            <p>Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer aspecto do site a qualquer momento, incluindo a disponibilidade de quaisquer recursos, bancos de dados ou conteúdos, sem aviso prévio.</p>

            <h2>7. Foro e Legislação Aplicável</h2>
            <p>Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa decorrente do uso deste site será submetida ao foro da comarca de domicílio do proprietário do blog.</p>
            
            <p>Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco por meio do nosso e-mail oficial de suporte.</p>
            <p>Estes termos são válidos a partir de 2026.</p>
          </main>
        ) : isSarcaArdente ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">História Bíblica</span>
               <h1>A Sarça Ardente: Quando Deus Encontrou Moisés no Deserto</h1>
               <div className="article-meta">Por <strong>João Calvino</strong> | 30 de Maio, 2026</div>
             </div>
             
             <img src="/sarca-ardente.jpg" alt="A Sarça Ardente" className="article-hero-img" loading="lazy" />
             
             <p>No silêncio vasto e implacável do deserto de Midiã, onde o horizonte se perde em montanhas áridas e o vento carrega apenas areia e solidão, ocorreu um dos encontros mais extraordinários entre Deus e um homem na história da redenção. Moisés, aos <strong>80 anos de idade</strong>, vivia uma vida simples como pastor de ovelhas, longe dos palácios do Egito e das glórias de sua juventude. Foi nesse cenário improvável que o céu decidiu irromper na terra.</p>

             <h2>O Cenário do Encontro</h2>
             <p>O evento aconteceu nas proximidades do <strong>Monte Horebe</strong>, também conhecido como "Monte de Deus", uma região montanhosa na península do Sinai. Este não era um local qualquer — era território deserto, afastado dos centros de poder, longe dos olhos da corte egípcia. Moisés havia fugido do Egito quarenta anos antes, após matar um egípcio que maltratava um hebreu. Agora, ele cuidava das ovelhas de Jetro, seu sogro, sacerdote de Midiã.</p>
             <p>Era um dia como qualquer outro. Moisés conduziu o rebanho para o lado ocidental do deserto, buscando pastagens. Nada sugeria que aquele seria o dia que mudaria não apenas sua vida, mas o destino de uma nação inteira.</p>

             <h2>O Fogo Que Não Consome</h2>
             <p>De repente, algo extraordinário chamou sua atenção: <strong>um arbusto — uma sarça — ardia em chamas intensas, mas não se consumia</strong>. As labaredas dançavam violentamente, iluminando o crepúsculo do deserto, mas o arbusto permanecia intacto. As folhas não viravam cinzas; os galhos não se transformavam em carvão. Era um milagre visual, uma violação sobrenatural das leis da natureza.</p>
             <p>Moisés, movido pela curiosidade e por uma atração inexplicável, aproximou-se. <em>"Vou me aproximar para ver esta coisa extraordinária"</em>, pensou. Foi então que tudo mudou.</p>

             <h2>O Diálogo Que Mudou a História</h2>
             <p>Quando Moisés chegou perto o suficiente, uma voz rompeu o silêncio do deserto. Não era o estalar do fogo, nem o sussurro do vento. Era uma voz pessoal, intencional, que conhecia seu nome antes mesmo de ele nascer:</p>
             <p><strong>"Moisés! Moisés!"</strong></p>
             <p>O pastor hebreu respondeu imediatamente, com a reverência de quem reconhece autoridade: <em>"Eis-me aqui."</em></p>
             <p>A voz continuou, com instruções que fariam qualquer homem tremer:</p>
             <p><strong>"Não te aproximes. Tire as sandálias dos pés, porque o lugar em que estás é terra santa."</strong></p>
             <p>Moisés obedeceu instantaneamente. E então veio a revelação que ecoaria através dos séculos:</p>
             <p><strong>"Eu sou o Deus de teu pai, o Deus de Abraão, o Deus de Isaque e o Deus de Jacó."</strong></p>
             <p>Diante dessa declaração, Moisés escondeu o rosto, temendo olhar para Deus.</p>

             <h2>A Missão Impossível</h2>
             <p>Foi então que Deus revelou o propósito daquele encontro extraordinário:</p>
             <p><strong>"Tenho visto, tenho visto a aflição do meu povo que está no Egito. Tenho ouvido o seu clamor por causa dos seus feitores. Conheço-lhe o sofrimento. Por isso, desci para livrá-lo da mão dos egípcios e para fazê-lo subir daquela terra para uma terra boa e ampla, terra que mana leite e mel."</strong></p>
             <p>Deus havia ouvido o clamor dos israelitas escravizados. Ele conhecia sua dor. E agora, estava agindo. Mas a parte mais surpreendente estava por vir:</p>
             <p><strong>"Vem, agora, e eu te enviarei a Faraó, para que tires o meu povo, os filhos de Israel, do Egito."</strong></p>
             <p>Moisés, atordoado, tentou compreender. <em>Ele?</em> Um fugitivo? Um pastor de ovelhas de 80 anos? Ele que havia falhado quarenta anos antes tentando libertar seu povo com suas próprias forças?</p>
             <p>A conversa continuou, com Moisés apresentando objeções:</p>
             <ul>
               <li><em>"Quem sou eu para ir a Faraó?"</em></li>
               <li><em>"E se me perguntarem: Qual é o nome dele? Que lhes direi?"</em></li>
               <li><em>"Eles não acreditarão em mim."</em></li>
               <li><em>"Não sou eloquente... sou pesado de boca e de língua."</em></li>
             </ul>
             <p>Cada objeção foi respondida por Deus com paciência e poder:</p>
             <p><strong>"Eu serei contigo."</strong></p>
             <p><strong>"EU SOU O QUE SOU... Assim dirás aos filhos de Israel: EU SOU me enviou a vós outros."</strong></p>
             <p><strong>"Estende a mão e toma-lhe na cauda."</strong> (referindo-se ao cajado que se tornaria serpente)</p>
             <p><strong>"Quem fez a boca do homem? ... Acaso não sou eu, o SENHOR? Vai, pois, agora; eu serei com a tua boca e te ensinarei o que hás de falar."</strong></p>

             <h2>Por Que Moisés?</h2>
             <p>Por que Deus escolheu justamente Moisés? Por que não um guerreiro jovem e vigoroso? Por que não alguém com influência política no Egito?</p>
             <p>A resposta revela o coração do método divino: <strong>Deus escolhe os improváveis para que ninguém se glorie, exceto nEle.</strong> Moisés aos 80 anos era humanamente improvável. Ele havia falhado em sua primeira tentativa. Estava enferrujado por quarenta anos no deserto. Não era eloquente. Tinha um histórico de violência e impetuosidade.</p>
             <p>Mas foi exatamente isso que Deus usou. Os quarenta anos no deserto não foram desperdício — foram preparação. Moisés precisou aprender a ser ninguém para que Deus pudesse fazer dele alguém. Precisou trocar a confiança em sua força pela dependência total do poder divino.</p>
             <p>A missão era clara: <strong>libertar o povo de Deus da escravidão</strong>. Mas o propósito ia além da libertação física. Era sobre revelar o caráter de Deus, Seu poder sobre os deuses do Egito, Sua fidelidade à aliança feita com Abraão, Isaque e Jacó. Era sobre estabelecer um padrão de redenção que apontaria, séculos depois, para o Grande Libertador — Jesus Cristo.</p>

             <h2>Uma Curiosidade Extraordinária</h2>
             <p>Aqui está algo que talvez você nunca tenha notado: <strong>o texto hebraico usa um termo específico para "sarça" — "seneh" — que só aparece duas vezes em toda a Bíblia</strong>: aqui em Êxodo 3 e em Deuteronômio 33:16, na bênção de Moisés sobre as tribos.</p>
             <p>Mas há algo ainda mais fascinante. A palavra "sarça ardente" em hebraico pode ter um jogo de palavras com "Sinai". Alguns estudiosos sugerem que há uma conexão linguística intencional entre o arbusto que arde (<em>seneh</em>) e o monte Sinai (<em>Sinai</em>), o local onde mais tarde Deus daria a Lei a Moisés. Seria como se Deus estivesse dizendo: <em>"Este arbusto é um antegosto do que acontecerá no Monte Sinai — Eu descerei em fogo, mas Meu povo não será consumido."</em></p>
             <p>Outra curiosidade: <strong>por que um arbusto?</strong> Por que não uma árvore majestosa? Por que não algo impressionante aos olhos humanos? Provavelmente porque Deus queria ensinar que Ele não depende de grandiosidade humana para manifestar Sua glória. O arbusto era comum, pequeno, insignificante — assim como Moisés se sentia. Mas quando o fogo de Deus desce sobre o ordinário, ele se torna extraordinário.</p>

             <h2>O Legado do Encontro</h2>
             <p>Moisés saiu daquele encontro transformado. Ele ainda tinha objeções. Ainda se sentia inadequado. Mas carregava algo que mudaria tudo: <strong>a presença de Deus</strong>.</p>
             <p>A sarça ardente nos ensina verdades eternas:</p>
             <ol>
               <li><strong>Deus vê nossa aflição</strong> — Ele não está distante ou indiferente ao sofrimento de Seu povo.</li>
               <li><strong>Deus usa os improváveis</strong> — Sua força se aperfeiçoa na fraqueza.</li>
               <li><strong>A presença de Deus santifica</strong> — Onde Ele está, é terra santa.</li>
               <li><strong>O fogo de Deus não consome</strong> — Ele purifica, transforma, mas não destrói aqueles que chama.</li>
               <li><strong>"EU SOU" está no controle</strong> — O Deus eterno, autoexistente, soberano, é quem dirige a história.</li>
             </ol>
             <p>Moisés tinha 80 anos quando Deus o chamou. Para muitos, seria o fim da vida, a aposentadoria, o momento de descansar. Para Moisés, era apenas o começo. Os maiores anos de sua vida ainda estavam por vir.</p>
             <p>Que encorajamento para nós! Não importa sua idade, seu histórico de fracassos, suas limitações. Se Deus está chamando, Ele também está capacitando. O mesmo "EU SOU" que falou com Moisés no deserto fala conosco hoje através de Sua Palavra.</p>
             <p>O fogo ainda arde. A missão ainda existe. A pergunta é: <strong>você tirará as sandálias e ouvirá?</strong></p>

             <hr />
             <p><strong>Para Reflexão:</strong></p>
             <ul>
               <li>Em que "deserto" Deus pode estar preparando você para uma missão?</li>
               <li>Quais objeções você tem apresentado ao chamado de Deus?</li>
               <li>Como a verdade de que "EU SOU" está com você muda sua perspectiva hoje?</li>
             </ul>
             <p><strong>Leitura Recomendada:</strong> Êxodo 3-4 | Atos 7:20-34</p>
             <hr />
             <p><em>Este artigo faz parte da série "Encontros que Transformaram" — explorando os momentos decisivos entre Deus e Seus servos na narrativa bíblica.</em></p>
          </main>
        ) : isSermaoDoMonte ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Devocional / Teologia</span>
               <h1>Sermão do Monte: As Bem-Aventuranças e a Nova Constituição do Reino</h1>
               <div className="article-meta">Por <strong>João Calvino</strong> | 05 de Junho, 2026</div>
             </div>
             
             <img src="/sermao-do-monte.png" alt="Sermão do Monte" className="article-hero-img" loading="lazy" />
             
             <p>Subindo pelas encostas verdes que margeiam o Mar da Galileia, Jesus se afastou da multidão barulhenta da planície. O local, conhecido hoje como o Monte das Bem-Aventuranças, era um anfiteatro natural de calcário vulcânico, a poucos quilômetros de Cafarnaum. Jesus tinha aproximadamente 30 ou 31 anos, e seu ministério público estava apenas começando a ganhar uma escala nacional.</p>
             <p>Ali, sentado — a postura tradicional de um mestre judeu prestes a expor a Lei — Ele não estava apenas pregando. Ele estava estabelecendo a constituição de um novo Reino.</p>
             
             <h2>O Cenário e o Público</h2>
             <p>O evento ocorreu provavelmente no início de sua pregação itinerante, após a escolha dos doze discípulos, mas antes que sua fama o obrigasse a buscar lugares desertos. A geografia local é uma chave essencial para entender a cena: o declive suave da colina funciona como um amplificador acústico natural. Sem precisar gritar, a voz de Jesus podia alcançar milhares de pessoas sentadas nas gramadas que desciam em direção ao lago azul-turquesa.</p>
             <p>Não havia apenas judeus curiosos. O texto diz que havia gente de toda a Judeia, de Jerusalém, e até da Decápolis (região grega a leste do Jordão) e do litoral de Tiro e Sidom. Jesus estava falando a um público misto, gentios e judeus, sobre uma realidade que transcendia as fronteiras de Israel.</p>
             
             <h2>O Significado de "Bem-Aventurado"</h2>
             <p>Ao abrir a boca, Jesus começou com uma palavra que ecoou através dos séculos: "Bem-aventurados" (do grego Makarios).</p>
             <p>No grego clássico, Makarios era usado para descrever os deuses imortais — seres isentos de preocupações, perigos e sofrimentos, vivendo num estado de pura satisfação. Mas Jesus redefiniu radicalmente esse conceito. Ele não estava descrevendo um estado de ausência de problemas, mas um estado de favor divino inabalável, mesmo em meio ao caos humano.</p>
             <p>Ele olhou para os rostos dos pescadores cansados, dos camponeses endividados e dos doentes que buscavam cura, e disse:</p>
             <p><em>"Bem-aventurados os pobres de espírito, pois deles é o reino dos céus."</em></p>
             <p>O mundo diria: "Bem-aventurados os ricos, os autossuficientes, os que não precisam de ninguém". Jesus inverteu a lógica. O primeiro passo para entrar no Reino é reconhecer a falência espiritual.</p>
             
             <h2>O Desconcertante Manifesto</h2>
             <p>Uma a uma, Jesus apresentou as características do cidadão do Reino, cada uma delas um contra-ataque aos valores do mundo:</p>
             <ul>
               <li><strong>Os que choram:</strong> Não são os otimistas tolos, mas aqueles que quebrantam o coração pelo pecado e pela dor do mundo. A promessa? Consolação divina.</li>
               <li><strong>Os mansos:</strong> Num império romano que glorificava a força bruta e a espada, Jesus exaltou a mansidão (controle de força, não fraqueza). A herança? A própria terra.</li>
               <li><strong>Os que têm fome e sede de justiça:</strong> Não um desejo passageiro, mas uma necessidade vital, como respirar. Eles serão fartos.</li>
               <li><strong>Os misericordiosos, os puros de coração e os pacificadores:</strong> Eles são chamados de "filhos de Deus".</li>
             </ul>
             <p>E então, a declaração mais radical:</p>
             <p><em>"Bem-aventurados sois quando, por minha causa, vos injuriarem, e vos perseguirem... Alegrai-vos e exultai, porque é grande o vosso galardão nos céus."</em></p>
             <p>Jesus estava alertando seus seguidores: viver segundo as Bem-Aventuranças vai gerar conflito com o sistema do mundo. Mas o foco não é a glória terrena, é a glória celestial.</p>
             
             <h2>Uma Curiosidade Histórica: O "Novo Moisés"</h2>
             <p>Há uma intenção teológica profunda no local escolhido. Assim como Moisés subiu ao Monte Sinai para receber a Lei de Deus (Êxodo 19), Jesus subiu ao monte para expor a Lei de Deus.</p>
             <p>Os evangelistas, especialmente Mateus, constroem uma narrativa intencional de Jesus como o "Novo Moisés".</p>
             <ul>
               <li>Moisés subiu ao monte; Jesus subiu ao monte.</li>
               <li>Moisés recebeu a Lei; Jesus veio cumprir e aprofundar a Lei ("Ouvistes o que foi dito... Eu, porém, vos digo").</li>
               <li>Moisés intermediou a aliança no Sinai; Jesus sela a Nova Aliança com seu próprio sangue.</li>
             </ul>
             <p>Enquanto Moisés trouxe a Lei escrita em tábuas de pedra, Jesus trouxe a Lei escrita no coração, explicando sua verdadeira intenção. O Sermão do Monte não é uma lista de regras para nos condenar, mas um espelho para nos mostrar nossa necessidade de Graça e um mapa para vivermos como filhos do Reino.</p>
             
             <h2>Conclusão: Um Chamado à Contra-Cultura</h2>
             <p>As Bem-Aventuranças não são conselhos para "melhorar a vida" no sentido mundano. Elas são um chamado revolucionário.</p>
             <p>Jesus nos convida a ser estranhos no mundo: a chorar quando o mundo ri, a perdoar quando o mundo se vinga, a buscar a pureza quando o mundo incentiva a corrupção. É um caminho estreito, sim. Mas é o único caminho que leva à verdadeira vida, pois é o caminho do próprio Cristo.</p>
             <p>Ao terminar o Sermão, as multidões ficaram maravilhadas. "Porquanto os ensinava como quem tem autoridade, e não como os escribas" (Mateus 7:29). Eles perceberam que não estavam ouvindo apenas um filósofo, mas o próprio Rei falando sobre o Seu Reino.</p>
          </main>
        ) : isBibliaEmUmAno ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Devocional / Prática Cristã</span>
               <h1>5 Métodos Práticos para Ler a Bíblia Inteira em 2026</h1>
               <div className="article-meta">Por <strong>João Calvino</strong> | 12 Jun, 2026</div>
             </div>
             
             <img src="/bible_reading.png" alt="Leitura Bíblica" className="article-hero-img" loading="lazy" />
             
             <p>Chegamos à metade de 2026. Muitos começaram o ano com a nobre resolução de ler a Bíblia inteira, mas já abandonaram o propósito. Se você se identifica com essa realidade, este artigo é para você.</p>
             <p>A Bíblia possui 1.189 capítulos. Com a estratégia certa, você pode ler as Escrituras completas em menos de um ano — mantendo a constância sem sacrificar sua saúde mental ou espiritual.</p>
             <p>Neste artigo, exploraremos cinco métodos práticos testados e comprovados, além de entender os três tipos de leitura bíblica que todo cristão deveria conhecer.</p>

             <h2>Método 1: Quatro Capítulos por Dia — A Simplicidade que Funciona</h2>
             <p>A conta é simples: 1.189 capítulos ÷ 4 capítulos por dia = 297,25 dias. Em 300 dias, você lê a Bíblia inteira, com 65 dias de margem.</p>
             <p><strong>Como implementar:</strong></p>
             <ul>
               <li>Opção A: Dois capítulos pela manhã + dois à noite</li>
               <li>Opção B: Dois do Antigo Testamento + dois do Novo Testamento</li>
               <li>Opção C: Dois do AT + um Salmo/Provérbios + um do NT</li>
             </ul>
             <p><strong>Ferramentas Recomendadas:</strong></p>
             <ol>
               <li>Bible Journey — Permite criar desafios personalizados</li>
               <li>Bible Reading — Calcula automaticamente quantos capítulos ler por dia</li>
             </ol>

             <h2>Método 2: Leitura Anual Contínua (Gênesis a Apocalipse)</h2>
             <p>Leia a Bíblia capa a capa, distribuindo os capítulos ao longo dos 365 dias.</p>
             <p><strong>Vantagens:</strong></p>
             <ul>
               <li>Progressão narrativa clara</li>
               <li>Flexibilidade diária</li>
               <li>Sem culpa se perder um dia</li>
             </ul>

             <h2>Método 3: Leitura em Conjunto — A Força da Comunhão</h2>
             <p>Ideal para casais ou famílias. Leiam juntos, dividindo a responsabilidade.</p>
             <p><strong>Benefícios:</strong></p>
             <ul>
               <li>Prestação de contas mútua</li>
               <li>Comunhão fortalecida</li>
               <li>Perspectivas diferentes</li>
             </ul>

             <h2>Método 4: Leitura por Tempo — Ideal para Rotinas Corridas</h2>
             <p>Esqueça a contagem de capítulos. Foque em tempo dedicado:</p>
             <ul>
               <li>20 minutos diários → Completa em ~9 meses</li>
               <li>30 minutos diários → Completa em ~6 meses</li>
               <li>60 minutos diários → Completa em ~3 meses</li>
             </ul>

             <h2>Método 5: Combinação Estratégica</h2>
             <ul>
               <li>Segunda a Sexta: 20-30 minutos de leitura contínua</li>
               <li>Sábado: Leitura mais longa (45-60 min) para recuperar dias perdidos</li>
               <li>Domingo: Leitura devocional leve (Salmos ou Provérbios)</li>
             </ul>

             <h2>Os Três Tipos de Leitura Bíblica</h2>
             
             <h3>1. Leitura Devocional</h3>
             <p><strong>Objetivo:</strong> Aplicação pessoal e comunhão com Deus<br />Ritmo mais lento, foco em meditação e oração</p>

             <h3>2. Leitura de Conhecimento (Panorâmica)</h3>
             <p><strong>Objetivo:</strong> Familiaridade com o conteúdo bíblico geral<br />Ritmo mais rápido, foco no "grande quadro"</p>

             <h3>3. Leitura de Estudo (Exegese)</h3>
             <p><strong>Objetivo:</strong> Compreensão profunda e exaustiva<br />Ritmo lento, uso de ferramentas e comentários</p>

             <h2>Curiosidade: A Bíblia em 7 Dias</h2>
             <p>É possível ler a Bíblia inteira em apenas 7 dias (170 capítulos por dia, ~8-10 horas diárias). Alguns cristãos fazem isso em retiros especiais.</p>

             <h2>O Segredo: Constância, Não Perfeição</h2>
             <p><em>"A queda nasce justamente nas exceções."</em></p>
             <ul>
               <li>Está cansado? Leia apenas um Salmo, mas leia</li>
               <li>Sem tempo? Leia 5 minutos no ônibus, mas leia</li>
               <li>Sem foco? Leia em voz alta, mas leia</li>
             </ul>
             <p>O importante não é a quantidade, é a constância.</p>

             <h2>Plano de Ação: Comece Agora</h2>
             <ol>
               <li>Escolha UM método</li>
               <li>Defina um horário fixo</li>
               <li>Baixe um aplicativo de acompanhamento</li>
               <li>Encontre um parceiro de responsabilidade</li>
               <li>Celebre pequenas vitórias</li>
             </ol>

             <hr />
             <p><strong>Referência:</strong> Este artigo foi baseado no vídeo "Como Ler a Bíblia Inteira em 2026" do canal [Nome do Canal] no YouTube.</p>
             <p><strong>Assista ao vídeo original:</strong> <a href="https://www.youtube.com/watch?v=OWsLeHlsdnU" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=OWsLeHlsdnU</a></p>

             <hr />
             <p><strong>Para Reflexão:</strong></p>
             <ul>
               <li>Qual método você vai implementar a partir de hoje?</li>
               <li>Que exceções você tem criado que estão te impedindo de ler a Bíblia consistentemente?</li>
             </ul>

             <p><strong>Desafio Prático:</strong><br />Escolha UM dos métodos e comprometa-se a segui-lo pelos próximos 30 dias.</p>

             <p><strong>Leitura Recomendada:</strong></p>
             <ul>
               <li>Salmo 119:105</li>
               <li>Josué 1:8</li>
               <li>2 Timóteo 3:16-17</li>
             </ul>
          </main>
        ) : isAhJesus ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Devocional / Louvor e Adoração</span>
               <h1>"Ah Jesus, Coração Igual ao Teu": O Clamor de Julliany Souza e o Que a Bíblia Diz Sobre um Coração Transformado</h1>
               <div className="article-meta">Por <strong>João Calvino</strong> | 12 Jun, 2026</div>
             </div>
             
             <img src="/worship_hero.png" alt="Coração Igual ao Teu - Julliany Souza" className="article-hero-img" loading="lazy" />
             
             <p>Em 2026, uma canção tem ecoado profundamente nos corações dos cristãos brasileiros: <strong>"Ah Jesus - Coração Igual ao Teu"</strong>, da cantora <strong>Julliany Souza</strong>. Com uma letra que expõe a alma humana em sua fragilidade e clama por transformação radical, esse louvor tem tocado milhões de pessoas.</p>
             <p>Mas o que torna essa canção tão poderosa? São as <strong>verdades bíblicas profundas</strong> que ela carrega. Neste artigo, vamos explorar os principais temas da música à luz das Escrituras.</p>

             <h2>🎵 TEMA 1: "Ah Jesus, Rompe Meu Orgulho"</h2>
             <p><strong>O Que a Bíblia Diz:</strong></p>
             <p>O orgulho é o pecado raiz que nos separa de Deus. Tiago 4:6 nos lembra: <em>"Deus resiste aos soberbos, mas dá graça aos humildes."</em></p>
             <p>Paulo, em Filipenses 2:3-5, exorta: <em>"Nada façais por contenda ou por vanglória, mas por humildade; cada um considere os outros superiores a si mesmo."</em></p>
             <p><strong>Reflexão Prática:</strong></p>
             <ul>
               <li>Em quais áreas da sua vida o orgulho ainda domina?</li>
               <li>Como olhar para a cruz pode curar seu orgulho hoje?</li>
             </ul>
             <p><strong>Versículo para Memorizar:</strong> <em>"Antes, humilhai-vos debaixo da potente mão de Deus, para que a seu tempo vos exalte."</em> — 1 Pedro 5:6</p>

             <hr />

             <h2>🎵 TEMA 2: "Tira a Dureza do Meu Coração"</h2>
             <p><strong>O Que a Bíblia Diz:</strong></p>
             <p>Em Ezequiel 36:26, Deus promete: <em>"Dar-vos-ei coração novo e porei dentro de vós espírito novo; tirarei de vós o coração de pedra e vos darei coração de carne."</em></p>
             <p>A regeneração é obra soberana do Espírito Santo. Um coração duro é incapaz de se arrepender verdadeiramente.</p>
             <p><strong>Reflexão Prática:</strong></p>
             <ul>
               <li>Seu coração tem sido sensível à voz do Espírito Santo?</li>
               <li>Ore: <em>"Cria em mim, ó Deus, um coração puro"</em> (Salmo 51:10)</li>
             </ul>
             <p><strong>Versículo para Memorizar:</strong> <em>"Antes, sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo."</em> — Efésios 4:32</p>

             <hr />

             <h2>🎵 TEMA 3: "Eu Sou o Vaso, Tu És o Oleiro"</h2>
             <p><strong>O Que a Bíblia Diz:</strong></p>
             <p>Isaías 64:8 declara: <em>"Mas agora, ó SENHOR, tu és nosso Pai; nós o barro e tu o nosso oleiro; e todos nós, obra das tuas mãos."</em></p>
             <p>Paulo desenvolve esse tema em Romanos 9:20-21, mostrando a soberania divina sobre nossas vidas.</p>
             <p>Jeremias 18:1-6 registra que Deus pode <strong>refazer</strong> um vaso quando ele não sai conforme o planejado — isso é graça restauradora!</p>
             <p><strong>Reflexão Prática:</strong></p>
             <ul>
               <li>Você tem resistido à moldagem de Deus ou se submetido às Suas mãos?</li>
               <li>Lembre-se: o oleiro nunca desperdiça o barro.</li>
             </ul>
             <p><strong>Versículo para Memorizar:</strong> <em>"Temos, porém, este tesouro em vasos de barro, para que a excelência do poder seja de Deus e não de nós."</em> — 2 Coríntios 4:7</p>

             <hr />

             <h2>🎵 TEMA 4: "Tomo Minha Cruz e Me Nego a Si Mesmo"</h2>
             <p><strong>O Que a Bíblia Diz:</strong></p>
             <p>Jesus foi categórico em Lucas 9:23: <em>"Se alguém quer vir após mim, negue-se a si mesmo, e, de dia em dia, tome a sua cruz e siga-me."</em></p>
             <p>Paulo expressa essa realidade em Gálatas 2:20: <em>"Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim."</em></p>
             <p><strong>Reflexão Prática:</strong></p>
             <ul>
               <li>O que significa "negar-se a si mesmo" na prática do seu dia a dia?</li>
               <li>Lembre-se: não há cristianismo sem cruz.</li>
             </ul>
             <p><strong>Versículo para Memorizar:</strong> <em>"E os que são de Cristo crucificaram a carne com as suas paixões e concupiscências."</em> — Gálatas 5:24</p>

             <hr />

             <h2>🎵 TEMA 5: "Porque do Pecado Já Não Sou Prisioneiro"</h2>
             <p><strong>O Que a Bíblia Diz:</strong></p>
             <p>Romanos 6:6-7 proclama: <em>"Sabendo isto, que o nosso homem velho foi com ele crucificado, para que o corpo do pecado seja desfeito, para que não sirvamos mais ao pecado."</em></p>
             <p>Jesus declarou em João 8:36: <em>"Se, pois, o Filho vos libertar, verdadeiramente sereis livres."</em></p>
             <p><strong>Reflexão Prática:</strong></p>
             <ul>
               <li>Você vive como alguém liberto ou ainda age como escravo?</li>
               <li>A liberdade em Cristo não é licença para pecar, mas poder para obedecer.</li>
             </ul>
             <p><strong>Versículo para Memorizar:</strong> <em>"Estai, pois, firmes na liberdade com que Cristo nos libertou e não torneis a meter-vos em jugo de servidão."</em> — Gálatas 5:1</p>

             <hr />

             <h2>🎵 TEMA 6: "Se Recebi Teu Perdão, Mas Não Consigo Perdoar"</h2>
             <p><strong>O Que a Bíblia Diz:</strong></p>
             <p>Jesus aborda isso na <strong>parábola do credor incompassivo</strong> (Mateus 18:23-35). A incapacidade de perdoar revela um coração não transformado.</p>
             <p>Efésios 4:32 ordena: <em>"Sede uns para com os outros benignos, misericordiosos, perdoando-vos uns aos outros, como também Deus vos perdoou em Cristo."</em></p>
             <p><strong>Reflexão Prática:</strong></p>
             <ul>
               <li>Há alguém que você ainda se recusa a perdoar?</li>
               <li>Lembre-se: você foi perdoado de uma dívida infinitamente maior.</li>
             </ul>
             <p><strong>Versículo para Memorizar:</strong> <em>"Suportando-vos uns aos outros e perdoando-vos uns aos outros, se algum tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também."</em> — Colossenses 3:13</p>

             <hr />

             <h2>🎵 TEMA 7: "Dame um Coração Igual ao Teu"</h2>
             <p><strong>O Que a Bíblia Diz:</strong></p>
             <p>Romanos 8:29 revela o propósito eterno de Deus: <em>"Os que dantes conheceu, também os predestinou para serem conformes à imagem de seu Filho."</em></p>
             <p>O coração de Cristo era:</p>
             <ul>
               <li><strong>Humilde</strong> (Filipenses 2:5-8)</li>
               <li><strong>Obediente até a morte</strong> (João 6:38)</li>
               <li><strong>Compassivo</strong> (Mateus 9:36)</li>
             </ul>
             <p><strong>Reflexão Prática:</strong></p>
             <ul>
               <li>Você deseja verdadeiramente um coração como o de Cristo?</li>
               <li>A santificação é obra do Espírito, mas exige nossa cooperação.</li>
             </ul>

             <hr />

             <h2>🎤 Sobre Julliany Souza</h2>
             <p>Julliany Souza tem sido usada por Deus para ministrar corações através de louvores profundos e teologicamente ricos. "Ah Jesus - Coração Igual ao Teu" é parte do projeto <strong>#louvorcomletra</strong>, que busca resgatar a profundidade teológica no louvor.</p>
             <p><strong>Assista ao vídeo oficial:</strong> <a href="https://www.youtube.com/watch?v=Z044IcMUEKE" target="_blank" rel="noreferrer">Ah Jesus - Coração Igual ao Teu</a><br />
             <strong>Canal:</strong> Julliany Souza no YouTube</p>

             <hr />

             <h2>💡 Conclusão</h2>
             <p>"Ah Jesus, Coração Igual ao Teu" não é apenas uma música bonita — é uma <strong>oração teológica</strong> que nos confronta com verdades eternas.</p>
             <p>Que essa canção não seja apenas um momento emocional, mas um <strong>estilo de vida</strong>.</p>

             <hr />

             <p><strong>Plano de Leitura Sugerido:</strong></p>
             <ul>
               <li><strong>Dia 1:</strong> Humildade e Orgulho — Filipenses 2:1-11, Tiago 4:1-10</li>
               <li><strong>Dia 2:</strong> Coração Novo — Ezequiel 36:25-27, Salmo 51</li>
               <li><strong>Dia 3:</strong> Oleiro e Barro — Isaías 64, Jeremias 18:1-11</li>
               <li><strong>Dia 4:</strong> Tomando a Cruz — Lucas 9:23-26, Gálatas 2:20</li>
               <li><strong>Dia 5:</strong> Libertos do Pecado — Romanos 6:1-14, João 8:31-36</li>
               <li><strong>Dia 6:</strong> O Perdão — Mateus 18:21-35, Efésios 4:32</li>
               <li><strong>Dia 7:</strong> Conformados a Cristo — Romanos 8:28-30, 1 Pedro 2:21</li>
             </ul>

             <hr />
             <p><strong>Referência:</strong> Este artigo foi baseado no vídeo "Ah Jesus - Coração Igual ao Teu" de Julliany Souza.<br />
             <strong>Assista ao vídeo:</strong> <a href="https://www.youtube.com/watch?v=Z044IcMUEKE" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=Z044IcMUEKE</a></p>
          </main>
        ) : isSilencioDeDeus ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Devocional / Vida Cristã</span>
               <h1>O Silêncio de Deus nas Dificuldades: Confiando no Caráter Revelado do Senhor</h1>
               <div className="article-meta">Por <strong>Charles Spurgeon</strong> | 10 Abr, 2026</div>
             </div>
             
             <img src="/silence_of_god.png" alt="O Silêncio de Deus" className="article-hero-img" loading="lazy" />
             
             <p><em>"Até quando, SENHOR, continuamente clamarei, e tu não me ouvirás? Gritarei: Violência! E não salvarás?"</em> — Habacuque 1:2</p>
             <p>Há momentos na jornada cristã em que o céu parece de bronze. Clamamos, oramos, jejuamos, mas parecem não haver respostas. O silêncio de Deus é uma das experiências mais angustiantes que um crente pode enfrentar. Contudo, é precisamente nesses momentos que somos chamados a confiar não em nossos sentimentos, mas no caráter imutável do Senhor conforme revelado em Sua Palavra.</p>

             <h2>Quando Deus Parece Se Calar</h2>
             <p>O salmista conhecia bem essa experiência. No Salmo 13, Davi pergunta quatro vezes "até quando?":</p>
             <p><em>"Até quando, SENHOR? Esconder-te-ás para sempre? Até quando arderá a tua ira como fogo?"</em> (v.1)</p>
             <p>Esses não são gritos de descrença, mas de fé agonizante. São a expressão de almas que conhecem a Deus o suficiente para saber que Ele <em>deveria</em> estar agindo, mas que, na experiência presente, parecem abandonadas.</p>

             <h3>O Perigo de Confiar nos Sentimentos</h3>
             <p>Nossos sentimentos são volúveis. Eles oscilam como as ondas do mar, influenciados por cansaço físico, circunstâncias adversas, ataque espiritual e solidão.</p>
             <p>Se confiarmos apenas no que sentimos, naufragaremos. Por isso, <strong>devemos confiar no caráter revelado do Senhor ao invés de nossos sentimentos</strong>.</p>

             <h2>O Que a Bíblia Diz Sobre o Silêncio de Deus</h2>
             
             <h3>1. O Silêncio Não É Ausência</h3>
             <p>Isaías 45:15 declara: <em>"Verdadeiramente, tu és o Deus que se esconde, o Deus de Israel, o Salvador."</em></p>
             <p>Note que mesmo escondido, Ele ainda é "o Salvador". Sua natureza não muda porque Sua presença parece distante.</p>

             <h3>2. O Silêncio Tem Propósito</h3>
             <p>Deuteronômio 8:2-3 revela: <em>"Para te humilhar, para te provar, para saber o que estava no teu coração."</em></p>
             <p>O deserto do silêncio divino é uma escola, não um castigo. É onde aprendemos a confiar não nas bênçãos de Deus, mas no Deus das bênçãos.</p>

             <h3>3. O Silêncio É Temporário</h3>
             <p>Isaías 54:7-8 promete: <em>"Por um breve momento te deixei, mas com grandes compaixões te recolherei."</em></p>

             <h2>Como Agir Quando Deus Parece Se Calar</h2>
             
             <h3>1. Continue Clamando</h3>
             <p>Lucas 18:1-8 registra a parábola da viúva persistente. Jesus conclui: <em>"Deus não fará justiça aos seus escolhidos, que a ele clamam dia e noite?"</em></p>

             <h3>2. Lembre-se do Passado</h3>
             <p>Salmo 77:11-12: <em>"Lembrar-me-ei das obras do SENHOR; lembrar-me-ei, sim, das tuas maravilhas da antiguidade."</em></p>

             <h3>3. Confie no Caráter de Deus</h3>
             <p>Malaquias 3:6: <em>"Porque eu, o SENHOR, não mudo."</em></p>
             <p>Deus é bom, sábio, soberano e amoroso — mesmo quando parece ausente.</p>

             <h3>4. Espere com Paciência</h3>
             <p>Salmo 27:14: <em>"Espera no SENHOR, anima-te, e ele fortalecerá o teu coração."</em></p>

             <h2>Conclusão</h2>
             <p>O Salmo 40 termina com uma declaração gloriosa: <em>"Pôs na minha boca um cântico novo, um hino ao nosso Deus."</em></p>
             <p>O mesmo Deus que permite o silêncio também concede o cântico. Confie no caráter revelado de Deus. Ele é fiel. Ele é bom. Ele <strong>nunca</strong> se atrasa.</p>

             <hr />

             <h2>📚 Sobre Charles Haddon Spurgeon (1834-1892)</h2>
             
             <h3>Biografia</h3>
             <p>Charles Haddon Spurgeon, conhecido como o "Príncipe dos Pregadores", nasceu em 19 de junho de 1834 em Kelvedon, Essex, Inglaterra. Convertido em 1850, aos 15 anos, começou a pregar aos 16 anos.</p>
             <p>Em 1854, aos 19 anos, foi chamado para pastorear a Igreja Batista de New Park Street em Londres. Sua pregação poderosa e centrada em Cristo atraiu multidões. Em 1861, a congregação mudou-se para o Metropolitan Tabernacle, que comportava 6.000 pessoas.</p>
             <p>Spurgeon pregou sem notas, com clareza doutrinária e aplicação prática. Estima-se que pregou para mais de 10 milhões de pessoas em sua vida.</p>

             <h3>Características de Seu Ministério</h3>
             <p><strong>Teologia Calvinista:</strong> Spurgeon era firmemente calvinista, crendo na soberania absoluta de Deus na salvação.</p>
             <p><strong>Paixão pelas Almas:</strong> Apesar de sua teologia da eleição, era um evangelista ardente. Fundiu um orfanato que cuidou de mais de 500 crianças.</p>
             <p><strong>Sofrimento e Perseverança:</strong> Sofreu de gota e depressão ao longo da vida.</p>
             <p>Faleceu em 31 de janeiro de 1892, aos 57 anos.</p>

             <hr />

             <h2>📖 Principais Obras de Spurgeon</h2>
             
             <h3>1. <strong>The Treasury of David</strong> (1869-1885)</h3>
             <p>Sua obra magna — um comentário exaustivo sobre os Salmos em 7 volumes. Considerado um dos melhores comentários sobre Salmos já escritos.</p>

             <h3>2. <strong>Morning and Evening</strong> (1859)</h3>
             <p>Devocional diário com leituras matinais e vespertinas. Um clássico da literatura devocional reformada.</p>

             <h3>3. <strong>All of Grace</strong> (1885)</h3>
             <p>Sua obra evangelística mais famosa. Explica de forma clara a doutrina da salvação pela graça somente.</p>

             <h3>4. <strong>Spurgeon's Sermons</strong> (63 volumes)</h3>
             <p>Mais de 3.500 sermões publicados — um recorde histórico.</p>

             <h3>5. <strong>Lectures to My Students</strong> (1875-1881)</h3>
             <p>Três volumes de palestras para estudantes de teologia e pastores.</p>

             <h3>6. <strong>The Sword and the Trowel</strong> (1865-1892)</h3>
             <p>Revista mensal que cobria questões teológicas, sociais e eclesiásticas.</p>

             <hr />
             <p><strong>Legado:</strong> Spurgeon é citado por pregadores como John Piper e Mark Dever como uma das maiores influências em suas vidas.</p>
             <p><strong>Citação Famosa:</strong> <em>"Um ministério que não é nascido de joelhos morrerá de joelhos."</em></p>
          </main>
        ) : (
          <>
            {/* PRIMEIRA DOBRA (HERO MAGAZINE) - 60 / 20 / 20 */}
            <section className="hero-grid section-mb">
              {/* Esquerda (60%) */}
              <div className="hero-main">
                <a href="/ah-jesus-coracao-igual-ao-teu-analise-biblica-julliany-souza" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/worship_hero.png" alt="Ah Jesus, Coração Igual ao Teu" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <span className="cat-tag" style={{display: 'inline-block', marginTop: '15px'}}>Devocional / Louvor e Adoração</span>
                  <h1 style={{marginTop: '10px'}}>"Ah Jesus, Coração Igual ao Teu": O Clamor de Julliany Souza e o Que a Bíblia Diz Sobre um Coração Transformado</h1>
                  <p className="excerpt">
                    Descubra o que a Bíblia diz sobre cada verso do hit 'Ah Jesus, Coração Igual ao Teu' de Julliany Souza. Uma análise teológica profunda dos 7 temas principais da música com versículos, reflexões práticas e aplicação para sua vida cristã.
                  </p>
                  <div className="meta">por <span>João Calvino</span> · 12 Jun, 2026</div>
                </a>
              </div>

              {/* Centro (20%) */}
              <div className="hero-center">
                <div className="article-sm">
                  <div className="img-ph" loading="lazy"></div>
                  <h3>As Cinco Solas e sua relevância hoje</h3>
                  <span className="cat-tag red">História Bíblica</span>
                  <div className="meta">26 Dez, 2025</div>
                </div>
                <div className="article-sm">
                  <div className="img-ph" loading="lazy"></div>
                  <h3>Justificação pela Fé Somente</h3>
                  <span className="cat-tag">Apologética</span>
                  <div className="meta">07 Dez, 2025</div>
                </div>
              </div>

              {/* Direita (20%) */}
              <div className="article-list">
                <div className="article-list-item">
                  <h4>A Necessidade da Pregação Expositiva</h4>
                  <p>Uma análise de como a exposição fiel do texto alimenta a igreja.</p>
                  <div className="meta">13 Mai, 2026</div>
                </div>
                <div className="article-list-item">
                  <h4>O Papel da Lei e do Evangelho</h4>
                  <p>Compreendendo a distinção correta entre a lei moral e a graça salvadora.</p>
                  <div className="meta">01 Dez, 2025</div>
                </div>
                <div className="article-list-item">
                  <h4>O Culto Regulado pelas Escrituras</h4>
                  <p>Por que devemos adorar a Deus apenas como Ele prescreveu.</p>
                  <div className="meta">14 Fev, 2025</div>
                </div>
                <div className="article-list-item">
                  <h4>Santificação: Uma obra de uma vida inteira</h4>
                  <p>Os desafios contínuos do crente contra o pecado residente.</p>
                  <div className="meta">13 Jan, 2025</div>
                </div>
              </div>
            </section>

            {/* AD PLACEHOLDER */}
            <div className="ad-ph ad-leaderboard">
              Google AdSense - Espaço Reservado
            </div>

            {/* SEÇÃO 1: ESTUDOS BÍBLICOS */}
            <section className="section-mb">
              <div className="section-title-wrap">
                <h2>Estudos Bíblicos</h2>
                <a href="#">Ver todos →</a>
              </div>
              
              <div className="grid-4">
                <div className="grid-4-item">
                  <div className="img-ph" loading="lazy"></div>
                  <h3>Gênesis: A Criação e a Queda do Homem</h3>
                  <div className="meta">15 Jun, 2026</div>
                </div>
                <div className="grid-4-item">
                  <a href="/artigo/sarca-ardente" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/sarca-ardente.jpg" alt="A Sarça Ardente" className="img-ph" loading="lazy" />
                    <h3>A Sarça Ardente: Quando Deus Encontrou Moisés no Deserto</h3>
                    <div className="meta">30 Mai, 2026</div>
                  </a>
                </div>
                <div className="grid-4-item">
                  <div className="img-ph" loading="lazy"></div>
                  <h3>A Relevância do Pacto da Graça</h3>
                  <div className="meta">18 Abr, 2026</div>
                </div>
                <div className="grid-4-item">
                  <div className="img-ph" loading="lazy"></div>
                  <h3>A Carta aos Gálatas e a Liberdade Cristã</h3>
                  <div className="meta">14 Mar, 2026</div>
                </div>
              </div>
            </section>

            {/* SEÇÃO 2: DEVOCIONAIS */}
            <section className="section-mb">
              <div className="section-title-wrap">
                <h2>Devocionais</h2>
                <a href="#">Ver todos →</a>
              </div>
              
              <div className="grid-3">
                <div className="grid-3-item">
                  <a href="/artigo/sermao-do-monte" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/sermao-do-monte.png" alt="Sermão do Monte" className="img-ph" loading="lazy" />
                    <h3>Sermão do Monte: As Bem-Aventuranças e a Nova Constituição do Reino</h3>
                    <p>Jesus estabeleceu a constituição de um novo Reino e inverteu a lógica do mundo...</p>
                    <div className="meta">por <span>João Calvino</span> · 05 Jun</div>
                  </a>
                </div>
                <div className="grid-3-item">
                  <a href="/silencio-deus-dificuldades-charles-spurgeon" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/silence_of_god.png" alt="O Silêncio de Deus" className="img-ph" loading="lazy" />
                    <h3>O Silêncio de Deus nas Dificuldades: Confiando no Caráter Revelado do Senhor</h3>
                    <p>Quando clamamos e parecemos não ouvir resposta, devemos confiar no caráter revelado do Senhor ao invés de nossos sentimentos...</p>
                    <div className="meta">por <span>Charles Spurgeon</span> · 10 Abr, 2026</div>
                  </a>
                </div>
                <div className="grid-3-item">
                  <a href="/como-ler-biblia-inteira-2026-metodos-praticos" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/bible_reading.png" alt="Leitura Bíblica" className="img-ph" loading="lazy" />
                    <h3>5 Métodos Práticos para Ler a Bíblia Inteira em 2026</h3>
                    <p>Descubra 5 métodos práticos e testados para ler a Bíblia inteira em 2026, mesmo com rotina corrida. Técnicas flexíveis, aplicativos recomendados e o segredo da constância.</p>
                    <div className="meta">por <span>João Calvino</span> · 12 Jun, 2026</div>
                  </a>
                </div>
              </div>
            </section>

            {/* AD PLACEHOLDER */}
            <div className="ad-ph ad-leaderboard">
              Google AdSense - Espaço Reservado
            </div>

            {/* SEÇÃO 3: TEOLOGIA (33/33/33) */}
            <section className="section-mb">
              <div className="section-title-wrap">
                <h2>Teologia</h2>
                <a href="#">Ver todos →</a>
              </div>
              
              <div className="sect3-grid">
                <div className="sect3-left">
                  <span className="cat-tag">Teologia · 18 Abr, 2026</span>
                  <h3>A Doutrina da Eleição Incondicional</h3>
                  <p>
                    Um exame profundo de Efésios 1 e Romanos 9, demonstrando que a escolha salvífica 
                    de Deus repousa inteiramente em Sua graça soberana e beneplácito, sem qualquer 
                    previsão de mérito ou fé humana. Entenda as objeções mais comuns e a beleza desta 
                    doutrina.
                  </p>
                  <a href="#" className="sect3-btn">Read More</a>
                </div>
                
                <div className="sect3-center">
                  <div className="img-ph" loading="lazy"></div>
                </div>
                
                <div className="article-list">
                  <div className="article-list-item">
                    <h4>A Trindade: Um só Deus em Três Pessoas</h4>
                    <div className="meta">por <span>R.C. Sproul</span></div>
                  </div>
                  <div className="article-list-item">
                    <h4>A União Hipostática de Cristo</h4>
                    <div className="meta">por <span>Herman Bavinck</span></div>
                  </div>
                  <div className="article-list-item">
                    <h4>Os Sacramentos: Batismo e Ceia</h4>
                    <div className="meta">por <span>João Calvino</span></div>
                  </div>
                  <div className="article-list-item">
                    <h4>A Infalibilidade e Inerrância das Escrituras</h4>
                    <div className="meta">por <span>B.B. Warfield</span></div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* AD PLACEHOLDER */}
            <div className="ad-ph ad-leaderboard" style={{marginBottom: '40px'}}>
              Google AdSense - Final da Página
            </div>
          </>
        )}
      </div>

      {/* FOOTER COMPLETO PARA ADSENSE */}
      <footer className="footer-main">
        <div className="container footer-grid">
          {/* Bloco 1: Sobre o Portal */}
          <div className="footer-col footer-about">
            <h4>Sobre o Portal</h4>
            <h5 className="footer-logo">Soli Deo Gloria</h5>
            <p>
              Um portal dedicado ao estudo profundo das Escrituras Sagradas, Teologia Sistemática, Apologética e Devocionais edificantes. Nosso compromisso é com a fidelidade bíblica e a proclamação da soberania de Deus em todas as esferas da vida.
            </p>
          </div>
          
          {/* Bloco 2: Links Úteis */}
          <div className="footer-col">
            <h4>Links Úteis</h4>
            <ul className="footer-links">
              <li><a href="#">Quem Somos / Sobre Nós</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Anuncie Conosco</a></li>
              <li><a href="#">Mapa do Site</a></li>
            </ul>
          </div>
          
          {/* Bloco 3: Legal e Privacidade */}
          <div className="footer-col">
            <h4>Legal e Privacidade</h4>
            <ul className="footer-links">
              <li><a href="/politica-de-privacidade">Política de Privacidade</a></li>
              <li><a href="/termos-de-uso">Termos de Uso</a></li>
              <li><a href="/politica-de-cookies">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bloco 4: Copyright & Transparência */}
        <div className="footer-bottom">
          <div className="container">
            <p className="copyright-title">&copy; 2026 Soli Deo Gloria — Todos os direitos reservados.</p>
            <p>O conteúdo deste site é protegido por direitos autorais. É proibida a reprodução total ou parcial sem autorização prévia por escrito.</p>
            <p>Este site exibe anúncios e utiliza cookies controlados pelo Google AdSense para fins de personalização de publicidade e análise de tráfego. Ao continuar navegando, você concorda com a nossa <a href="/politica-de-privacidade">Política de Privacidade</a>.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
