import { useEffect, useRef, useState } from 'react'
import HomeHero from '../components/HomeHero.jsx'
import PageStyles from '../components/PageStyles.jsx'
import ScreensHero from '../components/ScreensHero.jsx'
import StageJourney from '../components/StageJourney.jsx'
import { screens, stages } from '../data/screens.js'
import css from '../styles/pages/home.css?inline'

const finalStage = stages.at(-1)

// The final stage is a single badge screen, so it's reached through "Badges" (as in the design)
const filters = [
  { value: 'all', label: 'All', className: 'filter--all' },
  ...stages
    .filter((stage) => stage !== finalStage)
    .map((stage) => ({ value: String(stage.id), label: `Stage ${stage.id}` })),
  { value: 'badge', label: 'Badges', className: 'filter--badge', medal: true },
]

const normalise = (str) => String(str).toLowerCase().replace(/\s+/g, ' ').trim()

const searchText = new Map(
  screens.map((screen) => [
    screen.id,
    normalise(`${screen.id} ${screen.file} ${screen.title} stage ${screen.stage}${screen.badge ? ' badge' : ''}`),
  ]),
)

function matches(screen, filter, query) {
  if (filter === 'badge' && !screen.badge) return false
  if (filter !== 'all' && filter !== 'badge' && filter !== String(screen.stage)) return false
  if (!query) return true
  // exact file id match first (e.g. "8a"), otherwise substring search
  const id = screen.id.toLowerCase()
  return id === query || `${id}.html` === query || searchText.get(screen.id).includes(query)
}

export default function Home() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const searchRef = useRef(null)

  // "/" focuses the search box from anywhere on the page
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === '/' && document.activeElement !== searchRef.current) {
        e.preventDefault()
        searchRef.current.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const q = normalise(query)
  const groups = stages
    .map((stage) => ({
      stage,
      items: screens.filter((screen) => screen.stage === stage.id && matches(screen, filter, q)),
    }))
    .filter((group) => group.items.length > 0)

  return (
    <div className="home">
      <title>KYJ Screens · Krushi Yeva Jayate</title>
      <PageStyles css={css} />

      <a className="skip-link" href="#screens">Skip to screens</a>

      <HomeHero />

      <main>
        {/* Screens */}
        <section className="home-screens" id="screens">
          <ScreensHero
            query={query}
            onQueryChange={setQuery}
            filters={filters}
            filter={filter}
            onFilterChange={setFilter}
            searchRef={searchRef}
          />

          <div className="home-container">
            {groups.length > 0 && <StageJourney groups={groups} />}

            {groups.length === 0 && (
              <div className="empty">
                <span className="empty__icon">🔍</span>
                <p><strong>No screens match your search.</strong></p>
                <p>Try a file number like <span className="mono">13a</span> or a word like <em>badge</em>.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
