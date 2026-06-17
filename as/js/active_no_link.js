document.querySelectorAll('a[href]').forEach(function(link) {
  if (link.href === location.href || link.href === location.origin + location.pathname) {
    link.classList.add('is-current');
    link.setAttribute('aria-disabled', 'true');
    link.style.pointerEvents = 'none';
    link.style.color = "rgba(19, 102, 161, .6)";
  }
});