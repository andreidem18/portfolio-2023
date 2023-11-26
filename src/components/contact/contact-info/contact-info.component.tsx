import React from 'react'
import styles from './contact-info.module.css';
import { contactData } from '@/data/contact.data';

const ContactInfo = () => {
  return (
    <ul className={styles.contactInfo}>
      {contactData.map(data => (
        <li key={data.name} className={styles.contactItem}>
          <div className={styles.icon}>
            {data.icon}
          </div>
          <p className={styles.contactValue}>
            {data.value}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default ContactInfo