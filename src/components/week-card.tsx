'use client';

import { useState } from 'react';
import type { WeekEntry, DayEntry } from '@/types/diary';
import { ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import Link from 'next/link';

interface WeekCardProps {
  week: WeekEntry;
}

function formatDate(date: Date): string {
  return date.toISOString().split('T')[0]; // Converts to YYYY-MM-DD format
}

export function WeekCard({ week }: WeekCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [days, setDays] = useState<DayEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setIsExpanded(!isExpanded);

    if (!isExpanded && !days.length) {
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

        // Sort days in descending order by date
        const sortedDays = daysData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setDays(sortedDays);
      } catch (error) {
        console.error('Failed to fetch days:', error);
        setError(error instanceof Error ? error.message : 'Failed to load days');
        setIsExpanded(false);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 flex items-center justify-between cursor-pointer hover:bg-accent/50" onClick={handleClick}>
        <div className="flex items-center gap-4">
          <div className="text-4xl">{week.emoji}</div>
          <div>
            <p className="text-sm text-muted-foreground">Week {week.week}</p>
            <p className="text-lg font-medium">{week.summary}</p>
          </div>
        </div>
        {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
      </div>

      {isExpanded && (
        <div className="px-6 pb-6 pt-2 space-y-4">
          {isLoading ? (
            <div className="pt-5 text-sm text-muted-foreground">Loading days...</div>
          ) : error ? (
            <div className="text-sm text-red-500">{error}</div>
          ) : days.length === 0 ? (
            <div className="text-sm text-muted-foreground">No entries for this week</div>
          ) : (
            <div className="space-y-3">
              {days.map((day) => (
                <Link key={day.date} href={`/diary/${day.date.split('T')[0]}`} className="block">
                  <div className="rounded-lg border bg-card p-5 hover:bg-accent/50 transition-colors group">
                    <time className="text-sm text-muted-foreground block mb-3">
                      {new Date(day.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </time>
                    <h4 className="font-semibold text-lg group-hover:text-primary transition-colors mb-2">
                      {day.summary}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
