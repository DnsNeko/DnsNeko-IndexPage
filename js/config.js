/**
 * DnsNeko Index Page Configuration
 *
 * DNSNEKO_DOMAINS: list of root domains / suffixes managed by DnsNeko.
 * When the visited hostname matches one of these entries, the full guide
 * (About this page + About DnsNeko) is shown. Otherwise only the
 * "unknown domain" notice is displayed.
 */
const DNSNEKO_DOMAINS = [
  'co.ink',
  'os.kg',
  'zh.kg',
  'tw.kg',
];

const I18N = {
  zh: {
    badge: '域名提示',
    badgeUnknown: '域名提示',
    subtitle: '您正在访问的域名由 DnsNeko 提供 DNS 解析服务',
    subtitleUnknown: '此域名似乎不属于 DnsNeko 管理范围',
    aboutPageTitle: '关于此页面',
    aboutPageKnown: '此页面为 DnsNeko 域名引导页面，<strong>{suffix}</strong> 为 DnsNeko 管理的公共域名后缀。',
    aboutPageUnknown: '此页面为 DnsNeko 域名引导页面，但您访问的域名似乎不属于 DnsNeko，域名可能被错误解析。若有疑问请联系：<a href="mailto:Support@DnsNeko.com">Support@DnsNeko.com</a>，站点：<a href="https://dnsneko.com" rel="noopener noreferrer">DnsNeko.com</a>。',
    aboutDnsNekoTitle: '关于 DnsNeko',
    aboutDnsNeko: '<a href="https://dnsneko.com" rel="noopener noreferrer">DnsNeko.com</a> 提供非营利性免费子域名注册与免费 DNS 解析服务。我们提供多种后缀的子域名注册（免费与付费），以及完全免费的 DNS 解析服务。若有疑问请联系：<a href="mailto:Support@DnsNeko.com">Support@DnsNeko.com</a>，站点：<a href="https://dnsneko.com" rel="noopener noreferrer">DnsNeko.com</a>。',
    cta: '前往 DnsNeko.com',
    contact: '联系支持',
    footer: 'DnsNeko — 非营利性免费子域名与 DNS 解析服务 · <a href="https://dnsneko.com" rel="noopener noreferrer">DnsNeko.com</a>',
    pageTitle: '{domain} — DnsNeko',
    pageTitleFallback: 'DnsNeko 域名引导',
  },
  en: {
    badge: 'Domain Notice',
    badgeUnknown: 'Domain Notice',
    subtitle: 'The domain you are visiting is served by DnsNeko DNS',
    subtitleUnknown: 'This domain does not appear to be managed by DnsNeko',
    aboutPageTitle: 'About This Page',
    aboutPageKnown: 'This is a DnsNeko domain guide page. <strong>{suffix}</strong> is a public domain suffix managed by DnsNeko.',
    aboutPageUnknown: 'This is a DnsNeko domain guide page, but the domain you visited does not appear to belong to DnsNeko. It may have been incorrectly resolved. For questions, contact <a href="mailto:Support@DnsNeko.com">Support@DnsNeko.com</a> or visit <a href="https://dnsneko.com" rel="noopener noreferrer">DnsNeko.com</a>.',
    aboutDnsNekoTitle: 'About DnsNeko',
    aboutDnsNeko: '<a href="https://dnsneko.com" rel="noopener noreferrer">DnsNeko.com</a> provides non-profit free subdomain registration and free DNS resolution services. We offer subdomain registration under various suffixes (free and paid), along with completely free DNS resolution. For questions, contact <a href="mailto:Support@DnsNeko.com">Support@DnsNeko.com</a> or visit <a href="https://dnsneko.com" rel="noopener noreferrer">DnsNeko.com</a>.',
    cta: 'Visit DnsNeko.com',
    contact: 'Contact Support',
    footer: 'DnsNeko — Non-profit free subdomain & DNS services · <a href="https://dnsneko.com" rel="noopener noreferrer">DnsNeko.com</a>',
    pageTitle: '{domain} — DnsNeko',
    pageTitleFallback: 'DnsNeko Domain Guide',
  },
};
