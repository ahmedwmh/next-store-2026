import CategoryInput from '@/components/form/CategoryInput'
import CounterInput from '@/components/form/CounterInput'
import CountriesInputForm from '@/components/form/Countries'
import FormButton from '@/components/form/FormButton'
import FormContainer from '@/components/form/FormContainer'
import FormImageInput from '@/components/form/FormImageInput'
import FormInput from '@/components/form/FormInput'
import PriceInput from '@/components/form/PriceInput'
import ServicesInput from '@/components/form/ServicesInput'
import TextAreaInputForm from '@/components/form/TextArea'
import { createPropertyAction } from '@/utils/actions'


function CreateRentals() {
  return (
    <section>
        <h1 className='text-2xl font-semibold mb-8 mt-10 capitalize'>Create Rental</h1>
        <div className='border p-8 rounded-md'>
            <FormContainer actions={createPropertyAction} >
                <div className='grid md:grid-cols-2 gap-8 mb-4'>
                    <FormInput
                    type='text'
                    name='name'
                    label='Name'
                    />

                    <FormInput
                    type='text'
                    name='tagline'
                    label='Tagline'
                    />

                   <PriceInput  />
                  <CategoryInput />
                </div>
                 <TextAreaInputForm name='description' labelText='Description' />

                 <div className='grid sm:grid-cols-2 gap-8 mt-4'>
                  <CountriesInputForm />
                  <FormImageInput name='image' />
                  <CounterInput  details="bedrooms"/>
                  <CounterInput  details="guests"/>
                  <CounterInput  details="bathrooms"/>
                 </div>
                 <div className='mt-6'>

                  <h3 className='text-lg font-semibold mb-4'>Services</h3>
                  <ServicesInput />
                 </div>
                 

                <FormButton
                 text='Create Rental'
                 className='mt-6'
                />
            </FormContainer>
        </div>
    </section>
  )
}

export default CreateRentals