import {
  TablerIcon,
  IconWorldWww,
  IconAppWindow,
  IconBrandGithub,
} from '@tabler/icons';

export const usePredefinedLinks = () => {
  return {
    githubLink: (target: string) => {
      return {
        name: 'GitHub',
        icon: IconBrandGithub,
        url: `https://github.com/${target}`,
      };
    },

    previewLink: (target: string) => {
      return {
        name: 'Demo',
        icon: IconAppWindow,
        url: target,
      };
    },

    wwwLink: (target: string, name: string) => {
      return {
        name,
        icon: IconWorldWww,
        url: target,
      };
    },

    customLink: (target: string, name: string, icon: TablerIcon) => {
      return {
        name,
        icon,
        url: target,
      };
    },
  };
};
