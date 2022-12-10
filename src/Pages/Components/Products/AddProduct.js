import { Button, TextField } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "Bread",
    label: "Bread",
  },
  {
    value: "Cake",
    label: "Cake",
  },
];

const AddProduct = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <div className="flex">
        <div className="w-8/12">
          <div className="flex-1 bg-light mx-8 mt-24 p-12 rounded-2xl">
            <h1 className="text-2xl items-start font-semibold">
              Information
            </h1>
            <TextField
              label={"Product Name"}
              className="mt-4 bg-white w-8/12 "
            />
            <TextField label={"Description"} className="mt-4 bg-white w-8/12" />
          </div>
        </div>
        <div className="flex-1 bg-light mr-12 mt-24 p-12 rounded-2xl">
          <h1 className="text-2xl text-left ml-14 font-semibold">Organize</h1>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            value={currency}
            onChange={handleChange}
            className="mt-4 bg-white w-11/12"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <br />
          <div className="flex">
            <TextField
              label={"Selling Price"}
              className="mt-4 mr-2 bg-white w-5/12"
            />
            <TextField
              label={"Cost Price"}
              className="ml-2 mt-4 bg-white  w-5/12"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Button className="bg-primary text-white rounded-2xl p-3">
          Publish
        </Button>
        <Button className=" text-black rounded-2xl p-3">Back</Button>
      </div>
    </div>
  );
};

export default AddProduct;
