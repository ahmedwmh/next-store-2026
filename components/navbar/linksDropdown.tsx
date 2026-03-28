import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { LuAlignLeft } from "react-icons/lu"

import { links } from "@/utils/links"
import Link from "next/link"
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs"
import SignOutLink from "../auth/sign-out-button"
import UserIcon from "./userIcon"


function LinksDropdown() {
  return (
   <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'} className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52" sideOffset={10} align="start">


            <SignedOut>

                <DropdownMenuItem>
                  <SignInButton mode="modal">
                      <Button className="w-full" >Login</Button>
                  </SignInButton>
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                 <DropdownMenuItem>
                  <SignUpButton mode="modal">
                      <Button className="w-full" variant={'outline'} >Register</Button>
                  </SignUpButton>
                </DropdownMenuItem>


            </SignedOut>

            <SignedIn>
               {links.map((link)=>{
                  return (
                    <DropdownMenuItem key={link.label}>
                      <Link href={link.href} className="capitalize w-full">{link.label}</Link>
                    </DropdownMenuItem>
                  )
                })}

                <DropdownMenuSeparator />

                 <DropdownMenuItem>
                    <SignOutLink />
                </DropdownMenuItem>
            </SignedIn>




           




      </DropdownMenuContent>
  </DropdownMenu>
  )
}
export default LinksDropdown