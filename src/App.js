import React from "react";

import Header from "./Header";
import Button from "./Button";
import Footer from "./Footer";
import Main from "./Main";
import Promo from "./Promo";

function App() {
  return (

    <>
      <div className="content">
        <Header />
        <Button />
        <Main />
        <Promo />
      </div>
      <Footer />
</>


);
}

export default App;
