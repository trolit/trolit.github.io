import { MAX_HOME_INTEREST_POINTS } from '@/config';
import { IHomeViewThreshold } from '@/interfaces/IHomeViewThreshold';

const commonThresholdValue1 = '1249px';

const commonThresholdValue2 = '1892px';

export const HOME_VIEW_THRESHOLDS: IHomeViewThreshold[] = [
  {
    points: 1,

    value: commonThresholdValue1,
  },

  {
    points: 2,

    value: commonThresholdValue1,
  },

  {
    points: 3,

    value: commonThresholdValue1,
  },

  {
    points: 4,

    value: commonThresholdValue1,
  },

  {
    points: 5,

    value: '1359px',
  },

  {
    points: 6,

    value: '1625px',
  },

  {
    points: 7,

    value: commonThresholdValue2,
  },

  {
    points: 8,

    value: commonThresholdValue2,
  },

  {
    points: 9,

    value: commonThresholdValue2,
  },
];

export const ACTIVE_THRESHOLD_VALUE =
  HOME_VIEW_THRESHOLDS.find(({ points }) => points === MAX_HOME_INTEREST_POINTS)
    ?.value || HOME_VIEW_THRESHOLDS[0].value;
