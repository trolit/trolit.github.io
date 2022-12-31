import { Anchor, Text } from '@mantine/core';

import { Element } from '.';
import { YOUTUBE_WATCH_URL } from '@/config';
import { ITrack } from '@/interfaces/dashboard/ITrack';
import { TRACKS_NAVIGATION_ITEM } from '@/assets/constants/navigation-items';

interface IProps {
  item: ITrack;
}

export function TrackElement({ item: { authors, title, youtubeId } }: IProps) {
  const label = (
    <Text fz='xs' fw={700} lineClamp={2}>
      {authors.join(', ')}
    </Text>
  );

  const extra = (
    <Anchor size='xs' target='_blank' href={`${YOUTUBE_WATCH_URL}${youtubeId}`}>
      (YouTube)
    </Anchor>
  );

  return <Element text={title} label={label} extra={extra} icon={TRACKS_NAVIGATION_ITEM.icon} />;
}
