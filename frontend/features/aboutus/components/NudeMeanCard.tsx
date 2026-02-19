import Image from "next/image"

export const NudeMeanCard = () => {
    return (
        <div className="relative flex flex-col w-[40%] h-full bg-[#D9D9D9]/40 overflow-hidden">
            <Image
                src="/nude-means.jpg"
                alt="Nude Means background"
                fill
                unoptimized
                className="object-cover -z-10"
            />
            <div className="relative z-10 flex flex-col items-center justify-between h-full text-white py-5">
                <div className="flex flex-row justify-center items-end gap-2">
                    <Image src="/NP-logoNude.png" height={100} width={150} alt="Project Means Background"/>
                    <p className="text-[#492A23] text-2xl font-bold mb-2">MEAN</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <h3 className="text-[#492A23] text-7xl font-serif">Freedom</h3>
                    <p className="indent-4 text-[#492A23] text-md font-medium px-4">
                        No need to follow the traditional path and being able to create for yourself the life you want. Always following your passion.
                    </p>
                </div>
            </div>
        </div>
    );
};