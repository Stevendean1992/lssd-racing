import Brand from "@/components/site/Brand";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

// Hosting answers this path with HTTP 404 while still serving the app.
const NOT_FOUND_PATH = "/404";

export default function NotFound() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const robots = document.createElement("meta");
    robots.name = "robots";
    robots.content = "noindex";
    document.head.appendChild(robots);
    document.title = "Page not found | LSSD Racing";

    // Full-page navigation preserves the real 404 response from the host.
    if (window.location.pathname.replace(/\/$/, "") !== NOT_FOUND_PATH) {
      window.location.replace(NOT_FOUND_PATH);
    }

    return () => robots.remove();
  }, []);

  return (
    <section className="not-found">
      <div className="not-found__grid" aria-hidden="true" />
      <div className="container not-found__inner">
        <div className="not-found__mark">
          <Brand linked={false} compact className="not-found__brand" />
          <span>LSSD / System status</span>
        </div>
        <p className="eyebrow">Error code / 404</p>
        <h1>
          Lost the
          <br />
          racing line<span>.</span>
        </h1>
        <p className="not-found__copy">
          This page is outside the track limits. The timing screen cannot find a reference
          for the address you entered.
        </p>
        <button className="button button--lime" type="button" onClick={() => setLocation("/")}>
          <ArrowLeft size={17} />
          Back to the garage
        </button>
        <div className="not-found__coords">
          <span>51.9244° N</span>
          <span>4.4777° E</span>
          <span>No signal</span>
        </div>
      </div>
    </section>
  );
}
