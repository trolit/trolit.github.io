import dedent from 'dedent';
import { ReactNode } from 'react';

import { Code as CodeComponent } from '../components';

export function renderCode(index: number, code: CodeComponent): ReactNode {
  const {
    data: { lineNumbers, language, value },
  } = code;

  const dedentValue = dedent(value);

  return (
    <div key={index}>
      <pre
        className={`language-${language} ${
          lineNumbers ? 'line-numbers' : ''
        } rounded-xl bg-transparent overflow-x-scroll`}
      >
        <code className={`language-${language}`}>{dedentValue}</code>
      </pre>
    </div>
  );
}
