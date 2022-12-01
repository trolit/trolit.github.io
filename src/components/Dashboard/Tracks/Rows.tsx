import { Badge, Anchor, Flex, FlexProps } from '@mantine/core';

import { TRACKS } from '@/assets/data/tracks';
import { formatDate } from '@/helpers/formatDate';
import { useCommonStyles } from '@/assets/styles/common';

export function Rows() {
  const tracksLength = TRACKS.length;

  const commonStyles = useCommonStyles();

  const flexProps: FlexProps = {
    gap: 'xs',
    wrap: 'wrap',
    align: 'center',
    direction: 'row',
  };

  return (
    <>
      {TRACKS.map(({ authors, title, date, tags, youtubeId }, index) => (
        <tr key={`track-${index}`}>
          <td className={commonStyles.textCenter}>{tracksLength - index}</td>

          <td>{title}</td>

          <td>
            <Flex {...flexProps}>
              {authors.map((author, authorIndex) => (
                <Badge
                  size='sm'
                  radius={0}
                  key={`track-${index}-author-${authorIndex}`}
                >
                  {author}
                </Badge>
              ))}
            </Flex>
          </td>

          <td>{formatDate(date)}</td>

          <td>
            <Flex {...flexProps}>
              {tags.map(({ text }, tagIndex) => (
                <Badge
                  size='sm'
                  radius={0}
                  key={`track-${index}-tag-${tagIndex}`}
                >
                  {text}
                </Badge>
              ))}
            </Flex>
          </td>

          <td className={commonStyles.textCenter}>
            <Anchor
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              target='_blank'
            >
              YouTube
            </Anchor>
          </td>
        </tr>
      ))}
    </>
  );
}
