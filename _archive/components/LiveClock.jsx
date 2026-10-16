import { useEffect, useState } from 'react'

// The current time in India (IST), shown as a header chip on the screens.
// Re-renders as each minute starts, and straight away when the tab is shown
// again (background tabs pause timers).

const timeFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Kolkata',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
})

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Asia/Kolkata',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
})

function useNow() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    let timer
    // Minute boundaries are the same in UTC and IST (+5:30), so wake just after the next one
    const schedule = () => {
      timer = setTimeout(() => {
        setNow(new Date())
        schedule()
      }, 60_000 - (Date.now() % 60_000) + 20)
    }
    const onVisible = () => {
      if (document.visibilityState === 'visible') setNow(new Date())
    }

    schedule()
    document.addEventListener('visibilitychange', onVisible)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('visibilitychange', onVisible)
    }
  }, [])

  return now
}

// date: also show today's date ("16 Oct 2026 · 3:42 PM IST")
// prefix: text kept before the time, e.g. "Day 87"
export default function LiveClock({ date = false, prefix }) {
  const now = useNow()
  const label = [prefix, date && dateFormat.format(now), `${timeFormat.format(now)} IST`].filter(Boolean).join(' · ')

  return (
    <span className="meta-chip">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
      <time dateTime={now.toISOString()}>{label}</time>
    </span>
  )
}
