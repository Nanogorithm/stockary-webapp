import React from "react";
import Orders from "../Orders/Orders";
import OrdersCard from "./OrdersCard";
import SalesCard from "./SalesCard";

const Overview = () => {
  return (
    <div>
      <h1 className="font-semibold text-2xl mt-[90px] text-left ml-[380px]">
        Hello There, Shaad
      </h1>
      <div className="flex">
        <div className="flex-none ml-[380px] mr-5 mt-12">
          <SalesCard></SalesCard>
        </div>
        <div className="flex-none ml-[30px] mt-12">
          <OrdersCard></OrdersCard>
        </div>
      </div>
    </div>
  );
};

export default Overview;
