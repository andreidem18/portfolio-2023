import React from 'react'
import styles from './page-title.module.css';

interface PageTitleParams {
  title: string;
  subtitle: string;
}

const PageTitle = ({ title, subtitle }: PageTitleParams) => {
  return (
    <div className={styles.pageTitle}>
      <h1>{title}</h1>
      <div className={styles.pageSubtitle}>
        <h4>{subtitle}</h4>
      </div>
    </div>
  )
}

export default PageTitle
