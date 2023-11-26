"use client"

import PageTitle from '@/components/_shared/page-title/page-title.component'
import React from 'react'
import useTranslate from '../../translations/useTranslate';
import Curriculum from '@/components/experience/curriculum/curriculum.component';
import TechSphere from '@/components/experience/technologies-sphere/tech-sphere.component';
import Languages from '@/components/experience/languages/languages.component';
import PageAnimation from '@/components/_shared/page-animation/page-animation.component';
import { motion } from 'framer-motion';
import { fromLeftAnimationScroll, fromRightAnimationScroll } from '@/components/_shared/animations/on-scroll/from-sides';
import Head from 'next/head';

const ExperiencePage = () => {

  const translate = useTranslate();
  
  return (
    <PageAnimation>
      <PageTitle 
        title={translate("resumeTitle")} 
        subtitle={translate("experienceSubtitle")} 
      />
      <div className="page-container">
        <Curriculum />
        <div className="flex mt-4">
          <motion.div className="col-xs-12 col-sm-6 mb-3" {...fromLeftAnimationScroll}>
            <Languages />
          </motion.div>
          <motion.div {...fromRightAnimationScroll} className="col-xs-12 col-sm-6">
            <TechSphere />
          </motion.div>
        </div>
      </div>
    </PageAnimation>
  )
}

export default ExperiencePage