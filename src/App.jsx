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
  const isEleicao = path === '/doutrina-eleicao-incondicional-efesios-romanos';
  const isGalatas = path === '/carta-galatas-liberdade-crista-estudo-completo';
  const isProvisao = path === '/deus-honrou-fe-testemunho-milagres-provisao-divina';
  const isCincoSolas = path === '/cinco-solas-relevancia-hoje-reforma-protestante';
  const isEstudosBiblicos = path === '/estudos-biblicos';
  const isPersonagensBiblicos = path === '/personagens-biblicos';
  const isPauloTarso = path === '/paulo-tarso-apostolo-nacoes';
  const isSamuel = path === '/samuel-profeta-voz-deus-trevas-israel';
  const isJo = path === '/jo-homem-perdeu-tudo-soberania-divina';
  const isTestemunhos = path === '/testemunhos';
  const isTestemunhoDeusEBom = path === '/testemunho-deus-e-bom-historia-fe-transformacao';
  const isTestemunhoDesespero = path === '/testemunho-desespero-esperanca';
  const isTestemunhoEEle = path === '/testemunho-e-ele-cancao-nasceu-deserto-paulo-vicente';
  const isTestemunhoThamires = path === '/testemunho-thamires-musica-cura-aquieta-minhalma';
  const isTestemunhoJulliany = path === '/testemunho-julliany-souza-louvor-arma-espiritual-familia';
  const isAna = path === '/ana-mae-orou-chorou-gerou-profeta-samuel';
  const isDavi = path === '/pastor-conquistou-trono-jornada-davi-belem-jerusalem';
  const isEster = path === '/ester-rainha-salvou-povo-deus-age-sombras';

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
              <li><a href="/estudos-biblicos">Estudos Bíblicos</a></li>
              <li><a href="#">Devocionais</a></li>
              <li><a href="#">Cursos</a></li>
              <li><a href="/personagens-biblicos">Personagens Bíblicos</a></li>
              <li><a href="/testemunhos">Testemunhos</a></li>
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
        ) : isEstudosBiblicos ? (
          <main className="section-mb">
            <div className="section-title">
              <h2>Estudos Bíblicos</h2>
            </div>
            <div className="grid-2" style={{marginTop: '2rem'}}>
              <div className="grid-2-item">
                <a href="/cinco-solas-relevancia-hoje-reforma-protestante" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/cinco_solas.png" alt="As Cinco Solas e Sua Relevância Hoje" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>As Cinco Solas e Sua Relevância Hoje: Os Pilares da Reforma que Ainda Transformam Vidas</h3>
                  <div className="meta">26 Dez, 2025</div>
                </a>
              </div>

              <div className="grid-2-item">
                <a href="/artigo/sarca-ardente" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/sarca-ardente.jpg" alt="A Sarça Ardente" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>A Sarça Ardente: Quando Deus Encontrou Moisés no Deserto</h3>
                  <div className="meta">30 Mai, 2026</div>
                </a>
              </div>
            </div>

            <div className="grid-3" style={{marginTop: '2rem'}}>
              <div className="grid-3-item">
                <a href="/carta-galatas-liberdade-crista-estudo-completo" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/galatas.png" alt="A Carta aos Gálatas e a Liberdade Cristã" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>A Carta aos Gálatas e a Liberdade Cristã: O Evangelho da Graça Contra o Legalismo</h3>
                  <div className="meta">por João Calvino · 14 Mar, 2026</div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/artigo/sermao-do-monte" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/sermao-do-monte.png" alt="Sermão do Monte" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Sermão do Monte: As Bem-Aventuranças e a Nova Constituição do Reino</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px'}}>Jesus estabeleceu a constituição de um novo Reino e inverteu a lógica do mundo...</p>
                  <div className="meta">10 Abr, 2026</div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/silence_of_god.png" alt="O Silêncio de Deus nas Dificuldades" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>O Silêncio de Deus nas Dificuldades: Confiando no Caráter Revelado do Senhor</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px'}}>Quando clamamos e parecemos não ouvir resposta, devemos confiar no caráter revelado do Senhor ao invés de nossos sentimentos...</p>
                  <div className="meta">por Charles Spurgeon · 10 Abr, 2026</div>
                </a>
              </div>
            </div>

            <div className="grid-2" style={{marginTop: '2rem'}}>
              <div className="grid-2-item">
                <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/metodos_biblia.png" alt="5 Métodos Práticos para Ler a Bíblia Inteira em 2026" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>5 Métodos Práticos para Ler a Bíblia Inteira em 2026</h3>
                  <div className="meta">20 Abr, 2026</div>
                </a>
              </div>

              <div className="grid-2-item">
                <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/eleicao.png" alt="A Doutrina da Eleição Incondicional" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>A Doutrina da Eleição Incondicional</h3>
                  <div className="meta">05 Mai, 2026</div>
                </a>
              </div>
            </div>

            <div className="grid-2" style={{marginTop: '2rem'}}>
              <div className="grid-2-item">
                <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/trindade.png" alt="A Trindade: Um só Deus em Três Pessoas" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>A Trindade: Um só Deus em Três Pessoas</h3>
                  <div className="meta">11 Fev, 2026</div>
                </a>
              </div>

              <div className="grid-2-item">
                <a href="#" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/santificacao.png" alt="Santificação: Uma obra de uma vida inteira" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Santificação: Uma obra de uma vida inteira</h3>
                  <div className="meta">Vida Cristã</div>
                </a>
              </div>
            </div>
          </main>
        ) : isPersonagensBiblicos ? (
          <main className="section-mb">
            <div className="section-title">
              <h2>Personagens Bíblicos</h2>
            </div>
            <div className="grid-3" style={{marginTop: '2rem'}}>
              
              <div className="grid-3-item">
                <a href="/ana-mae-orou-chorou-gerou-profeta-samuel" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/ana_orando.png" alt="Ana: A Mãe que Orou, Chorou e Gerou um Profeta" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Ana: A Mãe que Orou, Chorou e Gerou um Profeta</h3>
                  <div className="meta">Mulheres da Bíblia</div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/ester-rainha-salvou-povo-deus-age-sombras" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/ester_rainha.png" alt="Rainha Ester" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Ester: A Rainha que Salvou um Povo</h3>
                  <div className="meta">23 Jun, 2026</div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/pastor-conquistou-trono-jornada-davi-belem-jerusalem" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/davi_pastor.png" alt="O Pastor que Conquistou um Trono" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>O Pastor que Conquistou um Trono: A Jornada de Davi</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px'}}>Do Curral de Belém ao Palácio de Jerusalém.</p>
                  <div className="meta">História Bíblica / Liderança</div>
                </a>
              </div>

            </div>

            <div className="grid-3" style={{marginTop: '2rem'}}>
              
              <div className="grid-3-item">
                <a href="/paulo-tarso-apostolo-nacoes" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/paulo_de_tarso.png" alt="Paulo de Tarso" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Paulo de Tarso: O Perseguidor Chamado para Ser Apóstolo das Nações</h3>
                  <div className="meta">Personagens Bíblicos</div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/samuel-profeta-voz-deus-trevas-israel" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/samuel_profeta.png" alt="Samuel: O Profeta" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Samuel: O Profeta que Foi a Voz de Deus nas Trevas de Israel</h3>
                  <div className="meta">Personagens Bíblicos</div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/jo-homem-perdeu-tudo-soberania-divina" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/jo_patriarca.png" alt="Jó: O Patriarca" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Jó: O Homem que Perdeu Tudo, Mas Não Perdeu a Deus</h3>
                  <div className="meta">Personagens Bíblicos</div>
                </a>
              </div>

            </div>
          </main>
        ) : isPauloTarso ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Personagens Bíblicos</span>
               <h1>Paulo de Tarso: O Perseguidor Chamado para Ser Apóstolo das Nações</h1>
               <div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 24 Jun, 2026</div>
             </div>
             <img src="/paulo_de_tarso.png" alt="Paulo de Tarso" className="article-hero-img" loading="lazy" />
             <div className="article-body">
               <div className="quote-box">
                 "Mas Deus, que me separou desde o ventre de minha mãe e me chamou pela sua graça, teve por bem revelar seu Filho em mim, para que eu o pregasse entre os gentios." — <strong>Gálatas 1:15-16</strong>
               </div>
               
               <p>Há chamados na Bíblia que mudam o curso da história. Moisés no deserto. Davi no curral. Isaías no templo. Mas nenhum é mais dramático, mais transformador, mais teologicamente rico do que o chamado de Saulo de Tarso na estrada de Damasco.</p>
               
               <p>Um homem que respirava ameaças contra os discípulos do Senhor. Um fariseu de fariseus, zeloso da lei, aprovado pelos líderes religiosos. Um perseguidor que consentiu na morte de Estêvão e invadia casas para arrastar homens e mulheres à prisão.</p>

               <p>E, em um instante, esse mesmo homem cai por terra, ofuscado por uma luz mais forte que o sol do meio-dia, e ouve a voz que mudaria sua vida e a história do cristianismo: <em>"Saulo, Saulo, por que me persegues?"</em></p>

               <h2>De Saulo a Paulo: A Graça que Transforma</h2>
               <p>A conversão de Paulo é a prova cabal de que a salvação pertence inteiramente ao Senhor. Não havia nada em Saulo que o tornasse merecedor. Ele estava ativamente destruindo a igreja. Mas a graça de Deus o alcançou de forma irresistível.</p>

               <p>Ele não apenas mudou de lado, ele se tornou o maior teólogo e missionário da igreja primitiva, escrevendo grande parte do Novo Testamento e levando o Evangelho de Cristo aos gentios, fundando igrejas por todo o Império Romano.</p>
               
               <div className="quote-box" style={{backgroundColor: 'var(--bg-light)', borderLeftColor: 'var(--primary)'}}>
                 Sua jornada nos lembra que ninguém está além do alcance da graça de Deus. Se Ele pôde transformar o maior perseguidor no maior apóstolo, Ele pode transformar qualquer coração hoje.
               </div>

             </div>
          </main>
        ) : isSamuel ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Personagens Bíblicos</span>
               <h1>Samuel: O Profeta que Foi a Voz de Deus nas Trevas de Israel</h1>
               <div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 24 Jun, 2026</div>
             </div>
             <img src="/samuel_profeta.png" alt="Samuel: O Profeta" className="article-hero-img" loading="lazy" />
             <div className="article-body">
               <div className="quote-box">
                 "Crescia Samuel, e o SENHOR era com ele, e nenhuma de todas as suas palavras deixou cair em terra. E todo o Israel, desde Dã até Berseba, sabia que Samuel estava confirmado profeta do SENHOR." — <strong>1 Samuel 3:19-20</strong>
               </div>
               
               <p>Há momentos na história de um povo em que o silêncio de Deus se torna ensurdecedor. Não porque Ele deixou de falar, mas porque o povo parou de ouvir. Foi exatamente nesse cenário de apatia espiritual, corrupção religiosa e caos moral que Deus levantou uma voz. Não a voz de um guerreiro, nem de um rei, mas a voz de um menino criado no templo.</p>
               
               <p>Samuel não foi apenas um juiz ou um líder político; ele foi o canal vivo da revelação divina em uma época onde "a palavra do SENHOR era rara" (1 Samuel 3:1). Sua vida é o testemunho de que Deus sempre encontra uma boca para falar a verdade, mesmo quando o mundo inteiro prefere o silêncio.</p>

               <p>Neste artigo, vamos caminhar pela vida de Samuel: desde sua consagração no ventre de sua mãe, passando pelo chamado dramático em Siló, até sua autoridade inabalável como o profeta que ungiu reis, confrontou pecados e manteve a aliança de Deus viva em Israel.</p>

               <h2>1. O Cenário de Siló: Quando a Palavra era Rara</h2>
               <p>Para entender a grandeza de Samuel, precisamos entender o escuro em que ele brilhou. Por volta do século XI a.C., o centro religioso de Israel era Siló, onde ficava o Tabernáculo e a Arca da Aliança. O sacerdote responsável era Eli, um homem bondoso, mas espiritualmente negligente. Seus filhos, Hofni e Fineias, eram "filhos de Belial" (1 Samuel 2:12).</p>
               
               <p>O resultado? O povo começou a desprezar a oferta do Senhor (1 Samuel 2:17). A religião havia se tornado um negócio, e Deus, em Sua santidade, retirou Sua presença visível. "Naqueles dias, a palavra do SENHOR era rara; as visões não eram frequentes." (1 Samuel 3:1). O céu parecia fechado. Não havia profetas. Não havia direção clara. Israel vivia de memórias, não de revelação. Era o cenário perfeito para Deus introduzir uma nova voz.</p>

               <h2>2. O Menino no Templo: Crescendo Diante do Senhor</h2>
               <p>Enquanto os filhos do sacerdote corrompiam o altar, uma criança de cerca de 2 ou 3 anos foi trazida a Siló. Seu nome era Samuel ("Pedido a Deus"). Sua mãe, Ana, cumpriu o voto feito em meio a lágrimas. Ela trouxe um bezerro de três anos, um efa de farinha e um odre de vinho (1 Samuel 1:24). Samuel não foi deixado ali como um órfão; foi entregue como oferta viva.</p>

               <p>Samuel cresceu "diante do SENHOR" (1 Samuel 2:11). Isso significa que sua infância foi moldada pela liturgia sagrada. A Bíblia diz algo extraordinário: "O jovem Samuel ia crescendo e se fazia aceitável, assim para com o SENHOR, como também para com os homens." (1 Samuel 2:26). Em meio à sujeira espiritual de Siló, Samuel era um aroma agradável a Deus.</p>

               <h2>3. O Chamado: A Voz que Rompeu o Silêncio</h2>
               <p>O evento que definiu o ministério de Samuel ocorreu quando ele ainda era jovem, deitado no templo, perto da Arca. A lâmpada de Deus (o candelabro de ouro) ainda não se havia apagado — eram as últimas horas da noite, o momento mais silencioso. De repente, uma voz chamou: "Samuel! Samuel!"</p>

               <div className="quote-box" style={{backgroundColor: 'var(--bg-light)', borderLeftColor: 'var(--primary)'}}>
                 Quando Deus chamou a quarta vez, Samuel não perguntou "Quem é?" (como Saulo faria anos depois). Ele já sabia. Ele disse as palavras que definem um profeta verdadeiro: "Fala, SENHOR, porque o teu servo ouve." (1 Samuel 3:10)
               </div>

               <h2>4. O Profeta como Líder Nacional e Reformador</h2>
               <p>Samuel não ficou apenas no templo. Quando os filisteus capturaram a Arca e Eli morreu, Samuel assumiu a liderança espiritual e política de Israel. Ele convocou o povo a Mizpá para um grande jejum e confissão. Enquanto ofereciam sacrifícios, os filisteus atacaram. Samuel clamou ao Senhor, e Deus respondeu com trovões que confundiram o inimigo.</p>

               <h2>5. O Ungidor de Reis: Samuel e a Monarquia</h2>
               <p>O teste final da autoridade de Samuel veio quando o povo pediu um rei, rejeitando o governo teocrático de Deus. Deus ordenou a Samuel que ungisse Saul, da tribo de Benjamim. Quando Saul desobedeceu, Samuel o confrontou com a frase que ecoa até hoje: "Eis que o obedecer é melhor do que o sacrificar." (1 Samuel 15:22). Posteriormente, Deus enviou Samuel a Belém para ungir o novo rei: Davi, o pastor.</p>

               <h2>6. O Intercessor: "Não Pecarei Deixando de Orar"</h2>
               <p>Samuel não era apenas um pregador de julgamento; era um gigante de intercessão. Na sua despedida, em 1 Samuel 12, ele faz uma declaração impressionante: "Quanto a mim, longe de mim que eu peque contra o SENHOR, deixando de orar por vós; antes vos ensinarei o caminho bom e direito." (1 Samuel 12:23)</p>

               <h2>Lições de Samuel para Hoje</h2>
               <ul>
                 <li><strong>Deus fala aos que ouvem:</strong> O silêncio de Deus muitas vezes é culpa de nossos ouvidos fechados. Samuel estava atento.</li>
                 <li><strong>Integridade no ambiente hostil:</strong> É possível crescer "aceitável diante de Deus e dos homens" mesmo quando o sistema religioso ao redor está falido.</li>
                 <li><strong>A Palavra não cai por terra:</strong> Um líder ou cristão é confirmado não por títulos, mas pela fidelidade do que fala. A Palavra de Deus em sua boca deve ser confiável.</li>
                 <li><strong>Obediência &gt; Ritual:</strong> O maior pecado não é a falha cerimonial, mas a rebelião contra a Palavra. Samuel nos ensina que Deus quer o coração obediente, não apenas as mãos ocupadas no templo.</li>
                 <li><strong>Oração como Dever:</strong> Interceder pelos outros não é opcional; é uma responsabilidade sagrada que nos protege do pecado.</li>
               </ul>

             </div>
          </main>
        ) : isJo ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Personagens Bíblicos</span>
               <h1>Jó: O Homem que Perdeu Tudo, Mas Não Perdeu a Deus — A Soberania Divina no Meio do Sofrimento</h1>
               <div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 25 Jun, 2026</div>
             </div>
             <img src="/jo_patriarca.png" alt="Jó" className="article-hero-img" loading="lazy" />
             <div className="article-body">
               <div className="quote-box">
                 "Ainda que ele me mate, nele esperarei." — <strong>Jó 13:15</strong><br/><br/>
                 "Eu te conhecia só de ouvir, mas agora os meus olhos te veem." — <strong>Jó 42:5</strong>
               </div>
               
               <p>Há personagens bíblicos que não foram chamados para liderar exércitos, nem para escrever leis, nem para ungir reis. Foram chamados para algo mais misterioso e profundo: sofrer com fidelidade, clamar com honestidade e permanecer de pé quando o chão desaparece. Jó é um deles.</p>
               
               <p>Sua história não é um tratado filosófico sobre o mal. É um relato visceral de dor, um debate teológico acalorado, um encontro pessoal com o Criador e um testemunho eterno de que Deus não abandona os seus, mesmo quando o silêncio parece ensurdecedor.</p>

               <p>Neste artigo, vamos mergulhar na vida de Jó: quem ele era, onde viveu, como foi provado, como Deus se revelou a ele no redemoinho, e por que seu livro continua sendo uma âncora para milhões que enfrentam o vale da sombra da morte.</p>

               <h2>1. Quem Foi Jó? O Patriarca da Terra de Uz</h2>
               <p>Jó (em hebraico: Iyov — אִיּוֹב) possivelmente significa "perseguido", "odiado" ou "onde está o Pai?". Ironicamente, seu nome carrega a dor que viveria, mas também a pergunta que ecoaria em sua alma: "Onde está Deus quando tudo desaba?"</p>
               
               <p>A Bíblia situa Jó na Terra de Uz (Jó 1:1). Jó não era israelita. Era um gentio temente a Deus, o que mostra que o Senhor sempre teve testemunhas fiéis entre as nações, muito antes de Abraão. Jó era o homem mais rico do Oriente, mas sua maior riqueza não era material. A Bíblia o descreve com quatro marcas espirituais: <em>"Íntegro, reto, temente a Deus e desviava-se do mal."</em> (Jó 1:1)</p>

               <h2>2. O Livro de Jó: Mistério, Poesia e Sabedoria Antiga</h2>
               <p>O livro de Jó pertence à literatura de sabedoria (junto com Provérbios, Eclesiastes e Cânticos). Sua estrutura é única: começa e termina em prosa (narrativa histórica) e no meio há diálogos em poesia. Jó não responde "por que sofremos?". Ele responde: "Quem sustenta o universo enquanto sofremos?". O livro desmonta a teologia da retribuição (sofrimento = castigo) e revela que a fé verdadeira não é transacional, mas relacional.</p>

               <h2>3. O Conselho Celestial e a Prova Permitida</h2>
               <p>O livro abre com um drama invisível: o tribunal celestial. Satã ("o Acusador") lança um desafio teológico, questionando a gratuidade da fé de Jó. Deus permite a prova, mas estabelece limites.</p>

               <p>Após perder tudo em um dia, Jó rasga o manto, rapa a cabeça, prostra-se e adora: <em>"Nu saí do ventre de minha mãe, e nu tornarei para lá. O SENHOR o deu, e o SENHOR o tomou; bendito seja o nome do SENHOR."</em> (Jó 1:21). Sua fé não pecou com os lábios.</p>

               <h2>4. A Dor, os Amigos e o Clamor de Jó</h2>
               <p>Os três amigos de Jó (Elifaz, Bildade e Zofar) vêm para confortá-lo, mas acabam sendo acusadores. Eles defendem a rígida lei da retribuição, argumentando que Jó deveria ter pecado para estar sofrendo. Jó rejeita essa lógica e, no meio da dor, profetiza:</p>
               
               <div className="quote-box" style={{backgroundColor: 'var(--bg-light)', borderLeftColor: 'var(--primary)'}}>
                 "Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra." (Jó 19:25)
               </div>

               <h2>5. A Voz do Redemoinho: Quando Deus Fala</h2>
               <p>Deus responde a Jó do redemoinho. Ele não fornece explicações filosóficas, mas se revela em Sua infinita sabedoria e poder governante do cosmos. Jó, então, se arrepende de ter tentado limitar Deus à lógica humana e diz: <em>"Eu te conhecia só de ouvir, mas agora os meus olhos te veem."</em></p>

               <h2>6. Restauração e Legado Eterno</h2>
               <p>A restauração não apaga a dor de Jó, mas valida a sua fé. Jó é honrado e chamado a interceder por seus amigos. Deus dobra sua riqueza, e Jó vive o suficiente para ver quatro gerações. Jó provou que é possível ter uma fé inabalável mesmo quando todas as bênçãos nos são tiradas.</p>

             </div>
          </main>
        ) : isTestemunhos ? (
          <main className="section-mb">
            <div className="section-title">
              <h2>Testemunhos</h2>
            </div>
            <div className="grid-3" style={{marginTop: '2rem'}}>
              
              <div className="grid-3-item">
                <a href="/testemunho-deus-e-bom-historia-fe-transformacao" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/deus_e_bom.png" alt="Deus É Bom" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <span className="cat-tag" style={{display: 'inline-block', marginBottom: '8px', marginTop: '12px'}}>TESTEMUNHOS</span>
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Deus É Bom — Uma História de Fé e Transformação</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px', marginBottom: '12px'}}>Um domingo à tarde, uma visita inesperada e três palavras que quebraram correntes: 'Deus é bom'. Descubra como um encontro simples se tornou um marco de libertação e despertar espiritual.</p>
                  <div style={{marginTop: '15px', color: '#ff0000', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Testemunhos CCB
                  </div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/testemunho-desespero-esperanca" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/desespero_esperanca.png" alt="Do Desespero à Esperança" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <span className="cat-tag" style={{display: 'inline-block', marginBottom: '8px', marginTop: '12px'}}>TESTEMUNHOS</span>
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Do Desespero à Esperança: Quando Deus Interrompeu Meu Último Ato</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px', marginBottom: '12px'}}>Como uma última oração se tornou o início de uma nova vida.</p>
                  <div style={{marginTop: '15px', color: '#ff0000', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Podcast Jesuscopy
                  </div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/testemunho-e-ele-cancao-nasceu-deserto-paulo-vicente" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/e_ele_vicente.png" alt="É Ele: A Canção que Nasceu no Deserto" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <span className="cat-tag" style={{display: 'inline-block', marginBottom: '8px', marginTop: '12px'}}>TESTEMUNHOS</span>
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>É Ele: A Canção que Nasceu no Deserto e Ecoou nas Nações</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px', marginBottom: '12px'}}>Como Paulo Vicente ouviu do Senhor e compôs um hino sobre João Batista que atravessou fronteiras.</p>
                  <div style={{marginTop: '15px', color: '#ff0000', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Podcast Jesuscopy
                  </div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/testemunho-thamires-musica-cura-aquieta-minhalma" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/testemunho_thamires.png" alt="Da Epilepsia à Adoração: O Testemunho de Thamires" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <span className="cat-tag" style={{display: 'inline-block', marginBottom: '8px', marginTop: '12px'}}>TESTEMUNHOS</span>
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Da Epilepsia à Adoração: Como a Música se Tornou a Voz da Cura de Thamires</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px', marginBottom: '12px'}}>Uma jornada de dor, revelação e canções que nasceram do encontro entre sofrimento e graça.</p>
                  <div style={{marginTop: '15px', color: '#ff0000', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Podcast Jesuscopy
                  </div>
                </a>
              </div>

              <div className="grid-3-item">
                <a href="/testemunho-julliany-souza-louvor-arma-espiritual-familia" style={{textDecoration: 'none', color: 'inherit'}}>
                  <img src="/testemunho_julliany.png" alt="O Testemunho de Julliany Souza" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                  <span className="cat-tag" style={{display: 'inline-block', marginBottom: '8px', marginTop: '12px'}}>TESTEMUNHOS</span>
                  <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>A Voz que Quebrou Correntes: O Chamado de Julliany Souza no Quarto do Pai</h3>
                  <p style={{fontSize: '0.9rem', color: '#666', marginTop: '8px', marginBottom: '12px'}}>Como uma adolescente usou o louvor como arma espiritual e viu Deus transformar uma família.</p>
                  <div style={{marginTop: '15px', color: '#ff0000', fontWeight: 'bold', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px'}}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                    Podcast Jesuscopy
                  </div>
                </a>
              </div>

            </div>
          </main>
        ) : isTestemunhoDeusEBom ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Testemunhos</span>
               <h1>Deus É Bom — Uma História de Fé e Transformação</h1>
               <h2 style={{fontSize: '1.2rem', fontWeight: 'normal', color: '#555', margin: '15px 0'}}>Como três palavras simples despertaram uma vida do sono da morte para a vida em Cristo</h2>
               <div className="article-meta">Por <strong>João Calvino</strong> | 25 Jun, 2026</div>
             </div>
             
             <div style={{maxWidth: '900px', margin: '2.5rem auto 3rem'}}>
               <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,0,0,0.2)'}}>
                 <iframe 
                   src="https://www.youtube.com/embed/9w1pvUayZLE" 
                   title="Deus É Bom - Uma História de Fé e Transformação #ccb #testemunho"
                   style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen>
                 </iframe>
               </div>
               <div style={{background: 'linear-gradient(to right, #f8f9fa, #e9ecef)', padding: '15px', borderRadius: '0 0 8px 8px', textAlign: 'center'}}>
                 🎥 <a href="http://www.youtube.com/watch?v=9w1pvUayZLE" target="_blank" rel="noreferrer" style={{color: '#333', textDecoration: 'none', fontWeight: 'bold'}}>Assista ao testemunho completo no vídeo acima</a>
               </div>
             </div>
             
             <div className="article-body">
               <p style={{fontSize: '1.1rem', color: '#555', fontStyle: 'italic', marginBottom: '2.5rem'}}>Um domingo à tarde, uma visita inesperada e três palavras que quebraram correntes: 'Deus é bom'. Descubra como um encontro simples se tornou um marco de libertação e despertar espiritual.</p>

               <h2>📝 Transcrição do Testemunho</h2>
               <div style={{background: '#fafafa', padding: '2rem', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0', marginBottom: '3rem', fontStyle: 'italic', color: '#444', lineHeight: '1.8'}}>
                 <p>"Essa obra é muito linda, que marcou a minha história. Um domingo à tarde, 2 horas, 2:30 da tarde, bateram palma no portão da minha casa, tocaram campainha. Eu me lembro quando eu abri a porta lá em cima, que eu morava num sobrado. Que eu abri a porta lá em cima, tinha um jovem lá embaixo. Um jovem muito bonito, cabelo bem cortado, terninho simples, uma gravatinha simples e uma pastinha preta debaixo do braço.</p>
                 <p>E quando olhei para aquele moço, na minha mente veio assim: 'Será que é um advogado que veio falar comigo? Mais um dia de domingo, um advogado, né?'. Quando eu fui falar alguma coisa, aquele moço estendeu as duas mãozinhas para dentro do meu quintal e falou essas palavras: 'Que a santa paz de Deus esteja aqui no nome do Senhor Jesus'.</p>
                 <p>Meu coração deu uma disparada, né? Deu aquela vontade de chorar porque a voz dele já foi uma voz de paz, né? E eu cabeludo ali na sala, e ele não pediu licença. Isso foi muito interessante, porque quando Deus entra na vida de alguém, Deus não pede licença. Ele entra e faz a obra do jeito que ele quer fazer, né? E Deus usou daquele menino, daquele moço, devia ter uns 19 para 22 anos aquele jovem.</p>
                 <p>E ele entrou assim, sentou de frente pro meu sofá assim, e eu muito triste. Ele não falou, ele já foi direto no assunto. Olhou bem no meu rosto, falou assim: 'Moço, Deus é bom'. Olhou bem para mim de novo, falou assim: 'Moço, Deus é bom'. Eu já tava explodindo por dentro já, meu coração disparado assim, aquela alegria. Sabe, eu vi as algemas sendo quebradas, sabe? As correntes, o mal sendo quebrado.</p>
                 <p>Sabe, aí ele olhou para mim mais uma vez assim: 'Moço'. Olhou dentro dos meus olhos e falou assim: 'Deus é bom'. Quando ele falou: 'Deus é bom', eu senti as correntes sendo quebradas. Aquela alegria de viver entrou em mim de novo. Sabe, parece que eu vejo hoje assim uma depressão... Hoje assim, espírito de morte. Eu vejo hoje um ser humano, é um sono. É um sono que quando Jesus chega, Deus desperta ele daquele sono, né? Que é um sono da morte, um sono de depressão, um sono de angústia, um sono de fracasso, né? E o Senhor Jesus naquela tarde, ele me despertou para uma nova vida."</p>
               </div>

               <h2>Testemunhos: Monumentos Vivos da Fidelidade de Deus</h2>
               <p><em>"Contai entre as nações a sua glória"</em> (<strong>Salmo 96:3</strong>). Os testemunhos não são apenas histórias bonitas do passado; eles são monumentos vivos da fidelidade do Senhor. Quando compartilhamos o que Deus fez, nós:</p>
               <ul>
                 <li><strong>Glorificamos a Deus</strong>, exaltando o Seu poder salvador.</li>
                 <li><strong>Fortalecemos a comunidade</strong> da fé com esperança renovada.</li>
                 <li><strong>Validamos a nossa fé</strong> para um mundo que busca a verdade.</li>
                 <li><strong>Cumprimos a Grande Comissão</strong>, sendo Suas testemunhas (Atos 1:8).</li>
                 <li><strong>Construímos um legado</strong> espiritual para as próximas gerações.</li>
               </ul>
               <p>Histórias reais de libertação como a que veremos hoje nos lembram que o Evangelho é poder de Deus em ação.</p>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '3rem 0'}} />

               <div className="quote-box" style={{textAlign: 'center', fontSize: '1.3rem'}}>
                 "Eu te conhecia só de ouvir, mas agora os meus olhos te veem."<br/>— <strong>Jó 19:25</strong>
               </div>

               <h2>O Encontro que Mudou Tudo ✨</h2>
               <p>Essa é uma daquelas histórias marcadas pela <strong>soberania divina</strong>. Não houve um culto extravagante nem uma pregação elaborada. O poder estava em três palavras simples que abalaram as estruturas do inferno e trouxeram um homem de volta à vida.</p>

               <h2>A Visita Inesperada 🚪</h2>
               <p>Era um típico domingo à tarde. Entre 14:00 e 14:30, a campainha tocou. Ao abrir a porta do andar de cima de seu sobrado, o morador se deparou com uma figura inusitada lá embaixo: um jovem bonito, de cabelo bem cortado, vestindo um terninho simples com uma gravatinha, carregando uma pastinha preta debaixo do braço.</p>
               <p>A primeira reação? <em>"Será que é um advogado que veio falar comigo num domingo?"</em>. Mas Deus tinha planos muito maiores do que qualquer processo legal.</p>

               <h2>A Saudação que Trouxe Paz 🕊️</h2>
               <p>Antes que o morador pudesse questioná-lo, o jovem estendeu as duas mãos em direção ao quintal e declarou: <strong>"Que a santa paz de Deus esteja aqui no nome do Senhor Jesus."</strong></p>
               <p>Naquele exato momento, o coração do homem disparou. A vontade de chorar veio à tona, porque a voz daquele rapaz — que tinha entre 19 e 22 anos — era, de fato, uma voz de paz. Uma lição profunda ecoa desse momento: <strong>quando Deus entra na vida de alguém, Ele não pede licença.</strong> Ele simplesmente entra e faz a obra.</p>

               <h2>O Poder de Três Palavras 🗣️</h2>
               <p>O jovem entrou e sentou-se em frente ao sofá. Olhando fixamente para o rosto do homem, que estava imerso em profunda tristeza, ele foi direto ao ponto. Ele não fez perguntas, não pediu explicações. Apenas declarou com firmeza:</p>
               
               <div className="quote-box" style={{backgroundColor: '#e3f2fd', borderLeftColor: '#2196f3'}}>
                 "Moço, Deus é bom."
               </div>

               <p>Ele repetiu: <em>"Moço, Deus é bom."</em></p>
               <p>O impacto espiritual foi imediato. O coração disparou de alegria. As algemas da alma e as correntes do mal começaram a se quebrar ali mesmo na sala. Então, mais uma vez, olhando fundo nos olhos do homem, o jovem sentenciou: <strong>"Moço... Deus é bom."</strong></p>
               <p>Nesse instante, as correntes caíram por terra. O sobrenatural invadiu a sala e a alegria de viver, que parecia morta, ressuscitou.</p>

               <h2>Do Sono da Morte para a Vida em Cristo ⚡</h2>
               <p>Muitas vezes nós caminhamos pela vida sem perceber que, na verdade, estamos <strong>dormindo</strong>. Um sono de depressão, de angústia, um espírito de morte e fracasso. A alma está adormecida para as possibilidades divinas.</p>
               <p>Mas quando Jesus chega, Ele nos <em>desperta</em> desse sono. Naquela tarde de domingo, o Senhor Jesus usou a visita daquele jovem para provocar um despertar sobrenatural para uma nova vida.</p>

               <h2>A Simplicidade que Transforma 🌿</h2>
               <p>Os elementos mais poderosos dessa história são os mais simples:</p>
               <ul>
                 <li>Um jovem simples e disponível.</li>
                 <li>Apenas três palavras: <strong>"Deus é bom"</strong>.</li>
                 <li>A repetição da verdade para quebrar as mentiras da mente.</li>
                 <li>O contato visual que transmite compaixão.</li>
                 <li>A presença palpável do Espírito Santo.</li>
               </ul>

               <h2>Lições para Nossa Vida 📖</h2>
               <ul>
                 <li><strong>Deus Usa os Disponíveis:</strong> Aquele jovem se dispôs a bater numa porta numa tarde de domingo.</li>
                 <li><strong>A Simplicidade é Poderosa:</strong> O Evangelho não exige discursos complicados.</li>
                 <li><strong>A Repetição Edifica:</strong> Ouvir a verdade repetidas vezes destrói fortalezas espirituais.</li>
                 <li><strong>O Tempo de Deus é Perfeito:</strong> Ele chega exatamente na hora que precisamos.</li>
                 <li><strong>Deus Não Pede Licença:</strong> Sua graça invade nossas vidas soberanamente.</li>
               </ul>

               <h2>Reflexão Final 🌅</h2>
               <p>Quantas vezes nós ou alguém próximo a nós está dormindo e precisa apenas de alguém para dizer que <strong>Deus é bom</strong>? Seja você esse jovem com a pastinha preta. Seja a voz. Seja o instrumento de despertar na vida de alguém. Deus é bom. Todos os dias.</p>

               <div style={{display: 'flex', gap: '20px', margin: '3rem 0'}}>
                 <div style={{flex: 1, padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"Rendei graças ao Senhor, porque ele é bom, porque a sua misericórdia dura para sempre."</em><br/><strong>— Salmo 136:1</strong>
                 </div>
                 <div style={{flex: 1, padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"Provai e vede que o Senhor é bom; bem-aventurado o homem que nele se refugia."</em><br/><strong>— Salmo 34:8</strong>
                 </div>
               </div>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '2rem 0'}} />

               <h2>Oração 🙏</h2>
               <p style={{fontStyle: 'italic', fontSize: '1.1rem', color: '#555', background: '#f9f9f9', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #4CAF50'}}>
                 "Senhor Jesus, obrigado porque Tu és bom. Obrigado por usares pessoas simples. Desperta-nos do sono da morte. Usa-nos como instrumentos da Tua paz. Dá-nos coragem para ir. Que possamos dizer a todos: 'Deus é bom'. Em nome de Jesus, amém."
               </p>

               <h2>Desafio Prático da Semana 🎯</h2>
               <div style={{background: '#fff3e0', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem', borderLeft: '4px solid #ff9800'}}>
                 <ol style={{margin: 0, paddingLeft: '1.5rem'}}>
                   <li style={{marginBottom: '10px'}}><strong>Lembre-se</strong> das ações de Deus na sua vida.</li>
                   <li style={{marginBottom: '10px'}}><strong>Escreva</strong> o seu próprio testemunho.</li>
                   <li style={{marginBottom: '10px'}}><strong>Compartilhe</strong> essa história com pelo menos uma pessoa.</li>
                   <li style={{marginBottom: '10px'}}><strong>Seja o jovem:</strong> bata na porta (ou mande mensagem) e leve paz.</li>
                   <li><strong>Repita:</strong> "Deus é bom".</li>
                 </ol>
               </div>

             </div>
           </main>
        ) : isTestemunhoDesespero ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Testemunhos</span>
               <h1>Do Desespero à Esperança: Quando Deus Interrompeu Meu Último Ato</h1>
               <h2 style={{fontSize: '1.2rem', fontWeight: 'normal', color: '#555', margin: '15px 0'}}>Como uma última oração se tornou o início de uma nova vida</h2>
               <div className="article-meta">Por <strong>João Calvino</strong> | 25 Jun, 2026</div>
             </div>
             
             <div style={{maxWidth: '900px', margin: '2.5rem auto 3rem'}}>
               <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,0,0,0.2)'}}>
                 <iframe 
                   src="https://www.youtube.com/embed/UNM8GvuJmrM" 
                   title="Do Desespero à Esperança"
                   style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen>
                 </iframe>
               </div>
               <div style={{background: 'linear-gradient(to right, #f8f9fa, #e9ecef)', padding: '15px', borderRadius: '0 0 8px 8px', textAlign: 'center'}}>
                 🎥 <a href="http://www.youtube.com/watch?v=UNM8GvuJmrM" target="_blank" rel="noreferrer" style={{color: '#333', textDecoration: 'none', fontWeight: 'bold'}}>Assista ao testemunho completo no vídeo acima</a>
               </div>
             </div>
             
             <div className="article-body">
               <p style={{fontSize: '1.1rem', color: '#555', fontStyle: 'italic', marginBottom: '2.5rem'}}>No momento mais sombrio, quando o desespero parecia não ter fim, uma voz suave interrompeu o ato final. Descubra como o Espírito Santo transformou um último adeus em um novo começo.</p>

               <h2>📝 Transcrição do Testemunho</h2>
               <div style={{background: '#fafafa', padding: '2rem', borderLeft: '4px solid var(--primary)', borderRadius: '0 8px 8px 0', marginBottom: '3rem', fontStyle: 'italic', color: '#444', lineHeight: '1.8'}}>
                 <p>"Entrei no quarto, tranquei minha porta, falei: 'Deus, hoje eu vou tirar minha vida'. E eu lembro de abrir o guarda-roupa e procurar um objeto pontiagudo, procurar alguma forma para eu tirar minha vida. E quando eu abri o guarda-roupa, o Espírito Santo falou para mim: 'Então por que que você não faz uma última oração?'</p>
                 <p>Me ajoelhei e falei: 'Jesus, eu só te peço uma segunda chance. Eu quero voltar a ser feliz, eu quero voltar a priorizar o Teu reino, eu quero voltar a amar a Sua igreja. Eu não sou feliz, então me dê a felicidade de novo'.</p>
                 <p>E quando eu abri os meus olhos, eu estava na sala da minha casa. Eu não lembro como, minha mãe fala que eu cheguei chorando, pedindo ajuda. Sério. Pra mim foi o Espírito Santo que me levou."</p>
               </div>

               <h2>Testemunhos: Monumentos Vivos da Fidelidade de Deus</h2>
               <p><em>"Contai entre as nações a sua glória"</em> (<strong>Salmo 96:3</strong>). Os testemunhos não são apenas histórias do passado; eles são monumentos vivos da fidelidade divina. Eles existem para:</p>
               <ul>
                 <li><strong>Glorificar a Deus</strong> pelo livramento recebido.</li>
                 <li><strong>Fortalecer a comunidade</strong> mostrando que há esperança.</li>
                 <li><strong>Validar a nossa fé</strong> de que Deus escuta orações.</li>
                 <li><strong>Cumprir a Grande Comissão</strong> ao compartilhar vida.</li>
                 <li><strong>Construir um legado</strong> espiritual inabalável.</li>
               </ul>
               <p>Essa história real de libertação é um lembrete do valor inestimável de uma segunda chance.</p>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '3rem 0'}} />

               <div className="quote-box" style={{textAlign: 'center', fontSize: '1.3rem'}}>
                 "O SENHOR está perto dos que têm o coração quebrantado e salva os de espírito abatido."<br/>— <strong>Salmo 34:18</strong>
               </div>

               <h2>O Encontro que Mudou Tudo ✨</h2>
               <p>Há dias em que a dor sufoca a alma. A mente, exausta, procura uma saída para aliviar o peso que o peito carrega. Esse é o momento crítico onde o inimigo tenta roubar não apenas a paz, mas o futuro. Porém, o Espírito Santo nunca abandona aqueles que, mesmo em meio à escuridão, possuem uma faísca de clamor dentro de si.</p>

               <h2>O Quarto Fechado 🚪</h2>
               <p>O cenário do desespero absoluto: uma porta trancada e um coração dilacerado. "Entrei no quarto, tranquei minha porta, falei: 'Deus, hoje eu vou tirar minha vida'". A decisão parecia final, e as buscas dentro do guarda-roupa eram o prelúdio da tragédia. Mas Deus é mestre em entrar em quartos cujas portas nós mesmos trancamos.</p>

               <h2>A Voz que Interrompeu 🕊️</h2>
               <p>Quando a esperança já não existia, uma intervenção surpreendente aconteceu. Não foi um anjo visível, nem um terremoto, mas a voz do Consolador: <strong>"Então por que que você não faz uma última oração?"</strong>. Essa é a essência do Espírito Santo. Ele argumenta com a alma, propõe a vida onde a morte já fez morada e instiga o ser humano a olhar uma última vez para o alto.</p>

               <h2>A Última Oração 🗣️</h2>
               <p>No lugar da morte, um clamor nasceu. De joelhos, o desespero se transformou em petição sincera: <em>"Jesus, eu só te peço uma segunda chance... me dê a felicidade de novo."</em>. Em uma oração simples e rasgada, a verdadeira intenção do coração foi ouvida no céu. Deus não exigiu explicações, apenas recebeu as lágrimas daquele pedido de resgate.</p>

               <h2>Do Sono da Morte para a Vida em Cristo ⚡</h2>
               <p>O que aconteceu a seguir é indescritível do ponto de vista humano. Sem lembrança racional do trajeto, a pessoa despertou na sala, chorando e pedindo ajuda à mãe. <em>"Pra mim foi o Espírito Santo que me levou."</em> A intervenção divina arrancou uma alma das garras da morte de forma literal. Jesus agiu como o Bom Pastor, carregando a ovelha perdida em seus próprios braços.</p>

               <h2>A Simplicidade que Transforma 🌿</h2>
               <p>Nenhuma estratégia terrena poderia ter salvo essa vida naquele instante. Foi a simplicidade de uma "última oração" sugerida pelo Espírito Santo que abriu a porta para o resgate. Deus precisa apenas do nosso "sim" — mesmo que venha do fundo do poço — para transformar toda a nossa eternidade.</p>

               <h2>Lições para Nossa Vida 📖</h2>
               <ul>
                 <li><strong>Nenhuma porta trancada impede Deus:</strong> O Espírito Santo tem acesso livre ao nosso quarto secreto.</li>
                 <li><strong>A oração interrompe a morte:</strong> Uma última oração pode mudar tudo.</li>
                 <li><strong>Nunca é tarde para pedir a Jesus:</strong> O pedido por uma segunda chance jamais é ignorado por Ele.</li>
                 <li><strong>Busque ajuda:</strong> O milagre divino também nos leva aos braços daqueles que podem nos abraçar (como a mãe na sala).</li>
               </ul>

               <h2>Reflexão Final 🔒</h2>
               <p>Você não está sozinho. Nenhuma dor é profunda o suficiente que o braço do Senhor não possa alcançar. Se você acha que já tentou de tudo e que a esperança acabou, escute a voz do Espírito Santo hoje sussurrando para você: <em>"Faça mais uma oração."</em> Existe uma segunda chance, existe um futuro e, principalmente, existe um Pai que anseia te fazer feliz novamente.</p>

               <div style={{display: 'flex', gap: '20px', margin: '3rem 0'}}>
                 <div style={{flex: 1, padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"Ele cura os que têm o coração partido e trata das suas feridas."</em><br/><strong>— Salmo 147:3</strong>
                 </div>
                 <div style={{flex: 1, padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"Esqueçam o que se foi; não vivam no passado. Vejam, estou fazendo uma coisa nova!"</em><br/><strong>— Isaías 43:18-19</strong>
                 </div>
               </div>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '2rem 0'}} />

               <h2>Oração 🙏</h2>
               <blockquote style={{fontStyle: 'italic', fontSize: '1.1rem', color: '#555', background: '#f9f9f9', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #4CAF50'}}>
                 "Senhor Jesus, nós te louvamos porque Tu és o Deus das segundas chances. Se hoje houver alguém trancado no quarto do desespero, que a voz suave do Espírito Santo rompa o silêncio. Dá forças para fazer aquela última oração que mudará tudo. Restaura a alegria, devolve a paz e traga uma nova vida para aqueles que achavam que era o fim. Em nome de Jesus, amém."
               </blockquote>

               <h2>Desafio Prático da Semana 🎯</h2>
               <div style={{background: '#fff3e0', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem', borderLeft: '4px solid #ff9800'}}>
                 <ol style={{margin: 0, paddingLeft: '1.5rem'}}>
                   <li style={{marginBottom: '10px'}}><strong>Ore por quem sofre:</strong> Interceda por alguém que você sabe que está passando por depressão.</li>
                   <li style={{marginBottom: '10px'}}><strong>Seja o ombro amigo:</strong> Se alguém te procurar chorando pedindo ajuda, acolha sem julgamentos.</li>
                   <li style={{marginBottom: '10px'}}><strong>Dê uma segunda chance:</strong> Se você precisa, peça a Deus hoje a sua alegria de volta.</li>
                   <li style={{marginBottom: '10px'}}><strong>Compartilhe:</strong> Envie este testemunho para alguém que precisa de esperança.</li>
                   <li><strong>Acredite:</strong> Deus ainda intervém!</li>
                 </ol>
               </div>

             </div>

          </main>
        ) : isTestemunhoEEle ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Testemunhos</span>
               <h1>É Ele: A Canção que Nasceu no Deserto e Ecoou nas Nações</h1>
               <h2 style={{fontSize: '1.2rem', fontWeight: 'normal', color: '#555', margin: '15px 0'}}>Como Paulo Vicente ouviu do Senhor e compôs um hino sobre João Batista que atravessou fronteiras</h2>
               <div className="article-meta">Por <strong>João Calvino</strong> | 25 Jun, 2026</div>
             </div>
             
             <div style={{maxWidth: '900px', margin: '2.5rem auto 3rem'}}>
               <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,0,0,0.2)'}}>
                 <iframe 
                   src="https://www.youtube.com/embed/OG0N3B0BtX8" 
                   title="É Ele: A Canção que Nasceu no Deserto"
                   style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen>
                 </iframe>
               </div>
               <div style={{background: '#f8f9fa', padding: '15px', borderRadius: '0 0 12px 12px', textAlign: 'center'}}>
                 🎥 <a href="http://www.youtube.com/watch?v=OG0N3B0BtX8" target="_blank" rel="noreferrer" style={{color: '#333', textDecoration: 'none', fontWeight: 'bold'}}>Assista ao podcast completo no vídeo acima</a>
               </div>
             </div>
             
             <div className="article-body">
               <p style={{fontSize: '1.1rem', color: '#555', fontStyle: 'italic', marginBottom: '2.5rem', textAlign: 'center'}}>Às vezes, Deus não sopra uma canção para o palco, mas para o deserto. Descubra como um refrão ouvido no chuveiro se tornou um hino sobre João Batista que ecoou de Londrina à Argentina, chamando a igreja a viver não para si, mas para Aquele que é digno.</p>

               <h2>📝 Transcrição do Testemunho</h2>
               <div style={{background: '#f8f9fa', padding: '1.5rem', borderLeft: '4px solid #0066cc', borderRadius: '0 8px 8px 0', marginBottom: '3rem', color: '#444', lineHeight: '1.8'}}>
                 <p><strong>Entrevistador:</strong> "É mano, cara... deixa eu vou começar de trás para frente e eu queria até que você respondesse uma pergunta né, que você já respondeu em outros lugares, mas só pra gente registrar aqui também para essa galera que ouve de forma específica aqui. Eh, como é que surgiu a canção 'É Ele', né? Eh, de tempos em tempos a gente vê o Senhor soprando né uma canção, uma mensagem, e nesse tempo tem sido uma delas, tem sido essa mensagem né, e 'É Ele'. E eu vi você até falando dela naquele podcast com o Pedro, mas eu queria que você falasse mais uma vez aqui, como é que essa canção surgiu assim, o que que ela significa."</p>
                 <p><strong>Paulo Vicente:</strong> "Irado, mano. Eh, essa canção na verdade ela surge dentro de um contexto, mas a mensagem dela, que é o que é mais importante, começou a ganhar o meu coração e o coração da minha família, eu, Rebeca e as crianças há mais ou menos uns dois anos atrás. O Senhor começou... eh, eu não sei se você tem isso mano, mas comigo às vezes parece que Deus começa a me dar cliques assim de mensagens de homens das escrituras. Às vezes trechos que eu li e conheço há muito tempo parece que Deus começa a chamar mais a minha atenção para aquela coisa específica e aquilo vai ganhando proporção. É para mim é meio monotemático assim, é tipo, parece que para onde eu olho, onde eu caio em música, mensagem, livro, parece que Ele tá falando a mesma coisa."</p>
                 <p><strong>Entrevistador:</strong> "Isso mano, entendi."</p>
                 <p><strong>Paulo Vicente:</strong> "Há dois anos atrás começou isso. Deus começou a chamar minha atenção pra vida de João Batista. E aí eu começo a então a ler, mas sem muita pretensão, entendendo que Deus estava me direcionando para me ensinar alguma coisa e eu começo a visitar também eh, algumas mensagens de amigos que eu sabia que tava apontando para isso há muito tempo. Então por exemplo, Vittor Vieira. Uhum. É, e a galera que eu sei que vira e mexe batia nesse ponto, começo a me alimentar disso. Dito e feito, eu encontro com o Vittor lá em Londrina numa conferência e ele põe um livro na minha mão, que é o 'O Escolhido Para o Deserto' do Whitefield. Aí... aí eu falo que a minha vida estragou, é porque daí esse livro é muito pontual em relação a essa mensagem da vida de João. Eh, e aí eu começo a entrar numa estação de fato assim, muito, não vou dizer árida, mas literalmente o Senhor me coloca no deserto e o Senhor me diz: 'Você vai começar a entender um pouco que tem algumas coisas do reino que não se tratam de... não são mensagens que são pontuais no sentido de: ah beleza, vamos falar disso e depois vai ter uma outra questão'. O Senhor começa a me dizer: 'Essa aqui vai ser a mensagem da sua vida'."</p>
                 <p><strong>Entrevistador:</strong> "E mensagem pra vida inteira, é isso. E, e só assim abrindo um parêntese aí. Eh, fala um pouco da mensagem desse livro porque, eh, pelo que eu me lembre, eu não li, mas me relataram, eh, ele coloca deserto de uma outra forma do que a gente usa né? Pô o cara tá desempregado, 'pô tô num deserto', o cara tá, não consegue uma namorada, 'pô tô num deserto' né? Mas não era isso deserto para João Batista né?"</p>
                 <p><strong>Paulo Vicente:</strong> "Exato Douglas. Quando o Senhor começa a chamar minha atenção ele começa a falar sobre um estilo de vida. Hum. Então, o que o Whitefield ele fala sobre a vida de João, eh, ele coloca esse panorama de que João teve a oportunidade de viver uma série de outras coisas. Então, ele era filho de Zacarias, um homem que tinha um lugar importante na sociedade judaica, um sacerdote no templo, eh, um cara que usava uma roupa específica. Então as pessoas olhavam, eles sabiam quem ele era, ele tinha uma notoriedade. Então João ele vem num contexto de casa aonde tudo indicaria que ele assumiria o lugar do pai, ele serviria ao Senhor num contexto ali em Jerusalém, enfim, ele teria uma posição diante da sociedade, tudo isso. E o Whitefield ele fala que João ele escolheu o deserto."</p>
                 <p><strong>Entrevistador:</strong> "Ok. Isso é o tema, palavra é forte."</p>
                 <p><strong>Paulo Vicente:</strong> "Ele abraçou podendo viver em Jerusalém. Ele olha para um lugar seco, árido, ele diz: 'Eu vou levantar minha mensagem ali, eu vou viver a minha vida ali'. Então quando a gente olha pra vida de João, ele teve uma parcela aí de talvez, não sei, 30 anos aproximadamente de vida de deserto e ele sai do deserto, ele tem talvez aí meses, digamos, de vida pública, é. E aí quando Cristo é revelado, Whitefield vai falar isso, que quando a ascensão de Cristo, quando Cristo se torna público e João olha e diz: 'É Ele, Ele é o cordeiro de Deus, é por esse cara que eu tô vivendo', quando Jesus é revelado o ministério de João termina. É. E aí cara que é a parada, ele vai trazer esse enfoque sobre o Senhor desejar levantar amigos do noivo, um tipo de gente que não está preocupado em levantar o próprio ministério, é, em construir o próprio nome. É, quando Deus faz o convite para Israel lá com Moisés e diz: 'Moisés liberta esse povo e leva eles pro deserto', em Êxodo, Deus diz: 'Eu quero celebrar uma festa com eles'. Então o deserto nunca foi um lugar de, sabe, de prova no sentido de você vai passar por ele, você vai sair mais forte, privação e tal, não. O propósito de Deus no deserto é levar o homem a um lugar onde não existem distrações e Ele é o centro da atenção."</p>
                 <p><strong>Entrevistador:</strong> "Entendi."</p>
                 <p><strong>Paulo Vicente:</strong> "O Senhor quer levantar um tipo de gente que não tem olhos para outras coisas e aí João vai para esse lugar e ele é batizado por essa mensagem que dizia: 'Enquanto o filho de Deus não estiver aqui nada está bem'. Enquanto Ele não estiver, e é maluco porque, eh, é um estilo de vida intencional, percebe? Ele escolhe intencionalmente ir para uma geografia, para um lugar árido aonde ele não ia ter uma estrutura, ele não teria, eh cara, mecanismos, eh, coisas que... obrigado, coisas que, eh, sabe de alguma forma seria uma plataforma e até uma muleta né, assim, não deu eu me agarro aqui né?"</p>
                 <p><strong>Entrevistador:</strong> "Um apoio, aham."</p>
                 <p><strong>Paulo Vicente:</strong> "É um lugar árido. Bem, quem quisesse ouvir a mensagem de João iria para um lugar, mano, ia ter isso. A roupa dele não, não agradava o estilo, nada né. E o Whitefield ele fala isso, ele diz: 'João intencionalmente, podendo usar uma roupa de um sacerdote, ele veste uma roupa estranha que gerava um incômodo físico nele'. É como se ele tivesse lembrando o próprio corpo: 'Eu não sou digno de viver bem enquanto o meu Senhor não estiver aqui. Eu não tenho direito de caminhar em um conforto fazendo da mensagem eh, um trampolim para a minha vida melhorar'. Enquanto o filho de Deus não foi revelado, ele comia uma comida estranha porque trazia para ele esse senso de propósito: 'Eu estou gastando a minha vida por um homem e eu também não vou comer qualquer coisa. Eu preciso me lembrar: só vai ficar bem quando Cristo for revelado'."</p>
                 <p><strong>Paulo Vicente:</strong> "E eu tô passado esse, esse um ano e pouco quase dois anos... a gente lá em Londrina tem o SDA, que é a semana de avivamento. E aí eu tava ali junto, a gente faz três noites de encontros, um culto assim com um time ministrando adoração, outro pastor pregando e tudo mais, e ia ter um encerramento desses três dias da nossa igreja. E era um sábado, eu tava em casa e eu tava orando pela noite assim, eu tava ali num grupo com outros irmãos ministros de louvor e o pessoal tava mandando ali os set list deles, o que cada um ia ministrar. E eu tava ali dizendo: 'Jesus, o que que o Senhor quer ouvir nessa noite? Poxa é uma oportunidade tão preciosa da tua igreja te exaltar aqui em Londrina, são tantos irmãos de tantos lugares diferentes. Jesus, como que a gente te agrada nessa noite?'"</p>
                 <p><strong>Paulo Vicente:</strong> "E cara, eu lembro que eu entrei no banho e eu comecei a tomar banho, eu tava orando em línguas assim e, né, com meu espírito inclinado pro Senhor e eu escutei esse refrão. E eu escutei, mano: 'É ele, por ele que eu estou gastando a minha vida, perdendo tudo'. E aí eu ouvi isso. Eu ouvi isso, eu comecei a chorar porque eu sei quando é Ele. Hum, é. Eu sei, eu não tenho a capacidade, não mano, eu não tenho a capacidade de escrever isso. Eu não tenho, eu não tenho um curso mano, eu não tenho uma especialização em composição, eu não tenho capacidade."</p>
                 <p><strong>Paulo Vicente:</strong> "Mas esse dia quando eu entrei nesse banho, a mensagem também me lavou. O Senhor disse: 'Eu estou lavando a sua vida e eu estou te banhando com uma mensagem'. E eu fiquei ali chorando e cantando isso. Eu saio do banho, eu gravo no telefone para não perder e amém, mano. Fui pro culto à noite. E, e durante o dia eu tava falando com a minha esposa, com a Beca, dizendo: 'Amor, eu não sei o que é pra gente cantar, eu sinto que tem algo mais pontual que o Senhor quer ouvir da igreja nessa noite'. E repartindo com ela essa santa angústia. Eu sei que começou o culto, foi chegando o momento de eu ministrar a minha parte, eu era um ali junto com os irmãos dividindo a liderança da adoração e eu lembro que quando foi chegando a minha hora de ministrar mano, esse refrão subiu na minha garganta assim, e eu perdi a paz no sentido de..."</p>
                 <p><strong>Entrevistador:</strong> "Uhum."</p>
                 <p><strong>Paulo Vicente:</strong> "...eu falei: vou ter que liberar. É, só que mano, não era minha igreja local, não era o povo que a gente serve junto, era para testar né, e no sentido assim: 'Mano, beleza, vamos lá'. É uma mensagem mano, que tem a ver, precisa estar num contexto às vezes. Então era esse temor assim de falar: 'Meu, eu tenho irmãos da Assembleia, eu tenho irmãos da Batista, da Presbiteriana, Jesus, é a tua igreja, como é que eu vou tocar? E outra, ninguém tá cantando, ninguém tá liberando espontâneo aqui, Deus, tá todo mundo... porque há um propósito de unidade né. Então quanto mais a igreja cantasse junto faria mais sentido e tal'. É mano, e posso ser sincero, essa parada também de eu liberar alguma coisa, as pessoas saírem dali dizendo: 'Cara, você cantou um negócio', entendi, ninguém aparecer né? Exato, mano. E eu fui entrando nessa angústia e eu peguei meu telefone e mandei pra Beca, falei: 'O Senhor tá me incomodando com aquele refrão'. E a Beca falou: 'Então vai, libera, se Ele tá te incomodando é para você falar, nós estamos com você'."</p>
                 <p><strong>Paulo Vicente:</strong> "E aí mano, chegou a hora e eu liberei. E foi muito pontual assim, porque às vezes quando a gente tem alguns ajuntamentos assim de irmãos é bem comum, um ou outro queria um lugar um pouco mais... desde os, desde Caim e Abel né? Desde a antiguidade. E então foi uma mensagem que veio bem na contramão da noite inclusive, entendi. E aí cara, beleza, eu saio dessa reunião, mas esse refrão começa a correr. E aí na nossa igreja local, eh, vira e mexe nos cultos ele aparece, a gente canta ele e, e o Senhor começa a pontuar: 'Eu quero, eu quero liberar mais sobre isso, eu quero falar'. É aí mano, aí eu sentei, abri a palavra e falei: 'Espírito Santo, você sabe fazer isso muito melhor que eu'. E aí Douglas, mano, a canção toda é a palavra escrita mano, é Isaías 40, é... não tem mano assim, eu não consigo te dizer, se eu conseguir poetizar ou romantizar alguma coisa na minha leitura é a palavra muito crua."</p>
                 <p><strong>Paulo Vicente:</strong> "Então 'estou preparando um caminho, endireitando as veredas', é a mensagem de João. 'Voz que clama no deserto, prepara um caminho', enfim. Aí foi o tempo de sentar, abrir a palavra e daí ser intencional nesse sentido de dizer: 'Bom beleza, a gente tem um norte e a gente precisa entender o que que Jesus quer enxertar aqui'. Aí eu termino de escrever e a gente também coloca aquele apontamento profético de Isaías que é da ponte: 'E Ele virá soberano em poder, o governo está nEle'. E aqui é um ponto muito importante porque tem alguns lugares que eu vejo os irmãos cantando isso, e quando a gente fala: 'Vejam, Ele traz consigo a Sua recompensa', não tá falando sobre uma recompensa que o Senhor tá trazendo para nós. Isaías tá fazendo aquele apontamento escatológico que diz que o Senhor virá trazendo consigo todo o povo, raça, tribo, língua e nação dele. Sim. É o cordeiro sendo dignificado mano, então eu lamento te dizer mas você, você entendeu errado você... pronto, ajuda a gente cara, põe lá no seu quadro isso, canal, porque me dá um frio na espinha quando eu vejo a galera adaptando a mensagem. Não, o Senhor não vai trazer uma recompensa para nós, o cordeiro Ele é digno da recompensa, a recompensa é dele."</p>
                 <p><strong>Paulo Vicente:</strong> "É, então enfim, aí voltando à pergunta foi esse trabalho cara, de sentar, organizar a letra, legal, fechar isso. E aí é, é aquela parada assim mano, de você olhar e falar: 'Jesus, é teu, faz o que o Senhor quiser'."</p>
                 <p><strong>Entrevistador:</strong> "E você tinha noção que aconteceria isso mano?"</p>
                 <p><strong>Paulo Vicente:</strong> "Noção não, porque assim, eu, eu tava na Argentina, entendeu? E os caras tavam cantando lá em espanhol entendeu? Eh, então assim: 'Ah, é difícil falar mano que eu tinha noção'."</p>
                 <p><strong>Entrevistador:</strong> "Mas assim, você sabia que era algo especial do Senhor ali? Porque você já tinha... porque eh, para quem não conhecia o Paulinho Drops, eh, pode achar que vocês surgiram esse mês né? Vocês estão há anos servindo ao Senhor e tal. Eh, e vocês já tinham feito, compuseram várias canções, liberaram várias canções e várias que já até já, a gente eh eh já estava cantando e tal. Mas você, quando você, você tipo assim, você viu: 'Cara, Senhor tem algo especial nessa daqui'?"</p>
                 <p><strong>Paulo Vicente:</strong> "Eu tinha uma impressão no meu espírito de que era uma mensagem pontual, hum. Eh, mas eu não tinha noção assim, naturalmente falando, que o Senhor sopraria como Ele tá soprando. Soprando porque tem um outro ponto também mano, quando eu, eu lembro que quando a gente terminou a letra e eu escrevi, eu tinha um, eu tinha meio que um nicho assim no meu coração de irmãos que eu dizia: 'Jesus isso aqui é a porção desses caras'. Uhum. Que assim mano, abrindo meu coração com você aqui, homens como por exemplo Maion, que eu fui a saúde, Maion Barroco. Aham. Homens que estão gastando a sua vida. Hum. Que dizia para mim no almoço hoje, que começou plantando uma igreja numa cidade de Isa 6.000 mesos... você que não viu tem no podcast que eles contando como eles foram pro sertão começar a plantar a igreja. Eu pensei muito. É, eu pensei muito cara, em gente que tá de fato mano uhum, perdendo as coisas literalmente, que não tá construindo um império com o ministério socorro. Então eu pensei em irmãos da nossa igreja mano, gente que, que gasta recurso, que, e que ama o reino e que não tá segurando as coisas para si, que não está. Então eu lembro que quando eu, eu tô com a letra na mão eu falo: 'Jesus, é isso, posiciona isso no coração dos missionários da sala de oração. Sim, entendi. Saca? Gente que saiu da sua terra, que deixou o seu lugar'."</p>
                 <p><strong>Paulo Vicente:</strong> "Então tem alguns lugares mano, que quando eu vejo a galera cantando me traz esse senso assim de, por exemplo, fhop. Uhum. Eu conheço muitos missionários ali. Sim. Gente que saiu da sua terra... aqui você tem gente assim mano. Sim. Vários, lá em Londrina temos vários irmãos assim. Então no meu coração eu tinha essa galera."</p>
               </div>

               <h2>Testemunhos: Monumentos Vivos da Fidelidade de Deus</h2>
               <p><em>"Contai entre as nações a sua glória"</em> (<strong>Salmo 96:3</strong>). Os testemunhos não são apenas histórias do passado; eles são monumentos vivos da fidelidade divina. Eles existem para:</p>
               <ul>
                 <li><strong>Glorificar a Deus</strong>, não o homem.</li>
                 <li><strong>Fortalecer a comunidade</strong> na fé.</li>
                 <li><strong>Validar que o Evangelho</strong> transforma.</li>
                 <li><strong>Cumprir Atos 1:8:</strong> "Ser-me-eis testemunhas".</li>
                 <li><strong>Construir legado</strong> para futuras gerações.</li>
               </ul>
               <p>Nesta seção, compartilhamos histórias reais de como Deus sopra canções, direciona corações e usa pessoas simples para ecoar Sua verdade.</p>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '3rem 0'}} />

               <div className="quote-box" style={{textAlign: 'center', fontSize: '1.3rem', fontFamily: 'serif', fontStyle: 'italic', margin: '2rem 0'}}>
                 "Voz do que clama no deserto: Preparai o caminho do SENHOR; endireitai no ermo vereda a nosso Deus."<br/>— <strong>Isaías 40:3</strong>
               </div>

               <h2>O Encontro que Mudou Tudo ✨</h2>
               <p>Como Deus começou a "dar cliques" nas Escrituras para Paulo, direcionando-o para João Batista. Quando o Senhor quer levantar uma mensagem, Ele prepara o coração do mensageiro, fazendo-o olhar repetidas vezes para a mesma porção da Palavra.</p>

               <h2>A Visita Inesperada 🚪 → O Livro que Mudou Tudo</h2>
               <p>O encontro com Vittor Vieira e o livro "O Escolhido Para o Deserto" de Whitefield foram fundamentais. O livro apontou diretamente para a mensagem da vida de João Batista, marcando uma nova estação na jornada de Paulo.</p>

               <h2>A Saudação que Trouxe Paz 🕊️ → O Deserto que Escolheu João</h2>
               <p>João poderia ter vivido em Jerusalém, assumindo o papel de seu pai como sacerdote, com roupas e comidas confortáveis. Em vez disso, ele escolheu o deserto intencionalmente, abraçando um estilo de vida que chamava a atenção exclusivamente para o Cordeiro de Deus.</p>

               <h2>O Poder das Palavras-Chave 🗣️ → É Ele: O Refrão que Nasceu no Banho</h2>
               <p>O momento sobrenatural no chuveiro: "É ele, por ele que eu estou gastando a minha vida, perdendo tudo". Foi uma canção que não nasceu da técnica de composição, mas de uma mensagem soprando diretamente do coração de Deus.</p>

               <h2>Do Sono da Morte para a Vida em Cristo ⚡ → Da Angústia à Liberação</h2>
               <p>O temor de liberar algo novo em um ambiente de unidade, o apoio incondicional de Rebeca e a coragem de obedecer. Quando Deus incomoda com uma mensagem, a liberação traz alívio e inicia o fluir daquilo que Ele deseja fazer.</p>

               <h2>A Simplicidade que Transforma 🌿 → A Canção é a Palavra</h2>
               <p>A canção inteira é Isaías 40 escrito de forma crua, sem romantização. A mensagem é Cristo, não nós. Ele é o foco, Ele é o Cordeiro digno, e a Sua recompensa é Ele mesmo recebendo as nações por herança.</p>

               <h2>Lições para Nossa Vida 📖</h2>
               <ul>
                 <li><strong>Deus sopra canções no silêncio</strong>, não no palco.</li>
                 <li><strong>O deserto não é punição</strong>; é foco em Deus, livre de distrações.</li>
                 <li><strong>Viver para Cristo</strong> significa "perder tudo" intencionalmente por Ele.</li>
                 <li><strong>A recompensa é dEle</strong>, não nossa. Não devemos adaptar as Escrituras para nos satisfazer.</li>
                 <li><strong>Obedecer mesmo com medo</strong> gera frutos inesperados que ecoam nas nações.</li>
               </ul>

               <h2>Reflexão Final 🔒</h2>
               <p>O chamado de João Batista não foi apenas para ele; é um convite para a Igreja de hoje. O Senhor procura "amigos do noivo" que não estejam preocupados em construir seus próprios impérios ou nomes, mas que vivam para dizer ao mundo: "É Ele". Que nossa vida seja gasta por essa causa.</p>

               <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '3rem 0'}}>
                 <div style={{flex: '1 1 300px', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"Convém que ele cresça e que eu diminua."</em><br/><strong>— João 3:30</strong>
                 </div>
                 <div style={{flex: '1 1 300px', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"E Ele virá soberano em poder; o governo está sobre os seus ombros."</em><br/><strong>— Isaías 9:6</strong> (paráfrase)
                 </div>
               </div>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '2rem 0'}} />

               <h2>Oração 🙏</h2>
               <blockquote style={{fontStyle: 'italic', fontSize: '1.1rem', color: '#555', background: '#fff9f9', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #722F37'}}>
                 "Senhor Jesus,<br/>
                 Obrigado porque Tu és digno de toda recompensa.<br/>
                 Ensina-nos a escolher o deserto quando Tu nos chamas.<br/>
                 Que não busquemos plataforma, mas Tua presença.<br/>
                 Que não construamos nosso nome, mas proclamemos o Teu.<br/>
                 Sopra em nós canções que nasçam da Palavra.<br/>
                 Usa-nos como amigos do Noivo, que se alegram com a Tua revelação.<br/>
                 Quando a angústia vier, dá-nos coragem para liberar o que Tu sopraste.<br/>
                 E que, como João, possamos dizer com alegria: 'É Ele'.<br/>
                 Em nome de Jesus, amém."
               </blockquote>

               <h2>Desafio Prático da Semana 🎯</h2>
               <div style={{background: '#f0f7ff', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem', borderLeft: '4px solid #0066cc'}}>
                 <ol style={{margin: 0, paddingLeft: '1.5rem'}}>
                   <li style={{marginBottom: '10px'}}><strong>Leia Isaías 40 e João 1–3</strong>, meditando na vida de João Batista.</li>
                   <li style={{marginBottom: '10px'}}><strong>Pergunte ao Senhor:</strong> "Há algo que Tu queres que eu 'perca' para que Cristo seja exaltado?"</li>
                   <li style={{marginBottom: '10px'}}><strong>Ouça a canção "É Ele"</strong> em adoração pessoal, cantando junto.</li>
                   <li style={{marginBottom: '10px'}}><strong>Compartilhe este testemunho</strong> com um irmão que precisa de foco em Cristo.</li>
                   <li><strong>Esta semana</strong>, em vez de buscar reconhecimento, ore: "Senhor, que eu diminua para que Tu cresças".</li>
                 </ol>
               </div>

             </div>

           </main>
        ) : isTestemunhoThamires ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Testemunhos</span>
               <h1>Da Epilepsia à Adoração: Como a Música se Tornou a Voz da Cura de Thamires</h1>
               <h2 style={{fontSize: '1.2rem', fontWeight: 'normal', color: '#555', margin: '15px 0'}}>Uma jornada de dor, revelação e canções que nasceram do encontro entre sofrimento e graça</h2>
               <div className="article-meta">Por <strong>João Calvino</strong> | 25 Jun, 2026</div>
             </div>
             
             <div style={{maxWidth: '900px', margin: '2.5rem auto 3rem'}}>
               <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,0,0,0.2)'}}>
                 <iframe 
                   src="https://www.youtube.com/embed/aEFHMJ_Azj0" 
                   title="O Testemunho de Thamires"
                   style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen>
                 </iframe>
               </div>
               <div style={{background: '#f8f9fa', padding: '15px', borderRadius: '0 0 12px 12px', textAlign: 'center'}}>
                 🎥 <a href="http://www.youtube.com/watch?v=aEFHMJ_Azj0" target="_blank" rel="noreferrer" style={{color: '#333', textDecoration: 'none', fontWeight: 'bold'}}>Assista ao podcast completo no vídeo acima</a>
               </div>
             </div>
             
             <div className="article-body">
               <p style={{fontSize: '1.1rem', color: '#555', fontStyle: 'italic', marginBottom: '2.5rem', textAlign: 'center'}}>Para Thamires, a música nunca foi apenas talento — foi linguagem. Foi através do canto que ela recebeu o batismo no Espírito, compôs hinos que tocam milhões e encontrou cura onde a medicina dizia "não há garantia". Descubra como uma menina de seis anos no louvor se tornou voz de um Deus que cura, consola e transforma dor em adoração.</p>

               <h2>📝 Transcrição do Testemunho</h2>
               <div style={{background: '#f8f9fa', padding: '1.5rem', borderLeft: '4px solid #0066cc', borderRadius: '0 8px 8px 0', marginBottom: '3rem', color: '#444', lineHeight: '1.8', fontSize: '0.95rem'}}>
                 <p><strong>Entrevistador:</strong> "O que é e como é que foi, como é que fez história da, da música na sua vida? Você ficou um tempo aqui, 14 anos, você já participou ali daquele concurso e então você sempre esteve envolvida com a música?"</p>
                 <p><strong>Thamires:</strong> "Sempre, sempre estive envolvida com a música. A partir desse momento né, a música para mim ela ficou ligada como relacionamento do Espírito Santo. Por que foi cantando que eu recebi o batismo no Espírito Santo. Então para mim tinha uma relação muito grande da minha expressão de adoração, do nosso relacionamento mesmo assim. Não que a música fosse adoração para mim, mas era uma expressão do meu coração para Deus. Então eu... seis anos, depois de batizada eu já fazia parte do louvor da igreja. Engraçado você ver, eu tenho umas poucas fotos, alguns poucos vídeos assim, mas a banda inteira e só eu daquele tamainho ali, seis anos, o microfone botou assim meio impressionante, mas chegou. E eu fiquei cantando."</p>
                 <p><strong>Thamires:</strong> "Chegou um tempo que eu passei a ter crise... é nessa hora inclusive que nessa fase aí da minha rebeldia né, eu não queria, eu não queria saber de música. Porque na minha cabeça como criança, a música estava ligada com adoração e não fazia sentido a competição para mim. Não fazia sentido a briga pelo poder, quem canta melhor, tá todo mundo adorando a Jesus. 'E quem toca mais', não espera aí, para mim não fazia sentido. E enfim, comecei... retomei isso e comecei a compor muito cedo também. Eu comecei, compus a primeira com 18 anos e comecei a compor... a compor com 12 anos. Gravei ao vivo o primeiro álbum fazendo parte do ministério que eu era antes e... as músicas eram minhas. E aí o tempo foi passando e gravando, e cantando, e compondo e tudo mais. Eu me expressava assim, sempre me expressei assim, então para mim tudo se torna uma revelação até hoje. Toda a minha revelação se torna uma canção. E apesar de não ser minha paixão primária né, a minha coisa foi a dança, então..."</p>
                 <p><strong>Entrevistador:</strong> "É mesmo?"</p>
                 <p><strong>Thamires:</strong> "É, eu achando a minha vida assim, foi ali que eu me entreguei para o Senhor, porque eu não tinha como dançar e cantar, ou fazer uma coisa ou fazer outra. E eu sabia que era a ferramenta que o Senhor queria usar né através da minha vida. Foi 'o que é isso? Então tô aqui e vou cantar, amém'. E foi assim que passou a ser uma expressão né. E sempre compondo. Então se torna uma revelação, se torna uma canção sempre assim. O seu processo de compor é muito parecido com o processo de... meio que uma pregação, sim. E e para mim assim, se eu tivesse que escolher entre pregar e cantar, eu pregaria, eu prefiro mil vezes. Mas o que... uma coisa que eu fui me dando conta ao longo da vida é que assim: pastor prega 50 minutos, uma hora, na semana seguinte ninguém sabe o que ele pregou. Meu, poucas são as pessoas e é... mas se eu componho músicas as pessoas anos depois tem..."</p>
                 <p><strong>Thamires:</strong> "Uma das minhas por exemplo, 'Aquieta Minh'Alma', faz 12 anos já que eu compus, vai fazer 12 anos agora no final do ano, e até hoje... só que eu compus baseado em Salmo 42. Tem uma parte literal, cantar isso também tá literalmente."</p>
                 <p><strong>Entrevistador:</strong> "Agora é uma ótima, é um plágio da escritura, pode né?"</p>
                 <p><strong>Thamires:</strong> "E eu passei a compor assim, então. Lógico que estão envolvidas as minhas experiências pessoais, 'Aquieta Minh'Alma' mesmo, eu com 14 anos descobri que eu era epiléptica, então eu tinha muitas convulsões, eu sofria crises. E nessa adolescência né, e nessa crise da adolescência, de Deus acontecendo, 'e agora como é que eu faço?' e tal, mas ao mesmo tempo querendo servir o Senhor... uns diziam é frescura, outros diziam que é chamar atenção, outros diziam é demônio, outro dizia: 'Um pecado você não sabe que você está cometendo'. E eu: 'Jesus, como vai viver uma coisa que eu nem sei que tá fazendo né?' E esse, enfim, o legalismo ali né dessa dessa vida. E eu só tinha... o Deus e eu, só tive o diagnóstico clínico, mas não tinha diagnóstico por exame."</p>
                 <p><strong>Thamires:</strong> "E eu lembro que era três de de dezembro de 2010 e depois de uma convulsão fortíssima assim, voltava com muitas vezes no corpo, terrível assim. É muito humilhante também, era uma questão muito humilhante. E aí eu lembro que entrei no quarto, peguei o violão e comecei a cantar uma música de um irmão lá e eu nem conheço esse irmão. Essa música me marcou tanto, baseada no Salmo 119 né, que diz: 'Eu estou como um odre na fumaça'. O que é que o odre na fumaça é? É aquela pintura, o couro da novena do posto no varal, ele fica preso ali... E eu 'Senhor, não tem o que fazer, eu tô preso aqui, eu tô literalmente preso né'. Cercada, me sentindo ele, como o Salmo 139: 'Por trás e por diante... se eu for a mãe não tem um próximo de é isso aqui que eu vou viver e é isso tá bom o seu encontro'. Sendo que me curava em tanto, vivi coisa de cura... e sabia que isso me curava mesmo. 'E quando Ele vai curar?'"</p>
                 <p><strong>Thamires:</strong> "E aí entrei, comecei a cantar isso né: 'Quando a verdade me consolar, preciso viver as promessas né?' Tá, eu fui cantando aquela música. Quando aquilo acabou, estava com a escritura aberta meditando em Salmos 42, vem. Oi, e ele fala: 'Como a corça suspira pelas correntes das águas'. Eu comecei a chorar, aquela melodia, eu chorei a melodia 'Aquieta Minh'Alma' inteira primeiro. Nem sem uma letra. Depois compus a letra e depois mostrei né pro pessoal do ministério: 'Tudo que aceito, uma palavra aqui, outra ali, música pronto'. E as pessoas até falavam muito dessa música: 'Muito ruim não gravar essa música, essa música é horrível, essa... essa gostei muito ruim... fica... vamos gravar'. Cara, toda vez que a gente ministra, toca as pessoas, é uma história, tem uma história com essa canção e tal. Gravamos aí né, foi que deu no que deu. E anos depois... já era 2015, compus em 2010... já em 2015 já tava tendo sim, 5, 6 convulsões por dia."</p>
                 <p><strong>Entrevistador:</strong> "Sério?"</p>
                 <p><strong>Thamires:</strong> "Tava terrível. Senhor... Eu lembro que nesse dia eu tava no culto de mulheres, são umas cinco mil mulheres, um pastor da Nigéria tinha vindo ministrar. E eu tinha acabado de passar mal assim, tudo abaixo, teve uma crise convulsiva assim. E troquei de roupa né, você tava naquela situação de uma mente brilhante, troquei de roupa tudo, só que eu cheguei no culto que está acontecendo e parecia que tava no cemitério e ninguém responde à presença de Deus, e a presença de Deus estava ali. E eu 'Meu Deus, ninguém vai fazer nada, de novo vai fazer nada, ninguém vai fazer nada, não tem mais um fazer do nosso Senhor'. Eu me revoltei: 'Meu Deus como assim a presença de Deus, para que você possa tá só olhando como se não valesse nada'."</p>
                 <p><strong>Thamires:</strong> "Eu fui lá, fui lá para frente sozinha. Fechei... ele começou a ministrar, as meninas tavam junto com ele. Ele só orando e o pessoal ministrando 'Navegarei' e eu ali de olho fechado. Sai uma irmã assim sabe, aquela quando acontece assim que do mesmo jeito do banheiro assim, nasceu parece, e sobem e vem uma irmã... 'Pois amor eu tô vendo... o Senhor está te curando hoje' e saiu. E eu vi, muita gente sabe, eu passava mal demais né. Tem muita gente que sabia e até o Fred Arrais estava conversando com ele: 'Cara, te ajudei uma vez numa ministração de socorrista. Eu estava ministrando, te socorri'. 'É meu? Foi assim no meio? Eu não lembro'. Licitação, eu passei mal e eu falei: 'Meu Deus, eu nem lembrava disso'. Minha irmã passou, eu falei: 'Muita gente sabe, eu não vou parar os remédios, eu não vou'. E seis meses antes eu tinha pegado um diagnóstico por imagem né, nosso... muito cerebral tudo dentro... Eu tinha um exame finalmente né para falar: 'Amigos queridos, olha, é uma condição médica'."</p>
                 <p><strong>Thamires:</strong> "E aí eu falei: 'Vou continuar os remédios'. Eu tô tendo crise com o remédio, não consigo. Inclusive as pessoas que tá falando 'é muito linda essa letra, dessa música e tal', mas eu tava vivendo literal. Depender de Deus é viver perigosamente para mim, era: 'Você vai? Vou confiar no Senhor, vou depender do Senhor, mas eu vou, se eu tiver atravessando a rua, eu passar mal e me atropelar, vou morrer, acabou'. E não era um perigo viver, e os médicos sem falar: 'Nas próximas convulsões não garanto que você volta enxergando, a gente não garante que você volta falando, a gente não ganha nada... com parada cardiorrespiratória, vai se imaginar'."</p>
                 <p><strong>Thamires:</strong> "E aí eu falei: 'Vou continuar os remédios'. 20 dias depois eu lembrei que eu não tinha tomado remédio e me dei conta que não tava passando, não tava passando mal mais. E você... anos se passaram, fui fazer os exames tudo e até com o doutor Cláudio aí... não sei se conhece, irmão... e ele falou: 'Tamires, seu cérebro é perfeito né. De alguém que um dia sofreu disso e hoje está bem, não é de alguém que um dia... ele fica sequelas, ele fica mostra, é só umas cargas elétricas muito fortes, só não seu, seu cérebro é como se você nunca tivesse tido nada'. Então assim, a música para mim ela sempre esteve relacionada diretamente com um relacionamento com Deus, mas ela também foi a ferramenta de uso para muita gente. Então é..."</p>
               </div>

               <h2>Testemunhos: Monumentos Vivos da Fidelidade de Deus</h2>
               <p><em>"Contai entre as nações a sua glória"</em> (<strong>Salmo 96:3</strong>). Os testemunhos não são apenas histórias do passado; eles são monumentos vivos da fidelidade divina. Eles existem para:</p>
               <ul>
                 <li><strong>Glorificar a Deus</strong>, não o homem.</li>
                 <li><strong>Fortalecer a comunidade</strong> na fé.</li>
                 <li><strong>Validar que o Evangelho</strong> transforma.</li>
                 <li><strong>Cumprir Atos 1:8:</strong> "Ser-me-eis testemunhas".</li>
                 <li><strong>Construir legado</strong> para futuras gerações.</li>
               </ul>
               <p>Nesta seção, compartilhamos histórias reais de como Deus usa a música, o sofrimento e a rendição para escrever canções que ecoam eternamente.</p>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '3rem 0'}} />

               <div className="quote-box" style={{textAlign: 'center', fontSize: '1.3rem', fontFamily: 'serif', fontStyle: 'italic', margin: '2rem 0'}}>
                 "Como a corça suspira pelas correntes das águas, assim, ó Deus, a minha alma suspira por ti."<br/>— <strong>Salmo 42:1</strong>
               </div>

               <h2>O Encontro que Mudou Tudo ✨</h2>
               <p>Como Thamires recebeu o batismo no Espírito cantando e entendeu a música como linguagem de relacionamento com Deus. Não era apenas talento ou paixão secundária (a dança era a primária), mas o meio escolhido por Deus para que ela expressasse seu coração a Ele.</p>

               <h2>A Visita Inesperada 🚪 → A Menina de Seis Anos no Louvor</h2>
               <p>Microfone grande demais, banda inteira e só ela pequena no altar. Mas ali, já aos seis anos, Deus estava chamando uma adoradora. A música não era exibição, era intimidade precoce e profunda com o Senhor.</p>

               <h2>A Saudação que Trouxe Paz 🕊️ → Quando a Música Parecia sem Sentido</h2>
               <p>A crise adolescente veio acompanhada de um choque de realidade com o "mercado" e a "competição" eclesiástica. "Se é adoração, por que competição?" Essa busca por pureza a fez se afastar momentaneamente, até entender o real propósito da adoração.</p>

               <h2>O Poder das Palavras-Chave 🗣️ → Aquieta Minh'Alma: A Melodia que Nasceu em Lágrimas</h2>
               <p>No dia 3 de dezembro de 2010, após uma convulsão humilhante, Thamires encontrou consolo na dor ao ler o Salmo 42. Foi ali, trancada no quarto e chorando, que a melodia de um dos maiores hinos de sua geração nasceu, antes mesmo da letra.</p>

               <h2>Do Sono da Morte para a Vida em Cristo ⚡ → Viver Perigosamente: Confiança em Meio ao Perigo</h2>
               <p>Com 5 a 6 convulsões por dia, enfrentando diagnósticos assustadores (risco de perder visão, fala, ou a própria vida) e até o julgamento religioso ("é demônio, é pecado, é frescura"), ela precisou aprender na prática que "depender de Deus é viver perigosamente".</p>

               <h2>A Simplicidade que Transforma 🌿 → Seu Cérebro é Perfeito</h2>
               <p>A cura não veio como um relâmpago mágico, mas no processo de uma adoração desesperada em um culto onde parecia que "Deus não estava fazendo nada". Anos depois, os exames confirmaram o impossível: um cérebro sem sequelas, "como se você nunca tivesse tido nada".</p>

               <h2>Lições para Nossa Vida 📖</h2>
               <ul>
                 <li><strong>A música pode ser linguagem de cura</strong>, não apenas talento vocal.</li>
                 <li><strong>Deus usa nossa dor</strong> para compor hinos que consolam outras pessoas que estão na fumaça.</li>
                 <li><strong>"Depender de Deus é viver perigosamente"</strong> — mas é o único lugar seguro de verdade.</li>
                 <li><strong>A cura pode vir no processo</strong>, e o milagre se confirma no tempo de Deus.</li>
                 <li><strong>Nossas canções nascem da Palavra</strong> unida à nossa experiência e rendição.</li>
               </ul>

               <h2>Reflexão Final 🔒</h2>
               <p>O testemunho de Thamires é um convite para ver a adoração não como performance ou competição, mas como o oxigênio de um relacionamento vivo com o Espírito Santo. É um chamado para compor a partir da Palavra e continuar adorando e confiando, mesmo quando o diagnóstico tenta te calar.</p>

               <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '3rem 0'}}>
                 <div style={{flex: '1 1 300px', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"O SENHOR está perto dos que têm o coração quebrantado e salva os de espírito abatido."</em><br/><strong>— Salmo 34:18</strong>
                 </div>
                 <div style={{flex: '1 1 300px', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"Mas os que esperam no SENHOR renovam as suas forças; sobem com asas como águias, correm e não se cansam, caminham e não se fatigam."</em><br/><strong>— Isaías 40:31</strong>
                 </div>
               </div>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '2rem 0'}} />

               <h2>Oração 🙏</h2>
               <blockquote style={{fontStyle: 'italic', fontSize: '1.1rem', color: '#555', background: '#fff9f9', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #722F37'}}>
                 "Senhor Jesus,<br/>
                 Obrigado porque Tu és o Deus que ouve o choro e transforma em canção.<br/>
                 Ensina-nos a usar nossa dor como linguagem de adoração, não como muro.<br/>
                 Que nossas canções nasçam da Tua Palavra e do nosso encontro contigo.<br/>
                 Cura os quebrantados, consola os que esperam, renova os que cansaram.<br/>
                 Usa-nos como instrumentos de Tua graça, mesmo quando não entendemos o processo.<br/>
                 E que, como Thamires, possamos dizer: 'Minha música é relacionamento Contigo'.<br/>
                 Em nome de Jesus, amém."
               </blockquote>

               <h2>Desafio Prático da Semana 🎯</h2>
               <div style={{background: '#f0f7ff', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem', borderLeft: '4px solid #0066cc'}}>
                 <ol style={{margin: 0, paddingLeft: '1.5rem'}}>
                   <li style={{marginBottom: '10px'}}><strong>Leia Salmo 42</strong> e medite: "Como a corça suspira... assim minha alma suspira por Ti".</li>
                   <li style={{marginBottom: '10px'}}><strong>Escreva uma oração ou canção curta</strong> baseada em um versículo que fala ao seu coração hoje.</li>
                   <li style={{marginBottom: '10px'}}><strong>Compartilhe com alguém</strong> como Deus tem usado sua história (ou sua música) para abençoar.</li>
                   <li style={{marginBottom: '10px'}}><strong>Esta semana, antes de cantar, orar ou servir</strong>, pergunte: "Senhor, isso é expressão do meu coração para Ti ou busca de reconhecimento?"</li>
                   <li><strong>Ore por alguém que está esperando cura:</strong> "Senhor, renova as forças de quem espera em Ti".</li>
                 </ol>
               </div>

             </div>

           </main>
        ) : isTestemunhoJulliany ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Testemunhos</span>
               <h1>A Voz que Quebrou Correntes: O Chamado de Julliany Souza no Quarto do Pai</h1>
               <h2 style={{fontSize: '1.2rem', fontWeight: 'normal', color: '#555', margin: '15px 0'}}>Como uma adolescente usou o louvor como arma espiritual e viu Deus transformar uma família</h2>
               <div className="article-meta">Por <strong>João Calvino</strong> | 25 Jun, 2026</div>
               <div className="share-buttons" style={{display: 'flex', gap: '10px', marginTop: '15px', justifyContent: 'center'}}>
                 <button className="share-btn">📘 Facebook</button>
                 <button className="share-btn">📱 WhatsApp</button>
                 <button className="share-btn">🐦 Twitter</button>
                 <button className="share-btn">📸 Instagram</button>
               </div>
             </div>
             
             <div style={{maxWidth: '900px', margin: '2.5rem auto 3rem'}}>
               <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 50px rgba(0,0,0,0.2)'}}>
                 <iframe 
                   src="https://www.youtube.com/embed/AyY3DsOcQmY" 
                   title="O Testemunho de Julliany Souza"
                   style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none'}}
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                   allowFullScreen>
                 </iframe>
               </div>
               <div style={{background: '#f8f9fa', padding: '15px', borderRadius: '0 0 12px 12px', textAlign: 'center'}}>
                 🎥 <a href="http://www.youtube.com/watch?v=AyY3DsOcQmY" target="_blank" rel="noreferrer" style={{color: '#333', textDecoration: 'none', fontWeight: 'bold'}}>Assista ao testemunho completo no vídeo acima</a>
               </div>
             </div>
             
             <div className="article-body">
               <p style={{fontSize: '1.1rem', color: '#555', fontStyle: 'italic', marginBottom: '2.5rem', textAlign: 'center'}}>Antes dos palcos e das multidões, havia uma porta fechada. Do outro lado, dor. Do lado de cá, uma adolescente com um violão e uma certeza: "Creio que Tu és a cura". Descubra como Julliany Souza aprendeu que o louvor não é apenas música — é arma espiritual que rompe cadeias e gera chamados.</p>

               <h2>📝 Transcrição do Testemunho</h2>
               <div style={{background: '#f8f9fa', padding: '1.5rem', borderLeft: '4px solid #0066cc', borderRadius: '0 8px 8px 0', marginBottom: '3rem', color: '#444', lineHeight: '1.8', fontSize: '0.95rem'}}>
                 <p>"Eu passei a viver uma, uma vida de devoção ao Senhor ainda na minha adolescência, e eu comecei a usar o louvor como arma ali na minha casa, para o que eu tava passando na minha família. E eu me lembro que meu pai, ele ficava... eh, ele fazia uso da droga dentro de casa, trancado no quarto, e eu ficava cantando na porta para ele. Eu ficava cantando os louvores porque eu entendia que aquilo ali era uma arma.</p>
                 <p>E de alguma forma eu entendia que Deus tinha me entregado aquilo, sabe? Que o Senhor tinha me entregue aquilo. Então eu ficava cantando na porta dele: 'Creio que tu és a cura'. E meu chamado, acredito que começou ali. Começou na minha casa, começou com essa fé tão grande que eu tinha, que o meu pai seria alcançado, que meu pai seria tocado por Deus através da minha voz, através daquilo que eu cantava."</p>
               </div>

               <h2>Testemunhos: Monumentos Vivos da Fidelidade de Deus</h2>
               <p><em>"Contai entre as nações a sua glória"</em> (<strong>Salmo 96:3</strong>). Os testemunhos não são apenas histórias do passado; eles são monumentos vivos da fidelidade divina. Eles existem para:</p>
               <ul>
                 <li><strong>Glorificar a Deus</strong>, não o homem.</li>
                 <li><strong>Fortalecer a comunidade</strong> na fé.</li>
                 <li><strong>Validar que o Evangelho</strong> transforma.</li>
                 <li><strong>Cumprir Atos 1:8:</strong> "Ser-me-eis testemunhas".</li>
                 <li><strong>Construir legado</strong> para futuras gerações.</li>
               </ul>
               <p>Nesta seção, compartilhamos histórias reais de como Deus usa vozes simples, em lugares comuns, para realizar obras extraordinárias.</p>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '3rem 0'}} />

               <div className="quote-box" style={{textAlign: 'center', fontSize: '1.3rem', fontFamily: 'serif', fontStyle: 'italic', margin: '2rem 0'}}>
                 "Cantai ao SENHOR um cântico novo; cantai ao SENHOR, todas as terras."<br/>— <strong>Salmo 96:1</strong>
               </div>

               <h2>O Encontro que Mudou Tudo ✨</h2>
               <p>Como Julliany, ainda adolescente, entendeu que o louvor era mais que música: era linguagem de guerra espiritual e intercessão. Ela descobriu cedo que a adoração move os céus a favor das nossas batalhas terrenas.</p>

               <h2>A Visita Inesperada 🚪 → A Porta Fechada do Quarto</h2>
               <p>O pai trancado, o uso de drogas, a filha do lado de fora com um violão e uma convicção inabalável: "Deus me entregou isso". Em vez de ceder ao desespero, ela escolheu usar o que tinha nas mãos para lutar por quem amava.</p>

               <h2>A Saudação que Trouxe Paz 🕊️ → Creio que Tu és a Cura</h2>
               <p>A frase "Creio que tu és a cura" era repetida como profecia, não apenas como um desejo distante. Era a fé que canta antes de ver o milagre acontecer, declarando a verdade sobre a dor.</p>

               <h2>O Poder das Palavras-Chave 🗣️ → O Louvor como Arma</h2>
               <p>Não era entretenimento, nem performance. Era uma arma espiritual capaz de romper cadeias invisíveis. O louvor tem o poder de mudar a atmosfera e trazer a luz de Deus para as trevas mais densas.</p>

               <h2>Do Sono da Morte para a Vida em Cristo ⚡ → O Chamado que Nasceu em Casa</h2>
               <p>O ministério não começou no palco; começou no corredor, na porta, na persistência de uma filha que amava seu pai. O verdadeiro chamado de Deus muitas vezes floresce no solo escondido das nossas lutas familiares.</p>

               <h2>A Simplicidade que Transforma 🌿 → Fé que Canta no Escuro</h2>
               <p>Não precisava de plateia, de microfone de última geração, nem de aplausos. Precisava apenas de obediência e fé verdadeira. E Deus honrou aquela voz que cantava no escuro.</p>

               <h2>Lições para Nossa Vida 📖</h2>
               <ul>
                 <li><strong>O louvor é arma</strong> quando nasce da fé, não da performance.</li>
                 <li><strong>Deus usa lugares comuns</strong> (quartos, portas, corredores) para gerar chamados extraordinários.</li>
                 <li><strong>Cantar "Creio que Tu és a cura"</strong> antes da cura chegar é um poderoso ato de guerra espiritual.</li>
                 <li><strong>O chamado muitas vezes começa</strong> intercedendo em secreto por quem amamos.</li>
                 <li><strong>A persistência na adoração</strong> gera colheita que nem sempre vemos imediatamente, mas que Deus garante no tempo certo.</li>
               </ul>

               <h2>Reflexão Final 🔒</h2>
               <p>A história de Julliany é um convite para usarmos o louvor como intercessão dentro de nossas casas. É um chamado para crer antes de ver, entendendo que Deus sempre honra as vozes que escolhem cantar, mesmo diante das portas trancadas.</p>

               <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px', margin: '3rem 0'}}>
                 <div style={{flex: '1 1 300px', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"Mas à meia-noite Paulo e Silas oravam e cantavam hinos a Deus, e os outros presos os escutavam."</em><br/><strong>— Atos 16:25</strong>
                 </div>
                 <div style={{flex: '1 1 300px', padding: '1.5rem', background: '#f5f5f5', borderRadius: '8px', textAlign: 'center'}}>
                   <em>"O sacrifício aceitável a Deus é o espírito quebrantado; ao coração quebrantado e contrito não desprezarás, ó Deus."</em><br/><strong>— Salmo 51:17</strong>
                 </div>
               </div>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '2rem 0'}} />

               <h2>Oração 🙏</h2>
               <blockquote style={{fontStyle: 'italic', fontSize: '1.1rem', color: '#555', background: '#fff9f9', padding: '20px', borderRadius: '10px', borderLeft: '4px solid #722F37'}}>
                 "Senhor Jesus,<br/>
                 Obrigado porque Tu usas vozes simples para realizar obras extraordinárias.<br/>
                 Ensina-nos a usar o louvor como arma de intercessão, não como performance.<br/>
                 Que cantemos 'Creio que Tu és a cura' mesmo quando a cura ainda não chegou.<br/>
                 Usa nossas casas como altar, nossas famílias como missão, nossas vozes como espada.<br/>
                 E que, como Julliany, possamos crer: o chamado começa onde estamos, com o que temos.<br/>
                 Em nome de Jesus, amém."
               </blockquote>

               <h2>Desafio Prático da Semana 🎯</h2>
               <div style={{background: '#f0f7ff', padding: '1.5rem', borderRadius: '12px', marginTop: '1.5rem', borderLeft: '4px solid #0066cc'}}>
                 <ol style={{margin: 0, paddingLeft: '1.5rem'}}>
                   <li style={{marginBottom: '10px'}}><strong>Escolha uma pessoa da sua família</strong> por quem você quer interceder em louvor esta semana.</li>
                   <li style={{marginBottom: '10px'}}><strong>Cante ou declare "Creio que Tu és a cura"</strong> sobre uma situação que parece sem solução.</li>
                   <li style={{marginBottom: '10px'}}><strong>Separe 10 minutos diários</strong> para louvar em casa, mesmo que ninguém esteja ouvindo.</li>
                   <li style={{marginBottom: '10px'}}><strong>Escreva uma frase profética</strong> baseada em um versículo e declare sobre sua casa.</li>
                   <li><strong>Compartilhe este testemunho</strong> com alguém que precisa crer que Deus ouve o louvor no quarto fechado.</li>
                 </ol>
               </div>

               <hr style={{border: 'none', borderTop: '1px solid #eee', margin: '3rem 0'}} />

               <div className="comments-section" style={{marginTop: '3rem'}}>
                 <h3>Comentários 💬</h3>
                 <p style={{color: '#666', marginBottom: '1.5rem'}}>Compartilhe como você já usou o louvor como intercessão em sua casa.</p>
                 <textarea className="comment-input" placeholder="Escreva o seu comentário aqui..."></textarea>
                 <button className="btn-cta">Publicar Comentário</button>
               </div>
               
               <div style={{marginTop: '3rem', textAlign: 'center'}}>
                 <button className="btn-cta" style={{background: '#333'}}>Compartilhar Seu Testemunho</button>
               </div>

             </div>

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
        ) : isEleicao ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Teologia</span>
               <h1>A Doutrina da Eleição Incondicional: A Beleza da Graça Soberana em Efésios 1 e Romanos 9</h1>
               <div className="article-meta">Por <strong>João Calvino</strong> | 18 Abr, 2026</div>
             </div>
             
             <img src="/eleicao.png" alt="A Doutrina da Eleição Incondicional" className="article-hero-img" loading="lazy" />
             
             <p>A doutrina da eleição incondicional é, sem dúvida, uma das verdades mais gloriosas, mais confortadoras e, simultaneamente, mais mal compreendidas de toda a teologia cristã. Para muitos, soa como arbitrariedade divina ou fatalismo frio. Para a Igreja Reformada, contudo, é o coração pulsante do Evangelho: a declaração inequívoca de que a salvação, do início ao fim, é obra exclusiva de Deus.</p>
             <p>Neste estudo, mergulharemos nas Escrituras, na história da Igreja e na pastoral cristã para desvendar não apenas o <em>que</em> a Bíblia ensina sobre a eleição, mas <em>por que</em> essa verdade deve nos levar a joelhos, não a debates estéreis.</p>

             <hr />

             <h2>📖 I. Fundamento Bíblico I: Efésios 1:3-14 — A Bênção nas Regiões Celestiais</h2>
             <p>Paulo abre sua epístola aos efésios com uma doxologia que ecoa a eternidade. Nos versículos 3-14, ele desenha o plano redentor de Deus antes mesmo da fundação do mundo:</p>
             <blockquote>
               <p><em>"Bendito o Deus e Pai de nosso Senhor Jesus Cristo, que nos abençoou com todas as bênçãos espirituais nas regiões celestiais em Cristo, assim como nos escolheu nele antes da fundação do mundo, para sermos santos e irrepreensíveis diante dele."</em> (Ef 1:3-4)</p>
             </blockquote>
             <p>Observe os marcadores teológicos:</p>
             <ol>
               <li><strong>Tempo:</strong> "Antes da fundação do mundo" — a eleição não é reação divina ao comportamento humano; é decreto eterno.</li>
               <li><strong>Base:</strong> "Em Cristo" — a eleição não é abstrata; está cristocentricamente fundamentada. Cristo é o Eleito por excelência; nós somos eleitos <em>nEle</em>.</li>
               <li><strong>Propósito:</strong> "Para sermos santos" — a eleição não é apenas para salvação, mas para transformação. A graça soberana não anula a santidade; ela a produz.</li>
               <li><strong>Meio:</strong> "Nos predestinou para ele, para a adoção de filhos" (v.5) — a predestinação visa relacionamento filial, não apenas juridismo forense.</li>
             </ol>
             <p>Paulo repete a ênfase no versículo 11: <em>"Nele, digo, no qual fomos também feitos herança, predestinados conforme o propósito daquele que faz todas as coisas conforme o conselho da sua vontade."</em> A expressão "conselho da sua vontade" aponta para uma decisão divina autônoma, não condicionada por fatores externos.</p>

             <hr />

             <h2>⚖️ II. Fundamento Bíblico II: Romanos 9 — O Oleiro, o Barro e a Misericórdia</h2>
             <p>Se Efésios 1 apresenta a eleição como bênção cósmica, Romanos 9 a defende como justiça divina. Paulo enfrenta uma objeção prática: <em>"A palavra de Deus falhou?"</em> (Rm 9:6). A resposta não é teórica; é histórica e teológica.</p>
             <p>Paulo recorre a Jacó e Esaú:</p>
             <blockquote>
               <p><em>"Antes de nascerem, antes de praticarem o bem ou o mal (para que o propósito de Deus quanto à eleição prevalecesse, não por obras, mas por aquele que chama), foi dito a ela: O maior servirá ao menor. Como está escrito: Amei Jacó e odiei Esaú."</em> (Rm 9:11-13)</p>
             </blockquote>
             <p>Note o timing divino: <strong>"Antes de nascerem, antes de praticarem o bem ou o mal"</strong>. A escolha não se baseia em previsão de fé, mérito moral ou resposta humana. Baseia-se no <strong>"propósito de Deus quanto à eleição"</strong>.</p>
             <p>Quando Paulo antecipa a objeção <em>"Há injustiça da parte de Deus?"</em> (v.14), ele responde com Êxodo 33:19:</p>
             <blockquote>
               <p><em>"Terei misericórdia de quem eu tiver misericórdia e me compadecerei de quem eu me compadecer."</em></p>
             </blockquote>
             <p>A soberania da misericórdia não é tirania; é a própria essência da graça. Se Deus deve a todos a salvação, então a salvação não é graça, é dívida. Mas a graça, por definição, é imerecida.</p>
             <p>Paulo usa a metáfora do oleiro (v.20-24) não para anular a responsabilidade humana, mas para recalibrar nossa perspectiva: o Criador tem direito soberano sobre a criatura. Isso não faz de Deus um tirano, mas um Rei cujo trono está fundado em santidade e amor.</p>

             <hr />

             <h2>🕰️ III. Desenvolvimento Histórico: Da Controvérsia Pelagiana aos Cânones de Dort</h2>
             <p>A eleição não é invenção calvinista. É fio condutor da ortodoxia cristã:</p>
             <ul>
               <li><strong>Agostinho (séc. IV-V):</strong> Combateu o pelagianismo afirmando que a graça precede a vontade humana. <em>"Dá o que ordenas e ordena o que queres."</em></li>
               <li><strong>Reforma Protestante (séc. XVI):</strong> Lutero e Calvino recuperaram a centralidade da graça soberana contra o semi-pelagianismo medieval.</li>
               <li><strong>Sínodo de Dort (1618-1619):</strong> Em resposta aos arminianos, os reformados formularam os Cinco Pontos do Calvinismo, sendo a <strong>Eleição Incondicional</strong> o "E" de TULIP. O Cânones declararam: <em>"A eleição é o propósito imutável de Deus, pelo qual, antes da fundação do mundo, Ele escolheu em Cristo, para a salvação, um número definido de pessoas, não por previsão de fé ou obras, mas unicamente por Sua livre graça e amor."</em></li>
             </ul>
             <p>Essa continuidade histórica mostra que a eleição não é doutrina marginal; é guardiã do Evangelho da graça.</p>

             <hr />

             <h2>🛡️ IV. Respondendo às Objeções Comuns</h2>
             
             <h3>1. "Isso torna Deus injusto!"</h3>
             <p><strong>Resposta:</strong> Justiça seria dar a todos o que merecem: condenação. Misericórdia é dar o que não merecemos: salvação. Deus não é injusto por ser misericordioso a alguns; seria injusto se fosse misericordioso a <em>todos</em> sem base em Cristo (pois a justiça exigiria punição). A cruz satisfaz a justiça; a eleição aplica a misericórdia.</p>

             <h3>2. "E o livre-arbítrio humano?"</h3>
             <p><strong>Resposta:</strong> A Bíblia não ensina "livre-arbítrio" no sentido moderno de neutralidade absoluta. Ensina <strong>livre-agência</strong>: o homem age conforme sua natureza. Caído, escolhe o pecado livremente (Jo 8:34). Regenerado, escolhe Cristo livremente (Jo 6:44-45). A eleição não anula a vontade; a liberta da escravidão do pecado.</p>

             <h3>3. "Se Deus já escolheu, por que evangelizar?"</h3>
             <p><strong>Resposta:</strong> Porque Deus ordenou os fins <em>e</em> os meios. A eleição é o <em>porquê</em> da salvação; o evangelho é o <em>como</em>. Atos 13:48 mostra a conexão: <em>"Creram todos os que haviam sido destinados para a vida eterna."</em> A pregação é o instrumento pelo qual os eleitos são chamados. Sem evangelismo, não há chamada; sem eleição, não há resposta verdadeira.</p>

             <h3>4. "Deus é amor. Como pode escolher alguns e deixar outros?"</h3>
             <p><strong>Resposta:</strong> O amor de Deus não é sentimentalismo universalista; é amor santo que resgata pecadores merecedores de ira. Romanos 9:22-23 mostra dois vasos: uns de ira, outros de misericórdia. A paciência de Deus com os réprobos é real (2Pe 3:9), mas Sua escolha salvífica é particular. Isso não diminui Seu amor; exalta Sua graça seletiva.</p>

             <h3>5. "Isso gera fatalismo ou indiferença espiritual."</h3>
             <p><strong>Resposta:</strong> Pelo contrário. A eleição é âncora de segurança, não desculpa para passividade. Pedro exorta: <em>"Procurai fazer cada vez mais firme a vossa vocação e eleição"</em> (2Pe 1:10). Os eleitos são chamados a santidade (Ef 1:4), perseverança (Jo 10:28-29) e amor fraterno (1Ts 1:4). A doutrina correta produz piedade, não preguiça.</p>

             <hr />

             <h2>💡 V. Implicações Pastorais: Por que essa doutrina importa hoje?</h2>
             
             <h3>1. Humildade Radical</h3>
             <p>Se a salvação depende de minha escolha, tenho motivo para me gloriar. Se depende da eleição soberana, toda glória é de Deus (Ef 1:6, 12, 14). A eleição mata o orgulho religioso.</p>

             <h3>2. Segurança Inabalável</h3>
             <p>Minha fé pode vacilar. Meus sentimentos podem oscilar. Mas o decreto eterno de Deus não muda. <em>"Quem intentará acusação contra os eleitos de Deus? É Deus quem os justifica."</em> (Rm 8:33-34). A eleição é o alicerce da perseverança dos santos.</p>

             <h3>3. Evangelismo com Coragem</h3>
             <p>Não pregamos para "convencer" Deus a salvar; pregamos porque Deus já decidiu salvar por meio da Palavra. A certeza da eleição liberta o evangelista do peso de "resultados" e o direciona à fidelidade.</p>

             <h3>4. Adoração Profunda</h3>
             <p>A eleição não é tema para especulação acadêmica; é motivo para doxologia. Efésios 1 termina com Paulo louvando: <em>"Para o louvor da sua glória."</em> A teologia correta sempre desemboca em adoração.</p>

             <hr />

             <h2>🕊️ VI. Conclusão: A Beleza que Conforta e Transforma</h2>
             <p>A eleição incondicional não é um dogma frio; é o abraço eterno de um Pai que, antes que o tempo existisse, olhou para Cristo e disse: <em>"Nele, Eu salvarei os Meus."</em> É a garantia de que nenhuma falha minha, nenhuma fraqueza minha, nenhum erro meu pode desfazer o que Deus estabeleceu na eternidade.</p>
             <p>Longe de nos afastar de Deus, essa doutrina nos lança em Seus braços. Longe de nos tornar passivos, nos torna gratos, santos e ousados na missão.</p>
             <p>Que a Igreja do século XXI recupere não apenas a <em>defesa</em> da eleição, mas a <em>adoração</em> que ela produz. Pois no fim, como declarou Agostinho: <em>"Tu nos fizeste para Ti, e nosso coração está inquieto até que descanse em Ti."</em> A eleição é o caminho pelo qual esse descanso se torna realidade.</p>
             <p><strong>Soli Deo Gloria.</strong></p>

             <hr />

             <p><strong>📚 Leitura Recomendada:</strong></p>
             <ul>
               <li><em>A Instituição da Religião Cristã</em> — João Calvino (Livro III, caps. 21-24)</li>
               <li><em>Os Cânones de Dort</em> — Texto integral disponível em português</li>
               <li><em>Eleição e Predestinação</em> — R.C. Sproul</li>
               <li><em>Romanos 1-8</em> — Thomas Schreiner (Comentário NT)</li>
               <li><em>Efésios</em> — John Stott & F.F. Bruce</li>
             </ul>

             <p><strong>🔗 Referências Bíblicas Chave:</strong> Ef 1:3-14; Rm 8:29-30; Rm 9:6-24; Jo 6:37-44; 2Ts 2:13; 1Pe 1:1-2; Ap 13:8; 17:8</p>
          </main>
        ) : isGalatas ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Estudos Bíblicos</span>
               <h1>A Carta aos Gálatas e a Liberdade Cristã: O Evangelho da Graça Contra o Legalismo</h1>
               <div className="article-meta">Por <strong>João Calvino</strong> | 14 Mar, 2026</div>
             </div>
             
             <img src="/galatas.png" alt="A Carta aos Gálatas e a Liberdade Cristã" className="article-hero-img" loading="lazy" />
             
             <p><em>"Foi para a liberdade que Cristo nos libertou. Portanto, permaneçam firmes e não se deixem submeter novamente a um jugo de escravidão."</em> — Gálatas 5:1</p>
             <p>A Carta aos Gálatas é, sem exagero, a <strong>Magna Carta da liberdade cristã</strong>. Martinho Lutero, que a chamava de "minha epístola", disse certa vez: <em>"Eu me casei com a Carta aos Gálatas."</em> Por quê? Porque nela encontramos o coração do Evangelho em sua forma mais pura, mais combativa e mais libertadora.</p>
             <p>Neste estudo, exploraremos o contexto histórico, a estrutura teológica e as aplicações práticas desta epístola que continua sendo a principal defesa bíblica contra o legalismo, o misticismo e qualquer distorção do Evangelho da graça.</p>

             <hr />

             <h2>📜 I. Contexto Histórico: Quando o Evangelho Está em Jogo</h2>
             
             <h3>Autoria e Data</h3>
             <p>Paulo, o apóstolo dos gentios, escreve esta carta por volta de <strong>48-49 d.C.</strong> (alguns estudiosos defendem 55 d.C.), tornando-a possivelmente a <strong>mais antiga das epístolas paulinas</strong>. Isso é crucial: Gálatas foi escrita antes do Concílio de Jerusalém (Atos 15), quando a igreja ainda debatia se os gentios precisavam seguir a lei mosaica para serem salvos.</p>

             <h3>Destinatários: As Igrejas da Galácia</h3>
             <p>A "Galácia" pode referir-se a:</p>
             <ol>
               <li><strong>Teoria do Norte:</strong> Região étnica dos gálatas (celtas) no centro da Anatólia</li>
               <li><strong>Teoria do Sul:</strong> Cidades da província romana da Galácia (Antioquia da Pisídia, Icônio, Listra e Derbe)</li>
             </ol>
             <p>A evidência favorece a <strong>teoria do sul</strong>, pois Paulo menciona que os gálatas o conheceram durante sua <strong>primeira viagem missionária</strong> (Atos 13-14), e ele sofreu de uma "enfermidade na carne" (Gl 4:13) que o levou a pregar lá.</p>

             <h3>A Crise: Judaizantes e o "Outro Evangelho"</h3>
             <p>Após a partida de Paulo, chegaram à Galácia <strong>judaizantes</strong> — cristãos judeus que insistiam que os gentios convertidos deviam:</p>
             <ul>
               <li>Ser circuncidados (Gl 5:2-3)</li>
               <li>Guardar o sábado e as festas judaicas (Gl 4:10)</li>
               <li>Observar as leis dietéticas (Gl 2:11-14)</li>
               <li>Seguir a lei mosaica para serem plenamente salvos</li>
             </ul>
             <p>Esses falsos mestres não negavam Jesus, mas <strong>acrescentavam</strong> obras à fé. E isso era suficiente para Paulo declarar: <em>"Se alguém vos prega evangelho que vá além daquele que recebestes, seja anátema"</em> (Gl 1:9).</p>
             <p><strong>Nota teológica:</strong> O problema não era a obediência em si, mas a motivação. Os judaizantes tornavam a circuncisão <strong>necessária para a salvação</strong>, transformando a graça em dívida.</p>

             <hr />

             <h2>📖 II. Estrutura e Argumento Teológico</h2>
             <p>A carta divide-se em três movimentos principais:</p>

             <h3><strong>CAPÍTULOS 1-2: DEFESA PESSOAL — A Origem Divina do Evangelho</strong></h3>
             <p>Paulo começa de forma explosiva, sem ação de graças (ao contrário de suas outras cartas). Ele está indignado:</p>
             <blockquote>
               <p><em>"Admiro-me de que estejais passando tão depressa daquele que vos chamou no evangelho de Cristo para outro evangelho"</em> (Gl 1:6)</p>
             </blockquote>

             <h4>A Origem Apostólica de Paulo (1:11-24)</h4>
             <p>Paulo defende que seu evangelho:</p>
             <ul>
               <li><strong>Não é de origem humana</strong> (v.11)</li>
               <li><strong>Não lhe foi ensinado</strong> por ninguém (v.12)</li>
               <li><strong>Veio por revelação direta de Jesus Cristo</strong> (v.12)</li>
             </ul>
             <p>Ele relata sua conversão dramática e como, após três anos, subiu a Jerusalém apenas para conhecer Pedro (1:18). Isso prova que sua mensagem não foi "aprendida" com os apóstolos originais, mas recebida do próprio Cristo.</p>

             <h4>O Concílio de Jerusalém (2:1-10)</h4>
             <p>Paulo descreve a reunião onde os apóstolos reconheceram que:</p>
             <ul>
               <li>Pedro foi enviado aos <strong>judeus circuncidados</strong></li>
               <li>Paulo foi enviado aos <strong>gentios incircuncisos</strong> (2:7-8)</li>
               <li>Tiago, Pedro e João deram a Paulo e Barnabé a <strong>direita de comunhão</strong> (2:9)</li>
             </ul>
             <p>Isso é crucial: a liderança de Jerusalém <strong>validou</strong> o ministério de Paulo aos gentios <strong>sem exigir circuncisão</strong>.</p>

             <h4>O Confronto em Antioquia (2:11-14)</h4>
             <p>Paulo relata como resistiu a Pedro "face a face" porque ele, por medo dos judaizantes, deixou de comer com os gentios. A acusação de Paulo é severa:</p>
             <blockquote>
               <p><em>"Se tu, sendo judeu, vives como gentio e não como judeu, como obrigas os gentios a judaizar?"</em> (2:14)</p>
             </blockquote>
             <p><strong>Aplicação:</strong> Mesmo um apóstolo pode errar quando cede à pressão do legalismo. A verdade do Evangelho está acima de qualquer liderança humana.</p>

             <hr />

             <h3><strong>CAPÍTULOS 3-4: DEFESA DOUTRINÁRIA — Justificação pela Fé Somente</strong></h3>
             <p>Aqui Paulo entra no cerne teológico: <strong>como o pecador é justificado diante de Deus?</strong></p>

             <h4>A Experiência dos Gálatas (3:1-5)</h4>
             <p>Paulo apela para a experiência deles:</p>
             <blockquote>
               <p><em>"Quereis saber de uma coisa: foi pelas obras da lei que recebestes o Espírito ou pela pregação da fé?"</em> (3:2)</p>
             </blockquote>
             <p>A resposta é óbvia: eles receberam o Espírito <strong>pela fé</strong>, não pela lei. Por que, então, tentar aperfeiçoar pela carne o que começou no Espírito? (3:3)</p>
             <p><strong>Princípio:</strong> A salvação começa e termina pela fé. Acrescentar obras é negar a suficiência da cruz.</p>

             <h4>O Exemplo de Abraão (3:6-9)</h4>
             <p>Paulo cita Gênesis 15:6:</p>
             <blockquote>
               <p><em>"Abraão creu em Deus, e isso lhe foi imputado para justiça"</em> (3:6)</p>
             </blockquote>
             <p>Abraão foi justificado <strong>antes</strong> da circuncisão (que veio em Gênesis 17) e <strong>antes</strong> da lei (que veio 430 anos depois, conforme 3:17). Logo:</p>
             <ul>
               <li>A justificação é pela fé</li>
               <li>A lei não anula a promessa</li>
               <li>Os que são da fé são filhos de Abraão (3:7)</li>
             </ul>
             <p><strong>Nota reformada:</strong> Isso é o coração da doutrina da <strong>imputação da justiça de Cristo</strong>. Não somos justos por nossas obras, mas pela fé que recebe a justiça de Cristo.</p>

             <h4>A Maldição da Lei (3:10-14)</h4>
             <p>Paulo cita Deuteronômio 27:26:</p>
             <blockquote>
               <p><em>"Maldito todo aquele que não permanece em todas as coisas escritas no Livro da Lei, para praticá-las"</em> (3:10)</p>
             </blockquote>
             <p>O problema da lei é que ela exige <strong>perfeição absoluta</strong>. Quem falha em um ponto, torna-se culpado de todos (Tg 2:10). Cristo, porém, nos resgatou da maldição da lei, fazendo-se ele próprio maldição em nosso lugar (3:13), cumprindo Zacarias 3 e Isaías 53.</p>
             <p><strong>Substituição penal:</strong> Cristo tomou nossa maldição para nos dar sua bênção. Isso é Evangelho puro!</p>

             <h4>A Promessa e a Lei (3:15-25)</h4>
             <p>Paulo usa uma ilustração jurídica: um testamento (aliança) não pode ser anulado ou modificado após ratificado. A promessa feita a Abraão (e à sua "semente", singular — Cristo, v.16) não pode ser anulada pela lei que veio 430 anos depois.</p>
             <p><strong>Qual é, então, o propósito da lei?</strong> (3:19)</p>
             <ol>
               <li><strong>Revelar o pecado</strong> (3:19) — A lei é espelho que mostra nossa impureza</li>
               <li><strong>Conduzir a Cristo</strong> (3:24) — A lei é "pedagogo" (paidagogos) que nos leva ao Mestre</li>
               <li><strong>Aprisionar sob o pecado</strong> (3:22) — Para que a promessa fosse dada aos que creem</li>
             </ol>
             <p><strong>Aplicação pastoral:</strong> A lei tem função <strong>temporária</strong> e <strong>preparatória</strong>. Ela não salva; mostra nossa necessidade de salvação.</p>

             <h4>Filhos e Herdeiros (4:1-7)</h4>
             <p>Paulo compara a lei à tutela de um menor. Enquanto criança, o herdeiro não difere de um escravo, embora seja senhor de tudo. Assim também nós:</p>
             <blockquote>
               <p><em>"Quando, porém, chegou a plenitude do tempo, Deus enviou seu Filho, nascido de mulher, nascido sob a lei, para resgatar os que estavam sob a lei, a fim de que recebêssemos a adoção de filhos"</em> (4:4-5)</p>
             </blockquote>
             <p><strong>Cristologia:</strong> Jesus nasceu "sob a lei" para cumprir a lei em nosso lugar. Sua obediência perfeita é imputada a nós.</p>
             <p>E porque somos filhos, Deus enviou o Espírito de seu Filho aos nossos corações, que clama: <em>"Aba, Pai!"</em> (4:6). Não somos mais escravos, mas filhos e herdeiros (4:7).</p>

             <hr />

             <h3><strong>CAPÍTULOS 5-6: DEFESA PRÁTICA — A Liberdade que Serve pelo Amor</strong></h3>
             <p>A teologia sem aplicação é morta. Paulo agora mostra como a liberdade cristã se vive na prática.</p>

             <h4>A Liberdade Cristã (5:1-12)</h4>
             <blockquote>
               <p><em>"Foi para a liberdade que Cristo nos libertou. Portanto, permaneçam firmes e não se deixem submeter novamente a um jugo de escravidão"</em> (5:1)</p>
             </blockquote>
             <p><strong>Atenção:</strong> Paulo não diz "foi para a liberdade que vocês se libertaram". A liberdade é <strong>dom de Cristo</strong>, não conquista humana.</p>
             <p>Ele alerta:</p>
             <ul>
               <li>Se vocês se deixam circuncidar, <strong>Cristo de nada vos aproveitará</strong> (5:2)</li>
               <li>Todo homem que se deixa circuncidar está <strong>obrigado a guardar toda a lei</strong> (5:3)</li>
               <li>Separar-se de Cristo pela lei é <strong>cair da graça</strong> (5:4)</li>
             </ul>
             <p><strong>Nota importante:</strong> "Cair da graça" não significa perder a salvação, mas abandonar o princípio da justificação pela fé para tentar justificar-se pela lei.</p>
             <p>A verdadeira justiça vem do Espírito, pela fé, aguardando a esperança (5:5). Em Cristo, nem circuncisão nem incircuncisão têm valor, mas <strong>a fé que atua pelo amor</strong> (5:6).</p>

             <h4>Liberdade Não É Licenciosidade (5:13-15)</h4>
             <blockquote>
               <p><em>"Vós, porém, irmãos, fostes chamados à liberdade; porém não useis da liberdade por oportunidade da carne, mas servi-vos uns aos outros pelo amor"</em> (5:13)</p>
             </blockquote>
             <p>A liberdade cristã não é:</p>
             <ul>
               <li>Licença para pecar (licenciosidade)</li>
               <li>Individualismo ("cada um faz o que quer")</li>
               <li>Antinomianismo (rejeição da lei moral)</li>
             </ul>
             <p>A liberdade cristã é:</p>
             <ul>
               <li>Poder para obedecer</li>
               <li>Motivação pelo amor, não pelo medo</li>
               <li>Serviço mútuo, não egoísmo</li>
             </ul>
             <p><strong>Paradoxo cristão:</strong> Somos livres para servir. A verdadeira liberdade encontra sua expressão no amor ao próximo (5:14, citando Lv 19:18).</p>

             <h4>Carne versus Espírito (5:16-26)</h4>
             <p>Paulo apresenta a batalha interior do crente:</p>
             <blockquote>
               <p><em>"Digo, porém: Andai em Espírito e de maneira nenhuma satisfareis à concupiscência da carne"</em> (5:16)</p>
             </blockquote>
             <p><strong>A Carne (sarx):</strong> Não é o corpo físico, mas a natureza pecaminosa caída, que se opõe a Deus.</p>
             <p><strong>As Obras da Carne</strong> (5:19-21):</p>
             <ul>
               <li>Imoralidade sexual, impureza, libertinagem</li>
               <li>Idolatria, feitiçaria</li>
               <li>Ódios, discórdia, ciúmes, iras, egoísmo, dissensões, facções, invejas</li>
               <li>Embriaguez, orgias e coisas semelhantes</li>
             </ul>
             <p><strong>Alerta solene:</strong> <em>"Os que praticam essas coisas não herdarão o Reino de Deus"</em> (5:21). Isso não significa que crentes verdadeiros nunca pecam, mas que aqueles que <strong>vivem</strong> nessas práticas, sem arrependimento, demonstram não serem regenerados.</p>
             <p><strong>O Fruto do Espírito</strong> (5:22-23):</p>
             <ul>
               <li>Amor, alegria, paz</li>
               <li>Paciência, amabilidade, bondade</li>
               <li>Fidelidade, mansidão, domínio próprio</li>
             </ul>
             <p><strong>Nota:</strong> "Fruto" está no singular — é um fruto integrado, não dons separados. Todos os crentes devem manifestar <strong>todas</strong> essas qualidades.</p>
             <p><strong>Contra essas coisas não há lei</strong> (5:23). O Espírito produz o que a lei exigia mas não podia produzir.</p>

             <h4>Andai no Espírito (5:25-26)</h4>
             <blockquote>
               <p><em>"Se vivemos pelo Espírito, andemos também pelo Espírito"</em> (5:25)</p>
             </blockquote>
             <p>Viver "pelo Espírito" (posição) deve resultar em andar "pelo Espírito" (prática). A santificação é obra do Espírito, mas exige nossa cooperação ativa.</p>

             <h4>Restauração e Responsabilidade Mútua (6:1-10)</h4>
             <p>Paulo dá instruções práticas:</p>
             <ul>
               <li><strong>Restaurar</strong> o que foi surpreendido em pecado com espírito de mansidão (6:1)</li>
               <li><strong>Levar</strong> as cargas uns dos outros (6:2)</li>
               <li><strong>Examinar</strong> os próprios atos (6:4)</li>
               <li><strong>Semear</strong> para o Espírito, não para a carne (6:8)</li>
             </ul>
             <blockquote>
               <p><em>"Não vos enganeis: de Deus não se zomba; pois o que o homem semear, isso também ceifará"</em> (6:7)</p>
             </blockquote>
             <p><strong>Princípio da semeadura:</strong></p>
             <ul>
               <li>Semear na carne → ceifar corrupção (juízo)</li>
               <li>Semear no Espírito → ceifar vida eterna (6:8)</li>
             </ul>
             <p><strong>Perseverança:</strong> <em>"E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido"</em> (6:9).</p>

             <hr />

             <h2>📚 III. Temas Teológicos Centrais</h2>
             
             <h3>1. Justificação Somente Pela Fé (Sola Fide)</h3>
             <p>Este é o <strong>material principle</strong> da Reforma. Gálatas é a defesa mais clara de que:</p>
             <ul>
               <li>O pecador é declarado justo <strong>não por obras da lei</strong>, mas <strong>somente pela fé</strong> em Cristo</li>
               <li>A justiça de Cristo é <strong>imputada</strong> (creditada) ao crente, não infundida</li>
               <li>A fé é o <strong>instrumento</strong> que recebe Cristo, não uma obra meritória</li>
             </ul>
             <p>Lutero disse: <em>"A doutrina da justificação é o artigo pelo qual a igreja permanece ou cai."</em></p>

             <h3>2. A Suficiência da Obra de Cristo</h3>
             <p>Cristo:</p>
             <ul>
               <li>Cumpriu a lei perfeitamente</li>
               <li>Carregou nossa maldição na cruz</li>
               <li>Nos deu sua justiça</li>
               <li>Nos enviou o Espírito</li>
             </ul>
             <p><strong>Nada pode ser acrescentado.</strong> Qualquer "Jesus + algo" é outro evangelho.</p>

             <h3>3. A Natureza da Liberdade Cristã</h3>
             <p>Liberdade em Cristo é:</p>
             <ul>
               <li><strong>De</strong> — libertos da condenação da lei, do poder do pecado, da escravidão religiosa</li>
               <li><strong>Para</strong> — viver em amor, servir ao próximo, andar no Espírito</li>
             </ul>
             <p>Não é autonomia, mas <strong>teonomia</strong> (governo de Deus) internalizada pelo Espírito.</p>

             <h3>4. O Papel da Lei</h3>
             <p>A lei:</p>
             <ul>
               <li><strong>Não salva</strong> (3:11, 21)</li>
               <li><strong>Revela o pecado</strong> (3:19)</li>
               <li><strong>Conduz a Cristo</strong> (3:24)</li>
               <li><strong>É cumprida</strong> no amor (5:14)</li>
               <li><strong>É escrita no coração</strong> pelo Espírito ( Jr 31:33; Ez 36:27)</li>
             </ul>
             <p>O crente não está "sem lei" (anomia), mas "sob a lei de Cristo" (1Co 9:21) — a lei moral cumprida no amor pelo poder do Espírito.</p>

             <h3>5. A Vida no Espírito</h3>
             <p>A santificação é:</p>
             <ul>
               <li><strong>Obra do Espírito</strong> (3:3, 5:16-18)</li>
               <li><strong>Progressiva</strong> (fruto cresce)</li>
               <li><strong>Concreta</strong> (virtudes visíveis)</li>
               <li><strong>Comunitária</strong> (6:1-10)</li>
             </ul>
             <p>Não é misticismo passivo, mas cooperação ativa: <em>"Andai no Espírito"</em> (imperativo).</p>

             <hr />

             <h2>💡 IV. Aplicações Contemporâneas: Gálatas para o Século XXI</h2>

             <h3>1. Contra o Legalismo Religioso</h3>
             <p>O legalismo ainda vive:</p>
             <ul>
               <li>"Você precisa fazer X para ser mais santo"</li>
               <li>"Deus só vai te abençoar se..."</li>
               <li>"Verdadeiros cristãos não fazem Y"</li>
               <li>Regras humanas elevadas ao nível de mandamentos divinos</li>
             </ul>
             <p><strong>Resposta de Gálatas:</strong> Cristo já realizou tudo. Sua aceitação diante de Deus baseia-se <strong>somente</strong> na obra de Cristo, não em seu desempenho.</p>

             <h3>2. Contra o Antinomianismo</h3>
             <p>O oposto do legalismo é a licenciosidade:</p>
             <ul>
               <li>"Sou livre, posso fazer o que quiser"</li>
               <li>"Graça significa que o pecado não importa"</li>
               <li>"Não estou debaixo da lei, então..."</li>
             </ul>
             <p><strong>Resposta de Gálatas:</strong> A verdadeira fé produz obediência pelo amor. A liberdade é para servir, não para pecar.</p>

             <h3>3. Contra o "Evangelho" da Prosperidade</h3>
             <p>Os judaizantes prometiam: "Seja circuncidado e será pleno". Hoje: "Dizime e seja próspero", "Declare e receba", "Tenha fé e Deus te abençoará".</p>
             <p><strong>Resposta de Gálatas:</strong> O Evangelho não é sobre o que você ganha, mas sobre o que Cristo já fez. A bênção de Abraão é o Espírito (3:14), não riqueza material.</p>

             <h3>4. Para a Segurança da Salvação</h3>
             <p>Se sua salvação depende de você, você a perderá. Se depende de Cristo, está segura.</p>
             <p><strong>Consolo de Gálatas:</strong> <em>"Já não sou eu quem vive, mas Cristo vive em mim"</em> (2:20). Sua perseverança está fundamentada na fidelidade de Cristo, não na sua.</p>

             <h3>5. Para a Vida no Espírito</h3>
             <p>Como vencer o pecado? Não por regras, mas pelo Espírito.</p>
             <p><strong>Direção de Gálatas:</strong> <em>"Andai no Espírito"</em> (5:16). Encha-se do Espírito (Ef 5:18), ande no Espírito, seja guiado pelo Espírito (Rm 8:14).</p>

             <hr />

             <h2>🕊️ V. Conclusão: Permaneçam na Liberdade</h2>
             <p>Gálatas termina com um apelo apaixonado:</p>
             <blockquote>
               <p><em>"Longe esteja de mim gloriar-me, senão na cruz de nosso Senhor Jesus Cristo, pela qual o mundo foi crucificado para mim e eu, para o mundo"</em> (6:14)</p>
             </blockquote>
             <p>Paulo não se gloria em:</p>
             <ul>
               <li>Suas realizações apostólicas</li>
               <li>Sua linhagem judaica</li>
               <li>Suas revelações</li>
               <li>Seu sofrimento</li>
             </ul>
             <p>Ele se gloria <strong>somente na cruz</strong>. Porque na cruz:</p>
             <ul>
               <li>Seu velho eu morreu</li>
               <li>O mundo perdeu seu poder de atração</li>
               <li>Cristo tudo realizou</li>
             </ul>
             <p><strong>Irmãos, a mensagem final é:</strong></p>
             <ul>
               <li><strong>Não troque</strong> a liberdade pela escravidão</li>
               <li><strong>Não acrescente</strong> nada à obra de Cristo</li>
               <li><strong>Não despreze</strong> a graça que o custou tanto</li>
               <li><strong>Permaneça firme</strong> na liberdade de Cristo</li>
             </ul>
             <p>O Evangelho é simples: <strong>Cristo morreu pelos nossos pecados e ressuscitou para nossa justificação</strong>. Creia. Descanse. Viva. Sirva. Glorifique.</p>
             <p><em>"A graça de nosso Senhor Jesus Cristo seja com o vosso espírito, irmãos. Amém."</em> (Gálatas 6:18)</p>
             <p><strong>Soli Deo Gloria.</strong></p>

             <hr />

             <h2>📚 Guia de Estudo Prático</h2>
             
             <h3>Semana 1: O Evangelho da Graça (Capítulos 1-2)</h3>
             <p><strong>Leitura:</strong> Gálatas 1-2<br />
             <strong>Reflexão:</strong> Que "outros evangelhos" tentam me afastar da suficiência de Cristo?<br />
             <strong>Oração:</strong> "Senhor, guarda-me no Evangelho puro da tua graça."</p>

             <h3>Semana 2: Justificação pela Fé (Capítulo 3)</h3>
             <p><strong>Leitura:</strong> Gálatas 3<br />
             <strong>Reflexão:</strong> Em que áreas ainda tento me justificar por obras?<br />
             <strong>Oração:</strong> "Cristo, tua justiça me basta. Descanso em ti."</p>

             <h3>Semana 3: Filhos, Não Escravos (Capítulo 4)</h3>
             <p><strong>Leitura:</strong> Gálatas 4<br />
             <strong>Reflexão:</strong> Vivo como filho ou como escravo?<br />
             <strong>Oração:</strong> "Espírito Santo, ensina-me a clamar: Aba, Pai!"</p>

             <h3>Semana 4: Liberdade para Servir (Capítulo 5)</h3>
             <p><strong>Leitura:</strong> Gálatas 5:1-15<br />
             <strong>Reflexão:</strong> Como tenho usado minha liberdade cristã?<br />
             <strong>Oração:</strong> "Usa minha liberdade para servir em amor."</p>

             <h3>Semana 5: Andando no Espírito (Capítulo 5-6)</h3>
             <p><strong>Leitura:</strong> Gálatas 5:16 - 6:10<br />
             <strong>Reflexão:</strong> Onde vejo o fruto do Espírito em minha vida? Onde preciso crescer?<br />
             <strong>Oração:</strong> "Espírito, produz teu fruto em mim."</p>

             <h3>Semana 6: Gloriando-se na Cruz (Capítulo 6)</h3>
             <p><strong>Leitura:</strong> Gálatas 6:11-18<br />
             <strong>Reflexão:</strong> Em que me glorio?<br />
             <strong>Oração:</strong> "Longe de mim gloriar-me, senão na cruz de Cristo."</p>

             <hr />

             <h2>🔍 Perguntas para Discussão em Grupo</h2>
             <ol>
               <li>Qual é a diferença entre "outro evangelho" (1:6) e "distorção do Evangelho"?</li>
               <li>Como Paulo defende sua autoridade apostólica? Por que isso era importante?</li>
               <li>Explique a relação entre fé e obras na justificação.</li>
               <li>Qual é o propósito da lei segundo Gálatas 3?</li>
               <li>Como a adoção filial muda nossa relação com Deus?</li>
               <li>O que significa "cair da graça" (5:4)?</li>
               <li>Como distinguir liberdade cristã de licenciosidade?</li>
               <li>Quais são as evidências de que alguém está "andando no Espírito"?</li>
               <li>Como aplicar o princípio da semeadura e colheita (6:7-8)?</li>
               <li>Por que Paulo se gloria apenas na cruz (6:14)?</li>
             </ol>

             <hr />

             <p><strong>📖 Referências Bíblicas Chave:</strong> Gálatas 1-6 | Romanos 3-8 | Efésios 2 | Filipenses 3 | Tiago 2</p>
             
             <p><strong>📚 Leituras Recomendadas:</strong></p>
             <ul>
               <li><em>Comentário de Gálatas</em> — Martinho Lutero (clássico indispensável)</li>
               <li><em>Gálatas</em> — F.F. Bruce (excelente exegese)</li>
               <li><em>Gálatas</em> — John Stott (aplicação pastoral)</li>
               <li><em>A Doutrina da Justificação</em> — R.C. Sproul</li>
               <li><em>Sola Fide</em> — Various authors</li>
             </ul>
          </main>
        ) : isAna ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag red">Mulheres da Bíblia / Estudos Bíblicos</span>
               <h1>Ana: A Mãe que Orou, Chorou e Gerou um Profeta</h1>
               <p className="article-subtitle" style={{fontSize: '1.2rem', color: '#555', marginTop: '0.5rem'}}>Sua história nos ensina que Deus ouve o clamor dos humildes, que a oração persistente move o céu e que um filho dedicado a Deus pode transformar uma nação.</p>
               <div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 22 Jun, 2026</div>
             </div>
             
             <img src="/ana_orando.png" alt="Ana Orando no Tabernáculo" className="article-hero-img" loading="lazy" />
             
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0, fontStyle: 'italic'}}>"Então Eli respondeu: Vai em paz, e o Deus de Israel te conceda a petição que lhe fizeste." — 1 Samuel 1:17</p>
             </div>

             <p>Essas palavras, proferidas por um velho sacerdote no templo de Siló, marcariam o início de uma das histórias mais comoventes de fé, perseverança e milagre em toda a Bíblia. Ana não era uma rainha, nem uma guerreira, nem uma profetisa famosa. Era apenas uma mulher estéril, desprezada e angustiada. Mas foi exatamente em sua fraqueza que Deus manifestou Seu poder.</p>
             <p>Venha conosco conhecer a história completa de Ana — uma jornada de lágrimas que se transformaram em cânticos de alegria.</p>

             <hr />

             <h2>📖 Quem Foi Ana?</h2>
             <h3>O Significado do Nome</h3>
             <p>Ana (em hebraico: <em>Channah</em> — חַנָּה) significa "graça" ou "favor". Ironicamente, ela viveu anos sem experimentar o favor de ter filhos, embora carregasse esse nome profético.</p>

             <h3>Seu Contexto Familiar</h3>
             <p>Ana vivia por volta do século XI a.C. (aproximadamente 1100-1050 a.C.) em Ramataim-Zofim, na região montanhosa de Efraim, em Israel.</p>
             <p>Ela era esposa de Elcana, um levita da família dos coatitas (1 Crônicas 6:26-27). Os levitas eram a tribo separada para o serviço sagrado do Tabernáculo, e Elcana era um homem piedoso que fielmente subia ao santuário em Siló para adorar.</p>

             <h3>A Dor da Esterilidade</h3>
             <p>Ana enfrentava a maior vergonha social de sua época: a esterilidade. No antigo Israel, a capacidade de gerar filhos era vista como:</p>
             <ul>
               <li>Sinal da bênção de Deus</li>
               <li>Garantia de continuidade do nome da família</li>
               <li>Segurança para a velhice</li>
               <li>Prova de favor divino</li>
             </ul>
             <p>Não ter filhos era considerado maldição ou desfavor divino. Imagine o peso emocional e social que Ana carregava diariamente.</p>

             <hr />

             <h2>✍️ Quem Escreveu a História de Ana?</h2>
             <h3>Autoria de 1 Samuel</h3>
             <p>O livro de 1 Samuel, onde conhecemos a história de Ana, foi escrito por múltiplos autores:</p>
             <ul>
               <li><strong>Samuel</strong> — o próprio filho de Ana! Ele escreveu a maior parte (1 Samuel 1-24)</li>
               <li><strong>Natã</strong> — profeta da corte de Davi</li>
               <li><strong>Gade</strong> — outro profeta contemporâneo de Davi</li>
             </ul>
             <p><strong>Data:</strong> Aproximadamente 1050-930 a.C.<br />
             <strong>Contexto Histórico:</strong> Ana viveu durante o período dos Juízes, uma época turbulenta da história de Israel onde "cada um fazia o que achava mais reto" (Juízes 21:25). O sacerdócio estava corrompido (os filhos de Eli eram ímpios), e Israel precisava desesperadamente de um líder fiel.</p>

             <h3>Importância Histórica do Texto</h3>
             <p>O relato de Ana não é apenas uma história pessoal — é fundamental para entender a transição de Israel:</p>
             <ul>
               <li>Do período dos Juízes → à Monarquia</li>
               <li>De um sacerdócio corrupto → a um profeta fiel (Samuel)</li>
               <li>Da desordem → à organização do reino</li>
             </ul>
             <p>Sem Ana, não haveria Samuel. Sem Samuel, não haveria Davi como rei. Sem Davi, não haveria a linhagem messiânica. Ana é, portanto, um elo crucial na história da redenção que culminaria em Jesus Cristo!</p>

             <hr />

             <h2>💔 A Dor de Ana: Uma Casa Dividida</h2>
             <h3>A Poligamia de Elcana</h3>
             <p>Elcana tinha duas esposas:</p>
             <ul>
               <li><strong>Ana</strong> — estéril, mas amada</li>
               <li><strong>Penina</strong> — fértil, com muitos filhos e filhas</li>
             </ul>
             <p><em>"Tinha Elcana duas mulheres; o nome de uma era Ana, e o nome da outra, Penina. Penina tinha filhos, porém Ana não tinha."</em> (1 Samuel 1:2)</p>
             <p>A poligamia, embora permitida na cultura da época, nunca foi o plano original de Deus (Gênesis 2:24). E aqui vemos as consequências dolorosas.</p>

             <h3>A Crueldade de Penina</h3>
             <p>Penina não era apenas uma co-esposa; era uma perseguidora cruel:</p>
             <p><em>"E a sua rival a afligia excessivamente para a irritar, porquanto o SENHOR lhe havia fechado a madre."</em> (1 Samuel 1:6)</p>
             <p>A palavra hebraica para "afligia" (<em>ka'as</em>) significa provocar, irritar, atormentar. Penina fazia isso constantemente, intencionalmente e cruelmente (zombando da esterilidade de Ana).</p>

             <h3>O Amor de Elcana</h3>
             <p>Apesar da dor, Elcana amava Ana profundamente:</p>
             <p><em>"Porém a Ana amava; contudo, o SENHOR lhe havia fechado a madre."</em> (1 Samuel 1:5)</p>
             <p>Durante as ofertas anuais em Siló, Elcana dava a Ana porção dobrada — um gesto de amor e honra, tentando compensar sua dor.</p>

             <hr />

             <h2>🙏 A Oração que Rompeu o Céu</h2>
             <h3>O Dia que Mudou Tudo</h3>
             <p>Em um desses anos, após o sacrifício, Ana não suportou mais. Enquanto Elcana e Penina celebravam, Ana levantou-se e foi orar.</p>
             <p><em>"Ela, com amargura de alma, orou ao SENHOR e chorou abundantemente."</em> (1 Samuel 1:10)</p>
             <p>Note os detalhes: "Amargura de alma" (angústia profunda), "Orou ao SENHOR" (foi diretamente a Deus) e "Chorou abundantemente".</p>

             <h3>O Voto de Ana</h3>
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0, fontStyle: 'italic'}}>"E fez um voto, dizendo: SENHOR dos Exércitos, se benignamente atentares para a aflição da tua serva, e de mim te lembrares, e da tua serva te não esqueceres, e deres à tua serva um filho homem, ao SENHOR o darei todos os dias da sua vida, e sobre a sua cabeça não passará navalha." — 1 Samuel 1:11</p>
             </div>
             
             <p>Ana pediu um filho não para si mesma, mas para entregá-lo a Deus. Ela pediu que ele fosse consagrado como nazireu (semelhante a Sansão), separado totalmente para o Senhor.</p>

             <h3>A Oração Silenciosa e a Defesa de Ana</h3>
             <p>Enquanto orava, apenas os lábios de Ana se moviam; sua voz não era ouvida. Eli, o sacerdote, a teve por embriagada (1 Samuel 1:12-13).</p>
             <p>Quando repreendida, ela respondeu com respeito e firmeza: <em>"Não, senhor meu! Eu sou uma mulher atribulada de espírito... tenho derramado a minha alma perante o SENHOR."</em> (1 Samuel 1:15)</p>

             <hr />

             <h2>✨ A Resposta de Deus</h2>
             <h3>A Bênção de Eli</h3>
             <p><em>"Então Eli respondeu: Vai em paz, e o Deus de Israel te conceda a petição que lhe fizeste."</em> (1 Samuel 1:17)</p>
             
             <h3>A Transformação de Ana</h3>
             <p>Ainda sem engravidar, apenas com a bênção recebida, o semblante de Ana mudou. Ela comeu e não estava mais triste (1 Samuel 1:18). A fé na promessa já a havia transformado.</p>

             <h3>A Concepção</h3>
             <p>Voltando para casa, Elcana conheceu Ana, e <em>"o SENHOR se lembrou dela"</em>. Ana engravidou e deu à luz um filho, chamando-o de Samuel ("Pedido a Deus").</p>

             <hr />

             <h2>👶 O Cumprimento do Voto</h2>
             <p>Quando Samuel foi desmamado (cerca de 3 anos de idade), Ana cumpriu sua promessa, levando-o a Siló com ofertas generosas (1 Samuel 1:24).</p>
             <p>Neste momento, Ana entoou um dos mais belos cânticos da Bíblia (1 Samuel 2:1-10), exaltando a soberania de Deus, Seu poder de inverter situações humanas, e até profetizando sobre o Messias.</p>

             <hr />

             <h2>🌟 A Importância de Ana na História da Redenção</h2>
             <p>O filho de Ana, Samuel, tornou-se o último Juiz de Israel, o primeiro profeta de uma nova era, e foi quem ungiu o rei Davi (de cuja linhagem nasceria Jesus Cristo). Ana é parte crucial da genealogia espiritual do Messias!</p>

             <hr />

             <h2>💭 Reflexões Práticas para Nossa Vida</h2>
             <div style={{background: '#e8f4f8', border: '1px solid #b3d4e0', padding: '20px', margin: '30px 0', borderRadius: '8px'}}>
               <h3 style={{marginTop: 0, color: '#005580'}}>🎯 Para Quem Está Esperando</h3>
               <p>Talvez você esteja esperando por um milagre ou resposta. Ana te ensina:</p>
               <ul>
                 <li>Continue orando — Deus ouve</li>
                 <li>Continue crendo — Deus age no Seu tempo</li>
                 <li>Continue adorando — mesmo antes da resposta</li>
                 <li>Continue dedicando — entregue seu pedido a Deus</li>
               </ul>
             </div>

             <div className="article-tags" style={{marginTop: '2rem'}}>
                <span className="cat-tag" style={{marginRight: '10px'}}>#AnaESamuel</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#MulheresDaBiblia</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#FeEPoder</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#OracaoRespondida</span>
             </div>
          </main>
        ) : isEster ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag red">História Bíblica / Mulheres da Bíblia</span>
               <h1>Ester: A Rainha que Salvou um Povo e o Deus que Age nas Sombras</h1>
               <p className="article-subtitle" style={{fontSize: '1.2rem', color: '#555', marginTop: '0.5rem'}}>Uma jornada que ecoa através dos séculos e nos ensina como Deus age quando tudo parece perdido.</p>
               <div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 23 Jun, 2026</div>
             </div>
             
             <img src="/ester_rainha.png" alt="Rainha Ester" className="article-hero-img" loading="lazy" />
             
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0, fontStyle: 'italic'}}>"Porque, se de todo te calares agora, de outra parte se levantarão socorro e livramento para os judeus, mas tu e a casa de teu pai perecereis; e quem sabe se para tal tempo como este chegaste a este reino?" — Ester 4:14</p>
             </div>

             <p>Há histórias na Bíblia que não mencionam o nome de Deus uma única vez, mas onde Sua mão é tão visível que cada página respira providência. O livro de Ester é exatamente assim. Não há milagres partindo o mar, nem vozes trovejantes do céu, nem pragas sobrenaturais. Há apenas um decreto real, um jejum silencioso, uma rainha que arrisca a vida e um povo à beira do extermínio. E, no entanto, é nessa aparente ausência que Deus age com precisão cirúrgica para preservar o Seu povo.</p>
             <p>Ester não é apenas uma história de coragem feminina. É o relato de como Deus sustenta Sua aliança com Israel mesmo quando eles estão dispersos, vulneráveis e esquecidos pelos homens. É a prova de que nenhum decreto humano pode anular o propósito divino. É a narrativa de um povo que aprendeu, na dor e no jejum, que a sobrevivência não vem de exércitos ou palácios, mas da fidelidade do Deus que prometeu: <em>"Não te deixarei, nem te desampararei."</em> (Hebreus 13:5)</p>
             <p>Venha conosco mergulhar na história de Ester, com foco especial no povo judeu, sua identidade, sua crise e sua preservação sobrenatural. Uma jornada que ecoa através dos séculos e nos ensina como Deus age quando tudo parece perdido.</p>

             <hr />

             <h2>🌍 1. O Povo Judeu na Diáspora Persa: Entre a Sobrevivência e a Assimilação</h2>
             <h3>O Contexto Histórico</h3>
             <p>Após o exílio babilônico (586–539 a.C.), o rei Ciro da Pérsia permitiu que os judeus retornassem a Jerusalém para reconstruir o Templo (Esdras 1:1-4). No entanto, a maioria não voltou. Muitos já haviam se estabelecido na Mesopotâmia, Pérsia e Egito. Geraram raízes, negócios e famílias. Viviam como minoria étnico-religiosa em um império vasto e multicultural.</p>
             <p>No reinado de Assuero (Xerxes I, 486–465 a.C.), o Império Persa estendia-se da Índia à Etiópia (Ester 1:1). Os judeus estavam espalhados por 127 províncias. Não tinham território próprio, nem exército, nem autonomia política. Sua proteção dependia da boa vontade do rei e da lealdade das autoridades locais.</p>

             <h3>A Identidade em Terra Estranha</h3>
             <p>Apesar da dispersão, o povo judeu manteve marcos inegociáveis da aliança:</p>
             <ul>
               <li>Circuncisão (sinal da aliança com Abraão)</li>
               <li>Sábado (descanso sagrado, mesmo sob pressão laboral)</li>
               <li>Leis alimentares (kashrut, distinção cultural e espiritual)</li>
               <li>Torá e sinagogas (ensino, oração e comunidade)</li>
               <li>Festas (Páscoa, Pentecostes, Tabernáculos)</li>
             </ul>
             <p>Essas práticas os tornavam visíveis e vulneráveis. Em um império que valorizava a homogeneidade cultural, ser judeu era ser diferente. E diferença, em tempos de crise, facilmente se tornava alvo.</p>

             <h3>A Teologia da Dispersão</h3>
             <p>O exílio e a diáspora não foram acidentes históricos. Foram disciplina e preservação. Deus usou a dispersão para: cumprir profecias (Jeremias 29:10-14), espalhar o conhecimento do Deus verdadeiro entre as nações e preparar o cenário para a vinda do Messias em "plenitude dos tempos" (Gálatas 4:4).</p>
             <p>O povo judeu em Susã não era um acidente. Era semente plantada em solo hostil, mas regada pela promessa divina.</p>

             <hr />

             <h2>⚔️ 2. A Ameaça Existencial: O Decreto de Hamã e o Perigo do Extermínio</h2>
             <h3>A Ascensão de Hamã</h3>
             <p>Hamã, o agagita (descendente de Agague, rei amalequita), foi elevado por Assuero a posição de primeiro-ministro (Ester 3:1). Os amalequitas eram inimigos históricos de Israel (Êxodo 17:8-16), e Deus havia jurado guerra contra eles de geração em geração. A ironia providencial é clara: o inimigo ancestral agora detinha o poder de decretar o fim do povo da aliança.</p>

             <h3>A Recusa de Mardoqueu</h3>
             <p>Mardoqueu, judeu da tribo de Benjamim, recusou-se a prostrar-se diante de Hamã. Não por orgulho, mas por fidelidade covenantal. Os judeus adoravam somente a Yahweh. Inclinar-se a um homem como se fosse divino era idolatria. Hamã, furioso, não buscou vingança apenas contra Mardoqueu, mas contra todo o seu povo (Ester 3:6).</p>

             <h3>O Decreto de Extermínio</h3>
             <p>Hamã convenceu o rei com argumentos econômicos e xenófobos:</p>
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0, fontStyle: 'italic'}}>"Existe um povo espalhado e dividido entre os povos de todas as províncias do teu reino; suas leis são diferentes das de todos os outros povos, e não cumprem as leis do rei; por isso, não convém ao rei deixá-los viver." — Ester 3:8</p>
             </div>
             <p>O decreto foi selado com o anel real, escrito em todas as línguas do império, e enviado por correios velozes. A data marcada: 13 de Adar. O plano: matar, destruir e exterminar todos os judeus, jovens e velhos, crianças e mulheres, num só dia, e saquear seus bens (Ester 3:13).</p>
             <p>Note: Não havia exército judeu. Não havia embaixada. Não havia recurso legal. Apenas um povo marcado para a morte, um rei que não sabia da identidade de sua rainha, e um céu que parecia em silêncio.</p>

             <hr />

             <h2>👑 3. A Identidade de Ester: Escondida, Mas Não Apagada</h2>
             <h3>Hadassa → Ester: O Nome que Esconde e Revela</h3>
             <p>Ester era judia, da tribo de Benjamim, sobrinha de Mardoqueu. Órfã, foi adotada e criada por ele. Seu nome hebraico era Hadassa ("murta", símbolo de beleza e resiliência). No palácio, ficou conhecida como Ester (possivelmente do persa <em>star</em>, "estrela", ou do hebraico <em>hester</em>, "escondido").</p>
             <p>Deus a colocou no palácio não por acaso, mas por soberana providência. Sua beleza abriu portas, mas sua identidade judaica foi mantida em sigilo por orientação de Mardoqueu (Ester 2:10). Por quê? Para protegê-la, sim, mas também para que o momento da revelação fosse estratégico, não acidental.</p>

             <h3>O Chamado de Mardoqueu</h3>
             <p>Quando o decreto chegou, Mardoqueu rasgou as vestes, cobriu-se de cinzas e clamou. Ester enviou roupas, mas ele as recusou. Enviou Hataque, e a mensagem foi clara: <em>"Quem sabe se não foi para um tempo como este que chegaste a este reino?"</em> (Ester 4:14)</p>
             <p>Ester estava diante de um dilema:</p>
             <ul>
               <li><strong>Silêncio:</strong> Manter a segurança, o trono, a vida.</li>
               <li><strong>Fala:</strong> Arriscar a morte, revelar a identidade, interceder pelo povo.</li>
             </ul>
             <p>A resposta dela é um dos maiores atos de fé do Antigo Testamento:</p>
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0, fontStyle: 'italic'}}>"Vai, ajunta a todos os judeus que se acharem em Susã, e jejuai por mim... Eu e as minhas servas também jejuaremos assim. Depois irei ter com o rei, ainda que não seja segundo a lei; e, se perecer, pereci." — Ester 4:16</p>
             </div>
             <p>"Se perecer, pereci." Não é resignação. É consagração. Ester entrega a vida ao propósito maior: a sobrevivência do povo de Deus.</p>

             <hr />

             <h2>🕊️ 4. O Clamor e a Virada Divina: Quando o Céu Responde ao Jejum</h2>
             <h3>O Jejum de Três Dias</h3>
             <p>Ester não age por impulso. Ela convoca jejum comunitário. Na teologia judaica, o jejum não é apenas abstinência; é humilhação diante de Deus, arrependimento e intercessão urgente. O povo jejua. A rainha jejua. As servas jejuam. O céu é movido não por estratégias humanas, mas por dependência radical.</p>

             <h3>A Abordagem ao Rei</h3>
             <p>Ester veste trajes reais, entra no pátio interno e o rei estende o cetro de ouro. Ela é poupada da morte. Mas não pede imediatamente. Marca dois banquetes. Por quê?</p>
             <ul>
               <li>Para ganhar confiança</li>
               <li>Para isolar Hamã</li>
               <li>Para criar o momento exato da revelação</li>
             </ul>
             <p>Na segunda noite, quando o rei pergunta: "Qual é a tua petição, rainha Ester?", ela revela:</p>
             <p><em>"Porque fomos vendidos, eu e o meu povo, para sermos destruídos, mortos e exterminados... Pois eu e o meu povo não valíamos tanto, ó rei, a ponto de o perturbar."</em> (Ester 7:3-4)</p>
             <p>O rei pergunta: "Quem é, e onde está, quem ousou fazer tal coisa?"</p>
             <p>Ester responde: <strong>"O adversário e inimigo é este perverso Hamã."</strong> (v.6)</p>

             <h3>A Queda do Inimigo e a Preservação do Povo</h3>
             <p>A ira do rei acende-se. Hamã é enforcado na mesma forca que preparara para Mardoqueu. O anel real é dado a Mardoqueu. Um novo decreto é emitido: os judeus têm permissão para se defender no dia marcado. O medo se inverte. Os inimigos são derrotados. O povo é salvo.</p>
             <p>Note a providência: O rei não dorme na noite crucial (Ester 6:1); as crônicas reais são lidas (Ester 6:2); Mardoqueu é honrado no momento exato (Ester 6:10-11); Hamã cai pela própria armadilha. O nome de Deus não aparece, mas Sua mão está em cada detalhe.</p>

             <hr />

             <h2>📜 5. A Preservação do Povo e o Legado de Purim</h2>
             <h3>A Instituição de Purim</h3>
             <p>Mardoqueu e Ester estabelecem a festa de Purim (de <em>pur</em>, "sorte", referindo-se aos dados lançados por Hamã). É celebrada nos dias 14 e 15 de Adar, com leitura do rolo de Ester (Megillah), banquetes e alegria, presentes aos amigos e esmolas aos pobres.</p>
             <p>Purim não é apenas memória; é proclamação anual: <strong>"Deus preservou Seu povo. A aliança permanece. O inimigo foi frustrado."</strong></p>

             <h3>Importância Histórica e Teológica</h3>
             <p>Sem a intervenção em Ester:</p>
             <ul>
               <li>O remanescente judaico na Pérsia teria sido exterminado.</li>
               <li>A comunidade pós-exílio teria enfraquecido drasticamente.</li>
               <li>A reconstrução do Templo e a preservação das Escrituras teriam sido comprometidas.</li>
               <li>A linhagem messiânica (Mateus 1:1-17) teria sido ameaçada.</li>
             </ul>
             <p>Deus preservou o povo para preservar a promessa. A vinda de Cristo dependia da sobrevivência física e espiritual de Israel. Ester é, portanto, elo crucial na história da redenção.</p>

             <h3>O Silêncio de Deus e a Sua Fidelidade</h3>
             <p>O livro de Ester é único no cânon: Yahweh não é nomeado. Isso não é descuido; é ensino. Deus age nos bastidores, nas coincidências providenciais, nas decisões humanas, no jejum e na coragem, na inversão de destinos.</p>
             <p>Isaías 45:15 ecoa aqui: <em>"Verdadeiramente, tu és o Deus que se esconde, o Deus de Israel, o Salvador."</em></p>

             <hr />

             <h2>💡 6. O Que o Povo de Ester Ensina à Igreja Hoje</h2>
             <div style={{background: '#e8f4f8', border: '1px solid #b3d4e0', padding: '20px', margin: '30px 0', borderRadius: '8px'}}>
               <ol style={{marginBottom: 0}}>
                 <li><strong>Deus Preserva Sua Aliança Mesmo na Dispersão:</strong> O povo não tinha templo, terra ou rei. Mas tinha a promessa.</li>
                 <li><strong>Identidade Não Se Negocia por Segurança:</strong> Ester revelou quem era quando o chamado exigiu. A igreja não deve silenciar o Evangelho por conveniência cultural.</li>
                 <li><strong>O Jejum e a Oração Movem o Céu:</strong> A arma da igreja não é política ou força, mas intercessão persistente.</li>
                 <li><strong>"Para um Tempo Como Este":</strong> Sua posição onde você está não é acidente; é chamado.</li>
                 <li><strong>A Providência Trabalha no Silêncio:</strong> Quando Deus parece ausente, Ele está tecendo.</li>
               </ol>
             </div>

             <h2>🕊️ Conclusão: O Povo que Sobreviveu, o Deus que Permanece</h2>
             <p>A história de Ester não é sobre uma rainha heroica. É sobre um povo preservado por um Deus fiel. É sobre identidade que não se vende, fé que não se cala, e providência que não falha.</p>
             <p>Que a igreja olhe para Ester e veja não apenas história, mas espelho. Que aprenda a jejuar quando o decreto parecer final. Que aprenda a falar quando o silêncio for mais seguro. Que aprenda a confiar quando o nome de Deus não for mencionado, mas Sua mão estiver em tudo.</p>
             <p>O povo foi salvo. A aliança permanece. O Deus de Ester é o Deus da igreja. E Ele ainda age "para um tempo como este".</p>
             
             <p><em>Soli Deo Gloria.</em> 👑</p>

             <div className="article-tags" style={{marginTop: '2rem'}}>
                <span className="cat-tag" style={{marginRight: '10px'}}>#RainhaEster</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#MulheresDaBiblia</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#ProvidenciaDivina</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#FeEPoder</span>
             </div>
          </main>
        ) : isDavi ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag red">História Bíblica / Liderança</span>
               <h1>O Pastor que Conquistou um Trono: A Jornada de Davi, do Curral de Belém ao Palácio de Jerusalém</h1>
               <p className="article-subtitle" style={{fontSize: '1.2rem', color: '#555', marginTop: '0.5rem'}}>A história não é um conto de fadas; é um testemunho vivo de como Deus escolhe, prepara e exalta aqueles que confiam nEle em meio à obscuridade.</p>
               <div className="article-meta">Por <strong>Equipe Soli Deo Gloria</strong> | 23 Jun, 2026</div>
             </div>
             
             <img src="/davi_pastor.png" alt="Davi o Jovem Pastor" className="article-hero-img" loading="lazy" />
             
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0, fontStyle: 'italic'}}>"Porém o SENHOR disse a Samuel: Não atentes para a sua aparência, nem para a grandeza da sua estatura, porque eu o rejeitei; porque o SENHOR não vê como vê o homem. O homem vê o exterior, porém o SENHOR, o coração." — 1 Samuel 16:7</p>
             </div>

             <p>Há nomes que ecoam através dos séculos não apenas por conquistas militares ou coroas de ouro, mas porque carregam em si o peso de um chamado divino. Davi é um desses nomes. Antes de ser rei, salmista ou guerreiro lendário, ele era apenas um jovem pastor nas colinas de Belém. Sua história não é um conto de fadas; é um testemunho vivo de como Deus escolhe, prepara e exalta aqueles que confiam nEle em meio à obscuridade.</p>
             <p>Neste artigo, vamos caminhar passo a passo pela jornada de Davi: desde suas origens humildes, passando pelo encontro transformador com o profeta Samuel, a batalha épica contra Golias, os anos de fugitivo e as primeiras campanhas militares, até o momento glorioso de sua coroação como rei de todo o Israel.</p>
             <p>Prepare-se para uma narrativa rica em detalhes históricos, teológicos e espirituais. A jornada de Davi é, acima de tudo, a jornada de um homem que aprendeu a depender de Deus antes de depender de uma espada.</p>

             <hr />

             <h2>🌾 1. Origens em Belém: O Menino Esquecido da Família de Jessé</h2>
             <h3>O Berço da Linhagem Real</h3>
             <p>Davi nasceu por volta de 1040 a.C. em Belém de Judá, uma pequena cidade agrícola situada a cerca de 8 km ao sul de Jerusalém. Na época, Israel vivia o conturbado período dos Juízes, transitando para a monarquia com o rei Saul. Belém, embora modesta, carregava um peso profético: séculos antes, a moabita Rute havia se casado com Boaz ali, dando à luz Obede, pai de Jessé, pai de Davi (Rute 4:17-22). Assim, Davi já carregava em seu sangue a semente da redenção que um dia culminaria no Messias.</p>

             <h3>A Família de Jessé</h3>
             <p>Jessé era um homem respeitado em Belém, pertencente à tribo de Judá e à linhagem de Perez. Tinha oito filhos. Davi era o mais novo (1 Samuel 16:10-11). Na cultura patriarcal da época, o filho mais novo raramente era considerado para liderança ou honra pública. Enquanto seus irmãos mais velhos seguiam o pai nas colheitas ou serviam no exército de Saul, Davi ficou encarregado das ovelhas.</p>

             <h3>A Escola do Pastoreio</h3>
             <p>Ser pastor em Judá não era um passatempo; era uma escola de caráter. As colinas de Belém eram infestadas de predadores. Davi mesmo relata mais tarde:</p>
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0, fontStyle: 'italic'}}>"Teu servo feriu tanto o leão como o urso... O SENHOR, que me livrou das garras do leão e das garras do urso, me livrará da mão deste filisteu." — 1 Samuel 17:36-37</p>
             </div>
             
             <p>Nesses anos de solidão, Davi desenvolveu:</p>
             <ul>
               <li><strong>Coragem prática:</strong> Enfrentar feras com apenas um cajado e uma funda.</li>
               <li><strong>Dependência espiritual:</strong> Aprender a clamar a Deus no perigo.</li>
               <li><strong>Sensibilidade artística:</strong> Tocava harpa e compunha cânticos (1 Samuel 16:18).</li>
               <li><strong>Liderança silenciosa:</strong> Cuidar de seres vulneráveis com paciência e vigilância.</li>
             </ul>
             <p>O nome Davi (em hebraico: <em>Dod</em> ou <em>David</em>) significa "Amado" ou "Tio/Paterno". Ironia divina: o menino "amado" por Deus começaria sua vida sendo o menos considerado pelos homens.</p>

             <hr />

             <h2>🕊️ 2. O Encontro com Samuel: A Unção que Mudou a História</h2>
             <h3>O Chamado do Profeta</h3>
             <p>Deus rejeitara Saul como rei devido à sua desobediência (1 Samuel 15). Então ordenou ao profeta Samuel:</p>
             <p><em>"Enche o teu chifre de azeite e vem; enviar-te-ei a Jessé, o belemita; porque dentre os seus filhos me tenho provido de rei."</em> (1 Samuel 16:1)</p>
             <p>Samuel, temendo a ira de Saul, foi a Belém sob o pretexto de um sacrifício. Jessé e os anciãos da cidade tremeram ao ver o profeta. Tudo parecia um ritual sagrado comum. Mas Deus tinha outros planos.</p>

             <h3>O Desfile dos Irmãos</h3>
             <p>Jessé chamou seus filhos. Samuel viu Eliabe, o mais velho: alto, forte, de aparência nobre. Pensou: "Certamente é este o ungido do SENHOR." Mas Deus interrompeu: <em>"Não atentes para a sua aparência... porque eu o rejeitei."</em> (v.7)</p>
             <p>Abinadab passou. Shama passou. Sete filhos de Jessé passaram diante de Samuel. Nenhum foi escolhido. A tensão no ar era palpável. Samuel, confuso, perguntou: "Acabaram-se os teus filhos?" Jessé respondeu: "Ainda falta o menor, que está apascentando as ovelhas."</p>

             <h3>A Chegada do Pastor</h3>
             <p>Mandaram chamar Davi. Quando entrou, a Bíblia o descreve como: <em>"Ruivo, formoso de semblante e de boa aparência."</em> (1 Samuel 16:12)</p>
             <p>Samuel tomou o chifre de azeite e ungiu Davi no meio de seus irmãos. O texto registra algo sobrenatural: <em>"Desde aquele dia em diante, o Espírito do SENHOR se apossou de Davi."</em> (v.13)</p>

             <h3>O Segredo da Unção</h3>
             <p>Note o que aconteceu depois: Samuel voltou para Ramá. Davi voltou para as ovelhas. Não houve coroação, não houve exército, não houve anúncio público. Apenas um jovem pastor, com azeite na cabeça e o Espírito no coração, continuou alimentando o rebanho.</p>
             <p><strong>Deus não nos prepara para o palco; Ele nos prepara no curral.</strong> A unção não é um atalho para a fama; é um chamado para a fidelidade no escondido. Davi passou anos escrevendo Salmos, enfrentando feras, aprendendo a confiar em Deus antes de enfrentar exércitos.</p>

             <hr />

             <h2>🎵 3. A Ponte para o Palácio: O Músico que Acalmava um Rei</h2>
             <p>Saul, atormentado por um espírito maligno, buscava alívio. Seus servos sugeriram: <em>"Busque-se, pois, um homem que saiba tocar harpa... para que toque com a mão, e te acharás melhor."</em> (1 Samuel 16:16)</p>
             <p>Recomendaram Davi. Jessé enviou pão, vinho, um cabrito e o próprio filho. Davi entrou no palácio, tocou, e Saul "sentiu alívio, e se achou melhor" (v.23). Davi tornou-se seu escudeiro e músico da corte.</p>
             <p>Aqui vemos a providência divina: o pastor de Belém agora caminhava nos corredores de Gibeá, observando a guerra, aprendendo estratégia militar, entendendo a política de Israel, tudo enquanto servia com humildade. Deus estava treinando seu futuro rei nas sombras da rejeição de outro.</p>

             <hr />

             <h2>⚔️ 4. O Vale de Elah: Quando a Fé Derruba um Gigante</h2>
             <h3>O Cenário da Guerra</h3>
             <p>Os filisteus, povo do mar tecnologicamente avançado (dominavam o ferro), acamparam em Socó, no vale de Elah. Os israelitas, sob Saul, posicionaram-se no monte oposto. Entre os dois exércitos, um vale estreito separava as linhas.</p>
             <p>Todos os dias, durante 40 dias, um campeão filisteu saía e desafiava Israel: <em>"Escolhei dentre vós um homem que desça e peleje comigo. Se ele puder pelejar comigo e me matar, seremos vossos servos; porém, se eu o matar, sereis vossos servos."</em> (1 Samuel 17:8-9)</p>

             <h3>Golias de Gate</h3>
             <p>A descrição é intencionalmente aterradora: Altura de quase 3 metros, armadura de bronze pesando 57 kg, ponta de lança de 7 kg, escudeiro à frente, voz trovejante. O exército de Israel tremeu e teve grande medo (v.11). Saul escondia-se na tenda. A fé nacional estava paralisada.</p>

             <h3>A Chegada de Davi</h3>
             <p>Davi, com cerca de 15 a 17 anos, foi enviado por Jessé com suprimentos. Ouviu o desafio e reagiu com indignação santa: <em>"Quem é este filisteu incircunciso, para afrontar os exércitos do Deus vivo?"</em> (v.26)</p>

             <h3>O Confronto</h3>
             <p>Davi se ofereceu para lutar. Saul consentiu e ofereceu sua armadura. Davi recusou: <em>"Não posso andar com isto, pois nunca o usei."</em> Princípio eterno: Não use a armadura de outro na sua batalha. Deus te chamou para lutar com o que Ele já te deu.</p>
             <p>Davi pegou seu cajado, funda e cinco pedras lisas. Golias zombou. Davi respondeu com uma das declarações mais poderosas da Bíblia:</p>
             
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0, fontStyle: 'italic'}}>"Tu vens a mim com espada, e com lança, e com escudo; mas eu vou a ti em nome do SENHOR dos Exércitos, o Deus dos exércitos de Israel, a quem tens afrontado. Hoje mesmo o SENHOR te entregará na minha mão... para que toda esta terra saiba que há Deus em Israel." — 1 Samuel 17:45-46</p>
             </div>

             <p>Davi correu, atirou a pedra, que penetrou na testa de Golias. O gigante caiu, Davi o decapitou com a própria espada do inimigo, e Israel teve grande vitória.</p>

             <hr />

             <h2>👑 5. Da Glória ao Exílio: As Primeiras Campanhas e a Fuga</h2>
             <p>Após a vitória, as mulheres cantavam: <em>"Saul feriu os seus milhares, porém Davi os seus dez milhares."</em> (1 Samuel 18:7)</p>
             <p>Saul, inseguro, viu Davi como ameaça e tentou matá-lo. Davi fugiu, tornando-se genro de Saul ao casar-se com Mical. Jônatas, filho de Saul, fez uma aliança de amizade profunda com Davi.</p>
             <p>Davi passou anos como fugitivo, liderando um grupo de homens marginalizados, protegendo cidades de Israel (como Queila) e poupando a vida de Saul duas vezes, demonstrando que esperaria o tempo de Deus para assumir o trono.</p>

             <hr />

             <h2>🕊️ 6. A Coroação: Do Luto ao Trono de Jerusalém</h2>
             <p>Saul e Jônatas caíram no monte Gilboa. Davi lamentou profundamente a morte de ambos (2 Samuel 1). Ele não celebrou a queda do inimigo; honrou o ungido do Senhor.</p>
             <p>Davi reinou em Hebrom sobre Judá por 7 anos e meio. Após a morte de Is-Bosete, todas as tribos de Israel vieram coroá-lo rei sobre toda a nação. Ele tinha 30 anos (2 Samuel 5).</p>
             <p>Davi conquistou Jerusalém (Sião), tornando-a a capital, e trouxe a Arca da Aliança. Deus estabeleceu o pacto davídico, prometendo um trono eterno para sua linhagem.</p>

             <hr />

             <h2>💡 Reflexões: O Legado de Davi para Hoje</h2>
             <div style={{background: '#e8f4f8', border: '1px solid #b3d4e0', padding: '20px', margin: '30px 0', borderRadius: '8px'}}>
               <ul style={{marginBottom: 0}}>
                 <li><strong>Deus vê o coração, não o currículo.</strong> Davi era o último da fila, mas o primeiro no coração de Deus.</li>
                 <li><strong>A preparação antecede a promoção.</strong> Anos de pastoreio, música, fuga e batalhas forjaram um rei sábio.</li>
                 <li><strong>A fé não nega o gigante; confia no Deus que o esmaga.</strong> Davi não subestimou Golias; superestimou Deus.</li>
                 <li><strong>Paciência na espera é adoração.</strong> Davi podia tomar o trono à força, mas esperou 15 anos.</li>
                 <li><strong>Liderança é serviço, não domínio.</strong> Davi chorou por Saul, poupou inimigos, governou com justiça.</li>
               </ul>
             </div>
             
             <p>Davi não era perfeito. Cometeu adultério, assassinato e falhou como pai. Mas quando confrontado, arrependeu-se profundamente (Salmo 51). E desse coração ferido e restaurado, nasceu a linhagem que traria Jesus, o Filho de Davi, o Rei dos Reis (Mateus 1:1; Apocalipse 22:16).</p>
             
             <p><em>Soli Deo Gloria.</em> 👑</p>

             <div className="article-tags" style={{marginTop: '2rem'}}>
                <span className="cat-tag" style={{marginRight: '10px'}}>#ReiDavi</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#HomensDaBiblia</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#FeELideranca</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#SoliDeoGloria</span>
             </div>
          </main>
        ) : isCincoSolas ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag red">História Bíblica / Teologia</span>
               <h1>As Cinco Solas e Sua Relevância Hoje: Os Pilares da Reforma que Ainda Transformam Vidas</h1>
               <p className="article-subtitle" style={{fontSize: '1.2rem', color: '#555', marginTop: '0.5rem'}}>Descubra os cinco princípios fundamentais da Reforma Protestante e como eles continuam essenciais para a fé cristã no século XXI</p>
               <div className="article-meta">Por <strong>João Calvino</strong> | 26 Dez, 2025</div>
             </div>
             
             <img src="/cinco_solas.png" alt="As Cinco Solas da Reforma" className="article-hero-img" loading="lazy" />
             
             <p>Em 1517, Martinho Lutero deu início à Reforma Protestante ao pregar suas 95 teses na porta da igreja do castelo de Wittenberg. Mais do que um protesto contra abusos clericais, a Reforma foi um retorno às raízes do Evangelho. Desse movimento histórico surgiram cinco princípios fundamentais que moldaram a teologia cristã: as <strong>Cinco Solas</strong>.</p>
             <p>A palavra latina "Sola" significa "somente". Elas não eram apenas chavões teológicos, mas declarações vitais que diferenciavam o verdadeiro evangelho das adições humanas. Mas será que elas ainda importam hoje? A resposta é um retumbante <em>sim</em>.</p>

             <hr />

             <h2>📜 1. Sola Scriptura (Somente a Escritura)</h2>
             <p>O princípio material da Reforma afirma que a Bíblia é a única regra infalível de fé e prática para o cristão e para a Igreja.</p>
             
             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0}}><em>"Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redarguir, para corrigir, para instruir em justiça."</em> — 2 Timóteo 3:16</p>
             </div>

             <h3>A Relevância Hoje</h3>
             <ul>
               <li><strong>Contra o Subjetivismo:</strong> Vivemos em uma era onde a "verdade pessoal" e as emoções ditam a realidade. Sola Scriptura nos ancora na verdade objetiva de Deus.</li>
               <li><strong>Contra Tradições Humanas:</strong> Nenhuma revelação moderna, experiência ou tradição eclesiástica pode se sobrepor ao que está escrito na Palavra.</li>
             </ul>

             <hr />

             <h2>✝️ 2. Solus Christus (Somente Cristo)</h2>
             <p>A salvação é encontrada apenas em Jesus Cristo, o único mediador entre Deus e os homens. Nossos méritos, santos ou mediadores humanos não têm poder salvífico.</p>

             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0}}><em>"E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos."</em> — Atos 4:12</p>
             </div>

             <h3>A Relevância Hoje</h3>
             <ul>
               <li><strong>Contra o Pluralismo:</strong> Num mundo que diz que "todos os caminhos levam a Deus", Solus Christus reafirma a exclusividade de Cristo.</li>
               <li><strong>O Suficiente Salvador:</strong> Cristo não precisa da nossa ajuda para nos salvar. Sua obra na cruz foi completa e perfeita.</li>
             </ul>

             <hr />

             <h2>🎁 3. Sola Gratia (Somente a Graça)</h2>
             <p>A salvação é um dom imerecido de Deus. Não há nada que possamos fazer, antes ou depois da conversão, para comprar o favor divino. O ser humano está morto em seus pecados (Efésios 2:1) e precisa que Deus o ressuscite.</p>

             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0}}><em>"Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie."</em> — Efésios 2:8-9</p>
             </div>

             <h3>A Relevância Hoje</h3>
             <ul>
               <li><strong>Contra o Legalismo:</strong> Liberta-nos da esteira rolante do desempenho religioso. Somos aceitos por causa do que Cristo fez, não do que fazemos.</li>
               <li><strong>Profunda Humildade:</strong> A graça destrói o orgulho humano, pois reconhecemos que somos devedores absolutos à misericórdia de Deus.</li>
             </ul>

             <hr />

             <h2>🕊️ 4. Sola Fide (Somente a Fé)</h2>
             <p>Nós recebemos a graça de Deus e somos justificados (declarados justos) unicamente através da fé em Jesus Cristo, e não por nossas obras.</p>

             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0}}><em>"Concluímos, pois, que o homem é justificado pela fé sem as obras da lei."</em> — Romanos 3:28</p>
             </div>

             <h3>A Relevância Hoje</h3>
             <ul>
               <li><strong>Paz com Deus:</strong> Como podemos ter certeza da salvação? Se dependesse de nós, nunca teríamos certeza. Como depende da obra de Cristo recebida pela fé, temos firme garantia.</li>
               <li><strong>O Combate ao Mérito:</strong> Muitas pessoas tentam se justificar perante Deus e perante os homens. Sola Fide nos ensina a descansar na justiça imputada de Cristo.</li>
             </ul>

             <hr />

             <h2>👑 5. Soli Deo Gloria (Glória Somente a Deus)</h2>
             <p>O propósito final de toda a criação e da nossa salvação é a glória de Deus. Como a salvação é inteiramente obra de Deus, a Ele pertence toda a glória.</p>

             <div style={{background: '#f9f9f9', borderLeft: '4px solid #8B0000', padding: '15px', margin: '20px 0'}}>
               <p style={{margin: 0}}><em>"Portanto, quer comais quer bebais, ou façais outra qualquer coisa, fazei tudo para glória de Deus."</em> — 1 Coríntios 10:31</p>
             </div>

             <h3>A Relevância Hoje</h3>
             <ul>
               <li><strong>Contra o Antropocentrismo:</strong> A cultura de hoje é focada no "eu" (autoestima, autoajuda, realização pessoal). Soli Deo Gloria nos lembra que o universo gira em torno de Deus, não de nós.</li>
               <li><strong>Propósito de Vida:</strong> Transforma até as tarefas mais comuns em adoração, quando feitas para o Senhor.</li>
             </ul>

             <hr />

             <h2>💡 Conclusão e Aplicação Prática</h2>
             <p>As Cinco Solas não são apenas relíquias históricas; elas são a espinha dorsal da nossa identidade cristã. Elas nos protegem de desvios teológicos e garantem que o nosso evangelho continua sendo "boas novas".</p>

             <div style={{background: '#e8f4f8', border: '1px solid #b3d4e0', padding: '20px', margin: '30px 0', borderRadius: '8px'}}>
               <h3 style={{marginTop: 0, color: '#005580'}}>🎯 Desafio Prático da Semana</h3>
               <p>Ao longo desta semana, reflita sobre as Cinco Solas:</p>
               <ol>
                 <li><strong>Sola Scriptura:</strong> Você tem passado mais tempo lendo a Bíblia ou consumindo opiniões na internet?</li>
                 <li><strong>Solus Christus:</strong> Sua confiança está em Cristo ou nas suas habilidades?</li>
                 <li><strong>Sola Gratia / Sola Fide:</strong> Você vive ansioso tentando agradar a Deus por esforço próprio, ou descansa na obra consumada de Cristo?</li>
                 <li><strong>Soli Deo Gloria:</strong> As suas motivações na escola, no trabalho ou em casa visam a exaltação do seu nome ou do nome do Senhor?</li>
               </ol>
             </div>

             <div className="article-tags" style={{marginTop: '2rem'}}>
                <span className="cat-tag" style={{marginRight: '10px'}}>#CincoSolas</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#ReformaProtestante</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#SolaScriptura</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#SolaFide</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#SoliDeoGloria</span>
             </div>
          </main>
        ) : isProvisao ? (
          <main className="article-content section-mb">
             <div className="article-header">
               <span className="cat-tag">Devocional / Testemunhos</span>
               <h1>Deus Honrou a Fé Dela: O Milagre do Cachorro que Trouxe Dinheiro na Boca</h1>
               <p className="article-subtitle" style={{fontSize: '1.2rem', color: '#555', marginTop: '0.5rem'}}>Um testemunho poderoso de provisão sobrenatural e o perigo da murmuração nas provas da fé</p>
               <div className="article-meta">Por <strong>João Calvino</strong> | 12 Jun, 2026</div>
             </div>
             
             <img src="/provisao.png" alt="O Milagre do Cachorro que Trouxe Dinheiro na Boca" className="article-hero-img" loading="lazy" />
             
             <p><em>"Louvai ao SENHOR, porque ele é bom, porque a sua misericórdia dura para sempre."</em> — Salmo 136:1</p>
             <p>Há testemunhos que não apenas nos emocionam, mas nos ensinam lições profundas sobre fé, provisão divina e o caráter de Deus. Esta é a história real de uma mãe de doze filhos que, enfrentando oito dias sem pão na mesa, aprendeu da maneira mais extraordinária que <strong>Deus honra aqueles que confiam nEle sem murmurar</strong>.</p>
             <p>Assista ao testemunho completo abaixo:</p>

             <hr />

             <h2>📺 O Testemunho</h2>
             <div style={{position: 'relative', paddingBottom: '177.77%', height: 0, overflow: 'hidden', maxWidth: '100%', background: '#000', margin: '2rem 0', borderRadius: '12px'}}>
               <iframe 
                 src="https://www.youtube.com/embed/gBFAXFhgoAY" 
                 title="Deus honrou a fé dela. Ela não reclamou. #bençãos #biblia #testemunho"
                 frameBorder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                 allowFullScreen
                 style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '12px'}}>
               </iframe>
             </div>
             <p><strong>Canal:</strong> OUVINDO A CRISTO<br />
             <strong>Duração:</strong> Short/YouTube Shorts</p>

             <hr />

             <h2>🍞 A Prova do Pão: Oito Dias com Uma Panela de Feijão</h2>
             <p>A história começa com uma pergunta difícil do pastor Apolone: <em>"O seu filho tem o que comer?"</em></p>
             <p>Com sinceridade tocante, mas sem revolta, ela respondeu:</p>
             <blockquote>
               <p><em>"Não, pastor. Faz oito dias hoje que eu só tenho uma panela de feijão de avô para dar de comer aos meus filhos. Eu não fico dizendo a ninguém o que estou passando, mas Deus usa as pessoas; aí vem um e manda um pacote de biscoito, outro manda outro negócio, e assim nós estamos escapando."</em></p>
             </blockquote>

             <h3>A Realidade Dura</h3>
             <p>Imagine a cena:</p>
             <ul>
               <li><strong>Doze filhos</strong> para criar (na época, oito ou nove em casa)</li>
               <li><strong>Oito dias</strong> sem pão</li>
               <li>Apenas <strong>uma panela de feijão</strong> para todos</li>
               <li>Mesa vazia, mas coração cheio de fé</li>
             </ul>
             <p>Ela confessa: <em>"Eu não blasfemava, eu não murmurava."</em> Se o marido não tinha dinheiro, ela aceitava. E Jesus ia conservando a casa dela.</p>
             <p><strong>Lição #1:</strong> A verdadeira fé não depende das circunstâncias. Ela canta e ora o dia todo, mesmo com a despensa vazia.</p>

             <hr />

             <h2>😢 O Dia em que as Forças Acabaram</h2>
             <p>Mas houve um dia em que a prova ficou pesada demais. Faltou o pão e o sustento para o <strong>filho mais pequenininho, um bebê de apenas dois meses</strong> que estava deitado na rede.</p>
             <p>Ela confessa com honestidade brutal:</p>
             <blockquote>
               <p><em>"Eu não nego, eu não tinha forças nem para orar."</em></p>
             </blockquote>

             <h3>O Desespero Silencioso</h3>
             <p>A única coisa que ela conseguia fazer era:</p>
             <ul>
               <li>Andar de um lado para o outro dentro de casa</li>
               <li>Lágrimas caindo dos olhos</li>
               <li>Clamar em pensamento: <em>"Senhor, o que é que eu faço hoje?"</em></li>
               <li>Olhar para a filheirinha dos filhos e chorar escondida</li>
               <li>Entrar no quarto, chorar mais um pouco, voltar para a sala</li>
             </ul>
             <p>Quando foi ficando tarde, ela saiu no quintal, olhou para o céu e repetiu:</p>
             <blockquote>
               <p><em>"Jesus, o que eu faço para quando essa criança acordar eu ter o que dar de comer a ela?"</em></p>
             </blockquote>
             <p><strong>Lição #2:</strong> Até os gigantes da fé têm momentos de fraqueza. O importante não é nunca cair, é para quem você clama quando cai.</p>

             <hr />

             <h2>🐕 O Milagre Inesperado: Leão, o Cão Providencial</h2>
             <p>A família criava um cachorrinho cujo nome era, curiosamente, <strong>Leão</strong>.</p>
             <p>Logo após sua oração sincera olhando para o céu, ela viu o cachorrinho vindo correndo da rua. O animal correu, entrou no meio das crianças que estavam no quintal e <strong>soltou algo da boca</strong>.</p>
             <p>Na hora, os filhos gritaram: <em>"Mãe, olha o que o Leão trouxe!"</em></p>

             <h3>O Que Aconteceu</h3>
             <p>Quando ela olhou, o cachorro havia trazido:</p>
             <ul>
               <li><strong>Um bolo de dinheiro enrolado</strong> jogado no chão</li>
               <li>Não lembrava se eram 80 ou 180 Cruzeiros (moeda da época)</li>
               <li>Era dinheiro vivo, certinho</li>
             </ul>
             <p>Ela declara no vídeo:</p>
             <blockquote>
               <p><em>"As coisas que Deus faz são muito bem feitas. Eu nunca ia esperar que um cachorro viesse trazer dinheiro na boca!"</em></p>
             </blockquote>
             <p>Ela pegou aquele dinheiro e, <strong>assim que o bebê de dois meses acordou na rede</strong>, ela já tinha conseguido comprar a comida e o sustento para ele.</p>

             <h3>A Resposta aos Críticos</h3>
             <p>Algumas pessoas na época duvidaram ou zombaram da história. Sua resposta foi firme:</p>
             <blockquote>
               <p><em>"Se vocês quiserem acreditar, acreditem, se não quiserem, não acreditem. Eu vi o animal trazendo, eu recebi o dinheiro e dei de comer aos meus filhos. Estou aqui contando a bênção para a glória de Deus, porque eu não tenho precisão de inventar uma mentira dessas."</em></p>
             </blockquote>
             <p><strong>Lição #3:</strong> Deus usa os meios mais improváveis para prover. Um cachorro chamado Leão foi o instrumento de milagre. Quem somos nós para limitar o Criador?</p>

             <hr />

             <h2>✨ A Promessa Cumprida: "Multiplicarei o Pão da Tua Mesa"</h2>
             <p>Depois que ela passou por essa prova extrema sem murmurar, ela conta que <strong>Jesus falou fortemente ao seu coração</strong>:</p>
             <blockquote>
               <p><em>"Agora multiplicarei o pão da tua mesa."</em></p>
             </blockquote>
             <p>Ela testemunha que, a partir daquele dia:</p>
             <ul>
               <li>Com aquele mesmo dinheiro e a bênção de Deus</li>
               <li>O sustento <strong>multiplicou</strong></li>
               <li><strong>Nunca, nunca mais faltou nada</strong> na mesa dela</li>
             </ul>
             <p><strong>Lição #4:</strong> A fidelidade na prova gera multiplicação depois da prova. Deus não apenas supriu a necessidade do dia, mas estabeleceu provisão contínua.</p>

             <hr />

             <h2>📖 O Que a Bíblia Diz Sobre Não Murmurar</h2>
             <p>Este testemunho ilustra perfeitamente o que as Escrituras ensinam sobre murmuração e fé:</p>

             <h3>1. A Murmuração Impede a Bênção</h3>
             <blockquote>
               <p><em>"Não façam nada por ambição egoísta ou por vaidade, mas humildemente considerem os outros superiores a vocês mesmos."</em> — Filipenses 2:3</p>
             </blockquote>
             <p>Os israelitas murmuraram no deserto e não entraram na Terra Prometida (Números 14:26-35). A murmuração é falta de fé na provisão de Deus.</p>

             <h3>2. A Gratidão Abre Portas</h3>
             <blockquote>
               <p><em>"Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus."</em> — 1 Tessalonicenses 5:18</p>
             </blockquote>
             <p>Essa senhora cantava e orava mesmo sem pão. Sua gratidão na prova preparou o caminho para o milagre.</p>

             <h3>3. Deus Honra a Fé</h3>
             <blockquote>
               <p><em>"Sem fé é impossível agradar a Deus, pois quem dele se aproxima precisa crer que ele existe e que recompensa aqueles que o buscam."</em> — Hebreus 11:6</p>
             </blockquote>
             <p>Ela buscou a Deus sem murmurar. Deus honrou sua fé de forma sobrenatural.</p>

             <h3>4. A Provisão de Deus Vem de Formas Inesperadas</h3>
             <blockquote>
               <p><em>"Porque todo animal da selva é meu, e o gado sobre milhares de colinas."</em> — Salmo 50:10</p>
             </blockquote>
             <p>Deus é dono de tudo. Se Ele quiser usar um cachorro, um corvo (como com Elias), ou uma viúva (como com Elias novamente), Ele usará.</p>

             <hr />

             <h2>💡 Lições Práticas para Nossa Vida</h2>

             <h3>1. Não Rotule Todas as Provas como "Ataque do Diabo"</h3>
             <p>O conselho final dela é ouro puro:</p>
             <blockquote>
               <p><em>"Por isso que eu digo e gosto muito de dizer: gente, quando você estiver passando por uma prova, não blasfeme. Nem fique dizendo que é o diabo, porque nem tudo é o diabo! Tem coisas que é Deus nos preparando para uma obra. E se a gente viver murmurando ou dizendo que tudo é o adversário, nós não vencemos."</em></p>
             </blockquote>
             <p><strong>Aplicação:</strong> Às vezes, a prova é <strong>permitida por Deus</strong> para nos fortalecer, não um ataque do inimigo para nos destruir.</p>

             <h3>2. Aceite a Realidade Sem Revolta</h3>
             <p>Ela disse: <em>"Se o marido não tinha dinheiro, ela aceitava que não tinha e ponto final."</em></p>
             <p>Isso não é passividade, é <strong>confiança ativa</strong> na soberania de Deus.</p>

             <h3>3. Deus Vê Sua Lágrima Escondida</h3>
             <p>Ela chorava escondida para os filhos não verem. Deus viu. Deus ouviu. Deus agiu.</p>
             <blockquote>
               <p><em>"Guarda as minhas lágrimas no teu odre; acaso não estão elas no teu livro?"</em> — Salmo 56:8</p>
             </blockquote>

             <h3>4. O Milagre Vem no Tempo de Deus</h3>
             <p>Ela orou o dia todo. Quando estava ficando tarde, o milagre chegou.</p>
             <p>Não desista na hora mais escura. O milagre pode estar a minutos de distância.</p>

             <h3>5. Testemunhe Sem Medo de Críticas</h3>
             <p>Ela enfrentou zombadores, mas continuou contando a verdade para glória de Deus.</p>
             <p><strong>Seu testemunho é sua arma espiritual.</strong> Não o cale por medo do que dirão.</p>

             <hr />

             <h2>🔥 Reflexão Final: Qual É a Sua "Prova do Pão"?</h2>
             <p>Talvez você esteja vivendo agora:</p>
             <ul>
               <li>Uma crise financeira</li>
               <li>Uma necessidade urgente</li>
               <li>Uma porta fechada</li>
               <li>Uma espera dolorosa</li>
             </ul>
             <p><strong>O que você tem feito?</strong></p>
             <ul>
               <li>Tem murmurado ou orado?</li>
               <li>Tem culpado o diabo ou confiado em Deus?</li>
               <li>Tem escondido suas lágrimas ou derramado-as diante do Senhor?</li>
             </ul>
             
             <h3>A Promessa para Você</h3>
             <p>Deus não mudou. O mesmo Deus que usou um cachorro chamado Leão para trazer dinheiro na boca é o <strong>mesmo Deus</strong> que pode prover para você hoje.</p>
             <p>Mas há uma condição: <strong>não murmure</strong>.</p>
             <p>A murmuração fecha portas. A fé abre céus.</p>

             <hr />

             <h2>🙏 Oração Baseada Neste Testemunho</h2>
             <p><em>"Senhor Jesus,<br />
             Assim como honraste a fé dessa mãe, honra a minha fé hoje.<br />
             Perdoa-me pelas vezes em que murmurei, reclamei e duvidei do Teu cuidado.<br />
             Ensina-me a confiar em Ti mesmo quando a mesa estiver vazia.<br />
             Ajuda-me a cantar e orar mesmo quando não entender Teus caminhos.<br />
             Eu creio que Tu podes usar meios improváveis para me abençoar.<br />
             Eu creio que, se eu permanecer fiel na prova, Tu multiplicarás o pão da minha mesa.<br />
             Eu não murmurarei. Eu confiarei. Eu esperarei.<br />
             Em nome de Jesus, amém."</em></p>

             <hr />

             <h2>📝 Desafio Prático da Semana</h2>
             <p><strong>Comprometa-se a:</strong></p>
             <ol>
               <li><strong>Não reclamar</strong> por 7 dias seguidos</li>
               <li><strong>Agradecer</strong> a Deus três vezes ao dia, mesmo nas dificuldades</li>
               <li><strong>Orar</strong> em vez de murmurar quando a prova apertar</li>
               <li><strong>Testemunhar</strong> o que Deus tem feito em sua vida, mesmo que pareça pequeno</li>
             </ol>
             <p>Ao final dos 7 dias, escreva em um diário o que mudou em seu coração e em suas circunstâncias.</p>

             <hr />

             <h2>📚 Versículos para Memorizar</h2>
             <p>✓ <strong>Salmo 37:25</strong> — <em>"Fui moço e agora sou velho, mas nunca vi o justo desamparado, nem seus filhos mendigando o pão."</em></p>
             <p>✓ <strong>Filipenses 4:19</strong> — <em>"O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus."</em></p>
             <p>✓ <strong>Tiago 1:2-4</strong> — <em>"Considerem motivo de grande alegria o fato de passarem por diversas provações, pois vocês sabem que a prova da sua fé produz perseverança."</em></p>
             <p>✓ <strong>1 Pedro 5:7</strong> — <em>"Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês."</em></p>

             <hr />

             <h2>💬 Compartilhe Seu Testemunho</h2>
             <p>Deus tem feito milagres em sua vida? Assim como essa mãe, <strong>não se cale</strong>. Seu testemunho pode ser a fé que alguém precisa para crer que Deus também proverá.</p>
             <p>Deixe nos comentários ou compartilhe com alguém que está passando por uma prova.</p>
             <p><strong>Lembre-se:</strong> O mesmo Deus que honrou a fé dela, honrará a sua fé também.</p>

             <hr />
             <p><em>"As coisas que Deus faz são muito bem feitas."</em> — Testemunho do vídeo</p>
             <p><strong>Soli Deo Gloria.</strong></p>

             <hr />

             <p><strong>📌 Sobre o Canal OUVINDO A CRISTO:</strong><br />
             O canal "OUVINDO A CRISTO" tem como propósito compartilhar testemunhos, mensagens e conteúdos que edificam a fé cristã. Este vídeo em formato Shorts alcançou milhares de pessoas com esta mensagem poderosa de fé e provisão.</p>
             <p><strong>Assista mais conteúdos:</strong> <a href="https://youtube.com/@OUVINDOACRISTO" target="_blank" rel="noreferrer">Canal OUVINDO A CRISTO no YouTube</a></p>

             <hr />

             <p><strong>📖 Referências Bíblicas:</strong> Salmo 136:1 | Filipenses 2:3 | 1 Tessalonicenses 5:18 | Hebreus 11:6 | Salmo 50:10 | Salmo 56:8 | Salmo 37:25 | Filipenses 4:19 | Tiago 1:2-4 | 1 Pedro 5:7</p>
             <p><strong>🔗 Link do Vídeo Original:</strong> <a href="https://youtube.com/shorts/gBFAXFhgoAY" target="_blank" rel="noreferrer">https://youtube.com/shorts/gBFAXFhgoAY</a></p>
             
             <div className="article-tags" style={{marginTop: '2rem'}}>
                <span className="cat-tag" style={{marginRight: '10px'}}>#provisãodivina</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#fé</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#testemunho</span>
                <span className="cat-tag" style={{marginRight: '10px'}}>#milagre</span>
                <span className="cat-tag">#nãomurmure</span>
             </div>
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
                  <a href="/cinco-solas-relevancia-hoje-reforma-protestante" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/cinco_solas.png" alt="As Cinco Solas e Sua Relevância Hoje" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                    <h3>As Cinco Solas e Sua Relevância Hoje: Os Pilares da Reforma que Ainda Transformam Vidas</h3>
                    <span className="cat-tag red">História Bíblica / Teologia</span>
                    <div className="meta">26 Dez, 2025</div>
                  </a>
                </div>
                <div className="article-sm">
                  <a href="/ana-mae-orou-chorou-gerou-profeta-samuel" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/ana_orando.png" alt="Ana: A Mãe que Orou, Chorou e Gerou um Profeta" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                    <h3 style={{fontSize: '1.1rem'}}>Ana: A Mãe que Orou, Chorou e Gerou um Profeta</h3>
                    <span className="cat-tag" style={{color: '#8B0000'}}>Mulheres da Bíblia</span>
                    <div className="meta">22 Jun, 2026</div>
                  </a>
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
                  <a href="/deus-honrou-fe-testemunho-milagres-provisao-divina" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/provisao.png" alt="Deus Honrou a Fé Dela" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                    <h3>Deus Honrou a Fé Dela: O Milagre do Cachorro que Trouxe Dinheiro na Boca</h3>
                    <div className="meta">por <span>João Calvino</span> · 12 Jun, 2026</div>
                  </a>
                </div>
                <div className="grid-4-item">
                  <a href="/artigo/sarca-ardente" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/sarca-ardente.jpg" alt="A Sarça Ardente" className="img-ph" loading="lazy" />
                    <h3>A Sarça Ardente: Quando Deus Encontrou Moisés no Deserto</h3>
                    <div className="meta">30 Mai, 2026</div>
                  </a>
                </div>
                <div className="grid-4-item">
                  <a href="/ester-rainha-salvou-povo-deus-age-sombras" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/ester_rainha.png" alt="Rainha Ester" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                    <h3 style={{fontSize: '1.1rem', marginBottom: '8px', lineHeight: '1.4'}}>Ester: A Rainha que Salvou um Povo</h3>
                    <div className="meta">23 Jun, 2026</div>
                  </a>
                </div>
                <div className="grid-4-item">
                  <a href="/carta-galatas-liberdade-crista-estudo-completo" style={{textDecoration: 'none', color: 'inherit'}}>
                    <img src="/galatas.png" alt="A Carta aos Gálatas e a Liberdade Cristã" className="img-ph" loading="lazy" style={{objectFit: 'cover'}} />
                    <h3>A Carta aos Gálatas e a Liberdade Cristã: O Evangelho da Graça Contra o Legalismo</h3>
                    <p style={{fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem', marginTop: '0.5rem'}}>Um estudo profundo da epístola de Paulo aos Gálatas, explorando a doutrina da justificação pela fé, a liberdade cristã e os perigos do legalismo. Descubra como o Evangelho da graça nos liberta do jugo da lei.</p>
                    <div className="meta">por <span>João Calvino</span> · 14 Mar, 2026</div>
                  </a>
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
                    <img src="/metodos_biblia.png" alt="Leitura Bíblica" className="img-ph" loading="lazy" />
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

            {/* SEÇÃO 3: CATEGORY SPLIT (TEOLOGIA / DOGMÁTICA) */}
            <section className="section-mb">
              <div className="split-category-grid">
                
                {/* COLUNA 1: TEOLOGIA */}
                <div className="split-column">
                  <div className="cat-header-split">
                    <h3>TEOLOGIA</h3>
                  </div>
                  <div className="split-card">
                    <img src="/eleicao.png" alt="A Doutrina da Eleição Incondicional" />
                    <div className="split-card-content">
                      <h4>A Doutrina da Eleição Incondicional</h4>
                      <div className="meta">JOÃO CALVINO</div>
                      <p>
                        Um exame profundo de Efésios 1 e Romanos 9, demonstrando que a escolha salvífica 
                        de Deus repousa inteiramente em Sua graça soberana e beneplácito, sem qualquer 
                        previsão de mérito ou fé humana.
                      </p>
                    </div>
                    <div className="split-pagination">
                      <button className="btn-outline">&lsaquo; ANTERIOR</button>
                      <button className="btn-outline">PRÓXIMO &rsaquo;</button>
                      <span className="page-count">1 De 24</span>
                    </div>
                  </div>
                </div>

                {/* COLUNA 2: DOGMÁTICA */}
                <div className="split-column">
                  <div className="cat-header-split">
                    <h3>DOGMÁTICA</h3>
                  </div>
                  <div className="split-card">
                    <img src="/trindade.png" alt="A Trindade: Um só Deus em Três Pessoas" />
                    <div className="split-card-content">
                      <h4>A Trindade: Um só Deus em Três Pessoas</h4>
                      <div className="meta">R.C. SPROUL</div>
                      <p>
                        A doutrina da Trindade afirma que há um só Deus, eternamente subsistente em 
                        três pessoas distintas: o Pai, o Filho e o Espírito Santo. Uma reflexão sobre 
                        o maior mistério e fundamento da fé cristã.
                      </p>
                    </div>
                    <div className="split-pagination">
                      <button className="btn-outline">&lsaquo; ANTERIOR</button>
                      <button className="btn-outline">PRÓXIMO &rsaquo;</button>
                      <span className="page-count">1 De 18</span>
                    </div>
                  </div>
                </div>

              </div>
            </section>
            
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
