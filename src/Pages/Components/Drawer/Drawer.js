import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const Drawer = () => {
  return (
    <div className="">
      <Sidebar className="bg-red-300 hover:bg-red-600">
        <Menu className=" text-left">
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
      ;
    </div>
  );
};

export default Drawer;
