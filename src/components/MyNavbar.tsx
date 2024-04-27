import {
  Link,
  Navbar,
  NavbarItem,
  NavbarMenu,
  NavbarBrand,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenuToggle,
  Avatar,
} from '@nextui-org/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  HOME_ROUTE,
  POSTS_ROUTE,
  PROJECTS_ROUTE,
  SOUNDTRACKS_ROUTE,
  POSTS_ROUTE_NAME,
  PROJECTS_ROUTE_NAME,
  SOUNDTRACKS_ROUTE_NAME,
} from '@/assets/constants/routes';
import { DISPLAY_NAME } from '@/data/user';
import { ThemeSwitch } from '@/components/common/ThemeSwitch';
import { NAVBAR_HEIGHT, NAVBAR_MENU_CLASSNAME, NAVBAR_MENU_LINK_CLASSNAME, THEME_CLASSNAME } from '@/config';

const MENU_ITEMS = [
  {
    name: PROJECTS_ROUTE_NAME,
    url: PROJECTS_ROUTE,
  },
  {
    name: POSTS_ROUTE_NAME,
    url: POSTS_ROUTE,
  },
  {
    name: SOUNDTRACKS_ROUTE_NAME,
    url: SOUNDTRACKS_ROUTE,
  },
];

export function MyNavbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      position='static'
      height={NAVBAR_HEIGHT}
      className={`text-white ${THEME_CLASSNAME}`}
    >
      <NavbarBrand>
        <Link href={HOME_ROUTE} className='text-pretty tracking-tight font-semibold text-[1rem]'>
          <Avatar src='/src/assets/media/main.jpg' className='mr-2 w-9 h-9' />

          <h1>{DISPLAY_NAME}</h1>
        </Link>
      </NavbarBrand>

      <NavbarContent className='hidden gap-4 sm:flex'>
        {MENU_ITEMS.map((item, index) => (
          <NavbarItem key={`navbar-link-${index}`}>
            <Link
              isBlock
              color='foreground'
              isDisabled={pathname === item.url}
              className={`tracking-tight inline font-semibold text-pretty lowercase ${
                pathname === item.url ? 'border-b-2' : ''
              }`}
              href={item.url}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />

        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu className={NAVBAR_MENU_CLASSNAME}>
        {MENU_ITEMS.map((item, index) => (
          <NavbarMenuItem key={`navbar-menu-link-${index}`}>
            <Link
              className={`w-full text-2xl ${NAVBAR_MENU_LINK_CLASSNAME}`}
              href={item.url}
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
