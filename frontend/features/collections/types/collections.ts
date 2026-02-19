export type CollectionType = {
    id: number,
    name: string,
    slug: string,
    images: collectionImage
    isActive: boolean | null,
}

export type collectionImage = {
    id: number,
    url: string,
}