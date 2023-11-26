import BlockTitle from '@/components/_shared/block-title/block-title.component';
import useTranslate from '@/translations/useTranslate'
import React, { useEffect, useState } from 'react'
import styles from './testimonials.module.css';
import { testimonials } from './testimonials.data';
import Image from 'next/image';
import { FormatQuote as FormatQuoteIcon } from '@mui/icons-material';
import Carousel from '@/components/_shared/carousel/carousel.component';
import useViewWidth from '@/hooks/useViewWidth';
import { motion } from 'framer-motion';
import { fromBottomAnimation } from '@/components/_shared/animations/on-scroll/from-bottom';


const Testimonials = () => {

  const translate = useTranslate();

  const viewWidth = useViewWidth();

  return (
    <motion.div {...fromBottomAnimation()} viewport={{margin: "-100px"}}>
      <BlockTitle
        title={translate("testimonialsTitle")}
      />
      <div className={styles.mb1}></div>
      <Carousel
        slidesPerView={viewWidth < 768 ? 1 : 2}
        slices={testimonials.map((testimonial) => (
          <div key={testimonial.name} className={styles.slice}>
            <div className={styles.testimonialCard}>
              <Image
                src={testimonial.photoUrl}
                alt={`${testimonial.name} photo`}
                width={80}
                height={80}
              />
              <div className={styles.testimonialText}>
                <i>{translate(testimonial.testimonial)}</i>
                <strong>{testimonial.name}</strong>
                <div className={styles.testimonialProfession}>{testimonial.profession}</div>
              </div>
              <div className={styles.testimonialIcon}>
                <FormatQuoteIcon fontSize='inherit' />
              </div>
              <div className={styles.testimonialIconBig}>
                <FormatQuoteIcon fontSize='inherit' />
              </div>
            </div>
          </div>
        ))}
      />

    </motion.div>
  )
}

export default Testimonials