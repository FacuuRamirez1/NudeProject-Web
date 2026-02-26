import { cookies } from "next/headers";
import { NavbarComponents } from "./NavbarComponent";

const Navbar = async () => {
    const cookiesStore = await cookies();
    const token = cookiesStore.get('token')?.value
    const isLoggedIn = !!token;

    return <NavbarComponents isLoggedIn={isLoggedIn}/>;
};

export default Navbar;