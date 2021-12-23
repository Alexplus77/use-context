import React, {useState} from "react";
const ThemeContext=()=>{
    const ContextTheme = React.createContext('light');
    const [theme, setTheme]=useState('light')

    const handleToggleTheme=()=>theme === 'light'? setTheme('dark') : setTheme('light')
    return (
        <ContextTheme.Provider value={[theme, handleToggleTheme]}>
            {props.children}
        </ContextTheme.Provider>
    )
}
export default ThemeContext

