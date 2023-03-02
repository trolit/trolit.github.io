import { ILink } from '@/interfaces/ILink';
import {
  JAVA_LANGUAGE,
  CSHARP_LANGUAGE,
  KOTLIN_LANGUAGE,
  TYPESCRIPT_LANGUAGE,
  JAVASCRIPT_LANGUAGE,
} from '@/assets/constants/predefined-languages';
import { IQuote } from '@/interfaces/profile/IQuote';
import { GITHUB_LINK } from '@/assets/constants/predefined-links';

export const PATH_TO_AVATAR = require('@/assets/media/avatar.jpg');

export const NAME = 'p4w31 !d21k0w541';

export const TITLE = 'code investigator';

export const ABOUT_ME_PANEL_DATA = {
  text: `Passionate about computers. Started from playing around with Necro's blockmaker plugin in 2008, through some level design, making first steps in Unity 3.x, creating first page (Przepisownik 2016). Active source code investigator since the end of the year 2017. Visual Studio Code and Visual Studio stand for favourite IDEs.`,

  links: [
    {
      match: `Necro's blockmaker plugin`,
      url: 'https://forums.alliedmods.net/showthread.php?t=62967',
    },
    {
      match: 'level design',
      url: 'https://gamebanana.com/mods/92118',
    },
    {
      match: 'Unity 3.x',
      url: 'https://helion.pl/ksiazki/projektowanie-gier-w-srodowisku-unity-3-x-will-goldstone,prgun3.htm#format/e',
    },
    {
      match: 'Przepisownik 2016',
      url: 'http://przepisownik2016.opx.pl/',
    },
  ],
};

export const LANGUAGES_PANEL_DATA = [
  {
    title: 'favourite',
    data: [CSHARP_LANGUAGE, TYPESCRIPT_LANGUAGE, JAVASCRIPT_LANGUAGE],
  },
  {
    title: 'also worked with',
    data: [KOTLIN_LANGUAGE, JAVA_LANGUAGE],
  },
];

export const LINKS: ILink[] = [GITHUB_LINK()];

export const QUOTE: IQuote = {
  author: 'Thomas Edison',
  text: "I have not failed. I just found 10,000 ways that won't work.",
};
