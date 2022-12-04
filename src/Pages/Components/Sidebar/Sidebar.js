import React from 'react';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


const Sidebar = () => {
    return (
        <div>
             <Sidebar>
        <Menu>
          <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu>
          <MenuItem> Documentation </MenuItem>
          <MenuItem> Calendar </MenuItem>
        </Menu>
      </Sidebar>
        </div>
    );
};

export default Sidebar;