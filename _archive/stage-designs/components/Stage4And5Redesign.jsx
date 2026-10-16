import React from 'react'
import { Link } from 'react-router'
import curvedWavesUrl from '../assets/images/stage-curved-waves.svg'
import worldDotsStage4Url from '../assets/images/stage4-world-dots.svg'
import worldDotsStage5Url from '../assets/images/stage5-world-dots.svg'
import qualityBannerUrl from '../assets/images/quality-banner.webp'
import buyerBannerUrl from '../assets/images/buyer-banner.webp'
import {
  NablLabIcon,
  FssaiSampleIcon,
  CoaPhytosanitaryIcon,
  BuyerMatchIcon,
  BsmSchedulerIcon,
  MoaSigningIcon,
  ArrowCircleIcon,
} from './StageIcons.jsx'
import '../styles/components/stage0-1-redesign.css'

// Metadata for redesigned Stage 4 and Stage 5 screens
const stage4And5CardsMeta = {
  '14': {
    num: '14',
    titleBreak: 'NABL Lab Bookings',
    desc: 'Book NABL accredited labs for quality testing.',
    accent: '#16A34A',
    pillBg: '#DCFCE7',
    swoop: '#BBF7D0',
    Icon: NablLabIcon,
  },
  '15': {
    num: '15',
    titleBreak: 'FSSAI Sample Request',
    desc: 'Submit and track FSSAI sample requests.',
    accent: '#D97706',
    pillBg: '#FEF3C7',
    swoop: '#FDE68A',
    Icon: FssaiSampleIcon,
  },
  '16': {
    num: '16',
    titleBreak: 'COA - Phytosanitary & Residue',
    desc: 'Get Certificate of Analysis and residue test reports.',
    accent: '#0D9488',
    pillBg: '#CCFBF1',
    swoop: '#99F6E4',
    Icon: CoaPhytosanitaryIcon,
  },
  '17': {
    num: '17',
    titleBreak: 'VISWARUPAM Buyer Match',
    desc: 'Explore and connect with global buyers and FPOs.',
    accent: '#E11D48',
    pillBg: '#FFE4E8',
    swoop: '#FECDD3',
    Icon: BuyerMatchIcon,
  },
  's18': {
    num: '18',
    titleBreak: 'BSM Scheduler',
    desc: 'Schedule and manage B2B meetings with buyers.',
    accent: '#7C3AED',
    pillBg: '#EDE9FE',
    swoop: '#DDD6FE',
    Icon: BsmSchedulerIcon,
  },
  's19': {
    num: '19',
    titleBreak: 'MoA Signing · Stage 5 Badge',
    desc: 'Facilitate MoU signing between buyers and FPOs.',
    accent: '#EA580C',
    pillBg: '#FFEDD5',
    swoop: '#FED7AA',
    Icon: MoaSigningIcon,
  },
}

function RedesignCard({ screen }) {
  const meta = stage4And5CardsMeta[screen.id] || {
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

export default function Stage4And5Redesign({ stage4, stage5 }) {
  const hasStage4 = Boolean(stage4 && stage4.items.length > 0)
  const hasStage5 = Boolean(stage5 && stage5.items.length > 0)

  if (!hasStage4 && !hasStage5) return null

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

        {/* Stage 4 Section Row */}
        {hasStage4 && (
          <div className="stage-redesign__stage-row">
            {/* Stage 4 Timeline Cell */}
            <div className="stage-redesign__timeline-cell" aria-hidden="true">
              <div className="stage-redesign__line stage-redesign__line--0" />
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--top stage-redesign__timeline-dot--4" />
              <div className="stage-redesign__badge-circle stage-redesign__badge-circle--4">
                04
              </div>
              <div className="stage-redesign__pill-box stage-redesign__pill-box--4">
                <div className="stage-redesign__pill-title stage-redesign__pill-title--4">
                  Quality
                </div>
                <div className="stage-redesign__pill-meta stage-redesign__pill-meta--4">
                  Stage 4
                </div>
              </div>
            </div>

            {/* Stage 4 Main Container */}
            <section
              className="stage-redesign__container stage-redesign__container--4"
              id="stage-4"
            >
              {/* Mobile Timeline Header */}
              <div className="stage-redesign__mobile-timeline">
                <div
                  className="stage-redesign__badge-circle stage-redesign__badge-circle--4"
                  style={{ width: 42, height: 42, fontSize: 17 }}
                >
                  04
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#064E3B', fontSize: 16 }}>
                    Quality
                  </div>
                  <div style={{ fontSize: 12, color: '#047857' }}>
                    Stage 4
                  </div>
                </div>
              </div>

              {/* Dotted World Map Decoration in Green */}
              <img
                className="stage-redesign__map-bg"
                src={worldDotsStage4Url}
                alt=""
                aria-hidden="true"
              />

              {/* Quality Lab Microscope Banner */}
              <div className="stage-redesign__quality-banner" aria-hidden="true">
                <img src={qualityBannerUrl} alt="" />
              </div>

              {/* Container Content */}
              <div className="stage-redesign__content">
                <div className="stage-redesign__indicator">
                  <span className="stage-redesign__indicator-bar stage-redesign__indicator-bar--4" />
                  <span className="stage-redesign__indicator-text stage-redesign__indicator-text--4">
                    Stage 4
                  </span>
                  <span className="stage-redesign__indicator-fade stage-redesign__indicator-fade--4" />
                </div>

                <h3 className="stage-redesign__title stage-redesign__title--4">
                  Quality
                </h3>
                <p className="stage-redesign__subtitle">
                  Ensure quality through certifications, testing and compliance support.
                </p>

                <div className="stage-redesign__grid stage-redesign__grid--3">
                  {stage4.items.map((screen) => (
                    <RedesignCard key={screen.id} screen={screen} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Gap Connector Between Stage 4 and Stage 5 */}
        {hasStage4 && hasStage5 && (
          <div className="stage-redesign__gap-row" aria-hidden="true">
            <div className="stage-redesign__gap-cell">
              <div className="stage-redesign__line stage-redesign__line--gap" />
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--mid stage-redesign__timeline-dot--5" />
            </div>
          </div>
        )}

        {/* Stage 5 Section Row */}
        {hasStage5 && (
          <div className="stage-redesign__stage-row">
            {/* Stage 5 Timeline Cell */}
            <div className="stage-redesign__timeline-cell" aria-hidden="true">
              <div className="stage-redesign__line stage-redesign__line--1" />
              <div className="stage-redesign__badge-circle stage-redesign__badge-circle--5">
                05
              </div>
              <div className="stage-redesign__pill-box stage-redesign__pill-box--5">
                <div className="stage-redesign__pill-title stage-redesign__pill-title--5">
                  Buyer
                </div>
                <div className="stage-redesign__pill-meta stage-redesign__pill-meta--5">
                  Stage 5
                </div>
              </div>
              <div
                className="stage-redesign__timeline-dot stage-redesign__timeline-dot--5"
                style={{ bottom: 70 }}
              />
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--bot stage-redesign__timeline-dot--5" />
            </div>

            {/* Stage 5 Main Container */}
            <section
              className="stage-redesign__container stage-redesign__container--5"
              id="stage-5"
            >
              {/* Mobile Timeline Header */}
              <div className="stage-redesign__mobile-timeline">
                <div
                  className="stage-redesign__badge-circle stage-redesign__badge-circle--5"
                  style={{ width: 42, height: 42, fontSize: 17 }}
                >
                  05
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#881337', fontSize: 16 }}>
                    Buyer
                  </div>
                  <div style={{ fontSize: 12, color: '#9F1239' }}>
                    Stage 5
                  </div>
                </div>
              </div>

              {/* Dotted World Map Decoration in Pink */}
              <img
                className="stage-redesign__map-bg"
                src={worldDotsStage5Url}
                alt=""
                aria-hidden="true"
              />

              {/* Buyer Trade Handshake Banner */}
              <div className="stage-redesign__buyer-banner" aria-hidden="true">
                <img src={buyerBannerUrl} alt="" />
              </div>

              {/* Container Content */}
              <div className="stage-redesign__content">
                <div className="stage-redesign__indicator">
                  <span className="stage-redesign__indicator-bar stage-redesign__indicator-bar--5" />
                  <span className="stage-redesign__indicator-text stage-redesign__indicator-text--5">
                    Stage 5
                  </span>
                  <span className="stage-redesign__indicator-fade stage-redesign__indicator-fade--5" />
                </div>

                <h3 className="stage-redesign__title stage-redesign__title--5">
                  Buyer
                </h3>
                <p className="stage-redesign__subtitle">
                  Connect with global buyers and participate in trade opportunities.
                </p>

                <div className="stage-redesign__grid stage-redesign__grid--3">
                  {stage5.items.map((screen) => (
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
