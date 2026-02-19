import Image from "next/image";

export const ProjectMeanCard = () => {
    return (
        <div className="relative flex flex-col w-[40%] h-full bg-[#D9D9D9]/40 overflow-hidden">
            <Image
                src="/projects-means.jpg"
                alt="Projects Means background"
                fill
                unoptimized
                className="object-cover -z-10"
            />
            <div className="relative z-10 flex flex-col items-center justify-between h-full text-white py-5 pt-6">
                <div className="flex flex-row justify-center items-end gap-2">
                    <Image src="/NP-logoProject.png" height={100} width={170} alt="Project Means Background"/>
                    <p className="text-[#492A23] text-2xl font-bold mb-1">MEAN</p>
                </div>
                <div className="flex flex-col justify-center items-center text-center">
                    <h3 className="text-[#492A23] text-7xl font-serif">Process</h3>
                    <p className="indent-4 text-[#492A23] text-md font-medium px-4">
                        The process, it will never end everyday is in creation. An infinite blank canvas where there is always room to create.
                    </p>
                </div>
            </div>
        </div>
    );
};