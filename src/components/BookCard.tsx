import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import type { Book } from "@/content";

export default function BookCard({ book, index }: { book: Book; index: number }) {
  return (
    <article className={`book-card tone-${book.color}`}>
      <div className="book-card-top">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{book.theme}</span>
      </div>
      <Link
        href={`/livro/${book.slug}`}
        className="book-image-wrap"
        aria-label={`Conhecer ${book.title}`}
      >
        {book.image ? <img src={book.image} alt={`Capa do livro ${book.title}`} /> : null}
      </Link>
      <div className="book-card-copy">
        <p>{book.collection}</p>
        <h3>{book.title}</h3>
        <Link href={`/livro/${book.slug}`} className="text-link">
          Conhecer o livro <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}
