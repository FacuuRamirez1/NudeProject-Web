import Image from "next/image";
import { StoreType } from "../types/stores";

interface Prop {
    store: StoreType;
}

export const StoreCard = ({ store }: Prop) => {
    return(
        <div className="flex flex-row bg-[#D9D9D9]/70 h-full w-full m-auto">
            <div className="relative flex overflow-hidden h-full w-40%">
                <Image src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${store.image.url}`} alt={store.name} width={200} height={300} unoptimized className="object-cover"/>
            </div>
            <div className="h-[90%] w-[60%] flex flex-col m-auto ml-3 my-2 gap-4 justify-start items-start text-[#3E2327]">
                <h2 className="font-bold text-2xl">{store.name}</h2>
                <p className="-mt-3">{store.location}</p>
                <div className="flex flex-col gap-0 w-[85%] font-bold">
                    <p>
                        {store.hour1 ? store.hour1 : ""}
                    </p>
                    <p>
                        {store.hour2 ? store.hour2 : ""}
                    </p>
                    <p>
                        {store.hour3 ? store.hour3 : ""}
                    </p>
                </div>
            </div>
        </div>
    );
};