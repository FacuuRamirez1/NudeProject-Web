import Image from "next/image"
import { CollectionType } from "../types/collections"
import Link from "next/link"

interface Prop {
    collection: CollectionType,
}

export const CollectionCard = ({ collection }: Prop) => {
    return(
        <div key={collection.id} className="bg-[#D9D9D9] flex flex-col w-full group cursor-pointer">
            <div className="relative aspect-4/5 w-full overflow-hidden bg-[#D9D9D9] p-3">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${collection.images.url}`}
                    alt={collection.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>
            <div className="bg-[#D9D9D9] py-5 flex flex-col items-center justify-center gap-2 border-t border-gray-300">
                <h3 className="text-[#3E2723] font-bold text-base uppercase tracking-widest text-center px-2 ">
                    {collection.name}
                </h3>
                <Link href={`/collections/${collection.slug}`} className="bg-[#3E2723] text-white px-10 py-4 text-xs md:text-sm font-bold uppercase hover:bg-[#755550] transition-all duration-300 border-2 rounded-2xl">
                    View collection
                </Link>
            </div>
        </div>
    )
}