import React from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { categories } from '@/utils/categories'
import Link from 'next/link';

function CategoriesList({category, search}:{category?:string, search?:string}) {
  const searchTerm = search? `&search=${search}`: "";
  return (
    <section>
        <ScrollArea className='py-6'>
          <div className='flex gap-x-4'>
            {categories.map((item)=>{
              const isActive = category === item.label;
              return (
                <Link href={`/?category=${item.label}${searchTerm}`} key={item.label}>
                  <article className='p-3 flex flex-col items-center cursor-pointer hover:text-primary transition-colors'>

                    <item.icon />
                    <p className='capitalize text-sm mt-1'>{item.label}</p>
                  </article>
                </Link>
              )

            })}
          </div>
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
    </section>
  )
}

export default CategoriesList