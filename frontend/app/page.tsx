import Np_logo from "@/shared/ui/Np_logo";
import Np_phrase from "@/shared/ui/np_phrase";
import Link from "next/link";

export default function Home() {


  return (
    <div className="w-full min-h-[calc(100vh-9.4rem)] m-0 p-0 bg-black/50 text-white flex flex-col items-center justify-center gap-8">
      <div className="flex flex-col items-start text-left md:mb-7">
        <div className="hidden md:block">
          <Np_logo color="#ffffff" w={450} h={75}/>
        </div>

        <div className="md:hidden">
          <Np_logo color="#ffffff" w={300} h={50} />
        </div>

        <div className="hidden md:block m-0 p-0">
          <Np_phrase w={210}/>
        </div>

        <div className="md:hidden">
          <Np_phrase w={150}/>
        </div>

      </div>

      <div className="w-[80%] md:w-full max-w-md flex flex-row">
        <div className="flex flex-row sm:flex-row justify-between w-full gap-2 lg:gap-4 text-center">
          <Link
            href="/collections"
            title="COLLECTIONS"
            className="border-b-2 border-white hover:scale-105 pb-0 md:pb-1 text-[11px] md:text-2xl font-bold"
          >
            COLLECTIONS
          </Link>
          <Link
            href="/products"
            title="PRODUCTS"
            className="border-b-2 border-white hover:scale-105 pb-0 md:pb-1 text-[11px] md:text-2xl font-bold"
          >
            VIEW ALL
          </Link>
        </div>
      </div>
    </div>
  );
}
