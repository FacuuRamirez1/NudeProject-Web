'use client'

import { Article } from "@/features/faq/components/Article";
import { getArticleBySlug } from "@/features/faq/services/content.service";

interface Prop {
    params: {
        slug: string,
    }
}

export async function ArticlePage ({ params }: Prop) {
    
    const article = await getArticleBySlug(params.slug);
    
    return(
        <main className="w-full min-h-[calc(100vh-4.9rem)] h-full flex flex-col justify-center items-center bg-transparent py-8">
            <Article article={article}/>
        </main>
    );
};

export default ArticlePage;