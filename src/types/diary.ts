export interface DayEntry {
  date: string;
  content?: string;
  summary?: string;
  tags?: string[];
}

export interface WeekEntry {
  startDate: string | number | Date;
  week: number;
  summary: string;
  emoji: string;
  days?: DayEntry[];
}
