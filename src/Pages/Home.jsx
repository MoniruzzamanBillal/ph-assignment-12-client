import React from "react";
import HomeBanner from "../Components/HomeBanner";
import Feature from "../Components/Feature";
import Statistics from "../Components/Statistics";
import TopDelivery from "../Components/TopDelivery";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
        },
      }}
      exit={{
        opacity: 1,
        transition: {
          duration: 2,
        },
      }}
      className="homeContainer  pt-[4rem] "
    >
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
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

        {/* our  top delivery man section  */}
        <div className="topDeliveryMan ">
          <TopDelivery />
        </div>
        {/* our  top delivery man section  */}

        {/*  */}
      </div>
    </motion.div>
  );
};

export default Home;
