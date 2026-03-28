import React from 'react'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import { Loader2 } from 'lucide-react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function CardSubmitButton({isFavorite}:{isFavorite:boolean}) {
    const {pending} = useFormStatus();
  return (
   <Button
   type='submit'
   disabled={pending}
   className={'p-2 cursor-pointer'}
   size={'icon'}
   >

   {pending ? (
    <> <Loader2 className='h-4 w-4 animate-spin'/> Please wait ... </>
   ): isFavorite ? (
    <FaHeart />
   ) : (
    <FaRegHeart />
   )}
   </Button>
  )
}

export default CardSubmitButton