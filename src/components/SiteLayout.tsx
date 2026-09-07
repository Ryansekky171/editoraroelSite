import { useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { brand, navItems } from "@/content";

function normalize(path: string) {
  return path === "/" ? "/" : path.replace(/\/+$/, "");
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const current = normalize(location);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="color-ribbon" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>
      <header className="site-header">
        <Link
          href="/"
          className="logo-link"
          aria-label="Editora ROEL — página inicial"
          onClick={() => setOpen(false)}
        >
          <img src={brand.logo} alt="Editora ROEL" />
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={current === item.href ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contato" className="header-contact">
          Fale com a ROEL <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <div className="mobile-panel">
          <nav aria-label="Navegação móvel">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            ))}
            <Link href="/contato" onClick={() => setOpen(false)}>
              <span>06</span>Contato
            </Link>
          </nav>
        </div>
      )}

      {children}

      <footer className="site-footer">
        <div className="footer-callout">
          <p className="kicker">Uma história começa com uma conversa.</p>
          <h2>Vamos abrir caminhos pela leitura?</h2>
          <a href={`mailto:${brand.email}`} className="footer-mail">
            <Mail size={18} /> {brand.email}
          </a>
        </div>
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={brand.logo} alt="Editora ROEL" />
            <p>Literatura infantil, educação e inclusão em cada página.</p>
          </div>
          <div>
            <p className="footer-label">Explore</p>
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="footer-label">Governança</p>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/integridade">Canal de integridade</Link>
          </div>
          <div>
            <p className="footer-label">Contato</p>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <p>São Paulo — SP</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Editora ROEL</p>
          <p>Conteúdo e acervo próprios.</p>
        </div>
      </footer>
    </div>
  );
}
