'use client';

import React from 'react'
import { Button } from '../ui/button';
import { useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';


type Props  = {
    className? :string;
    text?:string;
    size?:'default' | 'sm' | 'lg';
}


function FormButton({
    className='',
    text="Submit",
    size='lg'
    }:Props) {

    const  {pending} = useFormStatus(); 
  return (
    <Button
        type='submit'
        disabled={pending}
        className={`capitalize ${className}`}
        size={size}
    >

        {pending ? (
            <>  <Loader2  className='h-4 w-4 animate-spin'/> Please wait ...  </>
        ): (
            text
        )
    }

    </Button>
  )
}

export default FormButton