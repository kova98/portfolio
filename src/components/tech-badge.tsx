import React from 'react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

function TechBadge({
  tech,
  img,
  desc,
  selected,
  setSelected,
}: {
  tech: string;
  img: string;
  desc: string;
  selected: string;
  setSelected: (tech: string) => void;
}) {
  const isActive = selected === tech;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            onClick={() => setSelected(tech)}
            className={`shadow-sm rounded-lg w-14 h-14 flex justify-center items-center hover:shadow-md border ${isActive ? 'border-background shadow-md' : 'border-muted-foreground'} hover:border-background`}
          >
            <Image className="p-3" src={`/tech/${img}.png`} height={50} width={50} alt={tech} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tech}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TechBadge;
