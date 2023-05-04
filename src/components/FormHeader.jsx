import React from 'react'
import { IconButton, Avatar } from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button} from '@arco-design/web-react';


function FormHeader() {
  return (
    <div className='flex items-center justify-between mx-5 my-2 bg-gray-50'>
        <div className="flex items-center justify-evenly m-2 p-2 ">
          <input type="text" placeholder='Untitled Form' className="font-sans text-lg font-medium leading-4 ml-4 w-40"  />
        </div>
        <div className="flex items-center justify-between">
            <IconButton>
                <VisibilityIcon className='text-lg mx-1'/>
            </IconButton>
            <Button type='primary' className="rounded-md font-semibold text-base mx-1">Send</Button>
          <IconButton>
            <Avatar className='text-lg mx-1'/>
          </IconButton>
        </div>
    </div>
  )
}

export default FormHeader