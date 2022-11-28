import { Table, Container, ScrollArea } from '@mantine/core';

import { Rows } from './Rows';

export function Tracks() {
  return (
    <Container p={0} fluid style={{ overflow: 'hidden' }}>
      <ScrollArea>
        <Table
          striped
          withBorder
          fontSize='xs'
          captionSide='top'
          withColumnBorders
        >
          <thead>
            <tr>
              <th></th>

              <th>Title</th>

              <th>Authors</th>

              <th>Added on</th>

              <th>Tags</th>

              <th>YouTube</th>
            </tr>
          </thead>

          <tbody>
            <Rows />
          </tbody>
        </Table>
      </ScrollArea>
    </Container>
  );
}
