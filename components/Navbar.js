import Link from "next/link";
import React from "react";

export default function Navbar({ links }) {
  return (
    <div className=" h-[70px] w-screen bg-[url('/navbar.jpg')] bg-cover">
      <div className="pb-1 flex flex-row   ">
        <div className="flex flex-row  px-5 py-5">
          <div className="ml-5 mt-1 px-2 py-2">
            <Link href="/">
              <a>
                <div className="flex flex-row ">
                  <img
                    className="hover:scale-105 duration-200 -mt-5"
                    color="#1da1f2"
                    src="/mlicon.png"
                    height={45}
                    width={45}
                  ></img>
                  <label className="text-sky-400 font-bold px-3 -mt-2 text-lg ">
                    PunchTantra
                  </label>
                </div>
              </a>
            </Link>
          </div>
          <div className="ml-[800px] flex flex-row">
            {links.map((item, index) => {
              return (
                <div
                  key={index}
                  className="transition-all delay-200 py-2 mx-3 px-2 h-10  rounded-lg text-center font-bold bg-transparent text-sky-400  hover:bg-sky-700"
                >
                  <Link className=" px-3 py-2" href={item.link}>
                    <a>{item.title}</a>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* <div className="px-2 py-2 mx-3 h-10 w-20 ml-[120vh] rounded-lg text-center font-bold bg-transparent text-sky-400  hover:bg-sky-700">
            <Link className=" px-3 py-2" href="/">
              <a>Home</a>
            </Link>
          </div>
          <div className=" px-2 py-2   font-bold ml-3 text-center h-10 w-50 rounded-lg  bg-transparent text-sky-400 hover:bg-sky-700">
            <Link href="/">
              <a>Models and Dataset</a>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
