import { ReactNode } from 'react';
import { Text, Anchor } from '@mantine/core';
import reactStringReplace from 'react-string-replace';

import { ABOUT_ME_PANEL_DATA } from '@/assets/data/profile';

function getTextWithAnchors() {
  const { text, links } = ABOUT_ME_PANEL_DATA;

  let filledText: ReactNode[] = [];

  for (const { match, url } of links) {
    filledText = reactStringReplace(filledText.length ? filledText : text, match, () => (
      <Anchor key={`${match}-url`} href={url} target='_blank'>
        {match}
      </Anchor>
    )) as ReactNode[];
  }

  return filledText;
}

export function AboutPanel() {
  return (
    <Text align='justify' fz='sm'>
      {getTextWithAnchors()}
    </Text>
  );
}
