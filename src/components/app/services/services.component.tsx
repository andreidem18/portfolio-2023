import BlockTitle from '@/components/_shared/block-title/block-title.component'
import useTranslate from '@/translations/useTranslate'
import React from 'react'
import styles from './services.module.css';
import { fromBottomAnimation } from '@/components/_shared/animations/on-scroll/from-bottom';
import { motion } from 'framer-motion';
import { services } from '@/data/services.data';

const Services = () => {

  const translate = useTranslate();

  return (
    <div className={styles.services}>
      <BlockTitle title={translate("servicesTitle")}/>
      <ul className={`flex ${styles.servicesList}`}>
        {services.map((service, i) => (
          <motion.li 
            key={service.title} 
            className={`col-xs-12 col-sm-6 ${styles.serviceBlock}`}
            {...fromBottomAnimation({delay: (i+1)*0.3})}
          >
            <div className={styles.serviceIcon}>
              {service.icon}
            </div>
            <div className={styles.serviceText}>
              <strong>{service.title}</strong>
              <p>{translate(service.description)}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Services