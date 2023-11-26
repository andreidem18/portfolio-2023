import React from 'react'
import styles from './projects-list.module.css';
import { projectsData } from '@/data/projects.data';
import Image from 'next/image';
import useTranslate from '@/translations/useTranslate';
import { RemoveRedEye as RemoveRedEyeIcon } from '@mui/icons-material';
import { useAppSelector } from '@/redux/hooks';
import { selectProjects } from '../projects.slice';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { itemAnimation } from './projects-list.animations';

const ProjectsList = () => {

  const translate = useTranslate();
  const { filter } = useAppSelector(selectProjects);
  const router = useRouter();

  const projects = projectsData.filter(project => {
    return project.tags.includes(filter) || filter === 'all';
  })

  const selectProject = (slug: string) => {
    router.push(`/projects/${slug}`);
  }

  return (
    <ul className={styles.projectsGrid}>
      <AnimatePresence>
        {projects.map((project, i) => (
          <motion.li
            key={project.slug}
            className={styles.projectsCol}
            onClick={() => selectProject(project.slug)}
            {...itemAnimation()}
          >
            <div className={styles.projectCardContainer}>
              <h4 className={`${styles.projectName} ${styles.text}`}>
                {project.name}
              </h4>
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div className={styles.details}>
                <span className={`${styles.text} ${styles.projectType}`}>
                  {project.type}
                </span>
                <div className={`center ${styles.text} ${styles.icon}`}>
                  <RemoveRedEyeIcon />
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  )
}

export default ProjectsList
