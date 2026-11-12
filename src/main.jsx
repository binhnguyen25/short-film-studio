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

const GENRES = ['All', ...new Set(films.map((f) => f.genre.split(' / ')[0]))]

function StatusBadge({ status, tone }) {
  return <span className={`badge tone-${tone || 'amber'}`}>{status}</span>
}

function FilmsSection() {
  const [genre, setGenre] = useState('All')
  const shown = useMemo(
    () => (genre === 'All' ? films : films.filter((f) => f.genre.startsWith(genre))),
    [genre],
  )
  return (
    <section id="films" className="panel">
      <div className="section-heading">
        <p className="eyebrow">Films</p>
        <h2>Our short films.</h2>
        <p className="section-sub">
          Every project, from first draft to festival screen. Filter by genre to find a film.
        </p>
      </div>
      <div className="filter-row" role="group" aria-label="Filter films by genre">
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
            <p className="film-director">Directed by {film.director}</p>
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
        {done.length} / {items.length} done
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
        <p className="eyebrow">Production planning</p>
        <h2>From script to screening.</h2>
        <p className="section-sub">
          Shoot schedule, shot list and checklists for the featured film, Midnight Signal.
        </p>
      </div>

      <h3 className="sub-heading">Shoot schedule</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Scene</th>
              <th>Location</th>
              <th>Call time</th>
              <th>Status</th>
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

      <h3 className="sub-heading">Shot list</h3>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Shot</th>
              <th>Setup</th>
              <th>Lens</th>
              <th>Notes</th>
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

      <h3 className="sub-heading">Checklists</h3>
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
        <p className="eyebrow">Festivals</p>
        <h2>Submission tracker.</h2>
        <p className="section-sub">
          Where each film has been sent, and what came back. Deadlines are in YYYY-MM-DD.
        </p>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Film</th>
              <th>Festival</th>
              <th>Deadline</th>
              <th>Status</th>
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
                      f.status === 'Selected'
                        ? 'green'
                        : f.status === 'In review'
                          ? 'blue'
                          : f.status === 'Submitted'
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
      setError('Please add your name and a message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSent(true)
    const subject = encodeURIComponent(`Short Film Studio — message from ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`)
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="panel accent">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Work with us.</h2>
        <p className="section-sub">
          Screenings, collaborations, festival invitations — or just say hello. Based in{' '}
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
            <strong>Location</strong>
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
            Your name
            <input value={form.name} onChange={update('name')} placeholder="Your name" />
          </label>
          <label>
            Email
            <input value={form.email} onChange={update('email')} placeholder="you@example.com" type="email" />
          </label>
          <label>
            Message
            <textarea value={form.message} onChange={update('message')} rows={5} placeholder="Tell us about your project or screening…" />
          </label>
          {error && <p className="form-error">{error}</p>}
          {sent && (
            <p className="form-ok">
              Thanks — your email app should open with the message ready to send.
            </p>
          )}
          <button type="submit" className="button primary">
            Send message
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
          <a href="#story">Story</a>
          <a href="#films">Films</a>
          <a href="#boards">Boards</a>
          <a href="#planning">Planning</a>
          <a href="#festivals">Festivals</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">SHORT FILM // 12 MINUTES</p>
            <h1>{studio.tagline}</h1>
            <p className="lede">
              Midnight Signal follows a night-shift archivist who discovers a radio transmission from
              the future — and must decide whether to protect the truth or let it disappear forever.
            </p>
            <div className="cta-group">
              <a href="#films" className="button primary">
                Browse films
              </a>
              <a href="#planning" className="button secondary">
                See production plan
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="card-tag">Festival-ready</div>
            <div className="poster-grid">
              <span>00:42</span>
              <span>Drama / Mystery</span>
              <span>City noir</span>
            </div>
          </div>
        </section>

        <section id="story" className="panel">
          <div className="section-heading">
            <p className="eyebrow">Synopsis</p>
            <h2>When silence becomes a warning.</h2>
          </div>
          <div className="story-grid">
            <p>
              After a sudden blackout, archivist Nhi hears an impossible voice on a damaged radio.
              The message contains details of a tragedy no one claims to remember — and only she can
              stop it from repeating.
            </p>
            <p>
              As the city slips deeper into the night, each clue leads to a forgotten memory, a ruptured
              relationship, and a final choice between truth and survival.
            </p>
          </div>
        </section>

        <FilmsSection />

        <section id="boards" className="panel accent">
          <div className="section-heading">
            <p className="eyebrow">Storyboard</p>
            <h2>Three cinematic beats.</h2>
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
            <p className="eyebrow">Production timeline</p>
            <h2>From script to screening.</h2>
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
