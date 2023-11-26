import React from 'react';
import styles from './block-title.module.css';
import { HTMLMotionProps, motion } from 'framer-motion';

interface BlockTitleParams extends HTMLMotionProps<'div'> {
  title: string;
  className?: string;
}

const BlockTitle = ({ title, className, ...params }: BlockTitleParams) => {
  return (
    <motion.div className={`${className} ${styles.blockTitle}`} {...params}>
      <h2>{title}</h2>
    </motion.div>
  )
}

export default BlockTitle