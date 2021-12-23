import React, { useContext } from "react";
import {ContextTheme} from "./TheamContext";

function Footer() {
    const {theme}=useContext(ContextTheme)
  return (
    <footer className={theme==='light' ?"light-theme":'dark-theme'}>
      <h2>
        {" "}
        Footer <br /> Контент футера
      </h2>
    </footer>
  );
}

export default Footer;
