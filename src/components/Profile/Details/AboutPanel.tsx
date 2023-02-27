import { Text, Anchor } from '@mantine/core';

export function AboutPanel() {
  return (
    <Text align='justify' fz='sm'>
      IT branch passionate. Started from playing around with{' '}
      <Anchor href='https://forums.alliedmods.net/showthread.php?t=62967' target='_blank'>
        Necro's blockmaker plugin
      </Anchor>{' '}
      through{' '}
      <Anchor href='https://gamebanana.com/mods/92118' target='_blank'>
        level design
      </Anchor>
      , making first steps in Unity 3.x, simple page (Przepisownik 2016). Active source code investigator since the end
      of year 2017. Visual Studio Code and Visual Studio are my favourite IDEs.
    </Text>
  );
}
