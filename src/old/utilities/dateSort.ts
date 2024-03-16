import dayjs from 'dayjs';

export const dateSort = (a: string, b: string) => {
  return dayjs(a).isBefore(dayjs(b)) ? 1 : -1;
};
