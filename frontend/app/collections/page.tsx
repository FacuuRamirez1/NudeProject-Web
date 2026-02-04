'use client'
import Skeleton from "@/components/ui/skeleton";
import { useGetCollections } from "../api/useGetCollections";
import { CollectionType } from "@/types/collections";
import { ResponseType } from "@/types/responses";
import Image from "next/image";
import Link from "next/link";

const CollectionsPage = () => {
    const { loading, req }: ResponseType<CollectionType[]> = useGetCollections()

    return (
        <main className="bg-[url(/bg-HomePage.webp)] bg-cover pb-16 bg-center">
            <div className="w-full min-h-[calc(100vh-4rem)] m-0 p-0 bg-black/40 text-white flex flex-col items-center justify-self-start gap-8 sm:gap-6 md:gap-4 lg:gap-2">
                <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3">COLLECTIONS</h1>
                <div className="ml-2 md:-ml-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-5 lg:gap-x-7 w-full max-w-4xl px-8 mb-6">
                    {loading ? (
                        <Skeleton />
                    ) : (
                        req?.map((collection: CollectionType) => {
                            return (
                                <div key={collection.id} className="bg-[#D9D9D9] flex flex-col w-full group cursor-pointer">
                                    <div className="relative aspect-4/5 w-full overflow-hidden bg-[#D9D9D9] p-3">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${collection.collectionImage.url}`}
                                            alt={collection.collectionName}
                                            fill
                                            unoptimized
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="bg-[#D9D9D9] py-5 flex flex-col items-center justify-center gap-2 border-t border-gray-300">
                                        <h3 className="text-[#3E2723] font-bold text-base uppercase tracking-widest text-center px-2 ">
                                            {collection.collectionName}
                                        </h3>
                                        <Link href={`/collections/${collection.slug}`} className="bg-[#3E2723] text-white px-10 py-4 text-xs md:text-sm font-bold uppercase hover:bg-[#755550] transition-all duration-300 border-2 rounded-2xl">
                                            View collection
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    )}
                </div>
            </div>
        </main >
    );
};

export default CollectionsPage;