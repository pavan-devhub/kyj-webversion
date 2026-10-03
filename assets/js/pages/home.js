/**
 * Home (index.html) — live search + stage filter for the screen launcher.
 * Progressive enhancement: without JS every screen button is still visible.
 */
(function () {
  "use strict";

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var input = document.querySelector("[data-search]");
    var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
    var groups = Array.prototype.slice.call(document.querySelectorAll(".stage-group"));
    var empty = document.querySelector("[data-empty]");
    var activeFilter = "all";

    function normalise(str) {
      return String(str).toLowerCase().replace(/\s+/g, " ").trim();
    }

    // Pre-compute search text for each button: file name + title + stage
    groups.forEach(function (group) {
      var stage = group.getAttribute("data-stage");
      group.querySelectorAll(".screen-btn").forEach(function (btn) {
        var text = btn.textContent + " stage " + stage + (btn.classList.contains("is-badge") ? " badge" : "");
        btn.setAttribute("data-text", normalise(text));
      });
    });

    function apply() {
      var q = normalise(input ? input.value : "");
      var shown = 0;

      groups.forEach(function (group) {
        var stage = group.getAttribute("data-stage");
        var stageMatch = activeFilter === "all" || activeFilter === "badge" || activeFilter === stage;
        var visibleInGroup = 0;

        group.querySelectorAll(".screen-btn").forEach(function (btn) {
          var ok = stageMatch;
          if (ok && activeFilter === "badge") ok = btn.classList.contains("is-badge");
          if (ok && q) {
            // exact file id match first (e.g. "8a"), otherwise substring search
            var id = normalise(btn.querySelector(".screen-btn__id").textContent);
            ok = id === q || id + ".html" === q || btn.getAttribute("data-text").indexOf(q) !== -1;
          }
          btn.hidden = !ok;
          if (ok) visibleInGroup++;
        });

        group.hidden = visibleInGroup === 0;
        shown += visibleInGroup;
      });

      if (empty) empty.hidden = shown !== 0;
    }

    if (input) {
      input.addEventListener("input", apply);
      document.addEventListener("keydown", function (e) {
        if (e.key === "/" && document.activeElement !== input) {
          e.preventDefault();
          input.focus();
        } else if (e.key === "Escape" && document.activeElement === input) {
          input.value = "";
          apply();
          input.blur();
        }
      });
    }

    filters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        activeFilter = btn.getAttribute("data-filter");
        filters.forEach(function (b) {
          b.classList.toggle("is-active", b === btn);
          b.setAttribute("aria-pressed", b === btn ? "true" : "false");
        });
        apply();
      });
    });
  });
})();
