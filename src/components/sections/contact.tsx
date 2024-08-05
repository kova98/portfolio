'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { EnvelopeOpenIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { usePostHog } from 'posthog-js/react';
import TrackedLink from '@/components/tracked-link';

const Contact: React.FC = () => {
  const postHog = usePostHog();

  function linkClicked(type: string) {
    postHog.capture('contact_link_clicked', { type: type });
  }

  return (
    <div
      id="contact"
      className="flex flex-col min-h-screen gap-3 p-4 justify-center align-middle bg-background text-foreground items-center"
    >
      <h1 className="text-4xl font-bold pb-5">Want to contact me?</h1>
      <Button>
        <TrackedLink href={'mailto:rokokovac98@gmail.com'} event={'contact_link_clicked'} eventData={{ type: 'email' }}>
          <div className={'flex flex-row content-end'}>
            <EnvelopeOpenIcon className="mr-2 mt-0.5 h-4 w-4" /> rokokovac98@gmail.com
          </div>
        </TrackedLink>
      </Button>
      <Button>
        <TrackedLink
          href={'https://www.linkedin.com/in/kova98/'}
          event={'contact_link_clicked'}
          eventData={{ type: 'linkedin' }}
        >
          <div className={'flex flex-row '}>
            <LinkedInLogoIcon className="mr-2 mt-0.5 h-4 w-4" /> Roko Kovač
          </div>
        </TrackedLink>
      </Button>
    </div>
  );
};

export default Contact;
