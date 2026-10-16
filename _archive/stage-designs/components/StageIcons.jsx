import React from 'react'

export function EpmQrIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* Top-Left Finder */}
      <rect x="2" y="2" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <rect x="5.5" y="5.5" width="5" height="5" rx="1.2" fill="currentColor" />
      {/* Top-Right Finder */}
      <rect x="26" y="2" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <rect x="29.5" y="5.5" width="5" height="5" rx="1.2" fill="currentColor" />
      {/* Bottom-Left Finder */}
      <rect x="2" y="26" width="12" height="12" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <rect x="5.5" y="29.5" width="5" height="5" rx="1.2" fill="currentColor" />
      {/* Timing Patterns and Data Modules */}
      <rect x="17" y="3" width="3.2" height="3.2" rx="0.8" />
      <rect x="21.5" y="3" width="3" height="3" rx="0.8" />
      <rect x="17" y="7.5" width="3" height="3" rx="0.8" />
      <rect x="17" y="11.5" width="3.2" height="3.2" rx="0.8" />
      <rect x="3" y="17" width="3" height="3" rx="0.8" />
      <rect x="7.5" y="17" width="3" height="3" rx="0.8" />
      <rect x="11.5" y="17" width="3" height="3" rx="0.8" />
      <rect x="16.5" y="16.5" width="4" height="4" rx="1" />
      <rect x="22" y="17" width="3" height="3" rx="0.8" />
      <rect x="27" y="17" width="3.2" height="3.2" rx="0.8" />
      <rect x="33" y="17" width="3" height="3" rx="0.8" />
      <rect x="3" y="21.5" width="3" height="3" rx="0.8" />
      <rect x="17" y="21.5" width="3" height="3" rx="0.8" />
      <rect x="22" y="21.5" width="4" height="4" rx="1" />
      <rect x="28" y="21.5" width="3" height="3" rx="0.8" />
      <rect x="33.5" y="21.5" width="3.5" height="3.5" rx="0.8" />
      <rect x="17" y="27" width="3" height="3" rx="0.8" />
      <rect x="22" y="27" width="3" height="3" rx="0.8" />
      <rect x="27" y="27" width="4" height="4" rx="1" />
      <rect x="33" y="27" width="3" height="3" rx="0.8" />
      <rect x="17" y="33" width="3.5" height="3.5" rx="0.8" />
      <rect x="23" y="33" width="3" height="3" rx="0.8" />
      <rect x="28" y="33" width="3" height="3" rx="0.8" />
      <rect x="33" y="33" width="4" height="4" rx="1" />
    </svg>
  )
}

export function FeedCardIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* Outer ID Card */}
      <rect x="3" y="7" width="34" height="26" rx="4.5" fill="none" stroke="currentColor" strokeWidth="2.8" />
      {/* User Avatar */}
      <circle cx="13" cy="16.5" r="3.8" />
      <path d="M7 27.5c0-3.3 2.7-6 6-6s6 2.7 6 6z" />
      {/* Data Lines */}
      <rect x="22" y="13.5" width="11" height="2.8" rx="1.4" />
      <rect x="22" y="19" width="12.5" height="2.8" rx="1.4" />
      <rect x="22" y="24.5" width="7.5" height="2.8" rx="1.4" />
    </svg>
  )
}

export function FarmerConsentIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* Document Outline */}
      <path d="M7 6a3 3 0 0 1 3-3h13l7 7V33a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V6z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      {/* Folded Corner */}
      <path d="M23 3v7h7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Text Lines */}
      <line x1="12" y1="15" x2="20" y2="15" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="12" y1="21" x2="22" y2="21" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="12" y1="27" x2="18" y2="27" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      {/* Green Leaf Emblem on right */}
      <path d="M23 32c0-8 8.5-10.5 13-11.5 0 6-2.5 12.5-9.5 12.5-1.2 0-2.4-.4-3.5-1z" fill="currentColor" />
      <path d="M24 31c3.5-3.5 7-6 10.5-7.5" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function ExportReadinessIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* 3 Ascending Bar Chart Columns */}
      <rect x="5" y="22" width="6.5" height="14" rx="2" />
      <rect x="16.5" y="14" width="6.5" height="22" rx="2" />
      <rect x="28" y="5" width="6.5" height="31" rx="2" />
    </svg>
  )
}

export function FarmGpsIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* Isometric Map Grid */}
      <path d="M4 25l16 9 16-9-16-9-16 9z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M12 20.5l16 9M28 20.5l-16 9" stroke="currentColor" strokeWidth="2" strokeDasharray="2.5 2.5" strokeLinecap="round" />
      {/* Prominent GPS Location Pin */}
      <path d="M20 3c-5 0-9 4-9 9 0 6.5 9 15 9 15s9-8.5 9-15c0-5-4-9-9-9z" fill="currentColor" />
      <circle cx="20" cy="12" r="3.2" fill="#FFFFFF" />
    </svg>
  )
}

export function GapActivityIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* Top Clip */}
      <path d="M14 3h12a1.8 1.8 0 0 1 1.8 1.8V7H12.2V4.8A1.8 1.8 0 0 1 14 3z" fill="currentColor" />
      {/* Board Outline */}
      <rect x="5.5" y="7" width="29" height="29" rx="4" fill="none" stroke="currentColor" strokeWidth="2.6" />
      {/* Checkbox item 1 */}
      <path d="M11 15.5l2.4 2.4 4.8-4.8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="21.5" y1="15.5" x2="30" y2="15.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Checkbox item 2 */}
      <path d="M11 23.5l2.4 2.4 4.8-4.8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="21.5" y1="23.5" x2="30" y2="23.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Checkbox item 3 */}
      <path d="M11 31.5l2.4 2.2 4.2-4.2" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="21.5" y1="30.5" x2="28" y2="30.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function EuMrlIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* Protective Shield Outline */}
      <path d="M20 3.5 L6.5 9 v11 c0 9.5 6 15.5 13.5 17.5 c7.5-2 13.5-8 13.5-17.5 V9 L20 3.5 z" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      {/* Exclamation Bar */}
      <line x1="20" y1="11.5" x2="20" y2="21.5" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
      {/* Exclamation Dot */}
      <circle cx="20" cy="27" r="1.8" fill="currentColor" />
    </svg>
  )
}

export function SoilHealthIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* Ground Mound Line */}
      <path d="M7 33c6-2.5 20-2.5 26 0" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      {/* Stem */}
      <path d="M20 32V18" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      {/* Left Leaf */}
      <path d="M20 20c-7-1.2-13.5-7-13.5-13.5 5.5 0 12.5 5.5 13.5 13.5z" fill="currentColor" />
      {/* Right Leaf */}
      <path d="M20 18c7-1.2 13.5-7 13.5-13.5-5.5 0-12.5 5.5-13.5 13.5z" fill="currentColor" />
      {/* Seed Base */}
      <ellipse cx="20" cy="32.5" rx="4" ry="1.8" fill="currentColor" />
    </svg>
  )
}

export function BadgePolamIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      {/* Ribbon Tails at bottom */}
      <path d="M13 24l-3 13 6-3 4 2.2v-11" fill="currentColor" opacity="0.85" />
      <path d="M27 24l3 13-6-3-4 2.2v-11" fill="currentColor" opacity="0.85" />
      {/* Rosette Medal Rim */}
      <circle cx="20" cy="15.5" r="12.5" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="20" cy="15.5" r="10" fill="none" stroke="currentColor" strokeWidth="1.3" strokeDasharray="2.5 1.8" />
      {/* 5-Point Star */}
      <polygon points="20,8.5 22.5,13.6 28,14.4 24,18.3 25,23.8 20,21.2 15,23.8 16,18.3 12,14.4 17.5,13.6" fill="currentColor" />
    </svg>
  )
}

export function IecRegistrationIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      <path d="M14 3h12a1.8 1.8 0 0 1 1.8 1.8V7H12.2V4.8A1.8 1.8 0 0 1 14 3z" fill="currentColor" />
      <rect x="6" y="7" width="28" height="29" rx="4" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <line x1="12" y1="15" x2="28" y2="15" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="12" y1="21" x2="28" y2="21" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <line x1="12" y1="27" x2="22" y2="27" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

export function ApedaRcmcIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      <path d="M8 6a3 3 0 0 1 3-3h12l7 7V33a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V6z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M23 3v7h7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="13" y1="16" x2="21" y2="16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <line x1="13" y1="22" x2="21" y2="22" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="28" cy="27" r="5" fill="currentColor" />
      <path d="M25.5 31l2.5 6 2.5-6v-3h-5z" fill="currentColor" opacity="0.85" />
    </svg>
  )
}

export function FssaiGateIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      <rect x="5" y="14" width="4.5" height="22" rx="1.5" />
      <rect x="3" y="34" width="8.5" height="3" rx="1.2" />
      <circle cx="7.25" cy="18" r="3.2" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <rect x="8" y="16.5" width="28" height="5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <line x1="14" y1="17.5" x2="18" y2="20.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="22" y1="17.5" x2="26" y2="20.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="30" y1="17.5" x2="34" y2="20.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="27" cy="27" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
      <line x1="27" y1="21.5" x2="27" y2="24" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export function BadgeNamoduIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      <path d="M13 24l-3 13 6-3 4 2.2v-11" fill="currentColor" opacity="0.85" />
      <path d="M27 24l3 13-6-3-4 2.2v-11" fill="currentColor" opacity="0.85" />
      <circle cx="20" cy="15.5" r="12.5" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="20" cy="15.5" r="10" fill="none" stroke="currentColor" strokeWidth="1.3" strokeDasharray="2.5 1.8" />
      <polygon points="20,8.5 22.5,13.6 28,14.4 24,18.3 25,23.8 20,21.2 15,23.8 16,18.3 12,14.4 17.5,13.6" fill="currentColor" />
    </svg>
  )
}

export function PackhouseLocatorIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      <path d="M7 23l13-7 13 7v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V23z" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round" />
      <rect x="15.5" y="27" width="9" height="11" rx="1.5" />
      <rect x="9.5" y="27" width="4" height="4" rx="0.8" />
      <rect x="26.5" y="27" width="4" height="4" rx="0.8" />
      <path d="M20 2c-4.4 0-8 3.6-8 8 0 5.5 8 12.5 8 12.5s8-7 8-12.5c0-4.4-3.6-8-8-8z" fill="currentColor" />
      <circle cx="20" cy="10" r="2.8" fill="#FFFFFF" />
    </svg>
  )
}

export function PackingBoxIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Cube body */}
      <path d="M20 5L34 13v16L20 37 6 29V13L20 5z" />
      {/* Internal seams */}
      <line x1="20" y1="21" x2="20" y2="37" />
      <line x1="6" y1="13" x2="20" y2="21" />
      <line x1="34" y1="13" x2="20" y2="21" />
      {/* Packing tape strip across top face */}
      <line x1="12.5" y1="9.3" x2="26.5" y2="17.3" strokeWidth="2.2" />
      <line x1="16" y1="7.3" x2="30" y2="15.3" strokeWidth="2.2" />
      {/* Tape tab folding down front right face */}
      <path d="M26.5 17.3v5.5h3.5v-3.5z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function BadgePackhouseIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true">
      <path d="M13 24l-3 13 6-3 4 2.2v-11" fill="currentColor" opacity="0.85" />
      <path d="M27 24l3 13-6-3-4 2.2v-11" fill="currentColor" opacity="0.85" />
      <circle cx="20" cy="15.5" r="12.5" fill="none" stroke="currentColor" strokeWidth="2.6" />
      <circle cx="20" cy="15.5" r="10" fill="none" stroke="currentColor" strokeWidth="1.3" strokeDasharray="2.5 1.8" />
      <polygon points="20,8.5 22.5,13.6 28,14.4 24,18.3 25,23.8 20,21.2 15,23.8 16,18.3 12,14.4 17.5,13.6" fill="currentColor" />
    </svg>
  )
}

export function NablLabIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 5a3 3 0 0 1 3-3h12l7 7v11" />
      <path d="M25 2v7h7" />
      <path d="M22 35H13a3 3 0 0 1-3-3V5" />
      <line x1="15" y1="14" x2="25" y2="14" />
      <line x1="15" y1="19" x2="23" y2="19" />
      <line x1="15" y1="24" x2="20" y2="24" />
      <line x1="15" y1="29" x2="19" y2="29" />
      <circle cx="28.5" cy="27.5" r="5.5" strokeWidth="2.4" />
      <polygon points="28.5,24.5 29.5,26.8 32,27 30,28.8 30.6,31.2 28.5,29.8 26.4,31.2 27,28.8 25,27 27.5,26.8" fill="currentColor" stroke="none" />
      <path d="M26 33l-2 5 4-2" strokeWidth="2.2" />
      <path d="M31 33l2 5-4-2" strokeWidth="2.2" />
    </svg>
  )
}

export function FssaiSampleIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 4h8a2 2 0 0 1 2 2v2H14V6a2 2 0 0 1 2-2z" />
      <path d="M14 8H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h14" />
      <path d="M26 8h5a3 3 0 0 1 3 3v13" />
      <polyline points="10 16 12 18 15 14" strokeWidth="2.4" />
      <line x1="18" y1="16" x2="26" y2="16" />
      <polyline points="10 22 12 24 15 20" strokeWidth="2.4" />
      <line x1="18" y1="22" x2="23" y2="22" />
      <polyline points="10 28 12 30 15 26" strokeWidth="2.4" />
      <line x1="18" y1="28" x2="20" y2="28" />
      <circle cx="29" cy="29" r="6.5" strokeWidth="2.4" />
      <polyline points="26 29 28 31 32 26" strokeWidth="2.4" />
    </svg>
  )
}

export function CoaPhytosanitaryIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 5a3 3 0 0 1 3-3h12l7 7v10" />
      <path d="M24 2v7h7" />
      <path d="M21 35H12a3 3 0 0 1-3-3V5" />
      <line x1="14" y1="14" x2="23" y2="14" />
      <line x1="14" y1="19" x2="21" y2="19" />
      <line x1="14" y1="24" x2="19" y2="24" />
      <line x1="14" y1="29" x2="18" y2="29" />
      <path d="M28 18v5l-4.5 9a2 2 0 0 0 1.8 2.8h9.4a2 2 0 0 0 1.8-2.8L32 23v-5h-4z" strokeWidth="2.4" />
      <line x1="27" y1="18" x2="33" y2="18" strokeWidth="2.4" />
      <path d="M25.5 28.5h9" strokeWidth="2" />
    </svg>
  )
}

export function BuyerMatchIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="20" cy="13" r="5" />
      <path d="M12 33v-3a6 6 0 0 1 12 0v3" />
      <circle cx="10" cy="17" r="3.8" />
      <path d="M4 33v-2a4.5 4.5 0 0 1 7.2-3.6" />
      <circle cx="30" cy="17" r="3.8" />
      <path d="M28.8 27.4A4.5 4.5 0 0 1 36 31v2" />
    </svg>
  )
}

export function BsmSchedulerIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="13" y1="4" x2="13" y2="9" strokeWidth="2.8" />
      <line x1="27" y1="4" x2="27" y2="9" strokeWidth="2.8" />
      <rect x="7" y="7" width="26" height="26" rx="4" />
      <line x1="7" y1="14" x2="33" y2="14" strokeWidth="2.4" />
      <polygon points="20,18 21.6,22.2 26,22.4 22.5,25.2 23.7,29.5 20,27 16.3,29.5 17.5,25.2 14,22.4 18.4,22.2" strokeWidth="2.2" fill="currentColor" fillOpacity="0.15" />
    </svg>
  )
}

export function MoaSigningIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 5a3 3 0 0 1 3-3h11l7 7v7" />
      <path d="M24 2v7h7" />
      <path d="M22 35H13a3 3 0 0 1-3-3V5" />
      <line x1="14" y1="14" x2="22" y2="14" />
      <line x1="14" y1="19" x2="22" y2="19" />
      <line x1="14" y1="24" x2="19" y2="24" />
      <path d="M24 33l8-13 4 2.5-8 13-5 1.5 1-4z" strokeWidth="2.4" />
      <line x1="30" y1="23" x2="33" y2="25" strokeWidth="2" />
    </svg>
  )
}


export function CfcGradingIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="20" y1="5" x2="20" y2="34" />
      <line x1="13" y1="34" x2="27" y2="34" />
      <line x1="8" y1="10" x2="32" y2="10" />
      <path d="M8 10l-5 11a5 5 0 0 0 10 0z" />
      <path d="M32 10l-5 11a5 5 0 0 0 10 0z" />
    </svg>
  )
}

export function TracexQrIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="12" height="12" rx="2.5" />
      <rect x="24" y="4" width="12" height="12" rx="2.5" />
      <rect x="4" y="24" width="12" height="12" rx="2.5" />
      <rect x="8.5" y="8.5" width="3" height="3" rx="0.6" fill="currentColor" stroke="none" />
      <rect x="28.5" y="8.5" width="3" height="3" rx="0.6" fill="currentColor" stroke="none" />
      <rect x="8.5" y="28.5" width="3" height="3" rx="0.6" fill="currentColor" stroke="none" />
      {/* Linked trace nodes */}
      <circle cx="25.5" cy="25.5" r="2.6" />
      <circle cx="33" cy="33" r="2.6" />
      <line x1="27.4" y1="27.4" x2="31.1" y2="31.1" />
    </svg>
  )
}

export function SampleDispatchIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="9" width="20" height="17" rx="2" />
      <path d="M23 14h7.5l5.5 6.5V26H23" />
      <circle cx="10" cy="29" r="3.2" />
      <circle cx="29" cy="29" r="3.2" />
    </svg>
  )
}

export function ChaChecklistIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="8" y="6" width="24" height="30" rx="3.5" />
      <rect x="15" y="3" width="10" height="6" rx="1.5" />
      <path d="M13 18l2.2 2.2L19 16.5" />
      <line x1="22.5" y1="18.5" x2="27" y2="18.5" />
      <path d="M13 27l2.2 2.2L19 25.5" />
      <line x1="22.5" y1="27.5" x2="27" y2="27.5" />
    </svg>
  )
}

export function ShippingBillIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 24h32l-4.5 8.6a2 2 0 0 1-1.8 1.1H10.3a2 2 0 0 1-1.8-1.1z" />
      <path d="M9 24v-7h22v7" />
      <path d="M15 17v-6h10v6" />
      <line x1="20" y1="11" x2="20" y2="5" />
    </svg>
  )
}

export function FircUploadIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 4h13l8 8v21a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" />
      <path d="M23 4v8h8" />
      <path d="M19 30V18M14 23l5-5 5 5" />
    </svg>
  )
}

export function PlatinumCrownIcon({ className, style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 29L4 11l9 7 7-11 7 11 9-7-2 18z" />
      <line x1="7" y1="34.5" x2="33" y2="34.5" />
    </svg>
  )
}
