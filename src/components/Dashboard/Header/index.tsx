import {
  Box,
  Group,
  Header,
  Divider,
  Center,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  UnstyledButton,
} from '@mantine/core';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';
import { Toolbar } from './Toolbar';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { NavigationCard } from './NavigationCard';
import { projects } from '@/assets/data/dashboard';
import { primaryColor, headerHeight } from '@/assets/data/common';
import { useCommonStyles } from '@/assets/styles/common';
import { Link } from '@/components/Dashboard/Header/Link';
import { useDashboardStyles } from '@/assets/styles/dashboard';

export function MegaHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const commonStyles = useCommonStyles();

  const dashboardStyles = useDashboardStyles();

  const colorScheme = useSelector(
    (state: RootState) => state.preferences.colorScheme,
  );

  const projectsLinks = projects.links?.map((item, index) => (
    <Link item={item} key={index} />
  ));

  return (
    <Box>
      <Header height={headerHeight} className={dashboardStyles.header}>
        <Group position='apart' className={commonStyles.h100}>
          <Group
            spacing={0}
            className={`${commonStyles.hiddenMobile} ${commonStyles.h100} `}
          >
            {projectsLinks && (
              <NavigationCard title='Open source' links={projectsLinks} />
            )}

            <a href='#' className={dashboardStyles.link}>
              Posts
            </a>

            <a href='#' className={dashboardStyles.link}>
              Tracks
            </a>
          </Group>

          <Burger
            px='md'
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={commonStyles.hiddenDesktop}
          />

          <Toolbar />
        </Group>
      </Header>

      <Drawer
        size='100%'
        padding='md'
        zIndex={1000000}
        title='Navigation'
        opened={drawerOpened}
        onClose={closeDrawer}
        className={commonStyles.hiddenDesktop}
      >
        <ScrollArea sx={{ height: `calc(100vh - ${headerHeight}px)` }} mx='-md'>
          <Divider
            my='sm'
            color={colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <a href='#' className={dashboardStyles.link}>
            Home
          </a>

          {projectsLinks && (
            <div>
              <UnstyledButton
                className={dashboardStyles.link}
                onClick={toggleLinks}
              >
                <Center inline>
                  <Box component='span' mr={5}>
                    Features
                  </Box>

                  <IconChevronDown size={16} color={primaryColor} />
                </Center>
              </UnstyledButton>

              <Collapse in={linksOpened}>{projectsLinks}</Collapse>
            </div>
          )}
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
