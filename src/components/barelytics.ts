export function initAnalytics() {
  function getSessionId() {
    const name = 'analytics_session=';
    const match = document.cookie.split('; ').find((row) => row.startsWith(name));
    if (match) return match.split('=')[1];
    const id = crypto.randomUUID();
    document.cookie = `analytics_session=${id}; path=/; max-age=1800`;
    return id;
  }

  function getUserId() {
    let userId = localStorage.getItem('barelytics_user_id');
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem('barelytics_user_id', userId);
    }
    return userId;
  }

  const sessionId = getSessionId();
  const backendUrl = 'http://localhost:8080/event';

  function sendEvent(type: string, extra: Record<string, any> = {}) {
    const payload = {
      session_id: sessionId,
      type,
      url: window.location.href,
      referrer: document.referrer,
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      user_id: getUserId(),
      ...extra,
    };
    navigator.sendBeacon(backendUrl, JSON.stringify(payload));
  }

  // initial page view
  sendEvent('page_view');

  // track route changes (Next.js router)
  window.addEventListener('popstate', () => sendEvent('page_view'));

  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    setTimeout(() => sendEvent('page_view'), 0);
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    setTimeout(() => sendEvent('page_view'), 0);
  };
}
