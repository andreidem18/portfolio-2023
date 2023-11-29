import { Testimonial } from '@/data/testimonials.data'
import { 
    FormatQuote as QuoteIcon, 
    Close as CloseIcon 
} from '@mui/icons-material';
import styles from './testimonial-modal.module.css';
import Modal from '@/components/_shared/modal/modal.component';
import Image from 'next/image';
import useTranslate from '@/translations/useTranslate';

interface TestimonialModalProps {
    testimonial: Testimonial,
    isOpen: boolean,
    close: () => void,
}

const TestimonialModal = ({ testimonial, isOpen, close }: TestimonialModalProps) => {

    const translate = useTranslate();

    return (
        <Modal 
            className={styles.testimonialModal}
            show={isOpen} 
            handleClose={close}
        >
            <div className={styles.testimonial}>
                <div className={styles.quoteUp}>
                    <QuoteIcon />
                </div>
                <button 
                    className={styles.buttonClose}
                    onClick={close}
                >
                    <CloseIcon />
                </button>
                <Image
                    className={styles.testimonialImage}
                    src={testimonial.photoUrl}
                    alt={testimonial.name + ' photo'}
                    width={120}
                    height={120} />
                <i className={styles.testimonialPhrase}>
                    {translate(testimonial.testimonial)}
                </i>
                <strong>{testimonial.name}</strong>
                <div className={styles.profession}>
                    {testimonial.profession}
                </div>
                <div className={styles.quoteDown}>
                    <QuoteIcon />
                </div>
            </div>
        </Modal>
    )
}

export default TestimonialModal