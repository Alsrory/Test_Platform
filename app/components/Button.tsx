import { FC, ReactNode } from "react";

interface ButtonProps{
    varaints?:"primary"|"secandry"|"outline";
    isFullsize?:boolean;
    children:ReactNode

}
const Button:FC<ButtonProps>=({varaints="primary",isFullsize,children})=>{
    return(
        
        <button className={`btn ${varaints==='primary'?"btn-primary":varaints==="secandry"?"btn-secandery":"btn-outline"} ${isFullsize&&"w-full"}`}>{children}</button>
    )
}
export default Button;