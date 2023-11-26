import React from "react";
import DeliveryManCard from "./DeliveryManCard";

const TopDelivery = () => {
  return (
    <div className="TopDeliveryContainer bg-yellow-50 py-4 ">
      <div className="TopDeliveryWrapper  w-[96%] sm:w-[93%] md:w-[90%] m-auto ">
        {/* sectionn heading  */}

        <div className="sectionHeading">
          <div className="mb-6 xmd:mb-8 lg:mb-10">
            <h2 className=" mb-2 font-semibold text-center text-xl md:text-2xl lg:text-3xl text-orange-800 dark:text-[#E4B15D] CormorantFont ">
              Our Top delivery man
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
        </div>

        {/* sectionn heading ends   */}

        {/* delivery man card  */}
        <div className="deliveryManCard  grid grid-cols-1 xsm:grid-cols-2 xmd:grid-cols-3 gap-x-3 gap-y-5 ">
          <DeliveryManCard />
          <DeliveryManCard />
          <DeliveryManCard />
          <DeliveryManCard />
          <DeliveryManCard />
          <DeliveryManCard />
        </div>
        {/* delivery man card ends  */}

        {/*  */}
      </div>
    </div>
  );
};

export default TopDelivery;