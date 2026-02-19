import { Articles } from "../types/faqArticles"
import { ArticleDto } from "@nudeproject/schemas"

export const mapArticle = (dto: ArticleDto): Articles => {
    return {
        id: dto.id,
        title: dto.title,
        slug: dto.slug,
        excerpt: dto.excerpt,
        content: dto.content,
        faqSection: dto.faqSection,
    };
};