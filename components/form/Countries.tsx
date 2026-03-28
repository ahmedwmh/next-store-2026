import { formattedCountries } from '@/utils/countries';
import { Label } from '../ui/label';
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from '../ui/select';
import { it } from 'node:test';
type Props = {
    defaultValue?:string;
  }
  

const name = 'country';
function CountriesInputForm({defaultValue}:Props) {
  return (
    <div className='mb-2'>
        <Label htmlFor={name} className='capitalize mb-2'>
            Country
        </Label>

        <Select 
            defaultValue={defaultValue || formattedCountries[0].code}
            name={name}
            required
        >
            <SelectTrigger id={name}>
                <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
                {formattedCountries.map((item)=>{
                return (
                    <SelectItem key={item.code} value={item.code} >
                    <span className='flex items-center gap-2'>
                    {item.flag} {item.name}
                    </span>
                    </SelectItem>
                )
                })}
            </SelectContent>
        </Select>
        
    </div>
  )
}

export default CountriesInputForm