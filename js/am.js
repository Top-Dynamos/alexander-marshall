(function () {
  var y = document.getElementById('am-yr');
  if (y) y.textContent = new Date().getFullYear();

  /* header offset for in-page anchors, so a heading does not land under the sticky bar */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1);
      if (!id) return;
      var t = document.getElementById(id);
      if (!t) return;
      e.preventDefault();
      var head = document.querySelector('.am-head');
      var off = head ? head.getBoundingClientRect().height : 0;
      var top = t.getBoundingClientRect().top + window.pageYOffset - off - 8;
      var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: top, behavior: reduce ? 'auto' : 'smooth' });
      history.replaceState(null, '', '#' + id);
    });
  });
})();
