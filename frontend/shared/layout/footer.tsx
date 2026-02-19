import Link from "next/link";
import Np_phrase from "../ui/np_phrase";
import { InstagramIcon, SpotifyIcon, TiktokIcon, YoutubeIcon } from "../ui/socialIcons";

const dataFooter = [
    {
        id: 1,
        name: "Privacy Policy",
        link: "https://nude-project.com/policies/privacy-policy",
    },
    {
        id: 2,
        name: "Terms and Conditions",
        link: "https://nude-project.com/pages/terms-conditions",
    },
    {
        id: 3,
        name: "FAQ",
        link: "/faq",
    },
]

const Footer = () => {
    return (
        <footer className="bottom-0 left-0 right-0 w-full bg-black z-50 overflow-hidden">
            <div className="left-0 right-0 max-w-full p-4 py-4">
                <div className="flex flex-col md:flex-row items-center justify-between sm:gap-0">
                    <Link href="/" className="shrink-0 ml-2 hidden lg:mr-[10%] lg:block">
                        <Np_phrase w={200}/>
                    </Link>

                    <div className="flex flex-row items-center justify-center text-white mt-2 md:mt-0 gap-4 order-2 md:order-2">
                        <Link href="https://www.instagram.com/nudeproject/" target="_blank"><InstagramIcon/></Link>
                        <Link href="https://www.tiktok.com/@nudeproject?is_from_webapp=1&sender_device=pc" target="_blank"><TiktokIcon/></Link>
                        <Link href="https://open.spotify.com/show/4WzIPM7Sq05chgMtwPmjPR?nd=1&dlsi=7ee2ef84a9904311" target="_blank"><SpotifyIcon/></Link>
                        <Link href="https://www.youtube.com/c/NUDEPROJECT/videos" target="_blank"><YoutubeIcon/></Link>
                    </div>

                    <ul className="flex flex-row items-center justify-center text-[10px] sm:text-sm text-white gap-1 lg:gap-3 order-1 md:order-3 sm:pb-1">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link href={data.link} className=" font-bold hover:underline me-3 md:me-5 m-auto">{data.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;