import { mapCollection } from "../mappers/collection.mapper";
import { CollectionSchema } from '@nudeproject/schemas';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getCollections = async () => {
    const res = await fetch(`${BASE_URL}/api/collections?[isActive][$eq]=true&populate=*`);

    if(!res.ok) {
        throw new Error("Failed to fetch collections");
    };

    const data: CollectionSchema[] = await res.json();
    return data.map(mapCollection);
}

export async function fetchCollections() {
    const url = `${BASE_URL}/api/collections?[isActive][$eq]=true&populate=*`;

    const res = await fetch(url, { cache: 'no-store'});
    const json = await res.json();

    return json.data;
}