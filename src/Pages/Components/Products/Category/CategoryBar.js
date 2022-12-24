import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  return (
    <div className="bg-light rounded-3xl my-3 p-3 flex">
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
      </div>
      <div className="flex-2 ml-2 text-teal-500">
        <Link to="/">
          <button className="flex text-black bg-secondary hover:bg-secondaryHover rounded-full px-4 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="black"
              className="w-6 mr-1 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <p className="font-medium">Add Category</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryBar;
