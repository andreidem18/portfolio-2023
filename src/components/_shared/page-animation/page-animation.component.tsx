import React from 'react'
import { motion, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';
import {useEffect} from 'react';

const PageAnimation = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  
  const variants: Variants = {
    hidden: { opacity: 0, y: 20,  },
    enter: { opacity: 1, y: 0, transitionDuration: '.5s' },
    exit: { opacity: 0, x: 0, y: -100},
  }

  return (
      <motion.main
        key={pathname}
        variants={variants} // Pass the variant object into Framer Motion 
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ ease: 'linear' }}
      >
        {children}
      </motion.main>
  )
}

export default PageAnimation