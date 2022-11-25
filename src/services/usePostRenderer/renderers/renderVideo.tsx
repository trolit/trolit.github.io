import { Container } from '@mantine/core';
import { CSSProperties, ReactNode } from 'react';

import { Video } from '../components';

export function renderVideo(index: number, video: Video): ReactNode {
  const {
    data: { title, src },
  } = video;

  const containerStyles: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    paddingBottom: '56.25%', // 16:9
  };

  const iframeStyles: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <Container key={index} fluid style={containerStyles}>
      <iframe
        src={src}
        title={title}
        frameBorder='0'
        allowFullScreen
        style={iframeStyles}
      />
    </Container>
  );
}
