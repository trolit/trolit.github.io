import { CSSProperties, ReactNode } from 'react';

import { Video } from '../components';

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

export function renderVideo(index: number, video: Video): ReactNode {
  const {
    data: { title, src },
  } = video;

  return (
    <div key={index} style={containerStyles}>
      <iframe src={src} title={title} allowFullScreen style={iframeStyles} />
    </div>
  );
}
