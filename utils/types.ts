


export type PropertyCardProps = {
    id:string;
    image:string;
    name:string;
    tagline:string;
    country:string;
    price:number;
   
}

export type actionFunction = 
    (prevState:any, formData:FormData) => Promise<{message:string}>;