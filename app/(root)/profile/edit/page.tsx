import FormButton from '@/components/form/FormButton'
import FormContainer from '@/components/form/FormContainer'
import FormInput from '@/components/form/FormInput'
import ImageInputContainer from '@/components/form/ImageInputContainer';
import { fetchProfile, updateProfileAction, updateProfileImageAction } from '@/utils/actions'


async function EditProfile() {
    const profile = await fetchProfile();
  return (
    <section>
       
        <h1 className='text-2xl font-semibold mb-8 mt-10 capitalize'>Edit Profile</h1>
        <div className='border p-8 font-semibold mb-8 capitalize'>
            <ImageInputContainer 
                action={updateProfileImageAction}
                name={profile.username} 
                image={profile.profileImage}
                text='Update Profile Image'
            
            />
        </div>
        <div className='border p-8 font-semibold mb-8 capitalize'>
            
            <FormContainer actions={updateProfileAction} >
                <div className='grid gap-4 mt-4'>
                    <FormInput type='text' name='firstName' label='First Name' defaultValue={profile?.firstName}/>
                    <FormInput type='text' name='lastName' label='Last Name' defaultValue={profile?.lastName}/>
                    <FormInput type='text' name='username' label='Username' defaultValue={profile?.username}/>
                </div>
                <FormButton text='Update Profile' className='mt-8' />
            </FormContainer>
        </div>
    </section>
  )
}

export default EditProfile