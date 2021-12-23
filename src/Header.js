import React, { useContext } from "react";
import ThemeContext from "./TheamContext";

function Header() {
const [theme]=useContext(ThemeContext)
  return (
    <header className={theme==='light' ?"light-theme":'dark-theme'}>
      <h2>Theme</h2>
    </header>
  );
}

export default Header;
