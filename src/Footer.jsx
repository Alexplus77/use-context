import React, { useContext } from "react";
import {ContextTeam} from "./ContextTeam";

function Footer() {
    const [team, handleToggleTeam]=useContext(ContextTeam)
  return (
    <footer className={team==='light' ?"light-theme":'dark-theme'}>
      <h2>
        {" "}
        Footer <br /> Контент футера
      </h2>
    </footer>
  );
}

export default Footer;
