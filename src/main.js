import './index.css';

// Authentic Phresh Tech Media Work & Studio Images
const heroStudioImg = '/images/steve working.png';
const heroRankCoreImg = '/images/phresh rank core.png';
const heroBannersImg = '/images/school banners.png';
const heroReceiptImg = '/images/receipt_books.jpg';

// Work Gallery Items (Non-technical, plain human descriptions)
const PRODUCT_SHOWCASE_GALLERY = [
  {
    id: 'rank-core',
    title: 'Phresh Rank Core Report Cards',
    subtitle: 'Easy mark entry for teachers, accurate grading under the new curriculum, and neat printed report cards ready for parents.',
    category: 'software',
    label: 'Schools',
    img: '/images/phresh rank core.png',
    client: 'Global High School Madudu & Pride College'
  },
  {
    id: 'eduledger',
    title: 'Phresh EduLedger Fees Tracker',
    subtitle: 'Clear records of school tuition, bursaries, student balances, and daily printed receipts for the bursar office.',
    category: 'software',
    label: 'School Bursary',
    img: '/images/phresh eduleager finance managment sysment.png',
    client: 'Primary & Secondary Schools'
  },
  {
    id: 'rent-ledger',
    title: 'Phresh Rent Ledger',
    subtitle: 'Keep track of tenants, monthly rent balances, lease dates, and payment receipts for apartments and arcades.',
    category: 'software',
    label: 'Property & Rentals',
    img: '/images/phresh rent ledger property management sysment.png',
    client: 'Landlords & Property Managers'
  },
  {
    id: 'biztrack',
    title: 'Phresh BizTrack Shop & Stock Manager',
    subtitle: 'Record daily sales at the counter, watch your remaining stock, track supplier orders, and see daily profit clearly.',
    category: 'software',
    label: 'Shops & Retail',
    img: '/images/phresh biztrack bussiness managment system.png',
    client: 'Retail Shops & Hardware Stores'
  },
  {
    id: 'church-mgr',
    title: 'Church Administration & Giving Records',
    subtitle: 'Organised member directories, tithe and offering records, pledges, and upcoming church event schedules.',
    category: 'software',
    label: 'Churches & Ministries',
    img: '/images/church manager.png',
    client: 'Churches & Faith Organisations'
  },
  {
    id: 'income-expense',
    title: 'Income & Expense Bookkeeping',
    subtitle: 'Record everyday spending and incoming payments by department so accounts stay clear for audits and board reviews.',
    category: 'software',
    label: 'Accounts',
    img: '/images/expense income major.png',
    client: 'Organisations & Companies'
  },
  {
    id: 'db-offered',
    title: 'Custom Record Tools for Ugandan Teams',
    subtitle: 'Practical record-keeping programs built around how your school, shop, landlord office, or church actually works.',
    category: 'software',
    label: 'Record Tools',
    img: '/images/database systems offered.jpg',
    client: 'Ugandan Businesses'
  },
  {
    id: 'eduledger-desc',
    title: 'Inside the Fees & Bursary Desk',
    subtitle: 'Fee structures by class, quick parent balance lookups, receipt history, and termly summaries without paper clutter.',
    category: 'software',
    label: 'School Finance',
    img: '/images/edu ledger description.jpg',
    client: 'School Bursars & Headteachers'
  },
  {
    id: 'graphics-services',
    title: 'Logo Design & School Identity Kits',
    subtitle: 'Memorable logos, school crests, flyers, magazines, and clean promotional graphics crafted at our Kampala studio.',
    category: 'design',
    label: 'Graphic Design',
    img: '/images/graphics services.jpg',
    client: 'Schools & Businesses'
  },
  {
    id: 'school-banners-1',
    title: 'School Banners & Compound Signposts',
    subtitle: 'Weather-resistant outdoor vinyl banners, graduation backdrops, sports day banners, and custom school signage.',
    category: 'design',
    label: 'Signage & Banners',
    img: '/images/school banners.png',
    client: 'Mpigi Light & Partner Colleges'
  },
  {
    id: 'school-banners-2',
    title: 'Event Backdrops & Admissions Banners',
    subtitle: 'Bright, durable printed banners for school open days, church conferences, and business storefronts.',
    category: 'design',
    label: 'Banner Printing',
    img: '/images/schiool banners 1.png',
    client: 'Event Organisers & Schools'
  },
  {
    id: 'receipt-books',
    title: 'Numbered Carbonless Receipt Books',
    subtitle: '100-leaf duplicate carbonless receipt books numbered in sequence for schools, churches, shops, and offices.',
    category: 'print',
    label: 'Printing Press',
    img: '/images/receipt_books.jpg',
    client: 'Schools & Commercial Clients'
  },
  {
    id: 'steve-printing',
    title: 'Kasenge Commercial Printing Press',
    subtitle: 'Our in-house printing equipment run by Steven Bagalana in Kasenge for crisp colour, stickers, and stationery.',
    category: 'print',
    label: 'Press Studio',
    img: '/images/steve printing.png',
    client: 'Phresh Printing Studio'
  },
  {
    id: 'steve-working',
    title: 'Hands-On Craft at Our Kasenge Workshop',
    subtitle: 'Every banner, receipt book, and school setup is checked in person before it reaches your doorstep.',
    category: 'general',
    label: 'Our Workshop',
    img: '/images/steve working.png',
    client: 'Kasenge - Nakawuka Road'
  },
  {
    id: 'phresh-services-banner',
    title: 'Phresh Tech Media Service Overview',
    subtitle: 'Everything we do under one roof in Kampala: school and business software, printing, design, and websites.',
    category: 'general',
    label: 'Overview',
    img: '/images/phresh service banner.png',
    client: 'Phresh Tech Media Kampala'
  }
];

// Official Price List (All 21 authentic items & prices preserved)
const OFFICIAL_PHRESH_SERVICES = [
  { id: 'rank-core-new', name: 'Phresh Rank core(New Customer) and termly subscription of 100k', priceUGX: 400000, category: 'software', note: 'Setup + first term support' },
  { id: 'rank-core-offline', name: 'Phresh Rank Core (Offline) one time payment', priceUGX: 350000, category: 'software', note: 'One-time school license' },
  { id: 'church-mgmt', name: 'Church Management System(One time)', priceUGX: 400000, category: 'software', note: 'One-time church license' },
  { id: 'pos-offline', name: 'Point of sale (offline)', priceUGX: 400000, category: 'software', note: 'Shop counter & stock tool' },
  { id: 'pos-online-annual', name: 'Point of sale (Online includes annual payment of 120,000)', priceUGX: 400000, category: 'software', note: 'Access from anywhere' },
  { id: 'domain-purchases', name: 'Domain purchases', priceUGX: 25000, category: 'web', note: 'Website name registration' },
  { id: 'eduledger', name: 'Phresh Eduledger', priceUGX: 400000, category: 'software', note: 'School fees & bursar tool' },
  { id: 'rent-ledger', name: 'Phresh Rent ledger', priceUGX: 400000, category: 'software', note: 'Rental & tenant tracker' },
  { id: 'pos-online-onetime', name: 'Phresh Point of Sale(online) one time payment', priceUGX: 800000, category: 'software', note: 'Full lifetime online shop tool' },
  { id: 'elesson-manager', name: 'Phresh E-lesson manager', priceUGX: 600000, category: 'software', note: 'Lesson & teaching materials' },
  { id: 'graphic-designing', name: 'Graphic Designing', priceUGX: 15000, category: 'design', note: 'Posters, flyers & layouts' },
  { id: 'phresh-branding', name: 'Phresh Branding', priceUGX: 10000, category: 'design', note: 'Logo & profile identity' },
  { id: 'phresh-nexus', name: 'Phresh-Nexus', priceUGX: 850000, category: 'software', note: 'Multi-branch coordination' },
  { id: 'system-renewal', name: 'System renewal', priceUGX: 100000, category: 'software', note: 'Termly or annual renewal' },
  { id: 'system-wholesale', name: 'System whole sale', priceUGX: 1500000, category: 'software', note: 'Complete multi-package bundle' },
  { id: 'minor-branding', name: 'Minor branding', priceUGX: 5000, category: 'design', note: 'Simple badge or touch-up' },
  { id: 'medium-branding', name: 'Medium branding', priceUGX: 15000, category: 'design', note: 'Flyer & social identity set' },
  { id: 'mega-branding', name: 'Mega branding', priceUGX: 25000, category: 'design', note: 'Full brand & stationery pack' },
  { id: 'receipt-book', name: 'Receipt book (100)', priceUGX: 25000, category: 'print', note: '100-leaf duplicate book' },
  { id: 'banner-sticker', name: 'Banner/ sticker printing(Per square metre)', priceUGX: 25000, category: 'print', note: 'Per square metre' },
  { id: 'rank-core-dual', name: 'Phresh rank core (dual online/ offline) initial deposit', priceUGX: 300000, category: 'software', note: 'Works both online & offline' }
];

// Reusable WhatsApp Icon SVG
const WHATSAPP_ICON_SVG = `<svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`;

// App State
const VALID_PAGES = ['home', 'services', 'portfolio', 'about', 'contact', 'payment', 'pay'];
let currentPage = 'home';
let isMobileMenuOpen = false;
let isAuthModalOpen = false;
let currentUser = null;
let activeImagePreviewModal = null;
let isWhatsAppWidgetOpen = false;
let toastMessage = null;

try {
  const savedUser = localStorage.getItem('phresh_user');
  if (savedUser) currentUser = JSON.parse(savedUser);
} catch (e) {
  currentUser = null;
}

// Section Tabs & Filters
let activeServicePillar = 'tariff-catalog'; // 'tariff-catalog' | 'graphic-design' | 'print-copy' | 'database-systems' | 'web-development' | 'social-media'
let activePortfolioCategory = 'all'; // 'all' | 'engineering' | 'media'
let currentHeroSlide = 0;
let autoSlideTimer = null;
let tariffCategoryFilter = 'all';
let tariffSearchQuery = '';

// Contact Form State
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

// Direct Payment Page State
let paymentPageState = {
  clientName: '',
  clientEmail: '',
  clientPhone: '',
  serviceDescription: '',
  amount: '',
  currency: 'UGX',
  paymentMethod: 'mtn_momo',
  isInitiating: false,
  isWaitingUssdApproval: false,
  isCompleted: false,
  paymentRef: '',
  instructions: '',
  pollTimer: null,
  countdownSeconds: 90,
  countdownTimer: null,
  error: null,
  confirmedData: null
};
window.paymentPageState = paymentPageState;

// Hero Showcase Highlights (Grounded human story + authentic photos)
const HERO_HIGHLIGHTS = [
  {
    eyebrow: 'Kasenge Studio · Serving Schools & Businesses Across Uganda',
    title: 'School software, printing & design made clear for everyday teams.',
    subtitle: 'From report cards and school fees tracking to crisp banners, receipt books, and websites—we build practical tools and print materials you can count on.',
    image: heroStudioImg,
    imageCaption: 'Director Steven Bagalana at our Kasenge printing workshop',
    primaryCtaText: 'Talk With Us',
    primaryCtaPage: 'contact'
  },
  {
    eyebrow: 'Phresh Rank Core · Report Cards',
    title: 'Finish termly report cards in minutes, not weeks.',
    subtitle: 'Teachers enter marks smoothly, the new curriculum averages calculate cleanly, and printed parent report cards come out ready without late nights.',
    image: heroRankCoreImg,
    imageCaption: 'Phresh Rank Core report card workspace',
    primaryCtaText: 'See School Tools',
    primaryCtaPage: 'services'
  },
  {
    eyebrow: 'Commercial Printing & Design',
    title: 'Banners, school crests & duplicate receipt books printed in-house.',
    subtitle: 'Visit us along Kasenge - Nakawuka Road or send your job on WhatsApp for crisp vinyl banners, stickers, logos, and numbered receipt books.',
    image: heroBannersImg,
    imageCaption: 'Institutional banners printed in Kampala',
    primaryCtaText: 'View Price List',
    primaryCtaPage: 'services'
  },
  {
    eyebrow: 'Bursar & Stationery',
    title: 'Keep school fees, rent & receipt books well organised.',
    subtitle: 'Pair EduLedger fees tracking with custom 100-leaf duplicate receipt books so every shilling paid is clear for both staff and parents.',
    image: heroReceiptImg,
    imageCaption: '100-leaf duplicate carbonless receipt books',
    primaryCtaText: 'Order Receipt Books',
    primaryCtaPage: 'contact'
  }
];

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function showToast(msg) {
  toastMessage = msg;
  renderApp();
  setTimeout(() => {
    toastMessage = null;
    renderApp();
  }, 4000);
}

// Modal Helpers
window.openImageModal = function(img, title, subtitle, label) {
  activeImagePreviewModal = { img, title, subtitle, label };
  renderApp();
};
window.closeImageModal = function() {
  activeImagePreviewModal = null;
  renderApp();
};

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
    showToast('Please enter your name and email address.');
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
      showToast(`Signed in as ${email}.`);
    }
  } catch (err) {
    currentUser = { name, email, phone: phone || '+256 700 000000', organization: org || 'Client' };
    localStorage.setItem('phresh_user', JSON.stringify(currentUser));
    isAuthModalOpen = false;
    showToast(`Signed in as ${email}.`);
  }
  renderApp();
};

window.logoutClient = function() {
  currentUser = null;
  try {
    localStorage.removeItem('phresh_user');
  } catch (e) {
    // ignore
  }
  showToast('Signed out.');
  renderApp();
};

// WhatsApp & Consultation Actions
window.toggleWhatsAppWidget = function() {
  isWhatsAppWidgetOpen = !isWhatsAppWidgetOpen;
  renderApp();
};

window.sendWhatsAppInquiry = function(presetText) {
  const text = presetText || 'Hello Phresh Tech Media Services, I would like to ask about your services.';
  window.open(`https://wa.me/256757848094?text=${encodeURIComponent(text)}`, '_blank');
};

window.sendCustomWhatsAppMsg = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('whatsapp-floating-input');
  const msg = input ? input.value.trim() : '';
  const text = msg || 'Hello Phresh Tech Media Services, I would like to ask about your services.';
  window.open(`https://wa.me/256757848094?text=${encodeURIComponent(text)}`, '_blank');
};

window.consultService = function(serviceName) {
  contactFormState.subject = `Inquiry: ${serviceName}`;
  contactFormState.message = `Hello Phresh Tech Media Services,\n\nI would like to ask about "${serviceName}" and discuss pricing and timelines.\n\nPlease get in touch.`;
  window.navigateTo('contact');
  showToast(`Ready to inquire about ${serviceName}`);
};

window.consultViaWhatsApp = function(serviceName) {
  const msg = `Hello Phresh Tech Media Services,\nI would like to discuss:\n*${serviceName || 'Your Services'}*\n\nPlease share your availability.`;
  window.open(`https://wa.me/256757848094?text=${encodeURIComponent(msg)}`, '_blank');
};

// Contact Form Handlers (Preserve focus while typing)
window.handleContactFieldChange = function(field, value) {
  contactFormState[field] = value;
  if (contactFormState.errors && contactFormState.errors[field]) {
    delete contactFormState.errors[field];
    const errEl = document.getElementById(`contact-error-${field}`);
    if (errEl) errEl.style.display = 'none';
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
    errors.name = 'Please enter your full name.';
  }
  if (!contactFormState.email || !emailRegex.test(contactFormState.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!contactFormState.subject || contactFormState.subject.trim().length < 3) {
    errors.subject = 'Please add a short subject.';
  }
  if (!contactFormState.message || contactFormState.message.trim().length < 8) {
    errors.message = 'Please write a few words about what you need.';
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
    await fetch('/api/contact/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    contactFormState.isSubmitting = false;
    contactFormState.submittedSuccess = true;
    contactFormState.submittedData = {
      ...payload,
      refId: 'PTM-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    showToast(`Message sent. A copy has been emailed to ${payload.email}.`);
  } catch (err) {
    contactFormState.isSubmitting = false;
    contactFormState.submittedSuccess = true;
    contactFormState.submittedData = {
      ...payload,
      refId: 'PTM-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })
    };
    showToast(`Your message was saved.`);
  }

  renderApp();
};

// ==========================================
// DEDICATED PAYMENT HANDLERS
// ==========================================
function stopPaymentTimers() {
  if (paymentPageState.pollTimer) {
    clearInterval(paymentPageState.pollTimer);
    paymentPageState.pollTimer = null;
  }
  if (paymentPageState.countdownTimer) {
    clearInterval(paymentPageState.countdownTimer);
    paymentPageState.countdownTimer = null;
  }
}

window.cancelWaitingUssd = function() {
  stopPaymentTimers();
  paymentPageState.isWaitingUssdApproval = false;
  paymentPageState.isInitiating = false;
  paymentPageState.paymentRef = ''; // Always issue a fresh reference when user changes details or phone number
  paymentPageState.error = null;
  renderApp();
  setTimeout(() => {
    const el = document.getElementById('payment-client-phone');
    if (el) el.focus();
  }, 60);
};

function detectUgNetwork(phoneStr) {
  const cleaned = String(phoneStr || '').replace(/[\s\-()]/g, '');
  if (/^(070|074|075|\+?25670|\+?25674|\+?25675)/.test(cleaned)) {
    return 'airtel_money';
  }
  if (/^(076|077|078|079|\+?25676|\+?25677|\+?25678|\+?25679)/.test(cleaned)) {
    return 'mtn_momo';
  }
  return null;
}

window.handlePaymentFieldChange = function(field, val) {
  paymentPageState[field] = val;

  if (paymentPageState.error) {
    paymentPageState.error = null;
    const errBanner = document.getElementById('payment-error-banner');
    if (errBanner) errBanner.classList.add('hidden');
  }

  if (field === 'clientPhone') {
    const detected = detectUgNetwork(val);
    const noteEl = document.getElementById('payment-phone-network-note');
    const mtnRadio = document.getElementById('payment-method-mtn');
    const airtelRadio = document.getElementById('payment-method-airtel');
    const mtnCard = document.getElementById('payment-method-card-mtn');
    const airtelCard = document.getElementById('payment-method-card-airtel');
    const cardCard = document.getElementById('payment-method-card-card');

    if (detected === 'mtn_momo') {
      paymentPageState.paymentMethod = 'mtn_momo';
      if (noteEl) noteEl.innerHTML = `<span class="text-xs font-semibold text-amber-800">MTN Mobile Money number</span>`;
      if (mtnRadio) mtnRadio.checked = true;
      if (mtnCard) mtnCard.className = "flex flex-col p-4 border rounded-xl cursor-pointer transition border-amber-600 bg-amber-50/60";
      if (airtelCard) airtelCard.className = "flex flex-col p-4 border rounded-xl cursor-pointer transition border-stone-200 bg-white hover:bg-stone-50";
      if (cardCard) cardCard.className = "flex flex-col p-4 border rounded-xl cursor-pointer transition border-stone-200 bg-white hover:bg-stone-50";
    } else if (detected === 'airtel_money') {
      paymentPageState.paymentMethod = 'airtel_money';
      if (noteEl) noteEl.innerHTML = `<span class="text-xs font-semibold text-red-700">Airtel Money number</span>`;
      if (airtelRadio) airtelRadio.checked = true;
      if (airtelCard) airtelCard.className = "flex flex-col p-4 border rounded-xl cursor-pointer transition border-red-600 bg-red-50/50";
      if (mtnCard) mtnCard.className = "flex flex-col p-4 border rounded-xl cursor-pointer transition border-stone-200 bg-white hover:bg-stone-50";
      if (cardCard) cardCard.className = "flex flex-col p-4 border rounded-xl cursor-pointer transition border-stone-200 bg-white hover:bg-stone-50";
    } else {
      if (noteEl) noteEl.innerHTML = `<span class="text-xs text-slate-500">MTN or Airtel Uganda</span>`;
    }
  }
  // Never call renderApp() on input so focus and keyboard stay active
};

window.setPaymentPresetAmount = function(amt) {
  paymentPageState.amount = String(amt);
  paymentPageState.currency = 'UGX';
  const amtInput = document.getElementById('payment-amount-input');
  if (amtInput) amtInput.value = amt;
  const currSelect = document.getElementById('payment-currency-select');
  if (currSelect) currSelect.value = 'UGX';
  const currLabel = document.getElementById('payment-currency-symbol');
  if (currLabel) currLabel.innerText = 'UGX';
  if (paymentPageState.error) {
    paymentPageState.error = null;
    const errBanner = document.getElementById('payment-error-banner');
    if (errBanner) errBanner.classList.add('hidden');
  }
};

window.handlePaymentMethodSelect = function(method) {
  paymentPageState.paymentMethod = method;
  const mtnRadio = document.getElementById('payment-method-mtn');
  const airtelRadio = document.getElementById('payment-method-airtel');
  const cardRadio = document.getElementById('payment-method-card');
  const mtnCard = document.getElementById('payment-method-card-mtn');
  const airtelCard = document.getElementById('payment-method-card-airtel');
  const cardCard = document.getElementById('payment-method-card-card');

  if (mtnRadio) mtnRadio.checked = (method === 'mtn_momo');
  if (airtelRadio) airtelRadio.checked = (method === 'airtel_money');
  if (cardRadio) cardRadio.checked = (method === 'card');

  if (mtnCard) {
    mtnCard.className = method === 'mtn_momo'
      ? "flex flex-col p-4 border rounded-xl cursor-pointer transition border-amber-600 bg-amber-50/60"
      : "flex flex-col p-4 border rounded-xl cursor-pointer transition border-stone-200 bg-white hover:bg-stone-50";
  }
  if (airtelCard) {
    airtelCard.className = method === 'airtel_money'
      ? "flex flex-col p-4 border rounded-xl cursor-pointer transition border-red-600 bg-red-50/50"
      : "flex flex-col p-4 border rounded-xl cursor-pointer transition border-stone-200 bg-white hover:bg-stone-50";
  }
  if (cardCard) {
    cardCard.className = method === 'card'
      ? "flex flex-col p-4 border rounded-xl cursor-pointer transition border-[#0F213E] bg-slate-50"
      : "flex flex-col p-4 border rounded-xl cursor-pointer transition border-stone-200 bg-white hover:bg-stone-50";
  }
};

window.handlePaymentCurrencySelect = function(curr) {
  paymentPageState.currency = curr;
  const currLabel = document.getElementById('payment-currency-symbol');
  if (currLabel) currLabel.innerText = curr;
};

window.handleInitiatePayment = async function(e) {
  if (e) e.preventDefault();

  const nameInput = document.getElementById('payment-client-name');
  const emailInput = document.getElementById('payment-client-email');
  const phoneInput = document.getElementById('payment-client-phone');
  const descInput = document.getElementById('payment-service-desc');
  const amountInput = document.getElementById('payment-amount-input');

  if (nameInput) paymentPageState.clientName = nameInput.value;
  if (emailInput) paymentPageState.clientEmail = emailInput.value;
  if (phoneInput) paymentPageState.clientPhone = phoneInput.value;
  if (descInput) paymentPageState.serviceDescription = descInput.value;
  if (amountInput) paymentPageState.amount = amountInput.value;

  function showPaymentFormError(msg) {
    paymentPageState.error = msg;
    const errBanner = document.getElementById('payment-error-banner');
    const errText = document.getElementById('payment-error-text');
    if (errBanner && errText) {
      errText.innerText = msg;
      errBanner.classList.remove('hidden');
      errBanner.classList.add('flex');
      errBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      renderApp();
    }
  }

  if (!paymentPageState.clientName || paymentPageState.clientName.trim().length < 2) {
    showPaymentFormError('Please enter your name or school / business name.');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!paymentPageState.clientEmail || !emailRegex.test(paymentPageState.clientEmail.trim())) {
    showPaymentFormError('Please enter a valid email address so we can send your receipt.');
    return;
  }

  if (paymentPageState.paymentMethod !== 'card') {
    const cleanedPhone = String(paymentPageState.clientPhone || '').replace(/[\s\-()]/g, '');
    if (cleanedPhone.length < 9) {
      showPaymentFormError('Please enter your Mobile Money phone number (for example 0777 123 456 or 0747 311 209).');
      return;
    }
  }

  const amountNum = parseFloat(String(paymentPageState.amount).replace(/,/g, ''));
  if (isNaN(amountNum) || amountNum <= 0) {
    showPaymentFormError('Please enter the agreed payment amount.');
    return;
  }
  if (paymentPageState.currency === 'UGX' && amountNum < 500) {
    showPaymentFormError('Minimum Mobile Money payment is UGX 500.');
    return;
  }

  stopPaymentTimers();
  paymentPageState.paymentRef = ''; // Always create a fresh transaction reference on submit
  paymentPageState.error = null;
  paymentPageState.isInitiating = true;
  renderApp();

  try {
    const res = await fetch('/api/payments/collect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: paymentPageState.clientName.trim(),
        email: paymentPageState.clientEmail.trim(),
        phone: paymentPageState.clientPhone ? paymentPageState.clientPhone.trim() : '',
        amount: amountNum,
        currency: paymentPageState.currency,
        description: paymentPageState.serviceDescription.trim() || 'Agreed Phresh Tech Media Services',
        paymentMethod: paymentPageState.paymentMethod
      }),
      signal: typeof AbortSignal !== 'undefined' && AbortSignal.timeout ? AbortSignal.timeout(25000) : undefined
    });

    const rawText = await res.text();
    let data = {};
    try {
      data = JSON.parse(rawText);
    } catch {
      data = { success: false, error: 'Payment service returned an unexpected response. Please try again.' };
    }

    paymentPageState.isInitiating = false;

    if (res.ok && data.success) {
      paymentPageState.paymentRef = data.paymentRef;
      paymentPageState.instructions = data.instructions;
      paymentPageState.isWaitingUssdApproval = true;
      paymentPageState.countdownSeconds = 90;
      renderApp();

      paymentPageState.countdownTimer = setInterval(() => {
        if (paymentPageState.countdownSeconds > 0) {
          paymentPageState.countdownSeconds -= 1;
          const cdEl = document.getElementById('ussd-countdown-display');
          if (cdEl) cdEl.innerText = `${paymentPageState.countdownSeconds}s`;
        } else {
          if (paymentPageState.countdownTimer) {
            clearInterval(paymentPageState.countdownTimer);
            paymentPageState.countdownTimer = null;
          }
          const statusText = document.getElementById('auto-status-indicator-text');
          if (statusText) {
            statusText.innerText = 'Still waiting on phone confirmation. If you did not see the prompt, tap Change Details below and try again.';
          }
        }
      }, 1000);

      const statusParams = new URLSearchParams({
        name: paymentPageState.clientName.trim(),
        email: paymentPageState.clientEmail.trim(),
        desc: paymentPageState.serviceDescription.trim() || 'Agreed Phresh Tech Media Services'
      }).toString();

      paymentPageState.pollTimer = setInterval(async () => {
        try {
          const statusRes = await fetch(`/api/payments/status/${encodeURIComponent(paymentPageState.paymentRef)}?${statusParams}`);
          if (statusRes.ok) {
            const statusText = await statusRes.text();
            let statusData = {};
            try {
              statusData = JSON.parse(statusText);
            } catch {
              return;
            }
            if (statusData.status === 'COMPLETED') {
              stopPaymentTimers();
              paymentPageState.isWaitingUssdApproval = false;
              paymentPageState.isCompleted = true;
              paymentPageState.confirmedData = statusData.payment;
              showToast(`Payment #${paymentPageState.paymentRef} received.`);
              renderApp();
            } else if (statusData.status === 'FAILED') {
              stopPaymentTimers();
              paymentPageState.isWaitingUssdApproval = false;
              paymentPageState.paymentRef = '';
              paymentPageState.error = statusData.failure_reason || 'Payment was declined or cancelled on your phone. Please try again.';
              renderApp();
            }
          }
        } catch (err) {
          // ignore transient poll error
        }
      }, 2000);
    } else {
      paymentPageState.error = data.error || 'Could not send the Mobile Money prompt to your phone. Please check your number and try again.';
      renderApp();
    }
  } catch (err) {
    paymentPageState.isInitiating = false;
    paymentPageState.error = (err && err.name === 'TimeoutError')
      ? 'The Mobile Money network is taking longer than usual to respond. Please check your phone or try again.'
      : 'Connection error. Please check your internet connection and try again.';
    renderApp();
  }
};

window.resetPaymentPage = function() {
  stopPaymentTimers();
  paymentPageState = {
    clientName: '',
    clientEmail: '',
    clientPhone: '',
    serviceDescription: '',
    amount: '',
    currency: 'UGX',
    paymentMethod: 'mtn_momo',
    isInitiating: false,
    isWaitingUssdApproval: false,
    isCompleted: false,
    paymentRef: '',
    instructions: '',
    pollTimer: null,
    countdownSeconds: 90,
    countdownTimer: null,
    error: null,
    confirmedData: null
  };
  window.paymentPageState = paymentPageState;
  renderApp();
};

window.printPaymentReceipt = function() {
  window.print();
};

// Router & Navigation
function parseHashRoute() {
  const rawHash = window.location.hash.replace(/^#/, '');
  const [routePart, queryPart] = rawHash.split('?');
  const page = (routePart || 'home').toLowerCase();

  if (VALID_PAGES.includes(page)) {
    currentPage = page;
  }

  if (queryPart && (page === 'payment' || page === 'pay')) {
    try {
      const params = new URLSearchParams(queryPart);
      if (params.get('amount')) paymentPageState.amount = params.get('amount');
      if (params.get('desc')) paymentPageState.serviceDescription = params.get('desc');
      if (params.get('name')) paymentPageState.clientName = params.get('name');
      if (params.get('email')) paymentPageState.clientEmail = params.get('email');
      if (params.get('phone')) paymentPageState.clientPhone = params.get('phone');
      if (params.get('currency')) paymentPageState.currency = params.get('currency').toUpperCase();
      if (params.get('method')) paymentPageState.paymentMethod = params.get('method');
    } catch (e) {
      // ignore
    }
  }
}

window.navigateTo = function(pageName, subPillar = null) {
  if (!VALID_PAGES.includes(pageName)) return;
  currentPage = pageName;
  if (subPillar) activeServicePillar = subPillar;
  window.location.hash = pageName;
  isMobileMenuOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
};

window.scrollToSection = function(sectionId, pageName = null) {
  isMobileMenuOpen = false;
  if (pageName && pageName !== currentPage) {
    currentPage = pageName;
    window.location.hash = pageName;
    renderApp();
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }, 60);
  } else {
    const el = document.getElementById(sectionId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};

window.toggleMobileMenu = function() {
  isMobileMenuOpen = !isMobileMenuOpen;
  renderApp();
};

window.setHeroSlide = function(idx) {
  currentHeroSlide = idx;
  startHeroAutoSlide();
  renderHeroHighlight();
};

function startHeroAutoSlide() {
  if (autoSlideTimer) clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(() => {
    if (currentPage === 'home') {
      currentHeroSlide = (currentHeroSlide + 1) % HERO_HIGHLIGHTS.length;
      renderHeroHighlight();
    }
  }, 7500);
}

window.switchServicePillar = function(pillar) {
  activeServicePillar = pillar;
  renderApp();
};

window.setTariffCategory = function(cat) {
  tariffCategoryFilter = cat;
  renderApp();
};

window.setTariffSearch = function(query) {
  tariffSearchQuery = query;
  const tbody = document.getElementById('tariff-table-tbody');
  if (tbody) {
    const q = (query || '').toLowerCase().trim();
    const rows = tbody.querySelectorAll('tr');
    rows.forEach(r => {
      const text = r.innerText.toLowerCase();
      r.style.display = (!q || text.includes(q)) ? '' : 'none';
    });
    return;
  }
  renderApp();
};

window.filterPortfolio = function(cat) {
  activePortfolioCategory = cat;
  renderApp();
};

function initApp() {
  parseHashRoute();
  window.addEventListener('hashchange', () => {
    const prevPage = currentPage;
    parseHashRoute();
    if (currentPage !== prevPage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    renderApp();
  });
  renderApp();
  startHeroAutoSlide();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// ==========================================
// DEDICATED PAYMENT PAGE VIEW
// ==========================================
function renderDedicatedPaymentPage() {
  const {
    clientName,
    clientEmail,
    clientPhone,
    serviceDescription,
    amount,
    currency,
    paymentMethod,
    isInitiating,
    isWaitingUssdApproval,
    isCompleted,
    paymentRef,
    countdownSeconds,
    error,
    confirmedData
  } = paymentPageState;

  // 1. Confirmed Payment Receipt View
  if (isCompleted && confirmedData) {
    const formattedAmount = `${confirmedData.currency || currency} ${Number(confirmedData.amount || amount).toLocaleString()}`;
    const methodLabel = paymentMethod === 'mtn_momo'
      ? 'MTN Mobile Money'
      : paymentMethod === 'airtel_money'
        ? 'Airtel Money'
        : 'Card Payment';

    return `
      <section id="payment-receipt-view" class="py-12 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
        <div id="printable-receipt-card" class="max-w-xl w-full bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden animate-fade-in">
          <div class="bg-[#0F213E] px-6 py-6 sm:px-8 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200">
            <div class="flex items-center gap-3">
              <img src="/logo.svg" alt="Phresh Tech Media Services" class="h-11 w-auto bg-white p-1.5 rounded-lg" referrerPolicy="no-referrer" />
              <div>
                <h2 class="text-lg font-bold tracking-tight text-white">Phresh Tech Media Services</h2>
                <p class="text-xs text-emerald-300 font-medium">Official Payment Receipt</p>
              </div>
            </div>
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-300">Paid & Confirmed</span>
          </div>

          <div class="p-6 sm:p-8 space-y-6">
            <div class="border-b border-stone-200 pb-5">
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Amount Paid</p>
              <div class="text-3xl font-bold text-[#0F213E] tabular-nums mt-1">${escapeHtml(formattedAmount)}</div>
              <p class="text-sm text-slate-600 mt-1">Received from <strong class="text-slate-900">${escapeHtml(confirmedData.client_name || clientName)}</strong></p>
            </div>

            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm border-b border-stone-200 pb-5">
              <div>
                <dt class="text-xs text-slate-500">Receipt Number</dt>
                <dd class="font-semibold text-slate-900 tabular-nums mt-0.5">${escapeHtml(confirmedData.id || paymentRef)}</dd>
              </div>
              <div>
                <dt class="text-xs text-slate-500">Payment Method</dt>
                <dd class="font-semibold text-slate-900 mt-0.5">${escapeHtml(methodLabel)}</dd>
              </div>
              <div>
                <dt class="text-xs text-slate-500">Date</dt>
                <dd class="text-slate-800 mt-0.5">${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</dd>
              </div>
              <div>
                <dt class="text-xs text-slate-500">Email</dt>
                <dd class="text-slate-800 mt-0.5 break-all">${escapeHtml(confirmedData.client_email || clientEmail)}</dd>
              </div>
            </dl>

            <div class="space-y-1">
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">Service or Project</p>
              <p class="text-sm font-semibold text-slate-900">${escapeHtml(confirmedData.service_description || serviceDescription || 'Agreed Service')}</p>
              <p class="text-xs text-slate-600 pt-1">
                A copy of this receipt has been recorded for your email and our office at phreshtechmediaservices@gmail.com.
              </p>
            </div>

            <div class="pt-2 flex flex-col sm:flex-row gap-3">
              <button onclick="printPaymentReceipt()" class="flex-1 bg-[#0F213E] hover:bg-slate-800 text-white font-semibold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
                <span>Print Receipt</span>
              </button>
              <a href="https://wa.me/256757848094?text=${encodeURIComponent(`Hello Phresh Tech Media, I have completed payment of ${formattedAmount} (Receipt ${confirmedData.id || paymentRef}).`)}" target="_blank" class="flex-1 bg-[#1E7E34] hover:bg-emerald-800 text-white font-semibold py-3 rounded-xl text-sm transition flex items-center justify-center gap-2">
                ${WHATSAPP_ICON_SVG}
                <span>Message Us on WhatsApp</span>
              </a>
            </div>

            <div class="text-center pt-1">
              <button onclick="resetPaymentPage(); navigateTo('home');" class="text-xs text-slate-600 hover:text-slate-900 underline">
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // 2. Waiting for Phone PIN Approval (100% Automatic Confirmation)
  if (isWaitingUssdApproval) {
    const formattedAmount = `${currency} ${Number(amount || 0).toLocaleString()}`;
    const networkName = paymentMethod === 'mtn_momo' ? 'MTN Mobile Money' : 'Airtel Money';

    return `
      <section class="py-14 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center justify-center">
        <div class="max-w-md w-full bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden animate-fade-in">
          <div class="bg-[#0F213E] text-white px-6 py-6 text-center space-y-1.5">
            <p class="text-xs font-semibold uppercase tracking-wider text-emerald-300">${escapeHtml(networkName)}</p>
            <h2 class="text-2xl font-bold text-white">Check Your Phone</h2>
            <p class="text-xs text-slate-300">Enter your Mobile Money PIN to approve this payment</p>
          </div>

          <div class="p-6 sm:p-8 space-y-5 text-center">
            <div class="space-y-1">
              <p class="text-sm text-slate-600">
                Prompt sent to <strong class="text-slate-900 tabular-nums">${escapeHtml(clientPhone)}</strong>
              </p>
              <div class="text-3xl font-bold text-[#0F213E] tabular-nums">${escapeHtml(formattedAmount)}</div>
              <p class="text-xs text-slate-500">Reference: ${escapeHtml(paymentRef)}</p>
            </div>

            <div class="border border-stone-200 bg-[#FAF9F6] rounded-xl p-4 text-left space-y-2">
              <div class="flex items-center justify-between text-xs font-semibold text-slate-800">
                <span class="flex items-center gap-2">
                  <svg class="animate-spin w-4 h-4 text-[#1E7E34] shrink-0" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                  </svg>
                  <span id="auto-status-indicator-text">Waiting for PIN entry on your phone...</span>
                </span>
                <span id="ussd-countdown-display" class="tabular-nums text-[#1E7E34] font-bold">${countdownSeconds || 90}s</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                This page updates on its own as soon as your Mobile Money payment goes through. There is no button to press here after entering your PIN.
              </p>
            </div>

            <button type="button" onclick="cancelWaitingUssd()" class="w-full bg-stone-100 hover:bg-stone-200 text-slate-800 font-semibold py-3 rounded-xl text-sm transition border border-stone-200">
              Change Details or Try Another Number
            </button>
          </div>
        </div>
      </section>
    `;
  }

  // 3. Payment Intake Form
  const detectedNet = detectUgNetwork(clientPhone);

  return `
    <section id="payment-page-section" class="py-12 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
      <div class="max-w-2xl mx-auto space-y-8">
        <div class="space-y-2 border-b border-stone-200 pb-6">
          <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Client Payment · Phresh Tech Media</p>
          <h1 class="text-3xl sm:text-4xl font-bold text-[#0F213E]">Pay for Your Project or Order</h1>
          <p class="text-sm text-slate-600 leading-relaxed">
            Use this page to settle an agreed invoice for school software, printing, or design work. We send a Mobile Money prompt straight to your phone.
          </p>
        </div>

        <div id="payment-error-banner" class="${error ? 'flex' : 'hidden'} p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-800 items-start gap-2.5">
          <svg class="w-4 h-4 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path></svg>
          <span id="payment-error-text">${escapeHtml(error || '')}</span>
        </div>

        <form onsubmit="handleInitiatePayment(event)" class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6" novalidate>
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label for="payment-client-name" class="block text-sm font-semibold text-slate-800 mb-1.5">Your Full Name or School <span class="text-red-600">*</span></label>
              <input
                id="payment-client-name"
                type="text"
                required
                value="${escapeHtml(clientName)}"
                oninput="handlePaymentFieldChange('clientName', this.value)"
                placeholder="e.g. Denis Mukasa / Global High"
                class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
              />
            </div>

            <div>
              <label for="payment-client-email" class="block text-sm font-semibold text-slate-800 mb-1.5">Email Address <span class="text-red-600">*</span></label>
              <input
                id="payment-client-email"
                type="email"
                required
                value="${escapeHtml(clientEmail)}"
                oninput="handlePaymentFieldChange('clientEmail', this.value)"
                placeholder="name@example.com"
                class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between mb-1.5">
              <label for="payment-client-phone" class="block text-sm font-semibold text-slate-800">Mobile Money Phone Number <span class="text-red-600">*</span></label>
              <span id="payment-phone-network-note">
                ${detectedNet === 'mtn_momo'
                  ? `<span class="text-xs font-semibold text-amber-800">MTN Mobile Money number</span>`
                  : detectedNet === 'airtel_money'
                    ? `<span class="text-xs font-semibold text-red-700">Airtel Money number</span>`
                    : `<span class="text-xs text-slate-500">MTN or Airtel Uganda</span>`}
              </span>
            </div>
            <input
              id="payment-client-phone"
              type="tel"
              required
              value="${escapeHtml(clientPhone)}"
              oninput="handlePaymentFieldChange('clientPhone', this.value)"
              placeholder="0777 123 456 or 0747 311 209"
              class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 tabular-nums focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
            />
            <p class="text-xs text-slate-500 mt-1">Make sure the phone is nearby so you can enter your PIN when prompted.</p>
          </div>

          <div>
            <label for="payment-service-desc" class="block text-sm font-semibold text-slate-800 mb-1.5">What Are You Paying For? <span class="text-red-600">*</span></label>
            <input
              id="payment-service-desc"
              type="text"
              required
              value="${escapeHtml(serviceDescription)}"
              oninput="handlePaymentFieldChange('serviceDescription', this.value)"
              placeholder="e.g. Phresh Rank Core renewal, 5 receipt books, banner printing..."
              class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
            />
          </div>

          <div class="grid sm:grid-cols-12 gap-4">
            <div class="sm:col-span-8">
              <label for="payment-amount-input" class="block text-sm font-semibold text-slate-800 mb-1.5">Agreed Amount <span class="text-red-600">*</span></label>
              <div class="relative flex items-center">
                <span id="payment-currency-symbol" class="absolute left-3.5 font-semibold text-slate-500 text-sm">${escapeHtml(currency)}</span>
                <input
                  id="payment-amount-input"
                  type="number"
                  min="500"
                  step="any"
                  required
                  value="${escapeHtml(amount)}"
                  oninput="handlePaymentFieldChange('amount', this.value)"
                  placeholder="350000"
                  class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl pl-16 pr-4 py-2.5 text-base font-bold text-[#0F213E] tabular-nums focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="payment-currency-select" class="block text-sm font-semibold text-slate-800 mb-1.5">Currency</label>
              <select
                id="payment-currency-select"
                onchange="handlePaymentCurrencySelect(this.value)"
                class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-900 focus:outline-none focus:border-[#1E7E34]"
              >
                <option value="UGX" ${currency === 'UGX' ? 'selected' : ''}>UGX</option>
                <option value="USD" ${currency === 'USD' ? 'selected' : ''}>USD</option>
              </select>
            </div>
          </div>

          <div class="flex flex-wrap gap-2">
            ${[50000, 150000, 350000, 400000, 1000000].map(amt => `
              <button type="button" onclick="setPaymentPresetAmount(${amt})" class="px-3 py-1.5 rounded-lg border border-stone-200 bg-[#FAF9F6] hover:bg-stone-100 text-xs font-semibold text-slate-700 tabular-nums transition">
                UGX ${amt.toLocaleString()}
              </button>
            `).join('')}
          </div>

          <div class="space-y-2.5">
            <span class="block text-sm font-semibold text-slate-800">Mobile Money Network</span>
            <div class="grid sm:grid-cols-2 gap-3">
              <div id="payment-method-card-mtn" onclick="handlePaymentMethodSelect('mtn_momo')" class="flex flex-col p-4 border rounded-xl cursor-pointer transition ${paymentMethod === 'mtn_momo' ? 'border-amber-600 bg-amber-50/60' : 'border-stone-200 bg-white hover:bg-stone-50'}">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-bold text-slate-900">MTN MoMo</span>
                  <input type="radio" id="payment-method-mtn" name="payment_method" value="mtn_momo" ${paymentMethod === 'mtn_momo' ? 'checked' : ''} />
                </div>
                <span class="text-xs text-slate-600">PIN prompt sent to your MTN phone</span>
              </div>

              <div id="payment-method-card-airtel" onclick="handlePaymentMethodSelect('airtel_money')" class="flex flex-col p-4 border rounded-xl cursor-pointer transition ${paymentMethod === 'airtel_money' ? 'border-red-600 bg-red-50/50' : 'border-stone-200 bg-white hover:bg-stone-50'}">
                <div class="flex items-center justify-between mb-1">
                  <span class="text-sm font-bold text-slate-900">Airtel Money</span>
                  <input type="radio" id="payment-method-airtel" name="payment_method" value="airtel_money" ${paymentMethod === 'airtel_money' ? 'checked' : ''} />
                </div>
                <span class="text-xs text-slate-600">PIN prompt sent to your Airtel phone</span>
              </div>
            </div>
            <p class="text-xs text-slate-500">Prefer bank deposit or paying at our Kasenge office? Call +256 741 145595.</p>
          </div>

          <button
            type="submit"
            ${isInitiating ? 'disabled' : ''}
            class="w-full bg-[#1E7E34] hover:bg-emerald-800 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl text-sm transition flex items-center justify-center gap-2"
          >
            ${isInitiating ? `
              <svg class="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path></svg>
              <span>Sending Prompt to Your Phone (a few seconds)...</span>
            ` : `
              <span>Send Payment Prompt (${escapeHtml(currency)} ${Number(amount || 0).toLocaleString()})</span>
            `}
          </button>

          <p class="text-xs text-slate-500 text-center">
            Need help before paying? Call our office on <a href="tel:+256741145595" class="underline text-slate-700 font-medium">+256 741 145595</a> or message <a href="https://wa.me/256757848094" target="_blank" class="underline text-[#1E7E34] font-medium">WhatsApp</a>.
          </p>
        </form>
      </div>
    </section>
  `;
}

// ==========================================
// 1. HOME PAGE RENDERER (Human, Grounded, Zero Technical Talk)
// ==========================================
function renderHomePage() {
  return `
    <!-- Editorial Split Hero -->
    <section id="hero-section" class="border-b border-stone-200 bg-[#FAF9F6]">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div id="hero-highlight-container"></div>

        <!-- Subtle Story Switcher -->
        <div class="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div id="hero-slide-controls" class="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
            ${HERO_HIGHLIGHTS.map((h, idx) => `
              <button onclick="setHeroSlide(${idx})" class="pb-1 transition border-b-2 ${currentHeroSlide === idx ? 'border-[#1E7E34] text-[#0F213E]' : 'border-transparent hover:text-[#0F213E]'}">
                0${idx + 1}. ${idx === 0 ? 'Overview' : idx === 1 ? 'Report Cards' : idx === 2 ? 'Printing & Banners' : 'Fees & Receipts'}
              </button>
            `).join('')}
          </div>
          <p class="text-xs text-slate-500">Kasenge - Nakawuka Road, Kampala</p>
        </div>
      </div>
    </section>

    <!-- What We Help You With (Warm, Non-Technical Overview) -->
    <section class="py-16 bg-white border-b border-stone-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="max-w-2xl space-y-2">
          <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">What We Do</p>
          <h2 class="text-3xl sm:text-4xl font-bold text-[#0F213E]">Practical services under one roof in Kampala</h2>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you run a school, a retail shop, a church, or rental apartments, we keep the daily paperwork, printing, and online presence simple.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="p-6 rounded-2xl border border-stone-200 bg-[#FAF9F6] flex flex-col justify-between space-y-5">
            <div class="space-y-2">
              <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Schools & Records</p>
              <h3 class="text-xl font-bold text-[#0F213E]">School & Business Tools</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Phresh Rank Core report cards, EduLedger school fees tracking, Rent Ledger for landlords, BizTrack shop sales, and church records.
              </p>
            </div>
            <div class="pt-4 border-t border-stone-200 flex items-center justify-between text-sm">
              <span class="font-semibold text-slate-700 tabular-nums">From UGX 350,000</span>
              <button onclick="navigateTo('services', 'database-systems')" class="font-semibold text-[#1E7E34] hover:underline">View tools →</button>
            </div>
          </div>

          <div class="p-6 rounded-2xl border border-stone-200 bg-[#FAF9F6] flex flex-col justify-between space-y-5">
            <div class="space-y-2">
              <p class="text-xs font-semibold uppercase tracking-wider text-[#9B1C1C]">In-House Press</p>
              <h3 class="text-xl font-bold text-[#0F213E]">Printing & Receipt Books</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Numbered 100-leaf duplicate receipt books for schools and businesses, plus bright outdoor vinyl banners and stickers printed to size.
              </p>
            </div>
            <div class="pt-4 border-t border-stone-200 flex items-center justify-between text-sm">
              <span class="font-semibold text-slate-700 tabular-nums">UGX 25,000 / unit</span>
              <button onclick="navigateTo('services', 'print-copy')" class="font-semibold text-[#9B1C1C] hover:underline">Order printing →</button>
            </div>
          </div>

          <div class="p-6 rounded-2xl border border-stone-200 bg-[#FAF9F6] flex flex-col justify-between space-y-5">
            <div class="space-y-2">
              <p class="text-xs font-semibold uppercase tracking-wider text-[#0F213E]">Studio Design</p>
              <h3 class="text-xl font-bold text-[#0F213E]">Logos, Crests & Websites</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Logos, school badges, event flyers, website names (.com, .ug, .sc.ug), and clean websites that introduce your organisation well.
              </p>
            </div>
            <div class="pt-4 border-t border-stone-200 flex items-center justify-between text-sm">
              <span class="font-semibold text-slate-700 tabular-nums">Design from UGX 5,000</span>
              <button onclick="navigateTo('services', 'graphic-design')" class="font-semibold text-[#0F213E] hover:underline">See design rates →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Selected Work Preview -->
    <section class="py-16 bg-[#FAF9F6] border-b border-stone-200">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div class="space-y-1.5">
            <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Our Work</p>
            <h2 class="text-3xl font-bold text-[#0F213E]">Recent projects & workshop prints</h2>
            <p class="text-sm text-slate-600">Click any photo below to view a larger image or ask about ordering something similar.</p>
          </div>
          <button onclick="navigateTo('portfolio')" class="text-sm font-semibold text-[#0F213E] border border-stone-300 bg-white hover:bg-stone-50 px-4 py-2.5 rounded-xl transition self-start sm:self-auto">
            See all ${PRODUCT_SHOWCASE_GALLERY.length} examples →
          </button>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          ${PRODUCT_SHOWCASE_GALLERY.slice(0, 8).map(item => `
            <article class="bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col group hover:border-stone-300 transition">
              <div class="h-48 bg-stone-100 relative overflow-hidden cursor-pointer" onclick="openImageModal('${item.img}', '${escapeHtml(item.title)}', '${escapeHtml(item.subtitle)}', '${escapeHtml(item.label)}')">
                <img src="${item.img}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" referrerPolicy="no-referrer" />
              </div>
              <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div class="space-y-1">
                  <p class="text-xs font-medium text-slate-500">${escapeHtml(item.label)} · ${escapeHtml(item.client)}</p>
                  <h3 class="font-bold text-[#0F213E] text-sm leading-snug">${escapeHtml(item.title)}</h3>
                  <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">${escapeHtml(item.subtitle)}</p>
                </div>
                <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <button onclick="openImageModal('${item.img}', '${escapeHtml(item.title)}', '${escapeHtml(item.subtitle)}', '${escapeHtml(item.label)}')" class="text-slate-600 hover:text-slate-900 font-medium">Enlarge</button>
                  <button onclick="consultService('${escapeHtml(item.title)}')" class="text-[#9B1C1C] font-semibold hover:underline">Ask about this →</button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Honest Words From Partner Schools -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8">
          <div class="space-y-2 max-w-xl">
            <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Trusted By Schools</p>
            <h2 class="text-3xl font-bold text-[#0F213E]">Over 50 partner schools across Uganda</h2>
            <p class="text-sm text-slate-600">Headteachers, directors of studies, and bursars use our tools every term.</p>
          </div>
          <div class="flex flex-wrap gap-8 text-left">
            <div>
              <span class="block text-2xl font-bold text-[#0F213E] tabular-nums">50+</span>
              <span class="text-xs text-slate-500">Partner Schools</span>
            </div>
            <div>
              <span class="block text-2xl font-bold text-[#1E7E34] tabular-nums">100,000+</span>
              <span class="text-xs text-slate-500">Report Cards Issued</span>
            </div>
            <div>
              <span class="block text-2xl font-bold text-[#9B1C1C]">Kasenge</span>
              <span class="text-xs text-slate-500">Local Support Desk</span>
            </div>
          </div>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <blockquote class="p-5 rounded-2xl border border-stone-200 bg-[#FAF9F6] flex flex-col justify-between space-y-4">
            <p class="text-xs text-slate-700 leading-relaxed">
              "Phresh Rank Core saved us weeks of adding up marks by hand. Teachers enter results easily and parent report cards come out neat in minutes."
            </p>
            <footer class="border-t border-stone-200 pt-3">
              <strong class="block text-xs font-bold text-[#0F213E]">Global High School Madudu</strong>
              <span class="text-xs text-slate-500">Registrar's Office</span>
            </footer>
          </blockquote>

          <blockquote class="p-5 rounded-2xl border border-stone-200 bg-[#FAF9F6] flex flex-col justify-between space-y-4">
            <p class="text-xs text-slate-700 leading-relaxed">
              "Our staff rely on Phresh Rank Core every term for marksheets, competence comments, and printing class report cards without stress."
            </p>
            <footer class="border-t border-stone-200 pt-3">
              <strong class="block text-xs font-bold text-[#0F213E]">Pride College Lungala</strong>
              <span class="text-xs text-slate-500">Director of Studies</span>
            </footer>
          </blockquote>

          <blockquote class="p-5 rounded-2xl border border-stone-200 bg-[#FAF9F6] flex flex-col justify-between space-y-4">
            <p class="text-xs text-slate-700 leading-relaxed">
              "Using Phresh Rank Core together with EduLedger gave our school clear marksheets, neat report cards, and organised tuition records."
            </p>
            <footer class="border-t border-stone-200 pt-3">
              <strong class="block text-xs font-bold text-[#0F213E]">Mpigi Light College</strong>
              <span class="text-xs text-slate-500">Bursar & DOS Office</span>
            </footer>
          </blockquote>

          <blockquote class="p-5 rounded-2xl border border-stone-200 bg-[#FAF9F6] flex flex-col justify-between space-y-4">
            <p class="text-xs text-slate-700 leading-relaxed">
              "Working offline means even when internet is slow at the end of term, we finish our report cards on time without delays."
            </p>
            <footer class="border-t border-stone-200 pt-3">
              <strong class="block text-xs font-bold text-[#0F213E]">St. Andrews College Moyo</strong>
              <span class="text-xs text-slate-500">Headteacher's Office</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  `;
}

function renderHeroHighlight() {
  const container = document.getElementById('hero-highlight-container');
  const controls = document.getElementById('hero-slide-controls');
  const slide = HERO_HIGHLIGHTS[currentHeroSlide] || HERO_HIGHLIGHTS[0];

  if (container && slide) {
    container.innerHTML = `
      <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in">
        <div class="lg:col-span-6 space-y-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">${escapeHtml(slide.eyebrow)}</p>
          <h1 class="text-3xl sm:text-5xl font-bold text-[#0F213E] leading-[1.12] tracking-tight">
            ${escapeHtml(slide.title)}
          </h1>
          <p class="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
            ${escapeHtml(slide.subtitle)}
          </p>
          <div class="flex flex-wrap items-center gap-3 pt-2">
            <button onclick="navigateTo('${slide.primaryCtaPage}')" class="bg-[#0F213E] hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-xl text-sm transition">
              ${escapeHtml(slide.primaryCtaText)}
            </button>
            <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media" target="_blank" class="bg-white hover:bg-stone-100 text-[#1E7E34] border border-stone-300 font-semibold px-5 py-3 rounded-xl text-sm transition flex items-center gap-2">
              ${WHATSAPP_ICON_SVG}
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        <div class="lg:col-span-6">
          <figure class="bg-white border border-stone-200 rounded-2xl p-2 shadow-xs">
            <img src="${slide.image}" alt="${escapeHtml(slide.title)}" class="w-full h-72 sm:h-88 object-cover rounded-xl cursor-pointer" onclick="openImageModal('${slide.image}', '${escapeHtml(slide.title)}', '${escapeHtml(slide.subtitle)}', '${escapeHtml(slide.eyebrow)}')" referrerPolicy="no-referrer" />
            <figcaption class="px-3 py-2 text-xs text-slate-500 flex items-center justify-between">
              <span>${escapeHtml(slide.imageCaption)}</span>
              <button onclick="openImageModal('${slide.image}', '${escapeHtml(slide.title)}', '${escapeHtml(slide.subtitle)}', '${escapeHtml(slide.eyebrow)}')" class="font-semibold text-[#0F213E] hover:underline">View larger</button>
            </figcaption>
          </figure>
        </div>
      </div>
    `;
  }

  if (controls) {
    controls.innerHTML = HERO_HIGHLIGHTS.map((h, idx) => `
      <button onclick="setHeroSlide(${idx})" class="pb-1 transition border-b-2 ${currentHeroSlide === idx ? 'border-[#1E7E34] text-[#0F213E]' : 'border-transparent hover:text-[#0F213E]'}">
        0${idx + 1}. ${idx === 0 ? 'Overview' : idx === 1 ? 'Report Cards' : idx === 2 ? 'Printing & Banners' : 'Fees & Receipts'}
      </button>
    `).join('');
  }
}

// ==========================================
// 2. SERVICES & PRICE LIST PAGE
// ==========================================
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
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h2 class="text-2xl font-bold text-[#0F213E]">Complete Price Directory</h2>
          <p class="text-sm text-slate-600 mt-1">Clear prices in Uganda Shillings (UGX). Tap any item to inquire or place an order.</p>
        </div>
        <button onclick="navigateTo('contact')" class="bg-[#0F213E] hover:bg-slate-800 text-white font-semibold text-xs px-4 py-2.5 rounded-xl transition self-start md:self-auto">
          Talk About an Order →
        </button>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 justify-between items-center bg-[#FAF9F6] p-3.5 rounded-xl border border-stone-200">
        <div class="flex flex-wrap gap-1.5 text-xs font-semibold w-full sm:w-auto">
          <button onclick="setTariffCategory('all')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'all' ? 'bg-[#0F213E] text-white' : 'bg-white text-slate-700 border border-stone-200 hover:bg-stone-100'}">All (${OFFICIAL_PHRESH_SERVICES.length})</button>
          <button onclick="setTariffCategory('software')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'software' ? 'bg-[#0F213E] text-white' : 'bg-white text-slate-700 border border-stone-200 hover:bg-stone-100'}">School & Business</button>
          <button onclick="setTariffCategory('design')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'design' ? 'bg-[#0F213E] text-white' : 'bg-white text-slate-700 border border-stone-200 hover:bg-stone-100'}">Design</button>
          <button onclick="setTariffCategory('print')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'print' ? 'bg-[#0F213E] text-white' : 'bg-white text-slate-700 border border-stone-200 hover:bg-stone-100'}">Printing</button>
          <button onclick="setTariffCategory('web')" class="px-3 py-1.5 rounded-lg transition ${tariffCategoryFilter === 'web' ? 'bg-[#0F213E] text-white' : 'bg-white text-slate-700 border border-stone-200 hover:bg-stone-100'}">Websites</button>
        </div>
        <div class="w-full sm:w-64">
          <input type="text" placeholder="Search price list..." value="${escapeHtml(tariffSearchQuery)}" oninput="setTariffSearch(this.value)" class="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#1E7E34]" />
        </div>
      </div>

      <div class="overflow-x-auto border border-stone-200 rounded-xl">
        <table class="w-full text-left text-xs">
          <thead class="bg-[#FAF9F6] text-slate-600 font-semibold uppercase tracking-wider text-[11px] border-b border-stone-200">
            <tr>
              <th class="p-3.5">#</th>
              <th class="p-3.5">Service</th>
              <th class="p-3.5">Price (UGX)</th>
              <th class="p-3.5">Notes</th>
              <th class="p-3.5 text-right">Action</th>
            </tr>
          </thead>
          <tbody id="tariff-table-tbody" class="divide-y divide-stone-200 text-slate-800">
            ${filtered.map((item, idx) => `
              <tr class="hover:bg-[#FAF9F6] transition">
                <td class="p-3.5 text-slate-400 tabular-nums">${idx + 1}</td>
                <td class="p-3.5 font-semibold text-slate-900">${escapeHtml(item.name)}</td>
                <td class="p-3.5 font-bold text-[#1E7E34] tabular-nums whitespace-nowrap">UGX ${item.priceUGX.toLocaleString()}</td>
                <td class="p-3.5 text-slate-600">${escapeHtml(item.note)}</td>
                <td class="p-3.5 text-right">
                  <button onclick="consultService('${escapeHtml(item.name)}')" class="text-[#0F213E] hover:underline font-semibold whitespace-nowrap">
                    Inquire →
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

function renderPillarDetailContent() {
  switch (activeServicePillar) {
    case 'tariff-catalog':
      return renderTariffCatalog();

    case 'graphic-design':
      return `
        <div class="space-y-6">
          <div class="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-[#0F213E]">Graphic Design & Branding</h2>
              <p class="text-sm text-slate-600">Logos, school badges, event posters, and printed stationery artwork.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-[#1E7E34] hover:bg-emerald-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition self-start sm:self-auto">
              Start a Design Order →
            </button>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            ${[
              { title: 'Minor Branding', desc: 'Simple badge clean-up or quick artwork edit.', price: 'UGX 5,000' },
              { title: 'Phresh Branding', desc: 'Logo and clean profile identity for a business or club.', price: 'UGX 10,000' },
              { title: 'Graphic Designing', desc: 'Custom event poster, admission flyer, or banner layout.', price: 'UGX 15,000' },
              { title: 'Medium Branding', desc: 'Flyer design, social artwork, and school emblem package.', price: 'UGX 15,000' },
              { title: 'Mega Branding', desc: 'Full school or company brand pack and stationery layouts.', price: 'UGX 25,000' }
            ].map(c => `
              <div class="p-5 bg-[#FAF9F6] border border-stone-200 rounded-xl flex flex-col justify-between space-y-3">
                <div>
                  <h3 class="font-bold text-[#0F213E]">${c.title}</h3>
                  <p class="text-xs text-slate-600 mt-1">${c.desc}</p>
                </div>
                <div class="text-sm font-bold text-[#1E7E34] tabular-nums">${c.price}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'print-copy':
      return `
        <div class="space-y-6">
          <div class="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-[#0F213E]">Commercial Printing & Press</h2>
              <p class="text-sm text-slate-600">Numbered duplicate receipt books, vinyl banners, stickers, and everyday copying in Kasenge.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-[#9B1C1C] hover:bg-red-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition self-start sm:self-auto">
              Order Printing →
            </button>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 text-sm">
            <div class="p-5 bg-[#FAF9F6] border border-stone-200 rounded-xl flex justify-between items-center gap-4">
              <div>
                <h3 class="font-bold text-[#0F213E]">Receipt Book (100 Leaves)</h3>
                <p class="text-xs text-slate-600 mt-1">Duplicate carbonless books numbered clearly for schools, churches, and shops.</p>
              </div>
              <span class="font-bold text-[#9B1C1C] tabular-nums whitespace-nowrap">UGX 25,000</span>
            </div>
            <div class="p-5 bg-[#FAF9F6] border border-stone-200 rounded-xl flex justify-between items-center gap-4">
              <div>
                <h3 class="font-bold text-[#0F213E]">Banner / Sticker Printing</h3>
                <p class="text-xs text-slate-600 mt-1">Outdoor vinyl banners and stickers charged fairly per square metre.</p>
              </div>
              <span class="font-bold text-[#9B1C1C] tabular-nums whitespace-nowrap">UGX 25,000</span>
            </div>
          </div>
        </div>
      `;

    case 'database-systems':
      return `
        <div class="space-y-6">
          <div class="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-[#0F213E]">School & Business Tools</h2>
              <p class="text-sm text-slate-600">Installed with full training for your staff and support whenever you need a hand.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-[#0F213E] hover:bg-slate-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition self-start sm:self-auto">
              Book a Demo →
            </button>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            ${[
              { name: 'Phresh Rank Core (Offline)', desc: 'Fast school report card program for teachers and DOS offices.', price: 'UGX 350,000' },
              { name: 'Phresh Rank Core (New Customer)', desc: 'Includes first setup and 100k termly support.', price: 'UGX 400,000' },
              { name: 'Phresh Rank Core (Online & Offline)', desc: 'Works both at school without internet and online.', price: 'UGX 300,000' },
              { name: 'Phresh Eduledger', desc: 'School fees balances, bursaries, and parent receipts.', price: 'UGX 400,000' },
              { name: 'Phresh Rent Ledger', desc: 'Track rental houses, shops, tenants, and monthly receipts.', price: 'UGX 400,000' },
              { name: 'Church Management System', desc: 'Member records, tithes, offerings, and church schedules.', price: 'UGX 400,000' },
              { name: 'Point of Sale (Offline)', desc: 'Shop counter billing and daily stock count.', price: 'UGX 400,000' },
              { name: 'Point of Sale (Online)', desc: 'Check shop sales from your phone (120k/year renewal).', price: 'UGX 400,000' },
              { name: 'Phresh Point of Sale (Online One Time)', desc: 'Full online shop manager with one-time license.', price: 'UGX 800,000' }
            ].map(item => `
              <div class="p-5 border border-stone-200 rounded-xl bg-[#FAF9F6] flex flex-col justify-between space-y-4">
                <div>
                  <h3 class="font-bold text-[#0F213E]">${item.name}</h3>
                  <p class="text-xs text-slate-600 mt-1 leading-relaxed">${item.desc}</p>
                </div>
                <div class="flex items-center justify-between pt-3 border-t border-stone-200">
                  <span class="font-bold text-[#1E7E34] tabular-nums">${item.price}</span>
                  <button onclick="consultService('${item.name}')" class="text-xs font-semibold text-[#0F213E] hover:underline">Ask about this →</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'web-development':
      return `
        <div class="space-y-6">
          <div class="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-[#0F213E]">Websites & Domain Names</h2>
              <p class="text-sm text-slate-600">Welcoming websites for schools, churches, and businesses—we handle the domain name and keep your site online.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-[#0F213E] hover:bg-slate-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition self-start sm:self-auto">
              Plan Your Website →
            </button>
          </div>
          <div class="grid sm:grid-cols-2 gap-4 text-sm">
            <div class="p-5 border border-stone-200 rounded-xl bg-[#FAF9F6] space-y-2">
              <h3 class="font-bold text-[#0F213E]">Website Domain Registration</h3>
              <p class="text-xs text-slate-600">Register your school or business web name (.com, .ug, .org, .sc.ug).</p>
              <div class="font-bold text-[#1E7E34] tabular-nums pt-1">UGX 25,000</div>
            </div>
            <div class="p-5 border border-stone-200 rounded-xl bg-[#FAF9F6] space-y-2">
              <h3 class="font-bold text-[#0F213E]">Annual Website & Email Care</h3>
              <p class="text-xs text-slate-600">Yearly renewal and regular check-ups so your site stays online smoothly.</p>
              <div class="font-bold text-[#1E7E34] tabular-nums pt-1">UGX 100,000</div>
            </div>
          </div>
        </div>
      `;

    case 'social-media':
      return `
        <div class="space-y-6">
          <div class="border-b border-stone-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-bold text-[#0F213E]">Multi-Branch & Special Packages</h2>
              <p class="text-sm text-slate-600">Built for larger schools, teaching groups, and organisations with multiple offices.</p>
            </div>
            <button onclick="navigateTo('contact')" class="bg-[#0F213E] hover:bg-slate-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition self-start sm:self-auto">
              Request Quote →
            </button>
          </div>
          <div class="grid sm:grid-cols-3 gap-4 text-sm">
            <div class="p-5 border border-stone-200 rounded-xl bg-[#FAF9F6] space-y-2">
              <h3 class="font-bold text-[#0F213E]">Phresh E-lesson Manager</h3>
              <p class="text-xs text-slate-600">Organise class notes, lesson plans, and student study packs.</p>
              <div class="font-bold text-[#1E7E34] tabular-nums pt-1">UGX 600,000</div>
            </div>
            <div class="p-5 border border-stone-200 rounded-xl bg-[#FAF9F6] space-y-2">
              <h3 class="font-bold text-[#0F213E]">Phresh-Nexus</h3>
              <p class="text-xs text-slate-600">Connect multiple branches or campuses in one shared view.</p>
              <div class="font-bold text-[#1E7E34] tabular-nums pt-1">UGX 850,000</div>
            </div>
            <div class="p-5 border border-stone-200 rounded-xl bg-[#FAF9F6] space-y-2">
              <h3 class="font-bold text-[#0F213E]">Complete Wholesale Pack</h3>
              <p class="text-xs text-slate-600">Full package for institutions needing several tools together.</p>
              <div class="font-bold text-[#1E7E34] tabular-nums pt-1">UGX 1,500,000</div>
            </div>
          </div>
        </div>
      `;

    default:
      return renderTariffCatalog();
  }
}

function renderServicesPage() {
  const tabs = [
    { id: 'tariff-catalog', label: 'Full Price List (21 Items)' },
    { id: 'database-systems', label: 'School & Business Tools' },
    { id: 'print-copy', label: 'Printing & Receipt Books' },
    { id: 'graphic-design', label: 'Graphic Design & Logos' },
    { id: 'web-development', label: 'Websites & Domains' },
    { id: 'social-media', label: 'Multi-Branch Packs' }
  ];

  return `
    <section id="services-catalog-section" class="border-b border-stone-200 bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Our Services</p>
        <h1 class="text-3xl sm:text-5xl font-bold text-[#0F213E]">Services & Transparent Pricing</h1>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl">
          Honest prices with clear support from our team in Kasenge, Kampala.
        </p>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto space-y-8">
        <div class="flex flex-wrap gap-2 border-b border-stone-200 pb-4 text-xs font-semibold">
          ${tabs.map(t => `
            <button onclick="switchServicePillar('${t.id}')" class="px-4 py-2.5 rounded-xl transition ${activeServicePillar === t.id ? 'bg-[#0F213E] text-white' : 'bg-white text-slate-700 border border-stone-200 hover:bg-stone-50'}">
              ${t.label}
            </button>
          `).join('')}
        </div>

        <div class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs">
          ${renderPillarDetailContent()}
        </div>
      </div>
    </section>
  `;
}

// ==========================================
// 3. OUR WORK GALLERY PAGE
// ==========================================
function renderPortfolioPage() {
  const filteredGallery = activePortfolioCategory === 'all'
    ? PRODUCT_SHOWCASE_GALLERY
    : activePortfolioCategory === 'media'
      ? PRODUCT_SHOWCASE_GALLERY.filter(item => item.category !== 'software')
      : PRODUCT_SHOWCASE_GALLERY.filter(item => item.category === 'software');

  return `
    <section id="portfolio-section" class="border-b border-stone-200 bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="space-y-2">
          <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Our Work</p>
          <h1 class="text-3xl sm:text-5xl font-bold text-[#0F213E]">Selected Work & Workshop Gallery</h1>
          <p class="text-sm sm:text-base text-slate-600 max-w-2xl">
            Real screens, school banners, duplicate receipt books, and studio work produced in Kampala.
          </p>
        </div>
        <button onclick="navigateTo('contact')" class="bg-[#0F213E] hover:bg-slate-800 text-white text-xs font-semibold px-5 py-3 rounded-xl transition self-start md:self-auto shrink-0">
          Discuss a Project →
        </button>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto space-y-10">
        <div class="flex items-center gap-2 border-b border-stone-200 pb-4 text-xs font-semibold overflow-x-auto">
          <button onclick="filterPortfolio('all')" class="px-4 py-2 rounded-xl transition shrink-0 ${activePortfolioCategory === 'all' ? 'bg-[#0F213E] text-white' : 'bg-white border border-stone-200 text-slate-700 hover:bg-stone-50'}">
            All Work (${PRODUCT_SHOWCASE_GALLERY.length})
          </button>
          <button onclick="filterPortfolio('engineering')" class="px-4 py-2 rounded-xl transition shrink-0 ${activePortfolioCategory === 'engineering' ? 'bg-[#0F213E] text-white' : 'bg-white border border-stone-200 text-slate-700 hover:bg-stone-50'}">
            School & Business Tools (${PRODUCT_SHOWCASE_GALLERY.filter(i => i.category === 'software').length})
          </button>
          <button onclick="filterPortfolio('media')" class="px-4 py-2 rounded-xl transition shrink-0 ${activePortfolioCategory === 'media' ? 'bg-[#0F213E] text-white' : 'bg-white border border-stone-200 text-slate-700 hover:bg-stone-50'}">
            Printing, Banners & Design (${PRODUCT_SHOWCASE_GALLERY.filter(i => i.category !== 'software').length})
          </button>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${filteredGallery.map(item => `
            <article class="bg-white border border-stone-200 rounded-2xl overflow-hidden flex flex-col group">
              <div class="h-56 bg-stone-100 overflow-hidden cursor-pointer" onclick="openImageModal('${item.img}', '${escapeHtml(item.title)}', '${escapeHtml(item.subtitle)}', '${escapeHtml(item.label)}')">
                <img src="${item.img}" alt="${escapeHtml(item.title)}" class="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300" referrerPolicy="no-referrer" />
              </div>
              <div class="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div class="space-y-1">
                  <p class="text-xs font-medium text-slate-500">${escapeHtml(item.label)} · ${escapeHtml(item.client)}</p>
                  <h3 class="font-bold text-[#0F213E] text-base leading-snug">${escapeHtml(item.title)}</h3>
                  <p class="text-xs text-slate-600 leading-relaxed">${escapeHtml(item.subtitle)}</p>
                </div>
                <div class="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <button onclick="openImageModal('${item.img}', '${escapeHtml(item.title)}', '${escapeHtml(item.subtitle)}', '${escapeHtml(item.label)}')" class="text-slate-600 hover:text-slate-900 font-medium">View photo</button>
                  <button onclick="consultService('${escapeHtml(item.title)}')" class="text-[#1E7E34] font-semibold hover:underline">Ask about this →</button>
                </div>
              </div>
            </article>
          `).join('')}
        </div>

        <!-- Simple School Story -->
        <div class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-5">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-4">
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">How Schools Use Phresh Rank Core</p>
              <h2 class="text-2xl font-bold text-[#0F213E] mt-1">Saving Teachers Three Weeks Every End of Term</h2>
            </div>
            <button onclick="navigateTo('contact')" class="bg-[#0F213E] text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-slate-800 transition self-start md:self-auto">
              Request a School Visit
            </button>
          </div>
          <div class="grid md:grid-cols-2 gap-6 text-sm text-slate-600 leading-relaxed">
            <div>
              <h3 class="font-bold text-[#9B1C1C] mb-1">Before</h3>
              <p>Schools spent weeks adding up marks by hand, checking grades, and fixing arithmetic mistakes while parents waited for report cards.</p>
            </div>
            <div>
              <h3 class="font-bold text-[#1E7E34] mb-1">With Phresh Rank Core</h3>
              <p>Teachers type in subject scores on the school computer—even with no internet—and neat printed report cards come out in minutes for every class.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================
// 4. ABOUT US PAGE
// ==========================================
function renderAboutPage() {
  return `
    <section id="about-section" class="border-b border-stone-200 bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">About Us · Kasenge, Kampala</p>
        <h1 class="text-3xl sm:text-5xl font-bold text-[#0F213E]">Meet the People Behind Phresh Tech Media</h1>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl">
          Founded in Kampala to give Ugandan schools, businesses, and churches reliable record tools and neat printing without unnecessary complexity.
        </p>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto space-y-10">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div class="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
              <img src="/directors/ibrahim.png" alt="Mulindwa Ibrahim" class="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
            </div>
            <div class="space-y-2 text-center sm:text-left">
              <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Software & School Systems Lead</p>
              <h2 class="text-xl font-bold text-[#0F213E]">Mulindwa Ibrahim (Ibra)</h2>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Works closely with headteachers, bursars, landlords, and shop owners to set up Phresh Rank Core, EduLedger, and custom websites.
              </p>
              <div class="pt-2 text-xs font-semibold text-slate-800 space-y-1 tabular-nums">
                <a href="tel:+256702083515" class="block hover:text-[#1E7E34]">+256 702 083515</a>
                <a href="tel:+256747311209" class="block hover:text-[#1E7E34]">+256 747 311209</a>
                <a href="mailto:phreshtechmediaservices@gmail.com" class="block text-slate-500 font-normal hover:underline">phreshtechmediaservices@gmail.com</a>
              </div>
            </div>
          </div>

          <div class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div class="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shrink-0 border border-stone-200 bg-stone-100">
              <img src="/directors/steve.png" alt="Steven Bagalana" class="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
            </div>
            <div class="space-y-2 text-center sm:text-left">
              <p class="text-xs font-semibold uppercase tracking-wider text-[#9B1C1C]">Operations & Printing Lead</p>
              <h2 class="text-xl font-bold text-[#0F213E]">Steven Bagalana (Steve)</h2>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Heads our printing workshop, banner press, graphic design desk, receipt book production, and day-to-day client care in Kasenge.
              </p>
              <div class="pt-2 text-xs font-semibold text-slate-800 space-y-1 tabular-nums">
                <a href="tel:+256777139918" class="block hover:text-[#9B1C1C]">+256 777 139918</a>
                <a href="tel:+256757848094" class="block hover:text-[#9B1C1C]">+256 757 848094</a>
                <a href="mailto:phreshtechmediaservices@gmail.com" class="block text-slate-500 font-normal hover:underline">phreshtechmediaservices@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8">
          <div class="grid sm:grid-cols-3 gap-6 text-sm">
            <div>
              <h3 class="font-bold text-[#0F213E] mb-1">Visit Our Office</h3>
              <p class="text-xs text-slate-600">Kasenge - Nakawuka Road, Wakiso / Kampala, Uganda</p>
            </div>
            <div>
              <h3 class="font-bold text-[#0F213E] mb-1">Opening Hours</h3>
              <p class="text-xs text-slate-600">Monday to Saturday, 8:00 AM – 6:00 PM</p>
            </div>
            <div>
              <h3 class="font-bold text-[#0F213E] mb-1">Office Phone & WhatsApp</h3>
              <p class="text-xs text-slate-600 tabular-nums">
                Office: <a href="tel:+256741145595" class="font-semibold text-slate-800 hover:underline">+256 741 145595</a><br />
                WhatsApp: <a href="https://wa.me/256757848094" target="_blank" class="font-semibold text-[#1E7E34] hover:underline">+256 757 848094</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==========================================
// 5. CONTACT PAGE
// ==========================================
function renderContactFormComponent() {
  const { name, email, subject, message, phone, isSubmitting, submittedSuccess, submittedData, errors } = contactFormState;

  if (submittedSuccess && submittedData) {
    return `
      <div class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5 animate-fade-in">
        <div class="space-y-1 border-b border-stone-200 pb-4">
          <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Message Sent · Ref ${escapeHtml(submittedData.refId)}</p>
          <h3 class="text-2xl font-bold text-[#0F213E]">Thank You, ${escapeHtml(submittedData.name)}</h3>
          <p class="text-sm text-slate-600">We have received your message and shared it with Mulindwa Ibrahim and Steven Bagalana.</p>
        </div>

        <dl class="grid sm:grid-cols-2 gap-4 text-sm border-b border-stone-200 pb-4">
          <div>
            <dt class="text-xs text-slate-500">Email</dt>
            <dd class="font-medium text-slate-900">${escapeHtml(submittedData.email)}</dd>
          </div>
          <div>
            <dt class="text-xs text-slate-500">Subject</dt>
            <dd class="font-medium text-slate-900">${escapeHtml(submittedData.subject)}</dd>
          </div>
        </dl>

        <div class="text-sm text-slate-700 bg-[#FAF9F6] border border-stone-200 rounded-xl p-4">
          "${escapeHtml(submittedData.message)}"
        </div>

        <div class="flex items-center justify-between pt-2">
          <span class="text-xs text-slate-500">${escapeHtml(submittedData.date)}</span>
          <button onclick="resetContactForm()" class="bg-[#0F213E] hover:bg-slate-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition">
            Send Another Message
          </button>
        </div>
      </div>
    `;
  }

  return `
    <div class="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      <div class="border-b border-stone-200 pb-4">
        <h3 class="text-2xl font-bold text-[#0F213E]">Send Us a Message</h3>
        <p class="text-xs sm:text-sm text-slate-600 mt-1">
          Tell us what you need and our team will call or email you back promptly.
        </p>
      </div>

      <form onsubmit="validateAndSubmitContactForm(event)" class="space-y-4 text-sm" novalidate>
        <input type="text" name="website_url" value="${escapeHtml(contactFormState.honeypot)}" oninput="handleContactFieldChange('honeypot', this.value)" class="hidden" tabindex="-1" autocomplete="off" />

        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1.5">
              Your Full Name <span class="text-red-600">*</span>
              <span id="contact-error-name" class="text-red-600 font-normal ml-2 ${errors.name ? '' : 'hidden'}">${escapeHtml(errors.name || '')}</span>
            </label>
            <input
              type="text"
              value="${escapeHtml(name)}"
              oninput="handleContactFieldChange('name', this.value)"
              class="w-full bg-[#FAF9F6] border ${errors.name ? 'border-red-500' : 'border-stone-300'} rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
              placeholder="e.g. Denis Mukasa"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1.5">
              Email Address <span class="text-red-600">*</span>
              <span id="contact-error-email" class="text-red-600 font-normal ml-2 ${errors.email ? '' : 'hidden'}">${escapeHtml(errors.email || '')}</span>
            </label>
            <input
              type="email"
              value="${escapeHtml(email)}"
              oninput="handleContactFieldChange('email', this.value)"
              class="w-full bg-[#FAF9F6] border ${errors.email ? 'border-red-500' : 'border-stone-300'} rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1.5">
              What Is This About? <span class="text-red-600">*</span>
              <span id="contact-error-subject" class="text-red-600 font-normal ml-2 ${errors.subject ? '' : 'hidden'}">${escapeHtml(errors.subject || '')}</span>
            </label>
            <input
              type="text"
              value="${escapeHtml(subject)}"
              oninput="handleContactFieldChange('subject', this.value)"
              class="w-full bg-[#FAF9F6] border ${errors.subject ? 'border-red-500' : 'border-stone-300'} rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
              placeholder="e.g. Report cards, Receipt books, Banner, Website"
            />
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1.5">Phone / WhatsApp (Optional)</label>
            <input
              type="text"
              value="${escapeHtml(phone)}"
              oninput="handleContactFieldChange('phone', this.value)"
              class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
              placeholder="+256 700 000 000"
            />
          </div>
        </div>

        <div>
          <label class="block text-xs font-semibold text-slate-800 mb-1.5">
            How Can We Help? <span class="text-red-600">*</span>
            <span id="contact-error-message" class="text-red-600 font-normal ml-2 ${errors.message ? '' : 'hidden'}">${escapeHtml(errors.message || '')}</span>
          </label>
          <textarea
            rows="4"
            oninput="handleContactFieldChange('message', this.value)"
            class="w-full bg-[#FAF9F6] border ${errors.message ? 'border-red-500' : 'border-stone-300'} rounded-xl px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#1E7E34] focus:bg-white transition"
            placeholder="Tell us about your school, shop, print run, or website idea..."
          >${escapeHtml(message)}</textarea>
        </div>

        <button
          type="submit"
          ${isSubmitting ? 'disabled' : ''}
          class="w-full bg-[#9B1C1C] hover:bg-red-800 text-white font-semibold py-3.5 rounded-xl transition disabled:opacity-50 text-sm"
        >
          ${isSubmitting ? 'Sending Message...' : 'Send Message'}
        </button>
      </form>
    </div>
  `;
}

function renderContactPage() {
  return `
    <section id="contact-section" class="border-b border-stone-200 bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wider text-[#1E7E34]">Get In Touch</p>
        <h1 class="text-3xl sm:text-5xl font-bold text-[#0F213E]">Talk With Our Kasenge Team</h1>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl">
          Call, send a WhatsApp message, or drop us a note below. You can speak directly with Mulindwa Ibrahim, Steven Bagalana, or our office desk.
        </p>
      </div>
    </section>

    <section class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8">
        <div class="lg:col-span-5 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 text-sm">
          <div>
            <h2 class="text-lg font-bold text-[#0F213E]">Direct Phones & WhatsApp</h2>
            <p class="text-xs text-slate-600 mt-1">Monday to Saturday, 8:00 AM – 6:00 PM</p>
          </div>

          <a href="https://wa.me/256757848094?text=Hello%20Phresh%20Tech%20Media" target="_blank" class="flex items-center justify-center gap-2 w-full bg-[#1E7E34] hover:bg-emerald-800 text-white font-semibold px-4 py-3 rounded-xl text-sm transition">
            ${WHATSAPP_ICON_SVG}
            <span>WhatsApp +256 757 848 094</span>
          </a>

          <dl class="divide-y divide-stone-200 text-xs sm:text-sm">
            <div class="py-3">
              <dt class="font-bold text-[#0F213E]">Kasenge Office Desk</dt>
              <dd class="text-slate-600 tabular-nums mt-0.5"><a href="tel:+256741145595" class="hover:underline">+256 741 145595</a></dd>
            </div>
            <div class="py-3">
              <dt class="font-bold text-[#0F213E]">Mulindwa Ibrahim (Ibra)</dt>
              <dd class="text-slate-500 text-xs">School & Business Software</dd>
              <dd class="text-slate-700 tabular-nums mt-1">
                <a href="tel:+256702083515" class="hover:underline">+256 702 083515</a> · <a href="tel:+256747311209" class="hover:underline">+256 747 311209</a>
              </dd>
            </div>
            <div class="py-3">
              <dt class="font-bold text-[#0F213E]">Steven Bagalana (Steve)</dt>
              <dd class="text-slate-500 text-xs">Printing Press & Design Studio</dd>
              <dd class="text-slate-700 tabular-nums mt-1">
                <a href="tel:+256777139918" class="hover:underline">+256 777 139918</a> · <a href="tel:+256757848094" class="hover:underline">+256 757 848094</a>
              </dd>
            </div>
            <div class="pt-3">
              <dt class="font-bold text-[#0F213E]">Email & Location</dt>
              <dd class="text-slate-600 mt-0.5">
                <a href="mailto:phreshtechmediaservices@gmail.com" class="text-[#1E7E34] underline">phreshtechmediaservices@gmail.com</a><br />
                Kasenge - Nakawuka Road, Kampala, Uganda
              </dd>
            </div>
          </dl>
        </div>

        <div class="lg:col-span-7">
          ${renderContactFormComponent()}
        </div>
      </div>
    </section>
  `;
}

// ==========================================
// LIGHTBOX, WHATSAPP HELPER, TOAST & HEADER
// ==========================================
function renderImagePreviewModal() {
  if (!activeImagePreviewModal) return '';
  return `
    <div class="fixed inset-0 z-[110] bg-slate-950/85 flex items-center justify-center p-4 sm:p-8 animate-fade-in" onclick="closeImageModal()">
      <div class="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-xl" onclick="event.stopPropagation()">
        <div class="flex items-center justify-between px-5 py-4 border-b border-stone-200">
          <div>
            <p class="text-xs font-medium text-[#1E7E34]">${escapeHtml(activeImagePreviewModal.label || 'Work Sample')}</p>
            <h3 class="text-lg font-bold text-[#0F213E]">${escapeHtml(activeImagePreviewModal.title)}</h3>
          </div>
          <button onclick="closeImageModal()" class="w-9 h-9 rounded-lg bg-stone-100 hover:bg-stone-200 text-slate-700 flex items-center justify-center font-bold">✕</button>
        </div>
        <div class="bg-stone-900 flex items-center justify-center max-h-[70vh]">
          <img src="${activeImagePreviewModal.img}" alt="${escapeHtml(activeImagePreviewModal.title)}" class="max-h-[68vh] w-auto max-w-full object-contain" referrerPolicy="no-referrer" />
        </div>
        ${activeImagePreviewModal.subtitle ? `
          <div class="px-5 py-4 border-t border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600">
            <p>${escapeHtml(activeImagePreviewModal.subtitle)}</p>
            <button onclick="closeImageModal(); navigateTo('contact');" class="bg-[#1E7E34] hover:bg-emerald-800 text-white font-semibold px-4 py-2 rounded-lg shrink-0 transition">
              Ask About This →
            </button>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

function renderFloatingWhatsAppWidget() {
  return `
    <div class="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[100] flex flex-col items-end gap-2.5 pointer-events-none">
      ${isWhatsAppWidgetOpen ? `
        <div class="pointer-events-auto w-80 bg-white border border-stone-200 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <div class="bg-[#0F213E] px-4 py-3.5 flex items-center justify-between text-white">
            <div>
              <h4 class="font-bold text-sm">Chat With Phresh Tech</h4>
              <p class="text-xs text-slate-300">+256 757 848 094 · Kasenge Studio</p>
            </div>
            <button onclick="toggleWhatsAppWidget()" class="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs font-bold">✕</button>
          </div>
          <div class="p-4 space-y-3 text-xs">
            <p class="text-slate-600 leading-relaxed">Hello. Choose a topic below or write your question to open WhatsApp directly.</p>
            <div class="space-y-1.5">
              <button onclick="sendWhatsAppInquiry('Hello Phresh Tech Media, I would like to ask about Phresh Rank Core report cards.')" class="w-full text-left bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-slate-800 px-3 py-2 rounded-lg font-medium transition">
                School Report Cards (Phresh Rank Core) →
              </button>
              <button onclick="sendWhatsAppInquiry('Hello Phresh Tech Media, I would like to ask about receipt books or banner printing.')" class="w-full text-left bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-slate-800 px-3 py-2 rounded-lg font-medium transition">
                Receipt Books, Banners & Printing →
              </button>
              <button onclick="sendWhatsAppInquiry('Hello Phresh Tech Media, I need a website or logo design.')" class="w-full text-left bg-[#FAF9F6] hover:bg-stone-100 border border-stone-200 text-slate-800 px-3 py-2 rounded-lg font-medium transition">
                Logos, Flyers & Websites →
              </button>
            </div>
            <form onsubmit="sendCustomWhatsAppMsg(event)" class="pt-2 border-t border-stone-200 flex items-center gap-2">
              <input id="whatsapp-floating-input" type="text" placeholder="Write a message..." class="flex-1 bg-[#FAF9F6] border border-stone-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-[#1E7E34]" />
              <button type="submit" class="bg-[#1E7E34] hover:bg-emerald-800 text-white font-semibold px-3 py-2 rounded-lg text-xs">Send</button>
            </form>
          </div>
        </div>
      ` : ''}

      <button onclick="toggleWhatsAppWidget()" title="Chat on WhatsApp" class="pointer-events-auto bg-[#1E7E34] hover:bg-emerald-800 text-white px-4 py-2.5 rounded-full shadow-md flex items-center gap-2 text-xs font-semibold transition">
        ${WHATSAPP_ICON_SVG}
        <span class="whitespace-nowrap">${isWhatsAppWidgetOpen ? 'Close' : 'WhatsApp Us'}</span>
      </button>
    </div>
  `;
}

function renderToastNotification() {
  if (!toastMessage) return '';
  return `
    <div class="fixed top-20 right-4 sm:right-6 z-[100] bg-[#0F213E] text-white px-4 py-3 rounded-xl shadow-lg text-xs font-medium animate-fade-in">
      ${escapeHtml(toastMessage)}
    </div>
  `;
}

function renderAuthModal() {
  if (!isAuthModalOpen) return '';
  return `
    <div class="fixed inset-0 z-[95] bg-slate-900/75 flex items-center justify-center p-4 animate-fade-in" onclick="closeAuthModal()">
      <div class="bg-white rounded-2xl shadow-xl border border-stone-200 w-full max-w-md overflow-hidden" onclick="event.stopPropagation()">
        <div class="bg-[#0F213E] px-6 py-5 text-white flex items-center justify-between">
          <div>
            <h3 class="font-bold text-lg">Client Sign In</h3>
            <p class="text-xs text-slate-300">Keep your details handy for future inquiries</p>
          </div>
          <button onclick="closeAuthModal()" class="text-slate-300 hover:text-white font-bold">✕</button>
        </div>
        <form onsubmit="handleClientAuthSubmit(event)" class="p-6 space-y-4 text-sm">
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Full Name *</label>
            <input type="text" id="auth-client-name" required value="${escapeHtml(currentUser?.name || '')}" class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Email Address *</label>
            <input type="email" id="auth-client-email" required value="${escapeHtml(currentUser?.email || '')}" class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">Phone (Optional)</label>
            <input type="tel" id="auth-client-phone" value="${escapeHtml(currentUser?.phone || '')}" class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3 py-2.5 text-sm" />
          </div>
          <div>
            <label class="block text-xs font-semibold text-slate-800 mb-1">School / Business Name</label>
            <input type="text" id="auth-client-org" value="${escapeHtml(currentUser?.organization || '')}" class="w-full bg-[#FAF9F6] border border-stone-300 rounded-xl px-3 py-2.5 text-sm" />
          </div>
          <button type="submit" class="w-full bg-[#1E7E34] hover:bg-emerald-800 text-white font-semibold py-3 rounded-xl text-sm transition">
            Continue
          </button>
        </form>
      </div>
    </div>
  `;
}

function renderActivePage() {
  switch (currentPage) {
    case 'home': return renderHomePage();
    case 'services': return renderServicesPage();
    case 'portfolio': return renderPortfolioPage();
    case 'about': return renderAboutPage();
    case 'contact': return renderContactPage();
    case 'payment':
    case 'pay': return renderDedicatedPaymentPage();
    default: return renderHomePage();
  }
}

// Clean 3-Zone Top Bar & Grounded Footer
function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  const isPayPage = currentPage === 'pay' || currentPage === 'payment';

  root.innerHTML = `
    <div class="min-h-screen flex flex-col bg-[#FAF9F6]">
      <!-- 3-Zone Top Navigation -->
      <header id="main-header" class="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <!-- Zone 1: Brand Wordmark -->
          <a href="#home" onclick="navigateTo('home')" class="flex items-center gap-2.5 shrink-0 focus:outline-none">
            <img src="/logo.svg" alt="Phresh Tech Media" class="h-9 w-auto object-contain" referrerPolicy="no-referrer" />
            <span class="font-bold text-base tracking-tight text-[#0F213E] whitespace-nowrap">Phresh Tech Media</span>
          </a>

          <!-- Zone 2: Clean Inline Navigation (5 concise items) -->
          <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button onclick="navigateTo('home')" class="whitespace-nowrap transition py-1 border-b-2 ${currentPage === 'home' ? 'border-[#1E7E34] text-[#0F213E] font-semibold' : 'border-transparent hover:text-[#0F213E]'}">Home</button>
            <button onclick="navigateTo('services')" class="whitespace-nowrap transition py-1 border-b-2 ${currentPage === 'services' ? 'border-[#1E7E34] text-[#0F213E] font-semibold' : 'border-transparent hover:text-[#0F213E]'}">Services</button>
            <button onclick="navigateTo('portfolio')" class="whitespace-nowrap transition py-1 border-b-2 ${currentPage === 'portfolio' ? 'border-[#1E7E34] text-[#0F213E] font-semibold' : 'border-transparent hover:text-[#0F213E]'}">Our Work</button>
            <button onclick="navigateTo('about')" class="whitespace-nowrap transition py-1 border-b-2 ${currentPage === 'about' ? 'border-[#1E7E34] text-[#0F213E] font-semibold' : 'border-transparent hover:text-[#0F213E]'}">About</button>
            <button onclick="navigateTo('pay')" class="whitespace-nowrap transition py-1 border-b-2 ${isPayPage ? 'border-[#1E7E34] text-[#1E7E34] font-semibold' : 'border-transparent hover:text-[#0F213E]'}">Pay Online</button>
          </nav>

          <!-- Zone 3: Single Primary Action -->
          <div class="hidden md:flex items-center shrink-0">
            <button onclick="navigateTo('contact')" class="bg-[#0F213E] hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl whitespace-nowrap transition">
              Get in Touch
            </button>
          </div>

          <!-- Mobile Hamburger -->
          <button onclick="toggleMobileMenu()" aria-label="Open menu" class="md:hidden p-2 text-slate-700 rounded-lg hover:bg-stone-100 transition">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"></path>
            </svg>
          </button>
        </div>

        ${isMobileMenuOpen ? `
          <div class="md:hidden border-t border-stone-200 bg-white px-4 py-3 space-y-1 text-sm font-medium">
            <button onclick="navigateTo('home')" class="block w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-slate-800">Home</button>
            <button onclick="navigateTo('services')" class="block w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-slate-800">Services & Prices</button>
            <button onclick="navigateTo('portfolio')" class="block w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-slate-800">Our Work</button>
            <button onclick="navigateTo('about')" class="block w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-slate-800">About Us</button>
            <button onclick="navigateTo('pay')" class="block w-full text-left px-3 py-2.5 rounded-lg hover:bg-stone-50 text-[#1E7E34] font-semibold">Pay Online</button>
            <button onclick="navigateTo('contact')" class="block w-full text-center bg-[#0F213E] text-white font-semibold py-2.5 rounded-xl mt-2">Get in Touch</button>
          </div>
        ` : ''}
      </header>

      <!-- Main Body -->
      <main class="flex-1">
        ${renderActivePage()}
      </main>

      <!-- Footer -->
      <footer class="bg-[#0F213E] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-stone-800">
        <div class="max-w-6xl mx-auto space-y-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-xs">
            <div class="space-y-3">
              <div class="flex items-center gap-2.5">
                <img src="/logo.svg" alt="Phresh Tech Media Services" class="h-9 w-auto bg-white p-1 rounded-lg" referrerPolicy="no-referrer" />
                <span class="font-bold text-base">Phresh Tech Media</span>
              </div>
              <p class="text-slate-300 leading-relaxed">
                School report card software, fees & shop records, commercial printing, graphic design, and websites in Kampala.
              </p>
              <p class="text-emerald-300 font-medium">Kasenge - Nakawuka Road, Kampala</p>
            </div>

            <div class="space-y-2.5">
              <h4 class="font-bold text-white uppercase tracking-wider text-[11px]">Services</h4>
              <ul class="space-y-2 text-slate-300">
                <li><button onclick="navigateTo('services', 'database-systems')" class="hover:text-white transition">School & Business Tools</button></li>
                <li><button onclick="navigateTo('services', 'print-copy')" class="hover:text-white transition">Printing & Receipt Books</button></li>
                <li><button onclick="navigateTo('services', 'graphic-design')" class="hover:text-white transition">Logos & Graphic Design</button></li>
                <li><button onclick="navigateTo('services', 'web-development')" class="hover:text-white transition">Websites & Domains</button></li>
                <li><button onclick="navigateTo('services', 'tariff-catalog')" class="hover:text-white transition">Complete Price List</button></li>
              </ul>
            </div>

            <div class="space-y-2.5">
              <h4 class="font-bold text-white uppercase tracking-wider text-[11px]">People to Call</h4>
              <div class="space-y-2 text-slate-300 tabular-nums">
                <p><strong class="text-white block">Mulindwa Ibrahim (Ibra)</strong><a href="tel:+256702083515" class="hover:underline">+256 702 083515</a> / <a href="tel:+256747311209" class="hover:underline">+256 747 311209</a></p>
                <p><strong class="text-white block">Steven Bagalana (Steve)</strong><a href="tel:+256777139918" class="hover:underline">+256 777 139918</a> / <a href="tel:+256757848094" class="hover:underline">+256 757 848094</a></p>
                <p><strong class="text-white block">Office Desk</strong><a href="tel:+256741145595" class="hover:underline">+256 741 145595</a></p>
              </div>
            </div>

            <div class="space-y-2.5">
              <h4 class="font-bold text-white uppercase tracking-wider text-[11px]">Quick Links</h4>
              <div class="space-y-2 text-slate-300">
                <p><a href="https://wa.me/256757848094" target="_blank" class="text-emerald-300 hover:underline font-medium">Message on WhatsApp</a></p>
                <p><a href="mailto:phreshtechmediaservices@gmail.com" class="hover:underline">phreshtechmediaservices@gmail.com</a></p>
                <p><button onclick="navigateTo('pay')" class="text-emerald-300 hover:underline font-semibold">Pay Online (Mobile Money)</button></p>
              </div>
            </div>
          </div>

          <div class="pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© ${new Date().getFullYear()} Phresh Tech Media Services. All rights reserved.</p>
            <div class="flex items-center gap-5">
              <button onclick="navigateTo('services')" class="hover:text-white">Services</button>
              <button onclick="navigateTo('portfolio')" class="hover:text-white">Our Work</button>
              <button onclick="navigateTo('contact')" class="hover:text-white">Contact</button>
              <button onclick="navigateTo('pay')" class="text-emerald-300 hover:text-white">Pay Online</button>
            </div>
          </div>
        </div>
      </footer>

      ${renderFloatingWhatsAppWidget()}
      ${renderToastNotification()}
      ${renderAuthModal()}
      ${renderImagePreviewModal()}
    </div>
  `;

  if (currentPage === 'home') {
    renderHeroHighlight();
  }
}
