import dayjs, { Dayjs } from 'dayjs';

const DEFAULT_FORMAT = 'YYYY-MM-DD';

export function formatDate(date: string | Dayjs, format?: string) {
  if (typeof date === 'string') {
    return dayjs(date).format(format || DEFAULT_FORMAT);
  }

  return date.format(format || DEFAULT_FORMAT);
}
