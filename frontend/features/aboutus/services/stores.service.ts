import { mapStore } from "../mappers/store.mapper";
import { StoreDto } from "@nudeproject/schemas";

// STORES FETCHING FROM ABOUT US
export const getStores = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/stores?populate=*`);

    if(!res.ok) {
        throw new Error("Failed to fetch stores");
    }

    const data: StoreDto[] = await res.json();
    return data.map(mapStore);
}