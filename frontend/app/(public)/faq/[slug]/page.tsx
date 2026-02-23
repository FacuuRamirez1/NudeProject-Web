
import { ArticlesGrid } from "@/features/faq/components/ArticlesGrid";
import { getArticles } from "@/features/faq/services/content.service";

interface Prop {
    params: {
        slug: string,
    }
}

const SectionPage = async ({ params }: Prop) => {
    const sectionName = params.slug.replaceAll("-"," ");

    const articles = await getArticles(params.slug);

    return(
        <main className="w-full min-h-[calc(100vh-9.4rem)] h-full pb-16 bg-black/50 flex flex-col items-center justify-center gap-8 sm:gap-6 md:gap-4 lg:gap-2 pt-5">
            <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3 text-white">{sectionName.toUpperCase()}</h1>
            <ArticlesGrid articles={articles}/>
        </main>
    );
}

export default SectionPage;