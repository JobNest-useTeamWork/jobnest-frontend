export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
  date: Date;
}

export interface CalendarEvent {
  id: string;
  summary: string;
  description: string;
  sequence: number;
  start: {
    date: string;
  };
}
