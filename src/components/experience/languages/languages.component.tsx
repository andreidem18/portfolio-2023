import BlockTitle from '@/components/_shared/block-title/block-title.component'
import React from 'react'
import styles from './languages.module.css';
import { Keys } from '@/translations/Keys';
import ProgressBar from '../progress-bar/progress-bar.component';
import useTranslate from '@/translations/useTranslate';

interface LanguageData {
  name: keyof Keys,
  level: keyof Keys,
  percentaje: number,
}

const languageData: LanguageData[] = [
  {
    name: "spanish",
    level: 'spanishLevel',
    percentaje: 100
  },
  {
    name: "english",
    level: 'englishLevel',
    percentaje: 90
  },
]

const Languages = () => {

  const translate = useTranslate();

  return (
    <div className={styles.languagesSection}>
      <BlockTitle title={translate('languagesTitle')} className='mb-3'/>
      <ul>
        {languageData.map(language => (
          <li key={language.name} className={styles.languageItem}>
            <div className={styles.head}>
              <strong>{translate(language.name)}</strong>
              <span>{translate(language.level)}</span>
            </div>
            <ProgressBar percentaje={language.percentaje} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Languages