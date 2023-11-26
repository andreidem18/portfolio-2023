import BlockTitle from '@/components/_shared/block-title/block-title.component'
import useTranslate from '@/translations/useTranslate'
import React from 'react'
import styles from './curriculum.module.css';
import { educationData, experienceData } from './curriculumData';
import { motion } from 'framer-motion';
import { fromLeftAnimationScroll, fromRightAnimationScroll } from '@/components/_shared/animations/on-scroll/from-sides';

const Curriculum = () => {

  const translate = useTranslate();

  return (
    <div className="flex">

      <motion.div {...fromLeftAnimationScroll} className="col-xs-12 col-sm-6 mb-3">
        <BlockTitle title={translate("educationTitle")} />

        <ul className={styles.timeline}>
          {educationData.map(edu => (
            <li key={edu.place} className={styles.timelineItem}>
              <div className={styles.itemHeader}>
                <div className={styles.itemPeriod}>{edu.period}</div>
                <span className={styles.itemPlace}>{edu.place}</span>
              </div>
              <h5 className={styles.itemTitle}>{translate(edu.title)}</h5>
              <p>{translate(edu.description)}</p>
            </li>
          ))}
        </ul>
      </motion.div>

      <motion.div {...fromRightAnimationScroll} className="col-xs-12 col-sm-6">
        <BlockTitle title={translate("experienceTitle")} />

        <ul className={styles.timeline}>
          {experienceData.map(exp => (
            <li key={exp.place} className={styles.timelineItem}>
              <div className={styles.itemHeader}>
                <div className={styles.itemPeriod}>{exp.period}</div>
                <span className={styles.itemPlace}>{exp.place}</span>
              </div>
              <h5 className={styles.itemTitle}>{translate(exp.title)}</h5>
              <p>{translate(exp.description)}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default Curriculum