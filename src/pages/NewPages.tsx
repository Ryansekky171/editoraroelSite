import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FileText,
  Heart,
  Mail,
  Printer,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "wouter";
import BookCard from "@/components/BookCard";
import { books, brand } from "@/content";

export function CatalogPage() {
  const themes = ["Todos", "Autismo", "TDAH", "Dislexia", "Ansiedade", "TOC"];
  const [filter, setFilter] = useState("Todos");
  const visible = useMemo(
    () => (filter === "Todos" ? books : books.filter((book) => book.theme === filter)),
    [filter],
  );
  return (
    <main id="conteudo">
      <section className="page-hero catalog-hero">
        <p className="kicker">Biblioteca ROEL</p>
        <h1>Livros para ler o mundo por outros caminhos.</h1>
        <p>Explore histórias sobre neurodiversidade, emoções, diferenças e pertencimento.</p>
      </section>
      <section className="catalog-section section-pad">
        <div className="filter-bar" aria-label="Filtrar catálogo">
          {themes.map((theme) => (
            <button
              type="button"
              key={theme}
              onClick={() => setFilter(theme)}
              className={filter === theme ? "active" : ""}
            >
              {theme}
            </button>
          ))}
        </div>
        <div className="catalog-grid">
          {visible.map((book) => (
            <BookCard key={book.slug} book={book} index={books.indexOf(book)} />
          ))}
        </div>
      </section>
    </main>
  );
}

export function BookPage({ slug }: { slug: string }) {
  const book = books.find((item) => item.slug === slug);
  if (!book) return <NotFoundPage />;
  return (
    <main id="conteudo">
      <section className={`book-detail tone-${book.color}`}>
        <div className="book-detail-nav">
          <Link href="/catalogo">
            <ArrowLeft size={16} /> Voltar aos livros
          </Link>
          <span>{book.collection}</span>
        </div>
        <div className="book-detail-grid">
          <div className="book-detail-image">
            <img src={book.image} alt={`Capa do livro ${book.title}`} />
          </div>
          <div className="book-detail-copy">
            <p className="kicker">{book.theme}</p>
            <h1>{book.title}</h1>
            <p className="book-synopsis">{book.synopsis}</p>
            <p>
              Uma obra da Editora ROEL criada para abrir conversas com cuidado, linguagem acessível
              e respeito às singularidades.
            </p>
            <a
              className="button primary"
              href={`mailto:${brand.email}?subject=${encodeURIComponent(`Tenho interesse no livro ${book.title}`)}`}
            >
              Quero este livro <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export function StoryPage() {
  return (
    <main id="conteudo">
      <section className="page-hero story-hero">
        <p className="kicker">Nossa história</p>
        <h1>A ROEL nasceu para fazer da leitura um lugar de reconhecimento.</h1>
        <p>
          Uma editora construída na interseção entre literatura infantil, educação, inclusão e
          compromisso social.
        </p>
      </section>
      <section className="story-intro section-pad">
        <p className="story-index">
          ROEL
          <br />
          DESDE
          <br />O INÍCIO
        </p>
        <div>
          <h2>Antes de existir um catálogo, existia uma pergunta:</h2>
          <blockquote>
            “Como criar histórias em que mais crianças possam se enxergar com dignidade?”
          </blockquote>
          <p>
            A resposta ganhou forma em uma proposta editorial dedicada a experiências reais,
            personagens complexos e conversas que aproximam. Assim surgiu a ROEL: não a partir de
            nomes individuais, mas de uma convicção coletiva de que literatura, educação e cuidado
            podem caminhar juntos.
          </p>
          <p>
            Desde então, cada projeto começa pela escuta. O tema é pesquisado, o contexto é
            respeitado e a linguagem é construída para acolher famílias, educadores e leitores sem
            simplificar suas vivências.
          </p>
        </div>
      </section>
      <section className="timeline-section section-pad">
        <div className="timeline-title">
          <p className="kicker">Nossa forma de fazer</p>
          <h2>Da escuta ao encontro.</h2>
        </div>
        <div className="timeline">
          <article>
            <span>01</span>
            <h3>Escutar</h3>
            <p>Partimos de contextos, necessidades e experiências humanas.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Construir</h3>
            <p>Unimos narrativa, projeto gráfico e intenção pedagógica.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Validar</h3>
            <p>Revisamos conteúdo, linguagem e representação com responsabilidade.</p>
          </article>
          <article>
            <span>04</span>
            <h3>Compartilhar</h3>
            <p>Levamos livros a famílias, escolas e espaços de cuidado.</p>
          </article>
        </div>
      </section>
      <section className="values-panel">
        <p>O que nos orienta</p>
        <h2>
          Representar com respeito.
          <br />
          Informar sem rotular.
          <br />
          Acolher sem infantilizar.
        </h2>
      </section>
    </main>
  );
}

export function SolutionsPage() {
  const services = [
    {
      icon: <FileText />,
      num: "01",
      title: "Produção editorial",
      text: "Revisão, preparação, projeto gráfico, diagramação, ISBN, ficha catalográfica e acompanhamento de publicação.",
    },
    {
      icon: <Printer />,
      num: "02",
      title: "Soluções gráficas",
      text: "Impressão e acabamento para livros, materiais educacionais, institucionais e promocionais.",
    },
    {
      icon: <Sparkles />,
      num: "03",
      title: "Biografias e memórias",
      text: "Projetos autorais para transformar trajetórias, acervos e legados em livros cuidadosamente editados.",
    },
    {
      icon: <Heart />,
      num: "04",
      title: "Projetos de impacto",
      text: "Conteúdo sob medida para escolas, organizações e iniciativas comprometidas com educação e inclusão.",
    },
  ];
  return (
    <main id="conteudo">
      <section className="page-hero solutions-hero">
        <p className="kicker">Soluções editoriais</p>
        <h1>Boas ideias precisam de forma, ritmo e direção.</h1>
        <p>
          Da primeira conversa ao material final, a ROEL organiza cada etapa com transparência e
          cuidado.
        </p>
      </section>
      <section className="services-list section-pad">
        {services.map((service) => (
          <article key={service.num}>
            <div className="service-num">{service.num}</div>
            <div className="service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <a
              href={`mailto:${brand.email}?subject=${encodeURIComponent(`Interesse em ${service.title}`)}`}
            >
              Conversar sobre o projeto <ArrowRight size={16} />
            </a>
          </article>
        ))}
      </section>
      <section className="process-section section-pad">
        <div>
          <p className="kicker">Processo claro</p>
          <h2>Você sabe onde o projeto está — e qual é o próximo passo.</h2>
        </div>
        <ol>
          <li>
            <span>1</span>Briefing e alinhamento
          </li>
          <li>
            <span>2</span>Proposta e cronograma
          </li>
          <li>
            <span>3</span>Produção e validações
          </li>
          <li>
            <span>4</span>Entrega organizada
          </li>
        </ol>
      </section>
    </main>
  );
}

export function ImpactPage() {
  return (
    <main id="conteudo">
      <section className="page-hero impact-hero">
        <p className="kicker">Impacto social</p>
        <h1>Quando uma criança se sente parte, a história já começou a mudar.</h1>
        <p>
          Nosso compromisso é ampliar acesso a conteúdo responsável sobre inclusão, diversidade e
          convivência.
        </p>
      </section>
      <section className="impact-grid section-pad">
        <article className="impact-feature">
          <span>01</span>
          <h2>Histórias que ajudam a conversar.</h2>
          <p>
            Temas complexos ganham linguagem acessível para apoiar famílias, escolas e
            profissionais.
          </p>
        </article>
        <article>
          <span>02</span>
          <h3>Leitura como cuidado</h3>
          <p>Obras pensadas para gerar identificação, vínculo e novas perguntas.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Educação inclusiva</h3>
          <p>
            Conteúdos que apoiam práticas de respeito às diferenças dentro e fora da sala de aula.
          </p>
        </article>
        <article>
          <span>04</span>
          <h3>Compromisso contínuo</h3>
          <p>
            Parte da atuação da ROEL fortalece iniciativas sociais ligadas ao acolhimento e à
            neurodiversidade.
          </p>
        </article>
      </section>
      <section className="impact-quote">
        <blockquote>
          “Toda criança merece encontrar livros que reconheçam sua maneira de existir.”
        </blockquote>
      </section>
    </main>
  );
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    window.location.href = `mailto:${brand.email}?subject=${encodeURIComponent("Contato pelo novo site da Editora ROEL")}&body=${encodeURIComponent(`Nome: ${name}\nE-mail: ${email}\n\n${message}`)}`;
    setSent(true);
  };
  return (
    <main id="conteudo">
      <section className="contact-page section-pad">
        <div className="contact-copy">
          <p className="kicker">Contato</p>
          <h1>Que história podemos construir juntos?</h1>
          <p>
            Para livros, projetos editoriais, escolas ou soluções gráficas, conte um pouco do que
            você precisa.
          </p>
          <a href={`mailto:${brand.email}`}>
            <Mail size={18} /> {brand.email}
          </a>
        </div>
        <form onSubmit={submit} className="new-contact-form">
          <label>
            Seu nome
            <input name="name" required />
          </label>
          <label>
            Seu e-mail
            <input name="email" type="email" required />
          </label>
          <label>
            Como podemos ajudar?
            <textarea name="message" required rows={6} />
          </label>
          <button type="submit" className="button primary">
            Enviar mensagem <Send size={17} />
          </button>
          {sent && (
            <p className="form-note">Seu aplicativo de e-mail foi aberto para concluir o envio.</p>
          )}
        </form>
      </section>
    </main>
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      kicker="Privacidade"
      title="Seus dados merecem o mesmo cuidado que nossas histórias."
      paragraphs={[
        "A Editora ROEL utiliza apenas os dados necessários para responder contatos, prestar serviços e cumprir obrigações legais.",
        "Não comercializamos dados pessoais. O acesso às informações é limitado, e os dados são mantidos pelo período necessário à finalidade informada.",
        `Para solicitar acesso, correção ou exclusão de dados, escreva para ${brand.email}.`,
      ]}
    />
  );
}

export function IntegrityPage() {
  return (
    <LegalPage
      kicker="Canal de integridade"
      title="Escuta responsável, confidencialidade e respeito."
      paragraphs={[
        "Este canal recebe dúvidas, preocupações e relatos relacionados à conduta da Editora ROEL.",
        "As informações serão tratadas com discrição e utilizadas somente para análise e encaminhamento adequado.",
        `Envie seu relato para ${brand.integrityEmail}. Se preferir, não inclua informações que permitam sua identificação.`,
      ]}
      email={brand.integrityEmail}
    />
  );
}

function LegalPage({
  kicker,
  title,
  paragraphs,
  email,
}: {
  kicker: string;
  title: string;
  paragraphs: string[];
  email?: string;
}) {
  return (
    <main id="conteudo">
      <section className="legal-page section-pad">
        <ShieldCheck size={42} />
        <p className="kicker">{kicker}</p>
        <h1>{title}</h1>
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <a className="button primary" href={`mailto:${email || brand.email}`}>
          Entrar em contato <Mail size={17} />
        </a>
      </section>
    </main>
  );
}

export function NotFoundPage() {
  return (
    <main id="conteudo">
      <section className="not-found section-pad">
        <p className="kicker">Erro 404</p>
        <h1>Esta página saiu para procurar uma nova história.</h1>
        <Link className="button primary" href="/">
          Voltar ao início <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
