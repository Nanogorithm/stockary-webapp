import React from "react";

const SalesCard = () => {
  return (
    <div className="bg-shade2 w-96 rounded-2xl h-36 flex p-4">
      <div className="flex-1 text-left mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
            clipRule="evenodd"
          />
        </svg>

        <h1 className="text-2xl font-medium">Sales</h1>
        <p className="text-sm">Today</p>
      </div>
      <div className="flex-1">
        <h1 className="text-3xl mt-10">৳2,64,500</h1>
      </div>
    </div>
  );
};

export default SalesCard;
