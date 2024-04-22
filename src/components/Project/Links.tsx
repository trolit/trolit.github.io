import { useState } from 'react';
import { ILink } from '@/types/ILink';
import { Accordion, AccordionItem, Chip, Link } from '@nextui-org/react';
import { ChevronsUpDownIcon, UnfoldVerticalIcon } from 'lucide-react';

interface IProps {
  identifier: string | number;

  value: ILink[];
}

export function Links({ identifier, value }: IProps) {
  const [areLinksVisible, expandLinks] = useState(false);

  return (
    <Accordion hideIndicator isCompact variant='light'>
      <AccordionItem
        key='1'
        aria-label='View more links'
        title={
          <Chip radius='sm' className='py-4' variant='dot' color={areLinksVisible ? 'default' : 'success'}>
            More links ({value.length})
          </Chip>
        }
        onPress={() => expandLinks(!areLinksVisible)}
      >
        <div className='flex flex-wrap w-full gap-4'>
          {value.map((link, index) => (
            <Link isExternal underline='always' key={`${identifier}-link-${index}`} href={link.url} size='md'>
              {link.name}
            </Link>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}
