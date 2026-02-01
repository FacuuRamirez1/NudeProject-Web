'use client'
import { useRouter, usePathname } from "next/navigation"
import Np_logo from "@/components/ui/Np_logo";
import { Search, ShoppingCart, User } from "lucide-react";
import MenuList from "@/components/ui/menu_list";
import MenuMobile from "./menu_mobile";

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === '/';

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-full lg:max-w-full py-7 bg-black text-white">
            <div className="flex sm:hidden">
                <MenuMobile />
            </div>
            <div className={`text-3xl font-bold ${isHome ? 'border-b-2 border-white pb-1' : ''}`} onClick={() => router.push('/')}>
                <Np_logo color="#ffffff" w={151} h={25} />
            </div>
            <div className="items-center justify-between hidden sm:flex">
                <MenuList />
            </div>
            <div className="flex items-center justify-between gap-2 sm:gap-5">
                <Search strokeWidth={1.5} className="cursor-pointer" />
                <ShoppingCart strokeWidth={1.5} className="cursor-pointer" onClick={() => router.push('/cart')} />
                <User strokeWidth={1.5} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default Navbar;