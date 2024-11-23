import { Featues } from "./features"
export interface links{
    linkName:string ,
    linkUrl:string
} 
export interface Clients{
    imageUrl:string,
    alt:string
}
export  interface Feature{
    imageUrl:string,
    alt:string 
    title:string,
    content:string
}
export interface Feature2 extends Feature{
isposition?:boolean
}
export interface priceingData{
    title:string 
    describtion:string 
    monthlyPrice:number
    annuallyPrice:number 
    feature:string[]
    isMostPopular?:boolean
    postion?:"left"|"right"


}
export type pricingMode="monthly"|"annually";

export interface footerColumn{
    title:String 
    features:string[]
}