import React from 'react'
import { FaStar } from 'react-icons/fa'
function PropertyRating({propertyId,inPage}:{propertyId:string,inPage?:boolean}) {
  const rating = 4.7;
  const count = 100;

  const className = `flex gap-1 items-center ${inPage ? 'text-sm' : 'text-xs'}`;
  const countText = count > 1 ? 'reviews' : 'review';
  const CountValue = `(${count} ${inPage ? countText : ''})`

  
  return (
    <span className={className}>
      <FaStar className=' w-3 h-3 text-yellow-500' />
      {rating} {CountValue}
    </span>
  )
}

export default PropertyRating