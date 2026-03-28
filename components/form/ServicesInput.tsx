'use client';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Service, services } from '@/utils/services';

function ServicesInput({defaultServices}:{defaultServices?:Service[]}) {
    const [selectedServices,setSelectedServices] = useState<Service[]>(
        defaultServices || services
    );

    const handleServiceChange = (selectedService:Service) => {
        setSelectedServices((prev:Service[])=>{
            return prev.map((a)=>{
                if(a.name === selectedService.name){
                    return {...a,selected:!a.selected};
                }
                return a;
            })
        })

    }
  return (
    <section className=''>
        <Input type='hidden' name="services"  value={JSON.stringify(selectedServices)}/>

        <div className='grid grid-cols-4 gap-4'>
            {selectedServices.map(ser => (
                <div key={ser.name} className='flex items-center gap-2'>
                    <Checkbox 
                     id={ser.name}
                     checked={ser.selected}
                     onCheckedChange={()=>handleServiceChange(ser)}
                    
                    />
                    <label htmlFor={ser.name} className='flex items-center gap-2'>
                        {ser.name}
                        <ser.icon className='w-4 h-4' />
                    </label>
                </div>
            ))}

        </div>
    </section>
  )
}

export default ServicesInput