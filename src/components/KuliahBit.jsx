const tools = [
  {
    title: 'Jadwal Kuliah',
    desc: 'Susun jadwal perkuliahan dengan mudah dan dapatkan pengingat sebelum mata kuliah dimulai.',
    icon: '📅',
  },
  {
    title: 'Manajemen Tugas',
    desc: 'Catat deadline tugas, UTS, dan UAS agar tidak terlewat satu pun.',
    icon: '📝',
  },
  {
    title: 'Kalkulator IPK',
    desc: 'Hitung IPK dan IPS secara cepat berdasarkan nilai mata kuliah yang diambil.',
    icon: '🧮',
  },
  {
    title: 'Catatan Kuliah',
    desc: 'Simpan rangkuman materi perkuliahan dalam satu tempat yang terorganisir.',
    icon: '📒',
  },
]

export default function KuliahBit() {
  return (
    <section id="kuliahbit" className="section bg-bg-secondary">
      <div className="container">
        <div className="text-center mb-16">
          <span className="badge badge-brand">KuliahBit</span>
          <h2 className="section-title mt-3">Alat Bantu Mahasiswa</h2>
          <p className="section-subtitle">
            Tool-ringan yang dirancang untuk membantu mahasiswa mengelola
            jadwal, tugas, dan nilai dengan lebih efisien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div key={tool.title} className="card">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-2xl mb-4 shadow-sm shadow-black/5 border border-border">
                {tool.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{tool.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-brand flex items-center justify-center text-white text-2xl shadow-lg shadow-brand/40">
            🎓
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Siap menuntaskan perkuliahan?</h3>
            <p className="text-text-muted mb-6">
              Mulai gunakan KuliahBit untuk mengatur jadwal kuliah, mengelola
              tugas, dan menghitung IPK dengan mudah dan gratis.
            </p>
            <a href="#contact" className="btn btn-primary">
              Mulai Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
