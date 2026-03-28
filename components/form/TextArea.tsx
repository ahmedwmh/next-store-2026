import React from 'react'
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type Props = {
    name:string;
    labelText?:string;
    defaultValue?:string;
}


function TextAreaInputForm({name,labelText,defaultValue}:Props) {
  return (
   <div className='mb-2'>
    <Label htmlFor={name} className='capitalize mb-2'>
        {labelText}
    </Label>
    <Textarea
    id={name}
    name={name}
    defaultValue={defaultValue || ''}
    required
    className='leading-loose'
    />
   </div>
  )
}

export default TextAreaInputForm