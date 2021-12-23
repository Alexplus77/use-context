import React from "react";
import ReactDOM from "react-dom";
import ThemeContext from "./TheamContext";
import "./styles.css";
import App from "./App";

ReactDOM.render(
<ThemeContext>
    <App />
</ThemeContext>
    , document.getElementById("root"));
