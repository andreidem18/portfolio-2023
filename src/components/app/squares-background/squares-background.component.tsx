import React from 'react'
import styles from './squares-background.module.css';

const SquaresBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      { children }
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
      <div className={styles.cube}></div>
    </>
  )
}

export default SquaresBackground