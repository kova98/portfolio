import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ModeToggle } from '@/components/navbar/mode-toggle';
import * as React from 'react';

export default function Header({home} : {home: string}) {
  return (
    <div className="p-3 flex justify-between items-center">
      <Button variant="ghost" size="sm" className={'rounded-full'}>
        <a className="w-8 h-8 flex items-center" href={home}>
          <Image src="/roko.jpg" alt="logo" width={50} height={50} className="rounded-full" />
        </a>
      </Button>
      <ModeToggle />
    </div>
  );
}
