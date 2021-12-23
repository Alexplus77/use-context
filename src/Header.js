import React, { useContext } from "react";
import {ContextTheme} from "./TheamContext";

function Header() {
const {theme}=useContext(ContextTheme)
  return (
    <header className={theme==='light' ?"light-theme":'dark-theme'}>
      <h2>Theme</h2>
    </header>
  );
}

export default Header;
