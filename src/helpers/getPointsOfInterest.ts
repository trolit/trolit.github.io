import dayjs, { Dayjs, OpUnitType } from 'dayjs';

import { dateSort } from '@/utilities/dateSort';

export function getPointsOfInterest(
  dates: string[],
  limit: number,
  groupBy: OpUnitType,
) {
  const sortedDates = [...dates].sort(dateSort);

  const interestPoints: Dayjs[] = [];

  for (const date of sortedDates) {
    if (interestPoints.length === limit) {
      break;
    }

    const parsedDate = dayjs(date);

    if (
      !interestPoints.some((interestPoint) =>
        interestPoint.isSame(date, groupBy),
      )
    ) {
      interestPoints.unshift(parsedDate);
    }
  }

  return interestPoints;
}
