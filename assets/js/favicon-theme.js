(function () {
  function setFavicon(isDark) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'shortcut icon';
      document.head.appendChild(link);
    }
    link.href = isDark
      ? 'assets/images/darkFav.png'
      : 'assets/images/lightFav.png';
  }

  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  setFavicon(mq.matches);
  mq.addEventListener('change', function (e) {
    setFavicon(e.matches);
  });
})();
