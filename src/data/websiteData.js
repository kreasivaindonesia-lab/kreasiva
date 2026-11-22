export const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'tentang', label: 'Tentang' },
  { id: 'program', label: 'Program' },
  { id: 'cara-belajar', label: 'Cara Belajar' },
  { id: 'artikel', label: 'Artikel' },
];

export const HERO_CTA_SLIDES = [
  {
    id: 'daftar',
    targetPage: 'daftar',
    eyebrow: 'Pendaftaran Dibuka',
    ctaLabel: 'Daftar Sekarang',
    title: 'Formulir Pendaftaran Siswa Baru',
    description:
      'Daftarkan putra-putri Anda ke program belajar teknologi kreatif KREASIVA hanya dalam beberapa langkah.',
    iconClass: 'ri-user-add-line',
    tone: 'orange',
  },
  {
    id: 'program',
    targetPage: 'program',
    eyebrow: 'Kurikulum Anak & Remaja',
    ctaLabel: 'Jelajahi Program',
    title: 'Computer Basics, Excel, Coding & Creative Learning',
    description:
      'Lihat pilihan kelas bertahap mulai dari dasar komputer hingga logika coding dan Bahasa Inggris interaktif.',
    iconClass: 'ri-apps-2-line',
    tone: 'blue',
  },
  {
    id: 'tentang',
    targetPage: 'tentang',
    eyebrow: 'Profil Lembaga',
    ctaLabel: 'Kenali KREASIVA',
    title: 'Tentang Kami, Visi & Tim Pengajar',
    description:
      'Pelajari bagaimana KREASIVA membantu anak belajar teknologi dengan aman, kreatif, dan menyenangkan.',
    iconClass: 'ri-lightbulb-flash-line',
    tone: 'sky',
  },
  {
    id: 'konsultasi',
    targetPage: 'konsultasi',
    eyebrow: 'Tanya Program',
    ctaLabel: 'Konsultasi Gratis',
    title: 'Hubungi Admin & Konsultasi Kelas',
    description:
      'Bingung memilih kelas yang sesuai usia dan minat anak? Konsultasi langsung bersama tim admin kami.',
    iconClass: 'ri-whatsapp-line',
    tone: 'green',
  },
  {
    id: 'pengajar',
    targetPage: 'pengajar',
    eyebrow: 'Karier Pengajar',
    ctaLabel: 'Jadi Pengajar',
    title: 'Pendaftaran Guru & Mentor KREASIVA',
    description:
      'Bergabunglah menjadi pengajar inspiratif untuk membimbing generasi muda Indonesia menguasai teknologi.',
    iconClass: 'ri-graduation-cap-fill',
    tone: 'deep',
  },
];

export const PROGRAMS_LIST = [
  {
    id: 'computer-basics',
    title: 'Computer Basics',
    level: 'TK & SD Awal (6–9 Thn)',
    format: 'Online / Offline',
    iconClass: 'ri-computer-line',
    tone: 'blue',
    description:
      'Pengenalan perangkat komputer, mengetik cepat & rapi, keamanan internet dasar, dan eksplorasi kreasi digital.',
  },
  {
    id: 'excel-office',
    title: 'Excel & Office',
    level: 'SD Atas & SMP (9–14 Thn)',
    format: 'Project Based',
    iconClass: 'ri-file-excel-2-line',
    tone: 'green',
    description:
      'Belajar mengolah tabel, rumus dasar, grafik visual, serta membuat dokumen dan presentasi sekolah yang menarik.',
  },
  {
    id: 'coding-logic',
    title: 'Coding & Logic',
    level: 'SD, SMP & SMA (8–17 Thn)',
    format: 'Interactive Lab',
    iconClass: 'ri-code-s-slash-line',
    tone: 'orange',
    description:
      'Melatih logika pemecahan masalah lewat block coding, pembuatan game sederhana, hingga dasar pengembangan web.',
  },
  {
    id: 'creative-learning',
    title: 'Creative Learning',
    level: 'TK – SMP (5–14 Thn)',
    format: 'Studio Kreatif',
    iconClass: 'ri-palette-line',
    tone: 'sky',
    description:
      'Menggabungkan desain visual, storytelling digital, dan kelas Bahasa Inggris interaktif untuk meningkatkan rasa percaya diri.',
  },
];

export const ABOUT_INFO = {
  profile:
    'KREASIVA Learning Institute adalah lembaga pembelajaran teknologi dan kreativitas untuk anak usia dini hingga remaja dengan pendekatan praktis, hangat, dan menyenangkan.',
  vision:
    'Membentuk generasi muda yang cakap teknologi, berpikir logis, dan berani berkarya kreatif untuk masa depan.',
  missions: [
    'Menghadirkan materi teknologi yang mudah dipahami anak SD hingga SMA.',
    'Menggabungkan praktik proyek nyata dengan bimbingan mentor yang ramah.',
    'Melibatkan orang tua secara transparan dalam memantau perkembangan belajar anak.',
  ],
  team: [
    { name: 'Kak Nadia Putri', role: 'Lead Curriculum • Creative Tech', iconClass: 'ri-graduation-cap-fill' },
    { name: 'Kak Dimas Pratama', role: 'Mentor Coding & Logic SD/SMP', iconClass: 'ri-code-s-slash-line' },
    { name: 'Kak Sari Wulandari', role: 'Mentor Kids English & Calistung', iconClass: 'ri-star-smile-fill' },
  ],
};

export const LEARNING_MODES = [
  {
    title: 'Kelas Online Interaktif',
    detail: 'Belajar dari rumah via video interaktif kelompok kecil maksimal 6 murid per sesi.',
    iconClass: 'ri-computer-line',
  },
  {
    title: 'Kelas Offline Studio',
    detail: 'Belajar tatap muka langsung bersama mentor dengan laptop dan modul praktik.',
    iconClass: 'ri-home-heart-fill',
  },
];

export const FAQS = [
  {
    q: 'Apakah anak pemula yang belum pernah pakai laptop bisa ikut?',
    a: 'Tentu bisa! Kelas Computer Basics dirancang khusus untuk pemula mulai dari pengenalan mouse, keyboard, hingga praktik kreatif.',
  },
  {
    q: 'Bagaimana orang tua memantau progres belajar anak?',
    a: 'Melalui Portal Orang Tua, Ayah & Bunda dapat melihat kehadiran, jadwal sesi berikutnya, dan catatan langsung dari pengajar.',
  },
  {
    q: 'Apakah tersedia kelas uji coba (trial) terlebih dahulu?',
    a: 'Ya, tersedia sesi konsultasi dan coba kelas gratis agar anak dan orang tua yakin dengan program yang dipilih.',
  },
];

export const ARTICLES_LIST = [
  {
    id: 'art-1',
    tag: 'Edukasi Anak',
    title: 'Mengapa Anak SD Perlu Mengenali Logika Teknologi Sejak Dini?',
    summary:
      'Mengenalkan cara kerja komputer dan logika dasar membantu anak berpikir terstruktur, kreatif, dan tidak sekadar menjadi pengguna gadget.',
    iconClass: 'ri-lightbulb-flash-line',
  },
  {
    id: 'art-2',
    tag: 'Tips Orang Tua',
    title: '5 Cara Mendampingi Anak Belajar Laptop Secara Sehat di Rumah',
    summary:
      'Mulai dari aturan waktu layar, posisi duduk ergonomis, hingga memilih proyek belajar yang memicu rasa ingin tahu anak.',
    iconClass: 'ri-home-heart-fill',
  },
  {
    id: 'art-3',
    tag: 'Galeri Aktivitas',
    title: 'Karya Mini Game & Poster Digital Pertama Murid KREASIVA',
    summary:
      'Intip keseruan murid kelas SD saat mempresentasikan karya pertamanya bersama teman sekelas dan mentor.',
    iconClass: 'ri-sparkling-fill',
  },
];
