import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const AddCategory = () => {
  return (
    <div className="grid grid-cols-1">
      <div>
        <h1 className="mt-[60px] text-3xl font-semibold text-left ml-[375px] mb-6">
          New Category
        </h1>
        <div className="ml-[375px] bg-light w-7/11 rounded-xl h-[280px] mr-5 mt-8 py-2 ">
          <h2 className="text-2xl font-semibold text-left ml-5">Information</h2>
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
        <Link to='/categories'>
          <Button className="text-black ml-[] mt-5 mr-4">Back</Button></Link>
          <Link to='/products'>
          <Button className="bg-primary text-white mt-5">Publish</Button></Link>
      </div>
      
    </div>
  );
};



export default AddCategory;
