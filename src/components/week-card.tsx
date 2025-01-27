'use client';

import { useState, useEffect, useRef } from 'react';
import type { WeekEntry, DayEntry } from '@/types/diary';
import Link from 'next/link';

interface WeekCardProps {
  week: WeekEntry;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]; // Converts to YYYY-MM-DD format
}

export function WeekCard({ week }: WeekCardProps) {
  const [days, setDays] = useState<DayEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            loadDays();
            setHasLoaded(true);
          }
        });
      },
      {
        rootMargin: '100px', // Start loading a bit before the card comes into view
        threshold: 0
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [hasLoaded]);

  const loadDays = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const startDate = formatDate(new Date(week.startDate));
      const response = await fetch(`/api/week-days?start=${startDate}`);
      if (!response.ok) throw new Error('Failed to fetch days');
      const daysData = await response.json();

      if (!Array.isArray(daysData)) {
        throw new Error('Invalid response format');
      }

      const sortedDays = daysData.sort((a, b) => 
        new Date(b.date).getTime() - new Date(a.date).getTime()
      );

      setDays(sortedDays);
    } catch (error) {
      console.error('Failed to fetch days:', error);
      setError(error instanceof Error ? error.message : 'Failed to load days');
    } finally {
      setIsLoading(false);
    }
  };

  const DaySkeleton = () => (
    <div className="animate-pulse">
      <div className="absolute -left-[37px] w-3 h-3 rounded-full bg-border" />
      <div className="h-4 w-32 bg-muted rounded mb-2" />
      <div className="h-6 w-3/4 bg-muted rounded" />
    </div>
  );

  return (
    <div className="relative" ref={cardRef}>
      {/* Week Summary */}
      <div className="flex items-start gap-6 mb-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
          <span className="text-3xl">{week.emoji}</span>
        </div>
        <div>
          <div className="text-sm text-muted-foreground mb-1">Week {week.week}</div>
          <h3 className="text-xl font-semibold mb-2">{week.summary}</h3>
        </div>
      </div>

      {/* Days Timeline */}
      <div className="pl-8 ml-8 border-l border-border relative">
        <div className="absolute top-0 bottom-0 -left-px w-px bg-border" />
        <div className="space-y-8">
          {isLoading ? (
            <>
              <div className="relative">
                <DaySkeleton />
              </div>
              <div className="relative">
                <DaySkeleton />
              </div>
              <div className="relative">
                <DaySkeleton />
              </div>
            </>
          ) : error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            days.map((day) => (
              <Link 
                key={day.date} 
                href={`/diary/${day.date.split('T')[0]}`}
                className="block group relative"
              >
                <div className="absolute -left-[39px] w-3 h-3 rounded-full bg-border group-hover:bg-primary transition-colors" />
                <time className="block text-sm text-muted-foreground mb-1">
                  {new Date(day.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <h4 className="text-lg group-hover:text-primary transition-colors">
                  {day.summary}
                </h4>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
