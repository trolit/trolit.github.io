import { ImageProps } from '@mantine/core';

export interface IPhoto {
  description: string;

  sourceUrl?: string;

  overrideComponentProps?: ImageProps;
}
