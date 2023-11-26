import React from 'react'
import styles from './project-details.module.css'
import { Language, GitHub, CalendarToday } from '@mui/icons-material';
import { Project } from '@/data/projects.data';
import useTranslate from '@/translations/useTranslate';

const ProjectDetails = ({ project }: { project: Project }) => {

  const translate = useTranslate();

  const projectDate = project.date
    .toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div className={styles.projectDetails}>
      <h3>Description</h3>
      <ul className={styles.generalInformation}>
        <li>
          <GitHub className={styles.icon} />
          <ul>
            {project.github.map(link => (
              <li key={link.url}>
                <a href={link.url} target='_blank'>{link.name}</a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Language className={styles.icon} />
          {Array.isArray(project.url) ? (
            <ul>
              {project.url.map(link => (
                <li key={link.url}>
                  <a href={link.url} target='_blank'>{link.name}</a>
                </li>
              ))}
            </ul>
          ) : (
            <a href={project.url} target='_blank'>{project.url}</a>
          )}
        </li>
        <li>
          <CalendarToday className={styles.icon} />
          {projectDate}
        </li>
      </ul>

      <p className='mb-2'>{translate(project.description)}</p>

      <h3>Technologies</h3>
      <ul className={styles.techList}>
        {project.technologies.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectDetails