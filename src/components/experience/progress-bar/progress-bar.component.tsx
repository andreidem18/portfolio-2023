import React from 'react'
import styles from './progress-bar.module.css';

interface ProgressBarParams {
  percentaje: number;
}

const ProgressBar = ({ percentaje }: ProgressBarParams) => {
  return (
    <div className={styles.container}>
      <div 
        className={styles.percentaje}
        style={{ width: `${percentaje}%`}}
      ></div>
    </div>
  )
}

export default ProgressBar