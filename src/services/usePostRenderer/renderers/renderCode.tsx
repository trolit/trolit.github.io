import { ReactNode } from 'react';
import { Prism } from '@mantine/prism';
import { Text, Container, Code } from '@mantine/core';

import { Code as CodeComponent } from '../components';

function render(
  index: number,
  codeBlock: ReactNode,
  label?: string,
): ReactNode {
  return (
    <Container
      p={0}
      fluid
      key={index}
      style={{ width: '100%', overflow: 'hidden' }}
    >
      {label && <Text mb={5}>{label}</Text>}

      {codeBlock}
    </Container>
  );
}

export function renderCode(index: number, code: CodeComponent): ReactNode {
  const {
    data: { label, value, prism, overrideComponentProps },
  } = code;

  if (prism) {
    const { language, noCopy, copyLabel, copiedLabel, highlightLines } = prism;

    const codeBlock = (
      <Prism
        withLineNumbers
        children={value}
        language={language}
        copyLabel={copyLabel}
        noCopy={noCopy || false}
        copiedLabel={copiedLabel}
        highlightLines={highlightLines}
      />
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
