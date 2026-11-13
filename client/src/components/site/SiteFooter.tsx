import Brand from "@/components/site/Brand";
import { ArrowUpRight, Instagram, MessagesSquare, Twitch, Youtube } from "lucide-react";
import { Link } from "wouter";

const FOOTER_LINKS = [
  { label: "Team", href: "/#team" },
  { label: "Machine", href: "/#machine" },
  { label: "Drivers", href: "/#drivers" },
  { label: "Live feed", href: "/#live-feed" },
  { label: "Calendar", href: "/#calendar" },
  { label: "Partners", href: "/#partners" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "Twitch", href: "https://www.twitch.tv/", icon: Twitch },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { label: "Discord", href: "https://discord.com/", icon: MessagesSquare },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__top">
        <div className="site-footer__intro">
          <div className="site-footer__mark">
            <Brand linked={false} compact className="site-footer__brand" />
            <span>LSSD / 2026—2026</span>
          </div>
          <h2>Keep it pinned.</h2>
          <p>
            Race programmes, partnerships and driver enquiries. One inbox, no dispatch centre.
          </p>
          <a className="text-link text-link--lime" href="mailto:LSSDRacing@gmail.com">
            LSSDRacing@gmail.com
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="site-footer__nav">
          <div>
            <span className="footer-label">Explore</span>
            {FOOTER_LINKS.map(link => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div>
            <span className="footer-label">Connect</span>
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a href={href} key={label} target="_blank" rel="noreferrer">
                <Icon size={14} strokeWidth={1.6} />
                {label}
              </a>
            ))}
          </div>
          <div>
            <span className="footer-label">Race with us</span>
            <Link href="/join">Open positions</Link>
            <a href="mailto:LSSDRacing@gmail.com?subject=LSSD%20partnership%20enquiry">Partnerships</a>
            <a href="mailto:LSSDRacing@gmail.com?subject=LSSD%20press%20enquiry">Press office</a>
          </div>
        </div>
      </div>

      <div className="site-footer__wordmark" aria-hidden="true">
        <span>LSSD</span>
        <span className="site-footer__wordmark-outline">RACING</span>
      </div>

      <div className="site-footer__bottom">
        <span>© 2026 LSSD Racing. Built for the virtual grid.</span>
        <span className="site-footer__coords">United States · EST local time</span>
        <a href="#top" className="site-footer__top-link">
          Back to top
          <ArrowUpRight size={14} />
        </a>
      </div>
    </footer>
  );
}
