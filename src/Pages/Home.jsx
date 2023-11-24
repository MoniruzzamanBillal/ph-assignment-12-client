import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Feature from "../Components/Feature";

const Home = () => {
  return (
    <div className="homeContainer  pt-[4rem] ">
      <div className="homeWraper  ">
        {/* banner section  */}
        <div className="homeBanner">
          <HomeBanner />
        </div>
        {/* banner section  */}

        {/* feature section  */}
        <div className="featureSection py-4 ">
          <Feature />
        </div>
        {/* feature section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Home;
