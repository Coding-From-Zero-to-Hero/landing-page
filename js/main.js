/* ============================================
   SiteCraft — Main JavaScript
   i18n, mobile menu, FAQ, scroll effects
   ============================================ */

// ─── Translations ──────────────────────────────
const translations = {
  en: {
    // Meta
    meta_title: "SiteCraft — Professional Websites for Canadian Businesses",

    // Nav
    nav_why: "Why a Website",
    nav_benefits: "Benefits",
    nav_packages: "Packages",
    nav_faq: "FAQ",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Web solutions for Canadian businesses",
    hero_title: "Your Business Deserves<br>to Be Found Online",
    hero_subtitle: "We build professional, modern websites for startups and small businesses across Canada. Get your business online — fast, affordable, and hassle-free.",
    hero_cta: "Get Started Today",
    hero_cta_secondary: "View Packages",

    // Stats (compact banner)
    stat1_number: "97%",
    stat1_text: "of consumers search online for local businesses",
    stat2_number: "75%",
    stat2_text: "judge credibility by website design",
    stat3_number: "81%",
    stat3_text: "research online before making a purchase",
    stat4_number: "56%",
    stat4_text: "don't trust a business with no website",

    // Benefits
    benefits_title: "How a Website Helps Your Business Grow",
    benefits_subtitle: "A professional website is more than a digital business card — it's your most powerful growth tool.",
    benefit1_title: "Open 24/7",
    benefit1_text: "Your website works around the clock, letting customers learn about your business anytime, anywhere — even while you sleep.",
    benefit2_title: "Build Trust & Credibility",
    benefit2_text: "A polished website signals professionalism and legitimacy. First impressions happen online — make yours count.",
    benefit3_title: "Reach More Customers",
    benefit3_text: "Expand beyond word-of-mouth. A website lets you attract new customers from across your city, province, or all of Canada.",
    benefit4_title: "Be Found on Google",
    benefit4_text: "When people search for services you offer, your website helps you appear in results. No site means you're invisible online.",
    benefit5_title: "Competitive Edge",
    benefit5_text: "Many small businesses still don't have a website. Getting online now puts you ahead of competitors who haven't made the leap.",
    benefit6_title: "Cost-Effective Marketing",
    benefit6_text: "A website is your most affordable long-term marketing tool. It works every day to attract, inform, and convert visitors into customers.",

    // How It Works
    process_title: "How It Works",
    process_subtitle: "From idea to launch in four simple steps. We handle the hard parts so you don't have to.",
    step1_title: "Tell Us Your Vision",
    step1_text: "Share your business goals, style preferences, and the content you'd like on your website.",
    step2_title: "We Design & Build",
    step2_text: "Our team crafts a professional, mobile-ready website tailored specifically to your brand.",
    step3_title: "Review & Refine",
    step3_text: "You review the draft and request any changes. We refine until you're completely satisfied.",
    step4_title: "Go Live",
    step4_text: "We launch your website, set up your domain, and make sure everything runs perfectly.",

    // About
    about_title: "Meet Anton",
    about_role: "Founder of SiteCraft",
    about_text: "I started SiteCraft with a simple mission: to help Canadian small businesses and startups get a professional online presence without the complexity or high costs. Every project receives personal attention because I believe your website should be as unique as your business.",

    // Packages
    packages_title: "Simple, Transparent Packages",
    packages_subtitle: "Choose the plan that fits your needs. No hidden fees, no surprises.",
    pkg1_desc: "Perfect for new businesses that need to establish their online presence.",
    pkg1_discount: "Launch Offer — Save 33%",
    pkg1_original: "$750",
    pkg1_f1: "Professional one-page website",
    pkg1_f2: "Mobile-responsive design",
    pkg1_f3: "Contact form integration",
    pkg1_f4: "Basic SEO setup",
    pkg1_cta: "Get Started",
    pkg2_badge: "Most Popular",
    pkg2_desc: "For businesses ready to grow with a full-featured online presence.",
    pkg2_discount: "Launch Offer — Save 27%",
    pkg2_original: "$1,500",
    pkg2_f1: "Multi-page website (up to 5 pages)",
    pkg2_f2: "Mobile-responsive design",
    pkg2_f3: "Advanced SEO optimization",
    pkg2_f4: "Google Analytics integration",
    pkg2_f5: "Social media integration",
    pkg2_f6: "Priority support",
    pkg2_cta: "Get Started",

    // Flexible pricing
    flexible_text: "Every budget is welcome. If the pricing doesn't quite fit, reach out — we're happy to discuss flexible terms and find a solution that works for your business.",
    flexible_cta: "Let's Talk",

    // FAQ
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Everything you need to know before getting started.",
    faq1_q: "Why does my small business need a website?",
    faq1_a: "A website is your digital storefront. It gives customers a place to find your business, learn about your services, and contact you. Without one, you're missing out on the vast majority of people who search online before making a purchasing decision. It builds credibility and ensures your business is accessible 24/7.",
    faq2_q: "How long does it take to build my website?",
    faq2_a: "Most projects are completed within 5 to 10 business days, depending on the package and your content readiness. We work efficiently to get you online fast without compromising on quality. You'll be involved at every step to ensure the result matches your vision.",
    faq3_q: "How much does it cost to maintain a website per year?",
    faq3_a: "The basic annual costs are very affordable: a domain name (.ca or .com) runs about $15\u201325/year, and hosting for a static website can be as low as $0\u201310/month thanks to modern platforms with generous free tiers. SSL certificates are included at no extra cost. So the bare minimum to keep your site live is roughly $20\u201350/year. If you'd like ongoing support \u2014 content updates, design tweaks, performance monitoring \u2014 maintenance plans start from $100/year depending on the level of service.",
    faq4_q: "Do I need to update the website myself?",
    faq4_a: "Not at all. We handle updates and maintenance so you can focus on running your business. If you ever need a change \u2014 new hours, updated photos, or additional content \u2014 just reach out and we'll take care of it promptly.",
    faq5_q: "How is this different from Wix or Squarespace?",
    faq5_a: "Website builders like Wix and Squarespace require you to design, write content, and maintain the site yourself. With SiteCraft, we do everything for you \u2014 custom design, professional copywriting, SEO setup, and ongoing support. You get a tailor-made site without the learning curve or monthly builder fees.",
    faq6_q: "Will my website work on phones and tablets?",
    faq6_a: "Absolutely. Every website we build is fully responsive, meaning it looks great and works perfectly on desktops, tablets, and smartphones. Over 60% of web traffic in Canada comes from mobile devices, so this is a top priority for us.",
    faq7_q: "I already have social media \u2014 isn't that enough?",
    faq7_a: "Social media is great for engagement, but it's not a replacement for a website. You don't own your social profiles \u2014 algorithm changes can reduce your visibility overnight. A website is your own space on the internet, fully under your control, and it ranks better on search engines than social media pages.",

    // Contact
    contact_title: "Let's Build Your Website",
    contact_subtitle: "Ready to get your business online? Send us a message and we'll get back to you within 24 hours.",
    form_name_label: "Full Name",
    form_name_placeholder: "John Smith",
    form_email_label: "Email Address",
    form_email_placeholder: "john@example.com",
    form_phone_label: "Phone",
    form_optional: "(optional)",
    form_phone_placeholder: "+1 (555) 000-0000",
    form_package_label: "Interested In",
    form_package_default: "I'm interested in...",
    form_package_start: "Start Online ($500)",
    form_package_grow: "Grow Online ($1,100)",
    form_package_unsure: "Not sure yet",
    form_message_label: "Message",
    form_message_placeholder: "Tell us about your business and what you're looking for...",
    form_submit: "Send Message",
    form_success: "Thank you! We'll get back to you within 24 hours.",
    contact_info_title: "Get in Touch",
    contact_social_title: "Follow Us",
    contact_response_note: "We respond to all inquiries within 24 hours during business days. For urgent requests, please call us directly.",

    // Cookie
    cookie_text: "We use cookies to improve your experience. By continuing to use this site, you agree to our use of cookies.",
    cookie_accept: "Accept",

    // Footer
    footer_tagline: "Professional websites for Canadian startups and small businesses. Your success online starts here.",
    footer_links_title: "Quick Links",
    footer_contact_title: "Contact",
    footer_copyright: "\u00a9 2026 SiteCraft. All rights reserved.",
    footer_made_in: "Made with care in Canada",
  },

  fr: {
    // Meta
    meta_title: "SiteCraft — Sites web professionnels pour les entreprises canadiennes",

    // Nav
    nav_why: "Pourquoi un site",
    nav_benefits: "Avantages",
    nav_packages: "Forfaits",
    nav_faq: "FAQ",
    nav_contact: "Contact",

    // Hero
    hero_badge: "Solutions web pour les entreprises canadiennes",
    hero_title: "Votre entreprise m\u00e9rite<br>d'\u00eatre trouv\u00e9e en ligne",
    hero_subtitle: "Nous cr\u00e9ons des sites web professionnels et modernes pour les startups et les petites entreprises partout au Canada. Mettez votre entreprise en ligne — rapidement, \u00e0 prix abordable et sans tracas.",
    hero_cta: "Commencez aujourd'hui",
    hero_cta_secondary: "Voir les forfaits",

    // Stats (compact banner)
    stat1_number: "97\u00a0%",
    stat1_text: "recherchent des entreprises locales en ligne",
    stat2_number: "75\u00a0%",
    stat2_text: "jugent la cr\u00e9dibilit\u00e9 par le site web",
    stat3_number: "81\u00a0%",
    stat3_text: "font des recherches en ligne avant d'acheter",
    stat4_number: "56\u00a0%",
    stat4_text: "ne font pas confiance sans site web",

    // Benefits
    benefits_title: "Comment un site web aide votre entreprise \u00e0 cro\u00eetre",
    benefits_subtitle: "Un site web professionnel est bien plus qu'une carte de visite num\u00e9rique — c'est votre outil de croissance le plus puissant.",
    benefit1_title: "Ouvert 24h/24, 7j/7",
    benefit1_text: "Votre site web fonctionne en permanence, permettant aux clients de d\u00e9couvrir votre entreprise \u00e0 tout moment et de n'importe o\u00f9 — m\u00eame pendant que vous dormez.",
    benefit2_title: "B\u00e2tir la confiance et la cr\u00e9dibilit\u00e9",
    benefit2_text: "Un site web soign\u00e9 refl\u00e8te votre professionnalisme et votre l\u00e9gitimit\u00e9. La premi\u00e8re impression se fait en ligne — faites qu'elle compte.",
    benefit3_title: "Rejoindre plus de clients",
    benefit3_text: "Allez au-del\u00e0 du bouche-\u00e0-oreille. Un site web vous permet d'attirer de nouveaux clients de votre ville, votre province ou de tout le Canada.",
    benefit4_title: "\u00catre trouv\u00e9 sur Google",
    benefit4_text: "Quand les gens recherchent les services que vous offrez, votre site web vous aide \u00e0 appara\u00eetre dans les r\u00e9sultats. Sans site, vous \u00eates invisible en ligne.",
    benefit5_title: "Avantage concurrentiel",
    benefit5_text: "Beaucoup de petites entreprises n'ont toujours pas de site web. \u00catre en ligne maintenant vous place devant vos concurrents qui n'ont pas encore fait le pas.",
    benefit6_title: "Marketing rentable",
    benefit6_text: "Un site web est votre outil de marketing \u00e0 long terme le plus abordable. Il travaille chaque jour pour attirer, informer et convertir les visiteurs en clients.",

    // How It Works
    process_title: "Comment \u00e7a fonctionne",
    process_subtitle: "De l'id\u00e9e au lancement en quatre \u00e9tapes simples. Nous g\u00e9rons les parties difficiles pour vous.",
    step1_title: "Partagez votre vision",
    step1_text: "D\u00e9crivez vos objectifs, vos pr\u00e9f\u00e9rences de style et le contenu souhait\u00e9 pour votre site web.",
    step2_title: "Nous concevons et construisons",
    step2_text: "Notre \u00e9quipe cr\u00e9e un site web professionnel et adapt\u00e9 aux mobiles, sp\u00e9cialement con\u00e7u pour votre marque.",
    step3_title: "R\u00e9vision et ajustements",
    step3_text: "Vous examinez le brouillon et demandez des modifications. Nous affinons jusqu'\u00e0 votre enti\u00e8re satisfaction.",
    step4_title: "Mise en ligne",
    step4_text: "Nous lan\u00e7ons votre site web, configurons votre domaine et nous assurons que tout fonctionne parfaitement.",

    // About
    about_title: "Rencontrez Anton",
    about_role: "Fondateur de SiteCraft",
    about_text: "J'ai cr\u00e9\u00e9 SiteCraft avec une mission simple\u00a0: aider les petites entreprises et startups canadiennes \u00e0 obtenir une pr\u00e9sence en ligne professionnelle sans complexit\u00e9 ni co\u00fbts \u00e9lev\u00e9s. Chaque projet re\u00e7oit une attention personnelle, car je crois que votre site web doit \u00eatre aussi unique que votre entreprise.",

    // Packages
    packages_title: "Des forfaits simples et transparents",
    packages_subtitle: "Choisissez le forfait qui correspond \u00e0 vos besoins. Pas de frais cach\u00e9s, pas de surprises.",
    pkg1_desc: "Id\u00e9al pour les nouvelles entreprises qui doivent \u00e9tablir leur pr\u00e9sence en ligne.",
    pkg1_discount: "Offre de lancement — \u00c9conomisez 33\u00a0%",
    pkg1_original: "750\u00a0$",
    pkg1_f1: "Site web professionnel d'une page",
    pkg1_f2: "Design adapt\u00e9 aux mobiles",
    pkg1_f3: "Int\u00e9gration d'un formulaire de contact",
    pkg1_f4: "Configuration SEO de base",
    pkg1_cta: "Commencer",
    pkg2_badge: "Le plus populaire",
    pkg2_desc: "Pour les entreprises pr\u00eates \u00e0 se d\u00e9velopper avec une pr\u00e9sence en ligne compl\u00e8te.",
    pkg2_discount: "Offre de lancement — \u00c9conomisez 27\u00a0%",
    pkg2_original: "1\u00a0500\u00a0$",
    pkg2_f1: "Site web multi-pages (jusqu'\u00e0 5 pages)",
    pkg2_f2: "Design adapt\u00e9 aux mobiles",
    pkg2_f3: "Optimisation SEO avanc\u00e9e",
    pkg2_f4: "Int\u00e9gration de Google Analytics",
    pkg2_f5: "Int\u00e9gration des r\u00e9seaux sociaux",
    pkg2_f6: "Support prioritaire",
    pkg2_cta: "Commencer",

    // Flexible pricing
    flexible_text: "Chaque budget est le bienvenu. Si nos tarifs ne correspondent pas tout à fait, contactez-nous — nous serons ravis de discuter de conditions flexibles adaptées à votre entreprise.",
    flexible_cta: "Discutons-en",

    // FAQ
    faq_title: "Foire aux questions",
    faq_subtitle: "Tout ce que vous devez savoir avant de commencer.",
    faq1_q: "Pourquoi ma petite entreprise a-t-elle besoin d'un site web\u00a0?",
    faq1_a: "Un site web est votre vitrine num\u00e9rique. Il offre aux clients un endroit pour trouver votre entreprise, en apprendre davantage sur vos services et vous contacter. Sans site, vous manquez la grande majorit\u00e9 des personnes qui recherchent en ligne avant de prendre une d\u00e9cision d'achat. Il renforce votre cr\u00e9dibilit\u00e9 et assure l'accessibilit\u00e9 de votre entreprise 24h/24.",
    faq2_q: "Combien de temps faut-il pour cr\u00e9er mon site web\u00a0?",
    faq2_a: "La plupart des projets sont termin\u00e9s en 5 \u00e0 10 jours ouvrables, selon le forfait choisi et la disponibilit\u00e9 de votre contenu. Nous travaillons efficacement pour vous mettre en ligne rapidement sans compromettre la qualit\u00e9. Vous serez impliqu\u00e9 \u00e0 chaque \u00e9tape pour vous assurer que le r\u00e9sultat correspond \u00e0 votre vision.",
    faq3_q: "Combien co\u00fbte l'entretien d'un site web par ann\u00e9e\u00a0?",
    faq3_a: "Les co\u00fbts annuels de base sont tr\u00e8s abordables\u00a0: un nom de domaine (.ca ou .com) co\u00fbte environ 15\u00a0\u00e0\u00a025\u00a0$/an, et l'h\u00e9bergement d'un site statique peut \u00eatre aussi bas que 0\u00a0\u00e0\u00a010\u00a0$/mois gr\u00e2ce aux plateformes modernes avec des offres gratuites g\u00e9n\u00e9reuses. Les certificats SSL sont inclus sans frais suppl\u00e9mentaires. Le minimum pour garder votre site en ligne est donc d'environ 20\u00a0\u00e0\u00a050\u00a0$/an. Si vous souhaitez un support continu \u2014 mises \u00e0 jour de contenu, ajustements de design, suivi des performances \u2014 les forfaits de maintenance commencent \u00e0 partir de 100\u00a0$/an selon le niveau de service.",
    faq4_q: "Dois-je mettre \u00e0 jour le site web moi-m\u00eame\u00a0?",
    faq4_a: "Pas du tout. Nous g\u00e9rons les mises \u00e0 jour et la maintenance pour que vous puissiez vous concentrer sur votre entreprise. Si vous avez besoin d'un changement \u2014 nouveaux horaires, photos mises \u00e0 jour ou contenu suppl\u00e9mentaire \u2014 contactez-nous et nous nous en occuperons rapidement.",
    faq5_q: "En quoi est-ce diff\u00e9rent de Wix ou Squarespace\u00a0?",
    faq5_a: "Les cr\u00e9ateurs de sites comme Wix et Squarespace exigent que vous conceviez, r\u00e9digiez le contenu et mainteniez le site vous-m\u00eame. Avec SiteCraft, nous faisons tout pour vous \u2014 design sur mesure, r\u00e9daction professionnelle, configuration SEO et support continu. Vous obtenez un site personnalis\u00e9 sans courbe d'apprentissage ni frais mensuels de constructeur.",
    faq6_q: "Mon site web fonctionnera-t-il sur les t\u00e9l\u00e9phones et tablettes\u00a0?",
    faq6_a: "Absolument. Chaque site web que nous cr\u00e9ons est enti\u00e8rement responsive, ce qui signifie qu'il s'affiche parfaitement sur les ordinateurs, tablettes et t\u00e9l\u00e9phones intelligents. Plus de 60\u00a0% du trafic web au Canada provient des appareils mobiles, c'est donc une priorit\u00e9 absolue pour nous.",
    faq7_q: "J'ai d\u00e9j\u00e0 les r\u00e9seaux sociaux \u2014 est-ce suffisant\u00a0?",
    faq7_a: "Les r\u00e9seaux sociaux sont excellents pour l'engagement, mais ils ne remplacent pas un site web. Vous ne poss\u00e9dez pas vos profils sociaux \u2014 des changements d'algorithme peuvent r\u00e9duire votre visibilit\u00e9 du jour au lendemain. Un site web est votre propre espace sur Internet, enti\u00e8rement sous votre contr\u00f4le, et il se classe mieux dans les moteurs de recherche que les pages de r\u00e9seaux sociaux.",

    // Contact
    contact_title: "Construisons votre site web",
    contact_subtitle: "Pr\u00eat \u00e0 mettre votre entreprise en ligne\u00a0? Envoyez-nous un message et nous vous r\u00e9pondrons dans les 24 heures.",
    form_name_label: "Nom complet",
    form_name_placeholder: "Jean Tremblay",
    form_email_label: "Adresse courriel",
    form_email_placeholder: "jean@exemple.com",
    form_phone_label: "T\u00e9l\u00e9phone",
    form_optional: "(facultatif)",
    form_phone_placeholder: "+1 (555) 000-0000",
    form_package_label: "Int\u00e9ress\u00e9 par",
    form_package_default: "Je suis int\u00e9ress\u00e9 par...",
    form_package_start: "Start Online (500\u00a0$)",
    form_package_grow: "Grow Online (1\u00a0100\u00a0$)",
    form_package_unsure: "Pas encore s\u00fbr",
    form_message_label: "Message",
    form_message_placeholder: "Parlez-nous de votre entreprise et de ce que vous recherchez...",
    form_submit: "Envoyer le message",
    form_success: "Merci\u00a0! Nous vous r\u00e9pondrons dans les 24 heures.",
    contact_info_title: "Nous joindre",
    contact_social_title: "Suivez-nous",
    contact_response_note: "Nous r\u00e9pondons \u00e0 toutes les demandes dans les 24 heures les jours ouvrables. Pour les demandes urgentes, veuillez nous appeler directement.",

    // Cookie
    cookie_text: "Nous utilisons des cookies pour am\u00e9liorer votre exp\u00e9rience. En continuant \u00e0 utiliser ce site, vous acceptez notre utilisation des cookies.",
    cookie_accept: "Accepter",

    // Footer
    footer_tagline: "Sites web professionnels pour les startups et les petites entreprises canadiennes. Votre succ\u00e8s en ligne commence ici.",
    footer_links_title: "Liens rapides",
    footer_contact_title: "Contact",
    footer_copyright: "\u00a9 2026 SiteCraft. Tous droits r\u00e9serv\u00e9s.",
    footer_made_in: "Fabriqu\u00e9 avec soin au Canada",
  }
};

// ─── State ─────────────────────────────────────
let currentLang = localStorage.getItem('sitecraft-lang') || 'en';

// ─── i18n ──────────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('sitecraft-lang', lang);
  document.documentElement.lang = lang;

  const t = translations[lang];
  if (!t) return;

  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Select options
  document.querySelectorAll('[data-i18n-option]').forEach(el => {
    const key = el.getAttribute('data-i18n-option');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Page title
  if (t.meta_title) {
    document.title = t.meta_title;
  }

  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.getElementById(`lang-${lang}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
  }
}

// ─── Mobile Menu ───────────────────────────────
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('open');

    if (isOpen) {
      menu.classList.remove('open');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      // Re-add hidden after transition for accessibility
      menu.addEventListener('transitionend', () => {
        if (!menu.classList.contains('open')) {
          menu.classList.add('hidden');
        }
      }, { once: true });
    } else {
      menu.classList.remove('hidden');
      // Force reflow so the browser registers the starting state
      void menu.offsetHeight;
      menu.classList.add('open');
      iconOpen.classList.add('hidden');
      iconClose.classList.remove('hidden');
    }
  });

  // Close mobile menu when a link is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      iconOpen.classList.remove('hidden');
      iconClose.classList.add('hidden');
      menu.addEventListener('transitionend', () => {
        if (!menu.classList.contains('open')) {
          menu.classList.add('hidden');
        }
      }, { once: true });
    });
  });
}

// ─── FAQ Accordion ─────────────────────────────
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const toggle = item.querySelector('.faq-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      items.forEach(i => i.classList.remove('open'));

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });
}

// ─── Navbar Scroll Effect ──────────────────────
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ─── Scroll Reveal ─────────────────────────────
function initScrollReveal() {
  const cards = document.querySelectorAll('.reveal-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  cards.forEach(card => observer.observe(card));
}

// ─── Smooth Scroll for Anchor Links ────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = document.getElementById('navbar')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

// ─── Contact Form Handler ──────────────────────
function handleFormSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');
  const submitBtn = form.querySelector('button[type="submit"]');
  const t = translations[currentLang];

  // Show loading state
  submitBtn.classList.add('btn-loading');
  submitBtn.disabled = true;
  submitBtn.textContent = '';

  // Submit form data to Netlify
  const formData = new URLSearchParams(new FormData(form)).toString();

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData,
  })
    .then(response => {
      submitBtn.classList.remove('btn-loading');
      submitBtn.disabled = false;
      submitBtn.textContent = t.form_submit;

      if (response.ok) {
        form.reset();
        successMsg.classList.remove('hidden');
        setTimeout(() => {
          successMsg.classList.add('hidden');
        }, 5000);
      } else {
        alert(currentLang === 'fr'
          ? 'Une erreur est survenue. Veuillez réessayer.'
          : 'Something went wrong. Please try again.');
      }
    })
    .catch(() => {
      submitBtn.classList.remove('btn-loading');
      submitBtn.disabled = false;
      submitBtn.textContent = t.form_submit;
      alert(currentLang === 'fr'
        ? 'Erreur de connexion. Veuillez réessayer.'
        : 'Network error. Please try again.');
    });

  return false;
}

// ─── CountUp Animation for Stats ────────────────
function initCountUp() {
  const counters = document.querySelectorAll('[data-countup]');
  if (!counters.length) return;

  let animated = false;
  const statsSection = document.getElementById('stats');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(el => {
          const target = parseInt(el.getAttribute('data-countup'), 10);
          const duration = 1500;
          const start = performance.now();

          function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            // Preserve the suffix (% or non-breaking space + %)
            const lang = currentLang;
            if (lang === 'fr') {
              el.textContent = current + '\u00a0%';
            } else {
              el.textContent = current + '%';
            }

            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          requestAnimationFrame(update);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

// ─── Back to Top Button ─────────────────────────
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none');
      btn.classList.add('opacity-100', 'pointer-events-auto');
    } else {
      btn.classList.remove('opacity-100', 'pointer-events-auto');
      btn.classList.add('opacity-0', 'pointer-events-none');
    }
  };

  window.addEventListener('scroll', toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ─── Active Nav Highlight ───────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('header nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active-nav');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active-nav');
          }
        });
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

// ─── Cookie Banner ──────────────────────────────
function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept');
  if (!banner || !acceptBtn) return;

  const accepted = localStorage.getItem('sitecraft-cookies');
  if (!accepted) {
    // Show after a short delay
    setTimeout(() => {
      banner.classList.remove('hidden');
    }, 1500);
  }

  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('sitecraft-cookies', 'accepted');
    banner.classList.add('hidden');
  });
}

// ─── Initialize Everything ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initMobileMenu();
  initFAQ();
  initNavbarScroll();
  initScrollReveal();
  initSmoothScroll();
  initCountUp();
  initBackToTop();
  initActiveNav();
  initCookieBanner();
});
