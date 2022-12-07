import { Table, Container, ScrollArea } from '@mantine/core';

import { Rows } from './Rows';
import { DASHBOARD_PADDING } from '@/config';

export function Tracks() {
  return (
    <Container p={DASHBOARD_PADDING} fluid>
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

              <th>Author(s)</th>

              <th>Added on</th>

              <th>Tag(s)</th>

              <th></th>
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
