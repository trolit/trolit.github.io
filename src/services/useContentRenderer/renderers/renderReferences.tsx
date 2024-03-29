import { ReactNode } from 'react';
import { IconPoint } from '@tabler/icons-react';
import { Title, Divider, Text, Container, List, Anchor } from '@mantine/core';

import { IReferences } from '../interfaces';

export function renderReferences(references: IReferences): ReactNode {
  const { items } = references;

  if (!items?.length) {
    return;
  }

  const filteredItems = items.filter((item) => !item.excludeFromReferencesComponent);

  const renderedListItems = filteredItems.map(({ title, author, url }, itemIndex) => {
    return (
      <List.Item key={`reference-item-${itemIndex + 1}`}>
        {author && <Text fw={700}>{author}</Text>}

        <Text c='dimmed' fs='italic' lineClamp={1} style={{ maxWidth: '500px' }}>
          {title}
        </Text>

        <Anchor href={url} target='_blank' rel='noreferrer'>
          open in new tab
        </Anchor>
      </List.Item>
    );
  });

  return (
    <Container p={0} fluid style={{ width: '100%' }}>
      <Title>References</Title>

      <Divider />

      <List center mt={25} size='sm' spacing='xl' icon={<IconPoint size={25} />}>
        {renderedListItems}
      </List>
    </Container>
  );
}
