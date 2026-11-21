import { useState } from 'react';
import DashboardNav from './DashboardNav';
import { GURU_CLASSES, GURU_STATS } from '../data/dashboardData';

/** Simple, minimalist, professional Guru Dashboard landing page. */
export default function GuruDashboard({ onBack, transitionClass }) {
  const [activeClassId, setActiveClassId] = useState(null);
  const [joinOpen, setJoinOpen] = useState(false);
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);

  const handleJoin = (event) => {
    event.preventDefault();
    if (!name.trim()) return;
    setSent(true);
  };

  return (
    <section
      className={`simple-dash ${transitionClass}`}
      aria-labelledby="guru-dash-title"
    >
      <DashboardNav
        badge="Guru"
        badgeTone="blue"
        title="Dashboard Guru"
        onBack={onBack}
        rightSlot={
          <button
            type="button"
            className="pro-pill-btn"
            onClick={() => {
              setJoinOpen((prev) => !prev);
              setSent(false);
            }}
          >
            <i className={joinOpen ? 'ri-close-line' : 'ri-user-add-line'} aria-hidden="true" />
            <span>{joinOpen ? 'Tutup' : 'Gabung Guru'}</span>
          </button>
        }
      />

      <div className="simple-dash-head stagger-item" style={{ '--stagger': '40ms' }}>
        <h1 id="guru-dash-title">Halo, Pengajar KREASIVA</h1>
        <p>Ringkasan kelas aktif dan jadwal mengajar hari ini.</p>
      </div>

      {joinOpen ? (
        <div className="simple-inline-box stagger-item" style={{ '--stagger': '60ms' }}>
          {sent ? (
            <div className="simple-inline-done">
              <i className="ri-checkbox-circle-fill" aria-hidden="true" />
              <span>Terima kasih, {name}! Tim KREASIVA akan segera menghubungi Anda.</span>
            </div>
          ) : (
            <form className="simple-inline-form" onSubmit={handleJoin}>
              <input
                type="text"
                required
                placeholder="Nama lengkap calon pengajar..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button type="submit" className="pro-btn-dark">
                <i className="ri-send-plane-fill" aria-hidden="true" />
                <span>Daftar</span>
              </button>
            </form>
          )}
        </div>
      ) : null}

      <div className="simple-stat-row stagger-item" style={{ '--stagger': '80ms' }}>
        {GURU_STATS.map((stat) => (
          <div key={stat.label} className="simple-stat-card">
            <i className={stat.iconClass} aria-hidden="true" />
            <div>
              <span>{stat.label}</span>
              <strong>{stat.value}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="simple-list stagger-item" style={{ '--stagger': '120ms' }}>
        {GURU_CLASSES.map((item) => {
          const isStarted = activeClassId === item.id;
          return (
            <article key={item.id} className="simple-row">
              <div>
                <h2>{item.title}</h2>
                <p>
                  <i className="ri-time-line" aria-hidden="true" /> {item.time} •{' '}
                  {item.students}
                </p>
              </div>
              <button
                type="button"
                className={`pro-btn-dark ${isStarted ? 'is-active' : ''}`}
                onClick={() => setActiveClassId(isStarted ? null : item.id)}
              >
                <i
                  className={isStarted ? 'ri-check-line' : 'ri-play-circle-fill'}
                  aria-hidden="true"
                />
                <span>{isStarted ? 'Berlangsung' : 'Mulai Kelas'}</span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
