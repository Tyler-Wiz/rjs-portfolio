import {useState} from 'react'

export const ThemeSwitch = () => {
  const [theme, setTheme] =  useState('dark')
  const toggleTheme = () => {
      theme === 'dark' ? setTheme('light') : setTheme('dark')
   }

   return [theme, toggleTheme]
}