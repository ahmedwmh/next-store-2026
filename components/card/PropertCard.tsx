import { PropertyCardProps } from '@/utils/types'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { formatPrice } from '@/utils/format';
import PropertyRating from './PropertyRating';
import { fa } from 'zod/v4/locales';
import FavoriteToggleButton from './FavoriteToggleButton';
import CountryFlag from './CountryFlag';

function PropertCard({property}:{property:PropertyCardProps}) {
  const {name, image, price, country, id:propertyId, tagline} = property;
  return (
    <div className='group relative'>
      
        <div className='relative h-[300px] mb-2 overflow-hidden rounded-md'>
          <div className='absolute top-5 right-5 z-50'>
            <FavoriteToggleButton propertyId={propertyId} />
          </div>
          <Image src={image} alt={name} fill className='object-cover group-hover:scale-110 transition-all duration-300' />
        </div>
        <Link href={`/properties/${propertyId}`}>  
        <div className='flex justify-between items-center'>
          <h2 className='text-sm fount-semibold mt-1'>{name}</h2>
          {/* rating */}
          <PropertyRating propertyId={propertyId} inPage={false}/>
        </div>
        <p className='text-sm mt-1 text-muted-foreground'>{tagline}</p>

        <div className='flex justify-between items-center mt-1'>
          <p className='text-sm mt-1'>
            {formatPrice(price)} / Night
          </p>
           <CountryFlag countryCode={country} />
        </div>

        <div className='absolute top-5 right-5 z-5'>
           {/* favorite toggle button */}
        </div>
       
       
       
       </Link>
    </div>
  )
}

export default PropertCard