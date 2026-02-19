import { usePathname } from "next/navigation";
import { Articles } from "../types/faqArticles"
import { ArticleContentRender } from "./ArticleContentRender";
import { FaqBreadcrum } from "./faqBreadcrumb";

interface Prop {
    article: Articles
}

export const Article = ({article}: Prop) => {
    const path = usePathname();

    return (
        <div key={article.id} className="flex flex-col items-start border-2 border-[#492A23] w-[65%] h-auto p-3 bg-[#D9D9D9]/90">
            <FaqBreadcrum path={path} faqItemText={article.faqSection.title}/>
            <div className="flex flex-col items-center my-10">
                <h1 className="font-bold text-4xl mb-6 text-[#492A23] border-b border-b-[#492A23] pb-5">{article.title.toUpperCase()}</h1>
                <ArticleContentRender content={article.content}/>
            </div>
        </div>
    );
};