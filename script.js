/* ═══════════════════════════════════════════════════════════
   ZEWIX STORE — script.js  (Scroll Fixed)
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const WHATSAPP = '923146450255';

  let cart     = [];
  let wishlist = [];
  let currentProduct = null;
  let pendingOrder = null;

  try { cart     = JSON.parse(localStorage.getItem('zewix_cart'))     || []; } catch(e){}
  try { wishlist = JSON.parse(localStorage.getItem('zewix_wishlist')) || []; } catch(e){}

  function saveCart()     { try { localStorage.setItem('zewix_cart',     JSON.stringify(cart));     } catch(e){} }
  function saveWishlist() { try { localStorage.setItem('zewix_wishlist', JSON.stringify(wishlist)); } catch(e){} }

  const CATEGORIES = [
    { key: 'airpods-headsets',  label: '🎧 Airpods & Headsets'        },
    { key: 'electronics',       label: '⚡ Electronics & Appliances'   },
    { key: 'smart-gadgets',     label: '🔧 Smart Gadgets'              },
    { key: 'smart-watches',     label: '⌚ Smart Watches'              },
    { key: 'power-banks',       label: '🔋 Power Banks'                },
    { key: 'home-kitchen',      label: '🏠 Home, Kitchen & Lifestyle'  },
    { key: 'kids-gaming',       label: '🎮 Kids & Gaming'              },
    { key: 'studio',            label: '🎙️ Studio'                     },
  ];

  const IMG_PLACEHOLDER = 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="160" viewBox="0 0 200 160"><rect fill="%23dce8f8" width="200" height="160"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%230a2454" font-family="sans-serif" font-size="13">No Image</text></svg>'
  );

  const CAT_BAR_ITEMS = [{ key: 'all', label: 'All Categories' }, ...CATEGORIES];

  /* ══════════ CATEGORY BAR ══════════ */
  function buildCategoryBar() {
    const bar = document.getElementById('categoryBar');
    if (!bar) return;
    bar.innerHTML = '';
    CAT_BAR_ITEMS.forEach((cat, i) => {
      const a = document.createElement('a');
      a.className = 'cat-item' + (cat.key === 'all' ? ' active' : '');
      a.dataset.category = cat.key;
      a.href = '#products';
      a.textContent = cat.label;
      bar.appendChild(a);
      if (i < CAT_BAR_ITEMS.length - 1) {
        const d = document.createElement('div');
        d.className = 'cat-divider';
        bar.appendChild(d);
      }
    });
  }

  /* ══════════ PRODUCT CARD ══════════ */
  function createScrollCard(p) {
    const card = document.createElement('article');
    card.className = 'product-card scroll-card';
    card.dataset.name        = p.name;
    card.dataset.price       = p.salePrice || p.price;
    card.dataset.image       = p.image;
    card.dataset.description = p.description;
    card.dataset.features    = Array.isArray(p.features) ? p.features.join(',') : (p.features || '');
    card.dataset.category    = p.category;
    if (p.salePrice) card.dataset.salePrice = p.salePrice;

    const inWish = wishlist.some(w => w.name === p.name);
    const displayPrice = p.salePrice
      ? `<span class="price" style="color:#ff6060">${p.salePrice}</span> <span style="font-size:11px;text-decoration:line-through;opacity:0.5">${p.price}</span>`
      : `<span class="price">${p.price}</span>`;

    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${IMG_PLACEHOLDER}'" />
      <h3>${p.name}</h3>
      <div class="price-wrap">${displayPrice}</div>
      <div class="card-actions">
        <button class="btn btn-outline buy-btn">Buy Now</button>
        <button class="btn card-cart-btn add-to-cart-btn" aria-label="Add to cart">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </button>
        <button class="btn card-cart-btn wishlist-card-btn" aria-label="Wishlist"
          style="color:${inWish ? '#e84393' : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="${inWish ? '#e84393' : 'none'}"
            stroke="${inWish ? '#e84393' : 'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>`;
    return card;
  }

  /* ══════════ RENDER ALL PRODUCTS ══════════ */
  function renderAllProductsSection() {
    const container = document.getElementById('productGrid');
    if (!container || typeof ALL_PRODUCTS === 'undefined') return;
    container.innerHTML = '';
    container.style.display = 'block';

    CATEGORIES.forEach(cat => {
      const catProducts = ALL_PRODUCTS.filter(p => p.category === cat.key);
      if (!catProducts.length) return;

      const section = document.createElement('div');
      section.className = 'cat-row-section';
      section.id = 'cat-section-' + cat.key;

      const header = document.createElement('div');
      header.className = 'cat-row-header';
      header.innerHTML = `
        <h3 class="cat-row-title">${cat.label}</h3>
        <button class="btn btn-outline cat-view-all-btn" data-category="${cat.key}">View All</button>`;
      section.appendChild(header);

      const row = document.createElement('div');
      row.className = 'products-scroll-row';
      catProducts.forEach(p => row.appendChild(createScrollCard(p)));
      section.appendChild(row);
      container.appendChild(section);
    });
    initAllAutoScrollRows();
  }

  /* ══════════ VIEW ALL MODAL ══════════ */
  function openViewAllModal(catKey) {
    closeAllModals();
    const cat   = CATEGORIES.find(c => c.key === catKey);
    const modal = document.getElementById('viewAllModal');
    const title = document.getElementById('viewAllTitle');
    const grid  = document.getElementById('viewAllGrid');
    if (!modal || !grid) return;
    title.textContent = cat ? cat.label : 'All Products';
    grid.innerHTML = '';
    ALL_PRODUCTS.filter(p => p.category === catKey).forEach(p => grid.appendChild(createScrollCard(p)));
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    // Init auto-scroll for any scroll-rows inside viewAll grid
    grid.querySelectorAll('.products-scroll-row').forEach((row, i) => setupAutoScrollRow(row, i));
  }
  function closeViewAllModal() {
    const modal = document.getElementById('viewAllModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    const productOpen = document.getElementById('productModal')?.classList.contains('open');
    const cartOpen    = document.getElementById('cartModal')?.classList.contains('open');
    const wishOpen    = document.getElementById('wishlistModal')?.classList.contains('open');
    const checkOpen   = document.getElementById('checkoutModal')?.classList.contains('open');
    if (!productOpen && !cartOpen && !wishOpen && !checkOpen) document.body.style.overflow = '';
  }

  /* ══════════ MOST POPULAR ══════════ */
  function renderMostPopular() {
    const row   = document.getElementById('popularRow');
    const empty = document.getElementById('popularEmpty');
    if (!row || typeof ALL_PRODUCTS === 'undefined') return;
    const products = ALL_PRODUCTS.filter(p => p.popular);
    if (!products.length) { if (empty) empty.style.display = ''; return; }
    if (empty) empty.style.display = 'none';
    products.forEach(p => row.appendChild(createScrollCard(p)));
    initAllAutoScrollRows();
  }

  /* ══════════ TOP SELLING ══════════ */
  function renderTopSelling() {
    const row   = document.getElementById('topSellingRow');
    const empty = document.getElementById('topSellingEmpty');
    if (!row || typeof ALL_PRODUCTS === 'undefined') return;
    const products = ALL_PRODUCTS.filter(p => p.topSelling);
    if (!products.length) { if (empty) empty.style.display = ''; return; }
    if (empty) empty.style.display = 'none';
    products.forEach(p => row.appendChild(createScrollCard(p)));
    initAllAutoScrollRows();
  }

  /* ══════════ MEGA SALE ══════════ */
  function renderSaleGrid() {
    const saleGrid  = document.getElementById('saleGrid');
    const saleEmpty = document.getElementById('saleEmpty');
    if (!saleGrid || typeof ALL_PRODUCTS === 'undefined') return;
    const saleProducts = ALL_PRODUCTS.filter(p => p.salePrice);
    if (!saleProducts.length) { if (saleEmpty) saleEmpty.style.display = ''; return; }
    if (saleEmpty) saleEmpty.style.display = 'none';
    saleProducts.forEach(p => {
      const card = document.createElement('div');
      card.className = 'sale-card';
      card.dataset.name        = p.name;
      card.dataset.price       = p.salePrice;
      card.dataset.image       = p.image;
      card.dataset.description = p.description;
      card.dataset.features    = Array.isArray(p.features) ? p.features.join(',') : (p.features || '');
      card.dataset.category    = p.category || ''; // FIX: missing category on sale cards
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        <div class="sale-card-info">
          <h3>${p.name}</h3>
          <span class="sale-price">${p.salePrice}</span>
          <span class="original-price">${p.price}</span>
          <button class="btn btn-primary buy-btn">Buy Now</button>
        </div>`;
      saleGrid.appendChild(card);
    });
  }

  /* ══════════ CATEGORY SWITCHING ══════════ */
  function switchCategory(key) {
    document.querySelectorAll('.cat-item').forEach(el =>
      el.classList.toggle('active', el.dataset.category === key));
    const headerH = document.querySelector('.site-header')?.offsetHeight || 0;
    if (key === 'all') {
      const s = document.getElementById('products');
      if (s) window.scrollTo({ top: s.getBoundingClientRect().top + window.scrollY - headerH - 16, behavior: 'smooth' });
    } else {
      const s = document.getElementById('cat-section-' + key);
      if (s) window.scrollTo({ top: s.getBoundingClientRect().top + window.scrollY - headerH - 16, behavior: 'smooth' });
    }
  }

  /* ══════════ CLOSE ALL MODALS ══════════ */
  function closeAllModals() {
    // Close product modal
    const pm = document.getElementById('productModal');
    if (pm) { pm.classList.remove('open'); pm.setAttribute('aria-hidden','true'); pm.style.zIndex = ''; }
    // Close viewAll modal
    const va = document.getElementById('viewAllModal');
    if (va) { va.classList.remove('open'); va.setAttribute('aria-hidden','true'); }
    // Close cart modal
    const cm = document.getElementById('cartModal');
    if (cm) { cm.classList.remove('open'); cm.setAttribute('aria-hidden','true'); }
    // Close wishlist modal
    const wm = document.getElementById('wishlistModal');
    if (wm) { wm.classList.remove('open'); wm.setAttribute('aria-hidden','true'); }
    // Close checkout modal
    const co = document.getElementById('checkoutModal');
    if (co) { co.classList.remove('open'); co.setAttribute('aria-hidden','true'); }
    currentProduct = null;
    pendingOrder = null;
    document.body.style.overflow = '';
  }

  /* ══════════ PRODUCT MODAL ══════════ */
  function openModal(p) {
    // Close all other modals first
    closeAllModals();
    currentProduct = p;
    const modal = document.getElementById('productModal');
    if (!modal) return;
    document.getElementById('modalImage').src               = p.image;
    document.getElementById('modalImage').alt               = p.name;
    document.getElementById('modalTitle').textContent       = p.name;
    document.getElementById('modalDescription').textContent = p.description;
    const priceEl = document.getElementById('modalPrice');
    if (priceEl) {
      if (p.salePrice && p.price) {
        priceEl.innerHTML = `<span style="color:#ff6060">${p.salePrice}</span> <span style="font-size:0.85em;text-decoration:line-through;opacity:0.55;margin-left:6px">${p.price}</span>`;
      } else {
        priceEl.textContent = p.salePrice || p.price || '';
      }
    }
    const qty = document.getElementById('quantity');
    if (qty) qty.value = 1;
    const featDiv = document.getElementById('modalFeatures');
    if (featDiv) {
      featDiv.innerHTML = '';
      const feats = typeof p.features === 'string' ? p.features.split(',') : (p.features || []);
      feats.forEach(f => { const s = document.createElement('span'); s.className = 'badge'; s.textContent = f.trim(); featDiv.appendChild(s); });
    }
    const inWish = wishlist.some(w => w.name === p.name);
    const wBtn = document.getElementById('modalWishlistBtn');
    if (wBtn) {
      const path = wBtn.querySelector('svg path');
      wBtn.style.color = inWish ? '#e84393' : '';
      if (path) { path.setAttribute('fill', inWish ? '#e84393' : 'none'); path.setAttribute('stroke', inWish ? '#e84393' : 'currentColor'); }
    }
    const viewAll = document.getElementById('viewAllModal');
    modal.style.zIndex = (viewAll && viewAll.classList.contains('open')) ? '99999' : '';
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('open');
    modal.style.zIndex = '';
    const viewAll   = document.getElementById('viewAllModal');
    const cartOpen  = document.getElementById('cartModal')?.classList.contains('open');
    const wishOpen  = document.getElementById('wishlistModal')?.classList.contains('open');
    const checkOpen = document.getElementById('checkoutModal')?.classList.contains('open');
    const viewOpen  = viewAll?.classList.contains('open');
    if (!cartOpen && !wishOpen && !checkOpen && !viewOpen) document.body.style.overflow = '';
    currentProduct = null;
  }

  function getCardData(card) {
    return {
      name: card.dataset.name,
      price: card.dataset.price,
      salePrice: card.dataset.salePrice || null,
      image: card.dataset.image,
      description: card.dataset.description,
      features: card.dataset.features,
    };
  }

  function findProductByName(name) {
    return typeof ALL_PRODUCTS !== 'undefined' ? ALL_PRODUCTS.find(p => p.name === name) : null;
  }

  /* ══════════ CART ══════════ */
  function updateCartCount() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    ['cartCount','bottomCartCount'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = total; });
  }
  function renderCartModal() {
    const itemsDiv = document.getElementById('cartItems');
    const footer   = document.getElementById('cartFooter');
    const emptyEl  = document.getElementById('cartEmpty');
    const totalEl  = document.getElementById('cartTotalPrice');
    if (!itemsDiv) return;
    itemsDiv.querySelectorAll('.cart-item').forEach(el => el.remove());
    if (!cart.length) { if (emptyEl) emptyEl.style.display = ''; if (footer) footer.style.display = 'none'; return; }
    if (emptyEl) emptyEl.style.display = 'none';
    if (footer) footer.style.display = '';
    let total = 0;
    cart.forEach((item, idx) => {
      const num = parseInt(item.price) || 0; total += num * item.qty;
      const div = document.createElement('div'); div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:56px;height:56px;object-fit:cover;border-radius:8px;flex-shrink:0"/>
        <div style="flex:1;min-width:0">
          <p style="font-size:13px;font-weight:600;margin:0 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item.name}</p>
          <p class="cart-item-sub">${item.price} × ${item.qty}</p>
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <button data-idx="${idx}" class="cqd cart-qty-btn">−</button>
          <span style="min-width:18px;text-align:center;font-size:13px;color:inherit">${item.qty}</span>
          <button data-idx="${idx}" class="cqi cart-qty-btn">+</button>
          <button data-idx="${idx}" class="cqr cart-remove-btn">✕</button>
        </div>`;
      itemsDiv.appendChild(div);
    });
    if (totalEl) totalEl.textContent = total.toLocaleString() + ' PKR';
  }
  function openCartModal()  { closeAllModals(); renderCartModal(); const m = document.getElementById('cartModal'); if (m) { m.classList.add('open'); m.setAttribute('aria-hidden','false'); } document.body.style.overflow = 'hidden'; }
  function closeCartModal() { const m = document.getElementById('cartModal'); if (m) { m.classList.remove('open'); m.setAttribute('aria-hidden','true'); } document.body.style.overflow = ''; }

  /* ══════════ WISHLIST ══════════ */
  function updateWishlistCount() {
    ['wishlistCount','bottomWishlistCount'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = wishlist.length; });
  }
  function renderWishlistModal() {
    const itemsDiv = document.getElementById('wishlistItems');
    const footer   = document.getElementById('wishlistFooter');
    const totalEl  = document.getElementById('wishlistTotalCount');
    if (!itemsDiv) return;
    itemsDiv.querySelectorAll('.cart-item').forEach(el => el.remove());
    const emptyEl = itemsDiv.querySelector('.cart-empty');
    if (!wishlist.length) { if (emptyEl) emptyEl.style.display = ''; if (footer) footer.style.display = 'none'; return; }
    if (emptyEl) emptyEl.style.display = 'none';
    if (footer) footer.style.display = '';
    if (totalEl) totalEl.textContent = wishlist.length;
    wishlist.forEach((item, idx) => {
      const div = document.createElement('div'); div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:56px;height:56px;object-fit:cover;border-radius:8px;flex-shrink:0"/>
        <div style="flex:1;min-width:0">
          <p style="font-size:13px;font-weight:600;margin:0 0 2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${item.name}</p>
          <p class="cart-item-sub">${item.price}</p>
        </div>
        <button data-idx="${idx}" class="wqr cart-remove-btn wish">✕</button>`;
      itemsDiv.appendChild(div);
    });
  }
  function openWishlistModal()  { closeAllModals(); renderWishlistModal(); const m = document.getElementById('wishlistModal'); if (m) { m.classList.add('open'); m.setAttribute('aria-hidden','false'); } document.body.style.overflow = 'hidden'; }
  function closeWishlistModal() { const m = document.getElementById('wishlistModal'); if (m) { m.classList.remove('open'); m.setAttribute('aria-hidden','true'); } document.body.style.overflow = ''; }

  /* ══════════ TOASTS ══════════ */
  function toast(type, msg) {
    const id    = type === 'cart' ? 'cartToast'    : 'wishlistToast';
    const msgId = type === 'cart' ? 'cartToastMsg' : 'wishlistToastMsg';
    const t = document.getElementById(id); const m = document.getElementById(msgId);
    if (!t || !m) return;
    m.textContent = msg; t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
  }

  /* ══════════ WHATSAPP — Professional Order System ══════════ */
  function sendWA(msg) {
    window.open('https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  }

  function parsePKR(str) {
    return parseInt(String(str || '').replace(/[^\d]/g, ''), 10) || 0;
  }

  function formatPKR(amount) {
    return 'Rs. ' + Number(amount).toLocaleString('en-PK');
  }

  function absImageUrl(url) {
    if (!url) return '';
    if (/^https?:\/\//i.test(url) || url.startsWith('data:')) return url;
    try {
      return new URL(url, window.location.href).href;
    } catch (e) {
      return url;
    }
  }

  function orderId() {
    return 'ZW-' + Date.now().toString().slice(-6);
  }

  function enrichItem(item) {
    const full = findProductByName(item.name);
    return {
      name: item.name,
      price: item.price,
      originalPrice: full?.salePrice ? full.price : (item.originalPrice || null),
      image: item.image || full?.image || '',
      qty: item.qty || 1,
    };
  }

  function buildProfessionalOrder(items, customer, orderType) {
    const SEP = '--------------------';
    const id = orderId();
    const now = new Date().toLocaleString('en-PK', { dateStyle: 'medium', timeStyle: 'short' });
    const typeLabel = orderType === 'cart' ? 'CART ORDER' : orderType === 'wishlist' ? 'WISHLIST ORDER' : 'NEW ORDER';

    const lines = [
      'ZEWIX STORE',
      'All Categories | Pakistan',
      SEP,
      '',
      `${typeLabel}`,
      `Date: ${now}`,
      `Order ID: ${id}`,
      '',
    ];

    let total = 0;
    items.forEach((raw, i) => {
      const item = enrichItem(raw);
      const unit = parsePKR(item.price);
      const qty = item.qty || 1;
      const subtotal = unit * qty;
      total += subtotal;
      const img = absImageUrl(item.image);

      lines.push(`ITEM ${i + 1}`);
      lines.push(`${item.name}`);
      lines.push(`Price: ${formatPKR(unit)}`);
      if (item.originalPrice) lines.push(`Was: ${item.originalPrice}`);
      if (qty > 1) lines.push(`Qty: ${qty}`);
      lines.push(`Subtotal: ${formatPKR(subtotal)}`);
      lines.push('');
    });

    lines.push(SEP);
    lines.push(`TOTAL: ${formatPKR(total)}`);
    lines.push('');
    lines.push('CUSTOMER DETAILS');
    lines.push(`Name: ${customer.name}`);
    lines.push(`WhatsApp: ${customer.phone}`);
    lines.push(`Alt Number: ${customer.phone2}`);
    lines.push(`City: ${customer.city}`);
    lines.push(`Address: ${customer.address}`);
    lines.push('');
    lines.push('Payment: Cash on Delivery');
    lines.push('Delivery: 4-5 Working Days');
    lines.push('');
    lines.push('Please confirm product availability and estimated delivery time.');
    lines.push('');
    lines.push('Regards,');
    lines.push('Zewix Store');
    lines.push(SEP);

    return lines.join('\n');
  }

  function saveCustomerInfo(data) {
    try { localStorage.setItem('zewix_customer', JSON.stringify(data)); } catch (e) {}
  }

  function loadCustomerInfo() {
    try { return JSON.parse(localStorage.getItem('zewix_customer')) || {}; } catch (e) { return {}; }
  }

  function renderCheckoutPreview(items) {
    const preview = document.getElementById('checkoutPreview');
    const totalEl = document.getElementById('checkoutTotal');
    if (!preview) return;

    let total = 0;
    preview.innerHTML = items.map(raw => {
      const item = enrichItem(raw);
      const unit = parsePKR(item.price);
      const qty = item.qty || 1;
      const subtotal = unit * qty;
      total += subtotal;
      const was = item.originalPrice ? `<span class="was-price">${item.originalPrice}</span>` : '';
      return `
        <div class="checkout-item">
          <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.style.opacity='0.3'" />
          <div class="checkout-item-info">
            <div class="checkout-item-name">${item.name}</div>
            <div class="checkout-item-price">${formatPKR(unit)}${was}</div>
            ${qty > 1 ? `<div class="checkout-item-meta">Qty: ${qty} · Subtotal: ${formatPKR(subtotal)}</div>` : ''}
          </div>
        </div>`;
    }).join('');

    if (totalEl) totalEl.textContent = formatPKR(total);
  }

  function openCheckout(orderType, items) {
    if (!items || !items.length) return;
    closeAllModals();
    pendingOrder = { type: orderType, items };

    const modal = document.getElementById('checkoutModal');
    const saved = loadCustomerInfo();
    const nameEl = document.getElementById('coName');
    const phoneEl = document.getElementById('coPhone');
    const phone2El = document.getElementById('coPhone2');
    const cityEl = document.getElementById('coCity');
    const addrEl = document.getElementById('coAddress');
    const status = document.getElementById('checkoutStatus');

    if (nameEl) nameEl.value = saved.name || '';
    if (phoneEl) phoneEl.value = saved.phone || '';
    if (phone2El) phone2El.value = saved.phone2 || '';
    if (cityEl) cityEl.value = saved.city || '';
    if (addrEl) addrEl.value = saved.address || '';
    if (status) status.textContent = '';

    renderCheckoutPreview(items);

    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    pendingOrder = null;
    const productOpen = document.getElementById('productModal')?.classList.contains('open');
    const cartOpen = document.getElementById('cartModal')?.classList.contains('open');
    const wishOpen = document.getElementById('wishlistModal')?.classList.contains('open');
    const viewAllOpen = document.getElementById('viewAllModal')?.classList.contains('open');
    if (!productOpen && !cartOpen && !wishOpen && !viewAllOpen) document.body.style.overflow = '';
  }

  function initCheckout() {
    const form = document.getElementById('checkoutForm');
    const closeBtn = document.getElementById('closeCheckoutModal');
    const backdrop = document.getElementById('checkoutModalBackdrop');

    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        if (!pendingOrder) return;

        const customer = {
          name: document.getElementById('coName')?.value.trim() || '',
          phone: document.getElementById('coPhone')?.value.trim() || '',
          phone2: document.getElementById('coPhone2')?.value.trim() || '',
          city: document.getElementById('coCity')?.value.trim() || '',
          address: document.getElementById('coAddress')?.value.trim() || '',
        };
        const status = document.getElementById('checkoutStatus');

        if (!customer.name || !customer.phone || !customer.phone2 || !customer.city || !customer.address) {
          if (status) { status.textContent = 'Please fill name, both numbers, city & address.'; status.style.color = '#ff6060'; }
          return;
        }

        saveCustomerInfo(customer);
        const msg = buildProfessionalOrder(pendingOrder.items, customer, pendingOrder.type);
        sendWA(msg);
        closeCheckout();
        closeModal();
        closeCartModal();
        closeWishlistModal();
        toast('cart', 'Order sent on WhatsApp! ✅');
      });
    }

    if (closeBtn) closeBtn.addEventListener('click', closeCheckout);
    if (backdrop) backdrop.addEventListener('click', closeCheckout);
  }

  /* ══════════ SLIDER ══════════ */
  function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    if (!slides.length) return;
    let cur = 0;
    let timer = setInterval(next, 4000);
    function goTo(n) { slides[cur].classList.remove('active'); cur = (n + slides.length) % slides.length; slides[cur].classList.add('active'); }
    function next() { goTo(cur + 1); } function prev() { goTo(cur - 1); }
    if (nextBtn) nextBtn.addEventListener('click', () => { clearInterval(timer); next(); timer = setInterval(next, 4000); });
    if (prevBtn) prevBtn.addEventListener('click', () => { clearInterval(timer); prev(); timer = setInterval(next, 4000); });
  }

  /* ══════════ REVIEWS TICKER ══════════ */
  function initReviewsTicker() { const track = document.getElementById('reviewsTrack'); if (!track) return; track.innerHTML += track.innerHTML; }

  /* ══════════ AUTO SCROLL ROWS — LTR ↔ RTL ping-pong ══════════ */
  function setupAutoScrollRow(row, rowIndex) {
    if (!row || row.dataset.autoScrollInit === 'true') return;
    const cards = row.querySelectorAll('.scroll-card');
    if (cards.length < 2) return;

    row.dataset.autoScrollInit = 'true';
    row.classList.add('auto-scroll-active');

    let paused = false;
    let resumeAt = 0;
    let direction = rowIndex % 2 === 0 ? 1 : -1;
    const speed = 0.6;

    function maxScroll() {
      return Math.max(0, row.scrollWidth - row.clientWidth);
    }

    function setStartPosition() {
      const max = maxScroll();
      if (max < 8) return;
      row.scrollLeft = direction === -1 ? max : 0;
    }

    // Ensure start position is set after layout
    requestAnimationFrame(() => requestAnimationFrame(setStartPosition));

    function pause(ms) {
      paused = true;
      resumeAt = Date.now() + ms;
    }

    row.addEventListener('mouseenter', () => { paused = true; });
    row.addEventListener('mouseleave', () => { paused = false; resumeAt = 0; });

    // Pause auto-scroll on touch, resume after touch ends
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouching = false;
    row.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isTouching = true;
      paused = true;
      resumeAt = 0;
    }, { passive: true });
    row.addEventListener('touchmove', (e) => {
      paused = true;
      resumeAt = 0;
    }, { passive: true });
    row.addEventListener('touchend', () => {
      isTouching = false;
      pause(2000);
    }, { passive: true });
    row.addEventListener('wheel', () => pause(4000), { passive: true });

    // Watchdog: detect if the row stopped moving and reset
    let lastScroll = row.scrollLeft || 0;
    let lastMoveTime = Date.now();

    function tick() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if (resumeAt && Date.now() > resumeAt) { paused = false; resumeAt = 0; }

      const max = maxScroll();
      if (!paused && max > 8) {
        row.scrollLeft += speed * direction;
        // update last movement time
        if (Math.abs(row.scrollLeft - lastScroll) > 0.05) {
          lastMoveTime = Date.now();
          lastScroll = row.scrollLeft;
        }
        if (row.scrollLeft >= max - 1) {
          row.scrollLeft = max;
          direction = -1;
        } else if (row.scrollLeft <= 1) {
          row.scrollLeft = 0;
          direction = 1;
        }
      }

      // If nothing has moved for 2.5s and we should be scrolling, reset start
      if (!paused && max > 8 && (Date.now() - lastMoveTime) > 2500) {
        // reset to a sensible position and resume
        direction = 1;
        setStartPosition();
        lastScroll = row.scrollLeft;
        lastMoveTime = Date.now();
      }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);

    window.addEventListener('resize', () => {
      const max = maxScroll();
      if (row.scrollLeft > max) row.scrollLeft = max;
    }, { passive: true });
  }

  function initAllAutoScrollRows() {
    document.querySelectorAll('.products-scroll-row').forEach((row, i) => setupAutoScrollRow(row, i));
  }

  /* ══════════ MOBILE MODAL CSS FIX ══════════ */
  /* ══════════ THEME (default: light / white) ══════════ */
  function initTheme() {
    try {
      const saved = localStorage.getItem('zewix_theme');
      // Default is always light — only go dark if user explicitly chose it
      if (saved === 'dark') {
        document.body.classList.remove('light-theme');
        document.documentElement.classList.remove('light-theme');
      } else {
        document.body.classList.add('light-theme');
        document.documentElement.classList.add('light-theme');
      }
    } catch (e) {
      document.body.classList.add('light-theme');
    }
    const btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      document.documentElement.classList.toggle('light-theme');
      try {
        localStorage.setItem('zewix_theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
      } catch (e) {}
    });
  }

  /* ══════════ NAV ══════════ */
  function initNav() {
    const toggle = document.getElementById('navToggle');
    const links  = document.getElementById('navLinks');
    if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('show'));
    document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links && links.classList.remove('show')));
    document.querySelector('.bottom-nav-item[href="#home"]')?.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    document.querySelector('.nav-links a[href="#home"]')?.addEventListener('click', (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); if (links) links.classList.remove('show'); });

    const bottomItems = document.querySelectorAll('.bottom-nav-item[href]');
    const sections = ['#home', '#products', '#about', '#contact']
      .map(sel => document.querySelector(sel))
      .filter(Boolean);

    function setActiveNav(id) {
      bottomItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + id);
      });
    }

    if (sections.length && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
      sections.forEach(sec => observer.observe(sec));
    }
  }

  /* ══════════ SCROLL TO TOP ══════════ */
  function initScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 300));
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ══════════ SEARCH (grid restore on clear only) ══════════ */
  function initSearch() {
    const input = document.getElementById('navSearch');
    if (!input) return;
    input.addEventListener('input', () => {
      if (!input.value.trim()) renderAllProductsSection();
    });
  }

  /* ══════════ CONTACT FORM ══════════ */
  function initContactForm() {
    const form  = document.getElementById('contactForm');
    const waBtn = document.getElementById('sendWhatsappMessage');
    const status = document.getElementById('formStatus');

    function getFormData() {
      return {
        name:    document.getElementById('customerName')?.value.trim()    || '',
        email:   document.getElementById('customerEmail')?.value.trim()   || '',
        phone:   document.getElementById('customerPhone')?.value.trim()   || '',
        message: document.getElementById('customerMessage')?.value.trim() || '',
      };
    }

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const { name, email, phone, message } = getFormData();
        if (!name || !email || !message) {
          if (status) { status.textContent = 'Please enter name, email and message.'; status.style.color = '#ff6060'; }
          return;
        }
        const body = `Name: ${name}%0D%0APhone: ${phone || 'N/A'}%0D%0A%0D%0A${encodeURIComponent(message)}`;
        window.location.href = `mailto:zewixstore@gmail.com?subject=${encodeURIComponent('Contact from ' + name)}&body=${body}`;
        if (status) { status.textContent = 'Opening your email app...'; status.style.color = '#0055aa'; }
      });
    }

    if (waBtn) {
      waBtn.addEventListener('click', () => {
        const { name, phone, message } = getFormData();
        if (!name || !message) {
          if (status) { status.textContent = 'Please enter your name and message.'; status.style.color = '#ff6060'; }
          return;
        }
        sendWA(`Message from Zewix Website\n\nName: ${name}\nPhone: ${phone || 'N/A'}\nMessage:\n${message}`);
      });
    }
  }

  /* ══════════ REVIEWS MODAL ══════════ */
  function initReviewsModal() {
    const openBtn  = document.getElementById('seeAllReviewsBtn');
    const closeBtn = document.getElementById('closeReviewsModal');
    const backdrop = document.getElementById('reviewsModalBackdrop');
    const modal    = document.getElementById('reviewsModal');
    const list     = document.getElementById('reviewsModalList');
    if (!modal) return;
    const allReviews = [
      { initials:'AK', name:'Ahmad Khan',    stars:5, text:'Airpods ki quality bohot achi thi. Delivery bhi 2 din mein ho gayi.', date:'2 days ago' },
      { initials:'SF', name:'Sara Fatima',   stars:5, text:'Smart Watch Pro bilkul waisi hi thi jesi picture mein thi. Cash on delivery ka option bhi tha.', date:'5 days ago' },
      { initials:'UR', name:'Usman Raza',    stars:4, text:'Power Bank 10000mAh ne meri zindagi aasan kar di.', date:'1 week ago' },
      { initials:'MN', name:'Maryam Noor',   stars:5, text:'Bluetooth Speaker ki sound quality amazing hai. Bohot fast delivery thi Lahore mein.', date:'1 week ago' },
      { initials:'ZA', name:'Zain Ali',      stars:5, text:'Apple Headphone Max liya tha gift ke liye. Quality se bohot khush hoon.', date:'2 weeks ago' },
      { initials:'HB', name:'Hina Baig',     stars:5, text:'3D Crystal Lamp bohot pyari hai! Zewix Store trusted store hai Pakistan mein.', date:'2 weeks ago' },
      { initials:'FA', name:'Farhan Ahmed',  stars:4, text:'A9 Pro Airpods ka sound crystal clear hai. Price ke hisaab se best value hai.', date:'3 weeks ago' },
      { initials:'RA', name:'Rimsha Arshad', stars:5, text:'Arctic Air Cooler ne garmi mein jaan bachali! Highly recommend!', date:'1 month ago' },
    ];
    if (list) {
      allReviews.forEach(r => {
        const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
        const div = document.createElement('div'); div.className = 'reviews-modal-item'; // FIX: was 'review-card', needs 'reviews-modal-item' for CSS styling
        div.innerHTML = `<div class="review-avatar">${r.initials}</div><div class="review-body"><div class="review-header"><span class="review-name">${r.name}</span><span class="review-stars">${stars}</span></div><p class="review-text">${r.text}</p><span class="review-date">${r.date}</span></div>`;
        list.appendChild(div);
      });
    }
    function openReviews()  { modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
    function closeReviews() { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
    if (openBtn)  openBtn.addEventListener('click', openReviews);
    if (closeBtn) closeBtn.addEventListener('click', closeReviews);
    if (backdrop) backdrop.addEventListener('click', closeReviews);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeReviews();
    });
  }

  /* ══════════ VIEW ALL MODAL INJECT ══════════ */
  function injectViewAllModal() {
      // Ensure modal exists and attach listeners (works for both static markup and injected)
      let modal = document.getElementById('viewAllModal');
      if (!modal) {
        modal = document.createElement('div');
        modal.className = 'modal'; modal.id = 'viewAllModal';
        modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true'); modal.setAttribute('aria-hidden','true');
        modal.innerHTML = `
        <div class="modal-backdrop" id="viewAllModalBackdrop"></div>
        <div class="view-all-modal-content">
          <div class="cart-header">
            <h3 id="viewAllTitle">Products</h3>
            <button class="modal-close" id="closeViewAllModal" aria-label="Close">&#215;</button>
          </div>
          <div class="view-all-grid" id="viewAllGrid"></div>
        </div>`;
        document.body.appendChild(modal);
      }

      const closeBtn = document.getElementById('closeViewAllModal');
      if (closeBtn && !closeBtn.dataset.vListener) {
        closeBtn.addEventListener('click', closeViewAllModal);
        closeBtn.dataset.vListener = '1';
      }

      const backdrop = document.getElementById('viewAllModalBackdrop');
      if (backdrop && !backdrop.dataset.vListener) {
        backdrop.addEventListener('click', () => {
          const productModal = document.getElementById('productModal');
          if (!productModal || !productModal.classList.contains('open')) closeViewAllModal();
        });
        backdrop.dataset.vListener = '1';
      }
    }

  /* ══════════ EVENTS ══════════ */
  function initEvents() {
    document.getElementById('modalWishlistBtn')?.addEventListener('click', function() {
      if (!currentProduct) return;
      const idx  = wishlist.findIndex(w => w.name === currentProduct.name);
      const path = this.querySelector('svg path');
      if (idx > -1) { wishlist.splice(idx, 1); this.style.color = ''; if (path) { path.setAttribute('fill','none'); path.setAttribute('stroke','currentColor'); } toast('wish', 'Removed from Wishlist'); }
      else { wishlist.push({ name: currentProduct.name, price: currentProduct.salePrice || currentProduct.price, image: currentProduct.image }); this.style.color = '#e84393'; if (path) { path.setAttribute('fill','#e84393'); path.setAttribute('stroke','#e84393'); } toast('wish', 'Added to Wishlist! ❤️'); }
      saveWishlist(); updateWishlistCount();
    });
    document.getElementById('modalCartBtn')?.addEventListener('click', function() {
      if (!currentProduct) return;
      const qty = parseInt(document.getElementById('quantity')?.value) || 1;
      const existing = cart.find(i => i.name === currentProduct.name);
      if (existing) existing.qty += qty; else cart.push({ name: currentProduct.name, price: currentProduct.salePrice || currentProduct.price, image: currentProduct.image, qty });
      saveCart(); updateCartCount(); toast('cart', `${currentProduct.name} added to cart!`); closeModal();
    });
    document.getElementById('whatsappOrderBtn')?.addEventListener('click', function() {
      if (!currentProduct) return;
      const qty = parseInt(document.getElementById('quantity')?.value, 10) || 1;
      openCheckout('single', [{
        name: currentProduct.name,
        price: currentProduct.salePrice || currentProduct.price,
        image: currentProduct.image,
        qty,
      }]);
    });
    document.getElementById('wishlistBtn')?.addEventListener('click', openWishlistModal);
    document.getElementById('bottomWishlistBtn')?.addEventListener('click', openWishlistModal);
    document.getElementById('cartBtn')?.addEventListener('click', openCartModal);
    document.getElementById('bottomCartBtn')?.addEventListener('click', openCartModal);

    document.addEventListener('click', function (e) {
      const catItem = e.target.closest('.cat-item');
      if (catItem && catItem.dataset.category) { e.preventDefault(); switchCategory(catItem.dataset.category); return; }

      const viewAllBtn = e.target.closest('.cat-view-all-btn');
      if (viewAllBtn) { openViewAllModal(viewAllBtn.dataset.category); return; }

      if (e.target.id === 'popularViewAllBtn') {
        closeAllModals();
        const modal = document.getElementById('viewAllModal'); const title = document.getElementById('viewAllTitle'); const grid = document.getElementById('viewAllGrid');
        if (!modal || !grid) return; title.textContent = 'Most Popular'; grid.innerHTML = '';
        ALL_PRODUCTS.filter(p => p.popular).forEach(p => grid.appendChild(createScrollCard(p)));
        modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden';
        grid.querySelectorAll('.products-scroll-row').forEach((row, i) => setupAutoScrollRow(row, i));
        return;
      }
      if (e.target.id === 'topSellingViewAllBtn') {
        closeAllModals();
        const modal = document.getElementById('viewAllModal'); const title = document.getElementById('viewAllTitle'); const grid = document.getElementById('viewAllGrid');
        if (!modal || !grid) return; title.textContent = 'Top Selling'; grid.innerHTML = '';
        ALL_PRODUCTS.filter(p => p.topSelling).forEach(p => grid.appendChild(createScrollCard(p)));
        modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.style.overflow = 'hidden';
        grid.querySelectorAll('.products-scroll-row').forEach((row, i) => setupAutoScrollRow(row, i));
        return;
      }

      const buyBtn = e.target.closest('.buy-btn');
      if (buyBtn) {
        const card = buyBtn.closest('[data-name]');
        if (card) {
          const full = findProductByName(card.dataset.name) || getCardData(card);
          // Direct to checkout — skip product modal
          openCheckout('single', [{
            name: full.name,
            price: full.salePrice || full.price,
            image: full.image,
            qty: 1,
          }]);
          return;
        }
      }

      const card = e.target.closest('.product-card, .sale-card');
      if (card && card.dataset.name && !e.target.closest('button')) {
        const full = findProductByName(card.dataset.name);
        openModal(full || getCardData(card));
        return;
      }

      const cartCardBtn = e.target.closest('.add-to-cart-btn');
      if (cartCardBtn) {
        const c = cartCardBtn.closest('[data-name]');
        if (c) { const existing = cart.find(i => i.name === c.dataset.name); if (existing) existing.qty++; else cart.push({ name: c.dataset.name, price: c.dataset.price, image: c.dataset.image, qty: 1 }); saveCart(); updateCartCount(); toast('cart', `${c.dataset.name} added to cart!`); return; }
      }

      const wishCardBtn = e.target.closest('.wishlist-card-btn');
      if (wishCardBtn) {
        e.stopPropagation();
        const c = wishCardBtn.closest('[data-name]');
        if (c) {
          const idx = wishlist.findIndex(w => w.name === c.dataset.name); const svg = wishCardBtn.querySelector('svg path');
          if (idx > -1) { wishlist.splice(idx, 1); wishCardBtn.style.color = ''; if (svg) { svg.setAttribute('fill','none'); svg.setAttribute('stroke','currentColor'); } toast('wish', 'Removed from Wishlist'); }
          else { wishlist.push({ name: c.dataset.name, price: c.dataset.price, image: c.dataset.image }); wishCardBtn.style.color = '#e84393'; if (svg) { svg.setAttribute('fill','#e84393'); svg.setAttribute('stroke','#e84393'); } toast('wish', 'Added to Wishlist!'); }
          saveWishlist(); updateWishlistCount(); return;
        }
      }

      if (e.target.id === 'closeModal' || e.target.id === 'modalBackdrop') { closeModal(); return; }
      if (e.target.id === 'closeCartModal' || e.target.id === 'cartModalBackdrop') { closeCartModal(); return; }
      if (e.target.id === 'closeWishlistModal' || e.target.id === 'wishlistModalBackdrop') { closeWishlistModal(); return; }
      if (e.target.id === 'closeCheckoutModal' || e.target.id === 'checkoutModalBackdrop') { closeCheckout(); return; }

      if (e.target.classList.contains('cqd')) { const i=+e.target.dataset.idx; if(cart[i].qty>1)cart[i].qty--;else cart.splice(i,1); saveCart();updateCartCount();renderCartModal(); return; }
      if (e.target.classList.contains('cqi')) { cart[+e.target.dataset.idx].qty++; saveCart();updateCartCount();renderCartModal(); return; }
      if (e.target.classList.contains('cqr')) { cart.splice(+e.target.dataset.idx,1); saveCart();updateCartCount();renderCartModal(); return; }
      if (e.target.classList.contains('wqr')) { wishlist.splice(+e.target.dataset.idx,1); saveWishlist();updateWishlistCount();renderWishlistModal(); return; }

      if (e.target.id === 'cartWhatsappBtn') {
        if (cart.length) openCheckout('cart', cart.map(i => ({ ...i })));
        return;
      }
      if (e.target.id === 'wishlistWhatsappBtn') {
        if (wishlist.length) openCheckout('wishlist', wishlist.map(i => ({ ...i, qty: 1 })));
        return;
      }
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { closeCheckout(); closeModal(); closeCartModal(); closeWishlistModal(); closeViewAllModal(); }
    });
  }

  // FIX: Expose openModal globally so search dropdown (outside IIFE) can call it
  window.openModal = openModal;

  /* ══════════ INIT ══════════ */
  function init() {
    initTheme();
    initNav();
    buildCategoryBar();
    injectViewAllModal();
    renderAllProductsSection();
    renderMostPopular();
    renderTopSelling();
    renderSaleGrid();
    initSlider();
    initReviewsTicker();
    initScrollTop();
    initSearch();
    initContactForm();
    initReviewsModal();
    initCheckout();
    initEvents();
    updateCartCount();
    updateWishlistCount();
    console.log('✅ Zewix Store — script.js loaded');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();


/* ══════════════════════════════════════
   SEARCH DROPDOWN — DOMContentLoaded mein
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {
  const navSearch = document.getElementById('navSearch');
  if (!navSearch) return;
  const searchWrap = navSearch.closest('.nav-search-wrap');
  if (!searchWrap) return;
  searchWrap.style.position = 'relative';

  const dropdown = document.createElement('div');
  dropdown.id = 'searchDropdown';
  dropdown.style.cssText = `
    position:absolute;top:calc(100% + 8px);left:0;right:0;
    border-radius:10px;overflow:hidden;z-index:9999;
    max-height:300px;overflow-y:auto;
    opacity:0;transform:translateY(-6px);pointer-events:none;
    transition:opacity 0.2s ease,transform 0.2s ease;
    box-shadow:0 8px 24px rgba(0,0,0,0.2);
  `;
  searchWrap.appendChild(dropdown);

  let activeIndex = -1;
  let filtered = [];

  function getProducts() { return typeof ALL_PRODUCTS !== 'undefined' ? ALL_PRODUCTS : []; }
  function openDropdown()  { dropdown.style.opacity='1'; dropdown.style.transform='translateY(0)'; dropdown.style.pointerEvents='all'; }
  function closeDropdown() { dropdown.style.opacity='0'; dropdown.style.transform='translateY(-6px)'; dropdown.style.pointerEvents='none'; activeIndex=-1; }

  function highlight(text, query) {
    const safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return text.replace(new RegExp(`(${safe})`, 'gi'), '<mark>$1</mark>');
  }

  function renderResults(query) {
    activeIndex = -1;
    filtered = getProducts().filter(p => (p.name||p.title||'').toLowerCase().includes(query.toLowerCase()));
    if (!filtered.length) { dropdown.innerHTML = `<div class="s-result-empty">No results for "${query}"</div>`; return; }
    dropdown.innerHTML = filtered.map((p, i) => `
      <div class="s-result" data-index="${i}" style="display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;transition:background 0.12s;">
        <img src="${p.image||p.img||''}" alt="" style="width:36px;height:36px;object-fit:cover;border-radius:6px;flex-shrink:0;" onerror="this.style.display='none'"/>
        <div style="flex:1;min-width:0;"><div class="s-result-name">${highlight(p.name||p.title||'',query)}</div></div>
        <div class="s-result-price">${p.salePrice ? 'Rs '+p.salePrice : (p.price ? 'Rs '+p.price : '')}</div>
      </div>`).join('');
    dropdown.querySelectorAll('.s-result').forEach(el => {
      el.addEventListener('mouseenter', () => { dropdown.querySelectorAll('.s-result').forEach(e => e.classList.remove('s-hover')); el.classList.add('s-hover'); });
      el.addEventListener('mouseleave', () => el.classList.remove('s-hover'));
      el.addEventListener('mousedown', e => { e.preventDefault(); selectResult(+el.dataset.index); });
    });
  }

  function selectResult(index) {
    const p = filtered[index]; if (!p) return;
    navSearch.value = ''; closeDropdown();
    if (typeof openModal === 'function') openModal(p);
    else document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }

  navSearch.addEventListener('input', () => { const q=navSearch.value.trim(); if(q.length<1){closeDropdown();return;} renderResults(q); openDropdown(); });
  navSearch.addEventListener('focus', () => { if(navSearch.value.trim()) openDropdown(); });
  navSearch.addEventListener('blur',  () => { setTimeout(closeDropdown, 150); });
  navSearch.addEventListener('keydown', e => {
    const items = dropdown.querySelectorAll('.s-result'); if(!items.length) return;
    if (e.key==='ArrowDown') { e.preventDefault(); activeIndex=Math.min(activeIndex+1,items.length-1); items.forEach((el,i)=>el.classList.toggle('s-hover',i===activeIndex)); items[activeIndex]?.scrollIntoView({block:'nearest'}); }
    else if (e.key==='ArrowUp') { e.preventDefault(); activeIndex=Math.max(activeIndex-1,0); items.forEach((el,i)=>el.classList.toggle('s-hover',i===activeIndex)); items[activeIndex]?.scrollIntoView({block:'nearest'}); }
    else if (e.key==='Enter') { if(activeIndex>=0) selectResult(activeIndex); else if(filtered.length===1) selectResult(0); }
    else if (e.key==='Escape') { closeDropdown(); navSearch.blur(); }
  });
  document.addEventListener('click', e => { if(!searchWrap.contains(e.target)) closeDropdown(); });
});