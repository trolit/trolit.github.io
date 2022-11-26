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
    <Container p={0} key={index}>
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
    const { language, overrideProps } = prism;

    const codeBlock = (
      <Prism
        withLineNumbers
        children={value}
        language={language}
        {...overrideProps}
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
