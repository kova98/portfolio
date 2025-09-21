'use client';

import { useEffect } from 'react';

export function BarelyticsTracker() {
  useEffect(() => {
    // Track page landing with Barelytics
    if (typeof window !== 'undefined' && (window as any).barelytics) {
      (window as any).barelytics.capture('landed');
    }
  }, []);

  return null;
}