import React from 'react'
import styles from './navigation.module.css';
import { ArrowBackIosNew, ArrowForwardIos, Close } from '@mui/icons-material';
import { useParams, useRouter } from 'next/navigation';
import { projectsData } from '@/data/projects.data';



const Navigation = () => {

  const router = useRouter();
  const { slug } = useParams();
  const index = projectsData.findIndex(p => p.slug === slug);

  const goToProjects = () => router.push('/projects');

  const goNext = () => {
    const nextIndex = index+1 < projectsData.length ? index+1 : 0;
    const nextSlug = projectsData[nextIndex].slug;
    router.push(`/projects/${nextSlug}`);
  }

  const goBack = () => {
    const prevIndex = index > 0 ? index-1 : projectsData.length-1;
    const prevSlug = projectsData[prevIndex].slug;
    router.push(prevSlug);
  }

  return (
    <div className={styles.navigation}>
      <div className={styles.arrows}>
        <button onClick={goBack}>
          <ArrowBackIosNew />
        </button>
        <button onClick={goNext}>
          <ArrowForwardIos />
        </button>
      </div>
      <button onClick={goToProjects}>
        <Close />
      </button>
    </div>
  )
}

export default Navigation