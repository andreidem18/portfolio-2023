"use client"

import React, { useState } from 'react'
import styles from './navbar.module.css';
import Menu from '@mui/icons-material/Menu';
import { Keys } from '@/translations/Keys';
import useTranslate from '@/translations/useTranslate';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface Item {
  label: keyof Keys;
  link: string;
}

const Navbar = () => {

  const items: Item[] = [
    { label: "navAboutMe", link: "/" },
    { label: "navExperience", link: "/experience" },
    { label: "navProjects", link: "/projects" },
    { label: "navContact", link: "/contact" },
  ]

  const translate = useTranslate();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = () => setIsMenuOpen(false);

  const router = useRouter();
  const pathname = usePathname();

  const navigateHome = () => router.replace('/');

  return (
    <>
      {/* <div className={styles.padding}></div> */}
      <header className={styles.header}>
        <div className={styles.logo} onClick={navigateHome}>
          <div className={`center ${styles.logoSymbol}`}>
            A
          </div>
          <div className={styles.logoText}>
            <b>Andrés</b> {" "}
            Mendoza
          </div>
        </div>
        <div className={`${styles.toggleButton}`}>
          <button 
            className='center' 
            onClick={() => setIsMenuOpen(state => !state)}
            aria-label='open navigation menu'
          >
            <Menu />
          </button>
        </div>
        <div className={`${isMenuOpen ? styles.open : ''} ${styles.desplegableMenu}`}>
          <ul>
            {items.map(item => (
              <li
                key={item.label}
                className={`
                  ${styles.navItem} 
                  ${pathname === item.link ? styles.activeLink : ''}
                `}
              >
                <Link href={item.link} onClick={closeMenu}>
                  {translate(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className={styles.itemsList}>
          {items.map(item => (
            <li
              key={item.label}
              className={`
                ${styles.navItem} 
                ${pathname === item.link ? styles.activeLink : ''}
              `}
            >
              <Link href={item.link} onClick={closeMenu}>
                {translate(item.label)}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  )
}

export default Navbar
