const services = [
  {
    title: 'Landing Page',
    category: 'Website Satu Halaman',
    desc: 'Halaman promosi responsif untuk bisnis, produk, atau jasa.',
  },
  {
    title: 'Company Profile',
    category: 'Website Bisnis',
    desc: 'Profil, layanan, galeri, dan kontak bisnis dalam maksimal 5 halaman.',
  },
  {
    title: 'Toko Online UMKM',
    category: 'Commerce',
    desc: 'Katalog, keranjang, checkout standar, dan dashboard untuk satu toko.',
  },
  {
    title: 'Sistem Pemesanan',
    category: 'Commerce',
    desc: 'Menu atau katalog, checkout, dan pengelolaan pesanan untuk satu outlet.',
  },
  {
    title: 'Sistem Kasir & Suite',
    category: 'Operasional',
    desc: 'POS dan dashboard operasional untuk satu outlet dan satu database.',
  },
  {
    title: 'Custom Web App',
    category: 'Sistem Khusus',
    desc: 'Dashboard operasional, sistem internal, booking, atau alur khusus.',
  },
]

export default function KaryaBit() {
  return (
    <section id="karyabit" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <span className="badge badge-accent">KaryaBit Studio</span>
          <h2 className="section-title mt-3">Website & Sistem Digital</h2>
          <p className="section-subtitle">
            Kami merancang website dan aplikasi yang memudahkan bisnis menjangkau
            pelanggan, menerima pesanan, dan mengelola operasional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div key={svc.title} className="card group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <span className="badge badge-brand text-xs">{svc.category}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{svc.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-2">Teknologi yang kami gunakan</h3>
            <p className="text-text-muted text-sm">
              Laravel · PHP · JavaScript · Tailwind · Filament · Livewire ·
              MySQL · API · Midtrans · Git
            </p>
          </div>
          <a href="#contact" className="btn btn-primary">
            Konsultasi Proyek
          </a>
        </div>
      </div>
    </section>
  )
}
