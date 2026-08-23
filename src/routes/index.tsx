import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Download,
  Mail,
  MapPin,
  Menu,
  Music2,
  Play,
  X,
  Instagram,
  Youtube,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HakyhmHome,
})

const spotifyUrl = 'https://open.spotify.com/artist/5Vl9nuqk9BfGJ1L4WBQHYN'
const instagramUrl = 'https://www.instagram.com/hakyhm_'
const tiktokUrl = 'https://www.tiktok.com/@hakyhm'
const appleMusicUrl = 'https://music.apple.com/us/artist/hakyhm/1599546425'
const youtubeUrl = 'https://www.youtube.com/@Hakyhm'
const bookingUrl =
  'mailto:info@hakyhm.com?subject=HAKYHM%20Booking%20Inquiry&body=Event%20Date%3A%0ALocation%3A%0AEvent%20Type%3A%0APerformance%20Length%3A%0ABudget%20%2F%20Offer%3A%0AContact%20Name%3A%0APhone%3A%0AAdditional%20Details%3A'

const shows = [
  {
    date: 'Aug 21',
    year: '2026',
    venue: 'Upper Sandusky Fairgrounds',
    location: 'Upper Sandusky, Ohio',
    time: '4:30–4:45 PM',
    status: 'Past show',
    past: true,
  },
  {
    date: 'Sep 11',
    year: '2026',
    venue: 'Riverside',
    location: 'Findlay, Ohio',
    detail: 'Food trucks & vendors · Free entry',
    time: '6:00–9:00 PM',
    status: 'Upcoming',
  },
  {
    date: 'Sep 12',
    year: '2026',
    venue: 'Marion Popcorn Festival',
    location: 'Founders Park · Marion, Ohio',
    time: '5:58–6:10 PM',
    status: 'Upcoming',
  },
]

function HakyhmHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="HAKYHM home">
          HAKYHM<span className="accent-dot">.</span>
        </a>

        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#media" onClick={closeMenu}>Media</a>
          <a href="#live" onClick={closeMenu}>Live</a>
          <a href="#booking" onClick={closeMenu}>Booking</a>
        </nav>

        <a className="header-cta" href={bookingUrl}>
          Book Hakyhm <ArrowUpRight size={15} strokeWidth={2.4} />
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-meta reveal reveal-1">
            <p className="eyebrow">Independent artist / Ohio</p>
            <p className="availability"><span /> Booking 2026–27</p>
          </div>
          <h1 className="hero-title reveal reveal-2">
            HAK<span>Y</span>HM
          </h1>
          <div className="hero-bottom reveal reveal-3">
            <div>
              <p className="hero-kicker">Recording artist · Live performer · Creative director</p>
              <p className="hero-summary">
                Music built with intent. Performances designed to hold a room.
              </p>
            </div>
            <a className="circle-link" href="#about" aria-label="Explore Hakyhm's profile">
              <ArrowDown size={26} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrap reveal reveal-4">
          <img
            className="hero-image"
            src="/images/hakyhm-1.jpg"
            alt="Hakyhm performing above a festival crowd"
          />
          <div className="image-index">LIVE ARCHIVE / 001</div>
          <a className="listen-chip" href={spotifyUrl} target="_blank" rel="noreferrer">
            <span><Play size={15} fill="currentColor" /></span>
            Official music
          </a>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>RECORDING</span><i />
          <span>PERFORMANCE</span><i />
          <span>VISUAL DIRECTION</span><i />
          <span>OHIO</span><i />
          <span>RECORDING</span><i />
          <span>PERFORMANCE</span><i />
          <span>VISUAL DIRECTION</span><i />
          <span>OHIO</span><i />
        </div>
      </div>

      <section className="section profile-section" id="about">
        <SectionLabel number="01" text="Artist Profile" />
        <div className="profile-grid">
          <div className="section-statement">
            <p className="statement-index">Independent by design.</p>
            <h2>Built for<br />the <em>stage.</em></h2>
          </div>
          <div className="profile-copy">
            <p className="lead">
              <strong>HAKYHM</strong> is an Ohio-based independent recording artist shaping
              every release, performance, and visual with a clear point of view.
            </p>
            <p>
              His practice moves between music, live performance, and artist-led visual content.
              The approach is direct and hands-on: build the work carefully, present it with
              purpose, and make every audience interaction count.
            </p>
            <a className="text-link" href={bookingUrl}>
              Discuss an opportunity <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="profile-facts">
          <Fact index="01" label="Ohio" detail="Home base" />
          <Fact index="02" label="Live" detail="Festivals & events" />
          <Fact index="03" label="Music" detail="Independent releases" />
          <Fact index="04" label="Visual" detail="Artist-led direction" />
        </div>
      </section>

      <section className="section media-section" id="media">
        <SectionLabel number="02" text="Media" light />
        <div className="media-heading">
          <div>
            <p className="statement-index">Official channels and approved assets.</p>
            <h2>Listen.<br /><em>Watch.</em> Share.</h2>
          </div>
          <Music2 size={52} strokeWidth={1.1} aria-hidden="true" />
        </div>

        <div className="media-grid">
          <a className="media-card spotify-card" href={spotifyUrl} target="_blank" rel="noreferrer">
          <a className="media-card" href={instagramUrl} target="_blank" rel="noreferrer">
  <div className="card-top">
    <span>Instagram</span>
    <ArrowRight />
  </div>
  <div>
    <Instagram className="media-icon" size={30} />
    <h3>Follow HAKYHM.</h3>
    <p>Follow HAKYHM on Instagram.</p>
  </div>
</a>

<a className="media-card" href={tiktokUrl} target="_blank" rel="noreferrer">
  <div className="card-top">
    <span>TikTok</span>
    <ArrowRight />
  </div>
  <div>
    <Music2 className="media-icon" size={30} />
    <h3>Watch on TikTok.</h3>
    <p>Follow HAKYHM on TikTok.</p>
  </div>
</a>

<a className="media-card" href={youtubeUrl} target="_blank" rel="noreferrer">
  <div className="card-top">
    <span>YouTube</span>
    <ArrowRight />
  </div>
  <div>
    <Youtube className="media-icon" size={30} />
    <h3>Watch HAKYHM.</h3>
    <p>Watch official videos and content on YouTube.</p>
  </div>
</a>

<a className="media-card" href={appleMusicUrl} target="_blank" rel="noreferrer">
  <div className="card-top">
    <span>Apple Music</span>
    <ArrowRight />
  </div>
  <div>
    <Music2 className="media-icon" size={30} />
    <h3>Listen on Apple Music.</h3>
    <p>Stream HAKYHM on Apple Music.</p>
  </div>
</a>            <div className="card-top">
              <span>01 / Official music</span>
              <ArrowUpRight />
            </div>
            <div>
              <Play className="media-icon" size={30} fill="currentColor" />
              <h3>Stream the catalog.</h3>
              <p>Visit HAKYHM’s verified artist destination on Spotify.</p>
            </div>
          </a>

          <a className="media-card photo-card" href="/images/hakyhm-1.jpg" download="HAKYHM-live-press-photo.jpg">
            <img src="/images/hakyhm-1.jpg" alt="HAKYHM live press asset preview" />
            <div className="photo-shade" />
            <div className="card-top">
              <span>02 / Approved press asset</span>
              <Download />
            </div>
            <div className="photo-copy">
              <h3>Official live image.</h3>
              <p>Approved for editorial coverage, event promotion, and booking review.</p>
            </div>
          </a>
        </div>
      </section>

      <section className="section live-section" id="live">
        <SectionLabel number="03" text="Live Dates" />
        <div className="live-intro">
          <div>
            <p className="statement-index">Selected public appearances.</p>
            <h2>On the<br /><em>calendar.</em></h2>
          </div>
          <p>Upcoming dates and recent appearances across Ohio.</p>
        </div>

        <div className="shows-list">
          {shows.map((show) => (
            <article className={show.past ? 'show-row is-past' : 'show-row'} key={`${show.date}-${show.venue}`}>
              <div className="show-date">
                <strong>{show.date}</strong>
                <span>{show.year}</span>
              </div>
              <div className="show-venue">
                <h3>{show.venue}</h3>
                <p><MapPin size={14} /> {show.location}</p>
                {show.detail && <p className="show-detail">{show.detail}</p>}
              </div>
              <div className="show-time">
                <CalendarDays size={17} />
                <span>{show.time}</span>
              </div>
              <span className="show-status">{show.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-grid">
          <div>
            <SectionLabel number="04" text="Booking" light />
            <p className="statement-index is-light">Performance and media inquiries.</p>
            <h2>Bring HAKYHM<br />to the <em>room.</em></h2>
          </div>
          <div className="booking-copy">
            <p>
              Available for select performances, festivals, appearances, collaborations, and
              media opportunities. Share the essentials and expect a direct response.
            </p>
            <div className="inquiry-details" aria-label="Information to include in a booking inquiry">
              <span>Event date</span>
              <span>Location</span>
              <span>Format</span>
              <span>Offer</span>
            </div>
            <a className="booking-email" href={bookingUrl}>
              <span><Mail size={18} /> Direct booking contact</span>
              <strong>info@hakyhm.com</strong>
              <ArrowUpRight size={32} />
            </a>
          </div>
        </div>
        <footer>
          <span>© 2026 HAKYHM — All rights reserved</span>
          <a href={spotifyUrl} target="_blank" rel="noreferrer">Spotify <ArrowUpRight size={13} /></a>
          <a href="#top">Back to top <ArrowUpRight size={14} /></a>
        </footer>
      </section>
    </main>
  )
}

function SectionLabel({ number, text, light = false }: { number: string; text: string; light?: boolean }) {
  return (
    <div className={light ? 'section-label is-light' : 'section-label'}>
      <span>{number}</span>
      <p>{text}</p>
    </div>
  )
}

function Fact({ index, label, detail }: { index: string; label: string; detail: string }) {
  return (
    <div className="fact">
      <span>{index}</span>
      <strong>{label}</strong>
      <p>{detail}</p>
    </div>
  )
}
