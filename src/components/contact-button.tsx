'use client';

import { Button } from '@/components/ui/button';
import { usePostHog } from 'posthog-js/react';

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  const postHog = usePostHog();
  function contactClicked() {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
    postHog.capture('contact_button_clicked');
    // Also track with Barelytics
    if (typeof window !== 'undefined' && (window as any).barelytics) {
      (window as any).barelytics.capture('contact_button_clicked');
    }
  }

  return (
    <Button onClick={contactClicked} className={`mt-10 ml-4 scale-100 lg:scale-125 ${className}`}>
      Contact me
    </Button>
  );
};

export default ContactButton;
