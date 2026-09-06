/*
 * Dark-mode toggle. The initial theme is applied before paint by an inline
 * script in head.html; this wires up the nav button and persists the choice.
 */
(function () {
  function init() {
    var btn = document.getElementById('themeToggle');
    if (!btn) return;

    // Which icon (moon/sun) is shown is handled by CSS via the `dark` class on <html>.
    function sync() {
      var dark = document.documentElement.classList.contains('dark');
      btn.setAttribute('aria-pressed', dark ? 'true' : 'false');
      btn.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
    }

    sync();
    btn.addEventListener('click', function () {
      var dark = document.documentElement.classList.toggle('dark');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      sync();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
