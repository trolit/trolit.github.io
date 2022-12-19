import { Table, Container, ScrollArea } from '@mantine/core';

import { Rows } from './Rows';
import { DASHBOARD_PADDING } from '@/config';
import { useDashboardStyles } from '@/assets/styles/dashboard';

export function Tracks() {
  const { scrollArea } = useDashboardStyles();

  return (
    <ScrollArea className={scrollArea}>
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

                <th>Composer(s)</th>

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
    </ScrollArea>
  );
}
