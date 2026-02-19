
import { Menu } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

const MenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent className=" border-none rounded-none mt-4 flex flex-col gap-1">
                <Link href="/collections" className="block m-0.5 p-1 hover:bg-white/10 border border-white rounded-lg text-center">Collections</Link>
                <Link href="/products" className="block m-0.5 p-1 hover:bg-white/10 border border-white  rounded-lg text-center">View All</Link>
                <Link href="/aboutus" className="block m-0.5 p-1 hover:bg-white/10 border border-white rounded-lg text-center">About Us</Link>
                <Link href="/contacts" className="block m-0.5 p-1 hover:bg-white/10 border border-white  rounded-lg text-center">Contact</Link>
            </PopoverContent>
        </Popover>
    );
}

export default MenuMobile;