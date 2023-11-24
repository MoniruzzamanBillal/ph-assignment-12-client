import React from "react";
import FeatureCard from "./FeatureCard";

const featureCardItem = [
  {
    cardImg: "https://i.ibb.co/R6NmGbQ/icons8-parcel-100.png",
    cardTitle: "Parcel Safety",
    cardSummery:
      "Ensure your parcels are guarded every step of the way with our comprehensive safety measures.",
  },
  {
    cardImg: "https://i.ibb.co/7XDXw5c/icons8-delivery-100.png",
    cardTitle: "Fast Delivery",
    cardSummery:
      "Get your parcels swiftly with our lightning-fast delivery service.",
  },
  {
    cardImg: "https://i.ibb.co/pxvxMYk/icons8-tracking-100.png",
    cardTitle: "Real-Time Tracking",
    cardSummery:
      "Experience the ease of real-time tracking, ensuring you're always in the know about your parcel's journey.",
  },
];

const Feature = () => {
  return (
    <div className="featureContainer  ">
      <div className="featureWrapper  w-[99%] sm:w-[95%] md:w-[92%] xmd:w-[88%] lg:w-[85%] m-auto ">
        {/*  */}

        {/* feature heading  */}
        <div className="mb-6 xmd:mb-8 lg:mb-10">
          <h2 className=" mb-2 font-semibold text-center text-2xl md:text-3xl lg:text-4xl text-orange-800 dark:text-[#E4B15D] CormorantFont ">
            WHY CHOOSE US
          </h2>

          {/* sepoerator image  */}

          <div className="seperatorImg  m-auto w-[8rem] lg:w-[10rem] flex justify-center items-center mb-6 ">
            <img
              src="https://i.ibb.co/pr3Ryq7/separator.png"
              className="  w-full h-full "
              alt=""
            />
          </div>
          {/* sepoerator image  */}
        </div>
        {/* feature heading  */}

        {/* feature card  */}

        <div className="featureCardContainer grid   gap-4 grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 lg:gap-8 ">
          {featureCardItem &&
            featureCardItem.map((feature, ind) => (
              <FeatureCard key={ind} feature={feature} />
            ))}
        </div>

        {/* feature card  */}

        {/*  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Feature;
