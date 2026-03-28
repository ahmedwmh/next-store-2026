import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';


type Props = {
  heading:string;
  message:string;
  btnText:string;
}

function EmptyList(
  {
    heading="no items in the list",
    message="try changing the search or category",
    btnText="back home"

} : Props
) {
  return (
    <div className='mt-4'>
      <h2 className='text-2xl font-bold'>{heading}</h2>
      <p className='text-lg'>{message}</p>
      <Button asChild className='mt-4 capitalize' size={'lg'}>
        <Link href="/">{btnText}</Link>
      </Button>

    </div>
  )
}

export default EmptyList