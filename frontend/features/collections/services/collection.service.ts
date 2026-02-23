import { CollectionSchema } from "@nudeproject/schemas/dist/collection.schema";
import { mapCollection } from "../mappers/collection.mapper";

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCollections = async () => {
    const res = await fetch(`${BASE_URL}/api/collections?[isActive][$eq]=true&populate=*`);

    if(!res.ok) {
        throw new Error("Failed to fetch collections");
    };

    const collections = await res.json();
    const data: CollectionSchema[] = collections.data;
    
    return data.map(mapCollection);
}