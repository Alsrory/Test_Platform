import { Feature2 } from "@/src/constant/imageInterface";
import Image from "next/image";
import { FC } from "react";
import Heading from "./heading";


interface cardprpos extends Feature2{}

const CardFeature2:FC<cardprpos>=({imageUrl,title,content,alt ,isposition})=>{
return(
    <article className={`  relative flex flex-col  lg:flex-row items-center px-5 justify-between md:items-start lg:items-start gap-4 lg:gap-10  lg:space-y-8  ${isposition&&"lg:flex-row-reverse"}`}>
        <div className="p-2 md:p-0 ">
        <Image src={imageUrl} width={370} height={370} alt={alt} className=" basis-5/12 shadow-lg w-full  "/></div>
        <div className={`lg:max-w-[40rem]   lg:items-center ${isposition?"lg:pt-9":"lg:pt-20"}`}  >
            <Heading text={title}></Heading>
            <p className=" text-sm   text-slate-300/90 leading-6  tracking-wide   py-1 md:py-2">
                {content}
            </p>
        </div>

    </article>
)

}
export default CardFeature2