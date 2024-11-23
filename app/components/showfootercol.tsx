import { footerColumn } from "@/src/constant/imageInterface"
import { title } from "process"
import { FC } from "react"

  interface column extends footerColumn{
    
 
 }
 
 export const ShowFooterCol:FC<column>=({title,features},)=>{

    return(
        <div className=" flex  flex-col rounded-lg my-8 md:my-4 space-y-1 justify-between  ">
             <h2 className="pb-1 font-semibold">{title}</h2>
            {features.map((item,index)=>(
                <ul className="text-gray-300 text-sm   hover:text-sky-400 cursor-pointer hover:text-transparent" key={index}>
                   <li >{item}</li> 
                </ul>
            ))}
        </div>
    )
            }
export default ShowFooterCol
