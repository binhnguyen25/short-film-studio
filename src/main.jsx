import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import {
  studio,
  films,
  storyBeats,
  crew,
  timeline,
  shootSchedule,
  shotList,
  checklists,
  festivals,
} from './data.js'

const GENRES = ['Tất cả', ...new Set(films.map((f) => f.genre.split(' / ')[0]))]

function StatusBadge({ status, tone }) {
  return <span className={`badge tone-${tone || 'amber'}`}>{status}</span>
}

function FilmsSection() {
  const [genre, setGenre] = useState('Tất cả')
  const shown = useMemo(
    () => (genre === 'Tất cả' ? films : films.filter((f) => f.genre.startsWith(genre))),
    [genre],
  )
  return (
    <section id="films" className="panel">
      <div className="section-heading">
        <p className="eyebrow">Phim</p>
        <h2>Các phim ngắn của chúng tôi.</h2>
        <p className="section-sub">
          Mọi dự án, từ bản nháp đầu tiên đến màn hình liên hoan. Lọc theo thể loại để tìm phim.
        </p>
      </div>
      <div className="filter-row" role="group" aria-label="Lọc phim theo thể loại">
        {GENRES.map((g) => (
          <button
            key={g}
            className={genre === g ? 'chip active' : 'chip'}
            onClick={() => setGenre(g)}
            aria-pressed={genre === g}
          >
            {g}
          </button>
        ))}
      </div>
      <div className="film-grid">
        {shown.map((film) => (
          <article key={film.id} className="film-card">
            <div className="film-meta">
              <span>{film.year}</span>
              <span>{film.duration}</span>
              <StatusBadge status={film.status} tone={film.statusTone} />
            </div>
            <h3>{film.title}</h3>
            <p className="film-genre">{film.genre}</p>
            <p>{film.logline}</p>
            <p className="film-director">Đạo diễn: {film.director}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Checklist({ phase, items }) {
  const [done, setDone] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(`sfs-check-${phase}`) || '[]')
    } catch {
      return []
    }
  })
  const toggle = (item) => {
    const next = done.includes(item) ? done.filter((d) => d !== item) : [...done, item]
    setDone(next)
    try {
      localStorage.setItem(`sfs-check-${phase}`, JSON.stringify(next))
    } catch {
      /* storage unavailable — state still works for this visit */
    }
  }
  return (
    <div className="check-card">
      <h3>{phase}</h3>
      <p className="check-progress">
        {done.length} / {items.length} đã xong
      </p>
      <ul className="check-list">
        {items.map((item) => (
          <li key={item}>
            <label>
              <input type="checkbox" checked={done.includes(item)} onChange={() => toggle(item)} />
              <span className={done.includes(item) ? 'done' : ''}>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PlanningSection() {
  return (
    <section id="planning" className="panel accent">
      <div className="section-heading">
        <p className="eyebrow">Kế hoạch sản xuất</p>
        <h2>Từ kịch bản đến buổi chiếu.</h2>
        <p className="section-sub">
          Lịch quay, danh sách cảnh quay và checklist cho phim chính, Midnight Signal.
        </p>
      </div>

      <h3 className="sub-heading">Lịch quay</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ngày</th>
              <th>Cảnh</th>
              <th>Bối cảnh</th>
              <th>Giờ tập trung</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {shootSchedule.map((d) => (
              <tr key={d.day}>
                <td>
                  <strong>{d.day}</strong> · {d.date}
                </td>
                <td>{d.scene}</td>
                <td>{d.location}</td>
                <td>{d.callTime}</td>
                <td>{d.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-heading">Danh sách cảnh quay</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Cảnh quay</th>
              <th>Cách quay</th>
              <th>Ống kính</th>
              <th>Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            {shotList.map((s) => (
              <tr key={s.shot}>
                <td>
                  <strong>{s.shot}</strong>
                </td>
                <td>{s.setup}</td>
                <td>{s.lens}</td>
                <td>{s.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-heading">Checklist</h3>
      <div className="check-grid">
        {checklists.map((c) => (
          <Checklist key={c.phase} phase={c.phase} items={c.items} />
        ))}
      </div>
    </section>
  )
}

function FestivalSection() {
  return (
    <section id="festivals" className="panel">
      <div className="section-heading">
        <p className="eyebrow">Liên hoan phim</p>
        <h2>Theo dõi nộp liên hoan.</h2>
        <p className="section-sub">
          Mỗi phim đã gửi đi đâu, và kết quả ra sao. Hạn nộp theo định dạng NNNN-TT-NN.
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Phim</th>
              <th>Liên hoan</th>
              <th>Hạn nộp</th>
              <th>Trạng thái</th>
            </tr>
          </thead>
          <tbody>
            {festivals.map((f) => (
              <tr key={`${f.film}-${f.festival}`}>
                <td>
                  <strong>{f.film}</strong>
                </td>
                <td>{f.festival}</td>
                <td>{f.deadline}</td>
                <td>
                  <StatusBadge
                    status={f.status}
                    tone={
                      f.status === 'Được chọn'
                        ? 'green'
                        : f.status === 'Đang xét duyệt'
                          ? 'blue'
                          : f.status === 'Đã nộp'
                            ? 'amber'
                            : 'grey'
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) {
      setError('Vui lòng nhập tên và tin nhắn của bạn.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Vui lòng nhập địa chỉ email hợp lệ.')
      return
    }
    setError('')
    setSent(true)
    const subject = encodeURIComponent(`Short Film Studio — tin nhắn từ ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`)
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="panel accent">
      <div className="section-heading">
        <p className="eyebrow">Liên hệ</p>
        <h2>Hợp tác cùng chúng tôi.</h2>
        <p className="section-sub">
          Buổi chiếu, hợp tác, lời mời liên hoan — hoặc chỉ cần chào nhau. Chúng tôi ở{' '}
          {studio.location}.
        </p>
      </div>
      <div className="contact-grid">
        <div>
          <p>
            <strong>Email</strong>
            <br />
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </p>
          <p>
            <strong>Địa điểm</strong>
            <br />
            {studio.location}
          </p>
          <div className="crew-grid">
            {crew.map((person) => (
              <div key={person.role} className="crew-card">
                <p className="role">{person.role}</p>
                <h3>{person.name}</h3>
                <p className="crew-note">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <label>
            Tên của bạn
            <input value={form.name} onChange={update('name')} placeholder="Tên của bạn" />
          </label>
          <label>
            Email
            <input value={form.email} onChange={update('email')} placeholder="ban@example.com" type="email" />
          </label>
          <label>
            Tin nhắn
            <textarea value={form.message} onChange={update('message')} rows={5} placeholder="Kể cho chúng tôi về dự án hoặc buổi chiếu của bạn…" />
          </label>
          {error && <p className="form-error">{error}</p>}
          {sent && (
            <p className="form-ok">
              Cảm ơn bạn — ứng dụng email của bạn sẽ mở ra với tin nhắn đã soạn sẵn.
            </p>
          )}
          <button type="submit" className="button primary">
            Gửi tin nhắn
          </button>
        </form>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">MIDNIGHT SIGNAL</div>
        <nav>
          <a href="#story">Câu chuyện</a>
          <a href="#films">Phim</a>
          <a href="#boards">Storyboard</a>
          <a href="#planning">Kế hoạch</a>
          <a href="#festivals">Liên hoan</a>
          <a href="#contact">Liên hệ</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">PHIM NGẮN // 12 PHÚT</p>
            <h1>{studio.tagline}</h1>
            <p className="lede">
              Midnight Signal kể về một nhân viên lưu trữ ca đêm phát hiện một bản tin radio đến từ
              tương lai — và phải quyết định bảo vệ sự thật hay để nó biến mất mãi mãi.
            </p>
            <div className="cta-group">
              <a href="#films" className="button primary">
                Xem các phim
              </a>
              <a href="#planning" className="button secondary">
                Xem kế hoạch sản xuất
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-tag">Sẵn sàng đi liên hoan</div>
            <div className="poster-grid">
              <span>00:42</span>
              <span>Chính kịch / Bí ẩn</span>
              <span>Noir đô thị</span>
            </div>
          </div>
        </section>

        <section id="story" className="panel">
          <div className="section-heading">
            <p className="eyebrow">Tóm tắt nội dung</p>
            <h2>Khi sự im lặng trở thành lời cảnh báo.</h2>
          </div>
          <div className="story-grid">
            <p>
              Sau một lần mất điện đột ngột, nhân viên lưu trữ Nhi nghe thấy một giọng nói không thể
              nào có thật trên chiếc radio đã hỏng. Thông điệp chứa chi tiết về một bi kịch mà không
              ai nhận là mình nhớ — và chỉ cô mới có thể ngăn nó lặp lại.
            </p>
            <p>
              Khi thành phố chìm sâu hơn vào màn đêm, mỗi manh mối dẫn tới một ký ức bị lãng quên,
              một mối quan hệ rạn nứt, và một lựa chọn cuối cùng giữa sự thật và sự sống còn.
            </p>
          </div>
        </section>

        <FilmsSection />

        <section id="boards" className="panel accent">
          <div className="section-heading">
            <p className="eyebrow">Storyboard</p>
            <h2>Ba khoảnh khắc điện ảnh.</h2>
          </div>
          <div className="beat-grid">
            {storyBeats.map((beat) => (
              <article key={beat.title} className="beat-card">
                <span>{beat.title}</span>
                <p>{beat.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <PlanningSection />

        <section id="timeline" className="panel timeline-panel">
          <div className="section-heading">
            <p className="eyebrow">Tiến độ sản xuất</p>
            <h2>Từ kịch bản đến buổi chiếu.</h2>
          </div>
          <ul className="timeline-list">
            {timeline.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <FestivalSection />
        <ContactSection />
      </main>

      <footer className="footer">
        <p>
          {studio.name} — {studio.featuredFilm} · {studio.location}
        </p>
        <p>
          <a href={`mailto:${studio.email}`}>{studio.email}</a>
        </p>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
