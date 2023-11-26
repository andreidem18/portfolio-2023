import React from 'react'
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import styles from './tech-sphere.module.css';
import BlockTitle from '@/components/_shared/block-title/block-title.component';
import useTranslate from '@/translations/useTranslate';
import useViewWidth from '@/hooks/useViewWidth';

const TechSphere = () => {

  const translate = useTranslate();
  const width = useViewWidth();

  return (
    <>
      <BlockTitle title={translate("myTechnologiesTitle")} />
      <TagCloud
        options={(w: Window & typeof globalThis): TagCloudOptions => ({
          radius: width < 568 ? (width / 2) - 70 : width / 5,
          maxSpeed: "fast",
        })}
        className={styles.sphere}
      >
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Angular",
          "Node",
          "Express",
          "Nest",
          "SQL",
          "MongoDB",
          "Docker",
          "AWS",
        ]}
      </TagCloud>
    </>
  )
}

export default TechSphere