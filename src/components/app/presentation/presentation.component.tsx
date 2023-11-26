import React from 'react';
import styles from './presentation.module.css';
import useTranslate from '@/translations/useTranslate';
import HomePhoto from '../home-photo/home-photo.component';
import SquaresBackground from '../squares-background/squares-background.component';
import { motion } from 'framer-motion';
import { fromLeftAnimationScroll, fromRightAnimationScroll } from '@/components/_shared/animations/on-scroll/from-sides';
import socialData from '../../../data/social.data';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';

const Presentation = () => {

  const translate = useTranslate();
  const router = useRouter();

  const socialDataFiltered = socialData.filter(s => s.name !== 'Instagram');
  const { language } = useAppSelector(state => state.app);

  const getCvRoute = () => {
    if (language === 'en') return '/cv/cv-andres-english.pdf';
    else return '/cv/cv-andres-spanish.pdf';
  }

  return (
    <SquaresBackground>
      <div className={styles.homeContainer}>
        <motion.div {...fromLeftAnimationScroll} className={`col-xs-12 col-md-5`}>
          <HomePhoto />
        </motion.div>
        <motion.div {...fromRightAnimationScroll} className={`col-xs-12 col-md-7`}>
          <div className={styles.devInfo}>
            <small className={styles.webDeveloper}>
              {translate('homeWebDeveloper')}
            </small>
            <h1 className={styles.andresName}>
              Andrés Mendoza
            </h1>
            <ul className={styles.socialList}>
              {socialDataFiltered.map(social => (
                <li className={styles.socialItem} key={social.name}>
                  <a href={social.link} className='center' target='_blank'>{social.icon}</a>
                </li>
              ))}
            </ul>
            <p>
              {translate("homeDescription")}
            </p>
            <div className={styles.homeButtons}>
              <a className='btn btn-primary' href={getCvRoute()} download >
                Download CV
              </a>
              <button 
                className='btn-secondary' 
                onClick={() => router.replace('/contact')}
              >
                Contact
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </SquaresBackground>
  )
}

export default Presentation