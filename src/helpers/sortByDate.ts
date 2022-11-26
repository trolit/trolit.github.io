import dayjs from 'dayjs';

interface IElement {
  date: string;
}

export function sortByDate<T>(collection: T[], mode: 'desc' | 'asc' = 'desc') {
  return [...collection].sort((a, b) => {
    const { date: firstDate } = a as IElement;
    const { date: secondDate } = b as IElement;

    if (mode === 'desc') {
      return dayjs(firstDate).isBefore(dayjs(secondDate)) ? 1 : -1;
    }

    return dayjs(firstDate).isAfter(dayjs(secondDate)) ? 1 : -1;
  });
}
