export const ROLES = [
  {
    id: 'guru',
    label: 'Jadi Guru',
    caption: 'Masuk ke dashboard pengajar',
    accent: 'blue',
    iconClass: 'ri-graduation-cap-fill',
  },
  {
    id: 'murid',
    label: 'Murid',
    caption: 'Belajar sesuai umur & minat',
    accent: 'orange',
    iconClass: 'ri-star-smile-fill',
  },
  {
    id: 'orang-tua',
    label: 'Orang Tua',
    caption: 'Pantau progres belajar anak',
    accent: 'green',
    iconClass: 'ri-home-heart-fill',
  },
];

export const GURU_STATS = [
  { label: 'Kelas Aktif', value: '6', iconClass: 'ri-book-open-line' },
  { label: 'Total Murid', value: '48', iconClass: 'ri-group-line' },
  { label: 'Jadwal Hari Ini', value: '3 Sesi', iconClass: 'ri-calendar-2-line' },
];

export const GURU_CLASSES = [
  { id: 'c1', title: 'Calistung & Kreativitas (TK)', time: '15:30 WIB', students: '8 Murid' },
  { id: 'c2', title: 'Matematika Logika (SD)', time: '16:45 WIB', students: '10 Murid' },
  { id: 'c3', title: 'Creative Coding (SMP / SMA)', time: '18:30 WIB', students: '12 Murid' },
];

export const PARENT_CHILDREN = [
  {
    id: 'kirana',
    name: 'Kirana',
    level: 'SD Kelas 4',
    program: 'Matematika & Kreativitas',
    attendance: '96%',
    nextSchedule: 'Hari Ini, 16:30 WIB',
    note: 'Kirana aktif berdiskusi dan sangat antusias saat latihan logika gambar.',
    englishOffer: {
      badge: 'Kelas Baru!',
      title: 'Tawarkan ke Kirana: Kelas Baru Fun English Adventure (SD)',
      description: 'Bantu Kirana lebih percaya diri berbahasa Inggris lewat permainan & cerita interaktif. Gratis sesi coba 1x!',
      ctaLabel: 'Daftarkan Coba Gratis',
      joinedText: 'Pendaftaran coba gratis Bahasa Inggris untuk Kirana sudah dicatat!',
    },
  },
  {
    id: 'raka',
    name: 'Raka',
    level: 'TK B',
    program: 'Calistung Ceria',
    attendance: '100%',
    nextSchedule: 'Besok, 10:00 WIB',
    note: 'Raka senang menyusun huruf dengan balok warna dan cepat menghafal kosakata baru.',
    englishOffer: {
      badge: 'Kelas Baru!',
      title: 'Tawarkan ke Raka: Kelas Baru Bahasa Inggris Ceria (TK)',
      description: 'Kenalkan kosakata Bahasa Inggris untuk Raka lewat lagu, gambar, dan aktivitas bermain yang menyenangkan.',
      ctaLabel: 'Daftarkan Coba Gratis',
      joinedText: 'Pendaftaran coba gratis Bahasa Inggris untuk Raka sudah dicatat!',
    },
  },
];

export const AGE_TIERS = {
  tk: {
    id: 'tk',
    label: 'TK (4–6 Thn)',
    shortLabel: 'Anak TK',
    defaultAge: 5,
    greeting: 'Hai Sahabat Kecil! Ayo Bermain & Belajar!',
    subtitle: 'Pilih kegiatan seru di bawah ini untuk dapat bintang.',
    styleHint: 'Mode Anak Ceria • Warna Cerah & Bulat',
    englishOffer: {
      badge: 'Kelas Baru!',
      title: 'Penawaran Kelas Baru: Bahasa Inggris Ceria (Play & Songs)',
      description: 'Yuk kenalan kata Bahasa Inggris lewat lagu, gambar lucu, dan permainan seru! Gratis coba 1x.',
      ctaLabel: 'Ikut Coba Gratis',
      joinedText: 'Hore! Kamu sudah daftar kelas coba Bahasa Inggris Ceria!',
      cardTitle: 'Bahasa Inggris: Play & Songs (Baru)',
      cardInfo: '15 Menit • Kelas Baru',
    },
    themes: [
      { id: 'tk-pelangi', name: 'Pelangi', accent: '#FF7A00', soft: '#FFF4E2', pageBg: '#FFFDF4', ink: '#004E9E' },
      { id: 'tk-langit', name: 'Langit Biru', accent: '#1CA8FF', soft: '#E6F4FF', pageBg: '#F2FAFF', ink: '#004E9E' },
      { id: 'tk-taman', name: 'Kebun Hijau', accent: '#63B82B', soft: '#EEFCE4', pageBg: '#F6FFF0', ink: '#24580B' },
    ],
    interests: [
      { id: 'gambar', label: 'Menggambar', iconClass: 'ri-brush-fill' },
      { id: 'cerita', label: 'Cerita', iconClass: 'ri-book-open-line' },
      { id: 'hitung', label: 'Berhitung', iconClass: 'ri-calculator-fill' },
      { id: 'bintang', label: 'Eksplorasi', iconClass: 'ri-star-smile-fill' },
    ],
    activities: [
      { id: 'tk1', interest: 'gambar', title: 'Mewarnai Balon Angka', info: '15 Menit • +3 Bintang', iconClass: 'ri-brush-fill' },
      { id: 'tk2', interest: 'cerita', title: 'Dongeng Petualangan Kiko', info: '10 Menit • +2 Bintang', iconClass: 'ri-book-open-line' },
      { id: 'tk3', interest: 'hitung', title: 'Hitung Bintang Warna', info: '12 Menit • +3 Bintang', iconClass: 'ri-calculator-fill' },
      { id: 'tk4', interest: 'bintang', title: 'Susun Bentuk Pelangi', info: '15 Menit • +4 Bintang', iconClass: 'ri-star-smile-fill' },
    ],
  },
  sd: {
    id: 'sd',
    label: 'SD (7–12 Thn)',
    shortLabel: 'Anak SD',
    defaultAge: 9,
    greeting: 'Halo Petualang KREASIVA!',
    subtitle: 'Selesaikan misi belajarmu hari ini dan kumpulkan poin.',
    styleHint: 'Mode Petualang • Interaktif & Seru',
    englishOffer: {
      badge: 'Kelas Baru!',
      title: 'Penawaran Kelas Baru: Fun English Adventure',
      description: 'Kelas Bahasa Inggris baru dengan game, cerita interaktif, dan latihan ngobrol seru!',
      ctaLabel: 'Gabung Kelas Baru',
      joinedText: 'Mantap! Kelas baru Fun English Adventure sudah ditambahkan ke daftarmu.',
      cardTitle: 'Fun English Adventure (Baru)',
      cardInfo: '25 Menit • Kelas Baru',
    },
    themes: [
      { id: 'sd-biru', name: 'Biru Cerdas', accent: '#005CB9', soft: '#E8F3FF', pageBg: '#F4F9FF', ink: '#004E9E' },
      { id: 'sd-oranye', name: 'Oranye Juara', accent: '#FF7A00', soft: '#FFF2E5', pageBg: '#FFFBF6', ink: '#8A3400' },
      { id: 'sd-hijau', name: 'Lab Sains', accent: '#10B981', soft: '#E6FBF3', pageBg: '#F4FCF9', ink: '#065F46' },
    ],
    interests: [
      { id: 'logika', label: 'Matematika', iconClass: 'ri-calculator-fill' },
      { id: 'sains', label: 'Sains', iconClass: 'ri-flask-fill' },
      { id: 'inggris', label: 'B. Inggris', iconClass: 'ri-translate-2' },
      { id: 'coding', label: 'Coding', iconClass: 'ri-code-s-slash-line' },
    ],
    activities: [
      { id: 'sd1', interest: 'logika', title: 'Teka-Teki Logika Angka', info: '25 Menit • 120 XP', iconClass: 'ri-calculator-fill' },
      { id: 'sd2', interest: 'sains', title: 'Eksperimen Sains Mini', info: '30 Menit • 150 XP', iconClass: 'ri-flask-fill' },
      { id: 'sd3', interest: 'inggris', title: 'English Adventure', info: '20 Menit • 100 XP', iconClass: 'ri-translate-2' },
      { id: 'sd4', interest: 'coding', title: 'Buat Game Blok Pertama', info: '30 Menit • 160 XP', iconClass: 'ri-code-s-slash-line' },
    ],
  },
  smp: {
    id: 'smp',
    label: 'SMP (13–15 Thn)',
    shortLabel: 'Pelajar SMP',
    defaultAge: 14,
    greeting: 'Selamat Datang di Ruang Belajar',
    subtitle: 'Fokus pada materi pilihan sesuai minatmu hari ini.',
    styleHint: 'Mode Modern • Rapi & Dinamis',
    englishOffer: {
      badge: 'Kelas Baru',
      title: 'Penawaran Kelas Baru: Confident English Speaking',
      description: 'Kelas baru khusus SMP untuk melatih speaking, listening, dan percaya diri berbahasa Inggris.',
      ctaLabel: 'Daftar Kelas',
      joinedText: 'Berhasil! Kelas Confident English Speaking siap kamu ikuti.',
      cardTitle: 'Confident English Speaking (Baru)',
      cardInfo: '35 Menit • Kelas Baru',
    },
    themes: [
      { id: 'smp-azure', name: 'Azure Modern', accent: '#005CB9', soft: '#EAF3FF', pageBg: '#F7FAFE', ink: '#0F294A' },
      { id: 'smp-teal', name: 'Mint Fokus', accent: '#0D9488', soft: '#E6FAF7', pageBg: '#F5FCFB', ink: '#0D3D38' },
      { id: 'smp-amber', name: 'Studio Amber', accent: '#EA580C', soft: '#FFF1E8', pageBg: '#FFFBF8', ink: '#431906' },
    ],
    interests: [
      { id: 'logika', label: 'Matematika', iconClass: 'ri-calculator-fill' },
      { id: 'coding', label: 'Coding Web', iconClass: 'ri-code-s-slash-line' },
      { id: 'sains', label: 'Riset Sains', iconClass: 'ri-flask-fill' },
      { id: 'inggris', label: 'English Club', iconClass: 'ri-translate-2' },
    ],
    activities: [
      { id: 'smp1', interest: 'logika', title: 'Problem Solving Aljabar', info: '35 Menit • Modul Inti', iconClass: 'ri-calculator-fill' },
      { id: 'smp2', interest: 'coding', title: 'Membuat Web Interaktif', info: '40 Menit • Project', iconClass: 'ri-code-s-slash-line' },
      { id: 'smp3', interest: 'sains', title: 'Simulasi Energi & Gerak', info: '30 Menit • Latihan', iconClass: 'ri-flask-fill' },
      { id: 'smp4', interest: 'inggris', title: 'English Presentation', info: '25 Menit • Speaking', iconClass: 'ri-translate-2' },
    ],
  },
  sma: {
    id: 'sma',
    label: 'SMA (16–18+ Thn)',
    shortLabel: 'Pelajar SMA',
    defaultAge: 17,
    greeting: 'KREASIVA Learning Workspace',
    subtitle: 'Ringkasan modul belajar dan persiapan kompetensi pilihanmu.',
    styleHint: 'Mode Minimalis • Elegan & Fokus',
    englishOffer: {
      badge: 'Program Baru',
      title: 'Penawaran Kelas Baru: Academic & Conversational English',
      description: 'Tingkatkan kemampuan speaking, essay writing, dan kesiapan tes Bahasa Inggris akademik.',
      ctaLabel: 'Ikut Kelas Baru',
      joinedText: 'Terdaftar! Modul Academic & Conversational English sudah aktif di workspace kamu.',
      cardTitle: 'Academic & Conversational English (Baru)',
      cardInfo: '45 Menit • Kelas Baru',
    },
    themes: [
      { id: 'sma-slate', name: 'Minimalist Slate', accent: '#0F172A', soft: '#F1F5F9', pageBg: '#F8FAFC', ink: '#0F172A' },
      { id: 'sma-cobalt', name: 'Cobalt Blue', accent: '#1D4ED8', soft: '#EFF6FF', pageBg: '#F8FAFF', ink: '#0F172A' },
      { id: 'sma-gold', name: 'Warm Graphite', accent: '#B45309', soft: '#FEF3C7', pageBg: '#FAF9F6', ink: '#1E293B' },
    ],
    interests: [
      { id: 'analitik', label: 'Penalaran', iconClass: 'ri-calculator-fill' },
      { id: 'coding', label: 'Teknologi', iconClass: 'ri-code-s-slash-line' },
      { id: 'riset', label: 'Riset Sains', iconClass: 'ri-flask-fill' },
      { id: 'desain', label: 'Inovasi', iconClass: 'ri-compass-3-line' },
    ],
    activities: [
      { id: 'sma1', interest: 'analitik', title: 'Penalaran Kuantitatif', info: '45 Menit • Fokus Ujian', iconClass: 'ri-calculator-fill' },
      { id: 'sma2', interest: 'coding', title: 'Logika Algoritma & Web', info: '50 Menit • Lab', iconClass: 'ri-code-s-slash-line' },
      { id: 'sma3', interest: 'riset', title: 'Analisis Data Ilmiah', info: '40 Menit • Riset', iconClass: 'ri-flask-fill' },
      { id: 'sma4', interest: 'desain', title: 'Design Thinking & Pitch', info: '45 Menit • Portofolio', iconClass: 'ri-compass-3-line' },
    ],
  },
};

/** Maps a student's age to TK, SD, SMP, or SMA tier. */
export function getAgeTierId(age) {
  const numericAge = Number(age);
  if (!Number.isFinite(numericAge) || numericAge <= 6) return 'tk';
  if (numericAge <= 12) return 'sd';
  if (numericAge <= 15) return 'smp';
  return 'sma';
}
