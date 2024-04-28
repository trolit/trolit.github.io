import { RootState } from '@/store';
import { toggleTheme } from '@/store/general';
import { MoonIcon, SunIcon } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';

export function ThemeSwitch() {
  const dispatch = useDispatch();

  const isDarkThemeActive = useSelector((state: RootState) => state.general.theme === 'dark');

  return (
    <div
      aria-label='Switch theme'
      className='p-1 transition-opacity cursor-pointer touch-none tap-highlight-transparent hover:opacity-80'
      onClick={() => dispatch(toggleTheme())}
    >
      {isDarkThemeActive ? <SunIcon /> : <MoonIcon />}
    </div>
  );
}
