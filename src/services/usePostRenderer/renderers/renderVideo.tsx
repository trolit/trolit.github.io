import { ReactNode } from 'react';
import { AspectRatio } from '@mantine/core';

import { Video } from '../components';

export function renderVideo(index: number, video: Video): ReactNode {
  const {
    data: { title, src },
  } = video;

  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={src}
        title={title}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </AspectRatio>
  );
}
