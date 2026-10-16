import { useEffect, useLayoutEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigationType } from 'react-router'

// Scroll position of each history entry (location.key → scrollY).
const positions = new Map()

// Scroll like a multi-page site: a new page opens at the top (or its #hash
// target), back/forward returns to where the page was left, and in-page #anchor
// jumps are left to the browser (smooth, via `html { scroll-behavior: smooth }`).
// React Router's <ScrollRestoration> isn't used because it scrolls through that
// smooth behaviour (animating every page change) and overrides anchor jumps.
function useRouteScroll() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const keyRef = useRef(location.key)
  const pathRef = useRef(null)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    const save = () => positions.set(keyRef.current, window.scrollY)
    window.addEventListener('scroll', save, { passive: true })
    return () => window.removeEventListener('scroll', save)
  }, [])

  useLayoutEffect(() => {
    keyRef.current = location.key
    if (location.pathname === pathRef.current) return // same page: in-page anchor
    pathRef.current = location.pathname

    const saved = navigationType === 'POP' ? positions.get(location.key) : undefined
    const target = location.hash && document.getElementById(location.hash.slice(1))
    if (saved !== undefined) window.scrollTo({ top: saved, behavior: 'instant' })
    else if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location, navigationType])
}

export default function RootLayout() {
  useRouteScroll()
  return <Outlet />
}
