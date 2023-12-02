import { OpUnitType } from 'dayjs';
import { MantineColor } from '@mantine/core';
import { HomeInterestPoints } from '@/utilities/types';
import backgroundImage from '@/assets/media/background.jpg';
import defaultProjectImage from '@/assets/media/projects/default.jpg';

/* ******************
 * GLOBAL
 */

export const PRIMARY_COLOR: MantineColor = 'indigo';

// @NOTE https://day.js.org/docs/en/display/format
export const GLOBAL_DATE_FORMAT: string = 'DD/MM/YYYY';

// @NOTE Each color has 10 shades. All colors should always have 10 shades.
export const LIGHT_THEME_COLOR_SHADE = 8;

export const DARK_THEME_COLOR_SHADE = 9;

export const BACKGROUND_SRC = backgroundImage;

export const DEFAULT_IMAGE_SRC = defaultProjectImage;

// @NOTE to maintain center add 0.5 to the value
export const OVERLAY_PADDING: number = 30.5;

export const GITHUB_USERNAME: string = 'trolit';

export const SMALL_SCREEN_THRESHOLD: string = '658px';

export const YOUTUBE_WATCH_URL: string = `https://www.youtube.com/watch?v=`;

// @NOTE embed/<video-id>
export const YOUTUBE_EMBED_URL: string = `https://www.youtube.com/embed`;

/* ******************
 * DASHBOARD
 */

export const DASHBOARD_PADDING: number = 20;

export const DASHBOARD_HEADER_HEIGHT: string = '50px';

/* ******************
 * HOME
 */

export const HOME_DATE_FORMAT: string = 'YYYY';

export const HOME_GROUP_BY: OpUnitType = 'year';

export const MAX_HOME_INTEREST_POINTS: HomeInterestPoints = 3;
