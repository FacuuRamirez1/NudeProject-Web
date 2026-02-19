import { mapArticle } from "../mappers/article.mapper";
import { mapSection } from "../mappers/section.mapper";
import { ArticleDto } from "@nudeproject/schemas";
import { SectionDto } from "@nudeproject/schemas";

// FAQ SECTION FETCHING
export const getSections = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq-items?populate[faqArticles][count]=true&populate[image]=true`);

    if(!res.ok) {
        throw new Error("Failed to fetch faq sections");
    }

    const data: SectionDto[] = await res.json();
    return data.map(mapSection);
}

// FAQ ARTICLES FETCHING

export const getArticles = async (slug: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq-articles?filters[faqItems][slug][$eq]=${slug}&populate=faqItems&populate=content`);

    if(!res.ok) {
        throw new Error("Failed to fetch faq articles");
    }

    const data: ArticleDto[] = await res.json();
    return data.map(mapArticle);
}


// ARTICLE SELECTED FETCHING FOR SLUG
export const getArticleBySlug = async (slug: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/faq-articles?filter[slug][$eq]=${slug}&populate=faqItems&populate=content`);

    if(!res.ok) {
        throw new Error("Failed to fetch faw articles by slug");
    }

    const data: ArticleDto = await res.json();
    return mapArticle(data);
}