import React, {useState} from "react";
import {ContextTheme} from "./ContextTheme";

import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";
import Main from "./Main";
import Promo from "./Promo";

function App() {
    const [theme, setTheme]=useState('light')
const handleToggleTheme=()=>theme === 'light'? setTheme('dark') : setTheme('light')

  return (

    <>
    <ContextTheme.Provider value={[theme, handleToggleTheme]}>
      <div className="content">

        <Header />
        <Button />
        <Main />
        <Promo />

      </div>
      <Footer />
    </ContextTheme.Provider>
</>


);
}

export default App;
