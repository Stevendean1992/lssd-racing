import Brand from "@/components/site/Brand";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const NAV_ITEMS = [
  { label: "Team", href: "/#team" },
  { label: "Machine", href: "/#machine" },
  { label: "Drivers", href: "/#drivers" },
  { label: "Live", href: "/#live-feed" },
  { label: "Calendar", href: "/#calendar" },
  { label: "Partners", href: "/#partners" },
];

export default function SiteHeader() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-menu-open" : ""}`}>
        <div className="site-header__inner">
          <Brand className="site-header__brand" />

          <nav className="site-nav" aria-label="Primary navigation">
            {NAV_ITEMS.map(item => (
              <a className="site-nav__link" href={item.href} key={item.href}>
                <span>{item.label}</span>
                <span className="site-nav__index">0{NAV_ITEMS.indexOf(item) + 1}</span>
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <span className="season-status">
              <span className="live-dot" aria-hidden="true" />
              2026 season
            </span>
            <Link className="button button--lime button--compact site-header__cta" href="/join">
              Join the grid
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
            <button
              className="menu-toggle"
              type="button"
              onClick={() => setMenuOpen(open => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${menuOpen ? "is-open" : ""}`} id="mobile-navigation" aria-hidden={!menuOpen}>
        <div className="mobile-nav__top">
          <span className="eyebrow">Navigation / 2026</span>
          <span className="mobile-nav__coords">United States / EST</span>
        </div>
        <nav className="mobile-nav__links" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
              <span className="mobile-nav__index">0{index + 1}</span>
              <span>{item.label}</span>
              <ArrowUpRight size={26} strokeWidth={1.4} />
            </a>
          ))}
          <Link href="/join" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
            <span className="mobile-nav__index">07</span>
            <span>Join the grid</span>
            <ArrowUpRight size={26} strokeWidth={1.4} />
          </Link>
        </nav>
        <div className="mobile-nav__footer">
          <a href="mailto:LSSDRacing@gmail.com">LSSDRacing@gmail.com</a>
          <span>United States / EST</span>
        </div>
      </div>
    </>
  );
}
