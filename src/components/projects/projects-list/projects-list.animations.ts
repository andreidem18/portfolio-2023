import { HTMLMotionProps } from 'framer-motion';

interface ItemAnimationProps {
  delay?: number
}

export const itemAnimation = (props?: ItemAnimationProps): HTMLMotionProps<'li'> => {

  const { delay=0 } = props || {}

  return {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: 20,
      opacity: 0,
    },
    transition: {
      delay,
      duration: .2
    },
    layout: true,
  }
}
