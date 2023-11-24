import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Feature from "../Components/Feature";
import Statistics from "../Components/Statistics";

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

        {/* statistics section  */}
        <div className="statisticsSection py-4  ">
          <Statistics />
        </div>
        {/* statistics section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Home;
