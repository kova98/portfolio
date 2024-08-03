import React from 'react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TechBadgeProps {
  tech: string;
  img: string;
  desc: string;
  selected: string;
  setSelected: (tech: string) => void;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech, img, desc, selected, setSelected }) => {
  const isActive = selected === tech;

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <button
            onClick={() => setSelected(tech)}
            className={`rounded-lg w-14 h-14 flex justify-center items-center hover:shadow-md border hover:border-background 
            ${isActive ? 'border-background shadow-md border-2' : 'border-muted-foreground shadow-sm'}`}
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
};

export default TechBadge;
