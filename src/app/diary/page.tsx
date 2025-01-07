import Header from '@/app/diary/header';
import { WeekCard } from '@/components/week-card';
import { Rocket, Sparkles } from 'lucide-react';
import type { WeekEntry } from '@/types/diary';
import Image from 'next/image';
import Link from 'next/link';

async function getWeeks(): Promise<WeekEntry[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/weeks`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch weeks');
  }

  const weeks = await response.json();

  // Add week number to each entry
  // For the first item (oldest), week = total length
  // For the last item (newest), week = 1
  const weeksWithNumber = weeks.map((week: WeekEntry, index: number) => ({
    ...week,
    week: weeks.length - index, // If there are 11 weeks, first item gets 11, last gets 1
  }));

  // Sort by week number in descending order to show highest numbers first
  return weeksWithNumber.sort((a: WeekEntry, b: WeekEntry) => b.week - a.week);
}

export default async function DiaryPage() {
  const weeks = await getWeeks();

  return (
    <div className="flex flex-col min-h-screen">
      <Header home="/" />

      <div className="container max-w-3xl py-6 space-y-8">
        <div className="space-y-3">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Dev Diary</h1>
          <p className="text-xl text-muted-foreground leading-relaxed pb-5">
            Raw, uncensored look into my product building journey. I share my progress, learnings, feelings and
            challenges faced.
          </p>

          <Link href="https://www.codeinteractive.dev">
            <div className="flex items-center gap-6 mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-background border">
              <div className="shrink-0 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Image
                  src="/projects/codeinteractive-logo.png"
                  alt="logo"
                  width={300}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-medium flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Currently building
                </div>
                <div className="text-2xl font-bold text-primary">CodeInteractive</div>
                <div className="text-sm text-muted-foreground">Interactive .NET tutorials platform</div>
              </div>
            </div>
          </Link>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight">Weekly Updates</h2>
            <div className="text-sm text-muted-foreground">{weeks.length} weeks of progress</div>
          </div>

          <div className="space-y-4">
            {weeks.map((week) => (
              <WeekCard key={week.week} week={week} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
