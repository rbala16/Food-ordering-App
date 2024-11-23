import React,{ createContext,useContext,useState } from "react";

//create theme context
const ThemeContext = createContext();

//Custom hook to access the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('light'); // initial theme is light

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
return(
   <ThemeContext.Provider value={{ theme, toggleTheme}}>
    {children}
   </ThemeContext.Provider> 
)
}