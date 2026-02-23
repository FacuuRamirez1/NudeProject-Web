import { SectionDto } from "@nudeproject/schemas/dist/faqSections.schema";
import { mapArticle } from "../mappers/article.mapper";
import { mapSection } from "../mappers/section.mapper";
import { ArticleDto } from "@nudeproject/schemas/dist/faqArticles.schema";

// FAQ SECTION FETCHING
export const getSections = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq-items?populate[faqArticles][count]=true&populate[image]=true`);

    if(!res.ok) {
        throw new Error("Failed to fetch faq sections");
    }

    const sections = await res.json();
    const data: SectionDto[] = sections.data;
    
    return data.map(mapSection);
}

// FAQ ARTICLES FETCHING

export const getArticles = async (slug: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq-articles?filters[faqItems][slug][$eq]=${slug}&populate=faqItems&populate=content`);

    if(!res.ok) {
        throw new Error("Failed to fetch faq articles");
    }

    const articles = await res.json();
    const data: ArticleDto[] = articles.data;

    return data.map(mapArticle);
}


// ARTICLE SELECTED FETCHING FOR SLUG
export const getArticleBySlug = async (slug: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq-articles?filter[slug][$eq]=${slug}&populate=faqItems&populate=content`);

    if(!res.ok) {
        throw new Error("Failed to fetch faw articles by slug");
    }

    const articleBySlug = await res.json();
    const data: ArticleDto = articleBySlug.data;
    
    return mapArticle(data);
}