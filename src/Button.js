import React, { useContext } from "react";
import {ContextTeam} from "./ContextTeam";

function Button() {
const [team, handleToggleTeam]=useContext(ContextTeam)
  return <button className={team==='light' ?"light-theme":'dark-theme'} onClick={handleToggleTeam} >Switch Theme</button>;
}

export default Button;
