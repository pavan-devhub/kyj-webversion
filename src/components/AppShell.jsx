import { useEffect, useState } from 'react'
import { Navigate, Outlet, useLocation, useMatches, useNavigate } from 'react-router'
import { screens } from '../data/screens.js'
import Pager from './Pager.jsx'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'

// ← / → move through the journey (ignored while typing or with modifier keys).
function useArrowKeyNavigation(prev, next) {
  const navigate = useNavigate()

  useEffect(() => {
    function onKeyDown(e) {
      const tag = (e.target.tagName || '').toLowerCase()
      if (tag === 'input' || tag === 'textarea' || e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 'ArrowLeft' && prev) navigate(prev.path)
      else if (e.key === 'ArrowRight' && next) navigate(next.path)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [navigate, prev, next])
}

// Layout for every screen route: sidebar, top bar, the screen itself, pager.
export default function AppShell() {
  const current = useMatches().at(-1).handle?.screen
  // "/screens" on its own has no screen to show
  if (!current) return <Navigate to="/" replace />
  return <Shell current={current} />
}

function Shell({ current }) {
  const prev = screens[current.index - 1]
  const next = screens[current.index + 1]

  // The mobile drawer belongs to the page it was opened on, so navigating closes it.
  const { pathname } = useLocation()
  const [drawerPath, setDrawerPath] = useState(null)
  const navOpen = drawerPath === pathname

  useArrowKeyNavigation(prev, next)

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') setDrawerPath(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      {/* data-stage themes the whole shell with the stage's colour (styles/stage/theme.css) */}
      <div className={`app${navOpen ? ' nav-open' : ''}`} data-stage={current.stage}>
        <Sidebar current={current} />
        <div className="app__main">
          <Topbar
            current={current}
            prev={prev}
            next={next}
            navOpen={navOpen}
            onMenuClick={() => setDrawerPath(navOpen ? null : pathname)}
          />
          <main className="page" id="main">
            <Outlet />
          </main>
          <Pager prev={prev} next={next} />
        </div>
        <div className="scrim" onClick={() => setDrawerPath(null)} />
      </div>
    </>
  )
}
