import React from 'react'
import { Link } from 'react-router'
import curvedWavesUrl from '../assets/images/stage-curved-waves.svg'
import registrationBannerUrl from '../assets/images/registration-banner.webp'
import packhouseBannerUrl from '../assets/images/packhouse-banner.webp'
import {
  IecRegistrationIcon,
  ApedaRcmcIcon,
  FssaiGateIcon,
  BadgeNamoduIcon,
  PackhouseLocatorIcon,
  PackingBoxIcon,
  BadgePackhouseIcon,
  ArrowCircleIcon,
} from './StageIcons.jsx'
import '../styles/components/stage0-1-redesign.css'

// Metadata for redesigned Stage 2 and Stage 3 screens
const stage2And3CardsMeta = {
  '9': {
    num: '09',
    titleBreak: 'IEC Registration',
    desc: 'Complete your Import Export Code registration.',
    accent: '#2563EB',
    pillBg: '#DBEAFE',
    swoop: '#BFDBFE',
    Icon: IecRegistrationIcon,
  },
  '10': {
    num: '10',
    titleBreak: 'APEDA RCMC',
    desc: 'Apply and obtain APEDA RCMC registration.',
    accent: '#6366F1',
    pillBg: '#EDE9FE',
    swoop: '#DDD6FE',
    Icon: ApedaRcmcIcon,
  },
  '11': {
    num: '11',
    titleBreak: 'FSSAI Stage 2 Gate',
    desc: 'Complete FSSAI Stage 2 gate requirements.',
    accent: '#0891B2',
    pillBg: '#CFFAFE',
    swoop: '#BAE6FD',
    Icon: FssaiGateIcon,
  },
  '11a': {
    num: '11a',
    titleBreak: 'Stage 2 Badge · Namodu',
    desc: 'Award Stage 2 badge after completion.',
    accent: '#059669',
    pillBg: '#DCFCE7',
    swoop: '#BBF7D0',
    Icon: BadgeNamoduIcon,
  },
  '12': {
    num: '12',
    titleBreak: 'Packhouse Locator',
    desc: 'Find and register packhouse locations near you.',
    accent: '#EA580C',
    pillBg: '#FFEDD5',
    swoop: '#FED7AA',
    Icon: PackhouseLocatorIcon,
  },
  '13': {
    num: '13',
    titleBreak: 'Packing & Labelling',
    desc: 'Manage packing and labelling requirements.',
    accent: '#DC2626',
    pillBg: '#FEE2E2',
    swoop: '#FECACA',
    Icon: PackingBoxIcon,
  },
  '13a': {
    num: '13a',
    titleBreak: 'Stage 3 Badge · PackHouse',
    desc: 'Award Stage 3 badge after completion.',
    accent: '#D97706',
    pillBg: '#FEF3C7',
    swoop: '#FDE68A',
    Icon: BadgePackhouseIcon,
  },
}

function RedesignCard({ screen }) {
  const meta = stage2And3CardsMeta[screen.id] || {
    num: screen.label,
    titleBreak: screen.title,
    desc: '',
    accent: screen.accent || '#101A35',
    pillBg: '#F1F5F9',
    swoop: '#E2E8F0',
    Icon: null,
  }

  const { Icon } = meta

  return (
    <Link
      to={screen.path}
      className="stage-redesign__card"
      style={{
        '--sr-accent': meta.accent,
        '--sr-pill-bg': meta.pillBg,
        '--sr-swoop': meta.swoop,
      }}
    >
      {/* Corner Swoop vector */}
      <svg
        className="stage-redesign__card-swoop"
        viewBox="0 0 100 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M100 20 C75 32, 28 54, 0 80 L100 80 Z" />
      </svg>

      <div className="stage-redesign__card-body">
        {/* Top Header: Badge, Icon, Arrow */}
        <div className="stage-redesign__card-header">
          <span className="stage-redesign__card-num stage-redesign__card-num--solid">
            {meta.num}
          </span>
          <div className="stage-redesign__card-icon">
            {Icon && <Icon />}
          </div>
          <span className="stage-redesign__card-arrow">
            <ArrowCircleIcon />
          </span>
        </div>

        {/* Title */}
        <h4 className="stage-redesign__card-title">
          {meta.titleBreak}
        </h4>

        {/* Short accent line */}
        <div className="stage-redesign__card-line" />

        {/* Description */}
        <p className="stage-redesign__card-desc">{meta.desc}</p>
      </div>
    </Link>
  )
}

export default function Stage2And3Redesign({ stage2, stage3 }) {
  const hasStage2 = Boolean(stage2 && stage2.items.length > 0)
  const hasStage3 = Boolean(stage3 && stage3.items.length > 0)

  if (!hasStage2 && !hasStage3) return null

  return (
    <div className="stage-redesign">
      <div className="stage-redesign__container-wrapper">
        {/* Background Waves along the Left Timeline */}
        <img
          className="stage-redesign__timeline-waves"
          src={curvedWavesUrl}
          alt=""
          aria-hidden="true"
        />

        {/* Stage 2 Section Row */}
        {hasStage2 && (
          <div className="stage-redesign__stage-row">
            {/* Stage 2 Timeline Cell */}
            <div className="stage-redesign__timeline-cell" aria-hidden="true">
              <div className="stage-redesign__line stage-redesign__line--0" />
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--top stage-redesign__timeline-dot--2" />
              <div className="stage-redesign__badge-circle stage-redesign__badge-circle--2">
                02
              </div>
              <div className="stage-redesign__pill-box stage-redesign__pill-box--2">
                <div className="stage-redesign__pill-title stage-redesign__pill-title--2">
                  Registered
                </div>
                <div className="stage-redesign__pill-meta stage-redesign__pill-meta--2">
                  Stage 2 · 4 screens
                </div>
              </div>
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--bot stage-redesign__timeline-dot--2" />
            </div>

            {/* Stage 2 Main Container */}
            <section
              className="stage-redesign__container stage-redesign__container--2"
              id="stage-2"
            >
              {/* Mobile Timeline Header */}
              <div className="stage-redesign__mobile-timeline">
                <div
                  className="stage-redesign__badge-circle stage-redesign__badge-circle--2"
                  style={{ width: 42, height: 42, fontSize: 17 }}
                >
                  02
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#064E3B', fontSize: 16 }}>
                    Registered
                  </div>
                  <div style={{ fontSize: 12, color: '#047857' }}>
                    Stage 2 · 4 screens
                  </div>
                </div>
              </div>

              {/* Registration Document Sign Banner */}
              <div className="stage-redesign__registration-banner" aria-hidden="true">
                <img src={registrationBannerUrl} alt="" />
              </div>

              {/* Container Content */}
              <div className="stage-redesign__content">
                <div className="stage-redesign__indicator">
                  <span className="stage-redesign__indicator-bar stage-redesign__indicator-bar--2" />
                  <span className="stage-redesign__indicator-text stage-redesign__indicator-text--2">
                    Stage 2 · 4 screens
                  </span>
                  <span className="stage-redesign__indicator-fade stage-redesign__indicator-fade--2" />
                </div>

                <h3 className="stage-redesign__title stage-redesign__title--2">
                  Registered
                </h3>
                <p className="stage-redesign__subtitle">
                  Complete essential registrations to become an eligible participant.
                </p>

                <div className="stage-redesign__grid stage-redesign__grid--4">
                  {stage2.items.map((screen) => (
                    <RedesignCard key={screen.id} screen={screen} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Gap Connector Between Stage 2 and Stage 3 */}
        {hasStage2 && hasStage3 && (
          <div className="stage-redesign__gap-row" aria-hidden="true">
            <div className="stage-redesign__gap-cell">
              <div className="stage-redesign__line stage-redesign__line--gap" />
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--mid stage-redesign__timeline-dot--3" />
            </div>
          </div>
        )}

        {/* Stage 3 Section Row */}
        {hasStage3 && (
          <div className="stage-redesign__stage-row">
            {/* Stage 3 Timeline Cell */}
            <div className="stage-redesign__timeline-cell" aria-hidden="true">
              <div className="stage-redesign__line stage-redesign__line--1" />
              <div className="stage-redesign__badge-circle stage-redesign__badge-circle--3">
                03
              </div>
              <div className="stage-redesign__pill-box stage-redesign__pill-box--3">
                <div className="stage-redesign__pill-title stage-redesign__pill-title--3">
                  Packhouse
                </div>
                <div className="stage-redesign__pill-meta stage-redesign__pill-meta--3">
                  Stage 3 · 3 screens
                </div>
              </div>
              <div
                className="stage-redesign__timeline-dot stage-redesign__timeline-dot--3"
                style={{ bottom: 70 }}
              />
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--bot stage-redesign__timeline-dot--3" />
            </div>

            {/* Stage 3 Main Container */}
            <section
              className="stage-redesign__container stage-redesign__container--3"
              id="stage-3"
            >
              {/* Mobile Timeline Header */}
              <div className="stage-redesign__mobile-timeline">
                <div
                  className="stage-redesign__badge-circle stage-redesign__badge-circle--3"
                  style={{ width: 42, height: 42, fontSize: 17 }}
                >
                  03
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: 16 }}>
                    Packhouse
                  </div>
                  <div style={{ fontSize: 12, color: '#64748B' }}>
                    Stage 3 · 3 screens
                  </div>
                </div>
              </div>

              {/* Packhouse Workers Facility Banner */}
              <div className="stage-redesign__packhouse-banner" aria-hidden="true">
                <img src={packhouseBannerUrl} alt="" />
              </div>

              {/* Container Content */}
              <div className="stage-redesign__content">
                <div className="stage-redesign__indicator">
                  <span className="stage-redesign__indicator-bar stage-redesign__indicator-bar--3" />
                  <span className="stage-redesign__indicator-text stage-redesign__indicator-text--3">
                    Stage 3 · 3 screens
                  </span>
                  <span className="stage-redesign__indicator-fade stage-redesign__indicator-fade--3" />
                </div>

                <h3 className="stage-redesign__title stage-redesign__title--3">
                  Packhouse
                </h3>
                <p className="stage-redesign__subtitle">
                  Set up and manage packhouse operations for quality and compliance.
                </p>

                <div className="stage-redesign__grid stage-redesign__grid--3">
                  {stage3.items.map((screen) => (
                    <RedesignCard key={screen.id} screen={screen} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
