import Image from "next/image";

export const PhraseCard = () => {
    return(
        <div className="flex flex-row bg-[#D9D9D9]/70 h-[75%] w-[60%] rounded-tl-4xl rounded-bl-4xl mt-32">
            <div className="h-full w-[60%] flex flex-col m-auto gap-8 lg:gap-5 justify-center items-center text-[#3E2327]">
                <div className="flex flex-col gap-8 lg:gap-16 w-[85%] font-bold text-end">
                    <p className="indent-4 text-start text-lg font-semibold">
                        The fear is the biggest obstacle for people to dare to do what they want to do. Fear of what others may think, or their friends, or parents, etc...There is more risk in conforming and not being satisfied, than in going for what you belive in.
                    </p>
                    <p className="text-lg font-semibold mr-4">
                        by artists, for artists.
                    </p>
                </div>
            </div>
            <div className="h-full w-40%">
                <Image src="/lilyatchy.jpg" alt="Bruno and Alex" width="365" height="600"/>
            </div>
        </div>
    );
};