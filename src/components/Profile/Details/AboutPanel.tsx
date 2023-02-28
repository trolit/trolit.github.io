import { Text, Anchor } from '@mantine/core';

export function AboutPanel() {
  return (
    <Text align='justify' fz='sm'>
      Passionate about computers. Started from playing around with{' '}
      <Anchor href='https://forums.alliedmods.net/showthread.php?t=62967' target='_blank'>
        Necro's blockmaker plugin
      </Anchor>
      {' in 2008, '}
      through some{' '}
      <Anchor href='https://gamebanana.com/mods/92118' target='_blank'>
        level design
      </Anchor>{' '}
      experience, making first steps in{' '}
      <Anchor
        href='https://helion.pl/ksiazki/projektowanie-gier-w-srodowisku-unity-3-x-will-goldstone,prgun3.htm#format/e'
        target='_blank'
      >
        Unity 3.x
      </Anchor>{' '}
      , creating first page (
      <Anchor href='http://przepisownik2016.opx.pl/' target='_blank'>
        Przepisownik 2016
      </Anchor>
      ). Active source code investigator since the end of the year 2017. Visual Studio Code and Visual Studio are
      favourite IDEs.
    </Text>
  );
}
