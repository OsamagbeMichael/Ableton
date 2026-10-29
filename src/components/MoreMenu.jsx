import { content } from '../data/index.js';
import s from './MoreMenu.module.css';

// Content of the "More +" mega-menu. layout: "row" (desktop panel) | "stacked" (mobile panel).
export default function MoreMenu({ layout = 'row' }) {
  const { site, apps } = content.moreMenu;
  return (
    <div className={layout === 'stacked' ? `${s.menu} ${s.stacked}` : s.menu}>
      <section aria-label={site.heading}>
        <h2 className={s.heading}>{site.heading}</h2>
        <ul className={s.siteList}>
          {site.links.map((label) => (
            <li key={label}><a href="#" className={s.siteLink}>{label}</a></li>
          ))}
        </ul>
      </section>

      <section aria-label={apps.heading}>
        <h2 className={s.heading}>{apps.heading}</h2>
        <ul className={s.appGrid}>
          {apps.items.map((item) => (
            <li key={item.title}>
              <a href="#" className={s.app}>
                <span className={s.appTitle}>{item.title}</span>
                <span className={s.appText}>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
