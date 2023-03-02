import { Tabs, ScrollArea } from '@mantine/core';

import { VscPanel } from './VscPanel';
import { AboutPanel } from './AboutPanel';
import { LanguagesPanel } from './LanguagesPanel';
import { useProfileStyles } from '@/assets/styles/profile';

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

  const { tabs, tabsList, tabsContent } = useProfileStyles();

  return (
    <Tabs defaultValue={aboutPanel.name.toLowerCase()} className={tabs}>
      <Tabs.List grow position='center' className={tabsList}>
        {panels.map(({ name }) => (
          <Tabs.Tab key={`tabs-list-${name}`} value={name.toLowerCase()}>
            {name}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      <ScrollArea className={tabsContent}>
        {panels.map(({ name, children: Children }) => (
          <Tabs.Panel key={`tabs-panel-${name}`} value={name.toLowerCase()} children={<Children />} p='lg' />
        ))}
      </ScrollArea>
    </Tabs>
  );
}
