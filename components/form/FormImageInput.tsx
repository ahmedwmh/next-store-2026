import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type Props = {
    name:string;
}

function FormImageInput({name}:Props) {
  return (
    <div className='mb-2'>
        <Label htmlFor={name} className='capitalize mb-2'>
            Image
        </Label>
        <Input
        type='file'
        id={name}
        name={name}
        accept='image/*'
        className='max-w-xs'
        required
        />
    </div>
  )
}

export default FormImageInput