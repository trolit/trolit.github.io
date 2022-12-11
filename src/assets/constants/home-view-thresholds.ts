import { MAX_HOME_INTEREST_POINTS } from '@/config';
import { IHomeViewThreshold } from '@/interfaces/IHomeViewThreshold';

const commonThresholdValue = '861px';

export const HOME_VIEW_THRESHOLDS: IHomeViewThreshold[] = [
  {
    points: 1,

    value: commonThresholdValue,
  },

  {
    points: 2,

    value: commonThresholdValue,
  },

  {
    points: 3,

    value: commonThresholdValue,
  },

  {
    points: 4,

    value: commonThresholdValue,
  },

  {
    points: 5,

    value: '959px',
  },

  {
    points: 6,

    value: '1205px',
  },

  {
    points: 7,

    value: '1441px',
  },

  {
    points: 8,

    value: '1665px',
  },

  {
    points: 9,

    value: '1896px',
  },
];

export const ACTIVE_THRESHOLD_VALUE =
  HOME_VIEW_THRESHOLDS.find(({ points }) => points === MAX_HOME_INTEREST_POINTS)
    ?.value || HOME_VIEW_THRESHOLDS[0].value;
