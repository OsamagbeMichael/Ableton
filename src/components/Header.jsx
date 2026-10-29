import { useEffect, useId, useRef, useState } from 'react';
import { content } from '../data/index.js';
import MoreMenu from './MoreMenu.jsx';
import s from './Header.module.css';

// One open panel at a time: 'more' (desktop mega-menu), 'mobile' (Menu ▾), or null.
export default function Header() {
  const { mainNav, subNav } = content;
  const [open, setOpen] = useState(null);
  const headerRef = useRef(null);
  const triggerRef = useRef(null);
  const moreId = useId();
  const mobileId = useId();

  const toggle = (panel, e) => {
    triggerRef.current = e.currentTarget;
    setOpen((cur) => (cur === panel ? null : panel));
  };

  // Escape and click-outside close the panel; focus returns to its trigger.
  useEffect(() => {
    if (!open) return;
    const close = (refocus) => {
      setOpen(null);
      if (refocus) triggerRef.current?.focus();
    };
    const onKey = (e) => e.key === 'Escape' && close(true);
    const onPointer = (e) => !headerRef.current?.contains(e.target) && close(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  // The mobile menu covers the page, so the page shouldn't scroll behind it.
  useEffect(() => {
    const modal = open === 'mobile';
    document.documentElement.style.overflow = modal ? 'hidden' : '';
    // The mobile menu covers the page: make what's behind it unreachable by Tab and screen readers.
    for (const el of document.querySelectorAll('main, footer')) el.inert = modal;
    if (modal) headerRef.current?.querySelector(`[id="${mobileId}"] a`)?.focus();
  }, [open, mobileId]);

  // shortcut: tuck, More menu and modal menu all live in Header; extract hooks when a second header variant appears.
  // Sticky second bar: scrolling down tucks the main bar away and leaves the
  // sub-nav pinned; any scroll up brings the main bar back.
  const [tucked, setTucked] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (Math.abs(y - lastY) < 4) return;
        setTucked(y > lastY && y > 120);
        lastY = y;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Close the mobile panel if the window grows past the mobile breakpoint.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setOpen((cur) => (cur === 'mobile' ? null : cur));
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header ref={headerRef} className={s.header} data-tucked={tucked && !open}>
      <div className={s.bar}>
        <a href="#" className={s.logo} aria-label="Ableton home" translate="no">
          Ableton
        </a>

        <button
          type="button"
          className={s.menuToggle}
          aria-expanded={open === 'mobile'}
          aria-controls={mobileId}
          onClick={(e) => toggle('mobile', e)}
        >
          Menu
          <svg className={s.caret} width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
            <path d="M0 0h12L6 8z" fill="currentColor" />
          </svg>
        </button>

        <nav aria-label="Main" className={s.main}>
          <ul className={s.mainList}>
            {mainNav.map((item) => (
              <li key={item.label}>
                <a href={item.href} className={s.mainLink} translate="no">{item.label}</a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className={s.mainLink}
                aria-expanded={open === 'more'}
                aria-controls={moreId}
                onClick={(e) => toggle('more', e)}
              >
                More <span className={s.plus} aria-hidden="true">+</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className={s.actions}>
          <a href="#" className={s.trial} translate="no">Try Live 12 for Free</a>
          <a href="#" className={s.login}>Log in or register</a>
        </div>
      </div>

      {open === 'more' && (
        <div id={moreId} className={s.morePanel}>
          <MoreMenu />
        </div>
      )}

      {open === 'mobile' && (
        <div id={mobileId} className={s.mobilePanel}>
          <nav aria-label="Main">
            <ul className={s.mobileList}>
              {mainNav.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={s.mobileLink}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#" className={`${s.trial} ${s.mobileTrial}`} translate="no">Try Live 12 for Free</a>
          <MoreMenu layout="stacked" />
        </div>
      )}

      <nav aria-label="About Ableton" className={s.subnav}>
        <ul className={s.subList}>
          {subNav.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={s.subLink}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
