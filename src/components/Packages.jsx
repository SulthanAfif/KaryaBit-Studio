const packages = [
  {
    id: 'landing',
    name: 'Landing Page',
    price: 'Rp 750 rb',
    desc: 'Satu halaman promosi bisnis, produk, atau jasa.',
    features: ['Responsif', '1 halaman', 'Maksimal 2 revisi'],
  },
  {
    id: 'company',
    name: 'Company Profile',
    price: 'Rp 1,5 jt',
    desc: 'Profil bisnis dengan informasi layanan dan kontak.',
    features: ['Maksimal 5 halaman', 'Galeri & kontak', 'Maksimal 2 revisi'],
  },
  {
    id: 'toko',
    name: 'Toko Online UMKM',
    price: 'Rp 3,5 jt',
    desc: 'Katalog dan checkout standar untuk satu toko.',
    features: ['Katalog produk', 'Keranjang & checkout', 'Dashboard admin'],
  },
  {
    id: 'pesanan',
    name: 'Website Pemesanan',
    price: 'Rp 3 jt',
    desc: 'Menu atau katalog online dengan checkout untuk satu outlet.',
    features: ['Menu katalog', 'Checkout', 'Manajemen pesanan'],
  },
]

export default function Packages() {
  return (
    <section id="packages" className="section packages-section">
      <div className="container">
        <div className="section-head">
          <span className="badge badge-brand">Paket transparan</span>
          <h2 className="section-title">Paket Digital</h2>
          <p className="section-subtitle">Pilihan website dan sistem digital untuk kebutuhan bisnis Anda.</p>
        </div>

        <div className="package-grid">
          {packages.map((pkg) => {
            const featured = pkg.id === 'company'
            return (
              <article key={pkg.id} className={`card package-card ${featured ? 'package-card-featured' : ''}`}>
                {featured && (
                  <span className="package-popular">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2l2.9 6.26L21.5 9.3l-4.75 4.64L17.9 21 12 17.6 6.1 21l1.15-7.06L2.5 9.3l6.6-1.04L12 2z" />
                    </svg>
                    Paling populer
                  </span>
                )}

                <div className="package-price">
                  <span className="package-price-caption">Mulai dari</span>
                  <strong>{pkg.price}</strong>
                  <span className="package-price-note">Sekali bayar</span>
                </div>

                <h3>{pkg.name}</h3>
                <p className="package-description">{pkg.desc}</p>

                <ul className="package-features">
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`btn package-button ${featured ? 'btn-primary' : 'btn-outline'}`}
                >
                  Pilih paket <span className="btn-arrow" aria-hidden="true">↗</span>
                </a>
              </article>
            )
          })}
        </div>

        <div className="package-custom-cta">
          <div>
            <strong>Butuh fitur khusus?</strong>
            <span>Kami bisa sesuaikan paket dengan kebutuhan proyek Anda.</span>
          </div>
          <a href="#contact" className="btn btn-primary">
            Konsultasi proyek <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
