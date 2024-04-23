import { X } from 'lucide-react';
import { Button, Link } from '@nextui-org/react';

interface IProps {
  onClose: () => void;
}

export function AboutMe({ onClose }: IProps) {
  return (
    <div className='w-full md:max-w-[45vw]'>
      <div className='grid gap-4 p-4 mx-auto shadow-xl bg-slate-800/[.80] text-slate-400 text-pretty'>
        <div className='flex items-center justify-between'>
          <h3 className='text-xl font-semibold text-white'>About me</h3>

          <Button isIconOnly color='default' aria-label='Close' variant='light' onClick={onClose}>
            <X size={30} />
          </Button>
        </div>

        <p className='text-justify text-sm/6'>
          Experimenting with Nero's&nbsp;
          <Link isExternal href='https://forums.alliedmods.net/showthread.php?t=62967' color='warning'>
            blockmaker
          </Link>
          &nbsp;script in childhood inspired me to focus on IT sector. I made my first steps in Unity 3.x and XNA Game
          Studio (when Windows Phone was a thing), creating first website with anchors to food recipes&nbsp;
          <Link isExternal href='http://przepisownik2016.opx.pl/' color='warning'>
            Przepisownik 2016
          </Link>
          &nbsp;(with gridster.js - again Windows Phone) and then spending some time on level design, music/video
          editing.
        </p>

        <p className='text-justify text-sm/6'>
          In 2017 I've met git and OOP (through C#) and that pushed me towards software development. Thanks to
          opportunity to work on DevOps tasks (e.g. Docker Swarm, Bash scripts) and learning about Security (e.g.
          Keylogger, RSA) another areas became interesting for me to explore further.
        </p>
      </div>
    </div>
  );
}
