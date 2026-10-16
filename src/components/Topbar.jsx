import { Link } from 'react-router'
import { screens, stages } from '../data/screens.js'
import { ChevronLeftIcon, ChevronRightIcon, GridIcon, MenuIcon } from './icons.jsx'

function NavButton({ target, label, children }) {
  if (!target) {
    return (
      <span className="icon-btn" aria-disabled="true" aria-label={label}>
        {children}
      </span>
    )
  }
  return (
    <Link
      className="icon-btn"
      to={target.path}
      aria-label={`${label}: ${target.title}`}
      title={`${target.file} · ${target.title}`}
    >
      {children}
    </Link>
  )
}

export default function Topbar({ current, prev, next, navOpen, onMenuClick }) {
  const stage = stages[current.stage]
  const position = current.index + 1

  return (
    // --progress draws the journey progress line along the bar's bottom edge
    <header className="topbar" style={{ '--progress': `${(position / screens.length) * 100}%` }}>
      <button
        className="topbar__menu"
        type="button"
        aria-label="Open navigation"
        aria-expanded={navOpen}
        onClick={onMenuClick}
      >
        <MenuIcon />
      </button>
      <div className="crumbs">
        <Link className="crumbs__home" to="/">Home</Link>
        <span className="crumbs__sep">/</span>
        <span className="crumbs__stage">
          <span className="crumbs__dot" aria-hidden="true" />
          {`Stage ${stage.id} · ${stage.name}`}
        </span>
        <span className="crumbs__sep">/</span>
        <span className="crumbs__current">
          <span className="crumbs__badge" title={current.file}>{current.label}</span>
          <span>{current.title}</span>
        </span>
      </div>
      <div className="topbar__spacer" />
      <span className="topbar__count">
        <strong>{position}</strong>
        {` / ${screens.length}`}
      </span>
      <div className="topbar__nav">
        <NavButton target={prev} label="Previous screen">
          <ChevronLeftIcon />
        </NavButton>
        <NavButton target={next} label="Next screen">
          <ChevronRightIcon />
        </NavButton>
      </div>
      <Link className="topbar__all" to="/">
        <GridIcon />
        <span>All screens</span>
      </Link>
    </header>
  )
}
