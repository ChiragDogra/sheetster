import React from "react";
import { IconDown } from "@arco-design/web-react/icon";
import {IconButton} from "@mui/material";
import Add from "../images/Add.png"
import { nanoid } from 'nanoid';
import {useNavigate} from 'react-router-dom';

function Template() {
  const navigateTo = useNavigate();

  const createForm = () =>{
    const id_ = nanoid();

    navigateTo("/form/" + id_);
  }


  return (
    <div className="bg-gray-50  pb-8 pt-4">
      <div className="mx-10 flex flex-row items-center justify-between">
        <div className="">
          <span className="text-sm">Start New Form</span>
        </div>
        <div className="flex">
          <div className="flex justify-between items-center bg-transparent">
            <span className="text-sm">Template Gallery</span>
            <IconButton>
              <IconDown />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="mx-10 flex flex-row items-center justify-between" >
        <div className="ml-4 mt-3" onClick={createForm}>
          <img className="box-border h-40 w-60 cursor-pointer rounded-md shadow-sm hover:shadow-lg hover:scale-105  ease-in-out duration-300 hover:animate-spin" src={Add} alt="New Page" />
          <span className="text-xs p-1">Blank</span>
        </div>
      </div>
    </div>
  );
}

export default Template;
