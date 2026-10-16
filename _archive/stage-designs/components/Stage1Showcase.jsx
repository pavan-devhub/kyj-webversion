import { useId } from 'react'
import { Link } from 'react-router'
// Placeholder photo: replace assets/images/stage1/hero.jpg (same name) with the real image
import heroPhotoUrl from '../assets/images/stage1/hero.jpg'
import '../styles/components/stage1-showcase.css'

const rowMeta = {
  '5': {
    num: '05',
    tone: 'orange',
    title: 'Farm Plot GPS Registration',
    desc: 'Register farm plots with GPS location.',
  },
  '6': {
    num: '06',
    tone: 'green',
    title: 'GAP Activity Log',
    desc: 'Maintain GAP activity records.',
  },
  '7': {
    num: '07',
    tone: 'red',
    title: 'EU MRL Alert',
    desc: 'Receive alerts for EU MRL compliance.',
  },
  '8': {
    num: '08',
    tone: 'purple',
    title: 'Soil Health Card Upload',
    desc: 'Upload and manage soil health cards.',
  },
  '8a': {
    num: '8a',
    tone: 'amber',
    title: 'Stage 1 Badge Polam Siddham',
    desc: 'Award Stage 1 badge after completion.',
  },
}

// Two-leaf sprig used around the panel (viewBox 0 0 90 100, base at bottom-left)
function Sprig({ className, gradientId }) {
  return (
    <svg className={className} viewBox="0 0 90 100" aria-hidden="true">
      <path className="s1-sprig__stem" d="M8 100C14 96 20 93 24 88" />
      <path fill={`url(#${gradientId})`} d="M24 90C14 60 32 22 72 4C78 40 60 78 24 90Z" />
      <path className="s1-sprig__vein" d="M24 90C38 64 52 38 72 4" />
      <path fill={`url(#${gradientId})`} d="M36 90C50 66 70 54 90 50C84 74 64 90 36 90Z" />
      <path className="s1-sprig__vein" d="M36 90C54 76 72 62 90 50" />
    </svg>
  )
}

function ShowcaseRow({ screen }) {
  const meta = rowMeta[screen.id] || {
    num: screen.label.padStart(2, '0'),
    tone: 'green',
    title: screen.title,
    desc: '',
  }

  return (
    <Link to={screen.path} className={`s1-row s1-row--${meta.tone}`}>
      <span className="s1-row__num">{meta.num}</span>
      <span className="s1-row__divider" aria-hidden="true" />
      <div className="s1-row__text">
        <h4 className="s1-row__title">{meta.title}</h4>
        <p className="s1-row__desc">{meta.desc}</p>
      </div>
    </Link>
  )
}

export default function Stage1Showcase({ items }) {
  const uid = useId().replace(/:/g, '')
  const leafId = `s1-leaf-${uid}`
  const softLeafId = `s1-leaf-soft-${uid}`

  return (
    <section className="s1" id="stage-1">
      {/* Shared leaf gradient for every sprig below */}
      <svg width="0" height="0" aria-hidden="true" className="s1__defs">
        <defs>
          <linearGradient id={leafId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#4C7E22" />
            <stop offset="1" stopColor="#80AE48" />
          </linearGradient>
          <linearGradient id={softLeafId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#6E9E4C" />
            <stop offset="1" stopColor="#A6C886" />
          </linearGradient>
        </defs>
      </svg>

      <div className="s1__grid">
        {/* Left: hero panel */}
        <div className="s1-hero">
          <svg className="s1-hero__corner" viewBox="0 0 260 150" aria-hidden="true">
            <path fill="#FDEBC8" d="M0 0H236C170 46 80 96 0 128Z" />
            <path fill="#FBD796" d="M0 128C80 96 170 46 236 0H190C130 40 66 74 0 96Z" />
          </svg>
          <svg className="s1-hero__wave" viewBox="0 0 280 160" aria-hidden="true">
            <path d="M0 140C80 96 170 60 280 40V0C180 20 90 70 0 140Z" />
          </svg>
          <svg className="s1-hero__edge" viewBox="0 0 80 480" aria-hidden="true">
            <path d="M0 0C40 60 56 160 44 260C36 340 16 420 0 480Z" />
          </svg>
          {/* Two leaves hanging in from the left edge */}
          <svg className="s1-hero__leaves" viewBox="0 0 70 150" aria-hidden="true">
            <path fill={`url(#${softLeafId})`} d="M0 4C30 4 52 50 52 92C24 80 2 48 0 4Z" />
            <path className="s1-sprig__vein" d="M0 4C22 30 40 60 52 92" />
            <path fill={`url(#${softLeafId})`} d="M0 78C30 82 54 108 58 140C28 136 6 112 0 78Z" />
            <path className="s1-sprig__vein" d="M0 78C22 96 44 116 58 140" />
          </svg>
          <Sprig className="s1-hero__sprig" gradientId={softLeafId} />
          <svg className="s1-hero__base" viewBox="0 0 836 140" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#F9D08A" d="M0 30C80 36 170 84 236 140H0Z" />
            <path fill="#FBDEA6" d="M0 76C40 80 66 110 74 140H0Z" />
            <path fill="#FAD283" d="M836 26C762 38 702 88 660 140H836Z" />
          </svg>

          <div className="s1-hero__content">
            <p className="s1-hero__eyebrow">
              <span className="s1-hero__rule" />
              <span className="s1-hero__eyebrow-text">Stage 1 · 5 screens</span>
              <span className="s1-hero__rule" />
            </p>
            <h3 className="s1-hero__title">
              Farm{' '}
              <span className="s1-hero__accent">
                <span className="s1-hero__accent-text">Ready</span>
                <Sprig className="s1-hero__title-sprig" gradientId={leafId} />
                <svg className="s1-hero__swoosh" viewBox="0 0 180 24" aria-hidden="true">
                  <path d="M0 14C50 2 120 2 180 20C120 9 50 9 2 18Z" />
                </svg>
              </span>
            </h3>
            <p className="s1-hero__subtitle">
              Prepare your farm with registrations,
              <br />
              compliance and essential records.
            </p>
          </div>

          <div className="s1-hero__media" aria-hidden="true">
            <img className="s1-hero__photo" src={heroPhotoUrl} alt="" />
          </div>
        </div>

        {/* Right: screen list */}
        <div className="s1-list">
          <svg className="s1-list__top" viewBox="0 0 140 290" aria-hidden="true">
            <circle cx="150" cy="190" r="70" fill="#FCF3E0" />
            <circle cx="122" cy="12" r="90" fill="#D9E8C6" />
            <path fill="#B9D49B" d="M140 92C104 104 88 140 90 182C122 170 140 134 140 92Z" />
          </svg>
          <svg className="s1-list__bottom" viewBox="0 0 230 160" aria-hidden="true">
            <path fill="#DCEACB" d="M0 160C40 110 120 50 230 30V160Z" />
            <path fill="#C3DAA8" d="M70 160C108 120 170 92 230 86V160Z" />
            <circle cx="214" cy="156" r="66" fill="#AFCD8F" />
          </svg>

          <h3 className="s1-list__heading">
            Farm <span className="s1-list__accent">Ready</span> Screens
          </h3>
          <span className="s1-list__rule" aria-hidden="true" />

          <div className="s1-list__rows">
            {items.map((screen) => (
              <ShowcaseRow key={screen.id} screen={screen} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
