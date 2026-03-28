import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';


type FormInputProps = {
    name:string;
    type:string;
    placeholder?:string;
    label?:string;
    defaultValue?:string;
}


function FormInput({name,type,placeholder,label, defaultValue}: FormInputProps) {
  return (
    <div className='mb-4'>
        <Label htmlFor={name} className='capitalize mb-2 pl-1'>
            {label} 
        </Label>
        <Input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder }
        defaultValue={defaultValue}
        required
        />
    </div>
  )
}

export default FormInput