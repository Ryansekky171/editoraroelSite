import { ArrowRight, BookOpen, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "wouter";
import BookCard from "@/components/BookCard";
import { books, brand } from "@/content";

export default function NewHome() {
  return (
    <main id="conteudo">
      <section className="hero-section">
        <div className="hero-copy reveal">
          <p className="kicker">
            <span /> Literatura para pertencer
          </p>
          <h1>
            Cada jeito de <em>ser</em> merece espaço na história.
          </h1>
          <p className="hero-lead">
            Livros que aproximam crianças, famílias e educadores por meio de histórias acolhedoras
            sobre neurodiversidade, emoções e inclusão.
          </p>
          <div className="hero-actions">
            <Link href="/catalogo" className="button primary">
              Conheça os livros <ArrowRight size={18} />
            </Link>
            <Link href="/historia" className="button quiet">
              Descubra a ROEL
            </Link>
          </div>
        </div>
        <div className="hero-art reveal delay-1">
          <img
            src={brand.hero}
            alt="Ilustração de um livro aberto transformado em uma cidade colorida de livros, com o selo Roel · 01 e a frase Leitura também é uma forma de cuidado"
          />
        </div>
      </section>

      <section className="manifest-strip" aria-label="Princípios editoriais">
        <div>
          <span>01</span>
          <strong>Escuta</strong>
          <p>para compreender contextos reais</p>
        </div>
        <div>
          <span>02</span>
          <strong>Respeito</strong>
          <p>para representar sem reduzir</p>
        </div>
        <div>
          <span>03</span>
          <strong>Pertencimento</strong>
          <p>para transformar leitura em encontro</p>
        </div>
      </section>

      <section className="featured-section section-pad">
        <div className="section-heading split-heading">
          <div>
            <p className="kicker">Coleção em destaque</p>
            <h2>
              Mundo
              <br />
              <em>Neurodiverso</em>
            </h2>
          </div>
          <div className="heading-side">
            <p>
              Histórias criadas para ampliar repertórios, iniciar conversas e acolher diferentes
              maneiras de aprender, sentir e se relacionar.
            </p>
            <Link href="/catalogo" className="text-link">
              Ver coleção completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="featured-grid">
          {books.slice(0, 4).map((book, index) => (
            <BookCard key={book.slug} book={book} index={index} />
          ))}
        </div>
      </section>

      <section className="purpose-section section-pad">
        <div className="purpose-mark" aria-hidden="true">
          “
        </div>
        <div className="purpose-copy">
          <p className="kicker">Por que existimos</p>
          <h2>
            Um livro pode ser a primeira vez que uma criança se reconhece sem precisar se explicar.
          </h2>
          <p>
            A ROEL desenvolve experiências editoriais que combinam sensibilidade literária, intenção
            pedagógica e compromisso com a inclusão.
          </p>
          <Link href="/impacto" className="button primary">
            Conheça nosso impacto <ArrowRight size={18} />
          </Link>
        </div>
        <div className="purpose-orbits" aria-hidden="true">
          <span />
          <span />
          <span />
          <b>ROEL</b>
        </div>
      </section>

      <section className="audience-section section-pad">
        <div className="section-heading">
          <p className="kicker">Leitura em movimento</p>
          <h2>Histórias que acompanham quem cuida e quem aprende.</h2>
        </div>
        <div className="audience-grid">
          <article>
            <BookOpen />
            <span>Para escolas</span>
            <h3>Material para conversar, aprender e construir convivência.</h3>
            <Link href="/solucoes">
              Soluções educacionais <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <HeartHandshake />
            <span>Para famílias</span>
            <h3>Leituras que ajudam a nomear sentimentos e celebrar singularidades.</h3>
            <Link href="/catalogo">
              Encontrar um livro <ArrowRight size={16} />
            </Link>
          </article>
          <article>
            <Sparkles />
            <span>Para autores e organizações</span>
            <h3>Projetos editoriais conduzidos com clareza, cuidado e propósito.</h3>
            <Link href="/solucoes">
              Conhecer soluções <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
