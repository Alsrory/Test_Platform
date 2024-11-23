import { priceingData } from "@/src/constant/imageInterface";
import { FC, useState } from "react";
import Button from "./Button";
import { Check } from "lucide-react";


interface dataPricing extends priceingData{
    set:string  
    
}

const PricingCard:FC<dataPricing>=({title,describtion,monthlyPrice,annuallyPrice,feature,isMostPopular,postion,set})=>{
    let [ispopuler,setpopuler]=useState<boolean>(true)
    return(
        
        <article  className={` relative rounded-md   hover:bg-slate-700 hover:border-sky-400  space-y-4  py-4 px-6 lg:space-y-6 pt-8  cursor-pointer
         ${isMostPopular?"border border-sky-400":"border border-slate-700"} overflow-hidden`} >
<figure className={` absolute w-72 h-60 bg-sky-600 -z-10 rounded-full blur-3xl opacity-20 -top-11 ${postion==="left"?"-left-8":"-right-8 "}`}/>
           <h1 className="text-base font-bold capitalize">{title}</h1>
           <p className="text-sm text-gray-300/90 py-2">{describtion}</p>
           <h1 className="font-extrabold text-slate-100 text-4xl ">{set==="monthly"?monthlyPrice:annuallyPrice}
           <small className="text-base text-slate-300 font-semibold ps-2">{set==="monthly"?"/month":"/annually"}</small>
           </h1>
           <Button varaints={`${isMostPopular?"primary":"secandry"}`} isFullsize={true}>Buy Now</Button>
           <ul className="space-y-4 ">
           {feature.map((key,index)=>(
            <li key={index} className="text-sm text-gray-300/95 flex  gap-4 items-center">
                <Check className="text-sky-600"/>
                {key}</li>
           ))}
           </ul>

        </article>
    )
}
export default PricingCard