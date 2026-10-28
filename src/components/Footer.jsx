const currentYear = new Date().getFullYear()

const navigation = [
  { name: 'Beranda', href: '#home' },
  { name: 'Produk', href: '#produk' },
  { name: 'Paket', href: '#packages' },
  { name: 'Proses', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Kontak', href: '#contact' },
]

const socials = [
  { name: 'Instagram', href: 'https://www.instagram.com/karyabit.studio' },
  { name: 'Threads', href: 'https://www.threads.net/@karyabit.studio' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@karyabit.studio' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a className="footer-brand" href="#home" aria-label="KaryaBit Studio, beranda">
              <img className="footer-mark" src="/karyabit-logo.png" alt="" />
              <span>KaryaBit <span>Studio</span></span>
            </a>
            <p>
              Studio digital yang membangun website, sistem, dan produk digital
              untuk mahasiswa serta pelaku bisnis di Indonesia.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            <div className="footer-links">
              {navigation.map((item) => (
                <a key={item.name} href={item.href}>{item.name}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Terhubung</h4>
            <div className="footer-links">
              <a href="mailto:karyabitstudio@gmail.com">Email</a>
              {socials.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{'\u00a9'} {currentYear} KaryaBit Studio. Hak cipta dilindungi.</p>
          <a href="#home">Kembali ke atas ↑</a>
        </div>
      </div>
    </footer>
  )
}
