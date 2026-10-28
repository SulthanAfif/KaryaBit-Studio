const services = [
  'Landing Page',
  'Company Profile',
  'Toko Online UMKM',
  'Website Pemesanan',
  'Sistem Operasional',
  'Aplikasi Web',
  'Alat Belajar Mahasiswa',
]

function MarqueeGroup() {
  return (
    <div className="marquee-group" aria-hidden="true">
      {services.map((service) => (
        <span key={service} className="marquee-item">{service}</span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" role="presentation">
      <div className="marquee-track">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  )
}
