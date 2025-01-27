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

      <main className="container max-w-4xl py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl mb-4">
            Dev Diary
          </h1>
          <p className="text-xl text-muted-foreground">
            Raw, uncensored look into my product building journey. I share my progress, learnings, feelings and
            challenges faced.
          </p>
        </div>

        {/* Current Project Banner */}
        <Link 
          href="https://www.codeinteractive.dev"
          className="group block mb-16"
        >
          <div className="rounded-xl border bg-card p-8 hover:bg-accent/5 transition-all">
            <div className="flex items-center gap-6 mb-4">
              <div className="relative h-16 w-16">
                <Image
                  src="/projects/codeinteractive-logo.png"
                  alt="CodeInteractive Logo"
                  fill
                  className="rounded-full object-cover"
                  />
              </div>
              <div>
                <div className="text-sm font-medium text-primary mb-1 flex items-center gap-2">
                  <Rocket className="h-4 w-4" />
                  Currently Building
                </div>
                <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  Code Interactive
                </h2>
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              Hands-on, addictive, interactive tutorials that teach you real-world .NET development
            </p>
          </div>
        </Link>

        {/* Timeline Section */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold">Journey Timeline</h2>
            <div className="text-sm text-muted-foreground">
              {weeks.length} weeks documented
            </div>
          </div>

          <div className="space-y-12">
            {weeks.map((week) => (
              <WeekCard key={week.week} week={week} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
