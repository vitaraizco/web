/* ==========================================================
   VITA RAÍZ — app.js
   ========================================================== */

/* ===== 1. PRODUCT DATA =====
   14 products from "Instrucciones pagina .docx"
   Prices: $0 = "Precio por confirmar"
   Images: relative to index.html location
   ============================= */
const PRODUCTS = [
  {
    id: 1,
    nombre: 'Cartilg Prame',
    categoria: 'Movimiento',
    categoriasSecundarias: ['Bienestar', 'Energía'],
    descripcion: 'Suplemento dietario pensado para acompañar tu rutina diaria de movimiento, con un enfoque en articulaciones, movilidad y bienestar físico. Ideal para quienes buscan sentirse más activos en su día a día.',
    precio: 0,
    imagen: 'assets/products/Cartilg_fondo.png',
    destacado: false
  },
  {
    id: 2,
    nombre: 'Chanca Dra Prame',
    categoria: 'Depuración',
    categoriasSecundarias: ['Digestión', 'Bienestar'],
    descripcion: 'Fórmula de apoyo diario con enfoque en limpieza natural, bienestar renal y equilibrio corporal. Una opción para quienes buscan complementar su rutina con ingredientes tradicionalmente asociados a la depuración.',
    precio: 0,
    imagen: 'assets/products/Chanca Dra_fondo.png',
    destacado: false
  },
  {
    id: 3,
    nombre: 'Citrato de Magnesio + Potasio',
    categoria: 'Energía',
    categoriasSecundarias: ['Movimiento', 'Bienestar'],
    descripcion: 'Suplemento alimenticio de apoyo diario para energía, función muscular e hidratación. Su combinación de magnesio y potasio lo hace ideal para rutinas activas y bienestar general.',
    precio: 0,
    imagen: 'assets/products/Citrato de magnesio_fondo.png',
    destacado: true
  },
  {
    id: 4,
    nombre: 'Citrato de Zinc',
    categoria: 'Defensas',
    categoriasSecundarias: ['Energía', 'Bienestar'],
    descripcion: 'Apoyo nutricional diario enfocado en defensas, vitalidad y equilibrio general. Una opción práctica para quienes buscan complementar su alimentación con zinc.',
    precio: 0,
    imagen: 'assets/products/Citrato zinc_fondo.png',
    destacado: false
  },
  {
    id: 5,
    nombre: 'Colágeno + Biotina',
    categoria: 'Belleza',
    categoriasSecundarias: ['Bienestar'],
    descripcion: 'Suplemento alimenticio enfocado en belleza desde adentro, ideal para acompañar el cuidado diario de piel, cabello y bienestar general.',
    precio: 0,
    imagen: 'assets/products/Colageno_fondo.png',
    destacado: true
  },
  {
    id: 6,
    nombre: 'Diab-Zan Prame',
    categoria: 'Bienestar',
    categoriasSecundarias: ['Digestión', 'Energía'],
    descripcion: 'Suplemento dietario orientado al equilibrio metabólico y al bienestar diario. Su comunicación debe manejarse como apoyo nutricional, sin presentarlo como tratamiento para condiciones específicas.',
    precio: 0,
    imagen: 'assets/products/Diab-Zan_fondo.png',
    destacado: false
  },
  {
    id: 7,
    nombre: 'Hig-San Prame',
    categoria: 'Digestión',
    categoriasSecundarias: ['Depuración', 'Bienestar'],
    descripcion: 'Fórmula de apoyo diario con enfoque en hígado, digestión y depuración natural. Ideal para quienes buscan complementar su rutina de bienestar interno.',
    precio: 0,
    imagen: 'assets/products/Hig-san_fondo.png',
    destacado: false
  },
  {
    id: 8,
    nombre: 'L-Arginina',
    categoria: 'Energía',
    categoriasSecundarias: ['Movimiento', 'Bienestar'],
    descripcion: 'Suplemento alimenticio enfocado en energía, rendimiento y vitalidad diaria. Una opción para personas activas que buscan complementar su bienestar físico.',
    precio: 0,
    imagen: 'assets/products/L-Arginina.png',
    destacado: false
  },
  {
    id: 9,
    nombre: 'Mac Prame',
    categoria: 'Energía',
    categoriasSecundarias: ['Bienestar', 'Defensas'],
    descripcion: 'Suplemento dietario con enfoque en energía, ánimo y vitalidad. Su fórmula se puede comunicar como apoyo diario para el bienestar general y la resistencia corporal.',
    precio: 0,
    imagen: 'assets/products/Mac_fondo.png',
    destacado: false
  },
  {
    id: 10,
    nombre: 'Prebióticos + Probióticos',
    categoria: 'Digestión',
    categoriasSecundarias: ['Defensas', 'Bienestar'],
    descripcion: 'Suplemento alimenticio diseñado para acompañar el equilibrio de la flora intestinal, la digestión diaria y el bienestar general.',
    precio: 0,
    imagen: 'assets/products/Prebíoticos_fondo.png',
    destacado: true
  },
  {
    id: 11,
    nombre: 'Resveratrol + Colágeno',
    categoria: 'Belleza',
    categoriasSecundarias: ['Bienestar', 'Defensas'],
    descripcion: 'Suplemento alimenticio con enfoque en piel, elasticidad y antioxidantes. Ideal para una rutina de belleza y cuidado desde adentro.',
    precio: 0,
    imagen: 'assets/products/Colageno + Resveratrol_fondo.png',
    destacado: false
  },
  {
    id: 12,
    nombre: 'Ug-San Dra Prame',
    categoria: 'Energía',
    categoriasSecundarias: ['Bienestar', 'Digestión'],
    descripcion: 'Suplemento dietario de apoyo diario con enfoque en circulación, vitalidad, memoria y bienestar general. También puede comunicarse como complemento para energía y equilibrio diario.',
    precio: 0,
    imagen: 'assets/products/Ug-San Dra_fondo.png',
    destacado: false
  },
  {
    id: 13,
    nombre: 'Urol Prame',
    categoria: 'Depuración',
    categoriasSecundarias: ['Defensas', 'Bienestar'],
    descripcion: 'Fórmula de apoyo natural para el cuidado de las vías urinarias, eliminación de líquidos y bienestar diario. Su comunicación debe mantenerse como apoyo nutricional, no como tratamiento.',
    precio: 0,
    imagen: 'assets/products/Urol_fondo.png',
    destacado: false
  },
  {
    id: 14,
    nombre: 'Vitamina C',
    categoria: 'Defensas',
    categoriasSecundarias: ['Energía', 'Bienestar'],
    descripcion: 'Suplemento alimenticio enfocado en defensas, vitalidad y acción antioxidante. Una opción práctica para complementar la rutina diaria de bienestar.',
    precio: 0,
    imagen: 'assets/products/Vitamina c_fondo.png',
    destacado: true
  }
];

/* ===== 2. CART STATE ===== */
let cart = [];
const WA_NUMBER = '573150999272';

/* Price helper */
function formatPrice(precio) {
  return precio === 0 ? 'Precio por confirmar' : '$' + precio.toLocaleString('es-CO');
}

/* ===== 3. LOCAL STORAGE ===== */
function saveCart() {
  localStorage.setItem('vitaraiz_cart', JSON.stringify(cart));
}

function loadCart() {
  try {
    const saved = localStorage.getItem('vitaraiz_cart');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }
}

/* ===== 4. CART OPEN / CLOSE ===== */
function openCart() {
  document.getElementById('cartDrawer').classList.add('active');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('active');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== 5. ADD TO CART ===== */
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, nombre: product.nombre, precio: product.precio, imagen: product.imagen, qty: 1 });
  }

  saveCart();
  updateCartCount();
  renderCart();
  openCart();

  /* Flash added state on all matching buttons */
  document.querySelectorAll(`[data-id="${productId}"].btn-add-cart, [data-id="${productId}"].btn-add-cart-sm`).forEach(btn => {
    btn.classList.add('added');
    btn.textContent = '✓ Agregado';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.innerHTML = btn.classList.contains('btn-add-cart')
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg> Agregar al carrito`
        : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg> Agregar`;
    }, 1800);
  });
}

/* ===== 6. REMOVE FROM CART ===== */
function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCart();
  updateCartCount();
  renderCart();
}

/* ===== 7. UPDATE QUANTITY ===== */
function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartCount();
  renderCart();
}

/* ===== 8. UPDATE CART COUNT BADGE ===== */
function updateCartCount() {
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.textContent = total;
    badge.classList.toggle('hidden', total === 0);
  }
}

/* ===== 9. RENDER CART ===== */
function renderCart() {
  const itemsEl = document.getElementById('cartItems');
  const emptyEl = document.getElementById('cartEmpty');
  const summaryEl = document.getElementById('cartSummary');
  const formEl = document.getElementById('cartForm');
  const checkoutEl = document.getElementById('btnCheckout');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');

  if (!itemsEl) return;

  if (cart.length === 0) {
    emptyEl.style.display = '';
    summaryEl.style.display = 'none';
    formEl.style.display = 'none';
    checkoutEl.style.display = 'none';
    /* Remove dynamic items */
    itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());
    return;
  }

  emptyEl.style.display = 'none';
  summaryEl.style.display = '';
  formEl.style.display = '';
  checkoutEl.style.display = '';

  /* Rebuild item rows */
  itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.dataset.id = item.id;

    const lineTotal = item.precio === 0 ? 'Precio por confirmar' : '$' + (item.precio * item.qty).toLocaleString('es-CO');

    div.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" onerror="this.style.background='#DDE8DD';this.src=''" />
      <div class="cart-item-info">
        <p class="cart-item-name">${item.nombre}</p>
        <p class="cart-item-price">${formatPrice(item.precio)} × ${item.qty} = ${lineTotal}</p>
        <div class="cart-item-qty">
          <button onclick="changeQty(${item.id}, -1)" aria-label="Reducir cantidad">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)" aria-label="Aumentar cantidad">+</button>
          <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Eliminar producto">Eliminar</button>
        </div>
      </div>
    `;
    itemsEl.appendChild(div);
  });

  /* Totals */
  const priceItems = cart.filter(i => i.precio > 0);
  if (priceItems.length === 0) {
    subtotalEl.textContent = 'Por confirmar';
    totalEl.textContent = 'Por confirmar';
  } else {
    const sub = cart.reduce((s, i) => s + (i.precio * i.qty), 0);
    subtotalEl.textContent = '$' + sub.toLocaleString('es-CO');
    totalEl.textContent = '$' + sub.toLocaleString('es-CO') + ' + envío';
  }
}

/* ===== 10. FORM VALIDATION ===== */
function validateForm() {
  const nombre = document.getElementById('formNombre').value.trim();
  const telefono = document.getElementById('formTelefono').value.trim();
  const ciudad = document.getElementById('formCiudad').value.trim();
  const direccion = document.getElementById('formDireccion').value.trim();
  const errorEl = document.getElementById('formError');

  if (!nombre || !telefono || !ciudad || !direccion) {
    errorEl.classList.add('visible');
    errorEl.textContent = 'Por favor completa todos los campos obligatorios (*).';
    return false;
  }
  if (!/^\+?[\d\s\-]{7,15}$/.test(telefono)) {
    errorEl.classList.add('visible');
    errorEl.textContent = 'Ingresa un número de teléfono válido.';
    return false;
  }
  errorEl.classList.remove('visible');
  return true;
}

/* ===== 11. WHATSAPP CHECKOUT ===== */
function buildWhatsAppMessage() {
  const nombre = document.getElementById('formNombre').value.trim();
  const telefono = document.getElementById('formTelefono').value.trim();
  const ciudad = document.getElementById('formCiudad').value.trim();
  const barrio = document.getElementById('formBarrio').value.trim();
  const direccion = document.getElementById('formDireccion').value.trim();
  const obs = document.getElementById('formObservaciones').value.trim();

  let msg = '¡Hola, VITA RAÍZ! 🌿 Quiero hacer un pedido:\n\n';

  msg += '*📦 Productos:*\n';
  cart.forEach((item, i) => {
    const precio = item.precio === 0 ? 'Precio por confirmar' : '$' + (item.precio * item.qty).toLocaleString('es-CO');
    msg += `${i + 1}. ${item.nombre} × ${item.qty} — ${precio}\n`;
  });

  const allPriceConfirmed = cart.every(i => i.precio === 0);
  if (allPriceConfirmed) {
    msg += '\n_Precios por confirmar_\n';
  } else {
    const total = cart.reduce((s, i) => s + i.precio * i.qty, 0);
    msg += `\n*Subtotal: $${total.toLocaleString('es-CO')} COP + envío*\n`;
  }

  msg += '\n*👤 Datos de entrega:*\n';
  msg += `Nombre: ${nombre}\n`;
  msg += `Teléfono: ${telefono}\n`;
  msg += `Ciudad: ${ciudad}\n`;
  if (barrio) msg += `Barrio/Zona: ${barrio}\n`;
  msg += `Dirección: ${direccion}\n`;
  if (obs) msg += `Observaciones: ${obs}\n`;

  msg += '\n_Espero su confirmación y el costo del envío. Gracias_ 🙏';

  return encodeURIComponent(msg);
}

function checkout() {
  if (cart.length === 0) {
    openCart();
    return;
  }
  if (!validateForm()) return;
  const msgEncoded = buildWhatsAppMessage();
  const url = `https://wa.me/${WA_NUMBER}?text=${msgEncoded}`;
  window.open(url, '_blank', 'noopener');
}

/* ===== 12. CATEGORY FILTERING ===== */
let activeCategory = 'Todos';
let searchQuery = '';
let sortOrder = 'destacados';

function filterCatalog() {
  const grid = document.getElementById('catalogGrid');
  if (!grid) return;

  const cards = grid.querySelectorAll('[data-id]');
  let visibleCount = 0;

  const normalizeText = str => str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const query = normalizeText(searchQuery);

  cards.forEach(card => {
    const catPrimary = (card.dataset.cat || '').trim();
    const catSecondary = (card.dataset.cats || '').split(',').map(s => s.trim());
    const allCats = [catPrimary, ...catSecondary];
    const name = card.querySelector('.product-name');
    const nameText = name ? normalizeText(name.textContent) : '';

    const matchesCat = activeCategory === 'Todos' || allCats.includes(activeCategory);
    const matchesSearch = query === '' || nameText.includes(query);

    if (matchesCat && matchesSearch) {
      card.style.display = '';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  /* Empty state */
  let emptyMsg = grid.querySelector('.catalog-empty');
  if (visibleCount === 0) {
    if (!emptyMsg) {
      emptyMsg = document.createElement('p');
      emptyMsg.className = 'catalog-empty';
      emptyMsg.textContent = 'No se encontraron productos. Prueba otra búsqueda.';
      grid.appendChild(emptyMsg);
    }
  } else if (emptyMsg) {
    emptyMsg.remove();
  }
}

function setCategory(cat) {
  activeCategory = cat;

  /* Category chips in hero categories bar */
  document.querySelectorAll('#categoriesGrid .category-card').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  /* Sidebar buttons */
  document.querySelectorAll('#catalogSidebar .sidebar-cat').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });

  filterCatalog();

  /* Scroll to catalog section */
  const catalogEl = document.getElementById('catalogo');
  if (catalogEl) {
    setTimeout(() => catalogEl.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
  }
}

/* ===== 13. SEARCH ===== */
function initSearch() {
  const input = document.getElementById('catalogSearch');
  if (!input) return;
  input.addEventListener('input', () => {
    searchQuery = input.value.trim();
    filterCatalog();
  });
}

/* ===== 14. SORT ===== */
function initSort() {
  const select = document.getElementById('catalogSort');
  if (!select) return;
  select.addEventListener('change', () => {
    sortOrder = select.value;
    const grid = document.getElementById('catalogGrid');
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll('[data-id]'));

    cards.sort((a, b) => {
      const nameA = (a.querySelector('.product-name')?.textContent || '').toLowerCase();
      const nameB = (b.querySelector('.product-name')?.textContent || '').toLowerCase();
      if (sortOrder === 'az') return nameA.localeCompare(nameB, 'es');
      return 0; /* destacados and price options are same for all-zero prices */
    });

    cards.forEach(card => grid.appendChild(card));
  });
}

/* ===== 15. PRODUCT MODAL ===== */
let currentModalId = null;

function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  currentModalId = productId;

  document.getElementById('modalImg').src = product.imagen;
  document.getElementById('modalImg').alt = product.nombre;
  document.getElementById('modalProductName').textContent = product.nombre;
  document.getElementById('modalCat').textContent = product.categoria;
  document.getElementById('modalDesc').textContent = product.descripcion;
  document.getElementById('modalPrice').textContent = formatPrice(product.precio);

  const waText = encodeURIComponent(`Hola, quiero consultar sobre ${product.nombre}`);
  document.getElementById('modalWa').href = `https://wa.me/${WA_NUMBER}?text=${waText}`;

  document.getElementById('productModalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productModalOverlay').classList.remove('active');
  document.body.style.overflow = '';
  currentModalId = null;
}

/* ===== 16. HAMBURGER ===== */
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('hamburger');
  if (menu) menu.classList.remove('active');
  if (btn) {
    btn.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
  }
  document.body.style.overflow = '';
}

function initHamburger() {
  const btn = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('active');
    btn.classList.toggle('active', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
}

/* ===== 17. FADE-IN ANIMATION ===== */
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ===== 18. WIRE UP STATIC BUTTONS ===== */
function wireProductButtons() {
  /* All "add to cart" buttons in the static HTML */
  document.querySelectorAll('.btn-add-cart, .btn-add-cart-sm').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      if (!isNaN(id)) addToCart(id);
    });
  });

  /* Product image / name clicks — open modal */
  document.querySelectorAll('.product-img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      const card = img.closest('[data-id]');
      if (card) {
        const id = parseInt(card.dataset.id, 10);
        if (!isNaN(id)) openProductModal(id);
      }
    });
  });

  /* Category card buttons (hero categories bar) */
  document.querySelectorAll('#categoriesGrid .category-card').forEach(btn => {
    btn.addEventListener('click', () => setCategory(btn.dataset.cat));
  });

  /* Sidebar category buttons */
  document.querySelectorAll('#catalogSidebar .sidebar-cat').forEach(btn => {
    btn.addEventListener('click', () => setCategory(btn.dataset.cat));
  });
}

/* ===== 19. DOMContentLoaded — INIT ===== */
document.addEventListener('DOMContentLoaded', () => {

  /* Load cart from storage */
  loadCart();
  updateCartCount();
  renderCart();

  /* Cart open/close */
  const cartBtn = document.getElementById('cartBtn');
  const cartClose = document.getElementById('cartClose');
  const cartOverlay = document.getElementById('cartOverlay');
  const ctaBtn = document.getElementById('ctaOpenCart');

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
  if (ctaBtn) ctaBtn.addEventListener('click', () => { openCart(); });

  /* Checkout button */
  const checkoutBtn = document.getElementById('btnCheckout');
  if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

  /* Modal close */
  const modalClose = document.getElementById('modalClose');
  const modalOverlay = document.getElementById('productModalOverlay');
  if (modalClose) modalClose.addEventListener('click', closeProductModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  /* Modal "add to cart" button */
  const modalAddCart = document.getElementById('modalAddCart');
  if (modalAddCart) {
    modalAddCart.addEventListener('click', () => {
      if (currentModalId !== null) {
        addToCart(currentModalId);
        closeProductModal();
      }
    });
  }

  /* Hamburger */
  initHamburger();

  /* Search + Sort */
  initSearch();
  initSort();

  /* Wire all static product buttons */
  wireProductButtons();

  /* Fade-in animations */
  initFadeIn();

  /* Keyboard trap: Escape closes modal/cart */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (document.getElementById('productModalOverlay').classList.contains('active')) {
        closeProductModal();
      } else if (document.getElementById('cartDrawer').classList.contains('active')) {
        closeCart();
      } else {
        closeMobileMenu();
      }
    }
  });

  /* Smooth scroll for all anchor links */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  console.log('VITA RAÍZ — app.js loaded ✅');
});

