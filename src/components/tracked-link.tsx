'use client';

import { usePostHog } from 'posthog-js/react';

interface TrackedLinkProps {
  href: string;
  event: string;
  eventData?: {};
  children: React.ReactNode;
}

const TrackedLink: React.FC<TrackedLinkProps> = ({ href, event, eventData, children }) => {
  const postHog = usePostHog();

  function capture() {
    postHog.capture(event, eventData);
    // Also track with Barelytics
    if (typeof window !== 'undefined' && (window as any).barelytics) {
      (window as any).barelytics.capture(event);
    }
  }

  return (
    <a href={href} onClick={capture}>
      {children}
    </a>
  );
};

export default TrackedLink;
