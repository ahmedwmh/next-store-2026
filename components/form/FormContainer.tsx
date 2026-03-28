'use client';
import { actionFunction } from '@/utils/types';
import React, { useActionState, useEffect } from 'react'
import { useFormState } from 'react-dom';
import { toast } from 'sonner';

const initalState = {
    message: '',
}
function FormContainer({actions, children} : {
    actions:actionFunction;
    children:React.ReactNode;
}) {

   const  [state , formAction] =  useActionState(actions, initalState);

   useEffect(()=>{
        toast(state.message)
   },[state])

  return (
     <form action={formAction}>
        {children}
     </form>
  )
}

export default FormContainer