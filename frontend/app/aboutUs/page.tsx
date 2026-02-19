import { getStores } from "@/features/aboutus/services/stores.service";
import { PresentationCard } from "@/features/aboutus/components/PresentationCard";
import { NudeMeanCard } from "@/features/aboutus/components/NudeMeanCard";
import { ProjectMeanCard } from "@/features/aboutus/components/ProjectMeanCard";
import { PhraseCard } from "@/features/aboutus/components/PhraseCard";
import { StoresGrid } from "@/features/aboutus/components/StoresGrid";

export async function AboutUs () {

    const stores = await getStores();

    return (
        <main className="w-full h-full pb-16 bg-black/50 flex flex-col items-center justify-center gap-8 sm:gap-6 md:gap-4 lg:gap-2 pt-5 overflow-y-auto scrollbar-hide [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
            <h1 className="font-bold text-5xl mb-6 mt-5 lg:mt-3 text-white">ABOUT US</h1>
            <PresentationCard/>

            <div className="flex flex-col w-screen h-full gap-8 justify-center items-center mt-24">
                <h2 className="font-bold text-4xl text-white">THE MINDSET</h2>
                <div className="flex flex-col lg:flex-row w-[60%] h-130 justify-between">                        
                    <NudeMeanCard/>
                    <ProjectMeanCard/>
                </div>
            </div>

            <PhraseCard/>

            <div className="flex flex-col w-screen h-auto gap-8 justify-center items-center mt-24">
                <h2 className="font-bold text-4xl text-white">STORES</h2>
                <StoresGrid stores={stores}/>
            </div>
        </main>
    );
}

export default AboutUs;