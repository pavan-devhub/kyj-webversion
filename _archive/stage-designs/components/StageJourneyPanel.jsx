import { Link } from 'react-router'
import { ArrowRightIcon, ChevronRightIcon, ScreenIcon } from './icons.jsx'
import '../styles/components/stage-journey.css'

// Every stage is the same centred panel: pill label, two-tone title, summary,
// numbered screen cards, then a footer with three highlights and one button.
// Stage colours live in stage-journey.css ([data-stage]); titles, summaries,
// highlights and card icons in data/screens.js.

const twoDigits = (value) => String(value).padStart(2, '0')

// "EPM & Onboarding" → ["EPM &", "Onboarding"]: the last word takes the stage colour
function splitTitle(name) {
  const words = name.split(' ')
  return [words.slice(0, -1).join(' '), words.at(-1)]
}

function ScreenCard({ screen }) {
  return (
    <li className="journey-card">
      <Link to={screen.path} className="journey-card__link">
        <span className="journey-card__num">{twoDigits(screen.label)}</span>
        <span className="journey-card__body">
          <ScreenIcon name={screen.icon} className="journey-card__icon" />
          <span className="journey-card__title">{screen.title}</span>
        </span>
        <ChevronRightIcon className="journey-card__chevron" />
        <span className="journey-card__bar" aria-hidden="true" />
      </Link>
    </li>
  )
}

function StageHighlights({ highlights }) {
  return (
    <ul className="journey-highlights" role="list" aria-label="Stage highlights">
      {highlights.map(({ icon, label }) => (
        <li key={label} className="journey-highlight">
          <ScreenIcon name={icon} className="journey-highlight__icon" />
          <span className="journey-highlight__label">{label}</span>
        </li>
      ))}
    </ul>
  )
}

function StageSection({ stage, items, nextStageId }) {
  const number = twoDigits(stage.id)
  const [lead, accent] = splitTitle(stage.name)
  const titleId = `stage-${stage.id}-title`

  return (
    <section className="journey-stage" data-stage={stage.id} id={`stage-${stage.id}`} aria-labelledby={titleId}>
      <span className="journey-stage__dots" aria-hidden="true" />

      <p className="journey-stage__pill">
        <span className="journey-stage__dot" aria-hidden="true" />
        Stage {number}
      </p>
      <h3 className="journey-stage__title" id={titleId}>
        {lead && `${lead} `}
        <span className="journey-stage__accent">{accent}</span>
      </h3>
      {stage.summary && <p className="journey-stage__summary">{stage.summary}</p>}

      {/* data-count lets the CSS keep rows balanced (five cards → 3 + 2, not 4 + 1) */}
      <ul className="journey-stage__cards" role="list" data-count={items.length}>
        {items.map((screen) => (
          <ScreenCard key={screen.id} screen={screen} />
        ))}
      </ul>

      <div className="journey-stage__footer">
        {stage.highlights && <StageHighlights highlights={stage.highlights} />}

        <div className="journey-stage__actions">
          {nextStageId === undefined ? (
            <a className="journey-btn journey-btn--primary" href="#screens">
              Back to Top
              <ArrowRightIcon className="journey-btn__arrow journey-btn__arrow--up" />
            </a>
          ) : (
            <a className="journey-btn journey-btn--primary" href={`#stage-${nextStageId}`}>
              Next Stage
              <ArrowRightIcon className="journey-btn__arrow" />
            </a>
          )}
        </div>
      </div>
    </section>
  )
}

export default function StageJourney({ groups }) {
  return (
    <ol className="journey" role="list" aria-label="Export journey stages">
      {groups.map(({ stage, items }, i) => (
        <li key={stage.id} className="journey__item">
          <StageSection stage={stage} items={items} nextStageId={groups[i + 1]?.stage.id} />
        </li>
      ))}
    </ol>
  )
}
