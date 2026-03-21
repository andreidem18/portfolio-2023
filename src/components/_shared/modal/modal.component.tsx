import React from "react";
import styles from "./modal.module.css";
import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";

interface ModalParams {
  children: React.ReactNode;
  className?: string;
  show: boolean;
  handleClose: () => void;
}

const Modal = ({ children, className, show, handleClose }: ModalParams) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          {...containerAnimations}
          className={`wrap ${styles.modalContainer}`}
        >
          <motion.div
            {...modalAnimations}
            className={`${styles.modal} ${className}`}
          >
            {children}
          </motion.div>
          <div className={`wrap ${styles.overlay}`} onClick={handleClose}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const containerAnimations: HTMLMotionProps<"div"> = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const modalAnimations: HTMLMotionProps<"div"> = {
  initial: {
    y: -400,
  },
  animate: {
    y: 0,
  },
  exit: {
    y: -400,
  },
};

export default Modal;
