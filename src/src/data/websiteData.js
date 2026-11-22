import bannerA from '../assets/banners/banner-a-daftar.svg';
import bannerB from '../assets/banners/banner-b-program.svg';
import bannerC from '../assets/banners/banner-c-tentang.svg';
import bannerD from '../assets/banners/banner-d-konsultasi.svg';
import bannerE from '../assets/banners/banner-e-pengajar.svg';

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
    code: 'A',
    targetPage: 'daftar',
    image: bannerA,
    ctaLabel: 'Daftar Sekarang',
    alt: 'Banner A: Daftar Sekarang di KREASIVA menuju formulir pendaftaran',
    iconClass: 'ri-user-add-line',
  },
  {
    id: 'program',
    code: 'B',
    targetPage: 'program',
    image: bannerB,
    ctaLabel: 'Jelajahi Program',
    alt: 'Banner B: Jelajahi Program pilihan kelas KREASIVA',
    iconClass: 'ri-apps-2-line',
  },
  {
    id: 'tentang',
    code: 'C',
    targetPage: 'tentang',
    image: bannerC,
    ctaLabel: 'Kenali KREASIVA',
    alt: 'Banner C: Kenali KREASIVA menuju halaman Tentang Kami',
    iconClass: 'ri-lightbulb-flash-line',
  },
  {
    id: 'konsultasi',
    code: 'D',
    targetPage: 'konsultasi',
    image: bannerD,
    ctaLabel: 'Konsultasi Gratis',
    alt: 'Banner D: Konsultasi Gratis menghubungi admin KREASIVA',
    iconClass: 'ri-whatsapp-line',
  },
  {
    id: 'pengajar',
    code: 'E',
    targetPage: 'pengajar',
    image: bannerE,
    ctaLabel: 'Jadi Pengajar',
    alt: 'Banner E: Jadi Pengajar menuju pendaftaran guru KREASIVA',
    iconClass: 'ri-graduation-cap-fill',
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
