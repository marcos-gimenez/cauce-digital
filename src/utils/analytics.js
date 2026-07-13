export function trackEvent(eventName, params = {}) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', eventName, params);
}

function buildEventParams(params = {}) {
  const eventParams = {
    ...params,
    page_path: typeof window === 'undefined' ? undefined : window.location.pathname,
  };

  return Object.fromEntries(
    Object.entries(eventParams).filter(([, value]) => value !== undefined),
  );
}

export function trackWhatsAppClick(location, service) {
  trackEvent(
    'whatsapp_click',
    buildEventParams({
      button_location: location,
      service,
      contact_method: 'whatsapp',
    }),
  );
}

export function trackContactClick(location, service, linkUrl) {
  trackEvent(
    'contact_click',
    buildEventParams({
      button_location: location,
      service,
      link_url: linkUrl,
    }),
  );
}

export function trackCauceMedClick(location, linkUrl) {
  trackEvent(
    'caucemed_click',
    buildEventParams({
      button_location: location,
      service: 'CauceMed',
      link_url: linkUrl,
    }),
  );
}

export function trackEmailClick(location) {
  trackEvent(
    'email_click',
    buildEventParams({
      button_location: location,
      contact_method: 'email',
    }),
  );
}
