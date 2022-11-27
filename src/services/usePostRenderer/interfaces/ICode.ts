import type { Language } from 'prism-react-renderer';
import { CodeProps, MantineColor } from '@mantine/core';

interface IPrism {
  language: Language;

  noCopy?: boolean;

  copyLabel?: string;

  copiedLabel?: string;

  highlightLines?: Record<
    string,
    {
      color: MantineColor;
      label?: string;
    }
  >;
}

export interface ICode {
  label?: string;

  value: string;

  prism?: IPrism;

  overrideComponentProps?: CodeProps;
}
