import coverBrightIdeas from "./assets/images/a-menina-das-ideias-brilhantes.webp";
import coverSmile from "./assets/images/a-menina-do-sorriso-que-abracava-o-mundo.webp";
import coverThoughts from "./assets/images/a-menina-dos-mil-pensamentos.webp";
import coverClouds from "./assets/images/a-menina-que-carregava-nuvens.webp";
import coverBraveHeart from "./assets/images/o-menino-do-coracao-valente.webp";
import coverRituals from "./assets/images/o-menino-dos-pequenos-rituais.webp";
import coverDifferentReader from "./assets/images/o-menino-que-lia-de-outro-jeito.webp";
import coverDifferentWorld from "./assets/images/o-menino-que-via-o-mundo-diferente.webp";
import heroImage from "./assets/images/hero-roel-ira-flat.png";
import logoImage from "./assets/images/logo-roel.webp";

export type Book = {
  slug: string;
  title: string;
  theme: string;
  collection: string;
  color: "blue" | "yellow" | "red" | "teal";
  image: string;
  synopsis: string;
};

export const books: Book[] = [
  {
    slug: "o-menino-que-via-o-mundo-diferente",
    title: "O Menino que Via o Mundo Diferente",
    theme: "Autismo",
    collection: "Mundo Neurodiverso",
    color: "blue",
    image: coverDifferentWorld,
    synopsis:
      "Uma leitura sensível sobre percepção, afeto e as muitas maneiras possíveis de estar no mundo.",
  },
  {
    slug: "a-menina-dos-mil-pensamentos",
    title: "A Menina dos Mil Pensamentos",
    theme: "TDAH",
    collection: "Mundo Neurodiverso",
    color: "yellow",
    image: coverThoughts,
    synopsis: "Uma história sobre energia, criatividade e o valor de aprender no próprio ritmo.",
  },
  {
    slug: "o-menino-que-lia-de-outro-jeito",
    title: "O Menino que Lia de Outro Jeito",
    theme: "Dislexia",
    collection: "Mundo Neurodiverso",
    color: "teal",
    image: coverDifferentReader,
    synopsis:
      "Palavras, caminhos e descobertas se encontram em uma narrativa que celebra outras formas de ler.",
  },
  {
    slug: "o-menino-do-coracao-valente",
    title: "O Menino do Coração Valente",
    theme: "Comportamento e emoções",
    collection: "Mundo Neurodiverso",
    color: "red",
    image: coverBraveHeart,
    synopsis:
      "Uma aventura sobre regulação emocional, escuta e coragem para construir novos acordos.",
  },
  {
    slug: "a-menina-que-carregava-nuvens",
    title: "A Menina que Carregava Nuvens",
    theme: "Ansiedade",
    collection: "Mundo Neurodiverso",
    color: "blue",
    image: coverClouds,
    synopsis:
      "Um convite delicado para reconhecer sentimentos e encontrar apoio quando os dias parecem pesados.",
  },
  {
    slug: "o-menino-dos-pequenos-rituais",
    title: "O Menino dos Pequenos Rituais",
    theme: "TOC",
    collection: "Mundo Neurodiverso",
    color: "yellow",
    image: coverRituals,
    synopsis:
      "Cuidado e informação em uma história que acolhe a necessidade de segurança sem reduzir a criança ao diagnóstico.",
  },
  {
    slug: "a-menina-do-sorriso-que-abracava-o-mundo",
    title: "A Menina do Sorriso que Abraçava o Mundo",
    theme: "Síndrome de Down",
    collection: "Mundo Neurodiverso",
    color: "red",
    image: coverSmile,
    synopsis:
      "Esporte, amizade e pertencimento conduzem uma história cheia de movimento e possibilidades.",
  },
  {
    slug: "a-menina-das-ideias-brilhantes",
    title: "A Menina das Ideias Brilhantes",
    theme: "Altas habilidades",
    collection: "Mundo Neurodiverso",
    color: "teal",
    image: coverBrightIdeas,
    synopsis:
      "Uma narrativa sobre curiosidade intensa, imaginação e o direito de encontrar desafios à própria medida.",
  },
];

export const navItems = [
  { href: "/", label: "Início" },
  { href: "/catalogo", label: "Livros" },
  { href: "/historia", label: "Nossa história" },
  { href: "/solucoes", label: "Soluções" },
  { href: "/impacto", label: "Impacto" },
];

export const brand = {
  logo: logoImage,
  hero: heroImage,
  email: "contato@editoraroel.com.br",
  integrityEmail: "integridade@editoraroel.com.br",
};
