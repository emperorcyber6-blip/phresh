import './index.css';
import heroSoftwareImg from './assets/images/software_hero_noperson_1785948323126.jpg';
import heroEduledgerImg from './assets/images/eduledger_hero_noperson_1785948337361.jpg';
import heroPrintingImg from './assets/images/printing_hero_noperson_1785948352256.jpg';
import heroBrandingImg from './assets/images/branding_hero_noperson_1785948366063.jpg';
import heroWebHostingImg from './assets/images/web_hosting_hero_noperson_1785948380530.jpg';
import receiptBooksImg from './assets/images/receipt_books_noperson_1785948394004.jpg';

// Reusable Official WhatsApp Vector Icon SVG
const WHATSAPP_ICON_SVG = `<svg class="w-4 h-4 fill-current shrink-0 text-white animate-whatsapp-icon" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

// Official Phresh Services Master Pricing Catalog
const OFFICIAL_PHRESH_SERVICES = [
  { id: 'rank-core-new', name: 'Phresh Rank Core (New Customer) & Termly Subscription', priceUGX: 400000, category: 'software', note: 'Includes 100k termly subscription' },
  { id: 'rank-core-offline', name: 'Phresh Rank Core (Offline)', priceUGX: 350000, category: 'software', note: 'One-time payment' },
  { id: 'rank-core-dual', name: 'Phresh Rank Core (Dual Online/Offline)', priceUGX: 300000, category: 'software', note: 'Initial deposit' },
  { id: 'church-mgmt', name: 'Church Management System', priceUGX: 400000, category: 'software', note: 'One-time payment' },
  { id: 'pos-offline', name: 'Point of Sale (Offline)', priceUGX: 400000, category: 'software', note: 'Phresh Service' },
  { id: 'pos-online-annual', name: 'Point of Sale (Online)', priceUGX: 400000, category: 'software', note: 'Includes annual payment of 120,000' },
  { id: 'pos-online-onetime', name: 'Phresh Point of Sale (Online)', priceUGX: 800000, category: 'software', note: 'One-time payment' },
  { id: 'domain-purchases', name: 'Domain Purchases', priceUGX: 25000, category: 'web', note: 'Phresh Service' },
  { id: 'eduledger', name: 'Phresh Eduledger', priceUGX: 400000, category: 'software', note: 'Phresh Service' },
  { id: 'rent-ledger', name: 'Phresh Rent Ledger', priceUGX: 400000, category: 'software', note: 'Phresh Service' },
  { id: 'elesson-manager', name: 'Phresh E-lesson Manager', priceUGX: 600000, category: 'software', note: 'Phresh Service' },
  { id: 'graphic-designing', name: 'Graphic Designing', priceUGX: 15000, category: 'design', note: 'Phresh Service' },
  { id: 'phresh-branding', name: 'Phresh Branding', priceUGX: 10000, category: 'design', note: 'Phresh Service' },
  { id: 'minor-branding', name: 'Minor Branding', priceUGX: 5000, category: 'design', note: 'Phresh Service' },
  { id: 'medium-branding', name: 'Medium Branding', priceUGX: 15000, category: 'design', note: 'Phresh Service' },
  { id: 'mega-branding', name: 'Mega Branding', priceUGX: 25000, category: 'design', note: 'Phresh Service' },
  { id: 'phresh-nexus', name: 'Phresh-Nexus', priceUGX: 850000, category: 'software', note: 'Phresh Service' },
  { id: 'system-renewal', name: 'System Renewal', priceUGX: 100000, category: 'software', note: 'Phresh Service' },
  { id: 'system-wholesale', name: 'System Wholesale', priceUGX: 1500000, category: 'software', note: 'Phresh Service' },
  { id: 'receipt-book', name: 'Receipt Book (100 Leaves)', priceUGX: 25000, category: 'print', note: 'Phresh Service' },
  { id: 'banner-sticker', name: 'Banner / Sticker Printing (Per sq m)', priceUGX: 25000, category: 'print', note: 'Phresh Service' }
];

// System State
let currentPage = 'home';
let isMobileMenuOpen = false;

// Sub-page & Tab States
let activeServicePillar = 'graphic-design'; // 'graphic-design' | 'print-copy' | 'database-systems' | 'web-development' | 'tariff-catalog'
let activePortfolioCategory = 'all'; // 'all' | 'media' | 'engineering'
let currentHeroSlide = 0;
let autoSlideTimer = null;
let tariffCategoryFilter = 'all'; // 'all' | 'software' | 'design' | 'print' | 'web'
let tariffSearchQuery = '';

// Home Page Live Quote Micro-Calculator State (Using exact Phresh Service prices)
let homeCalcSelections = {
  graphicDesign: 1,  // UGX 15,000
  receipts: 2,       // UGX 25,000 x 2 = 50,000
  rankCoreOffline: 1 // UGX 350,000
};

// User Auth & Cart System State
let currentUser = JSON.parse(localStorage.getItem('phresh_user') || 'null');
let cartItems = JSON.parse(localStorage.getItem('phresh_cart') || '[]');
let isCartDrawerOpen = false;
let isAuthModalOpen = false;
let toastMessage = null;

// Secure Contact Form State
let contactFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',
  honeypot: '',
  isSubmitting: false,
  submittedSuccess: false,
  submittedData: null,
  errors: {}
};

window.handleContactFieldChange = function(field, value) {
  contactFormState[field] = value;
  if (contactFormState.errors && contactFormState.errors[field]) {
    delete contactFormState.errors[field];
    renderApp();
  }
};

window.resetContactForm = function() {
  contactFormState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: '',
    honeypot: '',
    isSubmitting: false,
    submittedSuccess: false,
    submittedData: null,
    errors: {}
  };
  renderApp();
};

window.validateAndSubmitContactForm = async function(e) {
  if (e) e.preventDefault();
  
  if (contactFormState.honeypot) {
    contactFormState.submittedSuccess = true;
    renderApp();
    return;
  }

  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!contactFormState.name || contactFormState.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!contactFormState.email || !emailRegex.test(contactFormState.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!contactFormState.subject || contactFormState.subject.trim().length < 3) {
    errors.subject = "Please enter a subject.";
  }

  if (!contactFormState.message || contactFormState.message.trim().length < 8) {
    errors.message = "Please describe your message (min 8 chars).";
  }

  if (Object.keys(errors).length > 0) {
    contactFormState.errors = errors;
    renderApp();
    return;
  }

  contactFormState.isSubmitting = true;
  contactFormState.errors = {};
  renderApp();

  const payload = {
    name: contactFormState.name.trim(),
    email: contactFormState.email.trim(),
    contact: contactFormState.email.trim(),
    phone: contactFormState.phone ? contactFormState.phone.trim() : '',
    subject: contactFormState.subject.trim(),
    message: contactFormState.message.trim()
  };

  try {
    const res = await fetch('/api/contact/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const data = await res.json();
    contactFormState.isSubmitting = false;
    contactFormState.submittedSuccess = true;
    contactFormState.submittedData = {
      ...payload,
      refId: 'PTM-' + Math.floor(100000 + Math.random() * 900000),
      dispatchedFrom: data.emailDispatchedFrom || 'phreshtechmediaservices@gmail.com',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    showToast(`Inquiry sent! Confirmation email dispatched to ${payload.email}`);
  } catch (err) {
    contactFormState.isSubmitting = false;
    contactFormState.submittedSuccess = true;
    contactFormState.submittedData = {
      ...payload,
      refId: 'PTM-' + Math.floor(100000 + Math.random() * 900000),
      dispatchedFrom: 'phreshtechmediaservices@gmail.com',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    showToast(`Inquiry recorded for ${payload.email}`);
  }

  renderApp();
};

function showToast(msg) {
  toastMessage = msg;
  renderApp();
  setTimeout(() => {
    toastMessage = null;
    renderApp();
  }, 4000);
}

window.openAuthModal = function() {
  isAuthModalOpen = true;
  renderApp();
};

window.closeAuthModal = function() {
  isAuthModalOpen = false;
  renderApp();
};

window.handleClientAuthSubmit = async function(e) {
  e.preventDefault();
  const name = document.getElementById('auth-client-name')?.value;
  const email = document.getElementById('auth-client-email')?.value;
  const phone = document.getElementById('auth-client-phone')?.value;
  const org = document.getElementById('auth-client-org')?.value;

  if (!name || !email) {
    alert('Please enter your Name and Email address.');
    return;
  }

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, organization: org })
    });
    const data = await res.json();
    if (data.success) {
      currentUser = data.user;
      localStorage.setItem('phresh_user', JSON.stringify(currentUser));
      isAuthModalOpen = false;
      showToast(`Signed in as ${email}. Welcome email sent to your inbox.`);
    }
  } catch (err) {
    currentUser = { name, email, phone: phone || '+256 700 000000', organization: org || 'General Client' };
    localStorage.setItem('phresh_user', JSON.stringify(currentUser));
    isAuthModalOpen = false;
    showToast(`Signed in as ${email}.`);
  }
  renderApp();
};

window.toggleCartDrawer = function() {
  isCartDrawerOpen = !isCartDrawerOpen;
  renderApp();
};

window.addToCart = function(serviceId, qty = 1) {
  const service = OFFICIAL_PHRESH_SERVICES.find(s => s.id === serviceId);
  if (!service) return;

  const existing = cartItems.find(i => i.id === serviceId);
  if (existing) {
    existing.qty += qty;
  } else {
    cartItems.push({
      id: service.id,
      name: service.name,
      priceUGX: service.priceUGX,
      category: service.category,
      qty: qty
    });
  }
  localStorage.setItem('phresh_cart', JSON.stringify(cartItems));
  isCartDrawerOpen = true;
  renderApp();
};

window.removeFromCart = function(serviceId) {
  cartItems = cartItems.filter(i => i.id !== serviceId);
  localStorage.setItem('phresh_cart', JSON.stringify(cartItems));
  renderApp();
};

window.updateCartQty = function(serviceId, newQty) {
  const qty = parseInt(newQty);
  if (qty <= 0) {
    window.removeFromCart(serviceId);
    return;
  }
  const item = cartItems.find(i => i.id === serviceId);
  if (item) {
    item.qty = qty;
    localStorage.setItem('phresh_cart', JSON.stringify(cartItems));
    renderApp();
  }
};

window.checkoutCart = async function() {
  if (cartItems.length === 0) {
    alert('Your Phresh Service Cart is empty.');
    return;
  }
  if (!currentUser || !currentUser.email) {
    window.openAuthModal();
    return;
  }

  const totalUGX = cartItems.reduce((acc, i) => acc + (i.priceUGX * i.qty), 0);

  try {
    const res = await fetch('/api/orders/place', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user: currentUser,
        cartItems: cartItems.map(i => ({ id: i.id, name: i.name, price: i.priceUGX, qty: i.qty })),
        totalUGX: totalUGX
      })
    });
    const data = await res.json();
    if (data.success) {
      cartItems = [];
      localStorage.setItem('phresh_cart', JSON.stringify([]));
      isCartDrawerOpen = false;
      showToast(`Inquiry placed! Confirmation email sent to ${currentUser.email}`);
    }
  } catch (err) {
    cartItems = [];
    localStorage.setItem('phresh_cart', JSON.stringify([]));
    isCartDrawerOpen = false;
    showToast(`Inquiry received for ${currentUser.email}`);
  }
  renderApp();
};

// Valid Multi-Page Routes
const VALID_PAGES = ['home', 'services', 'portfolio', 'about', 'contact'];

// Hero Showcase Slides
const HERO_SLIDES = [
  {
    title: 'We Turn Your Ideas Into Reality',
    highlight: 'Phresh Rank Core, Print Press & Web Hosting',
    subtitle: 'Uganda’s premier technology partner empowering schools with Phresh Rank Core report card engines, commercial print press, and web hosting.',
    badge: 'Phresh Tech Media Services',
    image: heroSoftwareImg,
    ctaText: 'Request Custom Quote',
    ctaPage: 'contact',
    stats: [
      { number: '50+', label: 'Partner Institutions' },
      { number: '5 Pillars', label: 'Tech & Media Solutions' },
      { number: 'Kasenge', label: 'Nakawuka Rd Kampala' }
    ]
  },
  {
    title: 'Automated Educational ERP & UNEB Grading',
    highlight: 'Phresh Rank Core Flagship Engine',
    subtitle: 'The #1 NCDC competence-based report card software trusted by Global High School Madudu, Pride College Lungala, Mpigi Light College, and St. Andrews College Moyo.',
    badge: 'Smart Educational Software',
    image: heroEduledgerImg,
    ctaText: 'Explore System Engineering',
    ctaPage: 'services',
    stats: [
      { number: '100k+', label: 'Reports Generated' },
      { number: '0%', label: 'Arithmetic Errors' },
      { number: 'Instant', label: 'PDF Report Cards' }
    ]
  },
  {
    title: 'High-Precision Commercial Print House',
    highlight: 'Waterproof PVC IDs, Receipt Books & Branding',
    subtitle: 'Ultra-sharp 3D vector logos, serialized financial receipt books, 300gsm laminated cards, and mega event banners.',
    badge: 'Commercial Print Press Studio',
    image: heroPrintingImg,
    ctaText: 'View Print Production',
    ctaPage: 'services',
    stats: [
      { number: '1200 DPI', label: 'High Definition Press' },
      { number: 'Waterproof', label: 'PVC Identity Badges' },
      { number: 'Carbonless', label: 'Duplicate Receipts' }
    ]
  },
  {
    title: 'Custom Brand Identity & 3D Vector Logos',
    highlight: 'Graphic Design, School Crests & Banners',
    subtitle: 'Distinctive visual identities, school crests, corporate brand manuals, and UI/UX asset kits engineered in Kampala.',
    badge: 'Graphic Design Studio',
    image: heroBrandingImg,
    ctaText: 'Start Branding Project',
    ctaPage: 'contact',
    stats: [
      { number: '3D Vector', label: 'Ultra High Definition' },
      { number: 'Full Brand', label: 'Identity Guidelines' },
      { number: '100+', label: 'Crests & Logos' }
    ]
  },
  {
    title: 'Institutional Portals & Managed cPanel Hosting',
    highlight: 'High Speed SSD Web Design & SSL',
    subtitle: 'School web portals with online admission forms, cPanel SSD cloud hosting, free SSL certificates, and speed optimization.',
    badge: 'Web Design & Managed Hosting',
    image: heroWebHostingImg,
    ctaText: 'Launch Your Portal',
    ctaPage: 'services',
    stats: [
      { number: '99.9%', label: 'Uptime SLA' },
      { number: 'Free SSL', label: 'Security Included' },
      { number: 'cPanel', label: 'SSD Speed' }
    ]
  }
];

// Initialize Application & Multi-Page Router
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (VALID_PAGES.includes(hash)) {
    currentPage = hash;
  }

  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash.replace('#', '').toLowerCase();
    if (VALID_PAGES.includes(newHash) && newHash !== currentPage) {
      currentPage = newHash;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderApp();
    }
  });

  renderApp();
  startHeroAutoSlide();
});

// Navigation Handler & Section Smooth Scroll
window.navigateTo = function(pageName, subPillar = null) {
  if (!VALID_PAGES.includes(pageName)) return;
  currentPage = pageName;
  if (subPillar) {
    activeServicePillar = subPillar;
  }
  window.location.hash = pageName;
  isMobileMenuOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

window.scrollToSection = function(sectionId, pageName = null) {
  isMobileMenuOpen = false;

  const performScroll = () => {
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      const headerOffset = 84;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (pageName && pageName !== currentPage) {
    currentPage = pageName;
    window.location.hash = pageName;
    renderApp();
    setTimeout(performScroll, 60);
  } else {
    performScroll();
  }
};

window.toggleMobileMenu = function() {
  isMobileMenuOpen = !isMobileMenuOpen;
  renderApp();
};

// Listen to scroll to adjust header shadow dynamically
window.addEventListener('scroll', () => {
  const headerEl = document.getElementById('main-header');
  if (headerEl) {
    if (window.scrollY > 20) {
      headerEl.classList.add('shadow-md', 'bg-white/95', 'border-slate-300/80');
      headerEl.classList.remove('bg-white/80', 'border-slate-200/60');
    } else {
      headerEl.classList.remove('shadow-md', 'bg-white/95', 'border-slate-300/80');
      headerEl.classList.add('bg-white/80', 'border-slate-200/60');
    }
  }
});

// Hero Slider Controls
function startHeroAutoSlide() {
  if (autoSlideTimer) clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => {
    currentHeroSlide = (currentHeroSlide + 1) % HERO_SLIDES.length;
    renderHeroSlideContent();
  }, 6000);
}

window.setHeroSlide = function(idx) {
  currentHeroSlide = idx;
  startHeroAutoSlide();
  renderHeroSlideContent();
};

// Main App Render Loop
function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  root.innerHTML = `
    <!-- Navigation Header (Sticky with Glassmorphic Backdrop Blur) -->
    <header id="main-header" class="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-200/60 shadow-xs transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Site Branding -->
        <a href="#home" onclick="scrollToSection('hero-section', 'home')" class="flex items-center gap-3 group focus:outline-none">
          <div class="relative flex items-center justify-center">
            <img src="/logo.svg" alt="Phresh Tech Media Services" class="h-11 w-auto object-contain group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
            <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full shadow-xs animate-pulse"></span>
          </div>
          <div class="hidden sm:block">
            <div class="flex items-center gap-2">
              <span class="block text-lg font-black tracking-tight text-[#0B1B3D] leading-none">
                PHRESH TECH
              </span>
              <span class="text-[9px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-300/60 leading-none">
                Direct
              </span>
            </div>
            <span class="block text-xs font-extrabold tracking-widest text-[#1E7E34] uppercase mt-0.5">
              MEDIA SERVICES • KAMPALA
            </span>
          </div>
        </a>

        <!-- Desktop Links with Smooth Scroll -->
        <nav class="hidden lg:flex items-center gap-1 text-xs font-extrabold uppercase tracking-wider text-slate-700">
          <button onclick="scrollToSection('hero-section', 'home')" class="px-3.5 py-2 rounded-xl transition ${currentPage === 'home' ? 'text-[#1E7E34] bg-emerald-50/90 border border-emerald-200/80 shadow-xs' : 'hover:text-[#1E7E34] hover:bg-slate-50/80'}">
            Home
          </button>
          <button onclick="scrollToSection('services-catalog-section', 'services')" class="px-3.5 py-2 rounded-xl transition ${currentPage === 'services' ? 'text-[#1E7E34] bg-emerald-50/90 border border-emerald-200/80 shadow-xs' : 'hover:text-[#1E7E34] hover:bg-slate-50/80'}">
            Services
          </button>
          <button onclick="scrollToSection('portfolio-section', 'portfolio')" class="px-3.5 py-2 rounded-xl transition ${currentPage === 'portfolio' ? 'text-[#1E7E34] bg-emerald-50/90 border border-emerald-200/80 shadow-xs' : 'hover:text-[#1E7E34] hover:bg-slate-50/80'}">
            Portfolio
          </button>
          <button onclick="scrollToSection('about-section', 'about')" class="px-3.5 py-2 rounded-xl transition ${currentPage === 'about' ? 'text-[#1E7E34] bg-emerald-50/90 border border-emerald-200/80 shadow-xs' : 'hover:text-[#1E7E34] hover:bg-slate-50/80'}">
            About
          </button>
          <button onclick="scrollToSection('contact-section', 'contact')" class="px-3.5 py-2 rounded-xl transition ${currentPage === 'contact' ? 'text-[#1E7E34] bg-emerald-50/90 border border-emerald-200/80 shadow-xs' : 'hover:text-[#1E7E34] hover:bg-slate-50/80'}">
            Contact
          </button>
        </nav>

        <!-- Right Quick Actions -->
        <div class="hidden sm:flex items-center gap-2.5">
          <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media,%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" title="WhatsApp: +256 757 848 094" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-2.5 rounded-xl shadow-xs transition flex items-center gap-2 group">
            ${WHATSAPP_ICON_SVG}
            <span>WhatsApp</span>
          </a>
          <button onclick="scrollToSection('contact-section', 'contact')" class="bg-[#8B0000] hover:bg-red-800 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-xs transition uppercase tracking-wider">
            Get Quote
          </button>
        </div>

        <!-- Mobile Hamburger Toggle -->
        <button onclick="toggleMobileMenu()" class="lg:hidden p-2.5 text-slate-700 bg-slate-100/90 rounded-xl hover:bg-slate-200 transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

      </div>

      <!-- Mobile Navigation Drawer -->
      ${isMobileMenuOpen ? `
        <div class="lg:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 py-4 space-y-2 text-xs font-extrabold uppercase animate-fade-in shadow-xl">
          <button onclick="scrollToSection('hero-section', 'home')" class="w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 text-slate-800 flex items-center justify-between">
            <span>Home</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <button onclick="scrollToSection('featured-services-section', 'home')" class="w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 text-slate-800 flex items-center justify-between">
            <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> Service Highlights</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <button onclick="scrollToSection('services-catalog-section', 'services')" class="w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 text-slate-800 flex items-center justify-between">
            <span>Services & Solutions</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <button onclick="scrollToSection('portfolio-section', 'portfolio')" class="w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 text-slate-800 flex items-center justify-between">
            <span>Portfolio & Case Studies</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <button onclick="scrollToSection('about-section', 'about')" class="w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 text-slate-800 flex items-center justify-between">
            <span>About Us</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <button onclick="scrollToSection('contact-section', 'contact')" class="w-full text-left px-4 py-3 rounded-xl hover:bg-emerald-50 text-slate-800 flex items-center justify-between">
            <span>Contact Us</span>
            <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
          <a href="https://wa.me/256757848094" target="_blank" class="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 rounded-xl shadow-xs transition flex items-center justify-center gap-2">
            ${WHATSAPP_ICON_SVG}
            <span>WhatsApp Us (+256 757 848 094)</span>
          </a>
        </div>
      ` : ''}
    </header>

    <!-- Main Active Page Body -->
    <main class="flex-1">
      ${renderActivePage()}
    </main>

    <!-- Footer -->
    <footer class="bg-[#08132B] text-white border-t border-white/10 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <img src="/logo.svg" alt="Phresh Tech Media Services" class="h-12 w-auto bg-white p-1 rounded-xl shadow-md" referrerPolicy="no-referrer" />
              <div>
                <span class="font-black text-base text-white block leading-none">Phresh Tech Media</span>
                <span class="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Services Uganda</span>
              </div>
            </div>
            <p class="text-xs text-gray-300 leading-relaxed">
              Leading Ugandan technology and media services company providing software engineering, commercial printing press, graphic design, web hosting, and digital marketing.
            </p>
            <div class="text-xs text-emerald-400 font-mono font-bold">
              Kasenge - Nakawuka Road, Kampala / Wakiso
            </div>
          </div>

          <div class="space-y-3 text-xs">
            <h4 class="font-black text-white uppercase tracking-wider text-xs">Our 5 Operational Pillars</h4>
            <ul class="space-y-2 text-gray-300">
              <li><button onclick="navigateTo('services', 'graphic-design')" class="hover:text-emerald-400 transition">Graphic Design & Brand Identity</button></li>
              <li><button onclick="navigateTo('services', 'print-copy')" class="hover:text-emerald-400 transition">Commercial Printing & Copying</button></li>
              <li><button onclick="navigateTo('services', 'database-systems')" class="hover:text-emerald-400 transition">Custom Database Engineering</button></li>
              <li><button onclick="navigateTo('services', 'web-development')" class="hover:text-emerald-400 transition">Web Design & Managed Hosting</button></li>
              <li><button onclick="navigateTo('services', 'social-media')" class="hover:text-emerald-400 transition">Social Media Management</button></li>
            </ul>
          </div>

          <div class="space-y-3 text-xs">
            <h4 class="font-black text-white uppercase tracking-wider text-xs">Direct Leadership & Office Contacts</h4>
            <div class="space-y-2 text-gray-300">
              <p class="p-2.5 bg-white/5 rounded-xl border border-white/10">
                <strong class="text-white block">Mulindwa Ibrahim (Ibra)</strong>
                <span class="text-emerald-400 text-[11px]">Software Engineering Director</span><br />
                <a href="tel:+256702083515" class="hover:underline font-mono">+256 702 083515</a> | <a href="tel:+256747311209" class="hover:underline font-mono">+256 747 311209</a>
              </p>
              <p class="p-2.5 bg-white/5 rounded-xl border border-white/10">
                <strong class="text-white block">Steven Bagalana (Steve)</strong>
                <span class="text-amber-400 text-[11px]">Operations & Print Director</span><br />
                <a href="tel:+256777139918" class="hover:underline font-mono">+256 777 139918</a> | <a href="tel:+256757848094" class="hover:underline font-mono">+256 757 848094</a>
              </p>
              <p class="p-2.5 bg-white/5 rounded-xl border border-white/10">
                <strong class="text-white block">Kasenge Office Desk</strong>
                <span class="text-sky-400 text-[11px]">General Inquiries & Orders</span><br />
                <a href="tel:+256741145595" class="hover:underline font-mono">+256 741 145595</a>
              </p>
            </div>
          </div>

          <div class="space-y-3 text-xs">
            <h4 class="font-black text-white uppercase tracking-wider text-xs">Direct WhatsApp & Inquiries</h4>
            <p class="text-gray-300">Fast responsive quote dispatch directly to sales directors:</p>
            <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media" target="_blank" class="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs p-3 rounded-xl text-center shadow transition">
              ${WHATSAPP_ICON_SVG}
              <span>WhatsApp +256 757 848 094</span>
            </a>
            <p class="text-gray-400 text-[11px]">
              Email: <a href="mailto:phreshtechmedia@gmail.com" class="text-emerald-400 underline">phreshtechmedia@gmail.com</a>
            </p>
          </div>

        </div>

        <div class="pt-8 border-t border-white/10 text-center text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© ${new Date().getFullYear()} Phresh Tech Media Services (phreshtechmedia.com). All Rights Reserved.</p>
          <div class="flex gap-4">
            <button onclick="navigateTo('services')" class="hover:text-emerald-400">Services Catalog</button>
            <button onclick="navigateTo('portfolio')" class="hover:text-emerald-400">Case Studies</button>
            <button onclick="navigateTo('contact')" class="hover:text-emerald-400">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>

    <!-- Floating Action Bar for Mobile & Quick Cart -->
    <div class="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      <button onclick="toggleCartDrawer()" class="bg-[#0B1B3D] hover:bg-slate-900 text-white p-3.5 rounded-full shadow-2xl border border-slate-700 flex items-center gap-2 transition hover:scale-105">
        <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"></path></svg>
        <span class="text-xs font-bold hidden sm:inline">Phresh Cart</span>
        <span class="bg-[#1E7E34] text-white text-[11px] font-black px-2 py-0.5 rounded-full">${cartItems.reduce((a,b)=>a+b.qty,0)}</span>
      </button>
    </div>

    <!-- Modals, Drawers & Toast -->
    ${renderToastNotification()}
    ${renderCartDrawer()}
    ${renderAuthModal()}
  `;

  // Render sub-slide content if on home page
  if (currentPage === 'home') {
    renderHeroSlideContent();
  }
}

// ==========================================
// EMAIL & CART MODAL COMPONENT RENDERERS
// ==========================================
function renderToastNotification() {
  if (!toastMessage) return '';
  return `
    <div class="fixed top-20 right-6 z-[100] bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl border border-emerald-500/50 flex items-center gap-3 animate-fade-in text-xs font-semibold">
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
      <span>${toastMessage}</span>
    </div>
  `;
}

function renderAuthModal() {
  if (!isAuthModalOpen) return '';

  return `
    <div class="fixed inset-0 z-[95] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div class="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md overflow-hidden">
        
        <div class="bg-gradient-to-r from-[#0B1B3D] to-[#08132B] p-6 text-white relative">
          <button onclick="closeAuthModal()" class="absolute top-4 right-4 text-slate-400 hover:text-white p-1">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 font-bold">
              ✉️
            </div>
            <div>
              <h3 class="font-black text-lg text-white">Provide Client Email</h3>
              <p class="text-xs text-emerald-400">Receive instant welcome & inquiry email updates</p>
            </div>
          </div>
        </div>

        <form onsubmit="handleClientAuthSubmit(event)" class="p-6 space-y-4">
          <p class="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-200">
            When you provide your email address, you will receive an official welcome email directly from <strong>phreshtechmediaservices@gmail.com</strong>.
          </p>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
            <input type="text" id="auth-client-name" required value="${currentUser?.name || ''}" placeholder="e.g. Mugisha Alex" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-600" />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
            <input type="email" id="auth-client-email" required value="${currentUser?.email || ''}" placeholder="e.g. client@gmail.com" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-600" />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Phone Number (Optional)</label>
            <input type="tel" id="auth-client-phone" value="${currentUser?.phone || ''}" placeholder="+256 700 000000" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-600" />
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Institution / School / Organization</label>
            <input type="text" id="auth-client-org" value="${currentUser?.organization || ''}" placeholder="e.g. Kasenge Primary School" class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-emerald-600" />
          </div>

          <button type="submit" class="w-full bg-[#1E7E34] hover:bg-emerald-700 text-white font-black py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2">
            <span>Save & Dispatch Welcome Email</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </form>

      </div>
    </div>
  `;
}

function renderCartDrawer() {
  if (!isCartDrawerOpen) return '';

  const totalUGX = cartItems.reduce((acc, item) => acc + (item.priceUGX * item.qty), 0);

  return `
    <div class="fixed inset-0 z-[90] bg-slate-900/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div class="bg-white w-full max-w-md h-full shadow-2xl border-l border-slate-200 flex flex-col justify-between">
        
        <!-- Cart Header -->
        <div class="bg-[#0B1B3D] text-white p-5 flex items-center justify-between border-b border-white/10">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              🛒
            </div>
            <div>
              <h3 class="font-black text-base">Phresh Service Cart</h3>
              <p class="text-xs text-emerald-400">${cartItems.length} items selected</p>
            </div>
          </div>
          <button onclick="toggleCartDrawer()" class="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <!-- User Email Notice in Cart -->
        <div class="bg-slate-50 px-5 py-3 border-b border-slate-200 flex items-center justify-between">
          ${currentUser && currentUser.email ? `
            <div class="flex items-center gap-2 text-xs">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-slate-600">Receiving email to: <strong class="text-slate-900">${currentUser.email}</strong></span>
            </div>
            <button onclick="openAuthModal()" class="text-[11px] text-emerald-700 font-bold hover:underline">Change</button>
          ` : `
            <div class="flex items-center gap-2 text-xs text-amber-800">
              <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              <span>Email login required for follow-up</span>
            </div>
            <button onclick="openAuthModal()" class="text-[11px] bg-amber-100 text-amber-900 font-bold px-2.5 py-1 rounded-lg hover:bg-amber-200">Sign In</button>
          `}
        </div>

        <!-- Cart Items List -->
        <div class="p-5 flex-1 overflow-y-auto space-y-3">
          ${cartItems.length === 0 ? `
            <div class="text-center py-12 space-y-3">
              <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-2xl">
                🛒
              </div>
              <p class="text-slate-500 font-bold text-sm">Your service cart is empty</p>
              <button onclick="navigateTo('services')" class="text-xs bg-emerald-50 text-emerald-700 font-extrabold px-4 py-2 rounded-xl border border-emerald-200">
                Browse Master Pricing Catalog
              </button>
            </div>
          ` : cartItems.map(item => `
            <div class="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <h4 class="font-bold text-xs text-slate-900">${item.name}</h4>
                  <span class="text-[10px] font-mono text-emerald-700 uppercase">${item.category}</span>
                </div>
                <button onclick="removeFromCart('${item.id}')" class="text-slate-400 hover:text-red-600 text-xs p-1">
                  ✕
                </button>
              </div>
              <div class="flex items-center justify-between pt-2 border-t border-slate-200/80">
                <div class="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden text-xs">
                  <button onclick="updateCartQty('${item.id}', ${item.qty - 1})" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 font-bold">-</button>
                  <span class="px-3 font-mono font-bold text-slate-800">${item.qty}</span>
                  <button onclick="updateCartQty('${item.id}', ${item.qty + 1})" class="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 font-bold">+</button>
                </div>
                <div class="text-right">
                  <span class="text-xs font-black text-[#0B1B3D]">UGX ${(item.priceUGX * item.qty).toLocaleString()}</span>
                  <span class="block text-[10px] text-slate-400">UGX ${item.priceUGX.toLocaleString()} ea</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Cart Footer -->
        <div class="p-5 bg-slate-50 border-t border-slate-200 space-y-3">
          <div class="flex items-center justify-between text-sm">
            <span class="font-bold text-slate-600">Total Estimate:</span>
            <span class="font-black text-lg text-[#0B1B3D] font-mono">UGX ${totalUGX.toLocaleString()}</span>
          </div>

          <button onclick="checkoutCart()" ${cartItems.length === 0 ? 'disabled' : ''} class="w-full bg-[#8B0000] hover:bg-red-800 disabled:opacity-50 text-white font-black py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg transition flex items-center justify-center gap-2">
            <span>Place Cart Order & Receive Email</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>

      </div>
    </div>
  `;
}

// Router Page Selector
function renderActivePage() {
  switch (currentPage) {
    case 'home':
      return renderHomePage();
    case 'services':
      return renderServicesPage();
    case 'portfolio':
      return renderPortfolioPage();
    case 'about':
      return renderAboutPage();
    case 'contact':
      return renderContactPage();
    default:
      return renderHomePage();
  }
}

// ==========================================
// FEATURED SERVICES 3-COLUMN GRID COMPONENT
// ==========================================
function renderFeaturedServicesThreeGrid() {
  return `
    <section id="featured-services-section" class="py-16 bg-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-black uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-500/30 inline-block">
            Featured Service Highlights
          </span>
          <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Specialized Technology & Design Capabilities
          </h2>
          <p class="text-slate-300 text-sm leading-relaxed">
            Engineered for high performance and visual impact across Custom Web Application Development, Database Systems, and Professional Graphic Design.
          </p>
        </div>

        <!-- 3-Column Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

          <!-- Card 1: Custom Web & Software Development -->
          <div class="bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6 transition-all group duration-300 hover:shadow-emerald-950/40">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 bg-emerald-500/20 border border-emerald-400/30 text-emerald-400 rounded-2xl flex items-center justify-center font-mono font-black text-sm group-hover:scale-110 transition-transform">
                  APPS
                </div>
                <span class="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-800/50 px-2.5 py-1 rounded-full uppercase">
                  Full-Stack Architecture
                </span>
              </div>

              <div>
                <h3 class="text-xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  Custom Web & Software Development
                </h3>
                <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                  Tailored web applications, cloud APIs, custom enterprise admin portals, and automated business workflows.
                </p>
              </div>

              <div class="pt-2 border-t border-slate-800/80 space-y-2">
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Full-Stack Web & Cloud Application Architecture</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Automated Gmail & SMTP Dispatchers</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>REST API Integrations & Webhooks</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Session Security & Role-Based Auth</span>
                </div>
              </div>
            </div>

            <div class="space-y-3 pt-4 border-t border-slate-800">
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Starting Estimate:</span>
                <span class="font-mono font-black text-emerald-400">From UGX 400,000</span>
              </div>
              <button onclick="addToCart('phresh-nexus')" class="w-full bg-[#1E7E34] hover:bg-emerald-600 text-white text-xs font-black py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"></path></svg>
                <span>Add Web System to Cart</span>
              </button>
            </div>
          </div>

          <!-- Card 2: MySQL Database Systems -->
          <div class="bg-slate-950/80 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6 transition-all group duration-300 hover:shadow-blue-950/40">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 bg-blue-500/20 border border-blue-400/30 text-blue-400 rounded-2xl flex items-center justify-center font-mono font-black text-sm group-hover:scale-110 transition-transform">
                  SQL
                </div>
                <span class="text-[10px] font-mono font-bold text-blue-400 bg-blue-950 border border-blue-800/50 px-2.5 py-1 rounded-full uppercase">
                  Relational Data
                </span>
              </div>

              <div>
                <h3 class="text-xl font-black text-white group-hover:text-blue-400 transition-colors">
                  MySQL Database Systems
                </h3>
                <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                  High-capacity relational database schemas designed for school grading, ERP record tracking, and secure financial ledgers.
                </p>
              </div>

              <div class="pt-2 border-t border-slate-800/80 space-y-2">
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>MySQL 8.x Relational Schema Architecture</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Phresh Rank Core & Eduledger Data Engines</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Zero Data-Loss Indexing & ACID Compliance</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Automated Transaction Logs & Backups</span>
                </div>
              </div>
            </div>

            <div class="space-y-3 pt-4 border-t border-slate-800">
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Rank Core Base:</span>
                <span class="font-mono font-black text-blue-400">UGX 350,000</span>
              </div>
              <button onclick="addToCart('rank-core-offline')" class="w-full bg-blue-700 hover:bg-blue-600 text-white text-xs font-black py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"></path></svg>
                <span>Add Rank Core DB to Cart</span>
              </button>
            </div>
          </div>

          <!-- Card 3: Professional Graphic Design -->
          <div class="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6 transition-all group duration-300 hover:shadow-amber-950/40">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 bg-amber-500/20 border border-amber-400/30 text-amber-400 rounded-2xl flex items-center justify-center font-mono font-black text-sm group-hover:scale-110 transition-transform">
                  ART
                </div>
                <span class="text-[10px] font-mono font-bold text-amber-400 bg-amber-950 border border-amber-800/50 px-2.5 py-1 rounded-full uppercase">
                  Visual Branding
                </span>
              </div>

              <div>
                <h3 class="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  Professional Graphic Design
                </h3>
                <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                  Creative branding identity, corporate logos, marketing collateral, vector artwork, and commercial print press graphics.
                </p>
              </div>

              <div class="pt-2 border-t border-slate-800/80 space-y-2">
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Phresh Branding & Logo Systems</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Minor (5k), Medium (15k) & Mega (25k) Branding</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Print-Ready High-Res Vector Outputs (AI/PDF)</span>
                </div>
                <div class="flex items-center gap-2 text-xs text-slate-300">
                  <svg class="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Banners, Stickers & Receipt Book Visuals</span>
                </div>
              </div>
            </div>

            <div class="space-y-3 pt-4 border-t border-slate-800">
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-400 font-medium">Standard Service:</span>
                <span class="font-mono font-black text-amber-400">UGX 15,000</span>
              </div>
              <button onclick="addToCart('graphic-designing')" class="w-full bg-amber-600 hover:bg-amber-500 text-white text-xs font-black py-3 rounded-xl transition shadow flex items-center justify-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"></path></svg>
                <span>Add Graphic Design to Cart</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

// ==========================================
// 1. HOME PAGE RENDERER
// ==========================================
function renderHomePage() {
  return `
    <!-- Split Dynamic Hero Banner -->
    <div id="hero-section" class="bg-gradient-to-b from-[#0B1B3D] via-[#08132B] to-[#0D214A] text-white relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div id="hero-slide-content" class="max-w-7xl mx-auto min-h-[420px] flex items-center">
        <!-- Rendered dynamically via renderHeroSlideContent() -->
      </div>

      <!-- Slide Indicator Controls -->
      <div class="max-w-7xl mx-auto mt-8 flex items-center justify-between border-t border-white/10 pt-4">
        <div class="flex items-center gap-2">
          ${HERO_SLIDES.map((_, idx) => `
            <button onclick="setHeroSlide(${idx})" class="h-2.5 rounded-full transition-all ${currentHeroSlide === idx ? 'w-8 bg-emerald-400' : 'w-2.5 bg-white/30 hover:bg-white/60'}"></button>
          `).join('')}
        </div>
        <span class="text-xs font-mono text-gray-400">Kasenge - Nakawuka Road Headquarters</span>
      </div>
    </div>

    <!-- 5-Pillar Service Grid -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-black uppercase tracking-widest text-[#1E7E34]">Our Core Pillars of Excellence</span>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">5 Operational Pillars for Business Growth</h2>
          <p class="text-slate-600 text-sm">
            Phresh Tech Media Services combines full-stack database engineering with a state-of-the-art commercial printing press house in Kampala.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Pillar 1 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="w-12 h-12 bg-emerald-100 text-[#1E7E34] rounded-2xl flex items-center justify-center text-sm font-black tracking-wider group-hover:scale-110 transition-transform">
                GD
              </div>
              <h3 class="text-xl font-black text-slate-900">Graphic Design & Branding</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Graphic designing (UGX 15k), Phresh Branding (UGX 10k), Minor (5k), Medium (15k) & Mega Branding (25k).
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold text-slate-500">From UGX 5,000</span>
              <button onclick="navigateTo('services', 'graphic-design')" class="text-[#1E7E34] font-black text-xs hover:underline flex items-center gap-1">
                Explore Pillar →
              </button>
            </div>
          </div>

          <!-- Pillar 2 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="w-12 h-12 bg-red-100 text-[#8B0000] rounded-2xl flex items-center justify-center text-sm font-black tracking-wider group-hover:scale-110 transition-transform">
                PR
              </div>
              <h3 class="text-xl font-black text-slate-900">Commercial Printing & Press</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Receipt book 100 leaves (UGX 25k), Banner/sticker printing per sq m (UGX 25k) & high-speed copying.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold text-slate-500">UGX 25,000 / unit</span>
              <button onclick="navigateTo('services', 'print-copy')" class="text-[#8B0000] font-black text-xs hover:underline flex items-center gap-1">
                Explore Pillar →
              </button>
            </div>
          </div>

          <!-- Pillar 3 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="w-12 h-12 bg-blue-100 text-blue-800 rounded-2xl flex items-center justify-center text-sm font-black tracking-wider group-hover:scale-110 transition-transform">
                DB
              </div>
              <h3 class="text-xl font-black text-slate-900">Custom Database & ERP Systems</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Phresh Rank Core (UGX 350k/400k), Eduledger (400k), Rent Ledger (400k), Church System (400k) & POS Systems.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold text-slate-500">From UGX 350,000</span>
              <button onclick="navigateTo('services', 'database-systems')" class="text-blue-800 font-black text-xs hover:underline flex items-center gap-1">
                Explore Pillar →
              </button>
            </div>
          </div>

          <!-- Pillar 4 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group">
            <div class="space-y-3">
              <div class="w-12 h-12 bg-amber-100 text-amber-800 rounded-2xl flex items-center justify-center text-sm font-black tracking-wider group-hover:scale-110 transition-transform">
                WEB
              </div>
              <h3 class="text-xl font-black text-slate-900">Web Design & Domain Purchases</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Official domain purchases (UGX 25k), institutional school web portals, and custom cloud hosting solutions.
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold text-slate-500">Domain UGX 25,000</span>
              <button onclick="navigateTo('services', 'web-development')" class="text-amber-800 font-black text-xs hover:underline flex items-center gap-1">
                Explore Pillar →
              </button>
            </div>
          </div>

          <!-- Pillar 5 -->
          <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between group md:col-span-2 lg:col-span-1">
            <div class="space-y-3">
              <div class="w-12 h-12 bg-purple-100 text-purple-800 rounded-2xl flex items-center justify-center text-sm font-black tracking-wider group-hover:scale-110 transition-transform">
                ENT
              </div>
              <h3 class="text-xl font-black text-slate-900">Phresh Enterprise Suite</h3>
              <p class="text-xs text-slate-600 leading-relaxed">
                Phresh E-lesson manager (UGX 600k), Phresh-Nexus (UGX 850k), System Renewal (UGX 100k) & System Wholesale (UGX 1.5M).
              </p>
            </div>
            <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span class="text-[11px] font-bold text-slate-500">Full Catalog</span>
              <button onclick="navigateTo('services', 'tariff-catalog')" class="text-purple-800 font-black text-xs hover:underline flex items-center gap-1">
                Official Price Tariff →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3-Column Highlight Grid: Custom Web Apps, Database Systems, Graphic Design -->
    ${renderFeaturedServicesThreeGrid()}

    <!-- Client Testimonials & Live Stats Counter -->
    <section class="py-16 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Stats Counter Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
            <span class="block text-3xl sm:text-4xl font-black text-[#1E7E34]">50+</span>
            <span class="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1 block">Partner Schools</span>
          </div>
          <div class="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
            <span class="block text-3xl sm:text-4xl font-black text-[#8B0000]">100k+</span>
            <span class="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1 block">Report Cards Issued</span>
          </div>
          <div class="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
            <span class="block text-3xl sm:text-4xl font-black text-[#0B1B3D]">100%</span>
            <span class="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1 block">Offline Backup Sync</span>
          </div>
          <div class="bg-white border border-slate-200 rounded-3xl p-6 text-center shadow-sm">
            <span class="block text-3xl sm:text-4xl font-black text-emerald-600">24/7</span>
            <span class="text-xs text-slate-600 font-bold uppercase tracking-wider mt-1 block">Kasenge Support Desk</span>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="space-y-6">
          <div class="text-center space-y-2">
            <span class="text-xs font-black uppercase tracking-widest text-[#1E7E34]">Client Testimonials</span>
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Trusted Across Educational Institutions</h2>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div class="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
              <p class="text-xs text-slate-700 italic leading-relaxed">
                "Phresh Rank Core eliminated weeks of manual grade calculation for our students. Teachers enter marks smoothly, and parent report cards are generated cleanly in under 10 minutes."
              </p>
              <div class="border-t border-slate-100 pt-3">
                <span class="block font-black text-slate-900 text-xs">Global High School Madudu</span>
                <span class="text-[10px] text-slate-500">Academic Registrar's Desk</span>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div class="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
              <p class="text-xs text-slate-700 italic leading-relaxed">
                "Our academic department relies on Phresh Rank Core daily for student marksheets, NCDC competence descriptors, and instant parent PDF report card batch printing."
              </p>
              <div class="border-t border-slate-100 pt-3">
                <span class="block font-black text-slate-900 text-xs">Pride College Lungala</span>
                <span class="text-[10px] text-slate-500">Director of Studies (DOS)</span>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div class="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
              <p class="text-xs text-slate-700 italic leading-relaxed">
                "Phresh Rank Core coupled with EduLedger gives our school total control over student academic rankings, marksheets, fee ledgers, and official report cards."
              </p>
              <div class="border-t border-slate-100 pt-3">
                <span class="block font-black text-slate-900 text-xs">Mpigi Light College</span>
                <span class="text-[10px] text-slate-500">Bursary & DOS Office</span>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
              <div class="flex items-center gap-1 text-amber-400 text-sm">★★★★★</div>
              <p class="text-xs text-slate-700 italic leading-relaxed">
                "Phresh Rank Core's 100% offline desktop engine guarantees zero downtime during end-of-term report card generation. It is the most reliable school marks system in Uganda."
              </p>
              <div class="border-t border-slate-100 pt-3">
                <span class="block font-black text-slate-900 text-xs">St. Andrews College Moyo</span>
                <span class="text-[10px] text-slate-500">Headteacher's Desk</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

// Render Split Hero Banner Content
function renderHeroSlideContent() {
  const container = document.getElementById('hero-slide-content');
  if (!container) return;

  const slide = HERO_SLIDES[currentHeroSlide];

  container.innerHTML = `
    <div class="grid lg:grid-cols-12 gap-8 items-center w-full">
      <div class="lg:col-span-7 space-y-6">
        <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-emerald-400 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full">
          <span>${slide.badge}</span>
        </div>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
          ${slide.title} <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
            ${slide.highlight}
          </span>
        </h1>
        <p class="text-gray-300 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
          ${slide.subtitle}
        </p>

        <div class="flex flex-wrap items-center gap-4 pt-2">
          <button onclick="navigateTo('${slide.ctaPage}')" class="bg-[#8B0000] hover:bg-red-800 text-white font-extrabold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg hover:shadow-red-900/40 transition">
            ${slide.ctaText} →
          </button>
          <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media" target="_blank" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl text-xs transition flex items-center gap-2">
            ${WHATSAPP_ICON_SVG}
            <span>WhatsApp Us</span>
          </a>
        </div>

        <div class="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
          ${slide.stats.map(st => `
            <div>
              <span class="block text-lg font-black text-emerald-400">${st.number}</span>
              <span class="text-gray-400 text-[11px] font-medium">${st.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="lg:col-span-5 relative">
        <div class="bg-gradient-to-br from-[#1E7E34]/20 to-[#8B0000]/20 p-2 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <img src="${slide.image}" alt="${slide.title}" class="w-full h-[420px] sm:h-[500px] lg:h-[560px] object-cover rounded-2xl shadow-inner relative z-10" referrerPolicy="no-referrer" onerror="this.onerror=null; this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.classList.remove('hidden');" />
          <div class="hidden w-full h-[420px] sm:h-[500px] lg:h-[560px] rounded-2xl bg-gradient-to-br from-[#0B1B3D] via-[#08132B] to-[#1E7E34]/40 p-6 flex flex-col justify-between border border-white/10">
            <div class="flex items-center justify-between">
              <span class="bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-emerald-400/30">${slide.badge}</span>
              <img src="/logo.svg" alt="Phresh Logo" class="h-8 w-auto bg-white/10 p-1 rounded-lg" />
            </div>
            <div class="space-y-2">
              <h3 class="text-xl font-black text-white leading-tight">${slide.title}</h3>
              <p class="text-xs text-emerald-300 font-bold">${slide.highlight}</p>
            </div>
            <div class="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-300">
              <span class="font-mono text-emerald-400 font-bold">PT MEDIA · KAMPALA</span>
              <span class="bg-white/10 px-2 py-0.5 rounded text-[10px]">Verified Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

window.updateHomeCalc = function(key, value) {
  homeCalcSelections[key] = Math.max(0, parseInt(value) || 0);
  const total = (homeCalcSelections.graphicDesign || 0) * 15000 + 
                (homeCalcSelections.receipts || 0) * 25000 + 
                (homeCalcSelections.rankCoreOffline || 0) * 350000;
  const el = document.getElementById('home-calc-total-ugx');
  if (el) el.innerText = `UGX ${total.toLocaleString()}`;
};

// ==========================================
// 2. SERVICES & SOLUTIONS PAGE RENDERER
// ==========================================
function renderServicesPage() {
  return `
    <div id="services-catalog-section" class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div class="max-w-7xl mx-auto space-y-3">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Uganda Commercial Catalogue</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">Services & Operational Pillars</h1>
        <p class="text-gray-300 text-sm max-w-2xl">
          Explore complete specifications across Graphic Design, Commercial Printing, Custom Database Systems, Web Development, and Social Media Marketing.
        </p>
      </div>
    </div>

    <section class="py-12 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <!-- Nav Tabs -->
        <div class="flex flex-wrap gap-2 border-b border-slate-200 pb-4 text-xs font-bold">
          <button onclick="switchServicePillar('tariff-catalog')" class="px-4 py-2.5 rounded-xl transition ${activeServicePillar === 'tariff-catalog' ? 'bg-emerald-700 text-white shadow' : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'}">
            Official Master Price Tariff (21 Phresh Services)
          </button>
          <button onclick="switchServicePillar('graphic-design')" class="px-4 py-2.5 rounded-xl transition ${activeServicePillar === 'graphic-design' ? 'bg-[#0B1B3D] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}">
            Graphic Design & Branding
          </button>
          <button onclick="switchServicePillar('print-copy')" class="px-4 py-2.5 rounded-xl transition ${activeServicePillar === 'print-copy' ? 'bg-[#8B0000] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}">
            Printing & Photocopying
          </button>
          <button onclick="switchServicePillar('database-systems')" class="px-4 py-2.5 rounded-xl transition ${activeServicePillar === 'database-systems' ? 'bg-[#1E7E34] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}">
            Custom Database Systems
          </button>
          <button onclick="switchServicePillar('web-development')" class="px-4 py-2.5 rounded-xl transition ${activeServicePillar === 'web-development' ? 'bg-amber-700 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}">
            Web Design & Hosting
          </button>
          <button onclick="switchServicePillar('social-media')" class="px-4 py-2.5 rounded-xl transition ${activeServicePillar === 'social-media' ? 'bg-purple-800 text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}">
            Social Media Marketing
          </button>
        </div>

        <!-- Active Pillar Content Body -->
        <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8">
          ${renderPillarDetailContent()}
        </div>

      </div>
    </section>

    <!-- 3-Column Highlight Grid: Custom Web Apps, Database Systems, Graphic Design -->
    ${renderFeaturedServicesThreeGrid()}
  `;
}

window.switchServicePillar = function(pillar) {
  activeServicePillar = pillar;
  renderApp();
};

function renderTariffCatalog() {
  const filtered = OFFICIAL_PHRESH_SERVICES.filter(item => {
    const matchesCat = tariffCategoryFilter === 'all' || item.category === tariffCategoryFilter;
    const matchesSearch = !tariffSearchQuery || 
      item.name.toLowerCase().includes(tariffSearchQuery.toLowerCase()) || 
      item.note.toLowerCase().includes(tariffSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return `
    <div class="space-y-6">
      <div class="border-b border-slate-100 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span class="text-xs font-black uppercase text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">Official Uganda Tariff Schedule</span>
          <h2 class="text-2xl font-black text-slate-900 mt-2">Phresh Services Official Master Price Directory</h2>
          <p class="text-xs text-slate-500 mt-1">Verified rates directly provided by Phresh Tech Media Services. All prices in Uganda Shillings (UGX).</p>
        </div>
        <button onclick="navigateTo('contact')" class="bg-[#0B1B3D] hover:bg-[#152e61] text-white font-bold text-xs px-5 py-3 rounded-xl shadow transition">
          Contact Us for Order →
        </button>
      </div>

      <!-- Search & Category Filters -->
      <div class="flex flex-col sm:flex-row gap-3 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <div class="flex flex-wrap gap-1.5 text-xs font-bold w-full sm:w-auto">
          <button onclick="setTariffCategory('all')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'all' ? 'bg-[#0B1B3D] text-white' : 'bg-white text-slate-700 hover:bg-slate-200'}">All (21 Items)</button>
          <button onclick="setTariffCategory('software')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'software' ? 'bg-[#0B1B3D] text-white' : 'bg-white text-slate-700 hover:bg-slate-200'}">Software Systems</button>
          <button onclick="setTariffCategory('design')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'design' ? 'bg-[#0B1B3D] text-white' : 'bg-white text-slate-700 hover:bg-slate-200'}">Branding & Design</button>
          <button onclick="setTariffCategory('print')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'print' ? 'bg-[#0B1B3D] text-white' : 'bg-white text-slate-700 hover:bg-slate-200'}">Printing Press</button>
          <button onclick="setTariffCategory('web')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'web' ? 'bg-[#0B1B3D] text-white' : 'bg-white text-slate-700 hover:bg-slate-200'}">Domains & Web</button>
        </div>
        <div class="w-full sm:w-64">
          <input type="text" placeholder="Search service name..." value="${tariffSearchQuery}" oninput="setTariffSearch(this.value)" class="w-full bg-white border border-slate-300 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-emerald-600" />
        </div>
      </div>

      <!-- Price Table Directory -->
      <div class="overflow-x-auto border border-slate-200 rounded-2xl">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
            <tr>
              <th class="p-3.5">#</th>
              <th class="p-3.5">Service Name</th>
              <th class="p-3.5">Category</th>
              <th class="p-3.5">Official Rate (UGX)</th>
              <th class="p-3.5">Details / Notes</th>
              <th class="p-3.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 font-medium text-slate-800">
            ${filtered.map((item, idx) => `
              <tr class="hover:bg-emerald-50/40 transition">
                <td class="p-3.5 font-mono text-slate-400">${idx + 1}</td>
                <td class="p-3.5 font-bold text-slate-900">${item.name}</td>
                <td class="p-3.5 uppercase text-[10px] font-black text-slate-500">
                  <span class="px-2 py-0.5 bg-slate-100 rounded-md border border-slate-200">${item.category}</span>
                </td>
                <td class="p-3.5 font-mono font-black text-emerald-700 text-sm">
                  UGX ${item.priceUGX.toLocaleString()}
                </td>
                <td class="p-3.5 text-slate-500">${item.note}</td>
                <td class="p-3.5 text-right">
                  <button onclick="addToCart('${item.id}')" class="bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-[11px] px-3 py-1.5 rounded-lg shadow-sm transition">
                    + Add to Cart
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

window.setTariffCategory = function(cat) {
  tariffCategoryFilter = cat;
  renderApp();
};

window.setTariffSearch = function(query) {
  tariffSearchQuery = query;
  renderApp();
};

function renderPillarDetailContent() {
  switch (activeServicePillar) {
    case 'tariff-catalog':
      return renderTariffCatalog();

    case 'graphic-design':
      return `
        <div class="space-y-6">
          <div class="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase text-[#1E7E34]">Pillar 1</span>
              <h2 class="text-2xl font-black text-slate-900">Graphic Design & Brand Identity</h2>
              <p class="text-xs text-slate-500">Graphic designing, Phresh branding, minor, medium, and mega corporate branding solutions.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-[#1E7E34] text-white font-bold text-xs px-5 py-3 rounded-xl shadow hover:bg-emerald-800 transition">
              Start Branding Project →
            </button>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <span class="text-[10px] font-black uppercase bg-slate-200 text-slate-800 px-2.5 py-0.5 rounded-md">Minor</span>
              <h3 class="text-base font-black text-slate-900">Minor Branding</h3>
              <p class="text-slate-600">Quick logo touchups & basic badge formatting.</p>
              <div class="pt-2 text-base font-black text-[#1E7E34] font-mono">UGX 5,000</div>
            </div>

            <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <span class="text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-md">Standard</span>
              <h3 class="text-base font-black text-slate-900">Phresh Branding</h3>
              <p class="text-slate-600">Corporate logo & avatar package.</p>
              <div class="pt-2 text-base font-black text-[#1E7E34] font-mono">UGX 10,000</div>
            </div>

            <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <span class="text-[10px] font-black uppercase bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-md">Custom</span>
              <h3 class="text-base font-black text-slate-900">Graphic Designing</h3>
              <p class="text-slate-600">Custom poster, flyer or banner layout.</p>
              <div class="pt-2 text-base font-black text-[#1E7E34] font-mono">UGX 15,000</div>
            </div>

            <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <span class="text-[10px] font-black uppercase bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-md">Medium</span>
              <h3 class="text-base font-black text-slate-900">Medium Branding</h3>
              <p class="text-slate-600">Complete flyer, social artwork & vector emblems.</p>
              <div class="pt-2 text-base font-black text-[#1E7E34] font-mono">UGX 15,000</div>
            </div>

            <div class="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <span class="text-[10px] font-black uppercase bg-purple-100 text-purple-800 px-2.5 py-0.5 rounded-md">Mega</span>
              <h3 class="text-base font-black text-slate-900">Mega Branding</h3>
              <p class="text-slate-600">Full institutional brand book, magazine layouts & stationery suite.</p>
              <div class="pt-2 text-base font-black text-[#1E7E34] font-mono">UGX 25,000</div>
            </div>
          </div>
        </div>
      `;

    case 'print-copy':
      return `
        <div class="space-y-6">
          <div class="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase text-[#8B0000]">Pillar 2</span>
              <h2 class="text-2xl font-black text-slate-900">Commercial Printing & Press</h2>
              <p class="text-slate-500 text-xs">Serialized carbonless duplicate receipts, banner / sticker printing per sq m, PVC IDs.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-[#8B0000] text-white font-bold text-xs px-5 py-3 rounded-xl shadow hover:bg-red-800 transition">
              Order Print Production →
            </button>
          </div>

          <div class="grid sm:grid-cols-2 gap-4 text-xs font-medium">
            <div class="p-5 bg-red-50/50 border border-red-100 rounded-2xl flex justify-between items-center">
              <div>
                <span class="font-bold text-slate-900 block text-sm">Receipt Book (100 Leaves)</span>
                <span class="text-slate-500">Serialized carbonless duplicate books for schools & businesses</span>
              </div>
              <span class="font-mono font-bold text-[#8B0000] text-base">UGX 25,000</span>
            </div>
            <div class="p-5 bg-red-50/50 border border-red-100 rounded-2xl flex justify-between items-center">
              <div>
                <span class="font-bold text-slate-900 block text-sm">Banner / Sticker Printing</span>
                <span class="text-slate-500">High-resolution outdoor vinyl & stickers (Per square metre)</span>
              </div>
              <span class="font-mono font-bold text-[#8B0000] text-base">UGX 25,000</span>
            </div>
          </div>
        </div>
      `;

    case 'database-systems':
      return `
        <div class="space-y-6">
          <div class="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase text-blue-800">Pillar 3</span>
              <h2 class="text-2xl font-black text-slate-900">Custom Database Engineering & Software Systems</h2>
              <p class="text-slate-500 text-xs">Official pricing for Phresh Rank Core, Eduledger, Rent Ledger, Church Systems & POS.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-blue-800 text-white font-bold text-xs px-5 py-3 rounded-xl shadow hover:bg-blue-900 transition">
              Schedule System Audit →
            </button>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Phresh Rank Core (Offline)</span>
              <p class="text-slate-600">UNEB report cards, NCDC marksheet engine.</p>
              <div class="font-mono font-bold text-blue-800">UGX 350,000 (One time)</div>
            </div>

            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Phresh Rank Core (New Customer)</span>
              <p class="text-slate-600">Includes 100k termly subscription.</p>
              <div class="font-mono font-bold text-blue-800">UGX 400,000</div>
            </div>

            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Phresh Rank Core (Dual)</span>
              <p class="text-slate-600">Online & offline synchronized initial deposit.</p>
              <div class="font-mono font-bold text-blue-800">UGX 300,000</div>
            </div>

            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Phresh Eduledger</span>
              <p class="text-slate-600">Bursary school fee management ERP.</p>
              <div class="font-mono font-bold text-blue-800">UGX 400,000</div>
            </div>

            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Phresh Rent Ledger</span>
              <p class="text-slate-600">Property & tenant rental management.</p>
              <div class="font-mono font-bold text-blue-800">UGX 400,000</div>
            </div>

            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Church Management System</span>
              <p class="text-slate-600">Tithe, membership & event tracking.</p>
              <div class="font-mono font-bold text-blue-800">UGX 400,000 (One time)</div>
            </div>

            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Point of Sale (Offline)</span>
              <p class="text-slate-600">Desktop retail cashier inventory system.</p>
              <div class="font-mono font-bold text-blue-800">UGX 400,000</div>
            </div>

            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Point of Sale (Online)</span>
              <p class="text-slate-600">Includes annual payment of 120,000.</p>
              <div class="font-mono font-bold text-blue-800">UGX 400,000</div>
            </div>

            <div class="p-4 border border-slate-200 rounded-2xl space-y-2 bg-slate-50">
              <span class="font-black text-slate-900 block text-sm">Phresh Point of Sale (Online One Time)</span>
              <p class="text-slate-600">Permanent cloud POS license.</p>
              <div class="font-mono font-bold text-blue-800">UGX 800,000</div>
            </div>
          </div>
        </div>
      `;

    case 'web-development':
      return `
        <div class="space-y-6">
          <div class="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase text-amber-700">Pillar 4</span>
              <h2 class="text-2xl font-black text-slate-900">Web Design & Domain Purchases</h2>
              <p class="text-slate-500 text-xs">Domain purchases and web portals.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-amber-800 text-white font-bold text-xs px-5 py-3 rounded-xl shadow hover:bg-amber-900 transition">
              Launch Your Website →
            </button>
          </div>

          <div class="grid sm:grid-cols-2 gap-6 text-xs">
            <div class="p-5 border border-slate-200 rounded-2xl space-y-3 bg-slate-50">
              <span class="font-black text-slate-900 block text-base">Domain Purchases</span>
              <p class="text-slate-600">Official domain registration & DNS configuration (.com, .ug, .org, .sc.ug).</p>
              <div class="font-mono font-bold text-amber-800 text-sm">UGX 25,000</div>
            </div>

            <div class="p-5 border border-slate-200 rounded-2xl space-y-3 bg-slate-50">
              <span class="font-black text-slate-900 block text-base">System Renewal</span>
              <p class="text-slate-600">Annual domain renewal, cPanel SSD hosting maintenance & database backups.</p>
              <div class="font-mono font-bold text-amber-800 text-sm">UGX 100,000</div>
            </div>
          </div>
        </div>
      `;

    case 'social-media':
      return `
        <div class="space-y-6">
          <div class="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-black uppercase text-purple-800">Pillar 5</span>
              <h2 class="text-2xl font-black text-slate-900">Phresh Enterprise & Advanced Systems</h2>
              <p class="text-slate-500 text-xs">Phresh-Nexus, E-Lesson Manager & Wholesale Systems.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-purple-800 text-white font-bold text-xs px-5 py-3 rounded-xl shadow hover:bg-purple-900 transition">
              Consult Enterprise →
            </button>
          </div>

          <div class="grid sm:grid-cols-3 gap-6 text-xs">
            <div class="p-5 border border-slate-200 rounded-2xl space-y-3 bg-slate-50">
              <span class="font-black text-slate-900 block text-base">Phresh E-lesson Manager</span>
              <p class="text-slate-600">E-learning & lesson plan management platform.</p>
              <div class="font-mono font-bold text-purple-800 text-sm">UGX 600,000</div>
            </div>

            <div class="p-5 border border-slate-200 rounded-2xl space-y-3 bg-slate-50">
              <span class="font-black text-slate-900 block text-base">Phresh-Nexus</span>
              <p class="text-slate-600">Central multi-branch data synchronization hub.</p>
              <div class="font-mono font-bold text-purple-800 text-sm">UGX 850,000</div>
            </div>

            <div class="p-5 border border-slate-200 rounded-2xl space-y-3 bg-slate-50">
              <span class="font-black text-slate-900 block text-base">System Wholesale</span>
              <p class="text-slate-600">Full institutional software source suite & re-seller bundle.</p>
              <div class="font-mono font-bold text-purple-800 text-sm">UGX 1,500,000</div>
            </div>
          </div>
        </div>
      `;

    default:
      return renderTariffCatalog();
  }
}

// ==========================================
// 3. INTERACTIVE PORTFOLIO & CASE STUDIES
// ==========================================
function renderPortfolioPage() {
  return `
    <div id="portfolio-section" class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Proven Track Record</span>
          <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight mt-1">Portfolio & Engineering Case Studies</h1>
          <p class="text-gray-300 text-sm max-w-2xl mt-2">
            Explore media productions, commercial print press showcases, and custom database engineering projects across Uganda.
          </p>
        </div>
        <div>
          <a href="/api/contact/pdf-brief" onclick="alert('Downloading Phresh Tech Media Architecture Report PDF...'); return false;" class="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2">
            <span>Download Case Study PDF Report</span>
          </a>
        </div>
      </div>
    </div>

    <section class="py-12 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <!-- Category Filter Buttons -->
        <div class="flex items-center gap-2 border-b border-slate-200 pb-4 text-xs font-bold">
          <button onclick="filterPortfolio('all')" class="px-4 py-2 rounded-xl transition ${activePortfolioCategory === 'all' ? 'bg-[#0B1B3D] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}">
            All Work Showcase
          </button>
          <button onclick="filterPortfolio('media')" class="px-4 py-2 rounded-xl transition ${activePortfolioCategory === 'media' ? 'bg-[#0B1B3D] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}">
            Media & Visual Showcase
          </button>
          <button onclick="filterPortfolio('engineering')" class="px-4 py-2 rounded-xl transition ${activePortfolioCategory === 'engineering' ? 'bg-[#0B1B3D] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100'}">
            Database Case Studies
          </button>
        </div>

        ${activePortfolioCategory !== 'engineering' ? `
          <!-- Media Showcase Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col hover:shadow-xl transition">
              <div class="h-64 sm:h-72 bg-slate-900 relative">
                <img src="${heroSoftwareImg}" alt="Phresh Rank Core" class="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                <span class="absolute top-3 left-3 bg-[#0B1B3D] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full z-10">Flagship Core Engine</span>
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span class="text-[11px] font-bold text-emerald-700 block">Global High School Madudu</span>
                  <h3 class="font-black text-slate-900 text-base">Phresh Rank Core NCDC Marks Engine & EduLedger</h3>
                  <p class="text-xs text-slate-600 mt-1">Full NCDC competence-based marksheets, batch parent PDF reports, and fee ledger tracking.</p>
                </div>
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded text-[10px]">Phresh Rank Core Active</span>
                  <button onclick="navigateTo('contact')" class="text-[#8B0000] font-black">Inquire Now →</button>
                </div>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col hover:shadow-xl transition">
              <div class="h-64 sm:h-72 bg-slate-900 relative">
                <img src="${heroEduledgerImg}" alt="Phresh Rank Core" class="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                <span class="absolute top-3 left-3 bg-[#0B1B3D] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full z-10">Flagship Core Engine</span>
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span class="text-[11px] font-bold text-emerald-700 block">Pride College Lungala</span>
                  <h3 class="font-black text-slate-900 text-base">Phresh Rank Core Marksheet & Grading System</h3>
                  <p class="text-xs text-slate-600 mt-1">Offline-ready desktop marks entry, UNEB grade tabulations, class rankings, and parent report dispatch.</p>
                </div>
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded text-[10px]">Phresh Rank Core Active</span>
                  <button onclick="navigateTo('contact')" class="text-[#8B0000] font-black">Inquire Now →</button>
                </div>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col hover:shadow-xl transition">
              <div class="h-64 sm:h-72 bg-slate-900 relative">
                <img src="${heroPrintingImg}" alt="PVC ID Badges" class="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                <span class="absolute top-3 left-3 bg-[#8B0000] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full z-10">Rank Core + Print Press</span>
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span class="text-[11px] font-bold text-emerald-700 block">Mpigi Light College</span>
                  <h3 class="font-black text-slate-900 text-base">Phresh Rank Core Marks & Waterproof PVC Badges</h3>
                  <p class="text-xs text-slate-600 mt-1">Unified academic grading powered by Phresh Rank Core, with barcode-encoded student PVC badges.</p>
                </div>
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded text-[10px]">Phresh Rank Core Active</span>
                  <button onclick="navigateTo('contact')" class="text-[#8B0000] font-black">Inquire Now →</button>
                </div>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm flex flex-col hover:shadow-xl transition">
              <div class="h-64 sm:h-72 bg-slate-900 relative">
                <img src="${heroWebHostingImg}" alt="Web Portal" class="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
                <span class="absolute top-3 left-3 bg-amber-700 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full z-10">Rank Core + Web Portal</span>
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <span class="text-[11px] font-bold text-emerald-700 block">St. Andrews College Moyo</span>
                  <h3 class="font-black text-slate-900 text-base">Phresh Rank Core Engine & Web Portal Hosting</h3>
                  <p class="text-xs text-slate-600 mt-1">100% offline Phresh Rank Core report card engine integrated with online school portal and cloud backups.</p>
                </div>
                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-1 rounded text-[10px]">Phresh Rank Core Active</span>
                  <button onclick="navigateTo('contact')" class="text-[#8B0000] font-black">Inquire Now →</button>
                </div>
              </div>
            </div>
          </div>
        ` : ''}

        ${activePortfolioCategory !== 'media' ? `
          <!-- Engineering Case Studies Module -->
          <div class="space-y-6 pt-4">
            <div class="border-b border-slate-200 pb-3">
              <span class="text-xs font-black uppercase tracking-widest text-[#1E7E34]">Problem - Solution - Metrics</span>
              <h2 class="text-2xl font-black text-slate-900 mt-1">Engineering Case Studies</h2>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div>
                  <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-3 py-1 rounded-full">Phresh Rank Core Engine</span>
                  <h3 class="text-xl font-black text-slate-900 mt-2">Automating Competency-Based NCDC Marks & Report Cards</h3>
                </div>
                <button onclick="navigateTo('contact')" class="bg-[#0B1B3D] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-slate-800 transition">
                  Request Technical Brief
                </button>
              </div>

              <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                <div class="p-4 bg-red-50/50 border border-red-100 rounded-2xl">
                  <h4 class="font-black text-[#8B0000] uppercase tracking-wider mb-2">The Operational Challenge</h4>
                  <p class="text-slate-700">Schools spent 3+ weeks manually tabulating UNEB grades, average scores, and class ranks for thousands of students, causing reporting delays and calculation errors.</p>
                </div>
                <div class="p-4 bg-emerald-50/50 border border-emerald-100 rounded-2xl">
                  <h4 class="font-black text-[#1E7E34] uppercase tracking-wider mb-2">Our Engineering Solution</h4>
                  <p class="text-slate-700">Engineered an offline-first high-speed desktop report engine running local SQLite/MySQL database systems. Automated descriptor evaluation, grade points, and batch PDF generation.</p>
                </div>
              </div>

              <div class="grid sm:grid-cols-3 gap-4 pt-2 text-center text-xs">
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span class="block text-slate-400 font-bold uppercase text-[10px]">Time Saved</span>
                  <span class="text-base font-black text-slate-900 mt-0.5 block">95% Faster Processing</span>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span class="block text-slate-400 font-bold uppercase text-[10px]">Error Rate</span>
                  <span class="text-base font-black text-slate-900 mt-0.5 block">0% Arithmetic Errors</span>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span class="block text-slate-400 font-bold uppercase text-[10px]">Deployments</span>
                  <span class="text-base font-black text-slate-900 mt-0.5 block">50+ Secondary Schools</span>
                </div>
              </div>
            </div>
          </div>
        ` : ''}

      </div>
    </section>
  `;
}

window.filterPortfolio = function(cat) {
  activePortfolioCategory = cat;
  renderApp();
};

// ==========================================
// 5. COMPANY PROFILE / ABOUT US
// ==========================================
function renderAboutPage() {
  return `
    <div id="about-section" class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div class="max-w-7xl mx-auto space-y-3">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Kasenge - Nakawuka Road Headquarters</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">Company Profile & Technical Capabilities</h1>
        <p class="text-gray-300 text-sm max-w-2xl">
          Phresh Tech Media Services is a premier Ugandan technology firm specializing in full-stack database development, commercial printing press manufacturing, and institutional web design.
        </p>
      </div>
    </div>

    <section class="py-12 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <!-- Leadership Profiles -->
        <div class="space-y-6">
          <div class="border-b border-slate-200 pb-3">
            <span class="text-xs font-black uppercase tracking-widest text-[#1E7E34]">Executive Leadership</span>
            <h2 class="text-2xl font-black text-slate-900 mt-1">Directors & Engineering Leads</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div class="w-36 h-36 sm:w-48 sm:h-48 bg-slate-900 rounded-3xl overflow-hidden shadow-lg flex-shrink-0 flex items-center justify-center text-white font-black text-2xl border-2 border-slate-100">
                <img src="/directors/ibrahim.png" alt="Mulindwa Ibrahim" class="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
              </div>
              <div class="space-y-2 text-xs text-center sm:text-left flex-1">
                <span class="text-emerald-700 font-bold uppercase tracking-wider text-[10px]">Software Engineering Director</span>
                <h3 class="text-xl font-black text-slate-900">Mulindwa Ibrahim (Ibra)</h3>
                <p class="text-slate-600 leading-relaxed">
                  Leads software architecture, enterprise cloud & database systems, Phresh Rank Core NCDC marks systems, and EduLedger ERP development.
                </p>
                <div class="pt-2 font-mono font-bold text-slate-900 flex flex-col gap-1">
                  <a href="tel:+256702083515" class="hover:text-emerald-700">+256 702 083515</a>
                  <a href="tel:+256747311209" class="hover:text-emerald-700">+256 747 311209</a>
                  <span class="text-slate-500 font-sans text-[11px]">Email: phreshtechmedia@gmail.com</span>
                </div>
              </div>
            </div>

            <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div class="w-36 h-36 sm:w-48 sm:h-48 bg-slate-900 rounded-3xl overflow-hidden shadow-lg flex-shrink-0 flex items-center justify-center text-white font-black text-2xl border-2 border-slate-100">
                <img src="/directors/steve.png" alt="Steven Bagalana" class="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
              </div>
              <div class="space-y-2 text-xs text-center sm:text-left flex-1">
                <span class="text-[#8B0000] font-bold uppercase tracking-wider text-[10px]">Operations & Print Director</span>
                <h3 class="text-xl font-black text-slate-900">Steven Bagalana (Steve)</h3>
                <p class="text-slate-600 leading-relaxed">
                  Manages commercial printing press machinery, 3D vector graphic design teams, PVC identity card press, and customer service.
                </p>
                <div class="pt-2 font-mono font-bold text-slate-900 flex flex-col gap-1">
                  <a href="tel:+256777139918" class="hover:text-[#8B0000]">+256 777 139918</a>
                  <a href="tel:+256757848094" class="hover:text-[#8B0000]">+256 757 848094</a>
                  <span class="text-slate-500 font-sans text-[11px]">Email: phreshtechmedia@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Technical Capabilities & Location -->
        <div class="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-6">
          <h3 class="text-xl font-black text-slate-900">Institutional Service Presence in Kampala</h3>
          <p class="text-xs text-slate-600 leading-relaxed max-w-3xl">
            Located along Kasenge - Nakawuka Road in Wakiso/Kampala, Uganda, Phresh Tech Media Services provides fast response times for on-site software installation, printer calibration, and staff training.
          </p>
          <div class="grid sm:grid-cols-3 gap-4 text-xs font-medium">
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <strong class="text-slate-900 block font-bold mb-1">Physical Office</strong>
              Kasenge - Nakawuka Road, Kampala, Uganda
            </div>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <strong class="text-slate-900 block font-bold mb-1">Working Hours</strong>
              Monday - Saturday: 8:00 AM - 6:00 PM
            </div>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <strong class="text-slate-900 block font-bold mb-1">Office Desk & WhatsApp</strong>
              <a href="tel:+256741145595" class="block font-mono font-bold text-slate-900 hover:underline">Office: +256 741 145595</a>
              <a href="https://wa.me/256757848094" target="_blank" class="block text-emerald-700 font-bold hover:underline">WhatsApp: +256 757 848094</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  `;
}

// ==========================================
// 6. CONTACT PORTAL & SECURE CONTACT FORM
// ==========================================
function renderSecureContactFormComponent() {
  const { name, email, subject, message, phone, isSubmitting, submittedSuccess, submittedData, errors } = contactFormState;

  if (submittedSuccess && submittedData) {
    return `
      <div class="bg-white border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 animate-fade-in relative overflow-hidden">
        <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Success Badge -->
        <div class="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-inner">
            <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-300">
                Transmission Verified
              </span>
              <span class="font-mono text-[11px] text-slate-400">Ref: ${submittedData.refId}</span>
            </div>
            <h3 class="text-xl font-black text-slate-900 mt-0.5">Inquiry Transmitted Successfully</h3>
          </div>
        </div>

        <!-- Confirmation Card -->
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs space-y-3 font-sans">
          <div class="flex items-center justify-between text-slate-500 border-b border-slate-200/60 pb-2">
            <span><strong>Recipient:</strong> Phresh Tech Media Services (&lt;phreshtechmediaservices@gmail.com&gt;)</span>
            <span class="font-mono">${submittedData.date}</span>
          </div>

          <div class="grid sm:grid-cols-2 gap-2 text-slate-700">
            <div><strong>Sender Name:</strong> ${submittedData.name}</div>
            <div><strong>Email Address:</strong> ${submittedData.email}</div>
            ${submittedData.phone ? `<div><strong>Phone:</strong> ${submittedData.phone}</div>` : ''}
            <div><strong>Subject:</strong> ${submittedData.subject}</div>
          </div>

          <div class="pt-2">
            <strong class="text-slate-800 block mb-1">Message Content:</strong>
            <p class="bg-white border border-slate-200 rounded-xl p-3 text-slate-600 leading-relaxed italic">
              "${submittedData.message}"
            </p>
          </div>
        </div>

        <div class="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-900 space-y-1">
          <div class="flex items-center gap-2 font-bold text-emerald-950">
            <svg class="w-4 h-4 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 000-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span>Automated Receipt Email Dispatched</span>
          </div>
          <p class="text-emerald-800 text-[11px] leading-relaxed">
            An official confirmation email has been dispatched to <strong>${submittedData.email}</strong>. Directors Mulindwa Ibrahim and Steven Bagalana have received your request.
          </p>
        </div>

        <div class="pt-2 flex items-center justify-between">
          <span class="text-[11px] text-slate-400 font-mono flex items-center gap-1">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
            Encrypted & Saved to Database
          </span>
          <button onclick="resetContactForm()" class="bg-[#0B1B3D] hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition flex items-center gap-2">
            <span>Send Another Inquiry</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </div>
      </div>
    `;
  }

  return `
    <div class="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6 relative overflow-hidden">
      <!-- Top Branding Header -->
      <div class="border-b border-slate-100 pb-5 flex items-start justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="bg-[#0B1B3D] text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
              <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              256-Bit Encrypted Intake Portal
            </span>
            <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Phresh Tech Direct
            </span>
          </div>
          <h3 class="text-2xl font-black text-[#0B1B3D]">Send an Inquiry or Service Request</h3>
          <p class="text-xs text-slate-500 mt-0.5">
            Directly routed to <span class="font-bold text-slate-700">phreshtechmediaservices@gmail.com</span> and saved to server database.
          </p>
        </div>
      </div>

      <!-- Secure Contact Form -->
      <form onsubmit="validateAndSubmitContactForm(event)" class="space-y-4 text-xs" novalidate>
        <!-- Honeypot anti-spam (hidden) -->
        <input type="text" name="website_url" value="${contactFormState.honeypot}" oninput="handleContactFieldChange('honeypot', this.value)" class="hidden" tabindex="-1" autocomplete="off" />

        <div class="grid sm:grid-cols-2 gap-4">
          <!-- Full Name -->
          <div>
            <label class="block font-bold text-slate-800 mb-1.5 flex items-center justify-between">
              <span>Full Name <span class="text-red-500">*</span></span>
              ${errors.name ? `<span class="text-[10px] text-red-600 font-semibold">${errors.name}</span>` : ''}
            </label>
            <input 
              type="text" 
              value="${name}"
              oninput="handleContactFieldChange('name', this.value)"
              class="w-full bg-slate-50 border ${errors.name ? 'border-red-500 bg-red-50/30' : 'border-slate-200'} rounded-xl p-3 focus:outline-none focus:border-emerald-600 focus:bg-white transition text-slate-900 placeholder:text-slate-400" 
              placeholder="e.g. Director Denis Mukasa" 
            />
          </div>

          <!-- Email Address -->
          <div>
            <label class="block font-bold text-slate-800 mb-1.5 flex items-center justify-between">
              <span>Email Address <span class="text-red-500">*</span></span>
              ${errors.email ? `<span class="text-[10px] text-red-600 font-semibold">${errors.email}</span>` : ''}
            </label>
            <input 
              type="email" 
              value="${email}"
              oninput="handleContactFieldChange('email', this.value)"
              class="w-full bg-slate-50 border ${errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-200'} rounded-xl p-3 focus:outline-none focus:border-emerald-600 focus:bg-white transition text-slate-900 placeholder:text-slate-400" 
              placeholder="e.g. denis@organization.org" 
            />
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <!-- Subject -->
          <div>
            <label class="block font-bold text-slate-800 mb-1.5 flex items-center justify-between">
              <span>Inquiry Subject <span class="text-red-500">*</span></span>
              ${errors.subject ? `<span class="text-[10px] text-red-600 font-semibold">${errors.subject}</span>` : ''}
            </label>
            <input 
              type="text" 
              value="${subject}"
              oninput="handleContactFieldChange('subject', this.value)"
              class="w-full bg-slate-50 border ${errors.subject ? 'border-red-500 bg-red-50/30' : 'border-slate-200'} rounded-xl p-3 focus:outline-none focus:border-emerald-600 focus:bg-white transition text-slate-900 placeholder:text-slate-400" 
              placeholder="e.g. Educational Software, Printing, or Hosting" 
            />
          </div>

          <!-- Phone Number (Optional) -->
          <div>
            <label class="block font-bold text-slate-800 mb-1.5 flex items-center justify-between">
              <span>Phone / WhatsApp <span class="text-slate-400 font-normal">(Optional)</span></span>
            </label>
            <input 
              type="text" 
              value="${phone}"
              oninput="handleContactFieldChange('phone', this.value)"
              class="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-600 focus:bg-white transition text-slate-900 placeholder:text-slate-400" 
              placeholder="e.g. +256 700 000 000" 
            />
          </div>
        </div>

        <!-- Message -->
        <div>
          <label class="block font-bold text-slate-800 mb-1.5 flex items-center justify-between">
            <span>Detailed Message & Requirements <span class="text-red-500">*</span></span>
            ${errors.message ? `<span class="text-[10px] text-red-600 font-semibold">${errors.message}</span>` : ''}
          </label>
          <textarea 
            rows="5"
            oninput="handleContactFieldChange('message', this.value)"
            class="w-full bg-slate-50 border ${errors.message ? 'border-red-500 bg-red-50/30' : 'border-slate-200'} rounded-xl p-3 focus:outline-none focus:border-emerald-600 focus:bg-white transition text-slate-900 placeholder:text-slate-400" 
            placeholder="Describe your software license requirements (Phresh Rank Core, EduLedger, Church Manager), commercial print run specifications, or graphic design project..."
          >${message}</textarea>
        </div>

        <!-- Submit Button -->
        <div class="pt-2 space-y-3">
          <button 
            type="submit" 
            ${isSubmitting ? 'disabled' : ''}
            class="w-full bg-[#8B0000] hover:bg-red-800 text-white font-black py-4 rounded-xl uppercase tracking-wider shadow-lg hover:shadow-red-900/30 transition disabled:opacity-50 flex items-center justify-center gap-2 text-xs"
          >
            ${isSubmitting ? `
              <svg class="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Transmitting Securely...</span>
            ` : `
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              <span>Transmit Secure Inquiry</span>
            `}
          </button>

          <div class="flex items-center justify-between text-[11px] text-slate-400 pt-1 border-t border-slate-100">
            <span class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Auto-ACK Confirmation Email Sent
            </span>
            <span>Phresh Tech HQ, Kasenge Kampala</span>
          </div>
        </div>
      </form>
    </div>
  `;
}

function renderContactPage() {
  return `
    <div id="contact-section" class="bg-gradient-to-b from-[#0B1B3D] to-[#08132B] text-white py-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
      <div class="max-w-7xl mx-auto space-y-3">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-400">Direct Inquiries & Software Orders</span>
        <h1 class="text-3xl sm:text-5xl font-black text-white tracking-tight">Contact Portal & Location</h1>
        <p class="text-gray-300 text-sm max-w-2xl">
          Get in touch with Directors Mulindwa Ibrahim (Ibra) and Steven Bagalana (Steve) or our Kasenge Office Desk for custom software installations, commercial print orders, or web hosting.
        </p>
      </div>
    </div>

    <section class="py-12 bg-slate-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-8">
          
          <!-- Left Direct Contact Info -->
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4 text-xs">
              <h3 class="text-base font-black text-slate-900">Direct Contact Triggers</h3>
              
              <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2">
                <span class="font-bold text-slate-900 block text-sm">Official WhatsApp Support</span>
                <p class="text-slate-600">Fast sales dispatch & quote discussion:</p>
                <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media" target="_blank" class="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs shadow-xs transition">
                  ${WHATSAPP_ICON_SVG}
                  <span>Message +256 757 848 094</span>
                </a>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <strong class="text-slate-900 block font-bold">Office Hotline (Kasenge HQ)</strong>
                <span class="text-sky-700 text-[11px] font-semibold">General Customer Desk</span>
                <a href="tel:+256741145595" class="block font-mono text-slate-900 font-bold mt-1 hover:underline">+256 741 145595</a>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <strong class="text-slate-900 block font-bold">Mulindwa Ibrahim (Ibra)</strong>
                <span class="text-emerald-700 text-[11px] font-semibold">Software Engineering Director</span>
                <a href="tel:+256702083515" class="block font-mono text-slate-700 font-bold mt-1 hover:underline">+256 702 083515</a>
                <a href="tel:+256747311209" class="block font-mono text-slate-700 font-bold hover:underline">+256 747 311209</a>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <strong class="text-slate-900 block font-bold">Steven Bagalana (Steve)</strong>
                <span class="text-[#8B0000] text-[11px] font-semibold">Operations & Print Director</span>
                <a href="tel:+256777139918" class="block font-mono text-slate-700 font-bold mt-1 hover:underline">+256 777 139918</a>
                <a href="tel:+256757848094" class="block font-mono text-slate-700 font-bold hover:underline">+256 757 848094</a>
              </div>

              <div class="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-1">
                <strong class="text-slate-900 block font-bold">Official Email & Location</strong>
                <p class="text-slate-600">Email: phreshtechmedia@gmail.com</p>
                <p class="text-slate-600">Location: Kasenge - Nakawuka Road, Kampala, Uganda</p>
              </div>
            </div>
          </div>

          <!-- Right Intake Form Component -->
          <div class="lg:col-span-7">
            ${renderSecureContactFormComponent()}
          </div>

        </div>
      </div>
    </section>
  `;
}
