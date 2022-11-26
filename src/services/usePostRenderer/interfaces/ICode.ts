import { CodeProps } from '@mantine/core';
import type { Language } from 'prism-react-renderer';
import { PrismProps } from '@mantine/prism/lib/Prism/Prism';

export interface ICode {
  value: string;

  language?: Language;

  overridePrismProps?: PrismProps;

  overrideComponentProps?: CodeProps;
}
