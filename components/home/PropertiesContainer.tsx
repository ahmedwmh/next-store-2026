import React from 'react'
import { fetctPropertyAction } from '@/utils/actions';
import { PropertyCardProps } from '@/utils/types';
import EmptyList from './EmptyList';
import PropertiesList from './PropertiesList';


async function PropertiesContainer({category, search}:{category?:string, search?:string}) {
  const properties:PropertyCardProps[] = await fetctPropertyAction({ category, search });


  if(properties.length === 0){
    return <EmptyList  
        heading="no properties found"
        message="try changing the search or category"
        btnText="back home"
    />
  }

  return (
    <PropertiesList properties={properties} />
  )
}

export default PropertiesContainer