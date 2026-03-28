'use client';
import { actionFunction } from '@/utils/types';
import { LucideUser2 } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from '../ui/button';
import FormContainer from './FormContainer';
import FormImageInput from './FormImageInput';
import FormButton from './FormButton';


type Props = {
    children?:React.ReactNode;
    text?:string;
    action: actionFunction;
    name:string;
    image:string;
}

function ImageInputContainer(props:Props) {
  const { text, action, name, image} = props;
  const [isFormVisible, setIsFormVisible] = useState(false);
  const userIcon = (
    <LucideUser2 className='w-24 h-24 bg-primary rounded-md text-white mb-4' />
  ) ; 
  return (
    <div>
    {image ? (
        <Image 
        src={image}
        width={100}
        height={100}
        alt={name}
        className='rounded-md object-cover mb-4 w-24 h-24'
        />
    ) : userIcon}

    <Button variant={'outline'} size={'sm'} onClick={()=>setIsFormVisible((e)=>!e)}>
        {text}
    </Button>

    {isFormVisible && (
      <div className='max-w-lg mt-4'>
        <FormContainer actions={action}>
           {props.children}
           <FormImageInput name='image' />
           <FormButton size='sm' />
        </FormContainer>
      </div>
    )}
  </div>
  )
}

export default ImageInputContainer