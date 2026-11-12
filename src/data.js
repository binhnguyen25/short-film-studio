// Short Film Studio — all editable content lives here.
// Edit this file to add a film, a crew member, a festival or a shoot day.
// No backend needed: the site is a static React + Vite app.

export const studio = {
  name: 'Short Film Studio',
  featuredFilm: 'Midnight Signal',
  tagline: 'A city listens to a voice that should have been lost.',
  email: 'hello@shortfilmstudio.example',
  location: 'Ho Chi Minh City, Vietnam',
}

export const films = [
  {
    id: 'midnight-signal',
    title: 'Midnight Signal',
    genre: 'Drama / Mystery',
    duration: '12 min',
    year: 2026,
    status: 'Post-production',
    statusTone: 'amber',
    logline:
      'A night-shift archivist discovers a radio transmission from the future — and must decide whether to protect the truth or let it disappear forever.',
    director: 'Linh Tran',
  },
  {
    id: 'last-projectionist',
    title: 'The Last Projectionist',
    genre: 'Drama',
    duration: '9 min',
    year: 2026,
    status: 'In production',
    statusTone: 'blue',
    logline:
      'An old cinema projectionist keeps one reel running for an audience of one, night after night, until the building is sold.',
    director: 'Minh Nguyen',
  },
  {
    id: 'neon-alley',
    title: 'Neon Alley',
    genre: 'Thriller',
    duration: '14 min',
    year: 2025,
    status: 'Festival run',
    statusTone: 'green',
    logline:
      'A courier takes one last delivery through a neon-lit alley and finds a package addressed to herself — dated tomorrow.',
    director: 'Linh Tran',
  },
  {
    id: 'rice-field-letters',
    title: 'Rice Field Letters',
    genre: 'Documentary',
    duration: '11 min',
    year: 2025,
    status: 'Completed',
    statusTone: 'green',
    logline:
      'Farmers in the Mekong Delta read aloud the letters they never sent, between harvests, in the fields where they were written.',
    director: 'Anh Hoàng',
  },
]

export const storyBeats = [
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

export const crew = [
  { role: 'Director', name: 'Linh Tran', note: 'Midnight Signal, Neon Alley' },
  { role: 'Cinematographer', name: 'Minh Nguyen', note: 'The Last Projectionist' },
  { role: 'Editor', name: 'Anh Hoàng', note: 'Rice Field Letters' },
  { role: 'Composer', name: 'Quý Phạm', note: 'Original score, all films' },
  { role: 'Producer', name: 'Thu Nguyen', note: 'Scheduling & festivals' },
  { role: 'Sound Designer', name: 'Bao Le', note: 'Mix & mastering' },
]

export const timeline = [
  'Pre-production: script polish and pitch deck',
  'Production: location scouting and 8-day shoot',
  'Post: editing, color, sound mix, and festival submission',
]

// Shoot schedule for the featured film. Times are local; keep the call sheet short.
export const shootSchedule = [
  { day: 'Day 1', date: 'Mon', scene: 'Archive room — night', location: 'Studio A', callTime: '17:00', status: 'Done' },
  { day: 'Day 2', date: 'Tue', scene: 'Neon stairwell chase', location: 'District 4', callTime: '19:00', status: 'Done' },
  { day: 'Day 3', date: 'Wed', scene: 'Rooftop signal — climax', location: 'Rooftop, Bitexco area', callTime: '18:00', status: 'Scheduled' },
  { day: 'Day 4', date: 'Thu', scene: 'Flashback — radio shop', location: 'Studio A', callTime: '09:00', status: 'Scheduled' },
  { day: 'Day 5', date: 'Fri', scene: 'Pickups & inserts', location: 'Studio A', callTime: '10:00', status: 'Planned' },
]

export const shotList = [
  { shot: '1A', setup: 'Wide — archive room, Nhi at desk', lens: '35mm', notes: 'Practical lamps only' },
  { shot: '1B', setup: 'Close-up — radio dial, static', lens: '85mm', notes: 'Macro, shallow depth' },
  { shot: '2A', setup: 'Tracking — stairwell descent', lens: '24mm', notes: 'Gimbal, one take' },
  { shot: '3A', setup: 'Wide — rooftop, city lights', lens: '35mm', notes: 'Golden hour + blue hour' },
  { shot: '3B', setup: 'Close-up — Nhi listens', lens: '85mm', notes: 'Hold 8 seconds' },
]

export const checklists = [
  {
    phase: 'Pre-production',
    items: ['Script locked', 'Budget approved', 'Cast confirmed', 'Locations scouted', 'Shot list done', 'Insurance & permits'],
  },
  {
    phase: 'Production',
    items: ['Call sheets sent', 'Equipment checked', 'Dailies backed up (2 copies)', 'Sound recorded on set', 'Continuity photos'],
  },
  {
    phase: 'Post-production',
    items: ['Rough cut', 'Color grade', 'Sound mix', 'Subtitles (EN / VI)', 'Festival screener export', 'Press kit ready'],
  },
]

// Festival submission tracker. Status: Submitted / In review / Selected / Rejected / Planned.
export const festivals = [
  { film: 'Neon Alley', festival: 'Busan International Short Film Festival', deadline: '2026-12-15', status: 'Submitted' },
  { film: 'Midnight Signal', festival: 'Hanoi International Film Festival', deadline: '2026-11-30', status: 'In review' },
  { film: 'Rice Field Letters', festival: 'DMZ International Documentary FF', deadline: '2026-12-01', status: 'Selected' },
  { film: 'The Last Projectionist', festival: 'Clermont-Ferrand Short FF', deadline: '2027-01-10', status: 'Planned' },
  { film: 'Midnight Signal', festival: 'Sundance Film Festival — Shorts', deadline: '2027-01-20', status: 'Planned' },
]
