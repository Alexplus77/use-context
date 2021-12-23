import React, {useState} from "react";
import {ContextTeam} from "./ContextTeam";

import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";
import Main from "./Main";
import Promo from "./Promo";

function App() {
    const [team, setTeam]=useState('light')
const handleToggleTeam=()=>team === 'light'? setTeam('dark') : setTeam('light')

  return (

    <>
    <ContextTeam.Provider value={[team, handleToggleTeam]}>
      <div className="content">

        <Header />
        <Button />
        <Main />
        <Promo />

      </div>
      <Footer />
    </ContextTeam.Provider>
</>


);
}

export default App;
