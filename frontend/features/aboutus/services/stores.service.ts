import { StoreDto } from "@nudeproject/schemas/dist/store.schema";
import { mapStore } from "../mappers/store.mapper";

// STORES FETCHING FROM ABOUT US
export const getStores = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stores?populate=*`);

    if(!res.ok) {
        throw new Error("Failed to fetch stores");
    }

    const stores = await res.json();
    const data: StoreDto[] = stores.data;
    
    return data.map(mapStore);
}