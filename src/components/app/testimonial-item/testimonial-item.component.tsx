import React from 'react'
import styles from './testimonial-item.module.css';
import Image from 'next/image';
import { Testimonial } from '@/data/testimonials.data';
import useTranslate from '@/translations/useTranslate';
import { useState } from 'react';
import { 
    FormatQuote as FormatQuoteIcon,
    OpenInFull as OpenIcon,
} from '@mui/icons-material';
import TestimonialModal from '../testimonial-modal/testimonial-modal.component';

interface TestimonialItemProps {
    testimonial: Testimonial,
    selectTestimonial: (testimonial: Testimonial) => void;
}

const TestimonialItem = ({ testimonial, selectTestimonial }: TestimonialItemProps) => {

    const translate = useTranslate();

    const getTestimonialText = (text: string) => {
        if (text.length > 230) {
            return text.slice(0, 180) + '...';
        }
        else return text;
    }
    
    return (
        <>
            <div key={testimonial.name} className={styles.slice}>
                <div className={styles.testimonialCard}>
                    <Image
                        src={testimonial.photoUrl}
                        alt={`${testimonial.name} photo`}
                        width={80}
                        height={80}
                    />
                    <div className={styles.testimonialText}>
                        <i>{getTestimonialText(translate(testimonial.testimonial))}</i>
                        <div 
                            className={styles.buttonOpen} 
                            onClick={() => selectTestimonial(testimonial)}
                        >
                            <span>Expand</span>
                            <OpenIcon />
                        </div>
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
        </>
    )
}

export default TestimonialItem
