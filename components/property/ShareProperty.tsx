'use client'

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { LuShare2 } from 'react-icons/lu'
import {LinkedinIcon,LinkedinShareButton,EmailIcon,EmailShareButton} from 'react-share'

function ShareProperty({propertyId}:{propertyId:string}) {

    const url = "http://localhost:3000/";
    const shareLink  = `${url}/properties/${propertyId}`
  return (

    <div>
        <Button> <LuShare2 /> Share</Button>
    </div>
    //  <Popover>
    //     <PopoverTrigger asChild>
    //         <Button> <LuShare2 /> Share</Button>
    //     </PopoverTrigger>
    //     <PopoverContent 
    //         side='left'
    //         align='end'
    //         sideOffset={10}
    //         className='flex items-center gap-x-2 justify-center w-full'>
    //         <LinkedinShareButton url={shareLink}>
    //             <LinkedinIcon size={30} round/>
    //         </LinkedinShareButton>
    //         <EmailShareButton url={shareLink}>
    //             <EmailIcon  size={30} round/>
    //         </EmailShareButton>
    //     </PopoverContent>
    //  </Popover>
  )
}

export default ShareProperty