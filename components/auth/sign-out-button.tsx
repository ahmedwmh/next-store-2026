'use client';

import { SignOutButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
import { toast } from "sonner"


function SignOutLink() {

  const handleLogout = ()=> {
    toast("You Have Been Signed Out !");
  }
  return (
    <SignOutButton redirectUrl='/'>
      <Button variant={"destructive"} onClick={handleLogout}>
        Logout
      </Button>
    </SignOutButton>
  )
}

export default SignOutLink