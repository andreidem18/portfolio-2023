import React from 'react'
import styles from './footer.module.css';
import socialData from '@/data/social.data';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.socialDataList}>
        {socialData.map(social => (
          <li className={styles.socialDataItem} key={social.name}>
            <a href={social.link} target="_blank">
              {social.name}
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.copyright}>
        © 2023 All rights reserved.
      </p>
    </div>
  )
}

export default Footer