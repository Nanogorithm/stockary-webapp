import React from "react";
import Icon from "@mui/material/Icon";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { TextField } from "@mui/material";

const ProductBar = () => {
  return (
    <div className="bg-light rounded-3xl m-5 p-3 flex">
      {/* Search Button */}
      <div className="flex-1">
        <Paper
          className="rounded-2xl shadow-none align-middle"
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            height: 40,
            width: 250,
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search "
            inputProps={{ "aria-label": "Search Products" }}
          />
        </Paper>
      </div>
      {/* Category */}
      <div className="flex-2">
        <button className="flex bg-secondary hover:bg-secondaryHover rounded-full px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
          <p className="font-medium">Category</p>
        </button>
      </div>
      <div className="flex-2 ml-2 text-teal-500">
        <button className="flex text-white bg-primary rounded-full px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <p className="font-medium text-white">Category</p>
        </button>
      </div>
    </div>
  );
};

export default ProductBar;
