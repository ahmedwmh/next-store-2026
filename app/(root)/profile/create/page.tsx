import FormButton from '@/components/form/FormButton'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import { createProfileAction } from '@/utils/actions'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'




async function CreateProfileAction() { 

  const user = await currentUser();
  if(user?.privateMetadata.hasProfile){
    redirect('/');
  }

  return (
    <section>
        <h1 className='text-2xl font-semibold mb-8 mt-10 capitalize'>New User</h1>
        <div className='border p-9 rounded-md max-w-2xl'>
            <FormContainer actions={createProfileAction} >
                <div className='grid gap-4 mt-4'>
                        <FormInput  type='text' name='firstName' label='First Name'/>
                        <FormInput type='text' name='lastName' label='Last Name' />
                        <FormInput type='text' name='username' label='Username' />
                </div>
                <FormButton  text='Create Profile' className='mt-8'/>
            </FormContainer>
        </div>
    </section>
  )
}

export default CreateProfileAction