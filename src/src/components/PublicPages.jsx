import { useState } from 'react';
import DashboardNav from './DashboardNav';
import {
  ABOUT_INFO,
  ARTICLES_LIST,
  FAQS,
  LEARNING_MODES,
  PROGRAMS_LIST,
} from '../data/websiteData';

/** Public website subpages linked from the navigation bar and 5-slide CTA banner. */
export default function PublicPages({
  pageId,
  transitionClass,
  onBackHome,
  onNavigatePage,
  onSelectRole,
}) {
  const [formState, setFormState] = useState({
    name: '',
    childInfo: '',
    program: 'Computer Basics',
    whatsapp: '',
    note: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.name.trim() || !formState.whatsapp.trim()) return;
    setSubmitted(true);
  };

  if (pageId === 'tentang') {
    return (
      <section className={`public-page ${transitionClass}`} aria-labelledby="about-title">
        <DashboardNav
          badge="Tentang Kami"
          badgeTone="blue"
          title="Kenali KREASIVA"
          onBack={onBackHome}
        />

        <div className="public-hero stagger-item" style={{ '--stagger': '40ms' }}>
          <h1 id="about-title">Create. Explore. Innovate.</h1>
          <p>{ABOUT_INFO.profile}</p>
        </div>

        <div className="public-two-col stagger-item" style={{ '--stagger': '80ms' }}>
          <article className="public-card">
            <h2>
              <i className="ri-compass-3-line" aria-hidden="true" /> Visi Kami
            </h2>
            <p>{ABOUT_INFO.vision}</p>
          </article>

          <article className="public-card">
            <h2>
              <i className="ri-lightbulb-flash-line" aria-hidden="true" /> Misi Utama
            </h2>
            <ul className="public-bullets">
              {ABOUT_INFO.missions.map((mission) => (
                <li key={mission}>{mission}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="public-section stagger-item" style={{ '--stagger': '120ms' }}>
          <h2 className="public-section-title">Tim Pengajar KREASIVA</h2>
          <div className="public-three-col">
            {ABOUT_INFO.team.map((member) => (
              <article key={member.name} className="public-card public-team-card">
                <span className="public-icon-badge" aria-hidden="true">
                  <i className={member.iconClass} />
                </span>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (pageId === 'program') {
    return (
      <section className={`public-page ${transitionClass}`} aria-labelledby="program-title">
        <DashboardNav
          badge="Program Belajar"
          badgeTone="blue"
          title="Pilihan Kelas KREASIVA"
          onBack={onBackHome}
        />

        <div className="public-hero stagger-item" style={{ '--stagger': '40ms' }}>
          <h1 id="program-title">Program Belajar Teknologi &amp; Kreativitas</h1>
          <p>Pilih kelas sesuai usia anak untuk membangun fondasi teknologi sejak dini.</p>
        </div>

        <div className="public-two-col stagger-item" style={{ '--stagger': '80ms' }}>
          {PROGRAMS_LIST.map((program) => (
            <article key={program.id} className="public-card public-program-card">
              <div className="public-program-top">
                <span className={`public-icon-badge tone-${program.tone}`} aria-hidden="true">
                  <i className={program.iconClass} />
                </span>
                <span className="public-tag">{program.level}</span>
              </div>
              <h2>{program.title}</h2>
              <p>{program.description}</p>
              <div className="public-program-footer">
                <span className="public-format">
                  <i className="ri-time-line" aria-hidden="true" /> {program.format}
                </span>
                <button
                  type="button"
                  className="pro-btn-dark"
                  onClick={() => {
                    setFormState((prev) => ({ ...prev, program: program.title }));
                    setSubmitted(false);
                    onNavigatePage('daftar');
                  }}
                >
                  <i className="ri-user-add-line" aria-hidden="true" />
                  <span>Daftar Kelas</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    );
  }

  if (pageId === 'cara-belajar') {
    return (
      <section className={`public-page ${transitionClass}`} aria-labelledby="howto-title">
        <DashboardNav
          badge="Cara Belajar"
          badgeTone="blue"
          title="Sistem Belajar & FAQ"
          onBack={onBackHome}
        />

        <div className="public-hero stagger-item" style={{ '--stagger': '40ms' }}>
          <h1 id="howto-title">Belajar Fleksibel Online &amp; Offline</h1>
          <p>Dirancang nyaman bagi anak SD dan mudah dipantau oleh orang tua.</p>
        </div>

        <div className="public-two-col stagger-item" style={{ '--stagger': '80ms' }}>
          {LEARNING_MODES.map((mode) => (
            <article key={mode.title} className="public-card">
              <span className="public-icon-badge" aria-hidden="true">
                <i className={mode.iconClass} />
              </span>
              <h2>{mode.title}</h2>
              <p>{mode.detail}</p>
            </article>
          ))}
        </div>

        <div className="public-section stagger-item" style={{ '--stagger': '120ms' }}>
          <h2 className="public-section-title">Pertanyaan Umum (FAQ)</h2>
          <div className="public-faq-list">
            {FAQS.map((item) => (
              <article key={item.q} className="public-card">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (pageId === 'artikel') {
    return (
      <section className={`public-page ${transitionClass}`} aria-labelledby="article-title">
        <DashboardNav
          badge="Artikel & Aktivitas"
          badgeTone="orange"
          title="Edukasi & Tips Orang Tua"
          onBack={onBackHome}
        />

        <div className="public-hero stagger-item" style={{ '--stagger': '40ms' }}>
          <h1 id="article-title">Artikel, Tips &amp; Galeri Kegiatan</h1>
          <p>Bacaan singkat untuk mendukung perjalanan belajar teknologi anak di rumah.</p>
        </div>

        <div className="public-three-col stagger-item" style={{ '--stagger': '80ms' }}>
          {ARTICLES_LIST.map((article) => (
            <article key={article.id} className="public-card">
              <div className="public-program-top">
                <span className="public-icon-badge" aria-hidden="true">
                  <i className={article.iconClass} />
                </span>
                <span className="public-tag">{article.tag}</span>
              </div>
              <h2>{article.title}</h2>
              <p>{article.summary}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  const formConfig =
    pageId === 'konsultasi'
      ? {
          badge: 'Konsultasi Gratis',
          badgeTone: 'green',
          navTitle: 'Hubungi Admin KREASIVA',
          heading: 'Konsultasi Gratis Pemilihan Program',
          sub: 'Ceritakan usia dan minat anak, tim admin KREASIVA siap merekomendasikan kelas terbaik.',
          nameLabel: 'Nama Orang Tua / Wali',
          namePlaceholder: 'Masukkan nama Anda',
          extraLabel: 'Usia / Kelas Anak',
          extraPlaceholder: 'Contoh: 9 Tahun (SD Kelas 3)',
          submitLabel: 'Kirim Konsultasi Gratis',
          submitIcon: 'ri-whatsapp-line',
        }
      : pageId === 'pengajar'
        ? {
            badge: 'Jadi Pengajar',
            badgeTone: 'blue',
            navTitle: 'Pendaftaran Guru KREASIVA',
            heading: 'Gabung Sebagai Pengajar Kreatif',
            sub: 'Lengkapi formulir minat singkat atau masuk langsung ke pratinjau Dashboard Guru.',
            nameLabel: 'Nama Lengkap Pengajar',
            namePlaceholder: 'Masukkan nama lengkap Anda',
            extraLabel: 'Bidang Keahlian',
            extraPlaceholder: 'Contoh: Computer Basics / Coding / English',
            submitLabel: 'Kirim Lamaran Pengajar',
            submitIcon: 'ri-graduation-cap-fill',
          }
        : {
            badge: 'Daftar Sekarang',
            badgeTone: 'orange',
            navTitle: 'Formulir Pendaftaran',
            heading: 'Daftar Program Belajar KREASIVA',
            sub: 'Isi data singkat untuk mendaftarkan anak atau mencoba kelas perdana.',
            nameLabel: 'Nama Orang Tua / Pendaftar',
            namePlaceholder: 'Masukkan nama lengkap',
            extraLabel: 'Nama & Umur Anak',
            extraPlaceholder: 'Contoh: Kirana (9 Tahun)',
            submitLabel: 'Daftar Sekarang',
            submitIcon: 'ri-send-plane-fill',
          };

  return (
    <section className={`public-page public-form-page ${transitionClass}`} aria-labelledby="form-page-title">
      <DashboardNav
        badge={formConfig.badge}
        badgeTone={formConfig.badgeTone}
        title={formConfig.navTitle}
        onBack={onBackHome}
        rightSlot={
          pageId === 'pengajar' ? (
            <button
              type="button"
              className="pro-pill-btn"
              onClick={() => onSelectRole('guru')}
            >
              <i className="ri-graduation-cap-fill" aria-hidden="true" />
              <span>Buka Dashboard Guru</span>
            </button>
          ) : null
        }
      />

      <div className="public-hero stagger-item" style={{ '--stagger': '40ms' }}>
        <h1 id="form-page-title">{formConfig.heading}</h1>
        <p>{formConfig.sub}</p>
      </div>

      {submitted ? (
        <div className="public-success-box stagger-item" style={{ '--stagger': '60ms' }} role="status">
          <i className="ri-checkbox-circle-fill" aria-hidden="true" />
          <h2>Terima kasih, {formState.name}!</h2>
          <p>
            Permintaan Anda sudah kami terima. Admin KREASIVA akan menghubungi melalui WhatsApp{' '}
            <strong>{formState.whatsapp}</strong>.
          </p>
          <div className="public-success-actions">
            <button type="button" className="pro-btn-dark" onClick={onBackHome}>
              <i className="ri-home-4-line" aria-hidden="true" />
              <span>Kembali ke Home</span>
            </button>
            <button
              type="button"
              className="pro-btn-ghost"
              onClick={() => setSubmitted(false)}
            >
              <i className="ri-refresh-line" aria-hidden="true" />
              <span>Isi Ulang</span>
            </button>
          </div>
        </div>
      ) : (
        <form
          className="public-form-card stagger-item"
          style={{ '--stagger': '80ms' }}
          onSubmit={handleSubmit}
        >
          <div className="public-field">
            <label htmlFor="pub-name">{formConfig.nameLabel}</label>
            <input
              id="pub-name"
              type="text"
              required
              placeholder={formConfig.namePlaceholder}
              value={formState.name}
              onChange={(e) => setFormState((prev) => ({ ...prev, name: e.target.value }))}
            />
          </div>

          <div className="public-field">
            <label htmlFor="pub-extra">{formConfig.extraLabel}</label>
            <input
              id="pub-extra"
              type="text"
              required
              placeholder={formConfig.extraPlaceholder}
              value={formState.childInfo}
              onChange={(e) => setFormState((prev) => ({ ...prev, childInfo: e.target.value }))}
            />
          </div>

          {pageId === 'daftar' ? (
            <div className="public-field">
              <label htmlFor="pub-program">Program yang Dipilih</label>
              <select
                id="pub-program"
                value={formState.program}
                onChange={(e) => setFormState((prev) => ({ ...prev, program: e.target.value }))}
              >
                {PROGRAMS_LIST.map((item) => (
                  <option key={item.id} value={item.title}>
                    {item.title}
                  </option>
                ))}
                <option value="Fun English (Kelas Baru)">Fun English (Kelas Baru)</option>
              </select>
            </div>
          ) : null}

          <div className="public-field">
            <label htmlFor="pub-wa">Nomor WhatsApp Aktif</label>
            <input
              id="pub-wa"
              type="tel"
              required
              placeholder="Contoh: 0812-3456-7890"
              value={formState.whatsapp}
              onChange={(e) => setFormState((prev) => ({ ...prev, whatsapp: e.target.value }))}
            />
          </div>

          <button type="submit" className="public-submit-btn">
            <i className={formConfig.submitIcon} aria-hidden="true" />
            <span>{formConfig.submitLabel}</span>
          </button>
        </form>
      )}
    </section>
  );
}
