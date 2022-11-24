import { ReactNode } from 'react';
import { Image, Text } from '@mantine/core';

import { Photo } from '../components';

export function renderPhoto(index: number, photo: Photo): ReactNode {
  const {
    data: { caption, src, sourceUrl, overrideComponentProps },
  } = photo;

  return (
    <div>
      <Image
        key={index}
        fit='contain'
        src={src}
        caption={
          <Text fz='sm' align='right'>
            {caption} &nbsp;
            {sourceUrl && (
              <a href={sourceUrl} target='_blank' rel='noreferrer'>
                (source)
              </a>
            )}
          </Text>
        }
        alt={`${caption}`}
        withPlaceholder
        placeholder={<Text align='center'>This image contained {caption}</Text>}
        {...overrideComponentProps}
      />
    </div>
  );
}
