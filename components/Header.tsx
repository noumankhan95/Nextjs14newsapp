import Link from "next/link";
import NavLinks from "./Navlinks";
import SearchBox from "./SearchBox";
import Darkmode from "./darkmode";
export default function Header() {
  return (
    <header className="w-full">
      <div className="flex justify-between items-center px-4 py-8 bg-slate-200 dark:bg-slate-600">
        <div className="space-y-1 w-1/4 md:w-1/3 cursor-pointer">
          <div className="w-10 h-2 rounded-md bg-black"></div>
          <div className="w-10 h-2 rounded-md bg-black"></div>
          <div className="w-10 h-2 rounded-md  bg-black"></div>
        </div>
        <div className="font-serif w-3/4 text-left md:text-center md:w-1/3">
          <Link href={"/"}>
            <h1 className="text-5xl md:text-6xl whitespace-nowrap underline underline-offset-8 decoration-orange-500">
              Next News
            </h1>
          </Link>
        </div>
        <div className=" hidden md:flex  items-center justify-end space-x-5 md:w-1/3">
          <Darkmode />
          <span className="dark:bg-orange-400 text-xl bg-blue-600 font-extralight p-2 rounded-full px-3 text-white">
            Subscribe Now
          </span>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center my-2">
        <NavLinks />
      </div>
      <div className="md:flex md:flex-row md:justify-center w-full">
        <SearchBox />
      </div>
    </header>
  );
}
