(function () {
  try {
    if (localStorage.getItem('zewix_theme') === 'dark') {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  } catch (e) {
    document.body.classList.add('light-theme');
  }
})();