const products = [
  {
    id: 'kuliahbit',
    name: 'KuliahBit',
    label: 'Untuk mahasiswa',
    description: 'Bantu kuliah lebih teratur dengan alat untuk mengelola jadwal, tugas, catatan, dan menghitung IPK.',
    features: ['Jadwal kuliah', 'Manajemen tugas', 'Kalkulator IPK'],
    href: 'https://kuliahbit.vercel.app/',
    action: 'Buka KuliahBit',
    style: 'product-card-student',
  },
  {
    id: 'karyabit',
    name: 'KaryaBit Studio',
    label: 'Untuk bisnis',
    description: 'Website dan sistem digital untuk membantu bisnis menjangkau pelanggan dan menjalankan operasional.',
    features: ['Website bisnis', 'Toko & pemesanan online', 'Sistem operasional'],
    href: 'https://karyabit-studio.vercel.app/',
    action: 'Kunjungi KaryaBit Studio',
    style: 'product-card-business',
  },
]

export default function Products() {
  return (
    <section id="produk" className="section products-section">
      <div className="container">
        <div className="section-head">
          <span className="badge badge-brand">Dua produk, satu tujuan</span>
          <h2 className="section-title">Pilih yang Anda butuhkan</h2>
          <p className="section-subtitle">Alat belajar untuk mahasiswa atau solusi digital untuk bisnis.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article key={product.id} className={`product-card ${product.style}`}>
              <div className="product-card-top">
                <div className="product-card-heading">
                  <img className="product-mark" src="/karyabit-logo.png" alt="" />
                  <div>
                    <span className="product-label">{product.label}</span>
                    <h3>{product.name}</h3>
                  </div>
                </div>
                <span className="product-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <p className="product-description">{product.description}</p>

              <ul className="product-features">
                {product.features.map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a className="btn btn-primary product-link" href={product.href}>
                {product.action} <span className="btn-arrow" aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
