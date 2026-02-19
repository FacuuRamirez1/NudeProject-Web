import { Section } from "../types/faqSection";
import { SectionDto } from '@nudeproject/schemas';

export const mapSection = (dto: SectionDto): Section => {
    return {
        id: dto.id,
        title: dto.title,
        slug: dto.slug,
        image: dto.image,
        faqArticles: dto.faqArticles,
    };
};