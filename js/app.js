(function () {
  'use strict';

  var STORAGE_KEY = 'dnsneko-index-lang';
  var currentLang = 'zh';

  function getHostname() {
    return window.location.hostname.toLowerCase();
  }

  /**
   * Find the longest matching DnsNeko-managed suffix for the given hostname.
   */
  function getMatchedSuffix(hostname) {
    var matched = null;
    for (var i = 0; i < DNSNEKO_DOMAINS.length; i++) {
      var domain = DNSNEKO_DOMAINS[i].toLowerCase();
      if (hostname === domain || hostname.endsWith('.' + domain)) {
        if (!matched || domain.length > matched.length) {
          matched = domain;
        }
      }
    }
    return matched;
  }

  function t(key, vars) {
    var str = I18N[currentLang][key] || I18N.zh[key] || '';
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
      });
    }
    return str;
  }

  function setHtml(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function detectLanguage() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (_) { /* ignore */ }

    if (stored === 'zh' || stored === 'en') return stored;

    var browserLang = (navigator.language || 'zh').toLowerCase();
    return browserLang.startsWith('zh') ? 'zh' : 'en';
  }

  function updateLangButtons() {
    var buttons = document.querySelectorAll('.lang-switch__btn');
    buttons.forEach(function (btn) {
      var isActive = btn.dataset.lang === currentLang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function render() {
    var hostname = getHostname();
    var suffix = getMatchedSuffix(hostname);
    var isKnown = Boolean(suffix);

    document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
    document.title = hostname
      ? t('pageTitle', { domain: hostname })
      : t('pageTitleFallback');

    setText('domain-title', hostname || '—');
    setText('badge', isKnown ? t('badge') : t('badgeUnknown'));
    setText('subtitle', isKnown ? t('subtitle') : t('subtitleUnknown'));
    setText('about-page-title', t('aboutPageTitle'));
    setHtml(
      'about-page-body',
      isKnown
        ? t('aboutPageKnown', { suffix: suffix })
        : t('aboutPageUnknown')
    );

    var dnsnekoSection = document.getElementById('section-about-dnsneko');
    if (dnsnekoSection) {
      if (isKnown) {
        dnsnekoSection.classList.remove('is-hidden');
        setText('about-dnsneko-title', t('aboutDnsNekoTitle'));
        setHtml('about-dnsneko-body', t('aboutDnsNeko'));
      } else {
        dnsnekoSection.classList.add('is-hidden');
      }
    }

    setText('cta-text', t('cta'));
    setText('contact-text', t('contact'));
    setHtml('footer-text', t('footer'));
    updateLangButtons();
  }

  function switchLanguage(lang) {
    if (lang !== 'zh' && lang !== 'en') return;
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (_) { /* ignore */ }
    render();
  }

  function initLangSwitcher() {
    var buttons = document.querySelectorAll('.lang-switch__btn');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchLanguage(btn.dataset.lang);
      });
    });
  }

  currentLang = detectLanguage();
  initLangSwitcher();
  render();
})();
