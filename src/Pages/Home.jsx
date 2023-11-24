import React from "react";
import HomeBanner from "../Components/HomeBanner";

const Home = () => {
  return (
    <div className="homeContainer bg-red-300 pt-[4rem] ">
      <div className="homeWraper bg-blue-300 ">
        {/* banner section  */}
        <div className="homeBanner">
          <HomeBanner />
        </div>
        {/* banner section  */}
      </div>
    </div>
  );
};

export default Home;
