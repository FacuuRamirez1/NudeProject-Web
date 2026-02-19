import Link from "next/link";
import { Articles } from "../types/faqArticles";

interface Prop {
    article: Articles;
}

export const ArticleCard = ({ article }: Prop) => {
    return (
        <Link href={`/faq/info/${article.slug}`} key={article.id} className="h-full flex flex-col pl-4 pr-1 py-3 justify-center border-3 border-[#492A23] rounded-2xl bg-[#D9D9D9]">
            <h3 className="font-bold text-lg text-[#492A23]">{article.title}</h3>
            <p className="font-semibold text-gray-600">{article.excerpt}</p>
        </Link>
    )
};