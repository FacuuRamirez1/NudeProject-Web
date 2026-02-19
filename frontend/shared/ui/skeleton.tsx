const Skeleton = () => {
    return (
        <div className="
        w-fit font-mono font-bold text-[30px]
        bg-[linear-gradient(90deg,#000_50%,#0000_0)] bg-size-[200%_100%] bg-right
        animate-loader-slide
        
        before:content-['Nude Project...']
        before:px-[5px]
        before:text-transparent
        before:bg-inherit
        before:bg-[linear-gradient(90deg,#fff_50%,#000_0)]
        before:bg-clip-text
        ">
        </div>
    );
};

export default Skeleton