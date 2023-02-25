import { Table, Container, ScrollArea } from '@mantine/core';
import { useState } from 'react';

import { Rows } from './Rows';
import { DASHBOARD_PADDING } from '@/config';
import { AUTHORS } from '@/assets/data/tracks';
import { useDashboardStyles } from '@/assets/styles/dashboard';
import { CheckboxGroupFilterPopover } from '@/components/Dashboard/common/filter-popovers/CheckboxGroup';

export function Tracks() {
  const { scrollArea } = useDashboardStyles();

  const [composersFilter, setComposersFilter] = useState<string[]>([]);

  return (
    <ScrollArea className={scrollArea}>
      <Container p={DASHBOARD_PADDING} fluid>
        <ScrollArea>
          <Table striped withBorder fontSize='xs' captionSide='top' withColumnBorders>
            <thead>
              <tr>
                <th></th>

                <th>Title</th>

                <th>
                  Composer(s)
                  <CheckboxGroupFilterPopover
                    value={composersFilter}
                    options={AUTHORS}
                    onValueUpdate={setComposersFilter}
                  />
                </th>

                <th>Tag(s)</th>

                <th></th>
              </tr>
            </thead>

            <tbody>
              <Rows composersFilter={composersFilter} />
            </tbody>
          </Table>
        </ScrollArea>
      </Container>
    </ScrollArea>
  );
}
