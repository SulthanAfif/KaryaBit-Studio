const steps = [
  {
    num: '01',
    title: 'Konsultasi',
    desc: 'Kenali tujuan bisnis, alur kerja, pengguna, dan sistem yang sudah digunakan.',
  },
  {
    num: '02',
    title: 'Penawaran',
    desc: 'Sepakati fitur, batas pekerjaan, revisi, jadwal, dan biaya sebelum mulai.',
  },
  {
    num: '03',
    title: 'Development',
    desc: 'Rancang dan bangun solusi sesuai ruang lingkup, dengan update berkala.',
  },
  {
    num: '04',
    title: 'Testing & Revisi',
    desc: 'Tinjau alur dan fitur yang disepakati, lalu lakukan revisi sesuai paket.',
  },
  {
    num: '05',
    title: 'Deploy & Handover',
    desc: 'Publikasikan aplikasi, berikan panduan penggunaan, dan serahkan hasil pekerjaan.',
  },
]

export default function Process() {
  return (
    <section id="about" className="section process-section">
      <div className="container">
        <div className="section-head">
          <span className="badge badge-brand">Cara kerja</span>
          <h2 className="section-title">Proses Kami</h2>
          <p className="section-subtitle">Alur kerja terstruktur dari konsultasi hingga serah terima.</p>
        </div>

        <ol className="process-track">
          {steps.map((step) => (
            <li key={step.num} className="process-step">
              <span className="process-node">{step.num}</span>
              <div className="card process-card">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
