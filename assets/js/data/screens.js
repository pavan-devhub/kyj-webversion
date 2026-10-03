/**
 * KYJ screen registry — the single source of truth for navigation.
 * Used by the app shell (sidebar, top bar, pager) on every screen.
 * Order here = journey order (prev / next).
 */
(function (KYJ) {
  "use strict";

  KYJ.stages = [
    { id: 0, name: "EPM & Onboarding" },
    { id: 1, name: "Farm Ready" },
    { id: 2, name: "Registered" },
    { id: 3, name: "Packhouse" },
    { id: 4, name: "Quality" },
    { id: 5, name: "Buyer" },
    { id: 6, name: "Sample" },
    { id: 7, name: "FIRC ★" },
    { id: 8, name: "KYJ-1 Certified" }
  ];

  KYJ.screens = [
    { id: "1",   stage: 0, title: "EPM QR Landing",                accent: "#1d6b3e" },
    { id: "2",   stage: 0, title: "FEED CARD Basic Issued",        accent: "#2e7d32" },
    { id: "3",   stage: 0, title: "Farmer Consent Agreement",      accent: "#0d47a1" },
    { id: "4",   stage: 0, title: "Export Readiness Score",        accent: "#4a148c" },
    { id: "5",   stage: 1, title: "Farm Plot GPS Registration",    accent: "#2e7d32" },
    { id: "6",   stage: 1, title: "GAP Activity Log",              accent: "#2e7d32" },
    { id: "7",   stage: 1, title: "EU MRL Alert",                  accent: "#b71c1c" },
    { id: "8",   stage: 1, title: "Soil Health Card Upload",       accent: "#4e342e" },
    { id: "8a",  stage: 1, title: "Stage 1 Badge · Polam Siddham", accent: "#1b5e20", badge: true },
    { id: "9",   stage: 2, title: "IEC Registration",              accent: "#0d47a1" },
    { id: "10",  stage: 2, title: "APEDA RCMC",                    accent: "#1a237e" },
    { id: "11",  stage: 2, title: "FSSAI Stage 2 Gate",            accent: "#283593" },
    { id: "11a", stage: 2, title: "Stage 2 Badge · Namodu",        accent: "#0d47a1", badge: true },
    { id: "12",  stage: 3, title: "Packhouse Locator",             accent: "#e65100" },
    { id: "13",  stage: 3, title: "Packing & Labelling",           accent: "#bf360c" },
    { id: "13a", stage: 3, title: "Stage 3 Badge · PackHouse",     accent: "#bf360c", badge: true },
    { id: "14",  stage: 4, title: "NABL Lab Booking",              accent: "#004d40" },
    { id: "15",  stage: 4, title: "PHRT Sample Result",            accent: "#1b5e20" },
    { id: "16",  stage: 4, title: "COA · Phytosanitary · Stage 4 Badge", accent: "#006064", badge: true },
    { id: "17",  stage: 5, title: "VISWARUPAM Buyer Match",        accent: "#1a237e" },
    { id: "s18", stage: 5, title: "BSM Scheduler",                 accent: "#283593" },
    { id: "s19", stage: 5, title: "MoA Signing · Stage 5 Badge",   accent: "#1a237e", badge: true },
    { id: "s20", stage: 6, title: "CFC Intake & Grading",          accent: "#5d4037" },
    { id: "s21", stage: 6, title: "TraceX QR Creation",            accent: "#311b92" },
    { id: "22",  stage: 6, title: "Sample Dispatch",               accent: "#01579b" },
    { id: "22a", stage: 6, title: "Stage 6 Badge · Namuna",        accent: "#01579b", badge: true },
    { id: "23",  stage: 7, title: "CHA Assignment · 12-Doc Checklist", accent: "#0d2147" },
    { id: "24",  stage: 7, title: "Shipping Bill · ICEGATE",       accent: "#00695c" },
    { id: "25",  stage: 7, title: "FIRC Upload · Two-Track",       accent: "#1b5e20" },
    { id: "27",  stage: 8, title: "KYJ-1 Platinum Certification",  accent: "#37474f", badge: true }
  ];

  KYJ.screens.forEach(function (s, i) {
    s.file = s.id + ".html";
    s.index = i;
  });
})((window.KYJ = window.KYJ || {}));
