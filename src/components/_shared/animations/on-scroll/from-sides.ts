import { AnimationProps, HTMLMotionProps } from 'framer-motion';

export const fromLeftAnimationScroll: HTMLMotionProps<"div"> = {
  initial: {
    x: -200,
    opacity: 0,
  },
  whileInView: {
    x: 0, 
    opacity: 1,
  },
  viewport: {
    margin: "-100px"
  },
  transition: {
    duration: .5,
  },
}

export const fromRightAnimationScroll: HTMLMotionProps<"div"> = {
  initial: {
    x: 200,
    opacity: 0,
  },
  whileInView: {
    x: 0, 
    opacity: 1,
  },
  viewport: {
    margin: "-100px"
  },
  transition: {
    duration: .5,
  },
}
