/**
 * App shell — renders the sidebar, top bar and pager for a screen page.
 *
 * Expects on the page:
 *   <body data-screen="4">
 *   <aside data-sidebar>, <header data-topbar>, <nav data-pager>
 * Requires assets/js/data/screens.js to be loaded first.
 * Classic script (no ES modules) so pages also work from file://.
 */
(function (KYJ) {
  "use strict";

  var ICONS = {
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    prev: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h10"/></svg>',
    arrowLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
  };

  var INDEX_URL = "../index.html";

  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function renderSidebar(el, current) {
    var groups = KYJ.stages.map(function (stage) {
      var items = KYJ.screens.filter(function (s) { return s.stage === stage.id; });
      var isCurrentStage = current && current.stage === stage.id;
      var links = items.map(function (s) {
        var active = current && s.id === current.id;
        return (
          '<a class="nav-link' + (active ? " is-active" : "") + '" href="' + s.file + '"' +
          (active ? ' aria-current="page"' : "") + ">" +
          '<span class="nav-link__id">' + esc(s.id) + "</span>" +
          "<span>" + esc(s.title) + "</span>" +
          '<span class="nav-link__dot" style="--dot:' + s.accent + '"></span>' +
          "</a>"
        );
      }).join("");

      return (
        '<div class="nav-stage' + (isCurrentStage ? " is-current" : "") + '">' +
        '<div class="nav-stage__head"><span class="nav-stage__num">' + stage.id + "</span>" +
        "Stage " + stage.id + " · " + esc(stage.name) + "</div>" +
        links +
        "</div>"
      );
    }).join("");

    el.innerHTML =
      '<a class="sidebar__brand" href="' + INDEX_URL + '">' +
      '<img class="sidebar__logo" src="../assets/icons/logo.svg" alt="" width="40" height="40">' +
      '<span class="sidebar__wordmark"><strong>KYJ</strong><span>Krushi Yeva Jayate · Screens</span></span>' +
      "</a>" +
      '<a class="sidebar__home" href="' + INDEX_URL + '">' + ICONS.grid + "All screens</a>" +
      '<nav class="sidebar__nav" aria-label="Screens by stage">' + groups + "</nav>" +
      '<div class="sidebar__foot">' + KYJ.screens.length + " screens · " + KYJ.stages.length + " stages</div>";

    // Keep the active link in view. Scroll only the nav (never the window),
    // and wait for stylesheets so the measurement uses the final layout.
    var nav = el.querySelector(".sidebar__nav");
    var active = el.querySelector(".nav-link.is-active");
    if (nav && active) {
      var centre = function () {
        var offset = active.getBoundingClientRect().top - nav.getBoundingClientRect().top + nav.scrollTop;
        nav.scrollTop = Math.max(0, offset - nav.clientHeight / 2 + active.offsetHeight / 2);
      };
      if (document.readyState === "complete") {
        centre();
      } else {
        window.addEventListener("load", centre);
      }
    }
  }

  function renderTopbar(el, current, prev, next) {
    var stage = current ? KYJ.stages[current.stage] : null;
    var total = KYJ.screens.length;

    el.innerHTML =
      '<button class="topbar__menu" type="button" aria-label="Open navigation" data-nav-toggle>' + ICONS.menu + "</button>" +
      '<div class="crumbs">' +
      '<a class="crumbs__home" href="' + INDEX_URL + '">Screens</a>' +
      (stage ? '<span class="crumbs__sep">/</span><span class="crumbs__home">Stage ' + stage.id + " · " + esc(stage.name) + "</span>" : "") +
      '<span class="crumbs__sep">/</span>' +
      (current ? '<span class="crumbs__current"><span class="crumbs__badge">' + esc(current.file) + "</span><span>" + esc(current.title) + "</span></span>" : "") +
      "</div>" +
      '<div class="topbar__spacer"></div>' +
      (current ? '<span class="topbar__count">' + (current.index + 1) + " / " + total + "</span>" : "") +
      '<div class="topbar__nav">' +
      navButton(prev, "Previous screen", ICONS.prev) +
      navButton(next, "Next screen", ICONS.next) +
      "</div>" +
      '<a class="topbar__all" href="' + INDEX_URL + '">' + ICONS.grid + "<span>All screens</span></a>";
  }

  function navButton(target, label, icon) {
    if (!target) {
      return '<span class="icon-btn" aria-disabled="true" aria-label="' + label + '">' + icon + "</span>";
    }
    return (
      '<a class="icon-btn" href="' + target.file + '" aria-label="' + label + ": " + esc(target.title) +
      '" title="' + esc(target.file + " · " + target.title) + '">' + icon + "</a>"
    );
  }

  function renderPager(el, prev, next) {
    function card(target, dir) {
      if (!target) {
        return '<span class="pager__placeholder"></span>';
      }
      var isNext = dir === "next";
      var arrow = '<span class="pager__arrow">' + (isNext ? ICONS.arrowRight : ICONS.arrowLeft) + "</span>";
      var text =
        "<span>" +
        '<span class="pager__label">' + (isNext ? "Next" : "Previous") + "</span>" +
        '<span class="pager__title"><span class="mono">' + esc(target.file) + "</span> · " + esc(target.title) + "</span>" +
        "</span>";
      return (
        '<a class="pager__link pager__link--' + dir + '" href="' + target.file + '">' +
        (isNext ? text + arrow : arrow + text) +
        "</a>"
      );
    }
    el.innerHTML = card(prev, "prev") + card(next, "next");
  }

  function wireDrawer() {
    var scrim = document.createElement("div");
    scrim.className = "scrim";
    scrim.setAttribute("data-nav-close", "");
    document.body.appendChild(scrim);

    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-nav-toggle]")) {
        document.body.classList.toggle("nav-open");
      } else if (e.target.closest("[data-nav-close]")) {
        document.body.classList.remove("nav-open");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.body.classList.remove("nav-open");
      }
    });
  }

  function wireKeyboard(prev, next) {
    document.addEventListener("keydown", function (e) {
      var tag = (e.target.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }
      if (e.key === "ArrowLeft" && prev) {
        window.location.href = prev.file;
      } else if (e.key === "ArrowRight" && next) {
        window.location.href = next.file;
      }
    });
  }

  KYJ.initAppShell = function () {
    if (!KYJ.screens) {
      return;
    }
    var id = document.body.getAttribute("data-screen");
    var current = null;
    KYJ.screens.forEach(function (s) {
      if (s.id === id) {
        current = s;
      }
    });
    var prev = current ? KYJ.screens[current.index - 1] : null;
    var next = current ? KYJ.screens[current.index + 1] : null;

    var sidebar = document.querySelector("[data-sidebar]");
    var topbar = document.querySelector("[data-topbar]");
    var pager = document.querySelector("[data-pager]");

    if (sidebar) renderSidebar(sidebar, current);
    if (topbar) renderTopbar(topbar, current, prev, next);
    if (pager) renderPager(pager, prev, next);

    wireDrawer();
    wireKeyboard(prev, next);
  };
})((window.KYJ = window.KYJ || {}));
