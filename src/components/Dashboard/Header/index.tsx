import {
  Header,
  Group,
  Button,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  UnstyledButton,
} from '@mantine/core';

import { Link } from './NavigationCard/Link';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons';
import { NavigationCard } from './NavigationCard';
import { projects } from '@/assets/data/dashboard';
import { useStyles } from '@/components/Dashboard/styles';

export function MegaHeader() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const { classes, theme } = useStyles();

  const projectLinks = projects.links || [];

  const openSourceTabLinks = projectLinks.map((item) => <Link item={item} />);

  return (
    <Box>
      <Header height={60} px='md'>
        <Group position='apart' sx={{ height: '100%' }}>
          <Group
            spacing={0}
            sx={{ height: '100%' }}
            className={classes.hiddenMobile}
          >
            <NavigationCard title='Open source' links={openSourceTabLinks} />

            <a href='#' className={classes.link}>
              Posts
            </a>

            <a href='#' className={classes.link}>
              Tracks
            </a>
          </Group>

          <Group>
            <Button variant='default'>Log in</Button>

            <Button>Sign up</Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        size='100%'
        padding='md'
        zIndex={1000000}
        title='Navigation'
        opened={drawerOpened}
        onClose={closeDrawer}
        className={classes.hiddenDesktop}
      >
        <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx='-md'>
          <Divider
            my='sm'
            color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
          />

          <a href='#' className={classes.link}>
            Home
          </a>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component='span' mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color={theme.fn.primaryColor()} />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{openSourceTabLinks}</Collapse>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
