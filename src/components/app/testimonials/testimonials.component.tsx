import BlockTitle from '@/components/_shared/block-title/block-title.component';
import useTranslate from '@/translations/useTranslate'
import React, { useEffect, useState } from 'react'
import styles from './testimonials.module.css';
import { Testimonial, testimonials } from '../../../data/testimonials.data';
import Carousel from '@/components/_shared/carousel/carousel.component';
import useViewWidth from '@/hooks/useViewWidth';
import { motion } from 'framer-motion';
import { fromBottomAnimation } from '@/components/_shared/animations/on-scroll/from-bottom';
import TestimonialItem from '../testimonial-item/testimonial-item.component';
import TestimonialModal from '../testimonial-modal/testimonial-modal.component';


const Testimonials = () => {

  const translate = useTranslate();

  const viewWidth = useViewWidth();

  const [testimonialSelected, setTestimonialSelected] = useState<Testimonial>(testimonials[0]);
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const selectTestimonial = (t: Testimonial) => {
    setTestimonialSelected(t);
    setIsModalOpen(true)
  }

  return (
    <motion.div {...fromBottomAnimation()} viewport={{ margin: "-100px" }}>

      <BlockTitle
        title={translate("testimonialsTitle")}
      />
      <div className={styles.mb1}></div>
      <Carousel
        slidesPerView={viewWidth < 768 ? 1 : 2}
        slices={testimonials.map((testimonial) => (
          <TestimonialItem
            testimonial={testimonial}
            key={testimonial.name}
            selectTestimonial={selectTestimonial}
          />
        ))}
      />

      <TestimonialModal
        isOpen={isModalOpen}
        close={() => setIsModalOpen(false)}
        testimonial={testimonialSelected!}
      />

    </motion.div>
  )
}

export default Testimonials