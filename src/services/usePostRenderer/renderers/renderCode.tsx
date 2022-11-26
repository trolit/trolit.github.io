import { ReactNode } from 'react';
import { Code } from '@mantine/core';
import { Prism } from '@mantine/prism';

import { Code as CodeComponent } from '../components';

export function renderCode(index: number, code: CodeComponent): ReactNode {
  const {
    data: { value, language, overrideComponentProps, overridePrismProps },
  } = code;

  if (language) {
    return (
      <Prism key={index} language={language} {...overridePrismProps}>
        {value}
      </Prism>
    );
  }

  return (
    <Code key={index} {...overrideComponentProps}>
      {value}
    </Code>
  );
}
