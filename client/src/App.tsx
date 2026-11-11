import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";
import { ThemeProvider } from "@/contexts/ThemeContext";
import DriverProfile from "@/pages/DriverProfile";
import Home from "@/pages/Home";
import Join from "@/pages/Join";
import NotFound from "@/pages/NotFound";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";

function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollManager />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/drivers/:slug" component={DriverProfile} />
        <Route path="/join" component={Join} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <div className="site-shell">
          <SiteHeader />
          <main className="site-main">
            <Router />
          </main>
          <SiteFooter />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
