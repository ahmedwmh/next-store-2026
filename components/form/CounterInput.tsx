'use client';

import React, { useState } from 'react'
import { Card, CardHeader } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { LuMinus, LuPlus } from 'react-icons/lu'

function CounterInput({details}:{details:string}) {

    const [count,setCount] = useState(0);

    const handleIncrement = () => {
        setCount((prev)=>prev + 1);
    }

    const handleDecrement = () => {
        setCount((prev)=>prev > 0 ? prev - 1 : 0);
    }

  return (
   <Card className='mb-4'>
     <Input type='hidden' name={details} value={count} />

     <CardHeader className='flex flex-col gap-y-5'>
        <div className='flex w-full items-center justify-between flex-wrap '>
            <div>
                <h2>{details}</h2>
                <p>
                    Specify the number of {details}
                </p>
            </div>

            <div  className='flex items-center gap-4 '>
                <Button 
                variant={'outline'} 
                size={'icon'} 
                type='button'
                onClick={handleDecrement}
                >
                    <LuMinus />
                </Button>

                <span className='text-xl font-bold w-5 text-center'>
                    {count}
                </span>

                <Button 
                variant={'outline'} 
                size={'icon'} 
                type='button'
                onClick={handleIncrement}
                >
                    <LuPlus className='2-5 h-5 text-primary' />
                </Button>
            </div>

        </div>

     </CardHeader>
    
   </Card>
  )
}

export default CounterInput