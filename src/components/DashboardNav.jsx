/** Shared minimalist top bar with simple < back and × close CDN icon buttons. */
export default function DashboardNav({ title, badge, badgeTone = 'blue', rightSlot, onBack }) {
  return (
    <div className="dash-nav stagger-item" style={{ '--stagger': '0ms' }}>
      <div className="dash-nav-left">
        <button
          type="button"
          className="icon-circle-btn"
          onClick={onBack}
          aria-label="Kembali"
          title="Kembali"
        >
          <i className="ri-arrow-left-s-line" aria-hidden="true" />
        </button>

        <div className="dash-nav-heading">
          {badge ? (
            <span className={`dash-badge dash-badge-${badgeTone}`}>{badge}</span>
          ) : null}
          <span className="dash-nav-title">{title}</span>
        </div>
      </div>

      <div className="dash-nav-right">
        {rightSlot}
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
    </div>
  );
}
