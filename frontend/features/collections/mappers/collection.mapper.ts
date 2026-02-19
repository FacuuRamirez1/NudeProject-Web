import { CollectionType } from "../types/collections";
import { CollectionSchema } from '@nudeproject/schemas';

export const mapCollection = (dto: CollectionSchema): CollectionType => {
    return {
        id: dto.id,
        name: dto.collectionName,
        slug: dto.slug,
        images: dto.collectionImage,
        isActive: dto.isActive && false,
    };
};