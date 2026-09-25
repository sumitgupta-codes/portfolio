import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import './Contact.css'

/* ── Validation helpers ─────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(fields) {
  const errors = {}

  if (!fields.name.trim()) {
    errors.name = 'Name is required.'
  } else if (fields.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!fields.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!EMAIL_RE.test(fields.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.'
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.'
  }

  return errors
}

/* ── Field component (DRY) ──────────────────────────────────── */
function FormField({ id, label, error, children }) {
  return (
    <div className={`contact__field ${error ? 'contact__field--error' : ''}`}>
      <label htmlFor={id} className="contact__label">
        {label}
      </label>
      {children}
      {error && (
        <span
          id={`${id}-error`}
          className="contact__error"
          role="alert"
          aria-live="polite"
        >
          {error}
        </span>
      )}
    </div>
  )
}

/* ── Contact Info item ──────────────────────────────────────── */
function ContactInfo({ icon, label, value, href }) {
  return (
    <div className="contact__info-item">
      <span className="contact__info-icon" aria-hidden="true">{icon}</span>
      <div>
        <p className="contact__info-label">{label}</p>
        {href
          ? <a href={href} className="contact__info-value">{value}</a>
          : <p className="contact__info-value">{value}</p>
        }
      </div>
    </div>
  )
}

/* ── Main component ─────────────────────────────────────────── */
const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const [formRef, formVisible] = useIntersectionObserver({ threshold: 0.1 })

  const [fields, setFields] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate(fields)

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      // Focus the first field with an error
      const firstErrorField = Object.keys(errs)[0]
      document.getElementById(firstErrorField)?.focus()
      return
    }

    // ── Submission ───────────────────────────────────────────────
    // Currently opens the user's mail client with pre-filled fields.
    // To wire up a real backend:
    //   1. Formspree:  fetch('https://formspree.io/f/YOUR_ID', { method:'POST', body: JSON.stringify(fields) })
    //   2. EmailJS:    emailjs.send('service_id', 'template_id', fields)
    const subject = encodeURIComponent(`Portfolio contact from ${fields.name}`)
    const body = encodeURIComponent(fields.message)
    window.location.href = `mailto:sumitgupta@example.com?subject=${subject}&body=${body}`

    setStatus('success')
    setFields(INITIAL)
    setErrors({})
  }

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionTitle label="04 — CONTACT" title="Get In Touch" />

        <div ref={formRef} className={`contact__wrapper reveal ${formVisible ? 'visible' : ''}`}>
          {/* Left — info panel */}
          <div className="contact__info">
            <h3 className="contact__info-heading">Let's work together</h3>
            <p className="contact__info-desc">
              I'm currently open to internship opportunities in web development. Whether
              you have a question, a project idea, or just want to say hi — feel free to
              reach out!
            </p>

            <div className="contact__info-list">
              <ContactInfo icon="📍" label="Location" value="India" />
              <ContactInfo
                icon="✉️"
                label="Email"
                value="sumitgupta@example.com"
                href="mailto:sumitgupta@example.com"
              />
              <ContactInfo
                icon="💼"
                label="LinkedIn"
                value="linkedin.com/in/sumitgupta"
                href="https://linkedin.com/in/sumitgupta"
              />
            </div>
          </div>

          {/* Right — form */}
          <div className="contact__form-wrap">
            {status === 'success' ? (
              <div className="contact__success" role="status" aria-live="polite">
                <span className="contact__success-icon" aria-hidden="true">✅</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
                <button
                  className="btn btn--primary"
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: 'var(--space-5)' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <FormField id="name" label="Your Name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="contact__input"
                    placeholder="Sumit Gupta"
                    value={fields.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </FormField>

                <FormField id="email" label="Email Address" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="you@example.com"
                    value={fields.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </FormField>

                <FormField id="message" label="Message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__textarea"
                    placeholder="Tell me about your project or opportunity..."
                    value={fields.message}
                    onChange={handleChange}
                    rows={5}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                </FormField>

                <button type="submit" className="btn btn--primary contact__submit">
                  Send Message
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
