import dedent from 'dedent';
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
    <Container p={0} fluid key={index} style={{ width: '100%' }}>
      {label && <Text mb={5}>{label}</Text>}

      {codeBlock}
    </Container>
  );
}

export function renderCode(index: number, code: CodeComponent): ReactNode {
  const {
    data: { label, value, prism, overrideComponentProps },
  } = code;

  const dedentValue = dedent(value);

  if (prism) {
    const { language, noCopy, copyLabel, copiedLabel, highlightLines } = prism;

    const codeBlock = (
      <Prism
        withLineNumbers
        language={language}
        copyLabel={copyLabel}
        children={dedentValue}
        noCopy={noCopy || false}
        copiedLabel={copiedLabel}
        highlightLines={highlightLines}
      />
    );

    return render(index, codeBlock, label);
  }

  const codeBlock = (
    <Code block {...overrideComponentProps}>
      {dedentValue}
    </Code>
  );

  return render(index, codeBlock, label);
}
