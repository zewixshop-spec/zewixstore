// ── Main page category bar — redirect + smooth center scroll ──
document.querySelectorAll('.cat-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    const bar = document.querySelector('.category-bar');

    // Smooth scroll — item center mein aaye
    bar.scrollTo({
      left: this.offsetLeft - (bar.offsetWidth / 2) + (this.offsetWidth / 2),
      behavior: 'smooth'
    });

    // Active class
    document.querySelectorAll('.cat-item').forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    // Redirect
    const cat = this.dataset.category;
    const map = {
      'all':         'categories/all-categories.html',
      'airpods':     'categories/airpods-headsets.html',
      'electronics': 'categories/electronics-appliances.html',
      'gadgets':     'categories/smart-gadgets.html',
      'watches':     'categories/smart-watches.html',
      'Kitchen':     'categories/home-kitchen.html',
      'kids':        'categories/kids-gaming.html',
      'studio':      'categories/content-studio.html',
    };

    if (map[cat]) {
      setTimeout(() => { window.location.href = map[cat]; }, 180);
    }
  });
});
