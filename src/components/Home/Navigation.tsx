import { Listbox, ListboxItem } from '@nextui-org/react';
import { BookTextIcon, BotIcon, BugIcon, HeadsetIcon, Link2Icon } from 'lucide-react';
import {
  SOUNDTRACKS_ROUTE,
  SOUNDTRACKS_ROUTE_NAME,
  POSTS_ROUTE,
  POSTS_ROUTE_NAME,
  PROJECTS_ROUTE,
  PROJECTS_ROUTE_NAME,
} from '@/assets/constants/routes';

interface IProps {
  onAboutMePress: () => void;
}

export function Navigation({ onAboutMePress }: IProps) {
  const NAV_MENU_ITEMS = [
    {
      icon: BotIcon,
      name: 'About me',
      onPress: onAboutMePress,
    },

    {
      icon: BugIcon,
      href: PROJECTS_ROUTE,
      name: PROJECTS_ROUTE_NAME,
      description: 'List of open-source projects',
    },

    {
      icon: BookTextIcon,
      href: POSTS_ROUTE,
      name: POSTS_ROUTE_NAME,
      description: 'Collection of personal notes, recommendations etc.',
    },

    {
      icon: HeadsetIcon,
      href: SOUNDTRACKS_ROUTE,
      name: SOUNDTRACKS_ROUTE_NAME,
      description: 'Collection of favourite cinematic music',
    },
  ];

  return (
    <Listbox
      items={NAV_MENU_ITEMS}
      variant='bordered'
      aria-label='Actions'
      className='p-0 bg-slate-500/[.1] rounded-2xl'
    >
      {({ name, href, description, icon: Icon, onPress }) => (
        <ListboxItem
          key={name}
          href={href}
          description={description}
          textValue='-'
          className={`p-4 light text-white`}
          startContent={<Icon size={30} />}
          endContent={
            href ? (
              <div className='absolute right-2 top-2'>
                <Link2Icon />
              </div>
            ) : undefined
          }
          onPress={onPress}
        >
          <span className='text-4xl'>{name}</span>
        </ListboxItem>
      )}
    </Listbox>
  );
}
