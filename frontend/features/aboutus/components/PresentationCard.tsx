import Image from "next/image"

export const PresentationCard = () => {
    return (
        <div className="flex flex-row bg-[#D9D9D9]/70 h-[75%] w-[60%] rounded-tr-4xl rounded-br-4xl">
            <div className="h-full w-40%">
                <Image src="/bruno-y-alex.jpg" alt="Bruno and Alex" width="365" height="600"/>
            </div>
            <div className="h-full w-[60%] flex flex-col m-auto gap-8 lg:gap-5 justify-center items-center text-[#3E2327]">
                <h2 className="font-bold text-4xl">What is Nude Project?</h2>
                <div className="flex flex-col gap-4 lg:gap-8 w-[85%] font-bold">
                    <p className="indent-4">
                        Nude Project ® is a premium streetwear brand founded in a small dorm room by two friends eager to create something different.
                    </p>
                    <p className="indent-4">
                        We strive for designs that embrace a modern attitude for a creative life, seamlessly blending comfort, minimalism and elegance in every cut. We’re more than just clothing. Nude is a creative platform for the misfits, the outcasts and the wild to express themselves. Our garments aim to inspire the new generation to pursue their passion, orthodoxly or not, by empowering them to create without fear of judgement.
                    </p>
                </div>
            </div>
        </div>
    );
};