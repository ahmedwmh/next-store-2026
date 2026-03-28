import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function loader() {
  return (
    <Skeleton className='h-[300px] rounded-md' />
  )
}

export default loader