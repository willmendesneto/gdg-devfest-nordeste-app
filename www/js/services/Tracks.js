'use strict';

/**
 * Initial tracks list
 *
 * @type {Array}
 */
angular.module('gdgApp')
  .value('Tracks', [
    {
        track: 'Web',
        talks: [
            {
                image: 'http://2014.devfestne.com.br/img/speakers/NelsonGlauber.jpg',
                begin: '08:20',
                end: '09:00',
                talk: 'Abertura: Android L, Wear e Google I/O 2014',
                speaker: 'Nelson Glauber',
                complexity: 'Básico',
                description: '',
                resume: 'Google Developer Expert de Android nomeado pelo Google em 2014. Trabalhando desde 2006 com mobile, desenvolvendo jogos e aplicativos. Mestrado em Engenharia de Software na CESAR.edu. Professor de desenvolvimento mobile em cursos de graduação e pós-graduação.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/AleBorba.jpg',
                begin: '09:00',
                end: '09:50',
                talk: 'Go for Baby Gophers',
                speaker: 'Alê Borba',
                complexity: 'Básico',
                description: '',
                resume: 'Community Manager focado em comunidades técnicas e de desenvolvedores. Trabalhando pesado para que todas essas comunidades cresçam. Além disso, um apaixonado por acessibilidade em geral, principalmente web, que realmente acredita que a tecnologia veio para ajudar cada vez mais as pessoas.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/LuisLeao.jpg',
                begin: '10:00',
                end: '10:50',
                talk: 'Criando um aplicativo na nuvem para Google Glass',
                speaker: 'Luís Leão',
                complexity: 'Intermediário',
                description: 'Nesta sessão será demonstrada a criação de uma aplicação usando a Mirror API para o Google Glass.',
                resume: ''
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/CiroNunes.jpg',
                begin: '11:00',
                end: '11:50',
                talk: 'Então você quer aprender AngularJS?',
                speaker: 'Ciro Nunes',
                complexity: 'Básico',
                description: '',
                resume: 'Ciro desenvolve aplicações para o mercado financeiro pela Questrade que desafiam os limites do AnguarJS. É apaixonado por Open Source, contribuidor do core do Angular e maintainer do Karma. Ele também revisa livros, organiza meetups e ministra cursos sobre o framework mais baladado do momento, além de palestrar em eventos pelo Brasil.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/JeferssonNathan.jpg',
                begin: '13:30',
                end: '14:20',
                talk: 'PGAE: Um novo LAMP',
                speaker: 'Jefersson Nathan',
                complexity: 'Avançado',
                description: 'Uma fusão excitante entre Google App Engine e PHP. Entenda do ínicio ao fim, todos os processos necessários para configurar, manter, publicar e rodar sua aplicação nessa poderosa plataforma fornecida pelo Google. Veja as vantagens e desvantagens de usar o GAE para sua aplicação e aproveite o que há de melhor dessas duas tecnologias.',
                resume: 'Líder e representante do Grupo de Usuários PHP do estado de Sergipe, onde trabalha para manter a comunidade local unida. Atualmente, trabalha em uma empresa com foco em soluções web e dedica seu tempo livre á contribuição com projetos Open Source.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/AbdalaCerqueira.jpg',
                begin: '14:30',
                end: '15:20',
                talk: 'Websockets e você, tudo a ver',
                speaker: 'Abdala Cerqueira',
                complexity: 'Básico',
                description: 'Na web, no desktop e no mobile: uma abordagem básica sobre a utilização de websockets para construção de aplicações bidirecionais.',
                resume: 'Formado em Sistemas para Web, Pós-graduado em Sistemas Distribuídos e internet. Já treinou órgãos como MEC, Caixa Econômica Federal, Senado Federal, Stefanini IT, STF, TST entre outros. Atualmente é consultor e atua como coordenador do PHP-PB, grupo de usuários PHP da Paraíba.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/AlercioBressano.jpg',
                begin: '15:30',
                end: '16:20',
                talk: 'Equipes autogerenciadas e meditação: como o Google gerencia seus projetos e sua produtividade',
                speaker: 'Alércio Bressano',
                complexity: 'Avançado',
                description: 'Nesta sessão, os participantes irão conhecer um pouco mais sobre como o Google gerencia seus projetos e lidera suas equipes para alcançar melhores resultados. Quais os princípios de um gerente no Google e como eles são vistos pelos engenheiros? Além das práticas que favorecem o autogerenciamento de seus times, serão abordados detalhes do programa de meditação implantado no Google por um engenheiro da China e como a ideia do \'não fazer nada\' e trabalhar menos tem proporcionado maiores ganhos de produtividade nos times.',
                resume: 'Pós-graduando em Psicologia Organizacional, especialista em Gestão Empresarial (MBA) pela FGV-RJ, certificado internacional Scrum Professional pela Scrum Alliance (CSP), certificado PMP e Agile Practitioner PMI-ACP pelo PMI (Project Management Institute) e coautor do livro \'Equipes de Alto Desempenho\' da Editora Ser+. Possui mais de 15 anos de experiência em empresas de pequeno, médio e grande porte e atualmente implementa métodos de gestão baseados em Agile/Scrum e PMBOK, criando o ambiente propício para a formação líderes, equipes e empresas de alto desempenho. Mais de 8 anos de experiência como professor universitário e ministra cursos e palestras pelo Brasil sobre gerenciamento de projetos, liderança e formação de equipes (team building).'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/joselito.jpg',
                begin: '16:40',
                end: '17:30',
                talk: 'Chrome Web Apps',
                speaker: 'Joselito Júnior',
                complexity: 'Básico',
                description: 'Os aplicativos nasceram em sistemas mobile e foram se tornando tão relevantes com o tempo, que até os programas de computador começaram a ser chamados de aplicativos. Com o HTML5, webapps ganharam “super poderes” e já hoje em dia não devem praticamente nada para os aplicativos nativos, escritos diretamente na linguagem da plataforma. No entanto, no mundo desktop, a história é diferente. WebApps ainda estão “presos” ao browser, atrelados a uma url, e não a uma loja de aplicativos. Além disso o acesso a recursos do computador (como gerenciamento de arquivos e acesso a executáveis do sistema) é praticamente nulo. Felizmente, estão sendo introduzidas novas tecnologias e APIs que permitem uma experiência totalmente nova a aplicativos (ou programas) feitos em HTML5. Nessa palestra, iremos conhecer alguns deles.',
                resume: 'Sou só um cara não muito normal, que quebra computadores e gosta de criar umas coisinhas que não necessariamente funcionam.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/DaniloReinert.jpg',
                begin: '17:40',
                end: '18:30',
                talk: 'GWT: de iniciante a especialista',
                speaker: 'Danilo Reinert',
                complexity: 'Básico',
                description: 'O GWT é conhecido por ter uma pesada curva de aprendizagem, desestimulando iniciantes a continuar no estudo da tecnologia. Essa palestra buscará trazer para os participantes um conhecimento abrangente porém seletivo, norteado pelas melhores práticas, para que eles possam iniciar o desenvolvimento de aplicações web com GWT de imediato.',
                resume: 'Com vários anos de experiência em Java e Javascript, ele foca no desenvolvimento de soluções relacionados a essas linguagens, especialmente voltadas para a Web. Nos últimos dois anos, tem atuado fortemente na plataforma GWT, participando com frequência na comunidade e contribuindo para bibliotecas reutilizáveis. Entusiasta do open source, ele colabora regularmente com projetos relacionados a GWT, como GWT-Bootstrap, AngularGWT e o próprio GWT, ou de modo mais genérico com o Java, como o json-schema-validator, e mantém projetos de autoria própria como o JJSchema e o Turbo GWT.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/RenzoNuccitelli.jpg',
                begin: '18:40',
                end: '19:30',
                talk: 'Programando em Hackathons com Google App Engine',
                speaker: 'Renzo Nuccitelli',
                complexity: 'Básico',
                description: 'Dicas sobre programação em Hackathons utilizando Google App Engine. Exemplo prático com a construção de uma app simples durante a própria apresentação.',
                resume: 'Engenheiro de Computação formado pelo ITA. Especialista em programação web no Google App Engine, usa Python desde 2009. Foi Diretor de Tecnologia na startup de educação QMagico, Apaixonado por dar aulas, é professor da Fatec.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/JosePapo.jpg',
                begin: '19:30',
                end: '20:20',
                talk: 'Google Compute Engine: Uma Introdução',
                speaker: 'José Papo',
                complexity: 'Básico',
                description: 'Nessa palestra vamos mostrar os principais recursos da Infra-estrutura como serviço (IaaS) do Google de forma prática através de demos. Falaremos sobre servidores, storage, balanceadores de carga, entre outros.',
                resume: 'José Papo é Developer Relations Program Manager no Google. Também já trabalhou na Amazon (AWS) e na Microsoft. É desenvolvedor de software, evangelista de novas tecnologias e mestre em engenharia da computação pelo IPT. Também atua como professor de pós-graduação na PUC-SP. Fala sobre tendências tecnológicas, computação em nuvem, agilidade, inovação e desenvolvimento de produtos em seu twitter @josepapo.'
            }
        ]
    },
    {
        track: 'Mobile',
        talks: [
            {
                image: 'http://2014.devfestne.com.br/img/speakers/NelsonGlauber.jpg',
                begin: '08:20',
                end: '09:00',
                talk: 'Abertura: Android L, Wear e Google I/O 2014',
                speaker: 'Nelson Glauber',
                complexity: 'Básico',
                description: '',
                resume: 'Google Developer Expert de Android nomeado pelo Google em 2014. Trabalhando desde 2006 com mobile, desenvolvendo jogos e aplicativos. Mestrado em Engenharia de Software na CESAR.edu. Professor de desenvolvimento mobile em cursos de graduação e pós-graduação.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/LucasXavier.jpg',
                begin: '09:00',
                end: '09:50',
                talk: 'Construindo Aplicativos Android de Alto Desempenho',
                speaker: 'Lucas Xavier',
                complexity: 'Intermediário',
                description: 'Você teve uma ótima ideia e criou um aplicativo que parece resolver perfeitamente o seu problema… mas não é exatamente isso que pensam seus usuários! Por que meu aplicativo trava tanto? Como o usuário consegue fazer isso? Quando eu devo melhorar a performance? Esta palestra é indicada para quem busca dicas de como tirar o máximo de uma aplicação Android.',
                resume: ''
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/gustavocostaw.jpg',
                begin: '10:00',
                end: '10:50',
                talk: 'Criando aplicativos com HTML5 para Android usando o Chrome a seu favor',
                speaker: 'Gustavo Costa',
                complexity: 'Intermediário',
                description: 'Crie aplicativos performáticos com HTML5: serão demonstradas técnicas de como atingir uma boa performance com Single Page Apps testando em aparelhos Android, e o conceito de apps feitos com HTML5 e usando o Chrome Dev Tools a seu favor para debugar sua aplicação. Será mostrado o Cordova para construir seu aplicativo e com isso atingir também outras plataformas.',
                resume: 'Um dos 100 BlackBerry Elite Members no mundo, palestrou em mais de 15 eventos pelo Brasil. PhoneGap Expert, já desenvolveu aplicativos para iOS, Android e BlackBerry. Participou de projetos internacionais, ganhou prêmios e venceu hackathons usando HTML5. Ama a Web e seus padrões, é contribuidor ativo no mundo Open Source, sendo criador do projeto FastGap.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/HugoDoria.jpg',
                begin: '11:00',
                end: '11:50',
                talk: 'API-First: A \'Revolução Industrial\' do Software',
                speaker: 'Hugo Dória',
                complexity: 'Intermediário',
                description: 'É cada dia mais comum desenvolvermos um produto que é consumido por diversos tipos de \'front ends\' diferentes, seja web, mobile ou ecosistemas de terceiros. Por conta disso, há uma crescente necessidade de se criar uma API robusta, agnóstica e que possa ser utilizada por diversos canais diferentes. Esta palestra mostrará como você pode iniciar o desenvolvimento do seus aplicativos já pensando na API como parte central do seu projeto, utilizando isso como vantagem para desenvolver apps mais rapidamente e com maior qualidade.',
                resume: 'Profissional com mais de seis anos de experiência em TI. DevOP por natureza. Desenvolvedor do Arch Linux e de diversos apps para dispositivos móveis, incluindo apps bancários, frameworks para conferências e força de vendas. Adora a arte de criar ótimas experiências no mobile, aliado a uma ótima trilha sonora. Pai, gamer e alguém que acredita num mundo melhor.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/TalitaLombardi.jpg',
                begin: '13:30',
                end: '14:20',
                talk: 'Startups no Brasil',
                speaker: 'Talita Lombardi',
                complexity: 'Básico',
                description: '',
                resume: 'Administradora de formação, estudante de marketing digital da FGV, Talita Lombardi atualmente é Gerente Nacional de contas estratégicas da PedidosJá, faz consultoria e dá curso de vendas para Startups. É palestrante, mentora, jurada e super entusiasta do movimento de inovação tecnológico no Brasil. Isso aconteceu depois de 2012, quando fundou um blog de empreendedorismo digital, o Startups Stars, que se tornou referência em todo país. Ajudou diretamente e indiretamente mais de 10 Startups. Fundou ainda o blog Menina Executiva, é Nordestina que mora na ponte aérea entre Rio e São Paulo, ela está sempre pronta para ouvir e ajudar os empreendedores.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/BrenoMoura.jpg',
                begin: '14:30',
                end: '15:20',
                talk: 'Ruby <3 Android',
                speaker: 'Breno Moura',
                complexity: 'Básico',
                description: 'Ruby é uma linguagem de programação amorosa, ama Java, C#, iOS e seu amor mais recente é o Android. Nessa palestra irei falar um pouco sobre o Ruboto, uma alternativa bem bacana para quem quer programar Android mas não quer colocar a mão no Java, Eclipse e/ou Android Studio.',
                resume: ''
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/ItaloMarcel.jpg',
                begin: '15:30',
                end: '16:20',
                talk: 'Material Design: Por onde começar?',
                speaker: 'Italo Marcel',
                complexity: 'Intermediário',
                description: 'Nessa palestra você vai ficar por dentro de tudo para elevar sua aplicação ao próximo nível. Dê vida ao seu layout seguindo as guidelines e utilizando os novos componentes disponíveis no Android L e descubra por que é importante você sempre suportar a versão mais nova do Robozinho.',
                resume: 'Um gamer nato e apaixonado por Android, formado em Programação de Sistemas pelo Instituto Federal de Sergipe e graduando em Ciência da Computação pela Universidade Federal de Sergipe. Programa desde os 15 anos de idade, e já desenvolveu diversos aplicativos durante os mais de 4 anos como engenheiro Android. Inovar faz parte de seu DNA.'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/MarcosPenha.jpg',
                begin: '16:40',
                end: '17:30',
                talk: 'O Impacto de Wearable Computers na vida das pessoas: Uma ponte para tecnologias assistivas e acessibilidade',
                speaker: 'Marcos OAP',
                complexity: 'Básico',
                description: 'Tecnologias Vestíveis são uma realidade hoje! Se observarmos, facilmente encontramos produtos deste setor no mercado ou grandes iniciativas que prometem revolucionar o modo como interagimos com computadores, como por exemplo o Google Glass e os tão especulados smartwatches. Porém, nem sempre temos a perspectiva de como esses equipamentos podem realmente melhorar nossa qualidade de vida. E principalmente, como essas tecnologias podem auxiliar aqueles que mais precisam. Então, como podemos resolver os problemas de pessoas que sofrem algum tipo de deficiência? O que temos disponivel atualmente no mercado para facilitar a construção de tais tecnologias assistivas? Essa palestra visa responder essas perguntas e apresentar um novo ponto de vista sobre o uso de tecnologias vestíveis para promover a inclusão social e a acessibilidade.',
                resume: 'Marcos OAP é graduando em Ciência da Computação na FBV/DeVry University Brasil. Tem experiência como profissional da área há mais de oito anos fornecendo soluções de negócios para empresas nacionais e internacionais, atuando em papéis como Analista de Sistemas, Desenvolvedor e Gerente de Projetos. Atualmente é Engenheiro de Software no projeto Samsung no Centro de Informática da UFPE. É fascinado por inovação e projetos desafiadores. Por ser entusiasta da área de Wearable Computers fundou o grupo de pesquisas “WearIT”, do qual ele está fortemente engajado com projetos de responsabilidade social e acessibilidade. Um desses é o projeto AnnuitWalk, que visa resolver o problema de mobilidade dos cegos através de um óculos inteligente com foco na detecção de obstáculos. Nas horas vagas gosta de cinema, praia, escrever e ler ficção cientifica para, quem sabe, inspirar novos projetos :)'
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/JohnCordeiro.jpg',
                begin: '17:40',
                end: '18:30',
                talk: 'Desenvolvendo para Chromecast',
                speaker: 'John Cordeiro',
                complexity: 'Básico',
                description: 'Um overview sobre o Chromecast como tecnologia, mostrando as possibilidades tanto dos aplicativos executados no cliente quanto na TV, mostrando o fluxo de comunicação entre ambos e a aplicação dos mesmos.',
                resume: 'Atualmente é Desenvolvedor Mobile e Web Backend. Tem experiência em desenvolvimento mobile com ênfase nas plataformas Android e iOS. No presente possui seus trabalhos e pesquisas na área de visão computacional, reconhecimento de padrões e processamento multimídia. Entusiasta de tecnologias Google como o Chromecast, Google TV e Android Wear.'
            },
            {
                image: ['http://2014.devfestne.com.br/img/speakers/RicardoCavalcante.jpg', 'http://2014.devfestne.com.br/img/speakers/SilasLimeira.jpg'],
                begin: '18:40',
                end: '19:30',
                talk: 'Android: na sua sala e no seu pulso',
                speaker: ['Ricardo Cavalcante', 'Silas Limeira'],
                complexity: 'Intermediário',
                description: 'Atualmente o sistema Android é muito versátil, ele pode ser utilizado em diversos aparelhos, dentre eles estão: Android Wear, Android Tv, Android Auto entre outros. É possível fazer com que todos esses dispositivos trabalhem juntos, como um só. Logo, mostraremos conceitos básicos para quem está iniciando no assunto e pretende começar a programar para o Chromecast e o Android Wear, no final iremos fazer uma DEMO, aplicação que servirá de exemplo na integração do Android Wear com seu smartphone e Chromecast.',
                resume: ['', 'Bacherelando em Engenharia da Computação. Silas Limeira é desenvolvedor Mobile Freelancer. Participante ativo de eventos e hackathons, ganhou a fase nacional do Space Apps Challenge 2013 (NASA), o Chrome Apps Challenge 2013 e o Startup JAM, considera-se um entusiasta tecnológico e apoia 100% ações sociais como a Inclusão Digital.']
            },
            {
                image: 'http://2014.devfestne.com.br/img/speakers/JosePapo.jpg',
                begin: '19:30',
                end: '20:20',
                talk: 'Google Compute Engine: Uma Introdução',
                speaker: 'José Papo',
                complexity: 'Básico',
                description: 'Nessa palestra vamos mostrar os principais recursos da Infra-estrutura como serviço (IaaS) do Google de forma prática através de demos. Falaremos sobre servidores, storage, balanceadores de carga, entre outros.',
                resume: 'José Papo é Developer Relations Program Manager no Google. Também já trabalhou na Amazon (AWS) e na Microsoft. É desenvolvedor de software, evangelista de novas tecnologias e mestre em engenharia da computação pelo IPT. Também atua como professor de pós-graduação na PUC-SP. Fala sobre tendências tecnológicas, computação em nuvem, agilidade, inovação e desenvolvimento de produtos em seu twitter @josepapo.'
            }
        ]
    },
  ]);
