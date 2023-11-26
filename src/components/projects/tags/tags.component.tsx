import { tagsData } from '@/data/projects.data'
import React from 'react'
import styles from './tags.module.css';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectProjects, setFilter } from '../projects.slice';

const Tags = () => {

  const { filter } = useAppSelector(selectProjects)

  const dispatch = useAppDispatch();

  const selectTag = (tag: typeof tagsData[number]) => {
    dispatch(setFilter(tag));
  }

  return (
    <ul className={`mb-4 ${styles.tagsList}`} >
      {tagsData.map(tag => (
        <li 
          key={tag} 
          className={`
            ${filter === tag ? styles.active : ''} 
            ${styles.tagItem}
          `}
          onClick={() => selectTag(tag)}
        >
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tags