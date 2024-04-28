import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-typescript';
import '@/assets/styles/prismjs/theme-one-dark.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min.css';
import 'prismjs/plugins/toolbar/prism-toolbar.min';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

export function PrimsLoader() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <div className='hidden'></div>;
}
