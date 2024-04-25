import { ReactNode } from 'react';

import { Header } from '../components';

export function renderHeader(index: number, header: Header): ReactNode {
  const {
    data: { value, className },
  } = header;

  return (
    <div
      key={index}
      className={`tracking-tight font-semibold from-indigo-500 to-indigo-600 text-[3rem] bg-clip-text text-transparent bg-gradient-to-b ${className}`}
    >
      {value}
    </div>
  );
}
