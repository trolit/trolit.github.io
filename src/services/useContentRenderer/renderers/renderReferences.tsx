import { ReactNode } from 'react';

import { IReferences } from '../interfaces';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { ExternalLinkIcon } from 'lucide-react';
import { renderHeader } from './renderHeader';
import { Header } from '../components';

export function renderReferences(references: IReferences): ReactNode {
  const { items } = references;

  if (!items?.length) {
    return;
  }

  const filteredItems = items.filter((item) => !item.excludeFromReferencesComponent);

  return (
    <div>
      {renderHeader(9999, new Header({ value: 'References' }))}

      <Listbox items={filteredItems} color='secondary'>
        {({ title, author, url }) => (
          <ListboxItem
            key={title}
            className='p-4'
            description={author}
            href={url}
            target='_blank'
            startContent={<ExternalLinkIcon />}
          >
            <div className='text-wrap'>{title}</div>
          </ListboxItem>
        )}
      </Listbox>
    </div>
  );
}
