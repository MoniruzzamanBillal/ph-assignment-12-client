import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div>
      {/* nav section  */}
      <div className="navContainer">
        <NavBar />
      </div>
      {/* nav section  */}

      {/* body section  */}
      <div className="mainContainer">
        <Outlet />
      </div>
      {/* body section  */}

      {/* footer section  */}
      <div className="footerContainer">
        <Footer />
      </div>
      {/* footer section  */}

      {/*  */}
    </div>
  );
};

export default MainLayout;
