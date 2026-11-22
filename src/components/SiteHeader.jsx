import { useState } from 'react';
import kreasivaLogo from '../assets/kreasiva-logo.jpg';
import { NAV_ITEMS } from '../data/websiteData';

/** Clean public website header aligned with the KREASIVA sitemap. */
export default function SiteHeader({
  activePage,
  onNavigatePage,
  onOpenPortalMenu,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (pageId) => {
    setMobileOpen(false);
    onNavigatePage(pageId);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          type="button"
          className="header-brand-btn"
          onClick={() => handleNavClick('home')}
          aria-label="Kembali ke Home KREASIVA"
        >
          <img
            src={kreasivaLogo}
            alt="KREASIVA"
            className="header-brand-logo"
          />
        </button>

        <nav className="header-nav" aria-label="Menu navigasi utama">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`header-nav-link ${activePage === item.id ? 'is-active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="header-cta-portal"
            onClick={() => {
              setMobileOpen(false);
              onOpenPortalMenu();
            }}
          >
            <i className="ri-apps-2-line" aria-hidden="true" />
            <span>Gabung / Portal</span>
          </button>

          <button
            type="button"
            className="icon-circle-btn header-menu-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          >
            <i className={mobileOpen ? 'ri-close-line' : 'ri-menu-line'} aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav className="mobile-nav-drawer" aria-label="Menu mobile">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`mobile-nav-link ${activePage === item.id ? 'is-active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
