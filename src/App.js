// components
import React, { useState, useRef } from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
// views
import Index from "./views/Index";
// styles
import "./Global.css";

function App() {
  const [sideNav, setSideNav] = useState(false);
  const sideNavHandler = () => setSideNav((sideNav) => !sideNav);

  const refs = {
    home: useRef(),
    about: useRef(),
    qualifications: useRef(),
    work: useRef(),
    contacts: useRef(),
  };

  const executeScroll = (uniqueRef) => {
    console.log(uniqueRef);
    uniqueRef.current.scrollIntoView();
    setSideNav(false);
  };

  return (
    <>
      <div className="backImg">
        <img src="/assets/image/index/section2/Back.svg" alt="Me" />
      </div>
      <Navbar sideNav={sideNav} sideNavHandler={sideNavHandler} />
      <SideNav sideNav={sideNav} refs={refs} executeScroll={executeScroll} />
      <Index refs={refs} />
      <Footer />
    </>
  );
}

export default App;
