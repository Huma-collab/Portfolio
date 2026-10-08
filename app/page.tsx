import Pulse from "@/components/Pulse";
import {
  profile,
  highlights,
  research,
  publications,
  experience,
  projects,
  education,
  skills,
} from "@/data/cv";

const nav = [
  ["Research", "#research"],
  ["Publications", "#publications"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <header className="section-head">
      <span className="mono idx">{index}</span>
      <h2>{title}</h2>
    </header>
  );
}

export default function Home() {
  return (
    <>
      <nav className="topbar">
        <a href="#top" className="brand">
          HS<span>.</span>
        </a>
        <ul>
          {nav.map(([label, href]) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main id="top">
        {/* HERO */}
        <section className="hero wrap">
          <p className="mono eyebrow">
            <span className="dot" /> {profile.role} · {profile.location}
          </p>
          <h1>
            {profile.name.split(" ")[0]}
            <br />
            <em>{profile.name.split(" ")[1]}</em>
          </h1>
          <p className="lede">{profile.mission}</p>
          <p className="summary">{profile.summary}</p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
          </div>
        </section>

        <Pulse />

        <section className="wrap stats">
          {highlights.map((h) => (
            <div key={h.label} className="stat">
              <span className="stat-v">{h.value}</span>
              <span className="stat-k">{h.label}</span>
            </div>
          ))}
        </section>

        {/* RESEARCH */}
        <section id="research" className="wrap section">
          <SectionHead index="01" title="Current research" />
          <div className="research">
            {research.map((r) => (
              <article key={r.title} className="card research-card">
                <div className="rc-top">
                  <span className="mono period">{r.period}</span>
                  <div className="tags">
                    {r.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3>{r.title}</h3>
                <p className="subtitle">{r.subtitle}</p>
                <dl className="metrics">
                  {r.metrics.map((m) => (
                    <div key={m.k}>
                      <dt className="mono">{m.k}</dt>
                      <dd>{m.v}</dd>
                    </div>
                  ))}
                </dl>
                <ul className="points">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="rc-foot">
                  {r.note && <p className="mono note">{r.note}</p>}
                  {r.code && (
                    <a className="code-link" href={r.code} target="_blank" rel="noreferrer">
                      View code on GitHub ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="publications" className="wrap section">
          <SectionHead index="02" title="Publications" />
          <ol className="pubs">
            {publications.map((p, i) => (
              <li key={p.title}>
                <span className="mono pub-n">[{i + 1}]</span>
                <div>
                  <p className="pub-title">{p.title}</p>
                  <p className="pub-meta">
                    <em>{p.venue}</em>, {p.year} · <span className="status">{p.status}</span>
                    {p.link && (
                      <>
                        {" · "}
                        <a href={p.link} target="_blank" rel="noreferrer">
                          {p.linkLabel} ↗
                        </a>
                      </>
                    )}
                    {p.code && (
                      <>
                        {" · "}
                        <a href={p.code} target="_blank" rel="noreferrer">
                          Code ↗
                        </a>
                      </>
                    )}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="wrap section">
          <SectionHead index="03" title="Experience" />
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.org + e.period}>
                <div className="tl-when mono">{e.period}</div>
                <div className="tl-body">
                  <h3>
                    {e.role} <span className="at">at</span> {e.org}
                  </h3>
                  <p className="tl-place">
                    {e.place}
                    {e.focus && <> · {e.focus}</>}
                  </p>
                  <ul className="points">
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="wrap section">
          <SectionHead index="04" title="Earlier projects" />
          <div className="grid2">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <p className="mono period">{p.kind}</p>
                <h3>{p.title}</h3>
                <p className="body">{p.text}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EDUCATION + SKILLS */}
        <section className="wrap section split">
          <div>
            <SectionHead index="05" title="Education" />
            {education.map((e) => (
              <div key={e.school} className="edu">
                <p className="mono period">{e.period}</p>
                <h3>{e.degree}</h3>
                <p className="tl-place">
                  {e.school}, {e.place}
                </p>
              </div>
            ))}
          </div>
          <div>
            <SectionHead index="06" title="Skills" />
            {skills.map((s) => (
              <div key={s.group} className="skill">
                <p className="mono period">{s.group}</p>
                <div className="tags">
                  {s.items.map((i) => (
                    <span key={i} className="tag">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="wrap contact">
          <p className="mono eyebrow">Let&apos;s work together</p>
          <h2>{profile.openTo}</h2>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <span>{profile.phone}</span>
          </div>
        </section>
      </main>

      <footer className="wrap footer mono">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
