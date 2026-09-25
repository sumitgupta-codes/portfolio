import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      {/* Decorative background blobs */}
      <div className="hero__blob hero__blob--1" aria-hidden="true" />
      <div className="hero__blob hero__blob--2" aria-hidden="true" />

      <div className="container hero__content">
        {/* Eyebrow label */}
        <p className="hero__greeting">
          <span className="hero__greeting-dot" aria-hidden="true" />
          Available for opportunities
        </p>

        {/* Main heading */}
        <h1 id="hero-heading" className="hero__name">
          Hi, I'm <span className="hero__name-accent">Sumit Gupta</span>
        </h1>

        {/* Role tagline with typewriter */}
        <p className="hero__role" aria-label="Full Stack Developer & Problem Solver">
          <span className="hero__role-static">A passionate </span>
          <span className="hero__role-typed" aria-hidden="true">
            Full Stack Developer
          </span>
        </p>

        {/* Sub-description */}
        <p className="hero__desc">
          Third-year CS student building practical, user-friendly web applications
          while strengthening DSA skills.
        </p>

        {/* CTA Buttons */}
        <div className="hero__ctas">
          <a href="#projects" className="btn btn--primary">
            View My Work
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#contact" className="btn btn--secondary">
            Get In Touch
          </a>
        </div>

        {/* Social quick-links */}
        <div className="hero__socials">
          <a
            href="https://github.com/sumitgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/sumitgupta"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-link"
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="hero__scroll-hint" aria-label="Scroll down to About section">
          <span className="hero__scroll-dot" />
        </a>
      </div>
    </section>
  )
}
