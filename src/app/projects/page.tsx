'use client'

import PageAnimation from '@/components/_shared/page-animation/page-animation.component'
import PageTitle from '@/components/_shared/page-title/page-title.component'
import ProjectsList from '@/components/projects/projects-list/projects-list.component'
import Tags from '@/components/projects/tags/tags.component'
import useTranslate from '@/translations/useTranslate'
import React from 'react'

const ProjectsPage = () => {

  const translate = useTranslate();

  return (
    <PageAnimation>
      <PageTitle 
        title={translate('projectsTitle')} 
        subtitle={translate('projectsSubtitle')} 
      />
      <div className="page-container">
        <Tags />
        <ProjectsList />
      </div>
    </PageAnimation>
  )
}

export default ProjectsPage