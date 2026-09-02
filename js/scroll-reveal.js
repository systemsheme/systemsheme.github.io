/*
 * Scroll reveal — fades & lifts tiles/cards into view as they scroll into
 * focus (MIT-homepage style). Progressive enhancement: if IntersectionObserver
 * is unavailable or the user prefers reduced motion, everything shows normally.
 */
(function () {
  var SELECTOR = [
    '.contact-tile',
    '.clinic-card',
    '.cs-card',
    '.pub-card',
    '.res-card',
    '.rp-card',
    '.tm-card',
    '.research-feature',
    '.research-float-figure',
    '.fund-cell'
  ].join(',');

  function init() {
    var els = Array.prototype.slice.call(document.querySelectorAll(SELECTOR));
    if (!els.length) return;

    var reduce = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('reveal', 'is-visible'); });
      return;
    }

    // Stagger siblings that share a parent so grids cascade in.
    var counts = new WeakMap();
    els.forEach(function (el) {
      el.classList.add('reveal');
      var parent = el.parentNode;
      var i = counts.get(parent) || 0;
      counts.set(parent, i + 1);
      el.style.transitionDelay = Math.min(i, 6) * 80 + 'ms';
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach(function (el) { observer.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
