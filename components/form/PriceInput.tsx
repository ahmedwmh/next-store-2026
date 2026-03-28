import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

type Props = {
    defaultValue?:number;
}
function PriceInput({defaultValue}:Props) {
  return (
    <div className='mb-2'>

        <Label htmlFor='price' className='capitalize mb-2'>
            Price
        </Label>

        <Input
        type='number'
        id='price'
        name='price'
        min={0}
        placeholder='Enter price'
        defaultValue={defaultValue || 100}
        />
    </div>
  )
}

export default PriceInput