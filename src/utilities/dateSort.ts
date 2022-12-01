import dayjs from 'dayjs';

export const dateSort = (
  a: string,
  b: string,
  mode: 'desc' | 'asc' = 'desc',
) => {
  if (mode === 'desc') {
    return dayjs(a).isBefore(dayjs(b)) ? 1 : -1;
  }

  return dayjs(a).isAfter(dayjs(b)) ? 1 : -1;
};
