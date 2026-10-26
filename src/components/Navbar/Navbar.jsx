// 'use client';
// import Link from 'next/link';
// import { Menu, Moon, Sun, X, Download } from 'lucide-react';
// import { usePathname } from 'next/navigation';
// import { useState } from 'react';
// import { useTheme } from '../ThemeProvider';
// import { siteConfig } from '../../config/siteConfig';

// export default function Navbar() {
//   const pathname = usePathname();
//   const { theme, toggleTheme } = useTheme();
//   const [open, setOpen] = useState(false);
//   const close = () => setOpen(false);
//   const active = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);
//   return <header className="site-header">
//     <div className="container nav-shell">
//       <Link className="brand" href="/" onClick={close} aria-label="Sajjad Saleem home"><span className="brand-mark">SS</span><span className="brand-name">Sajjad <strong>Saleem</strong></span></Link>
//       <button className="nav-mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>{open ? <X size={20} /> : <Menu size={20} />}</button>
//       <nav id="site-navigation" className={`site-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
//         <div className="nav-main-links">{siteConfig.navItems.map((item) => <Link key={item.href} href={item.href} className={active(item.href) ? 'is-active' : ''} onClick={close}>{item.label}</Link>)}</div>
//         <div className="nav-section-links" aria-label="Home sections">{siteConfig.homeSections.map((item) => <Link key={item.href} href={item.href} onClick={close}>{item.label}</Link>)}</div>
//         <div className="nav-actions">
//           <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}<span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button>
//           {siteConfig.resumeAvailable ? <a className="resume-link" href={siteConfig.resumePath} download><Download size={15} /> Resume</a> : <span className="resume-link is-disabled" title="Add a real resume PDF to enable this link"><Download size={15} /> Resume</span>}
//         </div>
//       </nav>
//     </div>
//   </header>;
// }



'use client';

import Link from 'next/link';
import { Menu, Moon, Sun, X, Download } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTheme } from '../ThemeProvider';
import { siteConfig } from '../../config/siteConfig';

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  const active = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link
          className="brand"
          href="/"
          onClick={close}
          aria-label="Sajjad Saleem home"
        >
          <span className="brand-mark">SS</span>
          <span className="brand-name">
            Sajjad <strong>Saleem</strong>
          </span>
        </Link>

        <button
          className="nav-mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          id="site-navigation"
          className={`site-nav ${open ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <div className="nav-main-links">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={active(item.href) ? 'is-active' : ''}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-section-links" aria-label="Home sections">
            {siteConfig.homeSections.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
              title={
                theme === 'dark'
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >
              {theme === 'dark' ? (
                <Sun size={17} />
              ) : (
                <Moon size={17} />
              )}
              <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>

            <a
              className="resume-link"
              href="/resume/Resume.pdf"
              download="Resume.pdf"
              onClick={close}
            >
              <Download size={15} />
              <span>Resume</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
