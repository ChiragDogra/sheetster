import React from "react";
import "@arco-design/web-react/dist/css/arco.css";
import { IconMenu, IconSearch } from "@arco-design/web-react/icon";
import { IconButton, Avatar } from "@mui/material";
import TemporaryDrawer from "./TemporaryDrawer";

function Header() {
  return (
    <div className="sticky px-3 py-1 flex justify-between bg-gray-100 drop-shadow-sm">
      <div className="flex items-center">
        {/* <IconButton>
          <IconMenu className="" />
        </IconButton> */}

        <TemporaryDrawer/>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          className=" px-2  border-2 rounded-lg h-8"
          name="search"
        />
        <IconButton>
          <IconSearch />
        </IconButton>
      </div>

      <div className="flex items-center">
        <IconButton>
          <Avatar alt="Remy Sharp" src="" className="text-xs"/>
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
