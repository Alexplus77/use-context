import React, { useContext } from "react";
import {ContextTeam} from "./ContextTeam";

function Header() {
const [team, handleToggleTeam]=useContext(ContextTeam)
  return (
    <header className={team==='light' ?"light-theme":'dark-theme'}>
      <h2>Theme</h2>
    </header>
  );
}

export default Header;
