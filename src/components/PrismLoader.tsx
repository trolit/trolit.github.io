import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-tomorrow.min.css';

export function PrimsLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <div className='hidden'></div>;
}
