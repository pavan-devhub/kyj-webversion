import { Link } from 'react-router'
import worldDotsUrl from '../assets/images/stage0-world-dots.svg'
// Placeholder photos: replace the files in assets/images/stage0/ (same names) with the real images
import heroPhotoUrl from '../assets/images/stage0/hero.jpg'
import card1PhotoUrl from '../assets/images/stage0/card-1.jpg'
import card2PhotoUrl from '../assets/images/stage0/card-2.jpg'
import card3PhotoUrl from '../assets/images/stage0/card-3.jpg'
import card4PhotoUrl from '../assets/images/stage0/card-4.jpg'
import { ArrowRightIcon } from './icons.jsx'
import '../styles/components/stage0-showcase.css'

const cardMeta = {
  '1': {
    num: '01',
    tone: 'red',
    title: 'EPM QR Landing',
    desc: 'Provide quick access to EPM through QR code.',
    photo: card1PhotoUrl,
  },
  '2': {
    num: '02',
    tone: 'green',
    title: (
      <>
        FEED CARD
        <br />
        Basic Issued
      </>
    ),
    desc: 'Issue basic FEED CARD for registered users.',
    photo: card2PhotoUrl,
  },
  '3': {
    num: '03',
    tone: 'amber',
    title: (
      <>
        Farmer Consent
        <br />
        Agreement
      </>
    ),
    desc: 'Collect and manage farmer consent agreements.',
    photo: card3PhotoUrl,
  },
  '4': {
    num: '04',
    tone: 'blue',
    title: 'Export Readiness Score',
    desc: 'Evaluate and track export readiness score.',
    photo: card4PhotoUrl,
  },
}

function ShowcaseCard({ screen }) {
  const meta = cardMeta[screen.id] || {
    num: screen.label.padStart(2, '0'),
    tone: 'green',
    title: screen.title,
    desc: '',
    photo: null,
  }

  return (
    <Link to={screen.path} className={`s0-card s0-card--${meta.tone}`}>
      {/* Tinted body starts under the photo, so only the photo shows on the left edge */}
      <span className="s0-card__bg" aria-hidden="true">
        <svg className="s0-card__swoop" viewBox="0 0 185 68" preserveAspectRatio="none">
          <path d="M0 68C64 56 126 34 185 0V68Z" />
        </svg>
      </span>

      {meta.photo ? (
        <img className="s0-card__photo" src={meta.photo} alt="" />
      ) : (
        <span className="s0-card__photo" />
      )}

      <div className="s0-card__main">
        <span className="s0-card__num">{meta.num}</span>
        <div className="s0-card__text">
          <h4 className="s0-card__title">{meta.title}</h4>
          <p className="s0-card__desc">{meta.desc}</p>
        </div>
      </div>

      <span className="s0-card__go">
        <ArrowRightIcon />
      </span>
    </Link>
  )
}

export default function Stage0Showcase({ items }) {
  return (
    <section className="s0" id="stage-0">
      <div className="s0__grid">
        {/* Left: hero panel */}
        <div className="s0-hero">
          <svg className="s0-hero__sweep" viewBox="0 0 841 520" aria-hidden="true">
            <path className="s0-hero__sweep-soft" d="M575 0C640 112 735 226 841 318V0Z" />
            <path className="s0-hero__sweep-band" d="M676 94C736 102 796 122 841 146V306C770 246 712 172 676 94Z" />
            <path className="s0-hero__sweep-soft" d="M0 330C52 372 98 424 132 476L0 528Z" />
          </svg>

          <div className="s0-hero__map" aria-hidden="true">
            <img src={worldDotsUrl} alt="" />
          </div>

          <div className="s0-hero__content">
            <p className="s0-hero__eyebrow">
              <span className="s0-hero__rule" />
              Stage 0 · 4 screens
              <span className="s0-hero__rule" />
            </p>
            <h3 className="s0-hero__title">
              EPM <span className="s0-hero__amp">&amp;</span>
              <br />
              Onboarding
            </h3>
            <p className="s0-hero__subtitle">
              Get started with EPM and complete the onboarding process for export readiness.
            </p>
          </div>

          <div className="s0-hero__media" aria-hidden="true">
            <img className="s0-hero__photo" src={heroPhotoUrl} alt="" />
          </div>

          <svg className="s0-hero__waves" viewBox="0 0 841 241" aria-hidden="true">
            <defs>
              <linearGradient id="s0-ribbon" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#6F9E66" />
                <stop offset="0.55" stopColor="#8DB57F" stopOpacity="0.9" />
                <stop offset="1" stopColor="#B9D3A6" stopOpacity="0.55" />
              </linearGradient>
            </defs>
            <path fill="url(#s0-ribbon)" d="M0 56C92 90 202 158 294 241H0Z" />
            <path className="s0-hero__wave" d="M0 66C52 92 114 150 174 241H0Z" />
            <path className="s0-hero__wave-line" d="M448 241C584 204 728 158 841 112V122C742 160 604 206 470 241Z" />
            <path className="s0-hero__wave" d="M470 241C604 206 742 160 841 122V241Z" />
          </svg>
        </div>

        {/* Right: screen cards */}
        <div className="s0-cards">
          {items.map((screen) => (
            <ShowcaseCard key={screen.id} screen={screen} />
          ))}
        </div>
      </div>
    </section>
  )
}
