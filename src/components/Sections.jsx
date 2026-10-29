import { useState } from 'react';
import s from './Sections.module.css';

const cx = (...c) => c.filter(Boolean).join(' ');

// Image with intrinsic size (no layout shift) and a soft fade-in once decoded.
export function Photo({ image, className, sizes = '100vw', priority = false }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      className={cx(s.photo, className)}
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      width={image.width}
      height={image.height}
      alt={image.alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      data-loaded={loaded}
      onLoad={() => setLoaded(true)}
      onError={() => setLoaded(true)}
    />
  );
}

export function Hero({ title, subtitle, image }) {
  return (
    <section className={s.hero}>
      <div className={s.heroFrame}>
        <Photo image={image} className={s.heroImg} sizes="(min-width: 1440px) 1174px, 82vw" priority />
        <div className={s.heroText}>
          <h1 className={s.heroTitle} translate="no">{title}</h1>
          {subtitle && <p className={s.heroSub}>{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}

// spacing: 'default' | 'intro' (tight under the hero) | 'flush' (no top padding after media)
export function TextBlock({ heading, body, as: H = 'h2', spacing = 'default' }) {
  return (
    <section className={cx(s.text, spacing === 'flush' && s.flush, spacing === 'intro' && s.intro)}>
      <div className={s.measure}>
        <H className={s.heading}>{heading}</H>
        <p className={s.body}>{body}</p>
      </div>
    </section>
  );
}

export function Split({ tone, layout, images: [a, b] }) {
  return (
    <section className={cx(s.split, s[tone], s[`layout${layout.toUpperCase()}`])}>
      <div className={cx(s.container, s.grid)}>
        <Photo image={a} className={s.splitA} sizes="(min-width: 768px) 588px, 100vw" />
        <Photo image={b} className={s.splitB} sizes="(min-width: 768px) 600px, 100vw" />
      </div>
    </section>
  );
}

export function VideoPod({ caption, href, image }) {
  return (
    <section className={s.media}>
      <a href={href} target="_blank" rel="noopener noreferrer" className={cx(s.measure, s.video)}>
        <span className={s.videoFrame}>
          <Photo image={image} className={s.videoImg} sizes="(min-width: 768px) 667px, 100vw" />
          <span className={s.play} aria-hidden="true">
            <svg width="22" height="26" viewBox="0 0 22 26"><path d="M0 0l22 13L0 26z" fill="currentColor" /></svg>
          </span>
        </span>
        <span className={s.caption}>
          {caption}
          <span className="visually-hidden"> (video, opens in a new tab)</span>
        </span>
      </a>
    </section>
  );
}

export function Wide({ image }) {
  return (
    <section className={s.media}>
      <div className={s.container}>
        <Photo image={image} className={s.wideImg} sizes="(min-width: 1440px) 1200px, 84vw" />
      </div>
    </section>
  );
}

export function Cta({ heading, body, link, image }) {
  return (
    <section className={s.cta}>
      <div className={cx(s.container, s.grid)}>
        <Photo image={image} className={s.ctaImg} sizes="(min-width: 768px) 612px, 100vw" />
        <div className={s.ctaCard}>
          <h2 className={s.ctaHeading}>{heading}</h2>
          {body && <p className={s.ctaBody}>{body}</p>}
          <a href={link.href} className={s.ctaLink}>{link.label}</a>
        </div>
      </div>
    </section>
  );
}
