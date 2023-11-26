import { useEffect, useState } from 'react';

const useViewWidth = () => {

  const [ viewWidth, setViewWidth ] = useState(0);

  useEffect(() => {
    setViewWidth(window.innerWidth);
    const resize = () => setViewWidth(window.innerWidth);
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return viewWidth;
}

export default useViewWidth;
