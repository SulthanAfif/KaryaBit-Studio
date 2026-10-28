const stats = [
  { value: '2+', label: 'Produk digital' },
  { value: '10+', label: 'Kategori solusi' },
  { value: '4', label: 'Paket UMKM' },
  { value: '24/7', label: 'Konsultasi' },
]

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-eyebrow">
          <span className="hero-status">
            <span className="hero-status-dot" aria-hidden="true" />
            Menerima proyek baru
          </span>
          <span className="hero-eyebrow-divider" aria-hidden="true" />
          <span className="hero-eyebrow-text">KuliahBit <span>×</span> KaryaBit Studio</span>
        </div>

        <h1 className="hero-title">
          Solusi digital untuk
          <span className="hero-highlight">mahasiswa &amp; bisnis</span>
        </h1>

        <p className="hero-lead">
          KuliahBit menyediakan alat bantu untuk mahasiswa, dan KaryaBit Studio
          membangun website serta sistem digital yang memudahkan bisnis bekerja
          dan bertumbuh. Satu tim, dua produk, satu tujuan: kemudahan digital.
        </p>

        <div className="hero-actions">
          <a href="#produk" className="btn btn-primary">
            Lihat produk <span className="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="https://karyabit-studio.vercel.app/" className="btn btn-outline">
            Kunjungi KaryaBit Studio <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="hero-stat">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
