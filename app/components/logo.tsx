import Link from "next/link";
import Image from "next/image";
function Logo (){
    return (
        <Link href={"/"} className="flex items-end gap-2">
         
         <Image  src='/images/mobile.png' width={40} height={40} alt="logo"/>
             <div className="relative flex ">
          
            <h1 className="capitalize text-white text-xl font-bold tracking-wide">   test </h1>
            <div className="mt-4 ml-1 h-2 w-2 rounded-full bg-sky-300"/>
             </div>
           
           </Link> 
           
       
    )
}
export default Logo;