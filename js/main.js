(function () {
  'use strict';

  var doc = document;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };

  doc.documentElement.classList.remove('no-js');
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Header + mobile menu ---------- */
  var header = $('.site-header');
  var nav = $('#nav');
  var menuBtn = $('#menuBtn');

  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 24); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    doc.body.classList.toggle('menu-open', open);
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('open')); });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  doc.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) setMenu(false); });

  /* ---------- Active nav link ---------- */
  var links = $$('.nav a[href^="#"]:not(.nav-cta)');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle('active', l.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (l) {
      var t = $(l.getAttribute('href'));
      if (t) spy.observe(t);
    });

    /* ---------- Reveal on scroll ---------- */
    var rev = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); o.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    $$('.reveal').forEach(function (el) { rev.observe(el); });
  } else {
    $$('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Projects: filter + view more ---------- */
  var INITIAL = 9;
  var cards = $$('.card');
  var chips = $$('.chip');
  var moreWrap = $('.more-wrap');
  var moreBtn = $('#moreBtn');
  var intro = $('#catIntro');
  var current = 'all';
  var expanded = false;

  var intros = {
    all: 'A mix of flyers, publications, book covers, brand identities, 3D product work and illustration. Tap any image to view it larger.',
    flyers: 'Event flyers, campaign posters and social graphics, including the cbm International Report 2022, "Orange the World / End Violence Against Women", the "Good Design" series and Brand Image System.',
    reports: 'Report and event-gallery publication for the Fiscal Responsibility Commission\'s South-South Fiscal Accountability Retreat, Port-Harcourt.',
    brochures: 'Corporate brochure for Rockshaw Logistics Limited: core values, vision and mission, and service spreads.',
    covers: 'Book covers: Meetings and Encounters (Eugenia Abu), While She Slept, Bearing the Brunt Alone, Mourndays and Ruminations and Instrument of Immortality.',
    '3d': '3D product and out-of-home mock-ups: a branded bag and bottle, beverage can renders and the "Conversations" bus-shelter campaign.',
    brand: 'Logo crafting and brand systems: Northstar Leadership, Sickerville Youth and dozens of logos from Acoustichild to Soar Tech.',
    illustration: 'Children\'s book illustration, concept collages and the Commander Zeal comic.'
  };

  function render() {
    var shown = 0;
    var matching = cards.filter(function (c) { return current === 'all' || c.dataset.cat === current; });
    var limit = (current === 'all' && !expanded) ? INITIAL : Infinity;
    cards.forEach(function (c) { c.hidden = true; });
    matching.forEach(function (c) {
      if (shown < limit) { c.hidden = false; shown++; }
    });
    moreWrap.hidden = matching.length <= shown;
    intro.textContent = intros[current] || '';
  }

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      current = chip.dataset.filter;
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      render();
    });
  });
  moreBtn.addEventListener('click', function () { expanded = true; render(); });
  render();

  /* ---------- Lightbox ---------- */
  var lb = $('#lightbox');
  var lbImg = $('#lbImg');
  var lbCap = $('#lbCap');
  var idx = 0;
  var list = [];

  function visibleCards() { return cards.filter(function (c) { return !c.hidden; }); }

  function show(i) {
    idx = (i + list.length) % list.length;
    var c = list[idx];
    var img = $('img', c);
    lbImg.src = c.dataset.full;
    lbImg.alt = img.alt;
    lbCap.textContent = img.alt + '  (' + (idx + 1) + ' / ' + list.length + ')';
  }

  function open(card) {
    list = visibleCards();
    show(list.indexOf(card));
    if (typeof lb.showModal === 'function') lb.showModal(); else lb.setAttribute('open', '');
  }

  cards.forEach(function (c) {
    $('button', c).addEventListener('click', function () { open(c); });
  });
  $('#lbClose').addEventListener('click', function () { lb.close(); });
  $('#lbPrev').addEventListener('click', function () { show(idx - 1); });
  $('#lbNext').addEventListener('click', function () { show(idx + 1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) lb.close(); });
  lb.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });
  lb.addEventListener('close', function () { lbImg.removeAttribute('src'); });
})();
