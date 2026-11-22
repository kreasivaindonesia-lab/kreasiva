import { useState } from 'react';
import DashboardNav from './DashboardNav';
import EnglishOfferNotification from './EnglishOfferNotification';
import { AGE_TIERS, getAgeTierId } from '../data/dashboardData';

const AGE_BUTTONS = [
  { age: 5, label: 'TK (4–6 th)' },
  { age: 9, label: 'SD (7–12 th)' },
  { age: 14, label: 'SMP (13–15 th)' },
  { age: 17, label: 'SMA (16–18 th)' },
];

/**
 * Clean 2-step student flow:
 * 1) Simple age question + design theme + interest selection (adapts live by age).
 * 2) Clean personalized Student Dashboard with a new English class notification banner.
 */
export default function StudentDashboard({
  onBack,
  transitionClass,
  age,
  onAgeChange,
  onThemeChange,
}) {
  const tierId = getAgeTierId(age);
  const tier = AGE_TIERS[tierId];

  const [themeId, setThemeId] = useState(tier.themes[0].id);
  const [interests, setInterests] = useState([tier.interests[0].id]);
  const [step, setStep] = useState('setup'); // 'setup' | 'dashboard'
  const [doneIds, setDoneIds] = useState([]);
  const [offerOpen, setOfferOpen] = useState(true);
  const [offerJoined, setOfferJoined] = useState(false);

  const activeTheme =
    tier.themes.find((item) => item.id === themeId) ?? tier.themes[0];

  const handleAgeUpdate = (nextAge) => {
    const validAge = Math.max(3, Math.min(22, Number(nextAge) || 5));
    const nextTierId = getAgeTierId(validAge);
    const nextTier = AGE_TIERS[nextTierId];

    onAgeChange(validAge);

    if (nextTierId !== tierId) {
      const firstTheme = nextTier.themes[0];
      setThemeId(firstTheme.id);
      onThemeChange(firstTheme);
      setInterests([nextTier.interests[0].id]);
      setDoneIds([]);
      setOfferJoined(false);
      setOfferOpen(true);
    }
  };

  const toggleInterest = (id) => {
    setInterests((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id]
    );
  };

  const toggleDone = (id) => {
    setDoneIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const englishClassCard = offerJoined
    ? [
        {
          id: `english-new-${tier.id}`,
          interest: 'inggris',
          title: tier.englishOffer.cardTitle,
          info: tier.englishOffer.cardInfo,
          iconClass: 'ri-translate-2',
          isNew: true,
        },
      ]
    : [];

  const orderedActivities = [
    ...englishClassCard,
    ...tier.activities.filter((act) => interests.includes(act.interest)),
    ...tier.activities.filter((act) => !interests.includes(act.interest)),
  ];

  const themeVars = {
    '--student-accent': activeTheme.accent,
    '--student-soft': activeTheme.soft,
    '--student-ink': activeTheme.ink,
  };

  return (
    <section
      className={`student-shell student-tier-${tier.id} ${transitionClass}`}
      style={themeVars}
      aria-labelledby="student-title"
    >
      <DashboardNav
        badge={tier.label}
        badgeTone="orange"
        title={step === 'setup' ? 'Halo Murid!' : 'Dashboard Murid'}
        onBack={onBack}
        rightSlot={
          step === 'dashboard' ? (
            <div className="student-nav-actions">
              <button
                type="button"
                className="notif-bell-btn"
                onClick={() => setOfferOpen((prev) => !prev)}
                aria-label="Notifikasi penawaran kelas Bahasa Inggris"
                title="Notifikasi Kelas Baru"
              >
                <i className="ri-notification-3-fill" aria-hidden="true" />
                {!offerJoined ? <span className="notif-unread-dot" aria-hidden="true" /> : null}
              </button>

              <button
                type="button"
                className="student-customize-btn"
                onClick={() => setStep('setup')}
              >
                <i className="ri-sliders-line" aria-hidden="true" />
                <span>Ubah Umur &amp; Tema</span>
              </button>
            </div>
          ) : null
        }
      />

      {step === 'setup' ? (
        <div className="student-simple-setup stagger-item" style={{ '--stagger': '40ms' }}>
          <span className="student-style-badge">
            <i className="ri-sparkling-fill" aria-hidden="true" />
            <span>{tier.styleHint}</span>
          </span>

          <h1 id="student-title" className="student-question">
            Kamu umur berapa?
          </h1>

          <div className="student-age-row">
            {AGE_BUTTONS.map((btn) => (
              <button
                key={btn.age}
                type="button"
                className={`age-preset-btn ${getAgeTierId(btn.age) === tierId ? 'is-selected' : ''}`}
                onClick={() => handleAgeUpdate(btn.age)}
              >
                <i className="ri-star-smile-fill" aria-hidden="true" />
                <span>{btn.label}</span>
              </button>
            ))}

            <div className="age-number-wrap" aria-label="Atur angka umur">
              <button
                type="button"
                className="age-step-btn"
                aria-label="Kurangi umur"
                onClick={() => handleAgeUpdate(age - 1)}
              >
                <i className="ri-arrow-left-s-line" aria-hidden="true" />
              </button>
              <span className="age-readout">{age} th</span>
              <button
                type="button"
                className="age-step-btn"
                aria-label="Tambah umur"
                onClick={() => handleAgeUpdate(age + 1)}
              >
                <i className="ri-arrow-right-s-line" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="student-choice-group">
            <p className="choice-label">
              <i className="ri-palette-line" aria-hidden="true" /> Pilih desain ({tier.shortLabel}):
            </p>
            <div className="choice-pills">
              {tier.themes.map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  className={`choice-pill ${theme.id === activeTheme.id ? 'is-active' : ''}`}
                  onClick={() => {
                    setThemeId(theme.id);
                    onThemeChange(theme);
                  }}
                >
                  <span className="swatch-dot" style={{ background: theme.accent }} />
                  <span>{theme.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="student-choice-group">
            <p className="choice-label">
              <i className="ri-compass-3-line" aria-hidden="true" /> Pilih minatmu:
            </p>
            <div className="choice-pills">
              {tier.interests.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`choice-pill ${interests.includes(item.id) ? 'is-active' : ''}`}
                  onClick={() => toggleInterest(item.id)}
                >
                  <i className={item.iconClass} aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="student-enter-btn"
            onClick={() => {
              onThemeChange(activeTheme);
              setStep('dashboard');
            }}
          >
            <i className="ri-rocket-2-line" aria-hidden="true" />
            <span>Masuk Dashboard</span>
          </button>
        </div>
      ) : (
        <div className="student-board stagger-item" style={{ '--stagger': '40ms' }}>
          <EnglishOfferNotification
            badge={tier.englishOffer.badge}
            title={tier.englishOffer.title}
            description={tier.englishOffer.description}
            ctaLabel={tier.englishOffer.ctaLabel}
            joinedText={tier.englishOffer.joinedText}
            isOpen={offerOpen}
            isJoined={offerJoined}
            onJoin={() => setOfferJoined(true)}
            onClose={() => setOfferOpen(false)}
          />

          <div className="student-banner">
            <div>
              <span className="student-banner-tag">
                {age} Tahun • {activeTheme.name}
              </span>
              <h1 id="student-title" className="student-banner-title">
                {tier.greeting}
              </h1>
              <p className="student-banner-sub">{tier.subtitle}</p>
            </div>

            <div className="student-score-box">
              <i className="ri-medal-line" aria-hidden="true" />
              <span>
                {doneIds.length} / {orderedActivities.length} Selesai
              </span>
            </div>
          </div>

          <div className="student-activity-grid">
            {orderedActivities.map((act) => {
              const isDone = doneIds.includes(act.id);
              return (
                <article
                  key={act.id}
                  className={`student-act-card ${isDone ? 'is-done' : ''} ${act.isNew ? 'is-new-class' : ''}`}
                >
                  <div className="student-act-top">
                    <span className="student-act-icon" aria-hidden="true">
                      <i className={act.iconClass} />
                    </span>
                    <span className="student-act-info">{act.info}</span>
                  </div>
                  <h2 className="student-act-title">{act.title}</h2>
                  <button
                    type="button"
                    className={`student-act-btn ${isDone ? 'is-done' : ''}`}
                    onClick={() => toggleDone(act.id)}
                  >
                    <i
                      className={isDone ? 'ri-check-line' : 'ri-play-circle-fill'}
                      aria-hidden="true"
                    />
                    <span>
                      {isDone
                        ? 'Selesai!'
                        : tier.id === 'tk'
                          ? 'Ayo Main!'
                          : 'Mulai'}
                    </span>
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
