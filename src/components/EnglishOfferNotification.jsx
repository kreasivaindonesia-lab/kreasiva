/** Shared animated notification banner offering the new Bahasa Inggris class. */
export default function EnglishOfferNotification({
  badge,
  title,
  description,
  ctaLabel,
  joinedText,
  isOpen,
  isJoined,
  onJoin,
  onClose,
  className = '',
}) {
  if (!isOpen) return null;

  return (
    <aside
      className={`english-offer-notif ${isJoined ? 'is-joined' : ''} ${className}`.trim()}
      aria-label="Notifikasi penawaran kelas baru Bahasa Inggris"
    >
      <div className="offer-notif-icon" aria-hidden="true">
        <i className={isJoined ? 'ri-check-line' : 'ri-notification-3-fill'} />
      </div>

      <div className="offer-notif-body">
        <div className="offer-notif-badges">
          <span className="offer-badge-new">
            <i className="ri-gift-fill" aria-hidden="true" /> {badge}
          </span>
          <span className="offer-badge-lang">
            <i className="ri-translate-2" aria-hidden="true" /> Bahasa Inggris
          </span>
        </div>
        <p className="offer-notif-title">{isJoined ? joinedText : title}</p>
        {!isJoined && description ? (
          <p className="offer-notif-desc">{description}</p>
        ) : null}
      </div>

      <div className="offer-notif-actions">
        {!isJoined ? (
          <button type="button" className="offer-cta-btn" onClick={onJoin}>
            <i className="ri-translate-2" aria-hidden="true" />
            <span>{ctaLabel}</span>
          </button>
        ) : null}
        <button
          type="button"
          className="offer-close-btn"
          onClick={onClose}
          aria-label="Tutup notifikasi"
          title="Tutup"
        >
          <i className="ri-close-line" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
