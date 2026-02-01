import Np_logo from "@/components/ui/Np_logo";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-[calc(100vh-9.8rem)] m-0 p-0 bg-black/40 text-white flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-start text-left">
          <Np_logo color="#ffffff" w={450} h={110} />
          <p className="text-sm sm:text-base md:text-lg mt-[-28px] font-bold">
            BY ARTIST FOR ARTIST
          </p>
        </div>

        <div className="w-full max-w-md flex flex-row">
          <div className="flex flex-row sm:flex-row justify-between w-full gap-4 text-center">
            <Link
              href="/collections"
              title="COLLECTIONS"
              className="border-b-2 border-white pb-1 sm:w-auto font-bold"
            >
              COLLECTIONS
            </Link>
            <Link
              href="/products"
              title="PRODUCTS"
              className="border-b-2 border-white pb-1 sm:w-auto font-bold"
            >
              VIEW ALL
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
