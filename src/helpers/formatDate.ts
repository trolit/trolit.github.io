import dayjs, { Dayjs } from 'dayjs';

import { GLOBAL_DATE_FORMAT } from '@/config';

export function formatDate(date: string | Dayjs, format?: string) {
  if (typeof date === 'string') {
    return dayjs(date).format(format || GLOBAL_DATE_FORMAT);
  }

  return date.format(format || GLOBAL_DATE_FORMAT);
}
