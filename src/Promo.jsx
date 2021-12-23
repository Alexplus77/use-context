import React, { useContext } from "react";
import {ContextTeam} from "./ContextTeam";

function Main() {
    const [team, handleToggleTeam]=useContext(ContextTeam)
  return (
    <div className={team==='light' ?"light-theme":'dark-theme'}>
      <h2> Промо Акция</h2>
      <div>Текст промо Акция купи со скидкой</div>
    </div>
  );
}

export default Main;
