import React, { useContext } from "react";
import {ContextTheme} from "./TheamContext";

function Main() {
    const {theme}=useContext(ContextTheme)
  return (
    <div className={theme==='light' ?"light-theme":'dark-theme'}>
      <h2> Промо Акция</h2>
      <div>Текст промо Акция купи со скидкой</div>
    </div>
  );
}

export default Main;
