import React from 'react'
import * as FiIcons from 'react-icons/fi'
import { ThemeToggleIcon } from '../styled/ThemeSwitch.Styled'

export const ToggleTheme = ({theme, toggleTheme}) => {
    return (
        <ThemeToggleIcon onClick={toggleTheme}>
                {theme === 'light' ? <FiIcons.FiMoon /> : <FiIcons.FiSun />}
        </ThemeToggleIcon>
    )
}
