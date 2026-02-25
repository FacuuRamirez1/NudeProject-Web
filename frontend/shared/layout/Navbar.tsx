export const Navbar = () => {
    const token = cookies().get('token');
    const isLoggedIn = !!token;

    return <NavbarComponents isLoggedIn={isLoggedIn}/>;
};