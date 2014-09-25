'use strict';

/**
 * Initial tracks list
 *
 * @type {Array}
 */
angular.module('gdgApp')
  .service('Schedule', function(OfflineModel) {
    var OM = OfflineModel;
    var __defaultSchedule =  OM.getListItems('schedule');

    if (!__defaultSchedule) {
      __defaultSchedule = {
        talks: [
            {
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
                track: 'Web',
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
      };
    }


    OM.init('schedule', __defaultSchedule);

    return {
      getSchedule: function() {
        return __defaultSchedule;
      },
      updateTalkInSchedule: function(talk, track) {
        angular.forEach(__defaultSchedule.talks, function(schedule, key){
          if (schedule.begin === talk.begin && schedule.end === talk.end) {
            talk.track = track;
            __defaultSchedule.talks[key] = talk;
            OM.setListItems('schedule', __defaultSchedule);
          }
        });
      }
    }

  });
