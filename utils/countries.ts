import countries from 'world-countries';


export const formattedCountries = countries.map((item)=>({

  code : item.cca2,
  name: item.name.common,
  flag: item.flag,
  location: item.latlng,
  region: item.region,
  
    
}));


export const getCountryByCode = (code:string) => {
    return formattedCountries.find((country)=>country.code === code);
}