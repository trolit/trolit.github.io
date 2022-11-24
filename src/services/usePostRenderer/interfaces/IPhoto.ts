import { ImageProps } from '@mantine/core';

export interface IPhoto {
  src: string;

  caption: string;

  sourceUrl?: string;

  overrideComponentProps?: ImageProps;
}
