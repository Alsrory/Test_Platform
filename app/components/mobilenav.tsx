'use client'
import { navLinks,  } from "@/src/constant/navlinks";
import { Key, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Navcard } from "./linkcard";

function Mobilenav(){
    const [isOpen ,setIsopen]=useState<boolean>(false);
    function toggleMenu(){
        setIsopen(!isOpen)
    }
    return(
        <>
        <div className="flex md:hidden cursor-pointer md:cursor-none " onClick={toggleMenu}>
           
            {isOpen?<X/>:<Menu/>}
            
        <figure className={`absolute rounded-md right-2 origin-top top-20 w-auto bg-slate-700 p-2 transition-all z-50
        ${isOpen?"visible opacity-100 scale-y-100 ":"hidden opacity-0"}`}>
            <nav className="w-full h-full flex flex-col space-y-2 capitalize font-normal tracking-wide">
                {/* {navlinks.map((link,index)=>
               <Link href={'/'} 
             key={index}
              className="py-1 transition-all rounded-md hover:bg-slate-600 hover:text-sky-400" onClick={toggleMenu}> {link }</Link>
                )
            } */}
            {navLinks.map((link,index)=>(
              <Navcard 
              key={index}
           {...link}/>
            
           ) )}
                
            </nav>
        </figure>
        </div>
        </>
    )
}
export default Mobilenav;