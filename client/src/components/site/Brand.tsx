import { Link } from "wouter";

type BrandProps = {
  className?: string;
  compact?: boolean;
  linked?: boolean;
};

export function LogoMark({ className = "" }: { className?: string }) {
  return <img src="/lssd-icon.png" alt="" className={`brand-icon ${className}`} />;
}

export default function Brand({
  className = "",
  compact = false,
  linked = true,
}: BrandProps) {
  const content = (
    <img
      src="/lssd-logo-original.png"
      alt="LSSD Racing"
      className="brand-logo"
      width="974"
      height="449"
    />
  );
  const classes = `brand brand--plate ${compact ? "brand--compact" : ""} ${className}`.trim();

  if (!linked) {
    return <div className={classes}>{content}</div>;
  }

  return (
    <Link href="/" className={classes} aria-label="LSSD Racing home">
      {content}
    </Link>
  );
}
