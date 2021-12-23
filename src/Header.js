import React, { useContext } from "react";
import {ContextTheme} from "./ContextTheme";

function Header() {
const [theme, handleToggleTheme]=useContext(ContextTheme)
  return (
    <header className={theme==='light' ?"light-theme":'dark-theme'}>
      <h2>Theme</h2>
    </header>
  );
}

export default Header;
