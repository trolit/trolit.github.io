import { ReactNode } from 'react';
import { Image, Text } from '@mantine/core';

import { Photo } from '../components';

export function renderPhoto(index: number, photo: Photo): ReactNode {
  const {
    data: { caption, src, sourceUrl, overrideImageProps },
  } = photo;

  return (
    <Image
      key={index}
      src={src}
      caption={
        <Text align='center'>
          {caption}

          {sourceUrl && (
            <a href={sourceUrl} target='_blank' rel='noreferrer'>
              source
            </a>
          )}
        </Text>
      }
      alt={`${caption}`}
      withPlaceholder
      placeholder={<Text align='center'>This image contained {caption}</Text>}
      {...overrideImageProps}
    />
  );
}
