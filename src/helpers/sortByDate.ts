import { dateSort } from '@/utilities/dateSort';

export function sortByDate<T>(collection: T[], key: keyof T) {
  return [...collection].sort((firstItem: T, secondItem: T) => {
    const { [key]: first } = firstItem;
    const { [key]: second } = secondItem;

    return dateSort(<string>first, <string>second);
  });
}
