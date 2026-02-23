import { SectionGrid } from "@/features/faq/components/SectionGrid";
import { getSections } from "@/features/faq/services/content.service";

const FaqPage = async () => {
    const sections = await getSections();

    return (
        <main className="w-full min-h-[calc(100vh-9.4rem)] h-full pb-16 bg-black/50 flex flex-col items-center justify-center gap-8 sm:gap-6 md:gap-4 lg:gap-2 pt-5">
            <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3 text-white">ALL ARTICLES</h1>
            <SectionGrid sections={sections}/>
        </main>
    );
};

export default FaqPage;