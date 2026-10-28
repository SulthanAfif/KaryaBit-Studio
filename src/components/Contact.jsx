const socials = [
  { label: 'Instagram', handle: '@karyabit.studio', href: 'https://www.instagram.com/karyabit.studio' },
  { label: 'Threads', handle: '@karyabit.studio', href: 'https://www.threads.net/@karyabit.studio' },
  { label: 'TikTok', handle: '@karyabit.studio', href: 'https://www.tiktok.com/@karyabit.studio' },
]

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="badge badge-brand">Mari terhubung</span>
            <h2>Punya ide <span>proyek?</span></h2>
            <p>Ceritakan kebutuhan bisnis Anda. Kami bantu memetakan solusi yang tepat, mulai dari website hingga sistem operasional.</p>
            <span className="contact-status">
              <span className="contact-status-dot" aria-hidden="true" />
              Biasanya membalas dalam 1×24 jam
            </span>
          </div>

          <div className="contact-details">
            <a className="contact-email" href="mailto:karyabitstudio@gmail.com">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span>
                <small>Email</small>
                <strong>karyabitstudio@gmail.com</strong>
                <small>Kirim brief singkat proyek Anda</small>
              </span>
              <span className="contact-arrow" aria-hidden="true">↗</span>
            </a>

            <div className="contact-socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                  <span>{social.label}</span>
                  <strong>{social.handle}</strong>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
