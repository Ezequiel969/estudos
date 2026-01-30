import { useEffect, useMemo, useState } from 'react'

const skills = [
  {
    title: 'Experience Design',
    items: ['Intent-driven flows', 'Motion choreography', 'Accessible structure'],
  },
  {
    title: 'Interface Engineering',
    items: ['Component systems', 'Performance tuning', 'Scalable architecture'],
  },
  {
    title: 'Visual Craft',
    items: ['Color strategy', 'Typography pairing', 'Micro-interactions'],
  },
]

const tools = [
  'React',
  'Vite',
  'TailwindCSS',
  'TypeScript',
  'Framer Motion',
  'Node.js',
  'Figma',
  'Storybook',
  'Vitest',
]

const projects = [
  {
    name: 'Lumen Atlas',
    description:
      'A spatial storytelling platform that turns complex data into a tactile journey with layered motion and adaptive typography.',
    tags: ['Data Narrative', 'Interactive UI', 'Performance'],
    tone: 'Radiant data observatory',
  },
  {
    name: 'Echo Signal',
    description:
      'A real-time collaboration suite crafted around calm focus, featuring ambient cues and distraction-free workflows.',
    tags: ['Collaboration', 'Ambient UX', 'Realtime'],
    tone: 'Quiet focus engine',
  },
  {
    name: 'Aurora Loom',
    description:
      'An adaptive portfolio generator that weaves personal narratives into modular, animated editorial layouts.',
    tags: ['Editorial Layout', 'Theming', 'Automation'],
    tone: 'Modular narrative system',
  },
]

const milestones = [
  {
    label: 'Now',
    title: 'Crafting premium digital experiences',
    detail: 'Designing systems that feel alive while staying structured and maintainable.',
  },
  {
    label: '2023',
    title: 'Scaled design systems',
    detail: 'Led the evolution of a multi-brand UI kit with 120+ components.',
  },
  {
    label: '2021',
    title: 'Front-end specialization',
    detail: 'Focused on accessible UI engineering and advanced interaction design.',
  },
]

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('theme')
    const preferredDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = stored ?? (preferredDark ? 'dark' : 'light')
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--scroll', `${window.scrollY}px`)
        raf = 0
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) window.cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.2 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const isDark = useMemo(() => theme === 'dark', [theme])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    window.localStorage.setItem('theme', next)
  }

  const scrollTo = (id) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="page">
      <header className="site-header">
        <div className="container header-content">
          <button className="brand" onClick={() => scrollTo('hero')} aria-label="Go to top">
            <span className="logo-badge">Y</span>
            <span>
              <span className="brand-name">Your Name</span>
              <span className="brand-role">Experience Designer + Engineer</span>
            </span>
          </button>

          <nav className="main-nav">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="nav-button">
                {item.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button onClick={toggleTheme} className="pill" aria-pressed={isDark}>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button className="btn btn-primary" onClick={() => scrollTo('contact')}>
              Connect
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <section id="hero" className="hero">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <span className="chip">Crafting immersive digital worlds</span>
              <div className="hero-title">
                <h1>
                  Designing products that feel alive, purposeful, and deeply human.
                </h1>
                <p>
                  I build calm, high-performance interfaces with a distinctive visual identity. Every detail is tuned for
                  clarity, momentum, and delight.
                </p>
              </div>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
                  View Projects
                </button>
                <button className="btn btn-ghost" onClick={() => scrollTo('about')}>
                  My Story
                </button>
              </div>
              <div className="stat-grid">
                {[
                  { label: 'Focus', value: 'Product UX' },
                  { label: 'Projects', value: '18+' },
                  { label: 'Mode', value: 'Remote' },
                ].map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="stat-label">{stat.label}</p>
                    <p className="stat-value">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-card" data-reveal>
              <div className="hero-glow" />
              <div className="profile-card">
                <div className="profile-badge">Y</div>
                <div className="profile-content">
                  <p className="profile-label">Signature</p>
                  <h2>Your Name</h2>
                  <p>
                    I design, prototype, and engineer digital systems with a bias toward clarity and intentional motion.
                  </p>
                  <div className="profile-tags">
                    {['Product Strategy', 'Design Systems', 'Motion Direction', 'Front-end Engineering'].map((item) => (
                      <div key={item} className="tag">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hero-orbit" />
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="about-grid" data-reveal>
              <div className="about-copy">
                <p className="section-subtitle">About</p>
                <h2 className="section-title">Designing with intention, building with care.</h2>
                <p>
                  My work blends product thinking with a strong visual identity. I focus on experiences that feel calm, precise,
                  and expressive—never generic, always tailored.
                </p>
                <div className="card grid-sheen">
                  <p>
                    I thrive in the space between design and engineering. This allows me to ship polished interfaces that are
                    technically sound, accessible, and ready to scale.
                  </p>
                </div>
              </div>

              <div className="timeline">
                {milestones.map((item) => (
                  <div key={item.label} className="card hover-tilt" data-reveal>
                    <div className="timeline-row">
                      <p>{item.label}</p>
                      <span className="dot" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-subtitle">Skills</p>
                <h2 className="section-title">Focused, versatile, and built for impact.</h2>
              </div>
              <p>
                A balanced toolkit that supports full-spectrum product work—from early discovery to polished, production-ready
                interfaces.
              </p>
            </div>

            <div className="skills-grid" data-reveal>
              {skills.map((skill) => (
                <div key={skill.title} className="card hover-tilt">
                  <h3>{skill.title}</h3>
                  <ul>
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mini-dot" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="card" data-reveal>
              <p className="stack-label">Tech Stack</p>
              <div className="stack-list">
                {tools.map((tool) => (
                  <span key={tool} className="stack-chip">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="section-subtitle">Projects</p>
                <h2 className="section-title">A curated set of immersive builds.</h2>
              </div>
              <p>
                Each project explores a different facet of experience design—from editorial rhythm to tactile interaction.
              </p>
            </div>

            <div className="projects-grid" data-reveal>
              {projects.map((project) => (
                <article key={project.name} className="card project-card hover-tilt">
                  <div className="project-meta">
                    <span>{project.tone}</span>
                    <span className="pulse-dot" />
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-link">
                    <span>Explore concept</span>
                    <span className="text-xl">↗</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="contact-card" data-reveal>
              <div>
                <p className="section-subtitle">Contact</p>
                <h2 className="section-title">Let&apos;s build something unforgettable.</h2>
                <p>
                  Share a quick brief or just say hello. I respond within 24 hours and love ambitious, design-forward
                  collaborations.
                </p>
                <div className="availability">
                  <p>Availability</p>
                  <p className="mt-1">Open for selected freelance and product collaborations.</p>
                </div>
              </div>

              <form className="contact-form">
                <div className="form-row">
                  <label>
                    Name
                    <input type="text" placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input type="email" placeholder="you@email.com" />
                  </label>
                </div>
                <label>
                  Project details
                  <textarea rows="4" placeholder="Tell me about your vision" />
                </label>
                <button type="button" className="btn btn-primary full-width">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        Crafted with intention · 2026
      </footer>
    </div>
  )
}

export default App
