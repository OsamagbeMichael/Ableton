import { useEffect, useState } from 'react';
import { footer } from '../data/content.js';
import s from './Footer.module.css';

function LinkList({ items, className }) {
  return (
    <ul className={className}>
      {items.map((label) => (
        <li key={label}><a href="#" className={s.link}>{label}</a></li>
      ))}
    </ul>
  );
}

function Newsletter() {
  const [status, setStatus] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    // Practice project: nothing is sent anywhere.
    setStatus('Thanks! Check your inbox to confirm your subscription.');
    e.currentTarget.reset();
  };
  return (
    <form className={s.newsletter} onSubmit={onSubmit}>
      <label htmlFor="newsletter-email" className={s.newsLabel}>
        <strong className={s.colHeading}>Sign up to our newsletter</strong>
        Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.
      </label>
      <div className={s.newsRow}>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          spellCheck={false}
          placeholder="you@example.com…"
          className={s.field}
        />
        <button type="submit" className={s.submit}>Sign Up</button>
      </div>
      <p className={s.status} aria-live="polite">
        {status && <span key={status} className={s.statusText}>{status}</span>}
      </p>
    </form>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const toTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    document.getElementById('site-content')?.focus({ preventScroll: true });
  };
  return (
    <button type="button" className={s.toTop} data-visible={visible} onClick={toTop} tabIndex={visible ? 0 : -1}>
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M9 3l7 8h-5v4H7v-4H2z" fill="currentColor" />
      </svg>
      <span className="visually-hidden">Back to top</span>
    </button>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={s.footer} id="site-footer">
      <div className={s.inner}>
        <a href="#" className={s.logo} aria-label="Ableton home" translate="no">Ableton</a>

        <div className={s.grid}>
          <div className={s.col}>
            <LinkList items={footer.quick} className={s.quick} />
            <ul className={s.social} aria-label="Social media">
              {footer.social.map((label) => (
                <li key={label}><a href="#" className={s.socialLink}>{label}</a></li>
              ))}
            </ul>
          </div>

          <div className={s.col}>
            <h2 className={s.colHeading}>Education</h2>
            <LinkList items={footer.education} className={s.list} />
          </div>

          <div className={s.col}>
            <Newsletter />
          </div>

          <div className={s.col}>
            <h2 className={s.colHeading}>Community</h2>
            <LinkList items={footer.community} className={s.list} />
          </div>

          <div className={`${s.col} ${s.colWide}`}>
            <h2 className={s.colHeading}>Language and Location</h2>
            <div className={s.selects}>
              <label className={s.selectLabel}>
                Language
                <select className={s.select} defaultValue="English">
                  {footer.languages.map((l) => <option key={l}>{l}</option>)}
                </select>
              </label>
              <label className={s.selectLabel}>
                Country or Region
                <select className={s.select} defaultValue="Canada">
                  {footer.regions.map((r) => <option key={r}>{r}</option>)}
                </select>
              </label>
            </div>
          </div>
        </div>

        <nav aria-label="Legal" className={s.legal}>
          <ul className={s.legalList}>
            {footer.legal.map((label) => (
              <li key={label}><a href="#" className={s.legalLink}>{label}</a></li>
            ))}
            <li className={s.meta}>Made in Berlin</li>
            <li className={s.meta}>© {year}</li>
          </ul>
        </nav>

        <p className={s.disclaimer}>
          Practice recreation built for frontendpractice.com. Not affiliated with or endorsed by Ableton. Photos from Pexels.
        </p>
      </div>
      <BackToTop />
    </footer>
  );
}
