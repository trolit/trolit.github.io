import dayjs from 'dayjs';

export function sortByDate<T>(collection: T[], key = 'startedAt') {
  return [...collection].sort((firstItem: T, secondItem: T) => {
    const { [key]: first } = firstItem as any;
    const { [key]: second } = secondItem as any;

    return dayjs(first).isBefore(dayjs(second)) ? 1 : -1;
  });
}
