import { Anchor, Text } from '@mantine/core';

import { Element } from '.';
import { YOUTUBE_WATCH_URL } from '@/config';
import { ITrack } from '@/interfaces/dashboard/ITrack';
import { tracksNavigationItem } from '@/assets/data/dashboard';

interface IProps {
  item: ITrack;
}

export function TrackElement({ item }: IProps) {
  const { authors, title, youtubeId } = item;

  const label = (
    <Text fz='xs' fw={700} lineClamp={1}>
      {authors.join(', ')}
    </Text>
  );

  const extra = (
    <Anchor size='xs' target='_blank' href={`${YOUTUBE_WATCH_URL}${youtubeId}`}>
      YouTube
    </Anchor>
  );

  return (
    <Element
      icon={tracksNavigationItem.icon}
      label={label}
      text={title}
      extra={extra}
    />
  );
}
