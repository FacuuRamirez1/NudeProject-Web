import Link from "next/link";
import { Button } from "../types/faqArticles";

export function ButtonBlock ({ label, href }: Button) {
    return (
        <Link href={href} className="w-[75%] py-2 my-4 bg-[#492A23] text-lg font-bold text-white text-center">
            {label}
        </Link>
    );
}