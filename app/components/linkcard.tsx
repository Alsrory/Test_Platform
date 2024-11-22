import { links } from "@/src/constant/imageInterface"
import Link from "next/link"
import { FC } from "react"

interface x extends links{}
  export const Navcard:FC<x>=({linkName,linkUrl})=>{
    return(
      <>
      <Link href={linkUrl} className=" text-sm font-semibold tracking-wide a text-slate-200">{linkName}</Link>
      </> )
    }