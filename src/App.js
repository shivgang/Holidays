import React from "react";
import Holidays  from "./components/Holidays";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import countries from "./components/CountryCodes";

function App() {
  return (
    <>
      <Header/>
      
      <Holidays/>

      {/* <Footer/> */}
    </>

  );
}

export default App;
