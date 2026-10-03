/**
 * KYJ — entry script for screen pages.
 * Load order: data/screens.js → components/app-shell.js → main.js
 */
(function (KYJ) {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    if (typeof KYJ.initAppShell === "function") {
      KYJ.initAppShell();
    }
  });
})((window.KYJ = window.KYJ || {}));
