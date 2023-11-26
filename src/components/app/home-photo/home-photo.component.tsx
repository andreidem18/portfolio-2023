import React, { useRef, useEffect } from 'react'
import styles from './home-photo.module.css';

const HomePhoto = () => {

  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxEffect = (e: MouseEvent) => {
      const image = imageRef.current;
      if (!image) return;
      
      const position = -0.8;
      const x = (window.innerWidth - e.pageX * position) / 90;
      const y = (window.innerHeight - e.pageY * position) / 90;

      image.style.backgroundPosition = `calc(50% - ${x - 16}px) calc(50% - ${y - 16}px)`;
    }
    window.addEventListener('mousemove', parallaxEffect);

    return () => {
      window.removeEventListener('mousemove', parallaxEffect);
    }
  }, [])
  
  return (
    <div className={styles.homePhotoContainer}>
      <div className={styles.homePhoto} ref={imageRef}></div>
    </div>
  )
}

export default HomePhoto