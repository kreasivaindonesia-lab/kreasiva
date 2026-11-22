import { useState } from 'react';

const CELEBRATION_STARS = [
  { id: 1, x: '-54px', y: '-18px', color: '#FFB800', delay: '0ms' },
  { id: 2, x: '54px', y: '-20px', color: '#1CA8FF', delay: '50ms' },
  { id: 3, x: '-70px', y: '24px', color: '#7AC943', delay: '80ms' },
  { id: 4, x: '70px', y: '22px', color: '#FF7A00', delay: '35ms' },
];

/** Full-page role registration view with simple < / x CDN navigation and smooth animations. */
export default function RoleDetailView({ role, onBack, transitionClass }) {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [detail, setDetail] = useState(role.defaultOption);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !whatsapp.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setWhatsapp('');
    setDetail(role.defaultOption);
    setSubmitted(false);
  };

  return (
    <section
      className={`role-detail-section ${transitionClass}`}
      aria-labelledby="role-detail-title"
    >
      <div className="detail-nav stagger-item" style={{ '--stagger': '0ms' }}>
        <button
          type="button"
          className="icon-circle-btn"
          onClick={onBack}
          aria-label="Kembali"
          title="Kembali"
        >
          <i className="ri-arrow-left-s-line" aria-hidden="true" />
        </button>

        <span className={`role-pill role-pill-${role.accent}`}>{role.badge}</span>

        <button
          type="button"
          className="icon-circle-btn icon-circle-close"
          onClick={onBack}
          aria-label="Tutup"
          title="Tutup"
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>
      </div>

      <div
        className={`detail-icon-wrap role-icon-${role.accent} stagger-item`}
        style={{ '--stagger': '45ms' }}
        aria-hidden="true"
      >
        <i className={`${role.iconClass} role-cdn-icon-lg`} />
      </div>

      <h1
        id="role-detail-title"
        className="detail-title stagger-item"
        style={{ '--stagger': '90ms' }}
      >
        {role.detailTitle}
      </h1>
      <p className="detail-subtitle stagger-item" style={{ '--stagger': '135ms' }}>
        {role.detailDescription}
      </p>

      {submitted ? (
        <div className="success-box celebration-enter" role="status">
          <div className="success-badge-wrap">
            {CELEBRATION_STARS.map((star) => (
              <span
                key={star.id}
                className="celebrate-star"
                aria-hidden="true"
                style={{
                  '--tx': star.x,
                  '--ty': star.y,
                  color: star.color,
                  animationDelay: star.delay,
                }}
              >
                <i className="ri-sparkling-fill" />
              </span>
            ))}
            <div className="success-badge" aria-hidden="true">
              <i className="ri-check-line" />
            </div>
          </div>

          <h2 className="success-title">Yeay! Terima kasih, {name}!</h2>
          <p className="success-text">
            Data awal sebagai <strong>{role.label}</strong> ({detail}) sudah
            kami catat. Tim KREASIVA akan menghubungi melalui WhatsApp{' '}
            <strong>{whatsapp}</strong>.
          </p>
          <div className="success-actions">
            <button type="button" className="btn-primary-soft" onClick={onBack}>
              <i className="ri-home-4-line" aria-hidden="true" />
              <span>Halaman Utama</span>
            </button>
            <button type="button" className="btn-ghost" onClick={handleReset}>
              <i className="ri-refresh-line" aria-hidden="true" />
              <span>Isi Data Lain</span>
            </button>
          </div>
        </div>
      ) : (
        <form
          className="role-form stagger-item"
          style={{ '--stagger': '175ms' }}
          onSubmit={handleSubmit}
        >
          <div className="form-field">
            <label htmlFor="role-name">{role.nameLabel}</label>
            <input
              id="role-name"
              type="text"
              required
              placeholder={role.namePlaceholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label htmlFor="role-select">{role.selectLabel}</label>
            <select
              id="role-select"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            >
              {role.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="role-wa">Nomor WhatsApp Aktif</label>
            <input
              id="role-wa"
              type="tel"
              required
              placeholder="Contoh: 0812-3456-7890"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </div>

          <button type="submit" className={`submit-role-btn submit-${role.accent}`}>
            <i className={role.submitIconClass} aria-hidden="true" />
            <span>{role.submitLabel}</span>
          </button>
        </form>
      )}
    </section>
  );
}
