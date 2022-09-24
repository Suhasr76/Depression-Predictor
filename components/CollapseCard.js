import { Transition } from "@headlessui/react";
import { useState } from "react";

function CollapseCard({
  title = "Enter the Details here",
  children,
  checkIsOpen = true,
  padding = "py-5",
}) {
  const [isOpen, setIsOpen] = useState(checkIsOpen);

  return (
    <div>
      <div className=" z-5">
        <div
          className={`${padding} inline-block text-xl items-center mb-2 z-5`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span className="text-left text-white font-extrabold pt-10 text-2xl pb-3 pr-2 cursor-pointer">
            {title}
          </span>
          {/* Up Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              isOpen
                ? "h-5 w-5 cursor-pointer inline-block text-basel"
                : "hidden"
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
          {/* Down Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              !isOpen
                ? "h-5 w-5 cursor-pointer inline-block text-basel"
                : "hidden"
            }
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <Transition
          show={isOpen}
          enter="transition-all duration-150 ease-in"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition-all duration-150 ease-in"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <div className="transition-all delay-150 duration-300 overflow-hidden w-full">
            {children}
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default CollapseCard;
