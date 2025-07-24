"use client";
import { navLinks } from "@/src/constant/navlinks";
import { Key, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Navcard } from "./linkcard";

function Mobilenav() {
  const [isOpen, setIsopen] = useState<boolean>(false);
  function toggleMenu() {
    setIsopen(!isOpen);
  }
  return (
    <>
      <div
        className="flex md:hidden cursor-pointer md:cursor-none "
        onClick={toggleMenu}
      >
        {isOpen ? <X /> : <Menu />}

        <figure
          className={`fixed flex flex-col content-center z-[101] items-start pt-8 pb-8 rounded-md right-0 origin-top top-0 w-[60vw] max-w-xs  h-[70vh] bg-slate-700 p-2 transition-all A
        ${isOpen ? "visible opacity-100 scale-y-100 " : "hidden opacity-0"}`}
        >
          <nav className="w-full h-full flex flex-col  items-end space-y-9 capitalize font-normal tracking-wide p-10">
            {/* {navlinks.map((link,index)=>
               <Link href={'/'} 
             key={index}
              className="py1 transition-all rounded-md hover:bg-slate-600 hover:text-sky-400" onClick={toggleMenu}> {link }</Link>
                )
            } */}
            <button 
                className="p-3 text-slate-100 hover:bg-primary bg-gray-500 transition-all duration-300 
                hover:rotate-90 rounded-md hover:bg-slate-600/30 active:scale-95" 
                onClick={toggleMenu}
            >
                <X size={28} />  
            </button>
          <hr className=" absolute w-full top-24 right-0  border-t-2 border-gray-400" />
            {navLinks.map((link, index) => (
              <Navcard key={index} {...link} />
            ))}
          </nav>
        </figure>
      </div>
    </>
  );
}
export default Mobilenav;
