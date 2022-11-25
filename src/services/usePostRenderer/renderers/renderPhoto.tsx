import { ReactNode } from 'react';
import { Image, Text } from '@mantine/core';

import { Photo } from '../components';

export function renderPhoto(index: number, photo: Photo): ReactNode {
  const { data } = photo;

  const { sourceUrl, description, overrideComponentProps } = data;

  return (
    <div key={index}>
      <Image
        radius={20}
        fit='contain'
        caption={
          <Text fz='sm' align='right'>
            {description} &nbsp;
            {sourceUrl && (
              <a href={sourceUrl} target='_blank' rel='noreferrer'>
                (source)
              </a>
            )}
          </Text>
        }
        alt={`${description || photo}`}
        withPlaceholder
        placeholder={
          <Text align='center'>This image contained {description}</Text>
        }
        {...overrideComponentProps}
      />
    </div>
  );
}
