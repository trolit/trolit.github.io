import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { Box, Center, Collapse, UnstyledButton } from '@mantine/core';

import { Link } from './Link';
import { primaryColor } from '@/assets/data/common';
import { ILink } from '@/interfaces/dashboard/ILink';
import { useDashboardStyles } from '@/assets/styles/dashboard';

interface IProps {
  name: string;

  links: ILink[];
}

export function NavigationCollapse({ name, links }: IProps) {
  const dashboardStyles = useDashboardStyles();

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  return (
    <div>
      <UnstyledButton className={dashboardStyles.link} onClick={toggleLinks}>
        <Center inline>
          <Box component='span' mr={5}>
            {name}
          </Box>

          <IconChevronDown size={16} color={primaryColor} />
        </Center>
      </UnstyledButton>

      <Collapse in={linksOpened}>
        {links.map((item) => (
          <Link item={item} key={item.name} />
        ))}
      </Collapse>
    </div>
  );
}
