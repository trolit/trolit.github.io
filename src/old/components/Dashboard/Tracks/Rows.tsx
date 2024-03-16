import { Badge, Anchor, Flex, FlexProps } from '@mantine/core';

import { YOUTUBE_WATCH_URL } from '@/config';
import { TRACKS } from '@/assets/data/tracks';
import { useCommonStyles } from '@/assets/styles/common';
import { Tags } from '@/components/Dashboard/common/Tags';

interface IProps {
  composersFilter: string[];
}

export function Rows({ composersFilter }: IProps) {
  const { textCenter } = useCommonStyles();

  const flexProps: FlexProps = {
    gap: 'xs',
    wrap: 'wrap',
    align: 'center',
    direction: 'row',
  };

  const tracks = composersFilter.length
    ? TRACKS.filter((track) => track.authors.some((author) => composersFilter.includes(author)))
    : TRACKS;

  const tracksLength = tracks.length;

  return (
    <>
      {tracks.map(({ authors, title, tags, youtubeId }, index) => (
        <tr key={`track-${index}`}>
          <td className={textCenter}>{tracksLength - index}</td>

          <td>{title}</td>

          <td>
            <Flex {...flexProps}>
              {authors.map((author, authorIndex) => (
                <Badge size='sm' radius={0} key={`track-${index}-author-${authorIndex}`}>
                  {author}
                </Badge>
              ))}
            </Flex>
          </td>

          <td>
            <Flex {...flexProps}>
              <Tags name={title} value={tags} badgeProps={{ size: 'sm' }} />
            </Flex>
          </td>

          <td className={textCenter}>
            <Anchor href={`${YOUTUBE_WATCH_URL}${youtubeId}`} target='_blank'>
              YouTube
            </Anchor>
          </td>
        </tr>
      ))}
    </>
  );
}
