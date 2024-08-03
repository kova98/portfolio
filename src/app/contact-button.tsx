'use client';

import { Button } from '@/components/ui/button';

interface ContactButtonProps {
  className?: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ className }) => {
  function contactClicked() {
    window.open('mailto:rokokovac98@gmail.com');
  }

  return (
    <Button onClick={contactClicked} className={`mt-10 ml-4 scale-125 ${className}`}>
      Contact me
    </Button>
  );
};

export default ContactButton;
