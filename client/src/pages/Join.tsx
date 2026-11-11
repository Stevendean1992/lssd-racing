import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { FAQS, IMAGES, OPEN_ROLES } from "@/data/team";
import { usePageMeta } from "@/hooks/usePageMeta";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Plus } from "lucide-react";
import { type FormEvent, useState } from "react";

type FormState = {
  name: string;
  email: string;
  role: string;
  experience: string;
  message: string;
  portfolio: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  role: "",
  experience: "",
  message: "",
  portfolio: "",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Send the work",
    text: "A complete application with a clear discipline, relevant experience and one honest reason you want this programme.",
  },
  {
    number: "02",
    title: "Talk pace",
    text: "A short conversation with the relevant lead. We want to understand how you prepare, not just what you have won.",
  },
  {
    number: "03",
    title: "Run the test",
    text: "Shortlisted drivers and engineers complete a controlled session with our reference setup. No tricks, no hidden fuel loads.",
  },
];

export default function Join() {
  usePageMeta(
    "Join the Grid — Sim Racing Careers",
    "Apply to join LSSD Racing's 2027 programme across GT Endurance, Stock Car and Rally. Open roles for drivers, race engineers and broadcast operators.",
  );

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [draftOpened, setDraftOpened] = useState(false);

  const updateField = (field: keyof FormState, value: string) => {
    setForm(current => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors(current => ({ ...current, [field]: undefined }));
    }
  };

  const selectRole = (role: string) => {
    updateField("role", role);
    document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) nextErrors.name = "Tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = "Enter a valid email address.";
    if (!form.role) nextErrors.role = "Choose a discipline.";
    if (form.experience.trim().length < 20) nextErrors.experience = "Give us at least a sentence on your experience.";
    if (form.message.trim().length < 30) nextErrors.message = "Tell us a little more — at least 30 characters.";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setDraftOpened(false);
      const firstError = document.querySelector<HTMLElement>("[data-invalid='true']");
      firstError?.focus();
      return;
    }

    const subject = `LSSD Racing application — ${form.role} — ${form.name.trim()}`;
    const body = [
      "LSSD Racing / 2027 application",
      "",
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      `Discipline: ${form.role}`,
      `Portfolio / profile: ${form.portfolio.trim() || "Not provided"}`,
      "",
      "Experience",
      form.experience.trim(),
      "",
      "Why LSSD?",
      form.message.trim(),
    ].join("\n");

    window.location.href = `mailto:race@lssdracing.gg?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setDraftOpened(true);
  };

  return (
    <div className="join-page">
      <section className="join-hero" aria-labelledby="join-title">
        <div className="join-hero__image" aria-hidden="true">
          <img src={IMAGES.rig} alt="" />
        </div>
        <div className="join-hero__wash" aria-hidden="true" />
        <div className="container join-hero__inner">
          <div className="join-hero__topline">
            <span>Careers / LSSD Racing</span>
            <span className="live-dot-label"><span className="live-dot" /> 2027 intake open</span>
            <span>Rotterdam / NL</span>
          </div>

          <div className="join-hero__grid">
            <div>
              <p className="eyebrow">Drivers / Engineers / Operators</p>
              <h1 id="join-title">
                Join
                <br />
                the grid<span>.</span>
              </h1>
            </div>
            <div className="join-hero__copy">
              <p>
                We are not looking for the loudest profile. We are looking for the person
                who can show their work, take a debrief and make the next stint, stage or
                restart cleaner.
              </p>
              <a className="button button--lime" href="#open-roles">
                See open roles
                <ArrowDown size={17} />
              </a>
            </div>
          </div>

          <div className="join-hero__ticker">
            <span>Driver development</span>
            <span>/</span>
            <span>Race engineering</span>
            <span>/</span>
            <span>Strategy</span>
            <span>/</span>
            <span>Broadcast</span>
            <span>/</span>
            <span>No shortcuts</span>
          </div>
        </div>
      </section>

      <section className="join-open section--paper" id="open-roles" aria-labelledby="open-roles-title">
        <div className="container">
            <SectionHeading
              index="01"
              label="Open positions"
              title="Make the team faster."
              description="GT Endurance, Stock Car and Rally. If your role is not listed, make the case anyway. A good application is allowed to create its own seat."
            tone="light"
          />

          <div className="role-grid">
            {OPEN_ROLES.map((role, index) => (
              <Reveal key={role.title} delay={index * 0.07}>
                <button className="role-card" type="button" onClick={() => selectRole(role.title)}>
                  <span className="role-card__index">0{index + 1} / {role.type}</span>
                  <span className="role-card__title">{role.title}</span>
                  <span className="role-card__detail">{role.detail}</span>
                  <span className="role-card__action">
                    Apply for this role
                    <ArrowUpRight size={17} />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="process-block" aria-labelledby="process-title">
            <div className="process-block__intro">
              <p className="eyebrow eyebrow--dark">The process</p>
              <h3 id="process-title">No mystery.<br />No hidden tests.</h3>
              <p>
                We keep selection simple because we want to see how you think, not how well
                you can perform a recruitment ritual.
              </p>
            </div>
            <div className="process-list">
              {PROCESS_STEPS.map(step => (
                <Reveal className="process-step" key={step.number}>
                  <span>{step.number}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="join-apply section--ink" id="application-form" aria-labelledby="apply-title">
        <div className="container">
          <div className="join-apply__grid">
            <div className="join-apply__intro">
              <p className="eyebrow">02 / Application</p>
              <h2 id="apply-title">Show us the<br /><span>race brain.</span></h2>
              <p>
                This form prepares an email in your mail app. Nothing is submitted to a
                server, and we do not store your details on this site.
              </p>

              <div className="join-apply__notes">
                <div>
                  <Check size={15} />
                  <span>Every complete application gets a reply.</span>
                </div>
                <div>
                  <Check size={15} />
                  <span>No fee, no subscription, no pay-to-race seat.</span>
                </div>
                <div>
                  <Check size={15} />
                  <span>Reasonable schedule conflicts are not disqualifying.</span>
                </div>
              </div>

              <div className="join-apply__contact">
                <span>Prefer to write directly?</span>
                <a href="mailto:race@lssdracing.gg">
                  race@lssdracing.gg
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>

            <form className="application-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="applicant-name">Name <span>*</span></label>
                  <input
                    id="applicant-name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={event => updateField("name", event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    data-invalid={Boolean(errors.name)}
                    placeholder="Alex Morgan"
                  />
                  {errors.name && <span className="form-error" id="name-error">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="applicant-email">Email <span>*</span></label>
                  <input
                    id="applicant-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={event => updateField("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    data-invalid={Boolean(errors.email)}
                    placeholder="alex@example.com"
                  />
                  {errors.email && <span className="form-error" id="email-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="applicant-role">Discipline <span>*</span></label>
                  <select
                    id="applicant-role"
                    name="role"
                    value={form.role}
                    onChange={event => updateField("role", event.target.value)}
                    aria-invalid={Boolean(errors.role)}
                    aria-describedby={errors.role ? "role-error" : undefined}
                    data-invalid={Boolean(errors.role)}
                  >
                    <option value="">Select a discipline</option>
                    {OPEN_ROLES.map(role => (
                      <option value={role.title} key={role.title}>{role.title}</option>
                    ))}
                    <option value="Other">Other / make the case</option>
                  </select>
                  {errors.role && <span className="form-error" id="role-error">{errors.role}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="applicant-portfolio">Profile / portfolio</label>
                  <input
                    id="applicant-portfolio"
                    name="portfolio"
                    type="url"
                    value={form.portfolio}
                    onChange={event => updateField("portfolio", event.target.value)}
                    placeholder="https://"
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="applicant-experience">Relevant experience <span>*</span></label>
                <textarea
                  id="applicant-experience"
                  name="experience"
                  rows={3}
                  value={form.experience}
                  onChange={event => updateField("experience", event.target.value)}
                  aria-invalid={Boolean(errors.experience)}
                  aria-describedby={errors.experience ? "experience-error" : undefined}
                  data-invalid={Boolean(errors.experience)}
                  placeholder="Series, role, years, hardware, software, notable results — whatever tells the story."
                />
                {errors.experience && <span className="form-error" id="experience-error">{errors.experience}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="applicant-message">Why LSSD? <span>*</span></label>
                <textarea
                  id="applicant-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={event => updateField("message", event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  data-invalid={Boolean(errors.message)}
                  placeholder="Tell us how you prepare, what you want to learn, and what you would bring to the team."
                />
                {errors.message && <span className="form-error" id="message-error">{errors.message}</span>}
              </div>

              <div className="application-form__submit">
                <button className="button button--lime" type="submit">
                  Prepare application
                  <ArrowRight size={17} />
                </button>
                <span>Opens a prefilled email draft.</span>
              </div>

              <div className="application-form__status" aria-live="polite">
                {draftOpened && (
                  <>
                    <Check size={16} />
                    <span>Draft ready. Your mail app should be open — review it and hit send.</span>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="join-faq section--paper" aria-labelledby="faq-title">
        <div className="container">
          <div className="join-faq__grid">
            <div className="join-faq__intro">
              <p className="eyebrow eyebrow--dark">03 / Questions</p>
              <h2 id="faq-title">Before you<br />hit send.</h2>
              <p>
                Still uncertain? Write to us with the part that does not fit in the form.
                We would rather answer a good question than lose a good applicant.
              </p>
              <a className="text-link text-link--dark" href="mailto:race@lssdracing.gg">
                Ask the team
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="faq-list">
              {FAQS.map((faq, index) => (
                <details className="faq-item" key={faq.question}>
                  <summary>
                    <span className="faq-item__index">0{index + 1}</span>
                    <span>{faq.question}</span>
                    <Plus className="faq-item__icon" size={20} />
                  </summary>
                  <div className="faq-item__answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="join-contact-cta" aria-labelledby="join-contact-title">
        <div className="container">
          <div>
            <p className="eyebrow eyebrow--dark">One inbox. Real people.</p>
            <h2 id="join-contact-title">Bring the work.<br />We’ll bring the grid.</h2>
          </div>
          <a className="button button--dark" href="mailto:race@lssdracing.gg">
            race@lssdracing.gg
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </div>
  );
}
