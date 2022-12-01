import dayjs from 'dayjs';

export const dateSort =
  (mode: 'desc' | 'asc' = 'desc') =>
  (a: string, b: string) => {
    if (mode === 'desc') {
      return dayjs(a).isBefore(dayjs(b)) ? 1 : -1;
    }

    return dayjs(a).isAfter(dayjs(b)) ? 1 : -1;
  };
