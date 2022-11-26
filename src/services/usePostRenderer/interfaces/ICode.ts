import { CodeProps } from '@mantine/core';
import type { Language } from 'prism-react-renderer';
import { PrismProps } from '@mantine/prism/lib/Prism/Prism';

interface IPrism {
  language: Language;

  overrideProps?: PrismProps;
}

export interface ICode {
  label?: string;

  value: string;

  prism?: IPrism;

  overrideComponentProps?: CodeProps;
}
