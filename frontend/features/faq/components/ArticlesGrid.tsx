import { Articles } from "../types/faqArticles";
import { ArticleCard } from "./ArticleCard";

interface Prop {
    articles: Articles[];
}

export const ArticlesGrid = ({ articles }: Prop) => {
    return (
        <div className="w-[70%] h-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {articles.map((article) => {
                return <ArticleCard key={article.id} article={article}/>
            })}
        </div>
    );
};