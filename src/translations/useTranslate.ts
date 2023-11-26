"use client"
import { Keys } from '@/translations/Keys';
import enTranslations from './en'
import esTranslations from './es'
import { languages } from './languages.type';
import { useAppSelector } from '@/redux/hooks';



function getTranslations(lang: languages) {
  if (lang === 'es') {
    return esTranslations;
  }
  return enTranslations;
}

export default function useTranslate(): (key: keyof Keys) => string {

  const language = useAppSelector(state => state.app.language);

  return function translate(key: keyof Keys): string {
    try {
      const translations = getTranslations(language);
      if (translations[key]) {
        return translations[key]
      } else {
        throw 'Key not found'
      }
    } catch (error) {
      throw `Unable to get trasnslation content for ${key}`
    }
  }
}
