import React, { useContext } from "react";
import ThemeContext from "./TheamContext";

function Button() {
const [theme, handleToggleTheme]=useContext(ThemeContext)
  return <button className={theme==='light' ?"light-theme":'dark-theme'} onClick={handleToggleTheme} >Switch Theme</button>;
}

export default Button;
