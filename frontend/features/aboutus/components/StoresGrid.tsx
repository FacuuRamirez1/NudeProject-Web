import { StoreType } from "../types/stores"
import { StoreCard } from "./StoreCard";

interface Prop {
    stores: StoreType[];
}

export const StoresGrid = ({ stores }: Prop) => {
    return (
        <div className="grid grid-cols-2 gap-12 lg:flex-row w-[60%] h-full justify-center items-center">
            {stores.map((store) => {
                return(
                    <StoreCard key={store.id} store={store}/>
                )
            })}
        </div>
    );
};