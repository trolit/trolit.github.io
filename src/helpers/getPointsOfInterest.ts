import dayjs, { OpUnitType } from 'dayjs';

import { dateSort } from '@/utilities/dateSort';

export function getPointsOfInterest(dates: string[], limit: number, groupBy: OpUnitType): string[] {
  const sortedDates = [...dates].sort(dateSort);

  const interestPoints: string[] = [];

  for (const date of sortedDates) {
    if (interestPoints.length === limit) {
      break;
    }

    if (!interestPoints.some((interestPoint) => dayjs(interestPoint).isSame(date, groupBy))) {
      interestPoints.unshift(date);
    }
  }

  return interestPoints;
}
