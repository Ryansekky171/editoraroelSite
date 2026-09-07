import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import SiteLayout from "./components/SiteLayout";
import NewHome from "./pages/NewHome";
import {
  BookPage,
  CatalogPage,
  ContactPage,
  ImpactPage,
  IntegrityPage,
  NotFoundPage,
  PrivacyPage,
  SolutionsPage,
  StoryPage,
} from "./pages/NewPages";

function AppRoutes() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={NewHome} />
        <Route path="/catalogo" component={CatalogPage} />
        <Route path="/historia" component={StoryPage} />
        <Route path="/solucoes" component={SolutionsPage} />
        <Route path="/impacto" component={ImpactPage} />
        <Route path="/contato" component={ContactPage} />
        <Route path="/privacidade" component={PrivacyPage} />
        <Route path="/integridade" component={IntegrityPage} />
        <Route path="/livro/:slug">{(params) => <BookPage slug={params.slug} />}</Route>
        <Route component={NotFoundPage} />
      </Switch>
    </SiteLayout>
  );
}

export default function App() {
  const configuredBase = import.meta.env.BASE_URL.replace(/\/$/, "");
  const base = configuredBase === "" ? undefined : configuredBase;

  return (
    <ErrorBoundary>
      <WouterRouter base={base}>
        <AppRoutes />
      </WouterRouter>
    </ErrorBoundary>
  );
}
