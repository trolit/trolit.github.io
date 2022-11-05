import { MantineProvider } from '@mantine/core';
import Demo from '../test';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>

      <Demo/>
    </MantineProvider>
  );
}