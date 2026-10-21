import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'

const storyBeats = [
  {
    title: 'Scene 01',
    desc: 'A lone radio signal cuts through the static. A missing voice from the past returns to the present.',
  },
  {
    title: 'Scene 02',
    desc: 'The protagonist follows a fading trail through a city of cold neon and empty stairwells.',
  },
  {
    title: 'Scene 03',
    desc: 'The final moment reveals the signal was never a warning — it was a call for remembrance.',
  },
]

const crew = [
  { role: 'Director', name: 'Linh Tran' },
  { role: 'Cinematographer', name: 'Minh Nguyen' },
  { role: 'Editor', name: 'Anh Hoàng' },
  { role: 'Composer', name: 'Quý Phạm' },
]

const timeline = [
  'Pre-production: script polish and pitch deck',
  'Production: location scouting and 8-day shoot',
  'Post: editing, color, sound mix, and festival submission',
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">MIDNIGHT SIGNAL</div>
        <nav>
          <a href="#story">Story</a>
          <a href="#boards">Boards</a>
          <a href="#crew">Crew</a>
          <a href="#timeline">Timeline</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">SHORT FILM // 12 MINUTES</p>
            <h1>A city listens to a voice that should have been lost.</h1>
            <p className="lede">
              Midnight Signal follows a night-shift archivist who discovers a radio transmission from
              the future — and must decide whether to protect the truth or let it disappear forever.
            </p>
            <div className="cta-group">
              <a href="#story" className="button primary">Watch teaser</a>
              <a href="#crew" className="button secondary">Meet the team</a>
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

        <section id="crew" className="panel">
          <div className="section-heading">
            <p className="eyebrow">Crew</p>
            <h2>Built by a compact, focused team.</h2>
          </div>
          <div className="crew-grid">
            {crew.map((person) => (
              <div key={person.role} className="crew-card">
                <p className="role">{person.role}</p>
                <h3>{person.name}</h3>
              </div>
            ))}
          </div>
        </section>

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
      </main>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
