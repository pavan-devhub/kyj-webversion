import React from 'react'
import curvedWavesUrl from '../assets/images/stage-curved-waves.svg'
import Stage0Showcase from './Stage0Showcase.jsx'
import Stage1Showcase from './Stage1Showcase.jsx'
import '../styles/components/stage0-1-redesign.css'

export default function Stage0And1Redesign({ stage0, stage1 }) {
  const hasStage0 = Boolean(stage0 && stage0.items.length > 0)
  const hasStage1 = Boolean(stage1 && stage1.items.length > 0)

  if (!hasStage0 && !hasStage1) return null

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

        {/* Stage 0 Section Row */}
        {hasStage0 && (
          <div className="stage-redesign__stage-row">
            {/* Stage 0 Timeline Cell */}
            <div className="stage-redesign__timeline-cell" aria-hidden="true">
              <div className="stage-redesign__line stage-redesign__line--0" />
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--top" />
              <div className="stage-redesign__badge-circle stage-redesign__badge-circle--0">
                00
              </div>
              <div className="stage-redesign__pill-box">
                <div className="stage-redesign__pill-title">
                  EPM &amp;
                  <br />
                  Onboarding
                </div>
                <div className="stage-redesign__pill-meta">
                  Stage 0 · 4 screens
                </div>
              </div>
            </div>

            {/* Stage 0 Main Container */}
            <Stage0Showcase items={stage0.items} />
          </div>
        )}

        {/* Gap Connector Between Stage 0 and Stage 1 */}
        {hasStage0 && hasStage1 && (
          <div className="stage-redesign__gap-row" aria-hidden="true">
            <div className="stage-redesign__gap-cell">
              <div className="stage-redesign__line stage-redesign__line--gap" />
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--mid" />
            </div>
          </div>
        )}

        {/* Stage 1 Section Row */}
        {hasStage1 && (
          <div className="stage-redesign__stage-row">
            {/* Stage 1 Timeline Cell */}
            <div className="stage-redesign__timeline-cell" aria-hidden="true">
              <div className="stage-redesign__line stage-redesign__line--1" />
              <div className="stage-redesign__badge-circle stage-redesign__badge-circle--1">
                01
              </div>
              <div className="stage-redesign__label-box">
                <div className="stage-redesign__label-title">Farm Ready</div>
                <div className="stage-redesign__label-meta">
                  Stage 1 · 5 screens
                </div>
              </div>
              <div className="stage-redesign__timeline-dot stage-redesign__timeline-dot--bot" />
            </div>

            {/* Stage 1 Main Container */}
            <Stage1Showcase items={stage1.items} />
          </div>
        )}
      </div>
    </div>
  )
}
