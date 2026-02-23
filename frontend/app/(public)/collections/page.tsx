import { getCollections } from "@/features/collections/services/collection.service";
import { CollectionGrid } from "@/features/collections/components/CollectionsGrid";

const CollectionsPage = async () => {
    const collections = await getCollections();

    return (
        <main className="w-full min-h-screen m-0 p-0 bg-black/40 text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
            <h1 className="font-bold text-5xl md:mb-[6%] lg:mb-[3%] mt-5 md:mt-[4%] lg:mt-[3%]">COLLECTIONS</h1>
            <CollectionGrid collections={collections}/>
        </main>
    );
};

export default CollectionsPage;