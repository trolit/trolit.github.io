import { OpUnitType } from 'dayjs';
import { MantineColor } from '@mantine/core';
import { HomeInterestPoints } from '@/utilities/types';

export const BACKGROUND_SRC: string =
  require('@/assets/media/background.svg').default;

export const DEFAULT_IMAGE_SRC: string = require('@/assets/media/projects/default.jpg');

export const PRIMARY_COLOR: MantineColor = 'teal';

export const HEADER_HEIGHT: string = '50px';

// @NOTE to maintain center add 0.5 to the value
export const OVERLAY_PADDING: number = 20.5;

export const DASHBOARD_PADDING: number = 20;

export const GITHUB_USERNAME: string = 'trolit';

// @NOTE https://day.js.org/docs/en/display/format
export const DATE_FORMAT: string = 'DD/MM/YYYY';

export const HOME_DATE_FORMATTER: string = 'YYYY';

export const HOME_GROUP_BY: OpUnitType = 'year';

export const SMALL_SCREEN_THRESHOLD: string = '658px';

export const MAX_HOME_INTEREST_POINTS: HomeInterestPoints = 4;

export const YOUTUBE_WATCH_URL: string = `https://www.youtube.com/watch?v=`;

export const YOUTUBE_EMBED_URL: string = `https://www.youtube.com/embed`;
