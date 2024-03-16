import { dateSort } from '@/utilities/dateSort';

interface IElement {
  date: string;
}

export function sortByDate<T>(collection: T[]) {
  return [...collection].sort((firstItem: T, secondItem: T) => {
    const { date: first } = firstItem as IElement;
    const { date: second } = secondItem as IElement;

    return dateSort(first, second);
  });
}