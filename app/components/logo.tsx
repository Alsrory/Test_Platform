import Link from "next/link";
import Image from "next/image";
function Logo (){
    return (
        <Link href={"/"} className="flex items-end gap-4">
         
         <Image  src='/certificate.png' width={40} height={40} alt="logo" className=" rounded-full  "/>
             <div className="relative flex rounded-full bg-slate-900/50 ">
          
            <h1 className="capitalize text-white text-xl font-bold tracking-wide">   test </h1>
            <div className="mt-4 ml-1 h-2 w-2 rounded-full bg-sky-300"/>
             </div>
           
           </Link> 
           
       
    )
}
export default Logo;