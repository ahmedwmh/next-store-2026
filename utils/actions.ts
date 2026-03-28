
'use server'
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { imageSchema, profileSchema, propertySchema, validateWithZodSchema } from "./schema";
import db from "./db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { uploadImage } from "./supabase";
import { fa } from "zod/v4/locales";

export const createProfileAction = async (prevState:any, formData:FormData) => {
    try{
        const user = await currentUser();  // email name, profileImage 
        if(!user) throw new Error("Please Login to create a profile"); 
        // {key : value}
        const rawData = Object.fromEntries(formData);  // data forms
        
        // filter validation
        const validatedFields = profileSchema.parse(rawData);
        await db.profile.create({
            data: {
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                profileImage:user.imageUrl ?? "" ,
                ...validatedFields
            }
        });
        const client = await clerkClient();
        await client.users.updateUserMetadata(user.id, {
            privateMetadata: {
                hasProfile: true
            }
        })
    }
    catch(e){
        return {
            message: "Failed to create profile"
        }
        
    }
    redirect("/");



}
// fetch Profile Action
export const fetchProfileImage = async ()=>{
    const user = await currentUser();
    if(!user) return null;

   
    const profile = await db.profile.findUnique({
        where:{
            clerkId:user.id,
        },
        select:{
            profileImage:true
        }
    });

    console.log(profile?.profileImage);

    return profile?.profileImage
}

//#MAIN - update Profile Action
    //#1 user -> authenticated ? 

const getAuthUser = async()=>{
    const user = await currentUser();
    if(!user) throw new Error("You Must be logged in to access this page");

    if(!user.privateMetadata.hasProfile) redirect("/profile/create");

    return user;
    
}

export const fetchProfile = async()=>{
    const user = await getAuthUser();

    const profile = await db.profile.findUnique({
        where:{
            clerkId:user.id,
        }
    });

    if(!profile) redirect("/profile/create");

    return profile;
}

// ##### RENDER ERROR #####

const renderError = (error: unknown):{message:string} =>{
    return {
        message: error instanceof Error ? error.message : "Something went wrong"
    }
}

export const updateProfileAction = async(prevState:any, formData:FormData)=>{
    const user = await getAuthUser();
    try {
        const rawData = Object.fromEntries(formData);
        const validatedFields = validateWithZodSchema(profileSchema,rawData);

        await db.profile.update({
            where:{
                clerkId: user.id
            },
            data: validatedFields
        });
        // bug redirect to profile 
        // redirect("/profile");
        // revalidatePath("/profile");
        
        return {message:"Profile Updated Successfully"}
    }

    catch(e){
        return renderError(e);
    }
}

export const  updateProfileImageAction = async(prevState:any, formData:FormData)=>{
    const user = await getAuthUser();
    try{
        const image = formData.get('image') as File;
        const validatedFields = validateWithZodSchema(imageSchema, {image});

        const fullPath = await uploadImage(validatedFields.image);

        await db.profile.update({
            where:{
                clerkId: user.id
            },
            data:{
                profileImage: fullPath
            }
        })

        return {message:"Profile Image Updated Successfully"}
    }
    catch(e){
        return renderError(e);
    }
}

export const createPropertyAction = async(prevState:any, formData:FormData)=>{
    const user = await getAuthUser();
    try {

        const rawData = Object.fromEntries(formData); // form 
        const file  =formData.get('image') as File;


        const validatedFields = validateWithZodSchema(propertySchema,rawData);
        const validatedFile = validateWithZodSchema(imageSchema,{image:file});
        const fullPath = await uploadImage(validatedFile.image);

        await db.property.create({
            data: {
                ...validatedFields,
                image: fullPath,
                profileId: user.id,
            }
        });
        return {message:"Property Created Successfully"}
    }
    catch(e){
        return renderError(e);
    }

};


export const fetctPropertyAction = async({search='', category}:{search?:string, category?:string})=>{
    const properties = await db.property.findMany({
        where:{
            category,
            OR:[
                {name:{contains:search, mode:'insensitive'}},
                {tagline:{contains:search, mode:'insensitive'}},
            ]
        },
        select: {
            id:true,
            image:true,
            tagline:true,
            country:true,
            price:true,
            name:true,
        }
    }); 
    return properties;
}


export const fetchFavoriteId  = async({propertyId} :{propertyId:string})=>{

    const user = await getAuthUser(); // user.id
    const favorite = await db.favorite.findFirst({
        where : {
            propertyId,
            profileId: user.id
        },
        select:{
            id:true
        }
    });

    return favorite?.id || null

}





export const toggleFavoriteAction = async(prevState: {
    favoriteId: string | null;
    propertyId: string;
})=>{

    const user = await getAuthUser();
    const {favoriteId, propertyId} = prevState;
    try {
        if(favoriteId){
            await db.favorite.delete({
                where:{id:favoriteId}
            })
        }else{
            await db.favorite.create({
                data:{
                    propertyId,
                    profileId: user.id
                }
            })
        }

    }
    catch(e){
        return renderError(e);
    }
    return {message:favoriteId ? "Removed from Faves" : "Added to Faves"}
}


// Fetch Favorites

export const fetchFavorites = async()=>{

    const user = await getAuthUser();
    const favorites = await db.favorite.findMany({
        where:{
            profileId: user.id
        },
        select:{
            property:{
                select:{
                    id: true,
                    name: true,
                    tagline: true,
                    price: true,
                    country: true,
                    image: true,
                }
            }
        }
    });
    return favorites.map((fav)=> fav.property); 
 
}


export const fetchPropertyDetails = async(id:string) =>{ 
    return await db.property.findUnique({
        where:{
            id
        },
        include: {
            profile:true,
        }
        
    })
}