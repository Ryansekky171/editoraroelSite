import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-page">
          <AlertTriangle aria-hidden="true" />
          <h1>Não foi possível abrir esta página.</h1>
          <p>Atualize o navegador. Se o problema continuar, entre em contato com a Editora ROEL.</p>
          <button type="button" className="button primary" onClick={() => window.location.reload()}>
            Tentar novamente <RotateCcw size={17} />
          </button>
        </main>
      );
    }

    return this.props.children;
  }
}
