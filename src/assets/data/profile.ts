import { IconBrandDiscord } from '@tabler/icons-react';

import { ILink } from '@/interfaces/ILink';
import {
  JAVA_LANGUAGE,
  CSHARP_LANGUAGE,
  KOTLIN_LANGUAGE,
  TYPESCRIPT_LANGUAGE,
  JAVASCRIPT_LANGUAGE,
} from '@/assets/constants/predefined-languages';
import avatarImage from '@/assets/media/avatar.jpg';
import { IQuote } from '@/interfaces/profile/IQuote';
import { GITHUB_LINK, CUSTOM_LINK } from '@/assets/constants/predefined-links';

export const PATH_TO_AVATAR = avatarImage;

export const NAME = 'p4w31 !d21k0w541';

export const TITLE = 'software development';

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

export const VSC_PANEL_DATA = [
  {
    name: 'CSS class names IntelliSense in HTML',
    url: 'https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion',
  },

  {
    name: 'Better Comments',
    url: 'https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments',
  },

  {
    name: 'GitHub Theme',
    url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme',
  },

  {
    name: 'GitLens',
    url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
  },

  {
    name: 'Turbo Console Log',
    url: 'https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log',
  },

  {
    name: 'Auto Rename Tag',
    url: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag',
  },

  {
    name: 'Auto Close Tag',
    url: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag',
  },

  {
    name: 'Import Cost',
    url: 'https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost',
  },
];

export const LINKS: ILink[] = [
  GITHUB_LINK(),
  CUSTOM_LINK('https://discord.com', 'Discord (trol_IT#8002)', IconBrandDiscord),
];

export const QUOTE: IQuote = {
  author: 'Thomas Edison',
  text: "I have not failed. I just found 10,000 ways that won't work.",
};
