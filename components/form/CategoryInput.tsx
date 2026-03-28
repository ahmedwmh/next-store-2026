
import { Label } from '../ui/label'
import { Select,SelectContent,SelectItem,SelectTrigger,SelectValue } from '../ui/select'
import { categories } from '@/utils/categories'



type Props = {
  defaultValue?:string;
}

const name = 'category'
function CategoryInput({defaultValue}:Props) {
  return (
   <div className='mb-2'>
    <Label htmlFor={name} className='capitalize mb-2'>
        Category
    </Label>
    
    <Select 
      defaultValue={defaultValue || categories[0].label}
      name={name}
      required
    >
      <SelectTrigger id={name}>
        <SelectValue placeholder='Select a category' />
      </SelectTrigger>
      <SelectContent>
        {categories.map((item)=>{
          return (
            <SelectItem key={item.label} value={item.label} >
              <span className='flex items-center gap-2'>
               <item.icon /> {item.label}
              </span>
            </SelectItem>
          )
        })}
      </SelectContent>

    </Select>
    
   </div>
  )
}

export default CategoryInput