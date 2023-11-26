'use client'

import { selectApp } from '@/redux/generalSlices/appSlice';
import { useAppSelector } from '@/redux/hooks';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useAppSelector(selectApp);

  return <div className={theme}>{children}</div>
}

export default ThemeProvider;