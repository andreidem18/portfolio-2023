import React from 'react'
import styles from './project.module.css';
import { useParams } from 'next/navigation';
import { projectsData } from '@/data/projects.data';
import useTranslate from '@/translations/useTranslate';
import Carousel from '@/components/_shared/carousel/carousel.component';
import Image from 'next/image';
import ProjectDetails from '../project-details/project-details.component';
import { motion } from 'framer-motion';
import { fromLeftAnimationScroll, fromRightAnimationScroll } from '@/components/_shared/animations/on-scroll/from-sides';

const Project = () => {

  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);
  const translate = useTranslate();

  return (
    <>
      <h1 className={styles.projectTitle}>{project.name}</h1>
      <div className='flex'>
        <motion.div {...fromLeftAnimationScroll} className="col-xs-12 col-sm-8 mb-2">
          <Carousel
            dotsStyle='Inside'
            haveArrows={true}
            slices={project.images.map(image => (
              <div className={styles.imageSlice} key={image}>
                <Image
                  src={image}
                  priority
                  fill
                  alt={`${project.name} Image`}
                />
              </div>
            ))}
          />
        </motion.div>
        <motion.div {...fromRightAnimationScroll} className="col-xs-12 col-sm-4">
          <ProjectDetails project={project} />
        </motion.div>
      </div>
    </>
  )
}

export default Project