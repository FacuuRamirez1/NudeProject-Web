import { StoreType } from "../types/stores";
import { StoreDto } from "@nudeproject/schemas";

export const mapStore = (dto: StoreDto): StoreType => {
    return {
        id: dto.id,
        name: dto.storeName,
        location: dto.location,
        hour1: dto.openingHours1,
        hour2: dto.openingHours2,
        hour3: dto.openingHours3,
        image: dto.storeImage,
    };
};