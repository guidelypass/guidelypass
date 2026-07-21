export const siteConfig = {
  name: "GuidelyPass",
  tagline: "Descubra o Mundo: Seus Guias Completos de Destino",
  description:
    "A GuidelyPass publica guias de viagem completos e detalhados para os principais destinos — o que levar, quando ir, o que fazer, onde comer e o que saber antes de embarcar.",
  url: "https://guidelypass.vercel.app",
};

export type Highlight = {
  title: string;
  description: string;
};

export type Destination = {
  name: string;
  slug: string;
  image: string;
  country: string;
  language: string;
  currency: string;
  bestTime: string;
  intro: string;
  highlights: Highlight[];
};

export type Region = {
  name: string;
  slug: string;
  destinations: Destination[];
};

export const regions: Region[] = [
  {
    name: "Europa",
    slug: "europe",
    destinations: [
      {
        name: "Paris",
        slug: "paris",
        image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80",
        country: "França",
        language: "Francês",
        currency: "Euro (€)",
        bestTime: "Abr – Jun · Set – Out",
        intro:
          "Paris é uma das cidades mais icônicas do mundo, conhecida pela sua arquitetura elegante, gastronomia refinada e vida cultural intensa. Das margens do Rio Sena aos bairros históricos de Montmartre e Le Marais, cada esquina da capital francesa reserva uma experiência única. Seja para arte, moda, culinária ou simplesmente passear pelos bulevares arbolados, Paris raramente decepciona.",
        highlights: [
          {
            title: "Torre Eiffel",
            description:
              "O símbolo de Paris e da França. Vale a pena subir para ver a cidade de cima, especialmente ao entardecer quando as luzes começam a acender.",
          },
          {
            title: "Museu do Louvre",
            description:
              "O maior museu de arte do mundo abriga mais de 35.000 obras, incluindo a Mona Lisa e a Vênus de Milo. Reserve ao menos meio dia.",
          },
          {
            title: "Montmartre",
            description:
              "Bairro boêmio no alto de uma colina, com vistas panorâmicas da cidade, artistas nas ruas e a bela Basílica de Sacré-Cœur.",
          },
          {
            title: "Gastronomia parisiense",
            description:
              "De croissants frescos nas boulangeries a restaurantes com estrelas Michelin, Paris é um destino obrigatório para quem aprecia boa comida.",
          },
        ],
      },
      {
        name: "Roma",
        slug: "rome",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
        country: "Itália",
        language: "Italiano",
        currency: "Euro (€)",
        bestTime: "Mar – Mai · Set – Nov",
        intro:
          "Roma é a cidade onde o passado e o presente convivem em perfeita harmonia. Capital da Itália e berço da civilização ocidental, ela abriga monumentos milenares ao lado de cafés vibrantes, mercados de rua e uma cena gastronômica incomparável. Percorrer suas ruas de pedra é como caminhar por um museu a céu aberto — e cada praça, fonte e ruína conta uma história.",
        highlights: [
          {
            title: "Coliseu",
            description:
              "O anfiteatro romano mais famoso do mundo, construído no século I d.C., é o símbolo maior da grandeza do Império Romano. Reserve ingresso antecipado.",
          },
          {
            title: "Cidade do Vaticano",
            description:
              "O menor país do mundo concentra tesouros incalculáveis: a Basílica de São Pedro, os Museus Vaticanos e a Capela Sistina com o teto de Michelangelo.",
          },
          {
            title: "Fontana di Trevi",
            description:
              "A fonte barroca mais famosa do mundo. A tradição diz que jogar uma moeda garante o retorno à cidade — chegue cedo para evitar as multidões.",
          },
          {
            title: "Culinária romana",
            description:
              "Carbonara, cacio e pepe, supplì e gelato artesanal. Roma tem uma identidade gastronômica fortíssima, com receitas que resistem há séculos.",
          },
        ],
      },
    ],
  },
  {
    name: "Ásia",
    slug: "asia",
    destinations: [
      {
        name: "Tóquio",
        slug: "tokyo",
        image:
          "https://images.unsplash.com/photo-1565618754154-c8011e5df2a6?auto=format&fit=crop&w=1200&q=80",
        country: "Japão",
        language: "Japonês",
        currency: "Iene (¥)",
        bestTime: "Mar – Mai · Out – Nov",
        intro:
          "Tóquio é uma metrópole de contrastes onde templos centenários convivem com arranha-céus futuristas, e a agitação dos grandes cruzamentos se dissolve em bairros tranquilos de ruas arborizadas. A capital japonesa é um destino que surpreende em cada detalhe — na precisão dos transportes, na cortesia das pessoas, na riqueza cultural e na cena gastronômica que rivaliza com qualquer cidade do mundo.",
        highlights: [
          {
            title: "Shibuya e Shinjuku",
            description:
              "O famoso cruzamento de Shibuya e os arranha-céus iluminados de Shinjuku representam o lado mais vibrante e contemporâneo de Tóquio.",
          },
          {
            title: "Templo Senso-ji",
            description:
              "O templo budista mais antigo de Tóquio, no bairro histórico de Asakusa, é um dos lugares mais fotogênicos e culturalmente ricos da cidade.",
          },
          {
            title: "Gastronomia japonesa",
            description:
              "De ramen e sushi a wagyu e tempurá, Tóquio tem mais restaurantes com estrelas Michelin do que qualquer outra cidade do planeta.",
          },
          {
            title: "Harajuku e Akihabara",
            description:
              "Harajuku é o epicentro da moda jovem japonesa; Akihabara é o paraíso da tecnologia e da cultura pop. Dois mundos, mesma cidade.",
          },
        ],
      },
      {
        name: "Bali",
        slug: "bali",
        image:
          "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=1200&q=80",
        country: "Indonésia",
        language: "Balinês / Indonésio",
        currency: "Rupia (IDR)",
        bestTime: "Abr – Out (estação seca)",
        intro:
          "Bali é uma ilha que une natureza exuberante, espiritualidade profunda e uma hospitalidade que raramente se encontra em outro lugar. Das terraças de arroz esverdeadas de Tegalalang às praias douradas de Seminyak e aos templos suspensos sobre o oceano, Bali oferece paisagens de tirar o fôlego em cada direção. É um destino para quem quer desacelerar, se reconectar e vivenciar uma cultura singular.",
        highlights: [
          {
            title: "Terraços de arroz de Tegalalang",
            description:
              "Uma das paisagens mais reconhecíveis da Ásia: terraços de arroz esculpidos em encostas verdes, a poucos quilômetros de Ubud.",
          },
          {
            title: "Ubud",
            description:
              "O coração cultural de Bali reúne galerias de arte, mercados artesanais, aulas de culinária e a famosa Floresta dos Macacos.",
          },
          {
            title: "Templo Tanah Lot",
            description:
              "Um dos templos mais sagrados de Bali, construído sobre uma rocha no oceano. O pôr do sol visto daqui é uma experiência inesquecível.",
          },
          {
            title: "Praias do sul",
            description:
              "Seminyak, Kuta e Uluwatu oferecem desde praias agitadas com festas à beira-mar até falésias desertas com ondas perfeitas para o surf.",
          },
        ],
      },
    ],
  },
  {
    name: "Américas",
    slug: "americas",
    destinations: [
      {
        name: "Nova York",
        slug: "new-york",
        image:
          "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=80",
        country: "Estados Unidos",
        language: "Inglês",
        currency: "Dólar (USD)",
        bestTime: "Abr – Jun · Set – Nov",
        intro:
          "Nova York é a cidade que nunca dorme — e que nunca para de surpreender. Com seus arranha-céus icônicos, museus de classe mundial, cenas gastronômicas multiculturais e uma energia que poucos lugares do planeta conseguem replicar, a Grande Maçã é simultaneamente intimidadora e irresistível. De Manhattan ao Brooklyn, cada bairro tem uma personalidade distinta e histórias para contar.",
        highlights: [
          {
            title: "Central Park",
            description:
              "843 acres de natureza no meio de Manhattan. Perfeito para caminhadas, piqueniques e observar o contraste entre a cidade e o verde.",
          },
          {
            title: "Times Square",
            description:
              "O cruzamento mais famoso do mundo, tomado por painéis luminosos gigantes e uma energia inconfundível — melhor apreciado ao anoitecer.",
          },
          {
            title: "Museus de Manhattan",
            description:
              "O MoMA, o Met e o Museu de História Natural estão entre os melhores do planeta. Cada um exige pelo menos meio dia de visita.",
          },
          {
            title: "Brooklyn Bridge e DUMBO",
            description:
              "A travessia a pé pela Brooklyn Bridge oferece vistas cinematográficas de Manhattan; o bairro DUMBO ao lado tem galerias, cafés e charme único.",
          },
        ],
      },
      {
        name: "Rio de Janeiro",
        slug: "rio-de-janeiro",
        image:
          "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=1200&q=80",
        country: "Brasil",
        language: "Português",
        currency: "Real (R$)",
        bestTime: "Mai – Set (menos chuva)",
        intro:
          "O Rio de Janeiro é uma cidade de beleza exuberante e personalidade única, onde a natureza — montanhas, florestas e praias — divide espaço com uma cultura vibrante e um povo acolhedor. Das areias de Ipanema ao alto do Corcovado, o Rio oferece panoramas que figuram entre os mais belos do mundo. É uma cidade que se vive na rua, no ritmo do samba, do futebol e do calor humano carioca.",
        highlights: [
          {
            title: "Cristo Redentor",
            description:
              "Um dos símbolos mais reconhecíveis do mundo, no alto do Corcovado, oferece uma vista de 360° que abrange toda a cidade, a Baía de Guanabara e o oceano.",
          },
          {
            title: "Pão de Açúcar",
            description:
              "O teleférico até o Pão de Açúcar é um passeio icônico com vistas deslumbrantes — especialmente ao pôr do sol, quando a cidade toda se ilumina.",
          },
          {
            title: "Praias de Ipanema e Copacabana",
            description:
              "Muito mais que praias, elas são palcos da vida carioca: futebol de areia, música ao vivo, quiosques e o famoso calçadão de mosaico português.",
          },
          {
            title: "Santa Teresa e Lapa",
            description:
              "O bairro boêmio de Santa Teresa, com seus ateliês e restaurantes, e a Lapa, com seus arcos históricos e vida noturna, revelam a alma artística do Rio.",
          },
        ],
      },
    ],
  },
  {
    name: "África",
    slug: "africa",
    destinations: [
      {
        name: "Cidade do Cabo",
        slug: "cape-town",
        image:
          "https://images.unsplash.com/photo-1626894169601-482d26b23f35?auto=format&fit=crop&w=1200&q=80",
        country: "África do Sul",
        language: "Inglês · Africâner · Xhosa",
        currency: "Rand (ZAR)",
        bestTime: "Out – Abr (verão local)",
        intro:
          "Cidade do Cabo é uma das cidades mais belas e diversas do planeta. Encravada entre a icônica Table Mountain e o Atlântico, ela combina paisagens dramáticas, vinhedos premiados, praias espetaculares e uma cena gastronômica e cultural em plena ascensão. A Cidade do Cabo é também uma porta de entrada para a vida selvagem africana e para a beleza inigualável do Cabo da Boa Esperança.",
        highlights: [
          {
            title: "Table Mountain",
            description:
              "O platô de topo plano visível de toda a cidade é um parque nacional com trilhas incríveis. O teleférico oferece vistas de 360° do Atlântico e da cidade.",
          },
          {
            title: "Cabo da Boa Esperança",
            description:
              "O ponto mais sudoeste da África é um parque natural onde ventos poderosos, penhascos e flora única criam uma paisagem verdadeiramente fim-do-mundo.",
          },
          {
            title: "V&A Waterfront",
            description:
              "O porto histórico transformado em centro de cultura, gastronomia e entretenimento, com vista direta para Table Mountain — ótimo para qualquer momento do dia.",
          },
          {
            title: "Boulders Beach",
            description:
              "Uma praia protegida onde colônias de pinguins-africanos vivem entre as rochas — um dos encontros com a natureza mais incomuns da África do Sul.",
          },
        ],
      },
      {
        name: "Serengeti",
        slug: "serengeti",
        image:
          "https://images.unsplash.com/photo-1526319238109-524eecb9b913?auto=format&fit=crop&w=1200&q=80",
        country: "Tanzânia",
        language: "Suaíli · Inglês",
        currency: "Xelim tanzaniano (TZS)",
        bestTime: "Jun – Out (Grande Migração)",
        intro:
          "O Serengeti é um dos últimos lugares do planeta onde a natureza funciona em sua escala mais bruta e espetacular. Este parque nacional da Tanzânia abriga a Grande Migração — o maior movimento de animais terrestres do mundo — além dos Big Five e uma vastidão de savana que se estende até o horizonte. Visitar o Serengeti é uma experiência que transforma a perspectiva de quem vai.",
        highlights: [
          {
            title: "Grande Migração",
            description:
              "Mais de 1,5 milhão de gnus e zebras cruzando a savana e os rios em busca de pastagem — considerado o maior espetáculo da natureza na Terra.",
          },
          {
            title: "Os Big Five",
            description:
              "Leão, leopardo, elefante, búfalo e rinoceronte. O Serengeti é um dos melhores lugares do mundo para avistar todos os cinco em vida selvagem.",
          },
          {
            title: "Cratera de Ngorongoro",
            description:
              "A maior cratera vulcânica intacta do mundo, a poucos quilômetros do Serengeti, abriga uma concentração extraordinária de animais durante todo o ano.",
          },
          {
            title: "Balão sobre a savana",
            description:
              "Sobrevoar o Serengeti em um balão ao amanhecer, com a paisagem dourada se estendendo abaixo, é uma das experiências mais memoráveis que um viajante pode ter.",
          },
        ],
      },
    ],
  },
];

export type Experience = {
  name: string;
  slug: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    name: "Trilhas",
    slug: "hiking",
    image:
      "https://images.unsplash.com/photo-1562593028-1fe2d15bde36?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Passeios Culturais",
    slug: "cultural-tours",
    image:
      "https://images.unsplash.com/photo-1538460120076-604b93a2ce88?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Vida Selvagem",
    slug: "wildlife",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Praias",
    slug: "beaches",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
];
