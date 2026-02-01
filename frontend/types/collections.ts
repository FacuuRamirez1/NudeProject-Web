export type CollectionType = {
    id: number,
    collectionName: string,
    slug: string,
    collectionImage: {
        id: number,
        url: string,
    },
    isActive: boolean | null,
}