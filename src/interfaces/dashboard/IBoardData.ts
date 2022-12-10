import { Dayjs } from 'dayjs';

export interface IBoardData<T> {
  pointsOfInterest: Dayjs[];

  arrayOfItems: T[][];
}
