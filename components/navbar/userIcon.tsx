import { fetchProfileImage } from '@/utils/actions';
import { currentUser } from '@clerk/nextjs/server';
import { LucideUser2 } from 'lucide-react'
import React from 'react'

async function UserIcon() {
  
  const profileImage = await fetchProfileImage();

  if(profileImage){
    return <img 
                src={profileImage} 
                alt='profile image' 
                className='w-6 h-6 rounded-full object-cover' />
  }

  return (
    <LucideUser2 className='w-6 h-6 bg-primary rounded-full text-white' />
  )
}

export default UserIcon