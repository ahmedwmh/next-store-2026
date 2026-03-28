"use client";

import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button'
import { MoonIcon,SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

function Darkmode() {
  const {setTheme}= useTheme();
  return (
   <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} size={'icon'}>
          <SunIcon className='absolute h-[1.2rem] w-[1.2rem] scale-100 dark:scale-0'/>
          <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] scale-0 dark:scale-100' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>

        <DropdownMenuItem onClick={()=> setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={()=> setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={()=> setTheme("system")}>System</DropdownMenuItem>
        
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default Darkmode