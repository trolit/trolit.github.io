import { useState } from 'react';
import { GitBranchIcon, LinkIcon } from 'lucide-react';
import { Accordion, AccordionItem, Button, Link } from '@nextui-org/react';

import { ILink } from '@/types/ILink';
import { THEME_CLASSNAME } from '@/config';
import { getYouTubeUrl } from '@/helpers/getYouTubeUrl';

interface IProps {
  identifier: string | number;

  value: ILink[];

  repositoryUrl?: string;

  youTubeId?: string;
}

export function Links({ identifier, value, repositoryUrl, youTubeId }: IProps) {
  const [areLinksVisible, expandLinks] = useState(false);

  const fixedValue = [...value];

  if (youTubeId) {
    fixedValue.unshift({ name: 'Preview', url: getYouTubeUrl(youTubeId).toString() });
  }

  if (repositoryUrl) {
    fixedValue.unshift({ name: 'Repository', url: repositoryUrl });
  }

  return (
    <Accordion hideIndicator variant='splitted' className='h-full'>
      <AccordionItem
        key='1'
        startContent={<LinkIcon />}
        aria-label='View more links'
        title={<span>References ({fixedValue.length})</span>}
        onPress={() => expandLinks(!areLinksVisible)}
      >
        <div className='flex flex-wrap w-full gap-4'>
          {fixedValue.map((link, index) => (
            <Button
              as={Link}
              isExternal
              key={`${identifier}-link-${index}`}
              href={link.url}
              className={`${THEME_CLASSNAME} text-white`}
              startContent={<GitBranchIcon size={20} />}
            >
              {link.name}
            </Button>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}
