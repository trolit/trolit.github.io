import { Group, Anchor } from '@mantine/core';

export function VscPanel() {
  const config = [
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
  ];

  return (
    <>
      <Group position='center'>
        {config.map(({ name, url }) => (
          <Anchor key={name} size='sm' href={url} target='_blank'>
            {name}
          </Anchor>
        ))}
      </Group>
    </>
  );
}
