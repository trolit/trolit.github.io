import { ReactNode } from 'react';

import { Header } from '../components';
import { THEME_CLASSNAME } from '@/config';

export function renderHeader(index: number, header: Header): ReactNode {
  const {
    data: { value, className },
  } = header;

  return (
    <div
      key={index}
      className={`tracking-tight font-semibold ${THEME_CLASSNAME} text-[3rem] bg-clip-text text-transparent bg-gradient-to-b ${className}`}
    >
      {value}
    </div>
  );
}
