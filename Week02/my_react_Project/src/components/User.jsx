import React from 'react'
import styles from '../css/User.module.css'
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';


export default function User() {
  const { theme, setTheme } = useContext(ThemeContext);

   const user={
    prefix : "Mr",
    first_name : "Jyoti Ranjan",
    last_name : "Swain"
   }
  return (
        <span className={`${styles.Uname} ${
                theme === "light" ? styles.lightUser : styles.darkUser
              }`}>
          {user.prefix} {user.last_name}
        </span>
  );
}
