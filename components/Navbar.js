import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-screen h-[75px] bg-gray-300">
      <div className="pb-1 flex flex-row justify-around shadow-md shadow-blue-200 hover:shadow-blue-400">
        <div className="px-5 py-5 text-lg font-sans font-semibold">Logo</div>
        <div className="flex flex-row px-5 py-5">
          <div className="px-2 py-1 mx-3 rounded-lg hover:bg-yellow-200 transition-all text-lg font-sans font-semibold bg-yellow-100">
            <Link className="px-3 py-2 bg-yellow-300" href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className=" px-2 py-1 mx-3 rounded-lg hover:bg-yellow-200 transition-all text-lg font-sans font-semibold bg-yellow-100">
            <Link href="/">
              <a>Techniques</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
