import { ReactNode } from 'react';
import { Text, TextProps } from '@mantine/core';
import reactStringReplace from 'react-string-replace';

import { Paragraph } from '../components';
import { IReferences } from '../interfaces';

function renderComponent(
  index: number,
  value: ReactNode | ReactNode[],
  overrideComponentProps: TextProps | undefined,
) {
  return (
    <Text key={index} align='justify' {...overrideComponentProps}>
      {value}
    </Text>
  );
}

export function renderParagraphWithReferences(
  index: number,
  paragraph: Paragraph,
  references: IReferences,
) {
  const {
    data: { value, overrideComponentProps },
  } = paragraph;

  const { items } = references;

  if (!items?.length || !items.some((item) => item.match)) {
    return renderComponent(index, value, overrideComponentProps);
  }

  let replacedValue: ReactNode[] = [];

  for (const { match, src } of items) {
    replacedValue = reactStringReplace(
      replacedValue.length ? replacedValue : value,
      match,
      (match: string, index: number) => (
        <a
          key={`${match}-${index}`}
          href={src}
          target='_blank'
          rel='noreferrer'
          style={{ textDecoration: 'none' }}
        >
          {match}
        </a>
      ),
    ) as ReactNode[];
  }

  return renderComponent(index, replacedValue, overrideComponentProps);
}

export function renderParagraph(
  index: number,
  paragraph: Paragraph,
): ReactNode {
  const {
    data: { value, overrideComponentProps },
  } = paragraph;

  return renderComponent(index, value, overrideComponentProps);
}
