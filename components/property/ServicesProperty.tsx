
import { Service } from '@/utils/services';
import { LuFolderCheck } from 'react-icons/lu';


function ServicesProperty({ services }: { services: string }) {

  
  const amenitiesList:Service[]  = JSON.parse(services as string);
  
  const noAmenities = amenitiesList.every((serv) => !serv.selected);
  if (noAmenities) {
    return null;
  }
  return (
    <div className='mt-4'>
     
      <div className='grid md:grid-cols-2 gap-x-4'>
        {amenitiesList.map((serv) => {
          if (!serv.selected) {
            return null;
          }
          return (
            <div key={serv.name} className='flex items-center gap-x-4 mb-2 '>
              <LuFolderCheck className='h-6 w-6 text-primary' />
              <span className='font-light text-sm capitalize'>
                {serv.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default ServicesProperty;