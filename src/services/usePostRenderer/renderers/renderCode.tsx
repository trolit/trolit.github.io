import { ReactNode } from 'react';
import { Text, Container, Code } from '@mantine/core';
import { Prism } from '@mantine/prism';

import { Code as CodeComponent } from '../components';

function render(
  index: number,
  codeBlock: ReactNode,
  label?: string,
): ReactNode {
  return (
    <Container fluid p={0} key={index} style={{ width: '100%' }}>
      {label && <Text mb={5}>{label}</Text>}

      {codeBlock}
    </Container>
  );
}

export function renderCode(index: number, code: CodeComponent): ReactNode {
  const {
    data: {
      label,
      value,
      language,
      overrideComponentProps,
      overridePrismProps,
    },
  } = code;

  if (language) {
    const codeBlock = (
      <Prism withLineNumbers language={language} {...overridePrismProps}>
        {value}
      </Prism>
    );

    return render(index, codeBlock, label);
  }

  const codeBlock = (
    <Code block {...overrideComponentProps}>
      {value}
    </Code>
  );

  return render(index, codeBlock, label);
}
