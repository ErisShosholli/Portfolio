import Image from "next/image";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { RevealMotion } from "./RevealMotion";
import { SignalCanvas } from "./SignalCanvas";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  TerminalSquare
} from "lucide-react";
import {
  SiDocker,
  SiFastapi,
  SiFlask,
  SiFramer,
  SiGit,
  SiGithub,
  SiGreensock,
  SiJavascript,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPytest,
  SiPython,
  SiReact,
  SiSqlalchemy,
  SiSqlite,
  SiPydantic,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from "react-icons/si";

const projects = [
  {
    name: "EURO AL-SHPK Website",
    type: "Full-stack / Corporate website / SEO",
    href: "https://github.com/ErisShosholli/EURO-AL-SHPK",
    summary:
      "Premium corporate website for an aluminum systems company, built as a high-end brand experience with product, project, service, FAQ, and contact flows.",
    impact: [
      "Next.js 15 App Router project with TypeScript, Tailwind CSS, Framer Motion, GSAP, and reusable section components.",
      "Includes product cards, animated statistics, project masonry gallery with filters and lightbox, testimonials, FAQ accordion, and Google Maps contact embed.",
      "Built with SEO metadata, OpenGraph data, JSON-LD structured data, responsive layouts, and polished motion for desktop, tablet, and mobile."
    ],
    signals: ["Next.js 15", "SEO + JSON-LD", "Motion UI"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "React"]
  },
  {
    name: "FieldRoute",
    type: "Backend / DevOps / Full-stack",
    href: "https://github.com/yllveliu/fieldroute",
    summary:
      "Field-service dispatch platform for scheduling jobs, tracking technicians, and managing parts inventory.",
    impact: [
      "FastAPI backend with SQLAlchemy models, PostgreSQL storage, and Alembic migration history.",
      "Docker Compose environment for API, frontend, and database services with seed data and health endpoints.",
      "Includes role-aware workflows, inventory logic, AI-adjacent services, and Playwright E2E coverage."
    ],
    signals: ["API + DB", "Dockerized", "E2E tested"],
    stack: ["FastAPI", "PostgreSQL", "Docker", "Alembic", "React", "TypeScript", "Playwright"]
  },
  {
    name: "CareerFlow Testing App",
    type: "API testing / Flask backend",
    href: "https://github.com/ErisShosholli/SoftwareTestingApp",
    summary:
      "Career opportunity management app with bearer-token auth, REST resources, and layered test coverage.",
    impact: [
      "Built authenticated CRUD resources for users, opportunities, and applications.",
      "Validated duplicate applications, email formats, status flows, and employment type rules.",
      "Verified with 39 pytest cases, 94% coverage, and 91 Postman assertions with 0 failures."
    ],
    signals: ["94% coverage", "91 assertions", "39 tests"],
    stack: ["Flask", "SQLAlchemy", "SQLite", "pytest", "Postman", "Newman"]
  },
  {
    name: "Library Lending API",
    type: "Backend API",
    href: "https://github.com/ErisShosholli/FastAPI-Library",
    summary:
      "REST API for library lending workflows across books, authors, categories, members, loans, and reports.",
    impact: [
      "Implemented API key protection for write operations and open read endpoints for discovery.",
      "Modeled many-to-many authorship, loan history, overdue reporting, and conflict-safe delete rules.",
      "Optimized search behavior with eager loading, filtering, sorting, pagination, and focused pytest coverage."
    ],
    signals: ["API key auth", "Reports", "Pagination"],
    stack: ["FastAPI", "SQLAlchemy", "Pydantic", "SQLite", "pytest"]
  },
  {
    name: "GigaMentees CRUD",
    type: "Database / CLI",
    href: "https://github.com/ErisShosholli/GigaMentees-CRUD",
    summary:
      "Python CLI for managing mentees and assessment scores with PostgreSQL running in Docker.",
    impact: [
      "Created relational tables for mentees, assessments, and assessment scores with constraints.",
      "Added report queries for averages, low performers, and assessment summaries.",
      "Recorded assessment scores through a single transaction to keep database writes consistent."
    ],
    signals: ["Transactions", "Docker DB", "SQL reports"],
    stack: ["Python", "PostgreSQL", "Docker Compose", "SQL", "Make"]
  }
];

const heroChips = ["DevOps workflows", "Full-stack delivery", "FastAPI APIs", "PostgreSQL data"];

const techRail = [
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Flask", icon: SiFlask, color: "#f4f7f5" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
  { name: "Linux", icon: SiLinux, color: "#fcc624" },
  { name: "SQLAlchemy", icon: SiSqlalchemy, color: "#d71f00" },
  { name: "pytest", icon: SiPytest, color: "#0a9edc" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" }
];

const logoCloud = [
  { name: "Python", icon: SiPython, color: "#3776ab", x: "7%", y: "18%", size: 74, delay: "-4s", duration: "18s" },
  { name: "Docker", icon: SiDocker, color: "#2496ed", x: "86%", y: "16%", size: 82, delay: "-10s", duration: "22s" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", x: "69%", y: "34%", size: 68, delay: "-2s", duration: "19s" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", x: "18%", y: "44%", size: 62, delay: "-13s", duration: "24s" },
  { name: "Linux", icon: SiLinux, color: "#fcc624", x: "92%", y: "52%", size: 58, delay: "-7s", duration: "20s" },
  { name: "React", icon: SiReact, color: "#61dafb", x: "8%", y: "72%", size: 72, delay: "-15s", duration: "25s" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", x: "78%", y: "78%", size: 64, delay: "-5s", duration: "21s" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5fa04e", x: "45%", y: "16%", size: 56, delay: "-11s", duration: "23s" },
  { name: "GitHub", icon: SiGithub, color: "#f4f7f5", x: "36%", y: "62%", size: 62, delay: "-1s", duration: "18s" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff", x: "58%", y: "88%", size: 50, delay: "-9s", duration: "20s" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37", x: "23%", y: "86%", size: 54, delay: "-6s", duration: "22s" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", x: "94%", y: "84%", size: 52, delay: "-16s", duration: "24s" }
];

const systemNodes = [
  { name: "FastAPI", icon: SiFastapi, color: "#009688", x: "50%", y: "4%", delay: "-1.2s" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", x: "86%", y: "34%", delay: "-3.8s" },
  { name: "Docker", icon: SiDocker, color: "#2496ed", x: "72%", y: "82%", delay: "-6.1s" },
  { name: "Linux", icon: SiLinux, color: "#fcc624", x: "21%", y: "76%", delay: "-8.4s" },
  { name: "pytest", icon: SiPytest, color: "#0a9edc", x: "14%", y: "31%", delay: "-10.2s" }
];

const consoleLines = [
  "docker compose up api db tests",
  "alembic upgrade head",
  "pytest -q --disable-warnings",
  "uvicorn app.main:app --reload",
  "git push origin backend-devops"
];

const hudStats = [
  { label: "API", value: "FastAPI" },
  { label: "DB", value: "PostgreSQL" },
  { label: "CI", value: "pytest" }
];

const pipelineSteps = [
  {
    icon: Database,
    label: "Model",
    title: "Shape the data",
    copy: "Schema, constraints, ORM models, and migrations that keep writes predictable."
  },
  {
    icon: Server,
    label: "Build",
    title: "Expose the API",
    copy: "FastAPI and Flask endpoints with validation, service logic, and clean boundaries."
  },
  {
    icon: ShieldCheck,
    label: "Verify",
    title: "Prove behavior",
    copy: "pytest, Postman, Newman, and E2E checks around the flows that matter."
  },
  {
    icon: SiDocker,
    label: "Package",
    title: "Containerize",
    copy: "Docker Compose environments for repeatable local setup and deployable structure."
  },
  {
    icon: TerminalSquare,
    label: "Ship",
    title: "Document delivery",
    copy: "Clear run commands, setup notes, health checks, and repository discipline."
  }
];

const stackIcons: Record<string, { icon: IconType; color: string }> = {
  Python: { icon: SiPython, color: "#3776ab" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Flask: { icon: SiFlask, color: "#f4f7f5" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  Docker: { icon: SiDocker, color: "#2496ed" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  React: { icon: SiReact, color: "#61dafb" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06b6d4" },
  "Framer Motion": { icon: SiFramer, color: "#ffffff" },
  GSAP: { icon: SiGreensock, color: "#88ce02" },
  SQLAlchemy: { icon: SiSqlalchemy, color: "#d71f00" },
  SQLite: { icon: SiSqlite, color: "#003b57" },
  Pydantic: { icon: SiPydantic, color: "#e92063" },
  pytest: { icon: SiPytest, color: "#0a9edc" },
  Postman: { icon: SiPostman, color: "#ff6c37" }
};

const focusAreas = [
  {
    icon: Server,
    title: "Backend systems",
    copy: "API-first services, service boundaries, validation, authentication, and maintainable business logic."
  },
  {
    icon: Database,
    title: "Data foundations",
    copy: "PostgreSQL, SQLite, schema design, ORM modeling, migrations, reporting queries, and transaction safety."
  },
  {
    icon: TerminalSquare,
    title: "DevOps habits",
    copy: "Dockerized local environments, Linux workflows, Git discipline, clear setup docs, and deployable structure."
  },
  {
    icon: ShieldCheck,
    title: "Quality evidence",
    copy: "Unit, integration, API, system, Postman, Newman, and Playwright tests where the project needs confidence."
  }
];

const skillGroups = [
  {
    title: "Backend",
    items: ["Python", "FastAPI", "Flask", "Node.js", "REST APIs", "SQLAlchemy", "Pydantic"]
  },
  {
    title: "DevOps & data",
    items: ["Linux", "Docker Compose", "PostgreSQL", "SQLite", "Alembic", "Git", "GitHub"]
  },
  {
    title: "Testing",
    items: ["pytest", "Postman", "Newman", "Playwright", "Coverage reports", "API validation"]
  },
  {
    title: "Frontend range",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "Vite"]
  }
];

const experience = [
  {
    role: "Full Stack Engineer Intern",
    company: "Genpact",
    period: "March 2026 - June 2026",
    location: "Kosovo",
    copy:
      "Contributed to production-level applications, API integration, and collaborative development workflows in a professional engineering environment."
  },
  {
    role: "Coding Trainer",
    company: "Logiscool Mitrovica",
    period: "November 2025 - February 2026",
    location: "District of Mitrovica, Kosovo",
    copy:
      "Taught programming concepts clearly, supported young learners, and strengthened documentation and explanation skills."
  }
];

const certifications = [
  "Claude Code Certification",
  "Practical Linux Command Line 2.0",
  "Agile Fundamentals",
  "FastAPI Complete Course 2026",
  "TypeScript Developer's Guide",
  "SQL Bootcamp",
  "Python Bootcamp",
  "Git & GitHub Bootcamp"
];

export default function Home() {
  return (
    <main>
      <RevealMotion />
      <SignalCanvas />
      <div className="scrollProgress" aria-hidden="true" />
      <div className="logoAtmosphere" aria-hidden="true">
        {logoCloud.map((item, index) => {
          const Icon = item.icon;
          return (
            <span
              className="ambientLogo"
              key={item.name}
              style={
                {
                  "--x": item.x,
                  "--y": item.y,
                  "--size": `${item.size}px`,
                  "--delay": item.delay,
                  "--duration": item.duration,
                  "--brand-color": item.color,
                  "--tilt": `${index % 2 === 0 ? -1 : 1}`
                } as CSSProperties
              }
            >
              <Icon aria-hidden="true" />
            </span>
          );
        })}
      </div>
      <section className="hero" id="top">
        <Image
          className="heroBackdrop"
          src="/backend-devops-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
        <div className="heroSystem" aria-hidden="true">
          <span className="systemRing systemRingOuter" />
          <span className="systemRing systemRingInner" />
          <span className="systemAxis systemAxisOne" />
          <span className="systemAxis systemAxisTwo" />
          <span className="systemCore">
            <Server size={26} aria-hidden="true" />
          </span>
          {systemNodes.map((node) => {
            const Icon = node.icon;
            return (
              <span
                className="systemNode"
                key={node.name}
                style={
                  {
                    "--brand-color": node.color,
                    "--node-x": node.x,
                    "--node-y": node.y,
                    "--node-delay": node.delay
                  } as CSSProperties
                }
              >
                <Icon aria-hidden="true" />
              </span>
            );
          })}
        </div>
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Eris Shosholli home">
            ES
          </a>
          <div className="navLinks">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <span className="navStatus">Available</span>
        </nav>

        <div className="heroContent">
          <div className="heroCopy">
            <p className="statusPill">DevOps Engineer | Full-Stack Developer</p>
            <h1>Eris Shosholli</h1>
            <p className="lead">
              I build full-stack products with a DevOps mindset: API-first backends,
              database-backed services, Docker workflows, and tested delivery systems.
            </p>
            <div className="heroChips" aria-label="Core focus areas">
              {heroChips.map((chip) => (
                <span key={chip}>{chip}</span>
              ))}
            </div>
            <div className="heroActions" aria-label="Resume and profile links">
              <a className="primaryButton" href="/Eris-Shosholli-Resume.pdf" download>
                <FileDown size={18} aria-hidden="true" />
                Download Resume
              </a>
              <a
                className="secondaryButton"
                href="https://github.com/ErisShosholli"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <a
                className="secondaryButton"
                href="https://www.linkedin.com/in/erisshosholli"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>
          <aside className="opsConsole" aria-label="Backend delivery console">
            <div className="consoleChrome">
              <span />
              <span />
              <span />
            </div>
            <div className="consoleHeader">
              <span>deploy-preview</span>
              <strong>healthy</strong>
            </div>
            <div className="consoleLines">
              {consoleLines.map((line, index) => (
                <p key={line} style={{ "--line-delay": `${index * 420}ms` } as CSSProperties}>
                  <span>$</span> {line}
                </p>
              ))}
            </div>
            <div className="consoleStats">
              {hudStats.map((stat) => (
                <span key={stat.label}>
                  <small>{stat.label}</small>
                  {stat.value}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="techRail" aria-label="Technology stack">
        {techRail.map((item) => {
          const Icon = item.icon;
          return (
            <span key={item.name} style={{ "--brand-color": item.color } as CSSProperties}>
              <Icon aria-hidden="true" />
              {item.name}
            </span>
          );
        })}
      </section>

      <section className="metricBand" aria-label="Portfolio highlights">
        <div>
          <strong>5</strong>
          <span>featured repositories</span>
        </div>
        <div>
          <strong>94%</strong>
          <span>verified Flask test coverage</span>
        </div>
        <div>
          <strong>Docker</strong>
          <span>PostgreSQL-backed environments</span>
        </div>
      </section>

      <section className="section pipelineSection" aria-labelledby="pipeline-heading">
        <div className="sectionHeader">
          <p className="sectionMeta">
            <span>01</span> Delivery system
          </p>
          <h2 id="pipeline-heading">From schema to shipped service</h2>
          <p>
            The portfolio reads like the workflow you want to be hired for: data modeling,
            backend implementation, verification, containerized delivery, and clear handoff.
          </p>
        </div>
        <div className="pipelineBoard">
          <div className="pipelineTrack" aria-hidden="true">
            <span />
          </div>
          {pipelineSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                className="pipelineStep"
                key={step.label}
                style={{ "--step-delay": `${index * 110}ms` } as CSSProperties}
              >
                <div className="pipelineIcon">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <span>{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section" aria-labelledby="focus-heading">
        <div className="sectionHeader">
          <p className="sectionMeta">
            <span>02</span> Direction
          </p>
          <h2 id="focus-heading">Focused on reliable backend delivery</h2>
        </div>
        <div className="focusGrid">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="focusItem" key={area.title}>
                <Icon size={22} aria-hidden="true" />
                <h3>{area.title}</h3>
                <p>{area.copy}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section projectSection" id="projects" aria-labelledby="projects-heading">
        <div className="sectionHeader">
          <p className="sectionMeta">
            <span>03</span> Selected work
          </p>
          <h2 id="projects-heading">Projects with backend and DevOps signal</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="projectCard" key={project.name}>
              <span className="projectNumber">{String(index + 1).padStart(2, "0")}</span>
              <div className="projectTopline">
                <span>{project.type}</span>
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.name} repository`}>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul>
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="projectSignals" aria-label={`${project.name} evidence`}>
                {project.signals.map((signal) => (
                  <span key={signal}>{signal}</span>
                ))}
              </div>
              <div className="stackList" aria-label={`${project.name} stack`}>
                {project.stack.map((item) => {
                  const stackIcon = stackIcons[item];
                  const StackIcon = stackIcon?.icon;
                  return (
                    <span
                      key={item}
                      style={
                        stackIcon
                          ? ({ "--brand-color": stackIcon.color } as CSSProperties)
                          : undefined
                      }
                    >
                      {StackIcon ? <StackIcon aria-hidden="true" /> : null}
                      {item}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitSection" id="skills" aria-labelledby="skills-heading">
        <div className="sectionHeader stickyHeader">
          <p className="sectionMeta">
            <span>04</span> Stack
          </p>
          <h2 id="skills-heading">DevOps-minded, with full-stack range</h2>
          <p>
            The stack supports the resume headline: backend APIs, delivery workflows, and enough
            frontend range to ship complete products.
          </p>
        </div>
        <div className="skillGrid">
          {skillGroups.map((group) => (
            <article className="skillGroup" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section splitSection" id="experience" aria-labelledby="experience-heading">
        <div className="sectionHeader stickyHeader">
          <p className="sectionMeta">
            <span>05</span> Experience
          </p>
          <h2 id="experience-heading">Professional foundation</h2>
          <p>
            Engineering internship experience, trainer background, and applied IT education all support
            the DevOps and full-stack path.
          </p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timelineItem" key={`${item.company}-${item.role}`}>
              <BriefcaseBusiness size={20} aria-hidden="true" />
              <div>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <p className="company">
                  {item.company} · {item.location}
                </p>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
          <article className="timelineItem">
            <Code2 size={20} aria-hidden="true" />
            <div>
              <span>Education</span>
              <h3>Applied Information Technology</h3>
              <p className="company">IBCM - Public International Business College Mitrovica</p>
              <p>Front-End Developer, Programming · Beetroot Academy</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section certSection" aria-labelledby="cert-heading">
        <div className="sectionHeader">
          <p className="sectionMeta">
            <span>06</span> Learning
          </p>
          <h2 id="cert-heading">Certifications and course work</h2>
          <p>All listed certifications are from Udemy.</p>
        </div>
        <div className="certList">
          {certifications.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="contactSection" id="contact" aria-labelledby="contact-heading">
        <div>
          <p className="sectionMeta">
            <span>07</span> Contact
          </p>
          <h2 id="contact-heading">DevOps engineer with full-stack range.</h2>
          <p>
            I am building toward roles where clean APIs, Dockerized environments, Linux workflows,
            frontend awareness, and tested delivery matter.
          </p>
        </div>
        <div className="contactActions">
          <a className="primaryButton" href="mailto:shoshollieris@gmail.com">
            <Mail size={18} aria-hidden="true" />
            shoshollieris@gmail.com
          </a>
          <a
            className="secondaryButton"
            href="https://github.com/ErisShosholli"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
