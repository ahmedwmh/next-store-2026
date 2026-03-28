import React, { Suspense } from 'react'
import Logo from './logo'
import Navsearch from './navsearch'
import Darkmode from './darkmode'
import LinksDropdown from './linksDropdown'

function Navbar() {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        <Suspense
          fallback={
            <div
              className="h-9 max-w-xs w-full animate-pulse rounded-md bg-muted"
              aria-hidden
            />
          }
        >
          <Navsearch />
        </Suspense>
        <div className='flex gap-4 items-center'>
           <Darkmode />
            <LinksDropdown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar