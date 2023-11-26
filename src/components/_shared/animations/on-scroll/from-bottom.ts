import { HTMLMotionProps } from 'framer-motion';

interface FromBottomAnimationProps {
  delay?: number
}

export const fromBottomAnimation = (
  params?: FromBottomAnimationProps
): HTMLMotionProps<'div'> & HTMLMotionProps<'li'> => {

  const { delay=0 } = params || {};

  return {
    initial: {
      y: 40,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: .5,
      delay
    },
    viewport: {
      margin: "200px"
    }
  }
}
