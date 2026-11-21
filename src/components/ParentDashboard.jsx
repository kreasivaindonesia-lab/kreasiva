import { useState } from 'react';
import DashboardNav from './DashboardNav';
import EnglishOfferNotification from './EnglishOfferNotification';
import { PARENT_CHILDREN } from '../data/dashboardData';

/** Simple, minimalist, professional Orang Tua Dashboard with new English class offer notification. */
export default function ParentDashboard({ onBack, transitionClass }) {
  const [childId, setChildId] = useState(PARENT_CHILDREN[0].id);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [offerOpen, setOfferOpen] = useState(true);
  const [joinedChildIds, setJoinedChildIds] = useState([]);

  const child =
    PARENT_CHILDREN.find((item) => item.id === childId) ?? PARENT_CHILDREN[0];

  const isOfferJoined = joinedChildIds.includes(child.id);

  const handleJoinOffer = () => {
    setJoinedChildIds((prev) =>
      prev.includes(child.id) ? prev : [...prev, child.id]
    );
  };

  const handleSend = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    setSent(true);
  };

  return (
    <section
      className={`simple-dash ${transitionClass}`}
      aria-labelledby="parent-dash-title"
    >
      <DashboardNav
        badge="Orang Tua"
        badgeTone="green"
        title="Dashboard Orang Tua"
        onBack={onBack}
        rightSlot={
          <div className="student-nav-actions">
            <button
              type="button"
              className="notif-bell-btn"
              onClick={() => setOfferOpen((prev) => !prev)}
              aria-label="Notifikasi penawaran kelas Bahasa Inggris"
              title="Penawaran Kelas Baru"
            >
              <i className="ri-notification-3-fill" aria-hidden="true" />
              {!isOfferJoined ? <span className="notif-unread-dot" aria-hidden="true" /> : null}
            </button>

            <button
              type="button"
              className="pro-pill-btn"
              onClick={() => {
                setChatOpen((prev) => !prev);
                setSent(false);
              }}
            >
              <i className={chatOpen ? 'ri-close-line' : 'ri-chat-3-line'} aria-hidden="true" />
              <span>{chatOpen ? 'Tutup' : 'Tanya Tutor'}</span>
            </button>
          </div>
        }
      />

      <div className="simple-dash-head-split stagger-item" style={{ '--stagger': '40ms' }}>
        <div className="simple-dash-head">
          <h1 id="parent-dash-title">Progres Belajar Anak</h1>
          <p>Pantau kehadiran dan catatan terbaru dari pengajar.</p>
        </div>

        <div className="simple-switch-group" role="group" aria-label="Pilih anak">
          {PARENT_CHILDREN.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`simple-switch-btn ${item.id === child.id ? 'is-active' : ''}`}
              onClick={() => {
                setChildId(item.id);
                setOfferOpen(true);
              }}
            >
              <i className="ri-star-smile-fill" aria-hidden="true" />
              <span>
                {item.name} • {item.level}
              </span>
            </button>
          ))}
        </div>
      </div>

      <EnglishOfferNotification
        className="offer-notif-pro"
        badge={child.englishOffer.badge}
        title={child.englishOffer.title}
        description={child.englishOffer.description}
        ctaLabel={child.englishOffer.ctaLabel}
        joinedText={child.englishOffer.joinedText}
        isOpen={offerOpen}
        isJoined={isOfferJoined}
        onJoin={handleJoinOffer}
        onClose={() => setOfferOpen(false)}
      />

      {chatOpen ? (
        <div className="simple-inline-box stagger-item" style={{ '--stagger': '60ms' }}>
          {sent ? (
            <div className="simple-inline-done">
              <i className="ri-checkbox-circle-fill" aria-hidden="true" />
              <span>Pesan untuk tutor {child.name} terkirim.</span>
            </div>
          ) : (
            <form className="simple-inline-form" onSubmit={handleSend}>
              <input
                type="text"
                required
                placeholder={`Tulis pesan untuk tutor ${child.name}...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="pro-btn-dark">
                <i className="ri-send-plane-fill" aria-hidden="true" />
                <span>Kirim</span>
              </button>
            </form>
          )}
        </div>
      ) : null}

      <div className="simple-stat-row stagger-item" style={{ '--stagger': '80ms' }}>
        <div className="simple-stat-card">
          <i className="ri-book-open-line" aria-hidden="true" />
          <div>
            <span>Program</span>
            <strong>{child.program}</strong>
          </div>
        </div>

        <div className="simple-stat-card">
          <i className="ri-bar-chart-box-line" aria-hidden="true" />
          <div>
            <span>Kehadiran</span>
            <strong>{child.attendance}</strong>
          </div>
        </div>

        <div className="simple-stat-card">
          <i className="ri-calendar-2-line" aria-hidden="true" />
          <div>
            <span>Jadwal Berikutnya</span>
            <strong>{child.nextSchedule}</strong>
          </div>
        </div>
      </div>

      <article className="simple-note-card stagger-item" style={{ '--stagger': '120ms' }}>
        <h2>
          <i className="ri-chat-3-line" aria-hidden="true" /> Catatan Pengajar untuk{' '}
          {child.name}
        </h2>
        <p>“{child.note}”</p>
      </article>
    </section>
  );
}
