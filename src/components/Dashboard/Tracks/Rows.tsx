import { Badge, Anchor, Flex } from '@mantine/core';

import { tracks } from '@/assets/data/tracks';
import { formatDate } from '@/helpers/formatDate';

export function Rows() {
  const tracksLength = tracks.length;

  return (
    <>
      {tracks.map(({ authors, title, date, tags, youtubeId }, index) => (
        <tr key={`track-${index}`}>
          <td>{tracksLength - index}</td>

          <td>{title}</td>

          <td>
            <Flex
              gap='xs'
              wrap='wrap'
              align='center'
              direction='row'
              justify='center'
            >
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
            <Flex
              gap='xs'
              wrap='wrap'
              align='center'
              direction='row'
              justify='center'
            >
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

          <td>
            <Anchor
              href={`https://www.youtube.com/watch?v=${youtubeId}`}
              target='_blank'
            >
              listen on YouTube
            </Anchor>
          </td>
        </tr>
      ))}
    </>
  );
}
