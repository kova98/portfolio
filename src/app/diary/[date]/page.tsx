import { notFound } from 'next/navigation';
import Link from 'next/link';
import { config } from '@/config/env';
import Header from '@/app/diary/header';
import { MarkdownRenderer } from '@/components/markdown-renderer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { DayEntry } from '@/types/diary';

interface DayNavigation {
  previous?: string ;
  next?: string ;
}

async function getDayEntry(date: string): Promise<DayEntry> {
  const response = await fetch(`${config.apiUrl}/day?date=${date}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    throw new Error('Failed to fetch day entry');
  }

  return response.json();
}

async function getDayNavigation(date: string): Promise<DayNavigation> {
  const response = await fetch(`${config.apiUrl}/day-navigation?date=${date}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch navigation');
  }

  return response.json();
}

export default async function DiaryEntryPage({
  params,
}: {
  params: { date: string };
}) {
  const [entry, navigation] = await Promise.all([
    getDayEntry(params.date),
    getDayNavigation(params.date),
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header home="/diary" />
      
      <div className="container max-w-3xl py-6 space-y-8">
        <div className="flex items-center justify-between">
            
          {navigation.previous ? (
            <Link
              href={`/diary/${navigation.previous.split('T')[0]}`}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous Entry
            </Link>
          ) : (
            <div /> 
          )}

          {navigation.next ? (
            <Link
              href={`/diary/${navigation.next.split('T')[0]}`}
              className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Next Entry
              <ChevronRight className="h-4 w-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{entry.summary}</h1>
          <time className="block text-sm text-muted-foreground">
            {new Date(entry.date).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
          
          <div className="prose prose-slate max-w-none pt-6">
            <MarkdownRenderer markdown={entry.content!} />
          </div>
        </div>
      </div>
    </div>
  );
} 