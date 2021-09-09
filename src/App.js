// components
import React, { useState } from "react";
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

  return (
    <>
      <Navbar sideNavHandler={sideNavHandler} />
      <SideNav sideNav={sideNav} />
      <Index />
      <Footer />
    </>
  );
}

export default App;
