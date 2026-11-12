import { useEffect, useRef, useState } from "react";
import {
  profile,
  stats,
  services,
  skills,
  projects,
  experience,
} from "./data.js";

const links = [
  ["about", "About"],
  ["services", "Services"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Section({ id, title, kicker, subtitle, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="section reveal" ref={ref}>
      <div className="container">
        {kicker && <p className="kicker">{kicker}</p>}
        {title && <h2>{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

function Icon({ name }) {
  switch (name) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "layout":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "zap":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    default:
      return null;
  }
}

function Navbar({ theme, onToggle }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="logo">
          <span className="logo-accent">{"<"}</span>
          <span className="logo-name">{profile.name}</span>
          <span className="logo-accent">{" />"}</span>
        </a>

        <nav className={open ? "links open" : "links"}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="mobile-cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn sm primary hide-sm">
            Let's Talk
          </a>
          <button
            className="icon-btn"
            onClick={onToggle}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="icon-btn burger"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-glow-1" aria-hidden="true" />
      <div className="hero-glow-2" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hello">
            <span className="dot" />
            <span>Available for New Projects & Freelance</span>
          </div>

          <h1>
            Hi, I'm <span className="grad">{profile.name}</span>
            <br />
            <span className="hero-subtitle">{profile.role}</span>
          </h1>

          <p className="lead">{profile.tagline}</p>

          <div className="cta">
            <a className="btn primary" href="#projects">
              Explore Projects ↓
            </a>
            <a className="btn" href="#contact">
              Get in Touch
            </a>
            <a
              className="btn ghost whatsapp-btn"
              href={profile.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" /> Chat on WhatsApp
            </a>
          </div>

          <div className="tech-pills">
            <span className="tech-label">Core Stack:</span>
            {["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Redux", "REST APIs", "Vite"].map(
              (tech) => (
                <span className="pill" key={tech}>
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        {/* Interactive Code Preview Card */}
        <div className="hero-card-wrapper">
          <div className="code-card">
            <div className="card-header">
              <span className="dot-win red" />
              <span className="dot-win yellow" />
              <span className="dot-win green" />
              <span className="file-name">developer.js</span>
            </div>
            <pre className="code-block">
              <code>
                <span className="c-keyword">const</span>{" "}
                <span className="c-var">frontEndDev</span> = {"{\n"}
                {"  "}name: <span className="c-str">"{profile.name}"</span>,
                {"\n"}
                {"  "}role: <span className="c-str">"{profile.role}"</span>,
                {"\n"}
                {"  "}speciality: [
                <span className="c-str">"React"</span>,{" "}
                <span className="c-str">"Clean UI"</span>,{" "}
                <span className="c-str">"Performance"</span>
                ],{"\n"}
                {"  "}featuredWork: [
                {"\n"}
                {"    "}<span className="c-accent">"Nutrition System"</span>,
                {"\n"}
                {"    "}<span className="c-accent">"E-Commerce Platform"</span>,
                {"\n"}
                {"    "}<span className="c-accent">"Travel World"</span>
                {"\n"}
                {"  "}],{"\n"}
                {"  "}available: <span className="c-bool">true</span>,{"\n"}
                {"  "}focus: <span className="c-str">"React UI and clear components"</span>
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="container stats-container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <strong className="grad">{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section
      id="about"
      kicker="01 — Overview"
      title="About Me & My Passion"
      subtitle="Responsive React screens, with layout and state kept easy to follow."
    >
      <div className="about-grid">
        <div className="about-text">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <div className="about-cta-row">
            <a className="btn primary sm" href="#projects">
              See Case Studies
            </a>
            <a
              className="btn sm"
              href={`mailto:${profile.email}?subject=${encodeURIComponent("CV request")}`}
            >
              Request CV
            </a>
          </div>
        </div>

        <div className="facts-card">
          <h3>Quick Profile</h3>
          <ul className="facts-list">
            <li>
              <span className="label">Location</span>
              <span className="value">{profile.location} · Remote</span>
            </li>
            <li>
              <span className="label">Primary Role</span>
              <span className="value">{profile.role}</span>
            </li>
            <li>
              <span className="label">Core Specialization</span>
              <span className="value">React · Modern JavaScript · SPA Architecture</span>
            </li>
            <li>
              <span className="label">Direct Contact</span>
              <span className="value highlight-text">{profile.email}</span>
            </li>
            <li>
              <span className="label">WhatsApp</span>
              <span className="value highlight-text">{profile.phone}</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section
      id="services"
      kicker="02 — Expertise"
      title="What I Bring to the Table"
      subtitle="Interfaces, layout, and the data a screen needs to show."
    >
      <div className="grid services-grid">
        {services.map((s) => (
          <div className="service-card" key={s.title}>
            <div className="service-icon">
              <Icon name={s.icon} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section
      id="skills"
      kicker="03 — Tech Stack"
      title="Skills & Technologies"
      subtitle="The languages and tools I use most often."
    >
      <div className="grid skills-grid">
        {skills.map((g) => (
          <div className="skill-group-card" key={g.group}>
            <div className="group-header">
              <h3>{g.group}</h3>
            </div>
            <div className="chips">
              {g.items.map((i) => (
                <span className="chip" key={i}>
                  <span className="chip-bullet">▪</span> {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* UI Preview Mockup Components for the 3 Projects */
function NutritionPreview() {
  return (
    <div className="mockup-ui nutrition-ui">
      <div className="mockup-bar">
        <div className="mockup-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-url">nutriflow.app/dashboard</span>
      </div>
      <div className="mockup-body">
        <div className="nutri-top">
          <div>
            <div className="nutri-label">Daily Calorie Target</div>
            <div className="nutri-val">
              1,850 <span>/ 2,200 kcal</span>
            </div>
          </div>
          <span className="nutri-badge">84% Met</span>
        </div>
        <div className="nutri-progress-track">
          <div className="nutri-progress-fill" style={{ width: "84%" }} />
        </div>
        <div className="macro-row">
          <div className="macro-col">
            <span className="macro-title">Protein</span>
            <div className="macro-bar p-bar" style={{ width: "90%" }} />
            <span className="macro-num">135g / 150g</span>
          </div>
          <div className="macro-col">
            <span className="macro-title">Carbs</span>
            <div className="macro-bar c-bar" style={{ width: "75%" }} />
            <span className="macro-num">180g / 240g</span>
          </div>
          <div className="macro-col">
            <span className="macro-title">Fats</span>
            <div className="macro-bar f-bar" style={{ width: "65%" }} />
            <span className="macro-num">48g / 65g</span>
          </div>
        </div>
        <div className="meal-pill">
          <span>🥗 Salmon Quinoa Bowl</span>
          <span className="meal-kcal">540 kcal · Logged</span>
        </div>
      </div>
    </div>
  );
}

function EcommercePreview() {
  return (
    <div className="mockup-ui ecommerce-ui">
      <div className="mockup-bar">
        <div className="mockup-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-url">shopvibe.store/catalog</span>
      </div>
      <div className="mockup-body">
        <div className="ecom-top">
          <div className="ecom-search">🔍 Search items...</div>
          <div className="ecom-cart">🛒 Cart (3)</div>
        </div>
        <div className="ecom-filter-pills">
          <span className="active">All</span>
          <span>Tech</span>
          <span>Audio</span>
          <span>Wearables</span>
        </div>
        <div className="ecom-card-mini">
          <div className="ecom-product-info">
            <div className="ecom-badge">Sale -25%</div>
            <div className="ecom-name">Wireless ANC Studio Pro</div>
            <div className="ecom-rating">★★★★★ (4.9)</div>
          </div>
          <div className="ecom-buy-row">
            <span className="ecom-price">$149.99</span>
            <span className="ecom-add-btn">+ Add</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelPreview() {
  return (
    <div className="mockup-ui travel-ui">
      <div className="mockup-bar">
        <div className="mockup-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="mockup-url">travelworld.io/explore</span>
      </div>
      <div className="mockup-body">
        <div className="travel-hero-card">
          <div className="travel-location-badge">📍 Santorini, Greece</div>
          <div className="travel-title">Aegean Sunset Expedition</div>
          <div className="travel-meta">
            <span>✈️ Direct Flight</span>
            <span>🏨 5★ Hotel</span>
            <span>☀️ 26°C Sunny</span>
          </div>
          <div className="travel-booking-row">
            <div>
              <span className="travel-price">$590</span>
              <span className="travel-days"> / 5 Days Tour</span>
            </div>
            <span className="travel-book-btn">Book Trip ↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <Section
      id="projects"
      kicker="04 — Featured Work"
      title="Selected Projects"
      subtitle="Three React interfaces: a nutrition tracker, a storefront, and a travel planner. Demos and source are shared on request."
    >
      <div className="projects-wrapper">
        {projects.map((p, index) => (
          <article className="project-card" key={p.id}>
            <div className="project-preview-wrapper">
              {p.previewType === "nutrition" && <NutritionPreview />}
              {p.previewType === "ecommerce" && <EcommercePreview />}
              {p.previewType === "travel" && <TravelPreview />}
            </div>

            <div className="project-info">
              <div className="project-top-meta">
                <span className="project-num">0{index + 1}</span>
                <span className="project-badge">{p.badge}</span>
              </div>

              <h3 className="project-title">{p.title}</h3>
              <p className="project-tagline">{p.tagline}</p>
              <p className="project-desc">{p.description}</p>

              <div className="project-highlights">
                <h4>Key Features & Highlights:</h4>
                <ul>
                  {p.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="chips tags-chips">
                {p.tags.map((t) => (
                  <span className="chip mono" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              {!p.live && !p.code ? (
                <p className="project-note">
                  Live demo and source code are shared on request.
                </p>
              ) : null}
              <div className="project-actions">
                {p.live ? (
                  <a
                    className="btn primary sm"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                ) : null}
                {p.code ? (
                  <a
                    className="btn sm"
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code ↗
                  </a>
                ) : null}
                {!p.live && !p.code ? (
                  <a
                    className="btn primary sm"
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(
                      `Walkthrough: ${p.title}`
                    )}`}
                  >
                    Request walkthrough
                  </a>
                ) : null}
                <button
                  className="btn ghost sm"
                  onClick={() => setActiveProject(p)}
                >
                  Quick Overview
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div
          className="modal-backdrop"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span className="project-badge">{activeProject.badge}</span>
                <h3>{activeProject.title}</h3>
                <p className="modal-tagline">{activeProject.tagline}</p>
              </div>
              <button
                className="modal-close"
                onClick={() => setActiveProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <h4>Project Summary</h4>
              <p>{activeProject.description}</p>

              <h4>Architecture & Key Features</h4>
              <ul className="modal-features">
                {activeProject.highlights.map((h, i) => (
                  <li key={i}>
                    <strong>Feature {i + 1}:</strong> {h}
                  </li>
                ))}
              </ul>

              <h4>Tech Stack</h4>
              <div className="chips">
                {activeProject.tags.map((t) => (
                  <span className="chip mono" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="modal-footer-cta">
                {activeProject.live ? (
                  <a
                    className="btn primary"
                    href={activeProject.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Live Demo ↗
                  </a>
                ) : null}
                {activeProject.code ? (
                  <a
                    className="btn"
                    href={activeProject.code}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub Repository ↗
                  </a>
                ) : (
                  <a
                    className="btn primary"
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(
                      `Walkthrough: ${activeProject.title}`
                    )}`}
                  >
                    Request a walkthrough
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      kicker="05 — Career & Background"
      title="Background"
      subtitle="Personal projects and self-directed study in React and modern CSS."
    >
      <div className="timeline">
        {experience.map((e) => (
          <div className="t-item" key={e.period}>
            <span className="t-period mono">{e.period}</span>
            <div className="t-role-row">
              <h3>{e.role}</h3>
              <span className="t-company">{e.company}</span>
            </div>
            <p className="t-place">📍 {e.location}</p>
            <p className="t-summary">{e.summary}</p>
            <ul className="t-achievements">
              {e.achievements.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${f.get("name")}`
    );
    const body = encodeURIComponent(
      `Hello Mohamed,\n\n${f.get("message")}\n\nBest regards,\n${f.get(
        "name"
      )} (${f.get("email")})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <Section
      id="contact"
      kicker="06 — Get In Touch"
      title="Let's Build Something Great Together"
      subtitle="Looking for a dedicated Front-End Developer for a project, contract, or full-time opportunity? Let's talk!"
    >
      <div className="contact-wrapper">
        <div className="contact-info">
          <p className="contact-lead">
            I am always open to discussing new web development projects, freelance opportunities, or full-time roles. Feel free to reach out via email, WhatsApp, or through the contact form.
          </p>

          <div className="contact-quick-cards">
            <div className="quick-contact-card">
              <span className="qc-label">Direct Email</span>
              <div className="qc-row">
                <a className="qc-link" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
                <button
                  className="btn ghost sm copy-btn"
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                >
                  {copied ? "✓ Copied!" : "📋 Copy"}
                </button>
              </div>
            </div>

            <div className="quick-contact-card">
              <span className="qc-label">WhatsApp Direct</span>
              <div className="qc-row">
                <span className="qc-link">{profile.phone}</span>
                <a
                  className="btn sm primary-green"
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="whatsapp" /> Message Now
                </a>
              </div>
            </div>
          </div>

          <div className="social-links-block">
            <span className="social-heading">Connect with me:</span>
            <div className="socials-list">
              {profile.socials.map((s) => (
                <a
                  className="social-btn"
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                >
                  <Icon name={s.icon} />
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form className="card form contact-form" onSubmit={onSubmit}>
          <h3>Send a Message</h3>
          <label>
            Your Name
            <input
              name="name"
              required
              placeholder="e.g. Sarah Smith"
              autoComplete="name"
            />
          </label>
          <label>
            Your Email
            <input
              name="email"
              type="email"
              required
              placeholder="sarah@example.com"
              autoComplete="email"
            />
          </label>
          <label>
            Message / Project Details
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Tell me about your project, timeline, or questions..."
            />
          </label>
          <button className="btn primary submit-btn" type="submit">
            {submitted ? "✓ Opening your email client..." : "Send Message ✉"}
          </button>
        </form>
      </div>
    </Section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme");
      if (saved) return saved;
    } catch {}
    return window.matchMedia?.("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio_theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app-shell">
      <Navbar theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <span className="footer-brand">
              {"<"}
              {profile.name}
              {" />"}
            </span>
            <p>Front-End Developer · React & Modern Web Applications</p>
          </div>
          <div className="footer-links">
            <a href="#top">Back to top ↑</a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <div className="footer-copy">
            © {new Date().getFullYear()} {profile.name}. Designed & built with React & Vite.
          </div>
        </div>
      </footer>
    </div>
  );
}
