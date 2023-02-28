import { Tabs } from '@mantine/core';

import { VscPanel } from './VscPanel';
import { AboutPanel } from './AboutPanel';
import { LanguagesPanel } from './LanguagesPanel';

export function Details() {
  const aboutPanel = {
    name: 'About',
    children: AboutPanel,
  };

  const languagesPanel = {
    name: 'Languages',
    children: LanguagesPanel,
  };

  const vscPanel = {
    name: 'VSC',
    children: VscPanel,
  };

  const panels = [aboutPanel, languagesPanel, vscPanel];

  return (
    <Tabs defaultValue={aboutPanel.name.toLowerCase()} h={240}>
      <Tabs.List grow position='center' h={40}>
        {panels.map(({ name }) => (
          <Tabs.Tab key={`tabs-list-${name}`} value={name.toLowerCase()}>
            {name}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {panels.map(({ name, children: Children }) => (
        <Tabs.Panel
          key={`tabs-panel-${name}`}
          value={name.toLowerCase()}
          children={<Children />}
          p='lg'
          pt='xs'
          h={180}
        />
      ))}
    </Tabs>
  );
}
