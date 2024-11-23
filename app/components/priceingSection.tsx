'use client'
import { useState } from "react";
import Heading from "./heading";
import PricingCard from "./pricingCard";
import dataPricing from "@/src/constant/priceData";
import { pricingMode } from "@/src/constant/imageInterface";
import { Bold, Computer, ComputerIcon } from "lucide-react";


function PricingSction(){
    let [mode,setmode]=useState<pricingMode>("annually")
    function setModeHanddler(){
        if(mode==="monthly"){setmode(mode="annually")}
        else{
            setmode(mode="monthly")
        }
    }
    return(
        <section id="" className=" flex flex-col  gap-8">
        <div className="mx-auto text-center">
          <Heading text="find your power of your priceing for you paln" />
        </div>
        <div className="flex max-w-[12rem] w-full mx-auto py-1  text-base rounded-lg bg-slate-700 items-center hover:cursor-pointer justify-between px-1">
          <p className={` basis-1/2  capitalize text-lg font-semibold py-2 text-center  tracking-wide rounded-lg cursor-pointer ${mode==="monthly"?"bg-sky-400":"bg-slate-700"} `} onClick={setModeHanddler}>monthly</p>
          <div>
           
            <p className={`basis-1/2  capitalize text-lg font-semibold py-2 px-1  text-center tracking-wide rounded-lg cursor-pointer ${mode==="annually"?"bg-sky-400":"bg-slate-700"} `}onClick={setModeHanddler}>Annually</p>
          </div></div>
          {/* div shoeing the pricing */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center px-4">
            {dataPricing.map((key, index) => (
              <PricingCard key={index} {...key} set={mode} ></PricingCard>
            ))}
          </div>
        
        
      </section>
    )
}
export default PricingSction