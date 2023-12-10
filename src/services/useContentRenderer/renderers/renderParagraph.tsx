import { ReactNode } from 'react';
import reactStringReplace from 'react-string-replace';
import { Anchor, Text, TextProps } from '@mantine/core';

import { Paragraph } from '../components';
import { IReferences } from '../interfaces';

function renderComponent(index: number, value: ReactNode | ReactNode[], overrideComponentProps: TextProps | undefined) {
  return (
    <Text key={index} align='justify' {...overrideComponentProps}>
      {value}
    </Text>
  );
}

export function renderParagraphWithReferences(index: number, paragraph: Paragraph, references: IReferences) {
  const {
    data: { value, overrideComponentProps },
  } = paragraph;

  const { items, renderInParagraphs } = references;

  if (!items?.length || !renderInParagraphs || !items.some((item) => item.match)) {
    return renderComponent(index, value, overrideComponentProps);
  }

  let replacedValue: ReactNode[] = [];

  const getRandomId = () => {
    return Math.random().toString(6).substring(2, 10);
  };

  for (const { match, url } of items) {
    if (!match) {
      continue;
    }

    replacedValue = reactStringReplace(replacedValue.length ? replacedValue : value, match, (match: string) => (
      <Anchor key={`paragraph${index}-ref${getRandomId()}`} href={url} target='_blank'>
        {match}
      </Anchor>
    )) as ReactNode[];
  }

  return renderComponent(index, replacedValue, overrideComponentProps);
}

export function renderParagraph(index: number, paragraph: Paragraph): ReactNode {
  const {
    data: { value, overrideComponentProps },
  } = paragraph;

  return renderComponent(index, value, overrideComponentProps);
}
