// components/AnalyticsClient.tsx
'use client';

import { useEffect } from 'react';
import { initAnalytics } from '@/components/barelytics';

export default function BarelyticsClient() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return null; // doesn’t render anything
}
