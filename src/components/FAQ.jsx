import { useState } from 'react'

const faqs = [
  {
    q: 'Apa perbedaan KaryaBit Studio dan KuliahBit?',
    a: <>KaryaBit Studio membantu bisnis dengan website dan sistem digital. KuliahBit menyediakan alat bantu untuk mahasiswa. Keduanya berada dalam satu ekosistem, tetapi punya layanan dan pengguna yang berbeda.</>,
  },
  {
    q: 'Apa saja yang bisa dilakukan dengan KuliahBit?',
    a: <>KuliahBit membantu mengatur jadwal kuliah, mencatat tugas dan materi, serta menghitung IPK atau IPS. <a className="faq-inline-link" href="https://kuliahbit.vercel.app/" target="_blank" rel="noopener noreferrer">Buka KuliahBit ↗</a></>,
  },
  {
    q: 'Layanan apa yang tersedia di KaryaBit Studio?',
    a: <>Kami membuat landing page, company profile, toko online, website pemesanan, dan aplikasi web sesuai alur kerja bisnis. <a className="faq-inline-link" href="https://karyabit-studio.vercel.app/" target="_blank" rel="noopener noreferrer">Lihat KaryaBit Studio ↗</a></>,
  },
  {
    q: 'Berapa harga layanan KaryaBit Studio?',
    a: <>Paket saat ini mulai dari Rp750 ribu untuk landing page, Rp1,5 juta untuk company profile, Rp3 juta untuk website pemesanan, dan Rp3,5 juta untuk toko online. Harga akhir mengikuti ruang lingkup dan fitur yang disepakati. Domain, hosting, serta layanan pihak ketiga dapat dikenakan biaya terpisah.</>,
  },
  {
    q: 'Berapa lama pembuatan website atau sistem?',
    a: <>Sebagai perkiraan, landing page membutuhkan 3–7 hari kerja dan company profile sekitar 1–2 minggu. Toko online, sistem pemesanan, dan aplikasi khusus memerlukan waktu lebih lama sesuai fitur dan integrasinya. Jadwal final disepakati setelah konsultasi.</>,
  },
  {
    q: 'Bagaimana cara memulai proyek dengan KaryaBit Studio?',
    a: <>Ceritakan tujuan, kebutuhan, dan fitur yang diinginkan melalui bagian kontak. Kami akan membantu menentukan ruang lingkup, estimasi waktu, dan biaya sebelum pengerjaan dimulai.</>,
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="section faq-section">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="badge badge-brand">Bantuan</span>
          <h2 className="section-title">Pertanyaan yang sering diajukan</h2>
          <p className="section-subtitle">
            Jawaban singkat seputar layanan KaryaBit Studio dan produk KuliahBit.
          </p>
          <a href="#contact" className="faq-contact">
            <span className="faq-contact-icon" aria-hidden="true">?</span>
            <span>
              <strong>Masih ada pertanyaan?</strong>
              <small>Diskusikan kebutuhan Anda langsung dengan kami.</small>
            </span>
            <span className="btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = open === index
            const answerId = `faq-answer-${index}`
            const questionId = `faq-question-${index}`

            return (
              <div key={item.q} className={`card ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  id={questionId}
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <h3>{item.q}</h3>
                  <span className="faq-icon" aria-hidden="true">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  className={`faq-answer ${isOpen ? 'is-open' : ''}`}
                  aria-hidden={!isOpen}
                  inert={isOpen ? undefined : true}
                >
                  <div className="faq-answer-inner">
                    <div>{item.a}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
