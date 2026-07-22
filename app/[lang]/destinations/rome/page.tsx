import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isValidLocale, locales, type Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return {
    title: "Guia de Roma, Itália — GuidelyPass",
    description:
      "Guia completo de Roma: pontos turísticos, onde comer, roteiros por dia, bairros, onde ficar e dicas de insider. Freemium — parte gratuita, guia completo disponível.",
  };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionDivider() {
  return <hr className="my-0 border-gray-100" />;
}

function SectionHeader({
  number,
  title,
  subtitle,
  free,
}: {
  number: string;
  title: string;
  subtitle?: string;
  free: boolean;
}) {
  return (
    <div className="mb-8 flex items-start justify-between gap-4">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">
          {number}
        </p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
        )}
      </div>
      <span
        className={`mt-1 flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
          free
            ? "bg-green-50 text-green-700 border border-green-200"
            : "bg-gray-100 text-gray-500 border border-gray-200"
        }`}
      >
        {free ? "Gratuito" : "Guia completo"}
      </span>
    </div>
  );
}

function ProfileBadge({ profile }: { profile: "Família" | "Casal" | "Amigos" }) {
  const styles = {
    Família: "bg-orange-50 text-orange-700 border-orange-200",
    Casal: "bg-pink-50 text-pink-700 border-pink-200",
    Amigos: "bg-purple-50 text-purple-700 border-purple-200",
  };
  return (
    <span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-semibold ${styles[profile]}`}>
      {profile}
    </span>
  );
}

function WeatherBadge({ type }: { type: "Ao ar livre" | "Interno" | "Qualquer tempo" }) {
  const styles = {
    "Ao ar livre": "bg-amber-50 text-amber-700 border-amber-200",
    "Interno": "bg-blue-50 text-blue-700 border-blue-200",
    "Qualquer tempo": "bg-teal-50 text-teal-700 border-teal-200",
  };
  return (
    <span className={`inline-block rounded-full border px-2 py-0.5 text-[10px] font-medium ${styles[type]}`}>
      {type}
    </span>
  );
}

function LockedSection({
  number,
  title,
  teaser,
  previewContent,
  lang,
}: {
  number: string;
  title: string;
  teaser: string;
  previewContent: React.ReactNode;
  lang: string;
}) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeader number={number} title={title} free={false} />
        <p className="mb-6 text-base leading-relaxed text-gray-600">{teaser}</p>
        <div className="relative overflow-hidden rounded-2xl border border-gray-200">
          <div className="pointer-events-none select-none p-6 blur-sm">
            {previewContent}
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-[3px]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-gray-400 mb-3">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <p className="text-sm font-bold text-ink">Conteúdo exclusivo</p>
            <p className="mt-1 text-xs text-gray-500 text-center max-w-xs">
              Esta seção faz parte do guia completo de Roma.
            </p>
            <Link
              href={`/${lang}/contact`}
              className="mt-4 inline-block rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-700"
            >
              Quero o guia completo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Attraction data ──────────────────────────────────────────────────────────

type AttractionItem = {
  name: string;
  neighborhood: string;
  category: string;
  weather: "Ao ar livre" | "Interno" | "Qualquer tempo";
  profiles: ("Família" | "Casal" | "Amigos")[];
  description: string;
  duration: string;
  cost: string;
};

const attractionsList: AttractionItem[] = [
  { name: "Coliseu", neighborhood: "Centro Histórico", category: "Monumento", weather: "Qualquer tempo", profiles: ["Família", "Casal", "Amigos"], description: "O maior anfiteatro romano já construído, erguido no século I d.C. para abrigar até 80 mil espectadores. Palco de combates de gladiadores e espetáculos públicos, é o símbolo máximo do Império Romano.", duration: "2–3 horas", cost: "€18" },
  { name: "Fórum Romano", neighborhood: "Centro Histórico", category: "Monumento", weather: "Ao ar livre", profiles: ["Família", "Casal", "Amigos"], description: "O coração político e social da Roma Antiga, onde senadores debatiam e imperadores desfilavam em triunfo. Um dos sítios arqueológicos mais fascinantes do mundo.", duration: "1–2 horas", cost: "Incluso no Coliseu" },
  { name: "Monte Palatino", neighborhood: "Centro Histórico", category: "Monumento", weather: "Ao ar livre", profiles: ["Casal", "Amigos"], description: "Uma das sete colinas de Roma e o lugar onde, segundo a lenda, Rômulo fundou a cidade. As ruínas dos palácios imperiais oferecem vistas panorâmicas sobre o Fórum Romano.", duration: "1 hora", cost: "Incluso no Coliseu" },
  { name: "Pantheon", neighborhood: "Centro Histórico", category: "Monumento", weather: "Interno", profiles: ["Família", "Casal", "Amigos"], description: "Construído em 125 d.C., é o edifício da Antiguidade melhor preservado do mundo. Sua cúpula com o famoso óculo aberto ao céu continua sendo uma das maiores maravilhas da engenharia humana.", duration: "30–45 min", cost: "€5" },
  { name: "Castel Sant'Angelo", neighborhood: "Prati", category: "Monumento", weather: "Qualquer tempo", profiles: ["Família", "Casal", "Amigos"], description: "Construído como mausoléu do imperador Adriano no século II, o castelo foi fortaleza, prisão e residência papal. Do terraço, a vista sobre o Tibre é uma das mais bonitas de Roma.", duration: "1,5–2 horas", cost: "€15" },
  { name: "Arco de Constantino", neighborhood: "Centro Histórico", category: "Monumento", weather: "Ao ar livre", profiles: ["Família", "Casal", "Amigos"], description: "Erguido em 315 d.C. para celebrar a vitória de Constantino, é o maior arco triunfal de Roma e um dos mais bem preservados da Antiguidade. Fica ao lado do Coliseu.", duration: "15–20 min", cost: "Gratuito" },
  { name: "Circo Máximo", neighborhood: "Aventino", category: "Monumento", weather: "Ao ar livre", profiles: ["Família", "Amigos"], description: "O maior estádio da Antiguidade, com capacidade para 250 mil espectadores. Era o palco das famosas corridas de bigas. Hoje é um parque arqueológico onde os romanos caminham e fazem piquenique.", duration: "30 min", cost: "Gratuito" },
  { name: "Via Appia Antica", neighborhood: "Appia Antica", category: "Monumento", weather: "Ao ar livre", profiles: ["Casal", "Amigos"], description: "A 'rainha das estradas' romanas, construída em 312 a.C., ainda conserva grandes trechos do calçamento original. Flanqueada por mausoléus e pinheiros, é uma das experiências mais evocativas de Roma.", duration: "2–3 horas", cost: "Gratuito" },
  { name: "Museus do Vaticano e Capela Sistina", neighborhood: "Vaticano", category: "Museu", weather: "Interno", profiles: ["Família", "Casal", "Amigos"], description: "Um dos maiores complexos museológicos do mundo, com mais de 70.000 obras acumuladas pelos papas. O ponto alto é a Capela Sistina, com o teto pintado por Michelangelo — uma das maiores obras de arte da humanidade.", duration: "3–4 horas", cost: "€17–27" },
  { name: "Galleria Borghese", neighborhood: "Villa Borghese", category: "Museu", weather: "Interno", profiles: ["Casal", "Amigos"], description: "Considerada a 'rainha das galerias privadas', abriga o maior acervo de esculturas de Bernini e obras fundamentais de Caravaggio. Entrada apenas com reserva antecipada obrigatória.", duration: "2 horas (sessão fixa)", cost: "€15" },
  { name: "Musei Capitolini", neighborhood: "Capitolino", category: "Museu", weather: "Interno", profiles: ["Casal", "Amigos"], description: "Os museus mais antigos do mundo, fundados em 1471. A coleção inclui a loba capitolina, a estátua equestre de Marco Aurélio e obras-primas de escultura romana.", duration: "2–3 horas", cost: "€15" },
  { name: "Centrale Montemartini", neighborhood: "Ostiense", category: "Museu", weather: "Interno", profiles: ["Casal", "Amigos"], description: "Joia escondida: esculturas gregas e romanas extraordinárias expostas dentro de uma usina elétrica industrial dos anos 1930. O contraste entre mármore antigo e máquinas de ferro é visualmente fascinante.", duration: "1,5–2 horas", cost: "€8" },
  { name: "Museo Nazionale Romano", neighborhood: "Termini", category: "Museu", weather: "Interno", profiles: ["Amigos"], description: "Distribuído em quatro sedes, reúne uma das maiores coleções de arte romana do mundo, incluindo afrescos, mosaicos e esculturas da época imperial. A sede de Palazzo Massimo é a mais impressionante.", duration: "1,5–2 horas", cost: "€10" },
  { name: "Basílica de São Pedro", neighborhood: "Vaticano", category: "Igreja", weather: "Qualquer tempo", profiles: ["Família", "Casal", "Amigos"], description: "A maior basílica do mundo cristão, erguida sobre o túmulo do apóstolo Pedro. Com obras de Michelangelo, Bernini e Rafael, é um dos maiores conjuntos artísticos da humanidade.", duration: "1,5–2 horas", cost: "Gratuito (cúpula €8–10)" },
  { name: "San Giovanni in Laterano", neighborhood: "Laterano", category: "Igreja", weather: "Interno", profiles: ["Casal", "Amigos"], description: "A catedral oficial do Papa e a mais antiga basílica cristã de Roma, fundada pelo imperador Constantino no século IV. Historicamente mais importante que São Pedro, com muito menos filas.", duration: "45 min", cost: "Gratuito" },
  { name: "San Clemente al Laterano", neighborhood: "Laterano", category: "Igreja", weather: "Interno", profiles: ["Casal", "Amigos"], description: "Uma das visitas mais fascinantes de Roma: três camadas de história sobrepostas — basílica medieval sobre basílica paleocristã sobre templo de Mitra do século I d.C. Uma viagem literal no tempo.", duration: "1 hora", cost: "€10" },
  { name: "San Luigi dei Francesi", neighborhood: "Centro Histórico", category: "Igreja", weather: "Interno", profiles: ["Casal", "Amigos"], description: "Uma igreja que esconde três pinturas monumentais de Caravaggio na Cappella Contarelli, incluindo 'A Vocação de São Mateus' — considerada uma das obras de arte mais importantes do mundo.", duration: "20–30 min", cost: "Gratuito" },
  { name: "Santa Maria in Trastevere", neighborhood: "Trastevere", category: "Igreja", weather: "Interno", profiles: ["Casal", "Amigos"], description: "Considerada a primeira igreja dedicada à Virgem Maria em Roma, fundada no século III. Os mosaicos dourados byzantinos do século XII na abside são extraordinários.", duration: "30 min", cost: "Gratuito" },
  { name: "Fontana di Trevi", neighborhood: "Centro Histórico", category: "Praça e Fonte", weather: "Qualquer tempo", profiles: ["Família", "Casal", "Amigos"], description: "A maior e mais famosa fonte barroca do mundo, esculpida por Nicola Salvi no século XVIII. A tradição de jogar uma moeda para garantir o retorno a Roma é conhecida em todo o mundo.", duration: "30–45 min", cost: "Gratuito" },
  { name: "Piazza Navona", neighborhood: "Centro Histórico", category: "Praça e Fonte", weather: "Qualquer tempo", profiles: ["Família", "Casal", "Amigos"], description: "A mais bela praça barroca de Roma, construída sobre o estádio do imperador Domiciano. Tem três fontes, sendo a Fontana dei Quattro Fiumi de Bernini a mais famosa.", duration: "30–60 min", cost: "Gratuito" },
  { name: "Piazza di Spagna e Escadaria", neighborhood: "Centro Histórico", category: "Praça e Fonte", weather: "Qualquer tempo", profiles: ["Família", "Casal", "Amigos"], description: "A Escadaria de Trinità dei Monti, com seus 135 degraus, é um dos símbolos mais icônicos de Roma. Na primavera fica coberta de azaleias cor-de-rosa, criando uma das imagens mais bonitas da cidade.", duration: "30 min", cost: "Gratuito" },
  { name: "Piazza del Popolo", neighborhood: "Flaminio", category: "Praça e Fonte", weather: "Ao ar livre", profiles: ["Família", "Casal", "Amigos"], description: "Uma das maiores e mais imponentes praças de Roma, com um obelisco egípcio no centro. Durante séculos foi o ponto de chegada de viajantes vindos do norte da Europa.", duration: "30–45 min", cost: "Gratuito" },
  { name: "Campo de' Fiori", neighborhood: "Centro Histórico", category: "Praça e Fonte", weather: "Ao ar livre", profiles: ["Casal", "Amigos"], description: "A praça mais animada de Roma, famosa pelo mercado matinal de frutas e verduras que funciona há séculos. À noite transforma-se num dos pontos de encontro favoritos dos romanos.", duration: "30–60 min", cost: "Gratuito" },
  { name: "Piazza Venezia e Altare della Patria", neighborhood: "Centro Histórico", category: "Praça e Fonte", weather: "Qualquer tempo", profiles: ["Família", "Casal", "Amigos"], description: "O Altare della Patria, monumento imponente em mármore branco erguido em 1911, domina a praça. O terraço panorâmico no topo oferece a melhor vista 360° de Roma.", duration: "30–60 min", cost: "Gratuito (terraço €7)" },
  { name: "Villa Borghese", neighborhood: "Villa Borghese", category: "Parque", weather: "Ao ar livre", profiles: ["Família", "Casal", "Amigos"], description: "O maior parque público de Roma, com 80 hectares de jardins, fontes e lagos. Além da Galleria Borghese, abriga o terraço do Pincio com a melhor vista panorâmica da cidade ao pôr do sol.", duration: "2–4 horas", cost: "Gratuito" },
  { name: "Trastevere", neighborhood: "Trastevere", category: "Bairro", weather: "Qualquer tempo", profiles: ["Casal", "Amigos"], description: "O bairro mais charmoso e autêntico de Roma, com ruelas de pedra, heras nas fachadas medievais e o melhor ambiente noturno da cidade. O Roma que os romanos amam.", duration: "2–3 horas", cost: "Gratuito" },
  { name: "Quartiere Coppedè", neighborhood: "Trieste", category: "Bairro", weather: "Ao ar livre", profiles: ["Casal", "Amigos"], description: "Um bairro fora do comum, projetado entre 1913 e 1926 num estilo que mistura art nouveau, gótico e fantástico. As fachadas com mosaicos e arabescos parecem saídas de um conto de fadas.", duration: "45–60 min", cost: "Gratuito" },
  { name: "Buraco de Fechadura dos Cavaleiros de Malta", neighborhood: "Aventino", category: "Experiência", weather: "Ao ar livre", profiles: ["Casal", "Amigos"], description: "No topo do Aventino, um simples buraco de fechadura enquadra perfeitamente a cúpula de São Pedro ao fundo de um longo jardim — uma das perspectivas mais surpreendentes e mágicas de Roma.", duration: "30 min", cost: "Gratuito" },
  { name: "Catacumbas di Domitilla", neighborhood: "Appia Antica", category: "Experiência", weather: "Interno", profiles: ["Família", "Casal", "Amigos"], description: "As maiores catacumbas de Roma, com mais de 17 km de galerias subterrâneas e afrescos do século II. Sepulturas de mais de 150 mil cristãos dos primeiros séculos — uma experiência histórica única.", duration: "1–1,5 horas", cost: "€10" },
  { name: "Parco degli Acquedotti", neighborhood: "Appia Antica", category: "Experiência", weather: "Ao ar livre", profiles: ["Casal", "Amigos"], description: "Um parque arqueológico onde aquedutos romanos de 2.000 anos cruzam campos abertos onde os romanos passeiam e fazem piquenique. Uma das experiências mais autênticas e menos turísticas de Roma.", duration: "1,5–2 horas", cost: "Gratuito" },
];

const top5 = [
  {
    name: "Coliseu",
    description: "O anfiteatro romano mais famoso do mundo é o símbolo máximo da grandeza do Império. Nenhuma visita a Roma é completa sem ele.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80",
    detail: "Reserve online. O ingresso inclui Fórum Romano e Palatino.",
  },
  {
    name: "Museus do Vaticano e Capela Sistina",
    description: "O maior acervo de arte acumulado na história da humanidade, coroado pelo teto de Michelangelo na Capela Sistina.",
    image: "https://images.unsplash.com/photo-1506700065-54c9aca14cda?w=800&q=80",
    detail: "Reserve com meses de antecedência. As filas sem reserva passam de 4 horas.",
  },
  {
    name: "Fontana di Trevi",
    description: "A maior fonte barroca do mundo, cenário de filmes e de uma das tradições mais conhecidas do turismo mundial.",
    image: "https://images.unsplash.com/photo-1515542622106-078bda9088b2?w=800&q=80",
    detail: "Visite de madrugada para encontrá-la iluminada e quase vazia.",
  },
  {
    name: "Pantheon",
    description: "O edifício da Antiguidade melhor preservado do mundo. Dois mil anos depois, sua cúpula ainda impressiona arquitetos e engenheiros.",
    image: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=800&q=80",
    detail: "Chegue cedo. Em dias de chuva, a água cai pelo óculo central e escoa pelo piso — espetacular.",
  },
  {
    name: "Basílica de São Pedro",
    description: "A maior e mais imponente basílica do mundo cristão, com obras de Michelangelo, Bernini e Rafael em cada detalhe.",
    image: "https://images.unsplash.com/photo-1555992828-ca4dbe41d294?w=800&q=80",
    detail: "Entrada gratuita. Ombros e joelhos devem estar cobertos.",
  },
];

const whereToEatSample = [
  {
    name: "Trattoria Da Enzo al 29",
    neighborhood: "Trastevere",
    type: "Trattoria tradicional",
    priceRange: "€€",
    profiles: ["Casal", "Amigos"] as ("Família" | "Casal" | "Amigos")[],
    description: "Uma das trattorias mais autênticas de Trastevere, sem cardápio turístico. A cacio e pepe e o carciofo alla romana são imperdíveis. Reserve com antecedência — fica sempre lotado.",
    mustOrder: "Cacio e pepe, carciofo alla romana",
  },
  {
    name: "Supplì Roma",
    neighborhood: "Trastevere / Centro",
    type: "Street food",
    priceRange: "€",
    profiles: ["Família", "Amigos"] as ("Família" | "Casal" | "Amigos")[],
    description: "A melhor casa de supplì de Roma — bolinhos de arroz fritos com recheio de ragù e mozzarella. Comida de rua romana por excelência, rápida e deliciosa, ideal entre visitas.",
    mustOrder: "Supplì al telefono, pizza al taglio",
  },
  {
    name: "Gelateria dei Gracchi",
    neighborhood: "Prati",
    type: "Gelateria artesanal",
    priceRange: "€",
    profiles: ["Família", "Casal", "Amigos"] as ("Família" | "Casal" | "Amigos")[],
    description: "Considerada por muitos a melhor gelateria de Roma. Os sabores são feitos com frutas da época e ingredientes de alta qualidade. O pistache e o gianduja são extraordinários.",
    mustOrder: "Pistache, gianduja, fruta da época",
  },
  {
    name: "Osteria dell'Angelo",
    neighborhood: "Prati",
    type: "Osteria romana",
    priceRange: "€€",
    profiles: ["Família", "Casal", "Amigos"] as ("Família" | "Casal" | "Amigos")[],
    description: "Cardápio fixo rotativo com os clássicos da cozinha romana — carbonara, amatriciana, abbacchio. Sem decoração elaborada, sem turistas em excesso. Frequentada pelos romanos do bairro.",
    mustOrder: "Carbonara, abbacchio alla cacciatora",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function RomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) notFound();
  const locale = lang as Locale;

  return (
    <article>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[360px] sm:h-[65vh]">
        <Image
          src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1600&q=85"
          alt="Roma, Itália — vista aérea do Coliseu"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-4xl px-4 pb-10 sm:pb-14">
            <nav className="mb-4 flex items-center gap-2 text-xs text-white/50">
              <Link href={`/${locale}/destinations`} className="hover:text-white/80 transition-colors">Destinos</Link>
              <span>/</span>
              <span className="text-white/70">Roma, Itália</span>
            </nav>
            <h1 className="text-5xl font-bold text-white sm:text-7xl tracking-tight">Roma</h1>
            <p className="mt-3 max-w-lg text-base text-white/75 leading-relaxed">
              A Cidade Eterna — 2.800 anos de história concentrados numa das cidades mais fascinantes do mundo.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Itália", "Europa", "Italiano", "Euro", "3–5 dias"].map((tag) => (
                <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky nav ───────────────────────────────────────────────────── */}
      <nav className="sticky top-[57px] z-20 hidden overflow-x-auto border-b border-gray-100 bg-white/95 backdrop-blur sm:block">
        <div className="mx-auto flex max-w-4xl gap-6 px-4">
          {[
            ["#visao-geral", "Visão Geral"],
            ["#info-praticas", "Info Práticas"],
            ["#pontos-turisticos", "Pontos Turísticos"],
            ["#top5", "Top 5"],
            ["#onde-comer", "Onde Comer"],
            ["#roteiros", "Roteiros"],
            ["#bairros", "Bairros"],
            ["#onde-ficar", "Onde Ficar"],
            ["#gastronomia", "Gastronomia"],
            ["#insider", "Dicas Insider"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="flex-shrink-0 border-b-2 border-transparent py-3 text-xs font-medium text-gray-500 transition-colors hover:border-brand-500 hover:text-brand-600">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Seção 1: Visão Geral ─────────────────────────────────────────── */}
      <section id="visao-geral" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader number="01" title="Visão Geral" free={true} />

          <div className="prose prose-gray max-w-none">
            <p className="text-base leading-relaxed text-gray-700">
              Roma é a única cidade do mundo onde você pode tomar um café ao lado de um aqueduto de dois mil anos, visitar a maior coleção de arte da história humana à tarde e jantar em ruelas medievais iluminadas à noite. A Cidade Eterna não é apenas um destino turístico — é uma experiência que muda a forma como se vê o mundo.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Capital da Itália e berço da civilização ocidental, Roma abriga mais de 900 igrejas, 280 fontes e um número incontável de museus, ruínas e monumentos. Cada bairro tem sua própria identidade: o Centro Histórico com suas praças barrocas, o Vaticano com sua grandiosidade religiosa, Trastevere com seu charme medieval, Prati com sua elegância burguesa.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-700">
              Não existe Roma em dois dias. A cidade merece tempo — não para ver tudo, mas para sentir o ritmo lento das suas piazze, o barulho das motos entre as ruínas, o cheiro do café espresso no bar da esquina às sete da manhã.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { title: "Melhor época para visitar", body: "Primavera (março a maio) e outono (setembro a novembro) oferecem clima agradável e multidões menores. Julho e agosto são extremamente quentes e lotados. Dezembro tem um charme especial com as decorações de Natal e os mercados da Piazza Navona." },
              { title: "Quantos dias são necessários", body: "Três dias cobrem os pontos principais sem pressa. Cinco dias permitem explorar bairros, museus menos famosos e fazer passeios de meio dia. Uma semana completa é o ideal para quem quer vivenciar Roma além do roteiro turístico." },
              { title: "Qual é o nível de dificuldade", body: "Roma é uma cidade muito caminhável, mas o calçamento irregular e as longas distâncias entre atrações exigem bom preparo físico. O metrô tem apenas duas linhas, então muita coisa se faz a pé ou de ônibus. Não é indicado dirigir no centro histórico." },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-gray-100 p-5">
                <h3 className="text-sm font-bold text-ink mb-2">{title}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Seção 2: Informações Práticas ────────────────────────────────── */}
      <section id="info-praticas" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader number="02" title="Informações Práticas" free={true} />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "País", value: "Itália" },
              { label: "Idioma", value: "Italiano (inglês funciona bem em áreas turísticas)" },
              { label: "Moeda", value: "Euro (€) — cartão aceito na maioria dos lugares" },
              { label: "Fuso horário", value: "CET (UTC+1) — verão CEST (UTC+2)" },
              { label: "Tomadas", value: "Tipo C e F (europeu padrão) — 220V" },
              { label: "Emergências", value: "112 (geral) · 118 (ambulância) · 113 (polícia)" },
              { label: "Como chegar", value: "Aeroporto Leonardo da Vinci (FCO) a 30 km do centro. Trem Leonardo Express em 32 min até a Termini (€14)." },
              { label: "Transporte local", value: "Metrô (2 linhas), ônibus e táxi. O centro histórico é melhor a pé. App recomendado: Moovit." },
              { label: "Conectividade", value: "SIM turista da TIM ou Vodafone na chegada. Wi-Fi disponível na maioria dos cafés e hotéis." },
              { label: "Documentos", value: "Brasileiros precisam apenas de passaporte válido para até 90 dias na zona Schengen." },
              { label: "Água da torneira", value: "Potável em toda a cidade. As 'nasoni' (torneiras públicas nas ruas) oferecem água fresca e gratuita." },
              { label: "Gorjeta", value: "Não obrigatória, mas bem-vinda. Em restaurantes, 10% é suficiente. Não é costume em bares de balcão." },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">{label}</p>
                <p className="text-sm text-gray-700 leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Seção 3: Pontos Turísticos ───────────────────────────────────── */}
      <section id="pontos-turisticos" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader
            number="03"
            title="Pontos Turísticos"
            subtitle={`${attractionsList.length} pontos turísticos selecionados — de monumentos históricos a experiências únicas.`}
            free={true}
          />

          {/* Category grouping */}
          {["Monumento", "Museu", "Igreja", "Praça e Fonte", "Parque", "Bairro", "Experiência"].map((cat) => {
            const items = attractionsList.filter((a) => a.category === cat);
            if (!items.length) return null;
            const plural: Record<string, string> = {
              Monumento: "Monumentos Históricos",
              Museu: "Museus",
              Igreja: "Igrejas",
              "Praça e Fonte": "Praças e Fontes",
              Parque: "Parques",
              Bairro: "Bairros",
              Experiência: "Experiências Únicas",
            };
            return (
              <div key={cat} className="mb-12">
                <h3 className="mb-5 text-lg font-bold text-ink border-b border-gray-100 pb-3">{plural[cat]}</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {items.map((a) => (
                    <div key={a.name} className="rounded-xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h4 className="text-sm font-bold text-ink leading-snug">{a.name}</h4>
                        <WeatherBadge type={a.weather} />
                      </div>
                      <p className="text-xs text-gray-400 mb-3">{a.neighborhood}</p>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{a.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {a.profiles.map((p) => (
                            <ProfileBadge key={p} profile={p} />
                          ))}
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400">{a.duration}</p>
                          <p className="text-xs font-semibold text-gray-600">{a.cost}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* ── Seção 4: Top 5 ───────────────────────────────────────────────── */}
      <section id="top5" className="bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader number="04" title="As 5 Atrações Imperdíveis" subtitle="Se o tempo for curto, estas são as experiências que não podem faltar em nenhuma visita a Roma." free={true} />

          <div className="space-y-5">
            {top5.map((item, i) => (
              <div key={item.name} className="group flex gap-5 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="relative h-auto w-40 flex-shrink-0 sm:w-52 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 208px, 160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow">
                    {i + 1}
                  </div>
                </div>
                <div className="flex flex-col justify-center py-5 pr-5">
                  <h3 className="text-base font-bold text-ink sm:text-lg">{item.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800 leading-relaxed border border-amber-100">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Seção 5: Onde Comer (amostra) ────────────────────────────────── */}
      <section id="onde-comer" className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHeader
            number="05"
            title="Onde Comer"
            subtitle="Uma amostra da gastronomia romana. O guia completo inclui mais de 30 restaurantes selecionados por bairro e perfil."
            free={true}
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {whereToEatSample.map((r) => (
              <div key={r.name} className="rounded-xl border border-gray-100 p-5 hover:border-gray-200 transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h4 className="text-sm font-bold text-ink">{r.name}</h4>
                  <span className="flex-shrink-0 text-sm font-semibold text-gray-500">{r.priceRange}</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">{r.type} · {r.neighborhood}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{r.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {r.profiles.map((p) => (
                      <ProfileBadge key={p} profile={p} />
                    ))}
                  </div>
                  <p className="text-xs text-gray-400">Peça: <span className="font-medium text-gray-600">{r.mustOrder}</span></p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-gray-200 bg-gray-50 p-5 text-center">
            <p className="text-sm font-semibold text-ink">O guia completo inclui mais de 30 restaurantes</p>
            <p className="mt-1 text-xs text-gray-500">Organizados por bairro, tipo de refeição, faixa de preço e perfil de viajante.</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Seções pagas ─────────────────────────────────────────────────── */}

      <LockedSection
        number="06"
        title="Roteiros por Dia"
        teaser="Roteiros otimizados por localização para 2, 3, 4 ou 5 dias em Roma, com variações para família, casal e grupos de amigos. Cada dia inclui horários sugeridos, tempo de deslocamento e alternativas para dias de chuva."
        lang={locale}
        previewContent={
          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-bold mb-1">Dia 1 — Centro Histórico</p>
              <p>09h00 Coliseu · 12h30 Almoço perto do Fórum · 14h00 Fórum Romano e Palatino · 17h00 Pantheon · 19h00 Fontana di Trevi · 20h30 Jantar em Campo de' Fiori</p>
            </div>
            <div>
              <p className="font-bold mb-1">Dia 2 — Vaticano e Prati</p>
              <p>08h00 Museus do Vaticano e Capela Sistina · 13h00 Almoço em Prati · 15h00 Basílica de São Pedro · 17h00 Castel Sant'Angelo · 19h30 Jantar em Prati</p>
            </div>
            <div>
              <p className="font-bold mb-1">Dia 3 — Borghese e Trastevere</p>
              <p>10h00 Galleria Borghese · 13h00 Piquenique em Villa Borghese · 15h30 Aventino · 18h00 Trastevere · 20h00 Jantar em Trastevere</p>
            </div>
          </div>
        }
      />

      <SectionDivider />

      <LockedSection
        number="07"
        title="Bairros de Roma"
        teaser="Cada bairro de Roma tem uma identidade própria. O guia completo apresenta os principais bairros com o que fazer, onde comer, onde ficar e qual o melhor momento para visitar cada um."
        lang={locale}
        previewContent={
          <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-700">
            {["Centro Storico", "Trastevere", "Vaticano / Prati", "Testaccio", "Monti", "Pigneto", "EUR", "Ostiense"].map((b) => (
              <div key={b} className="rounded-lg border border-gray-100 p-4">
                <p className="font-bold">{b}</p>
                <p className="text-xs text-gray-400 mt-1">Descrição completa, o que fazer, onde comer e onde ficar...</p>
              </div>
            ))}
          </div>
        }
      />

      <SectionDivider />

      <LockedSection
        number="08"
        title="Onde Ficar"
        teaser="Recomendações de hospedagem organizadas por bairro, faixa de preço e perfil de viajante — de hostels a boutique hotels, com os prós e contras de cada região."
        lang={locale}
        previewContent={
          <div className="space-y-3 text-sm text-gray-700">
            {["Centro Storico — Para quem quer estar no meio de tudo", "Trastevere — Para quem busca atmosfera e vida noturna", "Prati — Para quem viaja em família ou quer tranquilidade", "Monti — Para quem quer o Roma alternativo e jovem"].map((h) => (
              <div key={h} className="rounded-lg border border-gray-100 p-4">
                <p className="font-semibold">{h}</p>
                <p className="text-xs text-gray-400 mt-1">Hotéis, hostels e apartamentos recomendados com faixa de preço...</p>
              </div>
            ))}
          </div>
        }
      />

      <SectionDivider />

      <LockedSection
        number="09"
        title="Gastronomia Completa"
        teaser="Mais de 30 restaurantes, trattorias, osterias, gelaterie, mercados e bares selecionados, organizados por tipo, bairro e ocasião — do café da manhã ao jantar tardio."
        lang={locale}
        previewContent={
          <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
            {["Carbonara autêntica", "A melhor pizza al taglio", "Gelato artesanal", "Aperitivo romano", "Mercados locais", "Café como os romanos tomam"].map((t) => (
              <div key={t} className="rounded-lg border border-gray-100 p-4">
                <p className="font-semibold">{t}</p>
                <p className="text-xs text-gray-400 mt-1">Onde encontrar, o que pedir e quanto pagar...</p>
              </div>
            ))}
          </div>
        }
      />

      <SectionDivider />

      <LockedSection
        number="10"
        title="Dicas de Insider"
        teaser="O que os guias comuns não contam: golpes comuns, o que evitar, horários menos movimentados para cada atração, apps essenciais e os comportamentos que denunciam o turista em Roma."
        lang={locale}
        previewContent={
          <div className="space-y-2 text-sm text-gray-700">
            {["Como evitar as filas do Vaticano (existe um acesso secreto)", "Os restaurantes que cobram 'coperto' abusivo", "Por que nunca tomar café sentado perto do Pantheon", "O metrô que os turistas nunca usam mas economiza 1 hora", "As nassoni — água de graça em toda a cidade"].map((t) => (
              <p key={t} className="rounded-lg border border-gray-100 p-3">{t}</p>
            ))}
          </div>
        }
      />

      <SectionDivider />

      <LockedSection
        number="11"
        title="Passeios e Experiências"
        teaser="Tours guiados, experiências culinárias, visitas noturnas e passeios de dia completo selecionados para cada perfil de viajante."
        lang={locale}
        previewContent={
          <div className="grid gap-3 sm:grid-cols-2 text-sm text-gray-700">
            {["Tour noturno pelos Museus do Vaticano", "Aula de culinária romana", "Visita privada ao Coliseu (arena e catacumbas)", "Degustação de vinhos em Frascati", "Passeio de bicicleta pela Via Appia", "Tour de vespa pelo centro histórico"].map((e) => (
              <div key={e} className="rounded-lg border border-gray-100 p-4">
                <p className="font-semibold">{e}</p>
                <p className="text-xs text-gray-400 mt-1">Duração, preço médio e indicação por perfil...</p>
              </div>
            ))}
          </div>
        }
      />

      {/* ── Purchase CTA ─────────────────────────────────────────────────── */}
      <section className="border-t border-brand-100 bg-brand-50 py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-2">Guia Completo de Roma</p>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">
            Tudo o que você precisa para explorar Roma sem improvisar
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Roteiros por dia, bairros detalhados, onde ficar, gastronomia completa, dicas de insider e passeios selecionados — tudo organizado por perfil de viajante. Acesse no seu perfil e baixe o PDF com seu nome.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={`/${locale}/contact`}
              className="inline-block rounded-full bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-700 hover:shadow-md"
            >
              Quero o guia completo de Roma
            </Link>
            <Link
              href={`/${locale}/destinations`}
              className="inline-block rounded-full border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-all duration-200"
            >
              Ver outros destinos
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400">Acesso imediato após o pagamento · PDF disponível no seu perfil</p>
        </div>
      </section>
    </article>
  );
}
