type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
  tone?: "light" | "dark" | "lime";
  align?: "left" | "split";
};

export default function SectionHeading({
  index,
  label,
  title,
  description,
  tone = "dark",
  align = "split",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${tone} section-heading--${align}`}>
      <div className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__slash">/</span>
        <span className="section-heading__label">{label}</span>
      </div>
      <div className="section-heading__body">
        <h2 className="section-heading__title">{title}</h2>
        {description && <p className="section-heading__description">{description}</p>}
      </div>
    </div>
  );
}
