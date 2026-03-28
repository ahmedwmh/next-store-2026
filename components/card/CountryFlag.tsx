import { getCountryByCode } from '@/utils/countries'
import React from 'react'

function CountryFlag({countryCode}:{countryCode:string}) {
  const validateCountry =  getCountryByCode(countryCode); // get country by code
  const countryName  = validateCountry?.name;
  return (
    <span className='flex items-center justify-between gap-2 '>
       {validateCountry?.flag} {countryName}
    </span>
  )
}

export default CountryFlag