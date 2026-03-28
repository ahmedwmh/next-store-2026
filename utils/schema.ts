
import * as z from 'zod';
import { ZodSchema } from 'zod';



export const profileSchema  = z.object({
    firstName : z.string(),
    lastName  : z.string(),
    username : z.string(),
});


export function validateWithZodSchema<T>(schema:ZodSchema<T>,data:unknown): T{
    const result = schema.safeParse(data);
    if(!result.success){
            
        const errors = result.error.issues.map((err)=> err.message);
        throw new Error(errors.join(", "));
    }
    return result.data

}

export const  imageSchema = z.object({
    image: validateFile()
})

// image type : image* : image size : 1MB 1024*1024
function validateFile(){
    const maxUploadSize = 1024*1024; // 1MB
    const acceptedFileTypes = ['image/']; //array ['image/']

    return z.instanceof(File)
    .refine((file)=>{
        return  !file || file.size <= maxUploadSize;
    }, "File must be an image and less than 1MB")
    .refine((file)=>{
        return !file || acceptedFileTypes.some((type)=> file.type.startsWith(type));
    }, "the file must be an image");

}


export const propertySchema = z.object({
    services: z.string(),
    name: z.string()
    .min(2,{message:"Name must be at least 2 characters"})
    .max(50,{message:"Name must be less than 50 characters"})
    .trim(),
    tagline: z.string()
    .min(10,{message:"Tagline must be at least 10 characters"})
    .max(100,{message:"Tagline must be less than 100 characters"})
    .trim(),
    category: z.string()
    .min(2,{message:"Category must be at least 2 characters"})
    .max(50,{message:"Category must be less than 50 characters"})
    .trim(),
    price: z.coerce.number().int().min(0,{message:"Price must be at least 0"}),
    guests: z.coerce.number().int().min(0,{message:"Guests must be at least 0"}),
    bedrooms: z.coerce.number().int().min(0,{message:"Bedrooms must be at least 0"}),
    bathrooms: z.coerce.number().int().min(0,{message:"Bathrooms must be at least 0"}),
    description: z.string()
    .min(10,{message:"Description must be at least 10 characters"})
    .max(10000,{message:"Description must be less than 10000 characters"})
    .trim(),
    country: z.string()
    .min(2,{message:"Country must be at least 2 characters"})
    .max(50,{message:"Country must be less than 50 characters"})
    .trim(),
    
})