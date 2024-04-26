import { ReactNode } from 'react';
import reactStringReplace from 'react-string-replace';

import { Paragraph } from '../components';
import { IReferences } from '../interfaces';
import { Link } from '@nextui-org/react';

function renderComponent(index: number, value: ReactNode | ReactNode[], paragraph: Paragraph) {
  const {
    data: { className },
  } = paragraph;

  return (
    <div key={index} className={`leading-relaxed text-justify indent-6 text-wrap ${className} text-xl`}>
      {value}
    </div>
  );
}

export function renderParagraphWithReferences(index: number, paragraph: Paragraph, references: IReferences) {
  const {
    data: { value },
  } = paragraph;

  const { items, renderInParagraphs } = references;

  if (!items?.length || !renderInParagraphs || !items.some((item) => item.match)) {
    return renderComponent(index, value, paragraph);
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
      <Link
        isExternal
        key={`paragraph${index}-ref${getRandomId()}`}
        href={url}
        color='secondary'
        className='text-xl indent-0'
      >
        {match}
      </Link>
    )) as ReactNode[];
  }

  return renderComponent(index, replacedValue, paragraph);
}

export function renderParagraph(index: number, paragraph: Paragraph): ReactNode {
  const {
    data: { value },
  } = paragraph;

  return renderComponent(index, value, paragraph);
}
