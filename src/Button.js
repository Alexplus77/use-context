import React, { useContext } from "react";
import {ContextTheme} from "./TheamContext";

function Button() {
const {theme, handleToggleTheme}=useContext(ContextTheme)
  return <button className={theme==='light' ?"light-theme":'dark-theme'} onClick={handleToggleTheme} >Switch Theme</button>;
}

export default Button;
