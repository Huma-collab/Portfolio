import Image from "next/image";
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

function Authors({ list }: { list: string[] }) {
  return (
    <>
      {list.map((a, i) => (
        <span key={a}>
          {a === profile.name ? <strong className="me">{a}</strong> : a}
          {i < list.length - 1 ? ", " : ""}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  const [first, last] = profile.name.split(" ");

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
          <a href="#contact" className="seeking">
            <span className="dot" /> {profile.seeking}
          </a>
          <h1>
            {first}
            <br />
            <em>{last}</em>
          </h1>
          <p className="mono eyebrow">
            {profile.role} · {profile.location}
          </p>
          <p className="lede">{profile.mission}</p>
          <p className="summary">{profile.summary}</p>
          <div className="interests">
            {profile.interests.map((t) => (
              <span key={t} className="tag">
                {t}
              </span>
            ))}
          </div>
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.academicEmail}`}>
              Email me
            </a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className="btn" href={profile.orcid} target="_blank" rel="noreferrer">
              ORCID ↗
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
          <SectionHead index="01" title="Research" />
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

                <figure className="fig">
                  <a className="fig-frame" href={r.figure.src} target="_blank" rel="noreferrer" title="Open full-size figure">
                    <Image
                      src={r.figure.src}
                      alt={r.figure.alt}
                      width={r.figure.w}
                      height={r.figure.h}
                      sizes="(max-width: 820px) 100vw, 1000px"
                    />
                  </a>
                  <figcaption>
                    {r.figure.caption} <span className="fig-hint">Tap to enlarge.</span>
                  </figcaption>
                </figure>

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
          <p className="pub-intro">All three as first author. Manuscripts available on request.</p>
          <ol className="pubs">
            {publications.map((p, i) => (
              <li key={p.title}>
                <span className="mono pub-n">[{i + 1}]</span>
                <div>
                  <p className="pub-title">{p.title}</p>
                  <p className="pub-authors">
                    <Authors list={p.authors} />
                  </p>
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

        {/* EDUCATION */}
        <section className="wrap section">
          <SectionHead index="04" title="Education" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", columnGap: 48 }}>
            {education.map((e) => (
              <div key={e.school} className="edu">
                <p className="mono period">{e.period}</p>
                <h3>{e.degree}</h3>
                <p className="tl-place">
                  {e.school}, {e.place}
                </p>
                {e.detail && <p className="tl-place">{e.detail}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="wrap section">
          <SectionHead index="05" title="Skills" />
          <p className="pub-intro">Drawn from the code in my research repositories.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", columnGap: 48 }}>
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

        {/* PROJECTS */}
        <section id="projects" className="wrap section">
          <SectionHead index="06" title="Earlier projects" />
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

        {/* CONTACT */}
        <section id="contact" className="wrap contact">
          <p className="mono eyebrow">PhD · Research internships</p>
          <h2>{profile.openTo}</h2>
          <p className="contact-detail">{profile.openToDetail}</p>
          <div className="contact-links">
            <a href={`mailto:${profile.academicEmail}`}>{profile.academicEmail}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href={profile.orcid} target="_blank" rel="noreferrer">
              ORCID ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="wrap footer mono">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
