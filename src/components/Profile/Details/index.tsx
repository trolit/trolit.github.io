import { Tabs, ScrollArea } from '@mantine/core';

import { VscPanel } from './VscPanel';
import { AboutPanel } from './AboutPanel';
import { LanguagesPanel } from './LanguagesPanel';
import { useProfileStyles } from '@/assets/styles/profile';
import { IconBrandVisualStudio } from '@tabler/icons';

export function Details() {
  const aboutPanel = {
    icon: null,
    name: 'About',
    children: AboutPanel,
  };

  const languagesPanel = {
    icon: null,
    name: 'Languages',
    children: LanguagesPanel,
  };

  const vscPanel = {
    icon: IconBrandVisualStudio,
    name: 'VSC',
    children: VscPanel,
  };

  const panels = [aboutPanel, languagesPanel, vscPanel];

  const { tabs, tabsList, tabsContent } = useProfileStyles();

  return (
    <Tabs defaultValue={aboutPanel.name.toLowerCase()} className={tabs}>
      <Tabs.List grow position='center' className={tabsList}>
        {panels.map(({ icon: Icon, name }) => (
          <Tabs.Tab
            rightSection={Icon ? <Icon size={20} /> : undefined}
            key={`tabs-list-${name}`}
            value={name.toLowerCase()}
            style={{ padding: 0 }}
          >
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
