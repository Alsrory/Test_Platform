  import Link from "next/link";
import Logo from "./logo";
// import { navlinks } from "@/src/constant/navlinks";
import Mobilenav from "./mobilenav";
import { links } from "@/src/constant/imageInterface";
import { FC } from "react";
import  { navLinks } from "@/src/constant/navlinks";
import { Navcard } from "./linkcard";
 
    function Nav(){

    
     return (
      <div className=" top-0 fixed left-0 w-full  bg-slate-900/50  z-30 backdrop-blur-md ">
        <div className="relative container py-6 px-2  flex justify-between   ">
          <Logo></Logo>
          {/* navigtion desktop */}
          <nav className="hidden md:flex gap-8 capitalize  ">
            {navLinks.map((link,index)=>(
              <Navcard 
              key={index}
           {...link}/>
            
           ) )}
        
          </nav>
          {/* end navigation desktop  */}

        <Mobilenav></Mobilenav>
        </div>
       
      </div>
  )
    }
    
    
    export default Nav ;
