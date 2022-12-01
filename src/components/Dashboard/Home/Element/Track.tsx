import { Anchor } from '@mantine/core';

import { Element } from '.';
import { YOUTUBE_WATCH_URL } from '@/config';
import { ITrack } from '@/interfaces/dashboard/ITrack';
import { tracksNavigationItem } from '@/assets/data/dashboard';

interface IProps {
  item: ITrack;
}

export function TrackElement({ item }: IProps) {
  const { title, youtubeId } = item;

  const extra = (
    <Anchor size='xs' target='_blank' href={`${YOUTUBE_WATCH_URL}${youtubeId}`}>
      (YouTube)
    </Anchor>
  );

  return (
    <Element icon={tracksNavigationItem.icon} text={title} extra={extra} />
  );
}
