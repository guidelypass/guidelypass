import type { Locale } from "./i18n";

export type ProfileTag = "family" | "couple" | "friends";
export type WeatherType = "outdoor" | "indoor" | "both";
export type AttractionCategory =
  | "monument"
  | "museum"
  | "church"
  | "square"
  | "park"
  | "neighborhood"
  | "experience";

export type Attraction = {
  name: string;
  neighborhood: string;
  category: AttractionCategory;
  weather: WeatherType;
  profiles: ProfileTag[];
  description: string;
  duration: string;
  cost: string;
  image: string;
};

export type Top5Item = {
  name: string;
  description: string;
  tip: string;
  image: string;
};

export type Restaurant = {
  name: string;
  neighborhood: string;
  type: string;
  priceRange: string;
  profiles: ProfileTag[];
  description: string;
  mustOrder: string;
};

export type PracticalItem = { label: string; value: string };

export type RomeContent = {
  hero: { subtitle: string; tags: string[] };
  overview: { paragraphs: string[]; cards: { title: string; body: string }[] };
  practicalInfo: PracticalItem[];
  attractions: Attraction[];
  top5: Top5Item[];
  whereToEat: Restaurant[];
  lockedTeasers: {
    s06: string;
    s07: string;
    s08: string;
    s09: string;
    s10: string;
    s11: string;
  };
};

// ─── Category ordering ────────────────────────────────────────────────────────

export const categoryOrder: AttractionCategory[] = [
  "monument",
  "museum",
  "church",
  "square",
  "park",
  "neighborhood",
  "experience",
];

// ─── PT content ───────────────────────────────────────────────────────────────

const pt: RomeContent = {
  hero: {
    subtitle:
      "A Cidade Eterna — 2.800 anos de história concentrados numa das cidades mais fascinantes do mundo.",
    tags: ["Itália", "Europa", "Italiano", "Euro", "3–5 dias"],
  },
  overview: {
    paragraphs: [
      "Roma é a única cidade do mundo onde você pode tomar um café ao lado de um aqueduto de dois mil anos, visitar a maior coleção de arte da história humana à tarde e jantar em ruelas medievais iluminadas à noite. A Cidade Eterna não é apenas um destino turístico — é uma experiência que muda a forma como se vê o mundo.",
      "Capital da Itália e berço da civilização ocidental, Roma abriga mais de 900 igrejas, 280 fontes e um número incontável de museus, ruínas e monumentos. Cada bairro tem sua própria identidade: o Centro Histórico com suas praças barrocas, o Vaticano com sua grandiosidade religiosa, Trastevere com seu charme medieval, Prati com sua elegância burguesa.",
      "Não existe Roma em dois dias. A cidade merece tempo — não para ver tudo, mas para sentir o ritmo lento das suas piazze, o barulho das motos entre as ruínas, o cheiro do café espresso no bar da esquina às sete da manhã.",
    ],
    cards: [
      {
        title: "Melhor época para visitar",
        body: "Primavera (março a maio) e outono (setembro a novembro) oferecem clima agradável e multidões menores. Julho e agosto são extremamente quentes e lotados. Dezembro tem um charme especial com as decorações de Natal e os mercados da Piazza Navona.",
      },
      {
        title: "Quantos dias são necessários",
        body: "Três dias cobrem os pontos principais sem pressa. Cinco dias permitem explorar bairros, museus menos famosos e fazer passeios de meio dia. Uma semana completa é o ideal para quem quer vivenciar Roma além do roteiro turístico.",
      },
      {
        title: "Nível de dificuldade",
        body: "Roma é muito caminhável, mas o calçamento irregular e as longas distâncias entre atrações exigem bom preparo físico. O metrô tem apenas duas linhas, então muita coisa se faz a pé ou de ônibus. Não é indicado dirigir no centro histórico.",
      },
    ],
  },
  practicalInfo: [
    { label: "País", value: "Itália" },
    { label: "Idioma", value: "Italiano (inglês funciona bem em áreas turísticas)" },
    { label: "Moeda", value: "Euro (€) — cartão aceito na maioria dos lugares" },
    { label: "Fuso horário", value: "CET (UTC+1) — verão CEST (UTC+2)" },
    { label: "Tomadas", value: "Tipo C e F (europeu padrão) — 220V" },
    { label: "Emergências", value: "112 (geral) · 118 (ambulância) · 113 (polícia)" },
    {
      label: "Como chegar",
      value:
        "Aeroporto Leonardo da Vinci (FCO) a 30 km do centro. Trem Leonardo Express em 32 min até a Termini (€14).",
    },
    {
      label: "Transporte local",
      value: "Metrô (2 linhas), ônibus e táxi. O centro histórico é melhor a pé. App: Moovit.",
    },
    {
      label: "Conectividade",
      value: "SIM turista da TIM ou Vodafone na chegada. Wi-Fi na maioria dos cafés e hotéis.",
    },
    {
      label: "Documentos",
      value: "Brasileiros precisam apenas de passaporte válido para até 90 dias na zona Schengen.",
    },
    {
      label: "Água da torneira",
      value:
        "Potável em toda a cidade. As nasoni (torneiras públicas) oferecem água fresca e gratuita.",
    },
    {
      label: "Gorjeta",
      value:
        "Não obrigatória, mas bem-vinda. Em restaurantes, 10% é suficiente. Não é costume em bares de balcão.",
    },
  ],
  attractions: [
    // Monuments
    {
      name: "Coliseu",
      neighborhood: "Centro Histórico",
      category: "monument",
      weather: "both",
      profiles: ["family", "couple", "friends"],
      description:
        "O maior anfiteatro romano já construído, erguido no século I d.C. para abrigar até 80 mil espectadores. Palco de combates de gladiadores e espetáculos públicos, é o símbolo máximo do Império Romano. Reserve os ingressos com antecedência — as filas sem reserva ultrapassam duas horas.",
      duration: "2–3 horas",
      cost: "€18",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=80",
    },
    {
      name: "Fórum Romano",
      neighborhood: "Centro Histórico",
      category: "monument",
      weather: "outdoor",
      profiles: ["family", "couple", "friends"],
      description:
        "O coração político e social da Roma Antiga, onde senadores debatiam e imperadores desfilavam em triunfo. Caminhar entre os templos, arcos e basílicas do Fórum é percorrer dois mil anos de história em poucos metros. O ingresso está incluído no bilhete do Coliseu.",
      duration: "1–2 horas",
      cost: "Incluso no Coliseu",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
    },
    {
      name: "Monte Palatino",
      neighborhood: "Centro Histórico",
      category: "monument",
      weather: "outdoor",
      profiles: ["couple", "friends"],
      description:
        "Uma das sete colinas de Roma e o lugar onde, segundo a lenda, Rômulo fundou a cidade. As ruínas dos palácios imperiais oferecem vistas panorâmicas sobre o Fórum Romano e o Circo Máximo. Incluso no ingresso do Coliseu e muito menos visitado que os outros dois sítios.",
      duration: "1 hora",
      cost: "Incluso no Coliseu",
      image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=900&q=80",
    },
    {
      name: "Pantheon",
      neighborhood: "Centro Histórico",
      category: "monument",
      weather: "indoor",
      profiles: ["family", "couple", "friends"],
      description:
        "Construído em 125 d.C., é o edifício da Antiguidade melhor preservado do mundo. Sua cúpula com o famoso óculo aberto ao céu continua sendo uma das maiores maravilhas da engenharia humana — dois mil anos depois, ainda é a maior cúpula de concreto não armado já construída.",
      duration: "30–45 min",
      cost: "€5",
      image: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=900&q=80",
    },
    {
      name: "Castel Sant'Angelo",
      neighborhood: "Prati",
      category: "monument",
      weather: "both",
      profiles: ["family", "couple", "friends"],
      description:
        "Construído como mausoléu do imperador Adriano no século II, o castelo foi fortaleza, prisão e residência papal ao longo dos séculos. O percurso interno narra toda essa história através de cômodos ricamente decorados. Do terraço, a vista sobre o Tibre e a Basílica de São Pedro é uma das mais bonitas de Roma.",
      duration: "1,5–2 horas",
      cost: "€15",
      image: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=900&q=80",
    },
    {
      name: "Arco de Constantino",
      neighborhood: "Centro Histórico",
      category: "monument",
      weather: "outdoor",
      profiles: ["family", "couple", "friends"],
      description:
        "Erguido em 315 d.C. para celebrar a vitória de Constantino sobre Maxêncio, é o maior arco triunfal de Roma e um dos mais bem preservados da Antiguidade. Fica entre o Coliseu e o Monte Palatino e pode ser visitado gratuitamente — uma parada obrigatória no roteiro do Centro Histórico.",
      duration: "15–20 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&q=80",
    },
    {
      name: "Circo Máximo",
      neighborhood: "Aventino",
      category: "monument",
      weather: "outdoor",
      profiles: ["family", "friends"],
      description:
        "O maior estádio da Antiguidade, com capacidade para 250 mil espectadores, era o palco das famosas corridas de bigas que empolgavam os romanos por horas. Hoje é um parque arqueológico onde os romanos caminham, fazem piquenique e praticam esportes — uma das experiências mais autênticas de Roma.",
      duration: "30–45 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1515542622106-078bda9088b2?w=900&q=80",
    },
    {
      name: "Via Appia Antica",
      neighborhood: "Appia Antica",
      category: "monument",
      weather: "outdoor",
      profiles: ["couple", "friends"],
      description:
        "A 'rainha das estradas' romanas, construída em 312 a.C. para ligar Roma ao sul da Itália, ainda conserva grandes trechos do calçamento original. Flanqueada por pinheiros centenários, mausoléus e lápides, é uma das experiências mais evocativas de Roma — especialmente ao pôr do sol de domingo, quando a estrada é fechada para carros.",
      duration: "2–3 horas",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1543002588-84ebe14a5a8e?w=900&q=80",
    },
    // Museums
    {
      name: "Museus do Vaticano e Capela Sistina",
      neighborhood: "Vaticano",
      category: "museum",
      weather: "indoor",
      profiles: ["family", "couple", "friends"],
      description:
        "Um dos maiores complexos museológicos do mundo, com mais de 70 mil obras acumuladas pelos papas ao longo de séculos. O percurso culmina na Capela Sistina, onde o teto pintado por Michelangelo entre 1508 e 1512 permanece como uma das maiores obras de arte da humanidade. Reserve com meses de antecedência — as filas sem reserva chegam a quatro horas.",
      duration: "3–4 horas",
      cost: "€17–27",
      image: "https://images.unsplash.com/photo-1506700065-54c9aca14cda?w=900&q=80",
    },
    {
      name: "Galleria Borghese",
      neighborhood: "Villa Borghese",
      category: "museum",
      weather: "indoor",
      profiles: ["couple", "friends"],
      description:
        "Considerada a 'rainha das galerias privadas', abriga o maior acervo de esculturas de Gian Lorenzo Bernini e obras fundamentais de Caravaggio, Rafael e Tiziano. A entrada é estritamente por reserva, com sessões de duas horas — um formato que garante uma experiência íntima e sem aglomeração. Reserve com semanas de antecedência.",
      duration: "2 horas (sessão fixa)",
      cost: "€15",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    },
    {
      name: "Musei Capitolini",
      neighborhood: "Capitolino",
      category: "museum",
      weather: "indoor",
      profiles: ["couple", "friends"],
      description:
        "Os museus mais antigos do mundo, fundados em 1471 pelo Papa Sisto IV. A coleção inclui a célebre Loba Capitolina, a estátua equestre dourada de Marco Aurélio e esculturas gregas e romanas de rara qualidade. Do terraço, a vista sobre o Fórum Romano é simplesmente extraordinária.",
      duration: "2–3 horas",
      cost: "€15",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=900&q=80",
    },
    {
      name: "Centrale Montemartini",
      neighborhood: "Ostiense",
      category: "museum",
      weather: "indoor",
      profiles: ["couple", "friends"],
      description:
        "Joia escondida: esculturas gregas e romanas extraordinárias expostas dentro de uma usina elétrica industrial dos anos 1930. O contraste entre o mármore da Antiguidade e as máquinas de ferro do século XX cria um ambiente visualmente fascinante e absolutamente único. Uma das visitas mais surpreendentes de Roma para quem já conhece os museus principais.",
      duration: "1,5–2 horas",
      cost: "€8",
      image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=900&q=80",
    },
    {
      name: "Museo Nazionale Romano",
      neighborhood: "Termini",
      category: "museum",
      weather: "indoor",
      profiles: ["friends"],
      description:
        "Distribuído em quatro sedes, reúne uma das maiores coleções de arte romana do mundo. A sede do Palazzo Massimo alle Terme é a mais impressionante, com afrescos e mosaicos de villas imperiais que raramente aparecem nos guias comuns. Uma visita pouco turística e de altíssimo nível.",
      duration: "1,5–2 horas",
      cost: "€10",
      image: "https://images.unsplash.com/photo-1569930784474-e1f6c4e73aad?w=900&q=80",
    },
    // Churches
    {
      name: "Basílica de São Pedro",
      neighborhood: "Vaticano",
      category: "church",
      weather: "both",
      profiles: ["family", "couple", "friends"],
      description:
        "A maior basílica do mundo cristão, erguida sobre o túmulo do apóstolo Pedro. Com obras de Michelangelo — incluindo a Pietà e o projeto da cúpula — além de peças de Bernini e Rafael, é um dos maiores conjuntos artísticos da humanidade. A entrada é gratuita. A subida à cúpula oferece a melhor vista de Roma em altura.",
      duration: "1,5–2 horas",
      cost: "Gratuito (cúpula €8–10)",
      image: "https://images.unsplash.com/photo-1597423498219-04418210827d?w=900&q=80",
    },
    {
      name: "San Giovanni in Laterano",
      neighborhood: "Laterano",
      category: "church",
      weather: "indoor",
      profiles: ["couple", "friends"],
      description:
        "A catedral oficial do Papa e a mais antiga basílica cristã de Roma, fundada pelo imperador Constantino no século IV. É historicamente mais importante que São Pedro — sede do bispo de Roma por quase mil anos. Muito menos visitada que as outras grandes basílicas, o que torna a experiência mais tranquila e contemplativa.",
      duration: "45 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1548783300-77a5b3a01ccd?w=900&q=80",
    },
    {
      name: "San Clemente al Laterano",
      neighborhood: "Laterano",
      category: "church",
      weather: "indoor",
      profiles: ["couple", "friends"],
      description:
        "Uma das visitas mais fascinantes de Roma: três camadas de história sobrepostas acessíveis ao visitante. No nível superior, uma basílica medieval do século XII com mosaicos dourados. Abaixo, uma basílica paleocristã do século IV. Mais abaixo ainda, um templo de Mitra do século I d.C. Uma viagem literal no tempo.",
      duration: "1 hora",
      cost: "€10",
      image: "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?w=900&q=80",
    },
    {
      name: "San Luigi dei Francesi",
      neighborhood: "Centro Histórico",
      category: "church",
      weather: "indoor",
      profiles: ["couple", "friends"],
      description:
        "Uma igreja que esconde três pinturas monumentais de Caravaggio na Cappella Contarelli. 'A Vocação de São Mateus', 'São Mateus e o Anjo' e 'O Martírio de São Mateus' são consideradas entre as obras mais importantes da história da arte. O jogo de luz e sombra que Caravaggio inventou nessas telas mudou para sempre a pintura ocidental.",
      duration: "20–30 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=900&q=80",
    },
    {
      name: "Santa Maria in Trastevere",
      neighborhood: "Trastevere",
      category: "church",
      weather: "indoor",
      profiles: ["couple", "friends"],
      description:
        "Considerada a primeira igreja dedicada à Virgem Maria em Roma, fundada no século III. Os mosaicos dourados byzantinos do século XII na abside são extraordinários — representam a Virgem entronizada ao lado de Cristo, um tema revolucionário para a época. A praça em frente é uma das mais animadas de Trastevere à noite.",
      duration: "30 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1579033461380-adb47c35ef55?w=900&q=80",
    },
    // Squares & Fountains
    {
      name: "Fontana di Trevi",
      neighborhood: "Centro Histórico",
      category: "square",
      weather: "both",
      profiles: ["family", "couple", "friends"],
      description:
        "A maior e mais famosa fonte barroca do mundo, esculpida por Nicola Salvi no século XVIII e concluída em 1762. Netuno domina a cena sobre uma concha marinha, cercado por cavalos marinhos e tritões. A tradição de jogar uma moeda com a mão direita por cima do ombro esquerdo para garantir o retorno a Roma é conhecida em todo o mundo.",
      duration: "30–45 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1515542622106-078bda9088b2?w=900&q=80",
    },
    {
      name: "Piazza Navona",
      neighborhood: "Centro Histórico",
      category: "square",
      weather: "both",
      profiles: ["family", "couple", "friends"],
      description:
        "A mais bela praça barroca de Roma, construída sobre o estádio oval do imperador Domiciano no século I d.C. — o formato alongado da praça revela exatamente a planta do antigo estádio. Tem três fontes, sendo a Fontana dei Quattro Fiumi de Bernini a mais famosa, com obelisco egípcio. Artistas, cafés e animação o dia todo.",
      duration: "30–60 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=900&q=80",
    },
    {
      name: "Piazza di Spagna e Escadaria",
      neighborhood: "Centro Histórico",
      category: "square",
      weather: "both",
      profiles: ["family", "couple", "friends"],
      description:
        "A Escadaria de Trinità dei Monti, com seus 135 degraus construídos entre 1723 e 1725, é um dos símbolos mais icônicos de Roma. Na primavera fica coberta de azaleias cor-de-rosa, criando uma das imagens mais reproduzidas da cidade. Na base, a Fontana della Barcaccia do Bernini pai, datada de 1627.",
      duration: "30–45 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1594818898109-44004cf25e76?w=900&q=80",
    },
    {
      name: "Piazza del Popolo",
      neighborhood: "Flaminio",
      category: "square",
      weather: "outdoor",
      profiles: ["family", "couple", "friends"],
      description:
        "Uma das maiores e mais imponentes praças de Roma, com um obelisco egípcio de 3.200 anos no centro. Durante séculos foi o ponto de chegada de viajantes vindos do norte da Europa pela Via Flaminia. As duas igrejas gêmeas que flanqueiam a entrada da Via del Corso criam um dos cenários urbanos mais elegantes de Roma.",
      duration: "30–45 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1568822617270-2c1e0f5f0b0c?w=900&q=80",
    },
    {
      name: "Campo de' Fiori",
      neighborhood: "Centro Histórico",
      category: "square",
      weather: "outdoor",
      profiles: ["couple", "friends"],
      description:
        "A praça mais animada de Roma, famosa pelo mercado matinal de frutas, verduras, especiarias e flores que funciona há séculos. A estátua de Giordano Bruno no centro lembra que foi aqui que o filósofo foi queimado pela Inquisição em 1600. À noite transforma-se no point favorito dos jovens romanos e estudantes estrangeiros.",
      duration: "30–60 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1578846655962-b13a2b60ef66?w=900&q=80",
    },
    {
      name: "Piazza Venezia e Altare della Patria",
      neighborhood: "Centro Histórico",
      category: "square",
      weather: "both",
      profiles: ["family", "couple", "friends"],
      description:
        "O Altare della Patria — ironicamente apelidado pelos romanos de 'máquina de escrever' ou 'bolo de noiva' — é o monumento em mármore branco erguido em 1911 para celebrar a unificação italiana. O terraço panorâmico no topo oferece a melhor e mais ampla vista 360° de Roma, incluindo o Fórum e o Coliseu.",
      duration: "30–60 min",
      cost: "Gratuito (terraço €7)",
      image: "https://images.unsplash.com/photo-1600200424-7e8d25b8cedc?w=900&q=80",
    },
    // Parks
    {
      name: "Villa Borghese",
      neighborhood: "Villa Borghese",
      category: "park",
      weather: "outdoor",
      profiles: ["family", "couple", "friends"],
      description:
        "Com cerca de 80 hectares de jardins, fontes, lagos e pavilhões, Villa Borghese é um dos maiores parques centrais de Roma e o principal pulmão verde da cidade. Além da Galleria Borghese, abriga o Bioparco (zoológico) e o terraço do Pincio, de onde se tem uma das vistas mais bonitas de Roma ao pôr do sol. Um oásis de tranquilidade a poucos passos do caos do centro.",
      duration: "2–4 horas",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1571462574-a9e49b8f19a3?w=900&q=80",
    },
    // Neighborhoods
    {
      name: "Trastevere",
      neighborhood: "Trastevere",
      category: "neighborhood",
      weather: "both",
      profiles: ["couple", "friends"],
      description:
        "O bairro mais charmoso e autêntico de Roma, habitado continuamente desde a Antiguidade. Ruelas de pedra coberta de hera, fachadas medievais cor de ferrugem, o cheiro de cozinha romana saindo pelas janelas. Durante o dia é tranquilo e pitoresco; à noite transforma-se no coração da vida social romana. O Roma que os romanos amam.",
      duration: "2–3 horas",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1579033461380-adb47c35ef55?w=900&q=80",
    },
    {
      name: "Quartiere Coppedè",
      neighborhood: "Trieste",
      category: "neighborhood",
      weather: "outdoor",
      profiles: ["couple", "friends"],
      description:
        "Um bairro fora do comum, projetado pelo arquiteto Gino Coppedè entre 1913 e 1926 num estilo que mistura livremente art nouveau, neobarroco, neomedieval e elementos fantásticos. Fachadas com mosaicos, arabescos, salamandras e gárgulas parecem saídas de um conto de fadas. Um dos segredos mais bem guardados de Roma.",
      duration: "45–60 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1607097938359-58f65eb49be9?w=900&q=80",
    },
    // Experiences
    {
      name: "Buraco de Fechadura dos Cavaleiros de Malta",
      neighborhood: "Aventino",
      category: "experience",
      weather: "outdoor",
      profiles: ["couple", "friends"],
      description:
        "No topo do Aventino, uma simples porta de madeira verde com um buraco de fechadura enquadra, ao fundo de um longo jardim perfeitamente alinhado de ciprestes, a cúpula de São Pedro — criando uma perspectiva óptica de três países (Itália, território da Ordem de Malta e Estado do Vaticano) em uma única imagem. Uma das cenas mais mágicas e pouco comentadas de Roma.",
      duration: "30 min",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1560707854-fb9a38bce5ef?w=900&q=80",
    },
    {
      name: "Catacumbas di Domitilla",
      neighborhood: "Appia Antica",
      category: "experience",
      weather: "indoor",
      profiles: ["family", "couple", "friends"],
      description:
        "As maiores catacumbas de Roma, com mais de 17 km de galerias subterrâneas escavadas no tufo vulcânico e afrescos do século II. Sepulturas de mais de 150 mil cristãos dos primeiros séculos, incluindo mártires. A visita guiada (obrigatória) leva o visitante a dezenas de metros de profundidade — uma experiência histórica e sensorial única.",
      duration: "1–1,5 horas",
      cost: "€10",
      image: "https://images.unsplash.com/photo-1543002588-84ebe14a5a8e?w=900&q=80",
    },
    {
      name: "Parco degli Acquedotti",
      neighborhood: "Appia Antica",
      category: "experience",
      weather: "outdoor",
      profiles: ["couple", "friends"],
      description:
        "Um parque arqueológico onde aquedutos romanos de 2.000 anos cruzam campos abertos numa paisagem quase bucólica. Seis dos onze grandes aquedutos de Roma passavam por aqui, transportando água por dezenas de quilômetros das montanhas ao coração da cidade. Os romanos vêm aqui passear, fazer piquenique e correr — nenhum turista, nenhuma fila, nenhum ingresso.",
      duration: "1,5–2 horas",
      cost: "Gratuito",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
    },
  ],
  top5: [
    {
      name: "Coliseu",
      description:
        "O anfiteatro romano mais famoso do mundo é o símbolo máximo da grandeza do Império. Nenhuma visita a Roma é completa sem entrar nele — de dentro, a escala do lugar é ainda mais impactante do que nas fotos.",
      tip: "Reserve online com antecedência. O ingresso inclui Fórum Romano e Monte Palatino — use os três no mesmo dia.",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    },
    {
      name: "Museus do Vaticano e Capela Sistina",
      description:
        "O maior acervo de arte acumulado na história da humanidade, coroado pelo teto de Michelangelo na Capela Sistina. Mesmo quem não tem interesse particular em arte fica impressionado.",
      tip: "Reserve com meses de antecedência. Os tours noturnos (apenas algumas datas no ano) permitem ver a Sistina quase vazia.",
      image: "https://images.unsplash.com/photo-1506700065-54c9aca14cda?w=800&q=80",
    },
    {
      name: "Fontana di Trevi",
      description:
        "A maior fonte barroca do mundo, cenário de filmes e de uma das tradições mais conhecidas do turismo mundial. É impossível não parar diante dela.",
      tip: "Visite de madrugada (2h–4h) para encontrá-la iluminada e praticamente vazia. De dia, é sempre lotada.",
      image: "https://images.unsplash.com/photo-1515542622106-078bda9088b2?w=800&q=80",
    },
    {
      name: "Pantheon",
      description:
        "O edifício da Antiguidade melhor preservado do mundo. Dois mil anos depois, sua cúpula ainda impressiona arquitetos e engenheiros do mundo inteiro.",
      tip: "Chegue cedo. Em dias de chuva, a água entra pelo óculo central e escoa pelo piso de mármore — um espetáculo raro e muito bonito.",
      image: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=800&q=80",
    },
    {
      name: "Basílica de São Pedro",
      description:
        "A maior e mais imponente basílica do mundo cristão, com obras de Michelangelo, Bernini e Rafael em cada detalhe. A praça de Bernini que a envolve é uma das mais belas do mundo.",
      tip: "Entrada gratuita, mas ombros e joelhos devem estar cobertos. Chegue cedo para evitar filas na entrada.",
      image: "https://images.unsplash.com/photo-1597423498219-04418210827d?w=800&q=80",
    },
  ],
  whereToEat: [
    {
      name: "Trattoria Da Enzo al 29",
      neighborhood: "Trastevere",
      type: "Trattoria tradicional",
      priceRange: "€€",
      profiles: ["couple", "friends"],
      description:
        "Uma das trattorias mais autênticas de Trastevere, sem cardápio turístico. A cacio e pepe e o carciofo alla romana são imperdíveis. Reserve com antecedência — fica sempre lotado.",
      mustOrder: "Cacio e pepe, carciofo alla romana",
    },
    {
      name: "Supplì Roma",
      neighborhood: "Trastevere / Centro",
      type: "Street food",
      priceRange: "€",
      profiles: ["family", "friends"],
      description:
        "A melhor casa de supplì de Roma — bolinhos de arroz fritos com recheio de ragù e mozzarella. Comida de rua romana por excelência, rápida e deliciosa, ideal entre visitas.",
      mustOrder: "Supplì al telefono, pizza al taglio",
    },
    {
      name: "Gelateria dei Gracchi",
      neighborhood: "Prati",
      type: "Gelateria artesanal",
      priceRange: "€",
      profiles: ["family", "couple", "friends"],
      description:
        "Considerada por muitos a melhor gelateria de Roma. Os sabores são feitos com frutas da época e ingredientes de alta qualidade. O pistache e o gianduja são extraordinários.",
      mustOrder: "Pistache, gianduja, fruta da época",
    },
    {
      name: "Osteria dell'Angelo",
      neighborhood: "Prati",
      type: "Osteria romana",
      priceRange: "€€",
      profiles: ["family", "couple", "friends"],
      description:
        "Cardápio fixo rotativo com os clássicos da cozinha romana — carbonara, amatriciana, abbacchio. Sem decoração elaborada, frequentada pelos romanos do bairro.",
      mustOrder: "Carbonara, abbacchio alla cacciatora",
    },
  ],
  lockedTeasers: {
    s06: "Roteiros otimizados por localização para 2, 3, 4 ou 5 dias em Roma, com variações para família, casal e grupos de amigos. Cada dia inclui horários sugeridos, tempo de deslocamento e alternativas para dias de chuva.",
    s07: "Cada bairro de Roma tem uma identidade própria. O guia completo apresenta os principais bairros com o que fazer, onde comer, onde ficar e qual o melhor momento para visitar cada um.",
    s08: "Recomendações de hospedagem organizadas por bairro, faixa de preço e perfil de viajante — de hostels a boutique hotels, com os prós e contras de cada região.",
    s09: "Mais de 30 restaurantes, trattorias, osterias, gelaterie, mercados e bares selecionados, organizados por tipo, bairro e ocasião — do café da manhã ao jantar tardio.",
    s10: "O que os guias comuns não contam: golpes comuns, o que evitar, horários menos movimentados para cada atração, apps essenciais e os comportamentos que denunciam o turista em Roma.",
    s11: "Tours guiados, experiências culinárias, visitas noturnas e passeios de dia completo selecionados para cada perfil de viajante — família, casal e grupos de amigos.",
  },
};

// ─── EN content ───────────────────────────────────────────────────────────────

const en: RomeContent = {
  hero: {
    subtitle:
      "The Eternal City — 2,800 years of history concentrated in one of the world's most fascinating cities.",
    tags: ["Italy", "Europe", "Italian", "Euro", "3–5 days"],
  },
  overview: {
    paragraphs: [
      "Rome is the only city in the world where you can have coffee next to a two-thousand-year-old aqueduct, spend the afternoon visiting the greatest art collection in human history, and dine in candle-lit medieval alleyways at night. The Eternal City is not just a tourist destination — it's an experience that changes the way you see the world.",
      "Italy's capital and the cradle of Western civilization, Rome is home to over 900 churches, 280 fountains and a countless number of museums, ruins and monuments. Each neighborhood has its own identity: the Centro Storico with its baroque piazzas, the Vatican with its religious grandeur, Trastevere with its medieval charm, Prati with its bourgeois elegance.",
      "There is no such thing as Rome in two days. The city deserves time — not to see everything, but to feel the slow rhythm of its piazzas, the sound of mopeds weaving between ruins, the smell of espresso from the corner bar at seven in the morning.",
    ],
    cards: [
      {
        title: "Best time to visit",
        body: "Spring (March to May) and autumn (September to November) offer pleasant weather and smaller crowds. July and August are extremely hot and crowded. December has a special charm with Christmas decorations and the markets at Piazza Navona.",
      },
      {
        title: "How many days you need",
        body: "Three days cover the main highlights without rushing. Five days allow you to explore neighborhoods, lesser-known museums and half-day trips. A full week is ideal for anyone who wants to experience Rome beyond the tourist trail.",
      },
      {
        title: "Difficulty level",
        body: "Rome is highly walkable, but the uneven cobblestones and long distances between sights require good fitness. The metro has only two lines, so most things are done on foot or by bus. Driving in the historic center is not recommended.",
      },
    ],
  },
  practicalInfo: [
    { label: "Country", value: "Italy" },
    { label: "Language", value: "Italian (English works well in tourist areas)" },
    { label: "Currency", value: "Euro (€) — card accepted in most places" },
    { label: "Time zone", value: "CET (UTC+1) — summer CEST (UTC+2)" },
    { label: "Power sockets", value: "Type C & F (standard European) — 220V" },
    { label: "Emergency numbers", value: "112 (general) · 118 (ambulance) · 113 (police)" },
    {
      label: "Getting there",
      value:
        "Leonardo da Vinci Airport (FCO) is 30 km from the center. Leonardo Express train: 32 min to Termini (€14).",
    },
    {
      label: "Getting around",
      value: "Metro (2 lines), buses and taxis. The historic center is best explored on foot. App: Moovit.",
    },
    {
      label: "Connectivity",
      value: "Tourist SIM from TIM or Vodafone on arrival. Wi-Fi in most cafés and hotels.",
    },
    {
      label: "Documents",
      value: "EU/US citizens need a valid passport for up to 90 days in the Schengen area.",
    },
    {
      label: "Tap water",
      value:
        "Drinkable throughout the city. The nasoni (public taps on street corners) provide free, cold water.",
    },
    {
      label: "Tipping",
      value:
        "Not mandatory, but appreciated. 10% in sit-down restaurants is fine. Not customary at bar counters.",
    },
  ],
  attractions: [
    // Monuments
    {
      name: "Colosseum",
      neighborhood: "Historic Centre",
      category: "monument" as const,
      weather: "both" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "The largest amphitheatre ever built, constructed in the 1st century AD to hold up to 80,000 spectators. Stage of gladiatorial combat and public spectacles, it is the ultimate symbol of the Roman Empire. Book tickets in advance — same-day queues exceed two hours.",
      duration: "2–3 hours",
      cost: "€18",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=80",
    },
    {
      name: "Roman Forum",
      neighborhood: "Historic Centre",
      category: "monument" as const,
      weather: "outdoor" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "The political and social heart of Ancient Rome, where senators debated and emperors paraded in triumph. Walking among its temples, arches and basilicas is to cross two thousand years of history in a few steps. Entry is included with the Colosseum ticket.",
      duration: "1–2 hours",
      cost: "Included with Colosseum",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
    },
    {
      name: "Palatine Hill",
      neighborhood: "Historic Centre",
      category: "monument" as const,
      weather: "outdoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "One of Rome's seven hills and the legendary birthplace of the city, where Romulus is said to have founded Rome. The ruins of the imperial palaces offer sweeping panoramic views over the Roman Forum and the Circus Maximus. Included with the Colosseum ticket and far less crowded.",
      duration: "1 hour",
      cost: "Included with Colosseum",
      image: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=900&q=80",
    },
    {
      name: "Pantheon",
      neighborhood: "Historic Centre",
      category: "monument" as const,
      weather: "indoor" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "Built in 125 AD, it is the best-preserved building from Antiquity in the world. Its dome with the famous open oculus to the sky remains one of the greatest engineering marvels in human history — two thousand years later, it is still the world's largest unreinforced concrete dome.",
      duration: "30–45 min",
      cost: "€5",
      image: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=900&q=80",
    },
    {
      name: "Castel Sant'Angelo",
      neighborhood: "Prati",
      category: "monument" as const,
      weather: "both" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "Originally built as Emperor Hadrian's mausoleum in the 2nd century, the castle served as a fortress, prison and papal residence over the centuries. The interior tour reveals richly decorated rooms at every level. From the terrace, the view over the Tiber and St Peter's Basilica is one of Rome's finest.",
      duration: "1.5–2 hours",
      cost: "€15",
      image: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=900&q=80",
    },
    {
      name: "Arch of Constantine",
      neighborhood: "Historic Centre",
      category: "monument" as const,
      weather: "outdoor" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "Erected in 315 AD to celebrate Constantine's victory over Maxentius, it is the largest triumphal arch in Rome and one of the best-preserved from Antiquity. Located between the Colosseum and the Palatine Hill, it can be visited for free — an unmissable stop on any Historic Centre itinerary.",
      duration: "15–20 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=900&q=80",
    },
    {
      name: "Circus Maximus",
      neighborhood: "Aventine",
      category: "monument" as const,
      weather: "outdoor" as const,
      profiles: ["family", "friends"] as ProfileTag[],
      description:
        "The largest stadium of Antiquity, with a capacity of 250,000 spectators, was the stage for the chariot races that thrilled Romans for hours. Today it is an archaeological park where locals walk, picnic and exercise — one of the most authentic experiences in Rome.",
      duration: "30–45 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1515542622106-078bda9088b2?w=900&q=80",
    },
    {
      name: "Via Appia Antica",
      neighborhood: "Appia Antica",
      category: "monument" as const,
      weather: "outdoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "The 'queen of roads', built in 312 BC to connect Rome with southern Italy, still preserves large stretches of its original stone paving. Flanked by century-old umbrella pines, mausoleums and ancient tombstones, it is one of Rome's most evocative experiences — especially on Sunday afternoons, when the road is closed to traffic.",
      duration: "2–3 hours",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1543002588-84ebe14a5a8e?w=900&q=80",
    },
    // Museums
    {
      name: "Vatican Museums & Sistine Chapel",
      neighborhood: "Vatican",
      category: "museum" as const,
      weather: "indoor" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "One of the world's largest museum complexes, with over 70,000 works accumulated by the popes over centuries. The route culminates in the Sistine Chapel, where Michelangelo's ceiling painted between 1508 and 1512 stands as one of the greatest works of art in human history. Book months in advance — same-day queues reach four hours.",
      duration: "3–4 hours",
      cost: "€17–27",
      image: "https://images.unsplash.com/photo-1506700065-54c9aca14cda?w=900&q=80",
    },
    {
      name: "Galleria Borghese",
      neighborhood: "Villa Borghese",
      category: "museum" as const,
      weather: "indoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "Considered the 'queen of private galleries', it holds the largest collection of sculptures by Gian Lorenzo Bernini as well as key works by Caravaggio, Raphael and Titian. Entry is strictly by reservation with fixed two-hour sessions — a format that guarantees an intimate, uncrowded experience. Book weeks in advance.",
      duration: "2 hours (fixed session)",
      cost: "€15",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    },
    {
      name: "Capitoline Museums",
      neighborhood: "Capitoline Hill",
      category: "museum" as const,
      weather: "indoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "The world's oldest public museums, founded in 1471 by Pope Sixtus IV. The collection includes the famous Capitoline Wolf, the gilded equestrian statue of Marcus Aurelius and exceptional Greek and Roman sculptures. From the terrace, the view over the Roman Forum is simply extraordinary.",
      duration: "2–3 hours",
      cost: "€15",
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=900&q=80",
    },
    {
      name: "Centrale Montemartini",
      neighborhood: "Ostiense",
      category: "museum" as const,
      weather: "indoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "A hidden gem: extraordinary Greek and Roman sculptures displayed inside a 1930s industrial power plant. The contrast between ancient marble and 20th-century iron machines creates a visually fascinating and utterly unique atmosphere. One of Rome's most surprising visits for those who have already seen the main museums.",
      duration: "1.5–2 hours",
      cost: "€8",
      image: "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?w=900&q=80",
    },
    {
      name: "Museo Nazionale Romano",
      neighborhood: "Termini",
      category: "museum" as const,
      weather: "indoor" as const,
      profiles: ["friends"] as ProfileTag[],
      description:
        "Spread across four sites, it houses one of the world's largest collections of Roman art. The Palazzo Massimo alle Terme branch is the most impressive, with frescoes and mosaics from imperial villas that rarely appear in mainstream guides. A low-tourist, high-quality visit.",
      duration: "1.5–2 hours",
      cost: "€10",
      image: "https://images.unsplash.com/photo-1569930784474-e1f6c4e73aad?w=900&q=80",
    },
    // Churches
    {
      name: "St Peter's Basilica",
      neighborhood: "Vatican",
      category: "church" as const,
      weather: "both" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "The world's largest Christian basilica, built over the tomb of the apostle Peter. With works by Michelangelo — including the Pietà and the dome design — as well as pieces by Bernini and Raphael, it is one of the greatest artistic ensembles in human history. Entry is free. Climbing the dome offers the best elevated view of Rome.",
      duration: "1.5–2 hours",
      cost: "Free (dome €8–10)",
      image: "https://images.unsplash.com/photo-1597423498219-04418210827d?w=900&q=80",
    },
    {
      name: "San Giovanni in Laterano",
      neighborhood: "Laterano",
      category: "church" as const,
      weather: "indoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "The Pope's official cathedral and Rome's oldest Christian basilica, founded by Emperor Constantine in the 4th century. It is historically more important than St Peter's — seat of the Bishop of Rome for nearly a thousand years. Much less visited than the other great basilicas, making for a calmer, more contemplative experience.",
      duration: "45 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1548783300-77a5b3a01ccd?w=900&q=80",
    },
    {
      name: "San Clemente al Laterano",
      neighborhood: "Laterano",
      category: "church" as const,
      weather: "indoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "One of Rome's most fascinating visits: three layers of history stacked directly on top of each other. On the upper level, a 12th-century medieval basilica with golden mosaics. Below, a 4th-century early Christian basilica. Deeper still, a 1st-century AD Mithraeum. A literal journey through time.",
      duration: "1 hour",
      cost: "€10",
      image: "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?w=900&q=80",
    },
    {
      name: "San Luigi dei Francesi",
      neighborhood: "Historic Centre",
      category: "church" as const,
      weather: "indoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "A church that conceals three monumental paintings by Caravaggio in the Contarelli Chapel. 'The Calling of Saint Matthew', 'Saint Matthew and the Angel' and 'The Martyrdom of Saint Matthew' are considered among the most important works in art history. The play of light and shadow Caravaggio invented here changed Western painting forever.",
      duration: "20–30 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=900&q=80",
    },
    {
      name: "Santa Maria in Trastevere",
      neighborhood: "Trastevere",
      category: "church" as const,
      weather: "indoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "Considered the first church dedicated to the Virgin Mary in Rome, founded in the 3rd century. The 12th-century Byzantine golden mosaics in the apse are extraordinary — depicting the Virgin enthroned beside Christ, a revolutionary image for the era. The piazza in front is one of Trastevere's liveliest spots at night.",
      duration: "30 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1579033461380-adb47c35ef55?w=900&q=80",
    },
    // Squares & Fountains
    {
      name: "Trevi Fountain",
      neighborhood: "Historic Centre",
      category: "square" as const,
      weather: "both" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "The world's largest and most famous baroque fountain, sculpted by Nicola Salvi in the 18th century and completed in 1762. Neptune dominates the scene on a shell-shaped chariot, flanked by sea horses and tritons. The tradition of tossing a coin over your left shoulder with your right hand to guarantee a return to Rome is known worldwide.",
      duration: "30–45 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1515542622106-078bda9088b2?w=900&q=80",
    },
    {
      name: "Piazza Navona",
      neighborhood: "Historic Centre",
      category: "square" as const,
      weather: "both" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "Rome's most beautiful baroque piazza, built over the oval stadium of Emperor Domitian in the 1st century AD — the elongated shape of the square still reveals the exact footprint of the ancient stadium. It has three fountains, the most famous being Bernini's Fontana dei Quattro Fiumi with its Egyptian obelisk. Artists, cafés and life all day long.",
      duration: "30–60 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=900&q=80",
    },
    {
      name: "Spanish Steps & Piazza di Spagna",
      neighborhood: "Historic Centre",
      category: "square" as const,
      weather: "both" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "The Trinità dei Monti staircase, with its 135 steps built between 1723 and 1725, is one of Rome's most iconic landmarks. In spring it is covered in pink azaleas, creating one of the city's most photographed images. At the base, Bernini's father's Fontana della Barcaccia, dating from 1627.",
      duration: "30–45 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1594818898109-44004cf25e76?w=900&q=80",
    },
    {
      name: "Piazza del Popolo",
      neighborhood: "Flaminio",
      category: "square" as const,
      weather: "outdoor" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "One of Rome's largest and most imposing piazzas, with a 3,200-year-old Egyptian obelisk at its centre. For centuries it was the arrival point for travelers coming from northern Europe via the Via Flaminia. The twin churches flanking the entrance to Via del Corso create one of Rome's most elegant urban scenes.",
      duration: "30–45 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1568822617270-2c1e0f5f0b0c?w=900&q=80",
    },
    {
      name: "Campo de' Fiori",
      neighborhood: "Historic Centre",
      category: "square" as const,
      weather: "outdoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "Rome's most lively piazza, famous for its morning market selling fruit, vegetables, spices and flowers that has operated for centuries. The statue of Giordano Bruno at its centre recalls that it was here the philosopher was burned by the Inquisition in 1600. By night it becomes the favourite meeting spot for young Romans and foreign students.",
      duration: "30–60 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1578846655962-b13a2b60ef66?w=900&q=80",
    },
    {
      name: "Piazza Venezia & Altar of the Fatherland",
      neighborhood: "Historic Centre",
      category: "square" as const,
      weather: "both" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "The Altare della Patria — nicknamed by Romans the 'typewriter' or 'wedding cake' — is the imposing white marble monument erected in 1911 to celebrate Italian unification. The panoramic terrace at the top offers the best and most sweeping 360° view of Rome, including the Forum and the Colosseum.",
      duration: "30–60 min",
      cost: "Free (terrace €7)",
      image: "https://images.unsplash.com/photo-1600200424-7e8d25b8cedc?w=900&q=80",
    },
    // Parks
    {
      name: "Villa Borghese",
      neighborhood: "Villa Borghese",
      category: "park" as const,
      weather: "outdoor" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "With around 80 hectares of gardens, fountains, lakes and pavilions, Villa Borghese is one of Rome's largest central parks and the city's main green lung. Besides the Galleria Borghese, it houses the Bioparco (zoo) and the Pincio terrace, which offers one of the finest views of Rome at sunset. An oasis of calm just steps from the chaos of the city centre.",
      duration: "2–4 hours",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1571462574-a9e49b8f19a3?w=900&q=80",
    },
    // Neighborhoods
    {
      name: "Trastevere",
      neighborhood: "Trastevere",
      category: "neighborhood" as const,
      weather: "both" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "Rome's most charming and authentic neighbourhood, continuously inhabited since Antiquity. Cobblestone alleys covered in ivy, medieval rust-coloured façades, the smell of Roman cooking drifting from open windows. Quiet and picturesque by day; the heart of Roman social life by night. The Rome that Romans love.",
      duration: "2–3 hours",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1579033461380-adb47c35ef55?w=900&q=80",
    },
    {
      name: "Quartiere Coppedè",
      neighborhood: "Trieste",
      category: "neighborhood" as const,
      weather: "outdoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "An extraordinary neighbourhood designed by architect Gino Coppedè between 1913 and 1926 in a style that freely mixes Art Nouveau, Neo-Baroque, Neo-Medieval and fantastic elements. Façades decorated with mosaics, arabesques, salamanders and gargoyles look as though they come from a fairy tale. One of Rome's best-kept secrets.",
      duration: "45–60 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1607097938359-58f65eb49be9?w=900&q=80",
    },
    // Experiences
    {
      name: "Knights of Malta Keyhole",
      neighborhood: "Aventine",
      category: "experience" as const,
      weather: "outdoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "On top of the Aventine Hill, a simple green wooden door with a keyhole perfectly frames, at the end of a long perfectly aligned avenue of cypress trees, the dome of St Peter's Basilica — creating an optical perspective across three countries (Italy, the Sovereign Order of Malta's territory and the Vatican State) in a single image. One of Rome's most magical and underrated sights.",
      duration: "30 min",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1560707854-fb9a38bce5ef?w=900&q=80",
    },
    {
      name: "Catacombs of Domitilla",
      neighborhood: "Appia Antica",
      category: "experience" as const,
      weather: "indoor" as const,
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "Rome's largest catacombs, with over 17 km of underground galleries carved into volcanic tufa and 2nd-century frescoes. Resting place of more than 150,000 early Christians, including martyrs. The guided tour (compulsory) takes visitors tens of metres underground — a unique historical and sensory experience.",
      duration: "1–1.5 hours",
      cost: "€10",
      image: "https://images.unsplash.com/photo-1543002588-84ebe14a5a8e?w=900&q=80",
    },
    {
      name: "Parco degli Acquedotti",
      neighborhood: "Appia Antica",
      category: "experience" as const,
      weather: "outdoor" as const,
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "An archaeological park where 2,000-year-old Roman aqueducts cross open fields in an almost bucolic landscape. Six of Rome's eleven great aqueducts passed through here, carrying water over dozens of kilometres from the mountains to the heart of the city. Romans come here to walk, picnic and run — no tourists, no queues, no ticket.",
      duration: "1.5–2 hours",
      cost: "Free",
      image: "https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=900&q=80",
    },
  ],
  top5: [
    {
      name: "Colosseum",
      description:
        "The world's most famous Roman amphitheatre is the ultimate symbol of the Empire's greatness. No visit to Rome is complete without stepping inside — from within, the scale of the place is even more striking than in photographs.",
      tip: "Book online in advance. The ticket includes the Roman Forum and Palatine Hill — use all three on the same day.",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    },
    {
      name: "Vatican Museums & Sistine Chapel",
      description:
        "The largest art collection accumulated in human history, crowned by Michelangelo's ceiling in the Sistine Chapel. Even visitors with little interest in art are left speechless.",
      tip: "Book months in advance. Evening tours (a few dates per year) let you see the Sistine Chapel nearly empty.",
      image: "https://images.unsplash.com/photo-1506700065-54c9aca14cda?w=800&q=80",
    },
    {
      name: "Trevi Fountain",
      description:
        "The world's largest baroque fountain, setting of films and of one of the most famous tourist traditions in the world. It is impossible not to stop and stare.",
      tip: "Visit in the early hours of the morning (2–4 am) to find it lit up and almost empty. During the day it is always packed.",
      image: "https://images.unsplash.com/photo-1515542622106-078bda9088b2?w=800&q=80",
    },
    {
      name: "Pantheon",
      description:
        "The best-preserved building from Antiquity. Two thousand years later, its dome still impresses architects and engineers from around the world.",
      tip: "Arrive early. On rainy days, water falls through the central oculus and drains through the marble floor — a rare and beautiful sight.",
      image: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=800&q=80",
    },
    {
      name: "St Peter's Basilica",
      description:
        "The world's largest and most imposing Christian basilica, with works by Michelangelo, Bernini and Raphael in every detail. Bernini's surrounding piazza is one of the most beautiful in the world.",
      tip: "Entry is free, but shoulders and knees must be covered. Arrive early to avoid queues at the security entrance.",
      image: "https://images.unsplash.com/photo-1597423498219-04418210827d?w=800&q=80",
    },
  ],
  whereToEat: [
    {
      name: "Trattoria Da Enzo al 29",
      neighborhood: "Trastevere",
      type: "Traditional trattoria",
      priceRange: "€€",
      profiles: ["couple", "friends"] as ProfileTag[],
      description:
        "One of Trastevere's most authentic trattorias, with no tourist menu. The cacio e pepe and carciofo alla romana are unmissable. Book in advance — it is always full.",
      mustOrder: "Cacio e pepe, carciofo alla romana",
    },
    {
      name: "Supplì Roma",
      neighborhood: "Trastevere / Centre",
      type: "Street food",
      priceRange: "€",
      profiles: ["family", "friends"] as ProfileTag[],
      description:
        "Rome's best supplì house — fried rice balls filled with ragù and mozzarella. Roman street food at its finest, quick and delicious, perfect between sightseeing stops.",
      mustOrder: "Supplì al telefono, pizza al taglio",
    },
    {
      name: "Gelateria dei Gracchi",
      neighborhood: "Prati",
      type: "Artisan gelateria",
      priceRange: "€",
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "Considered by many to be Rome's best gelateria. The flavours are made with seasonal fruit and high-quality ingredients. The pistachio and gianduja are extraordinary.",
      mustOrder: "Pistachio, gianduja, seasonal fruit",
    },
    {
      name: "Osteria dell'Angelo",
      neighborhood: "Prati",
      type: "Roman osteria",
      priceRange: "€€",
      profiles: ["family", "couple", "friends"] as ProfileTag[],
      description:
        "Rotating fixed menu with Roman classics — carbonara, amatriciana, abbacchio. No elaborate décor, frequented by locals from the neighbourhood.",
      mustOrder: "Carbonara, abbacchio alla cacciatora",
    },
  ],
  lockedTeasers: {
    s06: "Day-optimized itineraries for 2, 3, 4 or 5 days in Rome, with variations for families, couples and groups of friends. Each day includes suggested times, travel durations and rainy-day alternatives.",
    s07: "Every neighborhood in Rome has its own identity. The complete guide covers the main neighborhoods with what to do, where to eat, where to stay and the best time to visit each one.",
    s08: "Accommodation recommendations organized by neighborhood, price range and traveler profile — from hostels to boutique hotels, with the pros and cons of each area.",
    s09: "Over 30 restaurants, trattorias, osterias, gelaterias, markets and bars selected and organized by type, neighborhood and occasion — from breakfast to late-night dinner.",
    s10: "What common guides don't tell you: common scams, what to avoid, least crowded times for each attraction, essential apps and behaviors that give tourists away in Rome.",
    s11: "Guided tours, culinary experiences, evening visits and full-day excursions selected for each traveler profile — families, couples and groups of friends.",
  },
};

// ─── Exports ──────────────────────────────────────────────────────────────────

const contentMap: Record<string, RomeContent> = { pt, en };

export function getRomeContent(locale: Locale): RomeContent {
  return contentMap[locale] ?? contentMap.en;
}
