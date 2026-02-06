import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";

const MenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent className="mt-4">
                <Link href="/collections" className="block m-0.5 p-1 hover:bg-white/10 border-transparent rounded-lg">Collections</Link>
                <Link href="/products" className="block m-0.5 p-1 hover:bg-white/10 border-transparent rounded-lg">View All</Link>
                <Link href="/aboutus" className="block m-0.5 p-1 hover:bg-white/10 border-transparent rounded-lg">About Us</Link>
                <Link href="/contacts" className="block m-0.5 p-1 hover:bg-white/10 border-transparent rounded-lg">Contact</Link>
            </PopoverContent>
        </Popover>
    );
}

export default MenuMobile;