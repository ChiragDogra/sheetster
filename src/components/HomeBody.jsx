import React from "react";
import { IconButton } from "@mui/material";
import { ArrowDropDown, Storage, MoreVert } from "@mui/icons-material";
import Sheet from "../images/Sheet.png";

function HomeBody() {
  return (
    <div className="bg-white mx-36">
      <div className="flex mt-4 flex-row justify-between items-center">
        <div className="">Recent Forms</div>

        <div className="flex items-center">
          <div className="flex box-content items-center px-2 py-3">
            Owned By Anyone <ArrowDropDown />
          </div>
          <IconButton>
            <Storage />
          </IconButton>
        </div>
      </div>

      <div className="flex flex-wrap justify-start mt-2 ">
      {/* Card  starts here */}
        <div className="flex flex-col box-border w-40 mr-3 rounded-md cursor-pointer shadow-sm hover:shadow-lg hover:scale-105  ease-in-out duration-300">
          <img src={Sheet} className="box-border w-40" alt="doc" />
          <div className="flex flex-col justify-between p-3">
            <h5></h5>
            <div className="flex flex-row justify-between mt-1 ">
              <div className="flex flex-row items-center text-xs">
                <Storage style={{ height: 16 }} />
              </div>
              <IconButton>
                <MoreVert style={{ height: 16 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
