import { useState } from 'react';
import kreasivaLogo from '../assets/kreasiva-logo.png';
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
            className={`icon-circle-btn header-menu-toggle ${mobileOpen ? 'is-open' : ''}`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
          >
            <i className={mobileOpen ? 'ri-close-line' : 'ri-menu-line'} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-nav-collapse ${mobileOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-nav-inner">
          <nav className="mobile-nav-drawer" aria-label="Menu mobile">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.id}
                type="button"
                tabIndex={mobileOpen ? 0 : -1}
                style={{ '--item-idx': index }}
                className={`mobile-nav-link ${activePage === item.id ? 'is-active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
                <i className="ri-arrow-right-s-line" aria-hidden="true" />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
