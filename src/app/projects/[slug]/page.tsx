'use client'

import React from 'react'
import styles from './styles.module.css'
import Navigation from '@/components/projects/[slug]/navigation/navigation.component'
import Project from '@/components/projects/[slug]/project/project.component'
import PageAnimation from '@/components/_shared/page-animation/page-animation.component'

const Page = () => {
  return (
    <PageAnimation >
      <div className={styles.pageContainer}>
        <Navigation />
        <Project />
      </div>
    </PageAnimation >
  )
}

export default Page