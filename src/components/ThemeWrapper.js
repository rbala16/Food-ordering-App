import React from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeWrapper = ({children}) => {
    const{theme} = useTheme(); // Access the current theme from the context

// Define different theme classes for 'light' and 'dark' modes
const themeClasses = theme === 'light' 
? 'bg-white text-black' // Light theme styles
: 'bg-gray-900 text-white'; // Dark theme styles

  return (
    <div className={themeClasses}>{children}</div>
  )
}

export default ThemeWrapper