import Link from "next/link";
import { Section } from "../types/faqSection";
import Image from "next/image";

interface Prop {
    section: Section
}

export const SectionCard = ({ section }: Prop) => {
    const articleNumber = section.faqArticles.count;
    return(
        <Link href={`/faq/${section.slug}`}>
            <div className="relative overflow-hidden flex flex-col justify-end items-center rounded-2xl w-[90%] h-[200px]">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${section.image.url}`}
                    alt={section.title}
                    fill
                    unoptimized
                    loading="eager"
                    className="object-cover"
                    />
                <div className="relative bg-[#D9D9D9] w-full pl-4 py-1">
                    <h3 className="text-[#492A23] font-bold">{section.title}</h3>
                    <p className="text-gray-600">{articleNumber}{articleNumber > 1 ? " articles" : " article"}</p>
                </div>
            </div>
        </Link>
    );
};