import React from 'react'
import Modal from '../modal/modal.component';
import { Check as CheckIcon, Close as CloseIcon } from '@mui/icons-material';
import styles from './popup.module.css';
import { AnimationProps, motion } from 'framer-motion';

interface PopupParams {
  title: string;
  description: string;
  theme: 'success' | 'error';
  show: boolean;
  handleClose: () => void;
}

const Popup = ({ title, description, show, theme, handleClose }: PopupParams) => {
  return (
    <Modal 
      className={`${styles[theme]} ${styles.popup}`}
      show={show}
      handleClose={handleClose}
    >
      <div className={styles.iconContainer}>
        <motion.div {...iconAnimations} className={`center ${styles.icon}`}>
          {theme === 'success' 
            ? <CheckIcon fontSize='inherit'/>
            : <CloseIcon fontSize='inherit' />
          }
        </motion.div>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={`mb-2 ${styles.text}`}>{description}</p>
      <button 
        className={`${theme === 'success' ? 'btn-success' : 'btn-danger'}`} 
        onClick={handleClose}
      >
        Ok
      </button>
    </Modal>
  )
}

const iconAnimations: AnimationProps = {
  initial: {
    opacity: 0,
    scale: 3
  },
  animate: {
    opacity: 1,
    scale: 1
  },
  transition: {
    delay: .3,
    duration: .4,
    type: 'spring'
  }
}

export default Popup