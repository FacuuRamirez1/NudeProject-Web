'use client'
import { useRouter, usePathname } from "next/navigation"
import { User } from "lucide-react";
import { SearchProduct } from "./search";
import { CartPopover } from "../../features/cart/components/CartPopover";
import MenuMobile from "./menu_mobile";
import Np_logo from "../ui/Np_logo";
import MenuList from "./menu_list";
import { logout } from "@/features/account/services/account.service";

interface Props {
    isLoggedIn: boolean;
};

export const NavbarComponents = ({ isLoggedIn }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const isHome = pathname === '/';

    const handleLoguot = async () => {
        await logout();
        router.push('/');
        router.refresh();
    }


    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-full lg:max-w-full py-7 bg-black text-white">
            <div className="flex lg:hidden">
                <MenuMobile/>
            </div>
            <div className={`text-3xl font-bold ${isHome ? 'border-b-2 border-white pb-1' : ''}`} onClick={() => router.push('/')}>
                <Np_logo color="#ffffff" w={151} h={25} />
            </div>
            <div className="items-center justify-between hidden lg:flex">
                <MenuList/>
            </div>
            <div className="flex items-center justify-between gap-2 md:gap-5">
                <SearchProduct/>
                <CartPopover/>
                <User strokeWidth={1.5} className="cursor-pointer" onClick={() => router.push(isLoggedIn ? '/account' : '/login')} onChange={handleLoguot}/>
            </div>
        </div>
    )
}
