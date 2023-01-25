import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { HiSun, HiMoon } from 'react-icons/hi';
import classNames from 'classnames';

// eslint-disable-next-line import/prefer-default-export
export function ThemeToggleButton({ className }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>loading...</>;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <HiSun
        className={classNames('h-5 w-5 text-yellow-400', className)}
        role="button"
        onClick={() => setTheme('light')}
      />
    );
  }
  return (
    <HiMoon
      className={classNames('h-5 w-5 text-gray-900', className)}
      role="button"
      onClick={() => setTheme('dark')}
    />
  );
}
