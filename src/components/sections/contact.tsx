import React from 'react';
import { Button } from '@/components/ui/button';
import { EnvelopeOpenIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="flex flex-col min-h-screen gap-3 p-4 justify-center align-middle bg-background text-foreground items-center"
    >
      <h1 className="text-4xl font-bold pb-5">Want to contact me?</h1>
      <Button asChild className={'w-56'}>
        <a href="mailto:rokokovac98@gmail.com">
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> rokokovac98@gmail.com
        </a>
      </Button>
      <Button asChild>
        <a href={'https://www.linkedin.com/in/kova98/'}>
          <LinkedInLogoIcon className="mr-2 h-4 w-4" /> Roko Kovač
        </a>
      </Button>
    </div>
  );
};

export default Contact;
