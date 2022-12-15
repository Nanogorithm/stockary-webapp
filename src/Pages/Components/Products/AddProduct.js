import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AddProduct = () => {
  return (
    <div>
      <h1 className="mt-[60px] text-3xl font-semibold text-left ml-[375px] mb-6">
        New Product
      </h1>
      <div className="grid grid-cols-2 gap-x-80">
        {/* Information Card */}
        <div className="">
          <div className="ml-[375px] bg-light w-[500px] rounded-xl h-[280px] py-2 ">
            <h2 className="text-2xl font-semibold text-left ml-5">
              Information
            </h2>
            <input
              type="text"
              placeholder="Product Name"
              className="p-3 mt-5 rounded-xl w-11/12 "
            />
            <input
              type="text"
              placeholder="Description"
              className="align-top p-3 mt-4 text-left rounded-xl w-11/12 h-32"
            />
          </div>
          <Link to='/products'>
          <Button className="text-black ml-[280px] mt-5 mr-4">Back</Button></Link>
          <Link to='/products'>
          <Button className="bg-primary text-white mt-5">Publish</Button></Link>
        </div>
        {/* Organize Card */}
        <div className="bg-light w-[400px] rounded-xl h-[280px] ml-">
          <h2 className="text-2xl font-semibold mt-5 text-left ml-5">
            Organize
          </h2>
          <select name="" id="" className="p-4 mt-5 rounded-xl w-11/12">
            <option value="Bread">Bread</option>
            <option value="Chips">Chips</option>
          </select>
          <div className="grid grid-cols-2">
            <div>
              <h1 className="mt-6 font-medium text-left ml-5 mb-0">
                Cost Price
              </h1>
              <input
                type="text"
                placeholder="Product Name"
                className="p-5 mt-2 ml-3 rounded-xl w-10/12 "
              />
            </div>
            <div>
              <h1 className="mt-6 font-medium text-left ml-5 mb-0">
                Cost Price
              </h1>
              <input
                type="text"
                placeholder="Product Name"
                className="p-5 mt-2 rounded-xl w-10/12 "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
