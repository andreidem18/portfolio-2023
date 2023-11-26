'use client'

import React, { useState } from 'react'
import styles from './settings-buttons.module.css';
import { 
  Settings as SettingsIcon, 
  Language as LanguageIcon, 
  Contrast as ContractIcon,
} from '@mui/icons-material';
import { Keys } from '@/translations/Keys';
import useTranslate from '@/translations/useTranslate';
import { Fab, Action } from 'react-tiny-fab';
import 'react-tiny-fab/dist/styles.css';
import Image from 'next/image';
import { useAppDispatch } from '@/redux/hooks';
import { setLanguaje, setTheme } from '@/redux/generalSlices/appSlice';

interface Option {
  label: keyof Keys;
  icon: React.ReactNode | string;
  children?: Option[];
  action?: () => void;
}


const SettingsButtons = () => {

  const dispatch = useAppDispatch();

  const options: Option[] = [
    {
      label: "settingLanguageEs",
      icon: <Image src={'/icons/spain-flag.png'} alt="spain icon" width={30} height={30}/>,
      action: () => dispatch(setLanguaje('es'))
    },
    {
      label: "settingLanguageEn",
      icon: <Image src={'/icons/us-flag.png'} alt="us icon" width={30} height={30}/>,
      action: () => dispatch(setLanguaje('en'))
    },
    {
      label: "settingThemeDark",
      icon: <Image src={'/icons/moon.png'} alt="spain icon" width={30} height={30}/>,
      action: () => dispatch(setTheme('dark')),
    },
    {
      label: "settingThemeLight",
      icon: <Image src={'/icons/sun.png'} alt="spain icon" width={30} height={30}/>,
      action: () => dispatch(setTheme('light')),
    },
  ]

  const translate = useTranslate();
  if (typeof window === "undefined") return <></>

  return (
    <Fab icon={<SettingsIcon />} >
      {options.map(option => (
        <Action 
          text={translate(option.label)} 
          key={option.label} 
          onClick={option.action}>
          {option.icon}
        </Action>
      ))}
    </Fab>
  )
}

export default SettingsButtons